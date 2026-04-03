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

// [Start click_get_parameters]
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// [StartExclude click_get_parameters]
import { window } from '@kit.ArkUI';
// [EndExclude click_get_parameters]

export default class TestAbility extends UIAbility {
  // [StartExclude click_get_parameters]
  private localStorage = new LocalStorage();

  // [EndExclude click_get_parameters]
  // The app is not started, click the pop-up to invoke it
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'TestAbility onCreate');
    // 获取消息中传递的data数据
    const value = want.parameters?.["testKey"]; // value: "testValue"
    hilog.info(0x0000, 'testTag', 'Succeeded in getting message data, value is %{public}s', value);
    // 根据实际业务场景对data进行处理
    // [StartExclude click_get_parameters]
    this.localStorage.setOrCreate('want', want);
    // [EndExclude click_get_parameters]
  }

  // [StartExclude click_get_parameters]
  // When the app is in the background, click pop-up to invoke
  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'TestAbility onNewWant');
    const value = want.parameters?.['testKey'];
    hilog.info(0x0000, 'testTag', 'Succeeded in getting message data, value is %{public}s', value ?? 'default value');
    this.localStorage.setOrCreate('want', want);
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/TestAbilityPage', this.localStorage, (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
  // [EndExclude click_get_parameters]
}
// [End click_get_parameters]