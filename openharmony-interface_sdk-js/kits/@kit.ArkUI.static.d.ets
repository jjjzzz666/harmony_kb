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

import promptAction from '@ohos.promptAction';
import { LevelOrder } from '@ohos.promptAction';
import window from '@ohos.window';
import display from '@ohos.display';
import screen from '@ohos.screen';
import screenshot from '@ohos.screenshot';
import uiExtensionHost from '@ohos.uiExtensionHost';
import { ComponentContent } from '@ohos.arkui.node';
import componentSnapshot from '@ohos.arkui.componentSnapshot';
import componentUtils from '@ohos.arkui.componentUtils';
import dragController from '@ohos.arkui.dragController';
import floatingBall from '@ohos.window.floatingBall';
import PiPWindow from '@ohos.PiPWindow';
import { sendTouchEvent, sendKeyEvent, sendMouseEvent } from '@ohos.arkui.Test';
import uiMaterial from '@ohos.arkui.uiMaterial';
export { promptAction, LevelOrder, ComponentContent };

export * from '@ohos.arkui.component';
export * from '@ohos.arkui.stateManagement';
export * from '@ohos.arkui.advanced.Counter';
export * from '@ohos.arkui.advanced.SegmentButton';
export * from '@ohos.arkui.advanced.Chip';
export * from '@ohos.arkui.advanced.ChipGroup';
export * from '@ohos.arkui.advanced.SegmentButtonV2';
export { GETINSPECTORBYKEY as getInspectorByKey, GETINSPECTORTREE as getInspectorTree , SENDEVENTBYKEY as sendEventByKey } from '@ohos.arkui.inspector';

export { window, display, screen, screenshot, uiExtensionHost };

export { componentSnapshot, componentUtils, dragController, sendTouchEvent, sendKeyEvent, sendMouseEvent };

export { floatingBall, uiMaterial, PiPWindow };