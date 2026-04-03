'use static';
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
 * @file
 * @kit ArkUI
 */
import { ResourceStr } from '@ohos.arkui.component';
import { NavPathStack, NavigationOperation, NavBar } from '@ohos.arkui.component';
import { UIContext } from '@ohos.arkui.UIContext';
import UIAbilityContext from './application/UIAbilityContext';
import { Callback } from './@ohos.base';
import { NavDestinationMode } from '@ohos.arkui.component';
import { HeightBreakpoint, WidthBreakpoint } from '@ohos.arkui.component';
import { Size } from '@ohos.arkui.node';
import { Axis } from '@ohos.arkui.component';
/**
 * Register callbacks to observe ArkUI behavior.
 *
 * @namespace uiObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace uiObserver {
    
    /**
     * NavDestination state.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export enum NavDestinationState {
        
        /**
         * When the NavDestination is displayed.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_SHOWN = 0,
        
        /**
         * When the NavDestination is hidden.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_HIDDEN = 1,
        /**
         * When the NavDestination appear.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_APPEAR = 2,
        /**
         * When the NavDestination disappear.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_DISAPPEAR = 3,
        /**
         * Before the NavDestination is displayed.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_WILL_SHOW = 4,
        /**
         * Before the NavDestination is hidden.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_WILL_HIDE = 5,
        /**
         * Before the NavDestination is appeared.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_WILL_APPEAR = 6,
        /**
         * Before the NavDestination is disappeared.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_WILL_DISAPPEAR = 7,
        /**
         * When the NavDestination is active.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_ACTIVE = 8,
        /**
         * When the NavDestination is inactive.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_INACTIVE = 9,
        /**
         * When back press event happened in NavDestination.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_BACKPRESS = 100
    }
    
    /**
     * Router page state.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export enum RouterPageState {
        
        /**
         * When the router page create.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ABOUT_TO_APPEAR = 0,
        
        /**
         * When the router page destroy.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ABOUT_TO_DISAPPEAR = 1,
        
        /**
         * When the router page show.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_PAGE_SHOW = 2,
        
        /**
         * When the router page hide.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_PAGE_HIDE = 3,
        
        /**
         * When back press event happened in the router page.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_BACK_PRESS = 4
    }
    /**
     * ScrollEvent type.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export enum ScrollEventType {
        /**
         * When the ScrollEvent start.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        SCROLL_START = 0,
        /**
         * When the ScrollEvent stop.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        SCROLL_STOP = 1
    }
    /**
     * TabContent state.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export enum TabContentState {
        /**
         * When the TabContent is shown.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_SHOW = 0,
        /**
         * When the TabContent is hidden.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        ON_HIDE = 1
    }
    
    /**
     * NavDestination info.
     *
     * @interface NavDestinationInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface NavDestinationInfo {
        
        /**
         * Navigation id.
         *
         * @type { ResourceStr }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        navigationId: ResourceStr;
        
        /**
         * Changed NavDestination name.
         *
         * @type { ResourceStr }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        name: ResourceStr;
        
        /**
         * Changed NavDestination state.
         *
         * @type { NavDestinationState }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        state: NavDestinationState;
        /**
         * NavDestination index.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        index: int;
        /**
         * The detailed parameter of NavDestination.
         *
         * @type { ?Object }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        param?: Object;
        /**
         * Auto-generated navDestination id, which is different from common property id of Component.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        navDestinationId: string;

        /**
         * NavDestination uniqueId.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        uniqueId?: int;

        /**
         * NavDestination mode.
         *
         * @type { NavDestinationMode }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        mode?: NavDestinationMode;

        /**
         * NavDestination size.
         *
         * @type { ?Size }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        size?: Size;
    }
    /**
     * Navigation info.
     *
     * @interface NavigationInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface NavigationInfo {
        /**
         * Navigation id.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        navigationId: string;
        /**
         * Navigation path stack.
         *
         * @type { NavPathStack }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        pathStack: NavPathStack;
        /**
        * The uniqueId of the navigation.
        *
        * @type { ?int }
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        uniqueId?: int;
    }
    /**
     * ScrollEvent info.
     *
     * @interface ScrollEventInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ScrollEventInfo {
        /**
         * Scroll id.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        id: string;
        /**
         * The uniqueId of the scrollable component.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        uniqueId: int;
        /**
         * Changed ScrollEvent type.
         *
         * @type { ScrollEventType }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        scrollEvent: ScrollEventType;
        /**
         * Changed ScrollEvent offset.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offset: double;
        /**
         * Scroll axis.
         *
         * @type { ?Axis }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 24 static
         */
        axis?: Axis;
    }
    /**
     * TabContent info.
     *
     * @typedef TabContentInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface TabContentInfo {
        /**
         * TabContent id.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        tabContentId: string;
        /**
         * TabContent uniqueId.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        tabContentUniqueId: int;
        /**
         * The state of TabContent.
         *
         * @type { TabContentState }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        state: TabContentState;
        /**
         * The index of TabContent in Tabs.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        index: int;
        /**
         * Tabs id.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        id: string;
        /**
         * Tabs uniqueId.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        uniqueId: int;

       /**
         * The last focus index of TabContent in Tabs.
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        lastIndex?: int;
    }
  /**
   * Text change event info
   *
   * @interface TextChangeEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export interface TextChangeEventInfo {
    /**
     * The id of text field component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    id: string;

    /**
     * The uniqueId of the text field component.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    uniqueId: int;

    /**
     * Current content of text field component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    content: string;
  }
    /**
     * observer options.
     *
     * @interface ObserverOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ObserverOptions {
        /**
         * component id.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        id: string;
    }
    
    /**
     * Router page info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export class RouterPageInfo {
        
        /**
         * The context of the changed router page.
         *
         * @type { UIAbilityContext | UIContext }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        context: UIAbilityContext | UIContext;
        
        /**
         * The index of the changed router page in router stack.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        index: int;
        
        /**
         * The name of the changed router page.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        name: string;
        
        /**
         * The path of the changed router page.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        path: string;
        
        /**
         * The state of the changed router page.
         *
         * @type { RouterPageState }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        state: RouterPageState;
        /**
         * The unique identifier of the router page.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        pageId: string;

        /**
         * The size of the router page.
         *
         * @type { ?Size }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        size?: Size;
    }
    /**
     * Density info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export class DensityInfo {
        /**
         * The context of the changed screen density.
         *
         * @type { UIContext }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        context: UIContext;
        /**
         * The changed screen density.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        density: double;
    }
    /**
     * NavDestination switch info
     *
     * @interface NavDestinationSwitchInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface NavDestinationSwitchInfo {
        /**
         * The context of the navigation operation.
         *
         * @type { UIAbilityContext | UIContext }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        context: UIAbilityContext | UIContext;
        /**
         * From navigation content info.
         *
         * @type { NavDestinationInfo | NavBar }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        from: NavDestinationInfo | NavBar;
        /**
         * To navigation content info.
         *
         * @type { NavDestinationInfo | NavBar }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        to: NavDestinationInfo | NavBar;
        /**
         * The operation type.
         *
         * @type { NavigationOperation }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        operation: NavigationOperation;
    }
    /**
     * Defines the window size layout breakpoint information.
     * This interface provides the current breakpoint classification of the window's width and height
     * based on the configured breakpoint thresholds.
     *
     * @interface WindowSizeLayoutBreakpointInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    export interface WindowSizeLayoutBreakpointInfo { 
        /**
         * The width breakpoint classification of the current window.
         * This value indicates which width category the window currently falls into based on
         * the configured width breakpoint thresholds.
         *
         * @type { WidthBreakpoint }
         * @readonly
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 24 static
         */
        readonly widthBreakpoint: WidthBreakpoint;
        /**
         * The height breakpoint classification of the current window.
         * This value indicates which height category the window currently falls into based on
         * the configured height breakpoint thresholds and aspect ratio.
         *
         * @type { HeightBreakpoint }
         * @readonly
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 24 static
         */
        readonly heightBreakpoint: HeightBreakpoint;
    }
    /**
     * Indicates the options of NavDestination switch.
     *
     * @interface NavDestinationSwitchObserverOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface NavDestinationSwitchObserverOptions {
        /**
         * The navigationId that need observation
         *
         * @type { ResourceStr }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        navigationId: ResourceStr;
    }
    /**
     * Registers a callback function to be called when the navigation destination is updated.
     *
     * @param { NavDestinationSwitchObserverOptions } options - The options object.
     * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation
     *     destination is updated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onNavDestinationUpdate(
        options: NavDestinationSwitchObserverOptions,
        callback: Callback<NavDestinationInfo>
    ): void;

    /**
     * Removes a callback function that was previously registered with `onNavDestinationUpdate()`.
     *
     * @param { NavDestinationSwitchObserverOptions } options - The options object.
     * @param { Callback<NavDestinationInfo> } callback - The callback function to remove. If not provided,
     *     all callbacks for the given event type and navigation ID will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offNavDestinationUpdate(
        options: NavDestinationSwitchObserverOptions,
        callback?: Callback<NavDestinationInfo>
    ): void;
    
    /**
     * Registers a callback function to be called when the navigation destination is updated.
     *
     * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation
     *     destination is updated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onNavDestinationUpdate(callback: Callback<NavDestinationInfo>): void;
    
    /**
     * Removes a callback function that was previously registered with `onNavDestinationUpdate()`.
     *
     * @param { Callback<NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all
     *     callbacks for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offNavDestinationUpdate(callback?: Callback<NavDestinationInfo>): void;
    /**
     * Registers a callback function to be called when the scroll event starts or stops.
     *
     * @param { ObserverOptions } options - The options object.
     * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event
     *     start or stop.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onScrollEvent(options: ObserverOptions, callback: Callback<ScrollEventInfo>): void;
    /**
     * Removes a callback function that was previously registered with `onScrollEvent()`.
     *
     * @param { ObserverOptions } options - The options object.
     * @param { Callback<ScrollEventInfo> } callback - The callback function to remove. If not provided, all callbacks
     *     for the given event type and scroll ID will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offScrollEvent(options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void;
    /**
     * Registers a callback function to be called when the scroll event starts or stops.
     *
     * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event
     *     start or stop.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onScrollEvent(callback: Callback<ScrollEventInfo>): void;
    /**
     * Removes a callback function that was previously registered with `onScrollEvent()`.
     *
     * @param { Callback<ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
     *     callbacks for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offScrollEvent(callback?: Callback<ScrollEventInfo>): void;
    
    /**
     * Registers a callback function to be called when the router page is updated.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { Callback<RouterPageInfo> } callback - The callback function to be called when the router page is
     *     updated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onRouterPageUpdate(context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>): void;
    
    /**
     * Removes a callback function that was previously registered with `onRouterPageUpdate()`.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { Callback<RouterPageInfo> } [callback] - The callback function to remove. If not provided, all
     *     callbacks for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offRouterPageUpdate(context: UIAbilityContext | UIContext, callback?: Callback<RouterPageInfo>): void;

    /**
     * Registers a callback function to be called when the screen density is updated.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<DensityInfo> } callback - The callback function to be called when the screen density
     *     is updated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onDensityUpdate(context: UIContext, callback: Callback<DensityInfo>): void;
    /**
     * Removes a callback function that was previously registered with `on()`.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<DensityInfo> } [callback] - The callback function to remove. If not provided, all callbacks
     *     for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offDensityUpdate(context: UIContext, callback?: Callback<DensityInfo>): void;
    /**
     * Registers a callback function to be called when the draw command will be drawn.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onWillDraw(context: UIContext, callback: Callback<void>): void;
    /**
     * Removes a callback function that was previously registered with `on()`.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks
     *     for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offWillDraw(context: UIContext, callback?: Callback<void>): void;
    /**
     * Registers a callback function to be called when the layout is done.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<void> } callback - The callback function to be called when the layout is done.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onDidLayout(context: UIContext, callback: Callback<void>): void;
    /**
     * Removes a callback function that was previously registered with `on()`.
     *
     * @param { UIContext } context - The context scope of the observer.
     * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks
     *     for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offDidLayout(context: UIContext, callback?: Callback<void>): void;
    /**
    * Registers a callback function to be called when the tabContent is showed or hidden.
    *
    * @param { ObserverOptions } options - The options object.
    * @param { Callback<TabContentInfo> } callback - The callback function to be called when when the tabContent is
    *     showed or hidden.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export function onTabContentUpdate(options: ObserverOptions, callback: Callback<TabContentInfo>): void;
    /**
    * Removes a callback function that was previously registered with `on()`.
    *
    * @param { ObserverOptions } options - The options object.
    * @param { Callback<TabContentInfo> } [callback] - The callback function to remove. If not provided, all callbacks for
    *     the given event type and Tabs ID will be removed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export function offTabContentUpdate(options: ObserverOptions, callback?: Callback<TabContentInfo>): void;
    /**
    * Registers a callback function to be called when the tabContent is showed or hidden.
    *
    * @param { Callback<TabContentInfo> } callback - The callback function to be called when the tabContent is
    *     showed or hidden.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export function onTabContentUpdate(callback: Callback<TabContentInfo>): void;
    /**
    * Removes a callback function that was previously registered with `on()`.
    *
    * @param { Callback<TabContentInfo> } [callback] - The callback function to remove. If not provided, all callbacks
    *     for the given event type will be removed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export function offTabContentUpdate(callback?: Callback<TabContentInfo>): void;
    /**
     * Registers a callback function to be called when the navigation switched to a new navDestination.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { Callback<NavDestinationSwitchInfo> } callback - The callback function to be called when the navigation
     *     switched to a new navDestination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onNavDestinationSwitch(
        context: UIAbilityContext | UIContext,
        callback: Callback<NavDestinationSwitchInfo>
    ): void;
    /**
     * Removes a callback function that was previously registered with `onNavDestinationSwitch()`.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { Callback<NavDestinationSwitchInfo> } [callback] - The callback function to remove.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offNavDestinationSwitch(
        context: UIAbilityContext | UIContext,
        callback?: Callback<NavDestinationSwitchInfo>
    ): void;
    /**
     * Registers a callback function to be called when the navigation switched to a new navDestination.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { NavDestinationSwitchObserverOptions } observerOptions - Options.
     * @param { Callback<NavDestinationSwitchInfo> } callback - The callback function to be called when the
     *     navigation switched to a new navDestination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function onNavDestinationSwitch(
        context: UIAbilityContext | UIContext,
        observerOptions: NavDestinationSwitchObserverOptions,
        callback: Callback<NavDestinationSwitchInfo>
    ): void;
    /**
     * Removes a callback function that was previously registered with `onNavDestinationSwitch()`.
     *
     * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
     * @param { NavDestinationSwitchObserverOptions } observerOptions - Options.
     * @param { Callback<NavDestinationSwitchInfo> } [callback] - The callback function to remove. If not provided,
     *     all callbacks for the given event type will be removed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function offNavDestinationSwitch(
        context: UIAbilityContext | UIContext,
        observerOptions: NavDestinationSwitchObserverOptions,
        callback?: Callback<NavDestinationSwitchInfo>
    ): void;
}
export default uiObserver;
