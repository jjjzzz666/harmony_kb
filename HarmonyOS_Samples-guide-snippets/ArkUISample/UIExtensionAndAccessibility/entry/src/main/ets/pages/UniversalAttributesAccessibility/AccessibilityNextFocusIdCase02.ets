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

// [Start accessibility_next_focusId_start02]
@Entry
@Component
export struct AccessibilityNextFocusIdCase02 {
  build() {
    // [StartExclude accessibility_next_focusId_start02]
    NavDestination() {
      // [EndExclude accessibility_next_focusId_start02]
      Column() {
        Button('A')
          .accessibilityNextFocusId('b')
        Button('C')
          .id('c')
          .accessibilityNextFocusId('d')
        Button('B')
          .id('b')
          .accessibilityNextFocusId('c')
        Button('D')
          .id('d')
      }
      // [StartExclude accessibility_next_focusId_start02]
    }
    // [EndExclude accessibility_next_focusId_start02]
  }
}
// [End accessibility_next_focusId_start02]