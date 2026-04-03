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

// [Start accessibility_event_start04]
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
export struct SendAccessibilityEventCase04 {
  @State text: string = '暂停';
  private isPlay: boolean = false;

  build() {
    // [StartExclude accessibility_event_start04]
    NavDestination() {
      // [EndExclude accessibility_event_start04]
      Column() {
        Button(this.text)
          .onClick(() => {
            this.isPlay = !this.isPlay;
            this.text = this.isPlay ? '暂停' : '播放';
            const event: accessibility.EventInfo = {
              type: "requestFocusForAccessibility",
              // 需要替换为当前的工程名称
              bundleName: "com.samples.uiextensionandaccessibility",
              triggerAction: "common",
              textAnnouncedForAccessibility: this.text,
            }
            accessibility.sendAccessibilityEvent(event);
          })
      }
      // [StartExclude accessibility_event_start04]
    }
    // [EndExclude accessibility_event_start04]
  }
}
// [End accessibility_event_start04]