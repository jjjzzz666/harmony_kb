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
import { Component } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { ResourceColor, ResourceStr, Length } from '@ohos.arkui.component';
import { Builder } from '@ohos.arkui.component';
import { LengthMetrics } from 'arkui.Graphics';
/**
 * Declare Component ProgressButton
 * @struct { ProgressButton }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ProgressButton {
  /**
   * Sets the content when progress.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  progress: double;
  /**
   * Sets the ProgressButton content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  content: ResourceStr;
  /**
   * Sets the ProgressButton progressButtonWidth.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  progressButtonWidth?: Length;
  /**
   * Sets the ProgressButton clickCallback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clickCallback: () => void;
  /**
   * Sets the ProgressButton enable state.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  enable: boolean;
  /**
   * Set Color options of the ProgressButton.
   *
   * @type { ?ProgressButtonColorOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  colorOptions?: ProgressButtonColorOptions;
  /**
   * Set border rounded corner radius of progress.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  progressButtonRadius?: LengthMetrics;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * Declare Color options of the ProgressButton.
 * @typedef ProgressButtonColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ProgressButtonColorOptions {
  /**
   * Set progress color of the ProgressButton.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  progressColor?: ResourceColor;
  /**
   * Set border color of the ProgressButton.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderColor?: ResourceColor;
  /**
   * Set text color of the ProgressButton.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textColor?: ResourceColor;
  /**
   * Set background color of the ProgressButton.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;
}