/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit IMEKit
 */

import Want from './@ohos.app.ability.Want';
import type InputMethodExtensionContext from './@ohos.InputMethodExtensionContext';

/**
 * The extension ability class of input method.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionAbility {
  /**
   * Indicates input method extension ability context.
   *
   * @type { InputMethodExtensionContext }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  context: InputMethodExtensionContext;

  /**
   * Called back when a input method extension is started for initialization.
   *
   * @param { Want } want - Indicates the want of created service extension.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Called back before a input method extension is destroyed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default InputMethodExtensionAbility;
