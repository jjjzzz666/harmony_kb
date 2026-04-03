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
import { AttributeModifier, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from "./builder";

/**
 * Round rect.
 *
 * @interface RRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface RRect {
  /**
   * The X-axis coordinate of the upper left vertex of the round rect, in pixels.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  left: double;

  /**
   * The Y-axis coordinate of the upper left vertex of the round rect, in pixels.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  top: double;

  /**
   * Width of the round rect, in pixels.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  width: double;

  /**
   * Height of the round rect, in pixels.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  height: double;

  /**
   * Radius of the round corner of the round rect, in pixels.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  radius: double;
}

/**
 * Window animation target.
 *
 * @interface WindowAnimationTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface WindowAnimationTarget {
  /**
   * The bundle name of the window animation target.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * The ability name of the window animation target.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  readonly abilityName: string;

  /**
   * The window bounds of the window animation target.
   *
   * @type { RRect }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  readonly windowBounds: RRect;

  /**
   * The mission id of the window animation target.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  readonly missionId: int;
}

/**
 * The RemoteWindowAttribute
 *
 * @extends CommonMethod
 * @interface RemoteWindowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
export declare interface RemoteWindowAttribute extends CommonMethod {
  /**
   * Set the attribute modifier
   *
   * @param { AttributeModifier<RemoteWindowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { RemoteWindowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<RemoteWindowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines RemoteWindow Component.
 *
 * @param { WindowAnimationTarget } target - The target for the window animation.
 * @returns { RemoteWindowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RemoteWindow(
    target: WindowAnimationTarget
): RemoteWindowAttribute;
