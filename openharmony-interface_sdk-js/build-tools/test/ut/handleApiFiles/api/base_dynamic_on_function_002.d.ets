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
 * @kit AbilityKit
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#getHostContext
 */
declare function getContext(component?: Object): string;