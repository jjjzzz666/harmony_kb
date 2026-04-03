/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit MultimodalAwarenessKit
 */

import { BusinessError, Callback } from './@ohos.base';

/**
 * This module provides the capability to use on screen awareness
 *
 * @namespace onScreen
 * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
 * @since 20 dynamic
 * @since 23 static
 */

declare namespace onScreen {
  /**
   * Enum for page content scenario
   *
   * @enum { int } Scenario
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
  */
  export enum Scenario {
    /**
     * Indicates unknown scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * Indicates article scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ARTICLE = 1,
  }

  /**
   * Enum for control event type
   *
   * @enum { int } EventType
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
  */
  export enum EventType {
    /**
     * Indicates scroll to hook event type
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_TO_HOOK = 1,
  }

  /**
   * Interface for paragraph
   * @interface Paragraph
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Paragraph {
    /**
     * Indicates paragraph hook id
     * @type { ?long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
    /**
     * Indicates paragraph chapter id if paragraph is splited to chapters
     * @type { ?int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    chapterId?: int,
    /**
     * Indicates paragraph title
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * Indicates paragraph text
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    text?: string
  }

  /**
   * Interface for content options
   * @interface ContentOptions
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ContentOptions {
    /**
     * Indicates the windowId which need to gather, full screen window is specified by default
     * @type { ?int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId?: int,
    /**
     * Indicates whether content understanding is required, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentUnderstand?: boolean,
    /**
     * Indicates whether page link is required, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: boolean,
    /**
     * Indicates whether only text needs to be processed to return paragraphs, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    textOnly?: boolean,
  }

  /**
   * Interface for pageContent
   * @interface PageContent
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface PageContent {
    /**
     * Indicates window id corresponding to the content
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Indicates session id corresponding to the content
     * @type { long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * Indicates bundle name corresponding to the content
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string,
    /**
     * Indicates scenario of the content
     * @type { ?Scenario }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    scenario?: Scenario,
    /**
     * Indicates title if content understand is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * Indicates content if content understand is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    content?: string,
    /**
     * Indicates page link if page link is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: string,
    /**
     * Indicates paragraphs if text only is needed
     * @type { ?Paragraph[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    paragraphs?: Paragraph[],
  }

  /**
   * Interface for control event
   * @interface ControlEvent
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ControlEvent {
    /**
     * Indicates controlled window id
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Indicates session id 
     * @type { long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * Indicates control event type
     * @type { EventType }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    eventType: EventType,
    /**
     * Indicates controlled hookid for specific event type and specific session id
     * @type { ?long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
  }

  /**
   * Get page content
   * 
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { ContentOptions } [options] - Indicates options to get page content
   * @returns { Promise<PageContent> } Indicates the promise which carrys retrieved page content
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @throws { BusinessError } 34000003 - The window ID is invalid. Possible causes: 1. window id is not passed
   *     <br> when screen is splited. 2. passed window id is not on screen or floating.
   * @throws { BusinessError } 34000004 - The page is not ready.
   * @throws { BusinessError } 34000006 - The request timed out.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getPageContent(options?: ContentOptions): Promise<PageContent>;

  /**
   * Send control event
   * 
   * @permission ohos.permission.SIMULATE_USER_INPUT
   * @param { ControlEvent } event - Indicates the control event sent to the screen
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.SIMULATE_USER_INPUT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000005 - The target is not found.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function sendControlEvent(event: ControlEvent): Promise<void>;

  /**
   * Interface for onscreen awareness capabilities,
   * includes page content, page links, and text selection event subscribe.
   *
   * @interface OnscreenAwarenessCap
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessCap {
    /**
     * Indicates a set of related capabilities.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capList?: string[];
    /**
     * Indicates a set of abilities, categorized by group.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    groupId?: string;
  }

  /**
   * Interface for scenario-specific screen information,
   * provides parameters to access screen content and links by window ID.
   *
   * @interface OnscreenAwarenessOptions
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessOptions {  
    /**
     * Awareness parameters in custom key-value pairs format.
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    parameters?: Record<string, Object>;
  }

  /**
   * Enum indicates page information collection strategy.
   *
   * @enum { int } CollectStrategy
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum CollectStrategy {  
    /**
     * Indicates that collection is allowed.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW = 1 << 0,
    /**
     * Indicates split-screen window display.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SPLIT_SCREEN = 1 << 1,
    /**
     * Indicates that auto collection is not supported.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNSUPPORTED_APP = 1 << 2,
    /**
     * Indicates private window mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PRIVATE_WINDOW = 1 << 3,
    /**
     * Indicates ANCO app.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANCO_APP = 1 << 4,
    /**
     * Indicates whether the data collection policy is configurable for the app.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW_USER_CHANGE = 1 << 5,
    /**
     * Indicates whether data collection is allowed for allowlisted apps.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BUSINESS_APP = 1 << 6,
    /**
     * Indicates a floating window display.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FLOAT_SCREEN = 1 << 7,
    /**
     * Indicates a picture-in-picture (PiP) window display.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PIP_SCREEN = 1 << 8,
    /**
     * Indicates that the current page is the launcher.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LAUNCHER = 1 << 9
  }

  /**
   * Interface provides comprehensive page information,
   * covering content, links, images, and other data attributes.
   *
   * @interface AwarenessItem
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AwarenessItem {  
    /**
     * Indicates data content details with attributes like title, body, and links.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    itemInfo: Record<string, Object>;
  }

  /**
   * Interface provides detailed entity information for a page,
   * including content, links, image and other entities.
   *
   * @interface EntityInfo
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface EntityInfo {  
    /**
     * Indicates the entity name.
     *
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityName: string;
    /**
     * Indicates entity content details with attributes like title, body, links.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo: Record<string, Object>;
  }
  
  /**
   * Interface for onscreen awareness response info.
   *
   * @interface OnscreenAwarenessInfo
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessInfo {  
    /**
     * Indicates the error code.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    resultCode: int;
    /**
     * Indicates timestamp of entering a specific page.
     *
     * @type { long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    timestamp: long;
    /**
     * Indicates the UID of an application.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    uid?: string;
    /**
     * Indicates the bundle name of the target application.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;
    /**
     * Indicates the application name.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appName?: string;
    /**
     * Indicates the mini program ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramId?: string;
    /**
     * Indicates the mini program name.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramName?: string;
    /**
     * Indicates the app index of the target application.
     *
     * @type { ?int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appIndex?: int;
    /**
     * Indicates the page id.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageId?: string;
    /**
     * Indicates the sample id for a specific page.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sampleId?: string;
    /**
     * Indicates the collection strategy, a bitwise OR combination of {@link CollectStrategy}.
     *
     * @type { ?int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    collectStrategy?: int;
    /**
     * Indicates the display id of the screen, the default displayId is specified by default.
     *
     * @type { ?long }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;
    /**
     * Indicates the windowId which need to gather, full screen window is specified by default.
     *
     * @type { ?int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    windowId?: int;
    /**
     * Indicates the language of the text on the page.
     *
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    languageInfo?: string;
    /**
     * Indicates the tag collection for the functional classification of page entities.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageTags?: string[];
    /**
     * Interface for onscreen awareness data items list information.
     *
     * @type { ?AwarenessItem[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    items?: AwarenessItem[];
    /**
     * Interface for onscreen awareness entity info array.
     *
     * @type { ?EntityInfo[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo?: EntityInfo[];
  }

  /**
   * Enable active onscreen awareness, and subscribes to screen awareness results.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
   * @param { Callback<OnscreenAwarenessInfo[]> } callback - Indicates the callback for obtaining
   *     <br> corresponding capability data.
   * @param { OnscreenAwarenessOptions } [options] - Indicates options to get page content.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function subscribe(capability: OnscreenAwarenessCap,
                     callback: Callback<OnscreenAwarenessInfo[]>, 
                     options?: OnscreenAwarenessOptions): void;

  /**
   * Disable active onscreen awareness, and unsubscribes to screen awareness results.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
   * @param { Callback<OnscreenAwarenessInfo[]> } [callback] - Indicates the callback
   *     <br> for obtaining corresponding capability data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unsubscribe(capability: OnscreenAwarenessCap, callback?: Callback<OnscreenAwarenessInfo[]>): void;

  /**
   * Single trigger to acquire page content and get onscreen awareness result.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
   * @param { OnscreenAwarenessOptions } [options] - Indicates options to get page content.
   * @returns { Promise<OnscreenAwarenessInfo> } Indicates the promise which carries retrieved page content.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function trigger(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo>;

  /**
   * Single capture to acquire on-screen information and page content.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
   * @param { OnscreenAwarenessOptions } [options] - Indicates options to get page content.
   * @returns { Promise<OnscreenAwarenessInfo[]> } Indicates the promise which carries retrieved page content.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function capture(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;
  /**
   * Single-trigger screen interaction.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
   * @param { OnscreenAwarenessOptions } [options] - Indicates options to get page content.
   * @returns { Promise<OnscreenAwarenessInfo[]> } Indicates the promise which carries retrieved page content.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function interact(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;

   /**
    * Single-trigger screen analysis and data extraction.
    *
    * @permission ohos.permission.GET_SCREEN_CONTENT
    * @param { OnscreenAwarenessCap } capability - Indicates the capability set or specific capability.
    * @param { OnscreenAwarenessOptions } [options] - Indicates options to get page content.
    * @returns { Promise<OnscreenAwarenessInfo[]> } Indicates the promise which carries retrieved page content.
    * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
    *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
    * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
    * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
    *     <br> device capabilities.
    * @throws { BusinessError } 34000001 - Service exception.
    * @throws { BusinessError } 34000002 - The application or page is not supported.
    * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   function apperceive(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;

  /**
   * Interface indicates whether reading information from the current screen is permitted.
   *
   * @interface ReadingScreenPermissionStatus
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ReadingScreenPermissionStatus {  
    /**
     * Indicates whether the screen is readable.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingState: int;
    /**
     * Reasons for the screen being unreadable.
     * If the screen cannot be read, the corresponding status code will be returned.
     *
     * @type { ?int}
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingCode?: int;
  }
  
  /**
   * Register screen-reading permission listener.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } callback - Indicates the callback
   *     <br> for obtaining corresponding capability data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onReadingScreenPermissionListener(callback: Callback<ReadingScreenPermissionStatus>): void;

  /**
   * Unregister screen-read permission listener.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } [callback] - Indicates the callback
   *     <br> for obtaining corresponding capability data.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A nonsystem application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void;
}
export default onScreen;