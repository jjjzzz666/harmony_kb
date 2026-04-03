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

// [Start push_token_import]
import { pushService } from '@kit.PushKit';
// [Start push_token_alert]
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, Configuration, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
// [End push_token_import]
import { window } from '@kit.ArkUI';
import { notificationManager } from '@kit.NotificationKit';

// [Start push_token_call]
export default class EntryAbility extends UIAbility {
  // [StartExclude push_token_alert]
  // [StartExclude push_token_call]
  private localStorage = new LocalStorage();
  // [EndExclude push_token_call]
  // 入参want与launchParam并未使用，为初始化项目时自带参数
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    // [StartExclude push_token_call]
    try {
      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
    } catch (err) {
      hilog.error(0x0000, 'testTag', 'Failed to set colorMode. Cause: %{public}s', JSON.stringify(err));
    }
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');

    const value = want.parameters?.testKey;
    hilog.info(0x0000, 'testTag', 'Succeeded in getting message data, value is %{public}s', value ?? 'default value');
    this.localStorage.setOrCreate('want', want);
    // [EndExclude push_token_call]
    // 获取Push Token
    pushService.getToken().then(token => {
      hilog.info(0x0000, 'testTag', `Succeeded in getting push token.`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', 'Failed to get push token: %{public}d %{public}s', err.code, err.message);
    });
    // 上报Push Token并上报到您的服务端
  }

  // [StartExclude push_token_call]
  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    const value = want.parameters?.testKey;
    hilog.info(0x0000, 'testTag', 'Succeeded in getting message data, value is %{public}s', value ?? 'default value');
    this.localStorage.setOrCreate('want', want);
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }
  // [EndExclude push_token_alert]

  onWindowStageCreate(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
      notificationManager.requestEnableNotification(this.context).then(() => {
        hilog.info(0x0000, 'testTag', `[ANS] requestEnableNotification success`);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag',
          `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
      });
    });
  }

  // [StartExclude push_token_alert]
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

  onConfigurationUpdate(newConfig: Configuration): void {
    hilog.info(0x0000, 'testTag', '%{public}s', newConfig.language);
    AppStorage.setOrCreate('currentLanguage', newConfig.language);
  }
  // [EndExclude push_token_call]
  // [EndExclude push_token_alert]
}
// [End push_token_call]
// [End push_token_alert]