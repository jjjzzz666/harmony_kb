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
/*** if arkts dynamic */
import { ErrorCode } from "./base_dynamic_001";
/*** endif */
/*** if arkts static */
import { ErrorCode } from "./base_static_001";
/*** endif */


/*** if arkts dynamic */
/**
 * The information of sheet.
 *
 * @typedef { "evenodd" | "nonzero" } CanvasFillRule SheetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type SheetInfo = {
/*** endif */
/*** if arkts static */
/**
* The information of sheet.
*
* @interface SheetInfo
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 22 static
*/
interface SheetInfo {
/*** endif */
  /**
  * Sheet text.
  *
  * @type { ErrorCode }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 22 dynamic&static
  */
  title: ErrorCode;
}