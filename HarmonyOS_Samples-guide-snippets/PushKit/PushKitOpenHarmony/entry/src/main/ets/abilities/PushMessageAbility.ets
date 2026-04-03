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

// [Start alert_message_receive]
// [Start background_message_receive]
// [Start im_message_receive]
// [Start push_token_update]
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
// [Start token_update_import]
import { pushCommon, pushService } from '@kit.PushKit';
// [End token_update_import]
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
// [StartExclude alert_message_receive]
// [StartExclude background_message_receive]
// [StartExclude im_message_receive]
// [StartExclude push_token_update]
import { VoipCallService } from '../service/VoipCallService';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0000;

// [EndExclude alert_message_receive]
// [EndExclude background_message_receive]
// [EndExclude im_message_receive]
// [EndExclude push_token_update]
export default class PushMessageAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    // [StartExclude alert_message_receive]
    // [StartExclude background_message_receive]
    // [StartExclude im_message_receive]
    // [StartExclude push_token_update]
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onCreate');
    this.registerDefaultEvent();
    this.registerIMEvent();
    this.registerBackgroundEvent();
    this.registerVoIPEvent();

    // [EndExclude push_token_update]
    const callBack = (data: string) => {
      try {
        hilog.info(0x0000, 'testTag', 'update token: %{public}s', data);
      } catch (e) {
        let err: BusinessError = e as BusinessError;
        hilog.error(0x0000, 'testTag', 'Failed to update data: %{public}d %{public}s', err.code, err.message);
      }
    }

    try {
      // 注册token更新回调场景
      pushService.on('tokenUpdate', this, callBack);
      hilog.info(0x0000, 'testTag', 'Register on success');
    } catch (e) {
      let err: BusinessError = e as BusinessError;
      hilog.error(0x0000, 'testTag', 'Register on error: %{public}d %{public}s', err.code, err.message);
    }
  }

  onDestroy(): void {
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onDestroy');

    try {
      // 解除注册token更新回调场景
      pushService.off('tokenUpdate');
      hilog.info(0x0000, 'testTag', 'Register off success');
    } catch (e) {
      let err: BusinessError = e as BusinessError;
      hilog.error(0x0000, 'testTag', 'Register off error: %{public}d %{public}s', err.code, err.message);
    }
  }
  // [StartExclude push_token_update]

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'PushMessageAbility onBackground.');
  }

  private registerDefaultEvent(): void {
    // [EndExclude alert_message_receive]
    try {
      // receiveMessage中的参数固定为DEFAULT
      pushService.receiveMessage('DEFAULT', this, (payload) => {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Receive message for DEFAULT type.');

        try {
          // 获取服务端传递的数据
          const data: string = payload?.data;
          // TODO：业务自行处理
          hilog.info(0x0000, 'testTag', 'Succeeded in getting notification,data=%{public}s',
            JSON.stringify(JSON.parse(data)?.notification));
        } catch (err) {
          const e: BusinessError = err as BusinessError;
          hilog.error(0x0000, 'testTag', 'Failed to process data: %{public}d %{public}s.', e.code, e.message);
        }
      });
      hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in registering default message.');
    } catch (err) {
      const e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to register default message: %{public}d %{public}s', e.code, e.message);
    }
    // [StartExclude alert_message_receive]
  }

  private registerIMEvent(): void {
    // [EndExclude im_message_receive]
    try {
      pushService.receiveMessage('IM', this, (payload) => {
        hilog.info(0x0000, 'testTag', '%{public}s', 'receive message for IM type');

        try {
          // Retrieve data from server
          const data: string = payload?.data;
          // TODO：process data
          hilog.info(0x0000, 'testTag', 'Succeeded in getting notification,data=%{public}s',
            JSON.stringify(JSON.parse(data)?.notification));
        } catch (err) {
          const e: BusinessError = err as BusinessError;
          hilog.error(0x0000, 'testTag', 'Failed to process data: %{public}d %{public}s', e.code, e.message);
        }
      });
      hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in registering im message');
    } catch (err) {
      const e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to register default message: %{public}d %{public}s', e.code, e.message);
    }
  }
  // [StartExclude im_message_receive]

  private registerBackgroundEvent(): void {
    // [EndExclude background_message_receive]
    try {
      pushService.receiveMessage('BACKGROUND', this, (data: pushCommon.PushPayload) => {
        // process message
        try {
          hilog.info(0x0000, 'testTag', 'Receive background message');
        } catch (e) {
          let errRes: BusinessError = e as BusinessError;
          hilog.error(0x0000, 'testTag', 'Failed to process data: %{public}d %{public}s', errRes.code, errRes.message);
        }
      });
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to get background message: %{public}d %{public}s', e.code, e.message);
    }
    // [StartExclude background_message_receive]
  }

  private registerVoIPEvent(): void {
    try {
      pushService.receiveMessage('VoIP', this, (data) => {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Receive message for VoIP type');

        VoipCallService.processVoIPMainMsg(data.data, this.context)
          .then(() => {
            hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in process VoIP message');
          }).catch((error: BusinessError) => {
          hilog.error(0x0000, 'testTag', 'Failed to process VoIP message: %{public}d %{public}s',
            error.code,
            error.message);
        });
      });
      hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in register voip message');
    } catch (err) {
      const e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to register voip message: %{public}d %{public}s', e.code, e.message);
    }
    // [EndExclude alert_message_receive]
    // [EndExclude background_message_receive]
    // [EndExclude im_message_receive]
  }
  // [EndExclude push_token_update]
}

// [End alert_message_receive]
// [End background_message_receive]
// [End im_message_receive]
// [End push_token_update]
