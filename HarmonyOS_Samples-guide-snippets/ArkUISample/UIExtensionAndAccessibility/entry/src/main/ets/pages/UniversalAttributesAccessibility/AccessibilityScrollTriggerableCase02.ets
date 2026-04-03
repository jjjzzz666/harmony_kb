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

// [Start accessibility_scroll_start02]
@Entry
@Component
export struct AccessibilityScrollTriggerableCase02 {
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  build() {
    // [StartExclude accessibility_scroll_start02]
    NavDestination() {
      // [EndExclude accessibility_scroll_start02]
      Column() {
        List({ space: 20, initialIndex: 0 }) {
          ForEach(this.arr, (item: number) => {
            ListItem() {
              Text(`第${item}项`)
                .width('100%')
                .height(100)
                .textAlign(TextAlign.Center)
            }
          }, (item: string) => item)
        }
        .accessibilityScrollTriggerable(false)
      }
      .width('100%')
      .height('100%')
      // [StartExclude accessibility_scroll_start02]
    }
    // [EndExclude accessibility_scroll_start02]
  }
}
// [End accessibility_scroll_start02]
