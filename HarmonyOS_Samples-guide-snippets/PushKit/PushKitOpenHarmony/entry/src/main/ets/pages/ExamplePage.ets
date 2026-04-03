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

// [Start delete_token_import]
// [Start bind_profile]
import { AAID, pushCommon, pushService } from '@kit.PushKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// [End delete_token_import]

// [StartExclude bind_profile]
// Define the profileId to be bound. You are advised to use an anonymous identifier generated based on the account ID
const profileId: string = '111***222';

@Component
export struct ExamplePage {
  @Builder
  CustomButton(label: string, callback: () => void) {
    Button(label)
      .margin({ top: 10 })
      .width('48%')
      .height(30)
      .onClick(callback)
  }

  build() {
    NavDestination() {
      Column() {
        Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween }) {
          this.CustomButton('Get Token', this.getToken);
          this.CustomButton('Delete Token', this.deleteToken);

          this.CustomButton('Get AAID', this.getAAID);
          this.CustomButton('Delete AAID', this.deleteAAID);

          this.CustomButton('Bind Profile', this.bindAppProfileId);
          this.CustomButton('Unbind Profile', this.unbindAppProfileId);
        }
      }

    }
  }

  private getToken = (): void => {
    pushService.getToken()
      .then(token => {
        hilog.info(0x0000, 'testTag', 'Succeeded in getting push token.');
      })
      .catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', 'Failed to get token, code %{public}d, message: %{public}s', err.code,
          err.message);
      });
  }
  private deleteToken = (): void => {
    // [Start push_token_delete]
    pushService.deleteToken()
      .then(() => {
        hilog.info(0x0000, 'testTag', 'Succeeded in deleting push token.');
      })
      .catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', 'Failed to delete token, code %{public}d, message %{public}s', err.code,
          err.message);
      });
    // [End push_token_delete]
  }
  private getAAID = async (): Promise<void> => {
    // [Start get_aaid]
    try {
      const aaid: string = await AAID.getAAID();
      hilog.info(0x0000, 'testTag', 'Succeeded in getting AAID.');
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to get AAID: %{public}d %{public}s', e.code, e.message);
    }
    // [End get_aaid]
  }
  private deleteAAID = (): void => {
    AAID.deleteAAID()
      .then(() => {
        hilog.info(0x0000, 'testTag', 'Succeeded in deleting aaid.');
      })
      .catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', 'Failed to delete aaid: code %{public}d, message %{public}s', err.code,
          err.message);
      });
  }
  private bindAppProfileId = (): void => {
    // [EndExclude bind_profile]
    pushService.bindAppProfileId(pushCommon.AppProfileType.PROFILE_TYPE_APPLICATION_ACCOUNT, profileId).then(() => {
      hilog.info(0x0000, 'testTag', 'Succeeded in binding app profile id');
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', 'Failed to bind app profile id: %{public}d %{public}s', err.code, err.message);
    });
    // [End bind_profile]
  }
  private unbindAppProfileId = () => {
    pushService.unbindAppProfileId(profileId)
      .then(() => {
        hilog.info(0x0000, 'testTag', 'Succeeded to unbind app profile id');
      })
      .catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', 'Failed to unbind app profile id: %{public}d %{public}s', err.code, err.message);
      });
  }
}