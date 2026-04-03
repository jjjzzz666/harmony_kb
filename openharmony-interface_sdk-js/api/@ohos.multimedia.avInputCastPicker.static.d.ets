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
 * @kit AVSessionKit
 */

import { Component } from './arkui/component/customComponent';
import { CustomBuilder, Builder, BuilderParam } from './arkui/component/builder';
import { OnPickerStateCallback } from './@ohos.multimedia.avCastPicker';

/**
 * A picker view to show availale input device list.
 * @struct { AVInputCastPicker }
 * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
 * @since 23 static
 */
@Component
export declare struct AVInputCastPicker {

  /**
   * Set the custom builder for the picker appearance.
   * If not set, system will show the default appearance for different device type.
   * @type { ? CustomBuilder }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  @BuilderParam
  customPicker?: CustomBuilder;

  /**
   * Picker state change callback.
   * @type { ?OnPickerStateCallback }
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 static
   */
  onStateChange?: OnPickerStateCallback;

   /**
   * The method to build component.
   * @syscap SystemCapability.Multimedia.AVSession.AVInputCast
   * @since 23 staticonly
   */
   @Builder
   build(): void;
}