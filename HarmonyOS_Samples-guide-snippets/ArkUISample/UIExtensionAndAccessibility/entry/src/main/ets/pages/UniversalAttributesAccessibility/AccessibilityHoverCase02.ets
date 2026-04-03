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

// [Start accessibility_hover_start02]
@Entry
@Component
export struct OnAccessibilityHoverCase02 {
  @State hoverText: string = '无';

  build() {
    // [StartExclude accessibility_hover_start02]
    NavDestination() {
      // [EndExclude accessibility_hover_start02]
      Column() {
        Text(this.hoverText)
          .onTouch((event: TouchEvent) => {
            this.hoverText = '上屏文字';
          })
          .onAccessibilityHover((isHover: boolean, event: AccessibilityHoverEvent) => {
            // 模拟单击上屏
            this.hoverText = '上屏文字';
          })
      }
      // [StartExclude accessibility_hover_start02]
    }
    // [EndExclude accessibility_hover_start02]
  }
}
// [End accessibility_hover_start02]