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

// [Start accessibility_action_start02]
@Entry
@Component
export struct AccessibilityActionInterceptCase02 {
  @State isOn: boolean = false;

  build() {
    // [StartExclude accessibility_action_start02]
    NavDestination() {
      // [EndExclude accessibility_action_start02]
      Column() {
        Toggle({ type: ToggleType.Switch, isOn: this.isOn})
          .onClick(() => {
          })
          .onAccessibilityActionIntercept((action: AccessibilityAction) => {
            //
            if (action == AccessibilityAction.ACCESSIBILITY_CLICK) {
              this.getUIContext().showAlertDialog({
                title: '',
                message: this.isOn ? '确认关闭' : '确认开启?',
                primaryButton: {
                  value: '确认',
                  action: () => {
                    this.isOn = !this.isOn;
                  }
                },
                secondaryButton: {
                  value: '取消',
                  action: () => {}
                }
              })
              return AccessibilityActionInterceptResult.ACTION_INTERCEPT;
            }
            return AccessibilityActionInterceptResult.ACTION_CONTINUE;
          })
      }
      // [StartExclude accessibility_action_start02]
    }
    // [EndExclude accessibility_action_start02]
  }
}
// [End accessibility_action_start02]