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
 * @file Defines the atomicService web component
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * Declare Component AtomicServiceWeb.
 *
 * @struct { AtomicServiceWeb }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Component
export declare struct AtomicServiceWeb {
  /**
   * The address of the web page to be displayed.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  src: ResourceStr;
  /**
   * Sets the controller of the AtomicServiceWeb.
   *
   * @type { AtomicServiceWebController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @ObjectLink
  controller: AtomicServiceWebController;
  /**
   * Sets how to load HTTP and HTTPS content.
   *
   * @type { ?MixedMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  mixedMode?: MixedMode;
  /**
   * Sets the dark mode of Web.
   *
   * @type { ?WebDarkMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  darkMode?: WebDarkMode;
  /**
   * Sets whether to enable forced dark algorithm when the web is in dark mode.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  forceDarkAccess?: boolean;
  /**
   * Sets the nested scroll options.
   *
   * @type { ?(NestedScrollOptions | NestedScrollOptionsExt) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamiconly
   */
  @Prop
  nestedScroll?: NestedScrollOptions | NestedScrollOptionsExt;
  /**
   * The navPathStack to control page route in Navigation and NavDestination.
   *
   * @type { ?NavPathStack }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  navPathStack?: NavPathStack;
  /**
   * The callback method to invoke after page is back or destroyed if postMessage() is called in H5 page.
   *
   * @type { ?Callback<OnMessageEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onMessage?: Callback<OnMessageEvent>;
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @type { ?Callback<OnErrorReceiveEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onErrorReceive?: Callback<OnErrorReceiveEvent>;
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @type { ?Callback<OnHttpErrorReceiveEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onHttpErrorReceive?: Callback<OnHttpErrorReceiveEvent>;
  /**
   * Triggered at the begin of web page loading.
   *
   * @type { ?Callback<OnPageBeginEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageBegin?: Callback<OnPageBeginEvent>;
  /**
   * Triggered at the end of web page loading.
   *
   * @type { ?Callback<OnPageEndEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageEnd?: Callback<OnPageEndEvent>;
  /**
   * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
   * This callback can not use the interface about manipulating web pages.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onControllerAttached?: Callback<void>;
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @type { ?OnLoadInterceptCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onLoadIntercept?: OnLoadInterceptCallback;
  /**
   * Triggered when the page loading progress changes.
   *
   * @type { ?Callback<OnProgressChangeEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onProgressChange?: Callback<OnProgressChangeEvent>;
}

/**
 * Message event after page is back or destroyed if postMessage() is called in H5 page.
 *
 * @typedef OnMessageEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnMessageEvent {
  /**
   * The message data list.
   *
   * @type { object[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  data: object[];
}

/**
 * Error receive event when the web page receives a web resource loading error.
 *
 * @typedef OnErrorReceiveEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * Web resource error of event.
   *
   * @type { WebResourceError }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  error: WebResourceError;
}

/**
 * Http error receive event when the web page receives a web resource loading HTTP error.
 *
 * @typedef OnHttpErrorReceiveEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnHttpErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * Web resource response of event.
   *
   * @type { WebResourceResponse }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  response: WebResourceResponse;
}

/**
 * Page begin event at the begin of web page loading.
 *
 * @typedef OnPageBeginEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageBeginEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * Page end event at the end of web page loading.
 *
 * @typedef OnPageEndEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageEndEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * Load intercept event when the resources loading is intercepted.
 *
 * @typedef OnLoadInterceptEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnLoadInterceptEvent {
  /**
   * Web resource request of event.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  data: WebResourceRequest;
}

/**
 * Progress change event when the page loading progress changes.
 *
 * @typedef OnProgressChangeEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnProgressChangeEvent {
  /**
   * The new progress of the page.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  newProgress: number;
}

/**
 * Provides methods for controlling the AtomicServiceWeb controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Observed
export declare class AtomicServiceWebController {
  /**
   * Gets the default user agent.
   *
   * @returns { string } Return user agent information.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getUserAgent(): string;

  /**
   * Get custom user agent.
   *
   * @returns { string } Get custom User agent information.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getCustomUserAgent(): string;

  /**
   * Set custom user agent.
   *
   * @param { string } userAgent - User custom agent information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  setCustomUserAgent(userAgent: string): void;

  /**
   * Refreshes the current URL.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  refresh(): void;

  /**
   * Goes forward in the history of the web page.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  forward(): void;

  /**
   * Goes back in the history of the web page.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backward(): void;

  /**
   * Checks whether the web page can go forward.
   *
   * @returns { boolean } True if the web page can go forward else false.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessForward(): boolean;

  /**
   * Checks whether the web page can go back.
   *
   * @returns { boolean } True if the web page can go back else false.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessBackward(): boolean;

  /**
   * Checks whether the web page can go back or forward the given number of steps.
   *
   * @param { number } step - The number of steps.
   * @returns { boolean } True if the web page can go back else false.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessStep(step: number): boolean;

  /**
   * Loads the URL.
   *
   * @param { string | Resource } url - The URL to load.
   * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *    AtomicServiceWeb component.
   * @throws { BusinessError } 17100002 - Invalid url.
   * @throws { BusinessError } 17100003 - Invalid resource path or file type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;
}

/**
 * Defines the Web's request/response header.
 *
 * @typedef WebHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface WebHeader {
  /**
   * Gets the key of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerKey: string;

  /**
   * Gets the value of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerValue: string;
}

/**
 * Callback for OnLoadIntercept
 *
 * @typedef { function } OnLoadIntercept Function.
 * @param { OnLoadInterceptEvent } event - the load intercept event when the resources loading is intercepted.
 * @returns { boolean } True if the load is intercepted else false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean;
