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

// [Start voip_message_ability]
import { UIAbility } from '@kit.AbilityKit';
import { pushService } from '@kit.PushKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { VoipCallService } from '../service/VoipCallService';
import { BusinessError } from '@kit.BasicServicesKit';

export default class VoIPUIAbility extends UIAbility {
  onCreate(): void {
    hilog.info(0x0000, 'testTag', `VoIPUIAbility onCreate`);

    try {
      pushService.receiveMessage('VoIP', this, async (data) => {
        // process message
        try {
          await VoipCallService.processVoIPMainMsg(data.data, this.context);
        } catch (error) {
          hilog.error(0x0000, 'testTag', 'Failed to process VoIP message: %{public}d %{public}s',
            error.code,
            error.message);
        }
      });
    } catch (e) {
      hilog.error(0x0000, 'testTag', `Failed to register VOIP, error: ${e.code}, ${e.message}.`);
    }
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    hilog.info(0x0000, 'testTag', `VoIPUIAbility onWindowStageCreate`);

    windowStage.loadContent('pages/CalleePage').catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `Failed to load content, error: ${err.code}, ${err.message}.`);
    });
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', 'VoIPUIAbility onDestroy');
  }
}
// [End voip_message_ability]
