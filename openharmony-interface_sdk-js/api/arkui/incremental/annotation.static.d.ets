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

import { __memo_context_type, __memo_id_type } from './runtime/state';

/**
 * Defining Memo annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Memo {};

/**
 * Defining MemoIntrinsic annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface MemoIntrinsic {};

/**
 * Defining MemoSkip annotation.
 * MemoSkip parameter will not be a state varaiable in Builder functions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface MemoSkip {};