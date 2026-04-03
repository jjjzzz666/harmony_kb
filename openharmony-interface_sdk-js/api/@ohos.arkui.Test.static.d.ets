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

import { TouchObject, KeyEvent, MouseEvent } from '@ohos.arkui.component';

/**
 * Send a mock touch event to the current application. This interface is only suitable for
 * simple interaction testing within your own application and should not be used in real environment.
 * 
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * Send a mock key event to the current application. This interface is only suitable for
 * simple interaction testing within your own application and should not be used in real environment.
 * 
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * Send a mock mouse event to the current application. This interface is only suitable for
 * simple interaction testing within your own application and should not be used in real environment.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;