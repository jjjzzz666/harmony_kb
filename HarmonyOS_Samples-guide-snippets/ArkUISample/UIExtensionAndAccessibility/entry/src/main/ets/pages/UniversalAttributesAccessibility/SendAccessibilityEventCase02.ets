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

// [Start accessibility_event_start02]
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
export struct SendAccessibilityEventCase02 {
  @State isVisible: boolean = true;

  build() {
    // [StartExclude accessibility_event_start02]
    NavDestination() {
      // [EndExclude accessibility_event_start02]
      Column() {
        Button('文本1')
          .visibility(this.isVisible ? Visibility.Visible : Visibility.Hidden)
          .onClick(() => {
            this.isVisible = false;
            const event: accessibility.EventInfo = {
              type: "requestFocusForAccessibility",
              // 需要替换为当前的工程名称
              bundleName: "com.samples.uiextensionandaccessibility",
              triggerAction: "common",
              customId: '123'
            }
            accessibility.sendAccessibilityEvent(event);
        })

        Button('文本2')
          .id('123') //设置组件id
      }
      // [StartExclude accessibility_event_start02]
    }
    // [EndExclude accessibility_event_start02]
  }
}
// [End accessibility_event_start02]