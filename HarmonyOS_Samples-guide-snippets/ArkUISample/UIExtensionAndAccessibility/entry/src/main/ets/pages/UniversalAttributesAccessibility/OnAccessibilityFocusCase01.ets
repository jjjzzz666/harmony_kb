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

// [Start accessibility_focus_start01]
@Entry
@Component
export struct OnAccessibilityFocusCase01 {
  @State isFocus: boolean = false;

  build() {
    // [StartExclude accessibility_focus_start01]
    NavDestination() {
      // [EndExclude accessibility_focus_start01]
      Column() {
        Text('文本') // 聚焦到此组件时，下面焦点丢失，可验证未获焦状态。
        Button(this.isFocus ? '已获焦' : '未获焦')
          .onAccessibilityFocus((isFocus: boolean) => {
            this.isFocus = isFocus
            console.info(`current isFocus: ${this.isFocus}`)
          })
      }
      // [StartExclude accessibility_focus_start01]
    }
    // [EndExclude accessibility_focus_start01]
  }
}
// [End accessibility_focus_start01]