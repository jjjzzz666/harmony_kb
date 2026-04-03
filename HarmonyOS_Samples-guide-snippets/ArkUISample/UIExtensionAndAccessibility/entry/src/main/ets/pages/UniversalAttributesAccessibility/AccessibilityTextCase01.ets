/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

// [Start accessibility_text_start01]
@Entry
@Component
export struct AccessibilityTextCase01 {
  build() {
    // [StartExclude accessibility_text_start01]
    NavDestination() {
      // [EndExclude accessibility_text_start01]
      Column() {
        Button()
          .onClick(() => {
            // 播放音频、视频的核心逻辑
          })
      }
      // [StartExclude accessibility_text_start01]
    }
    // [EndExclude accessibility_text_start01]
  }
}
// [End accessibility_text_start01]