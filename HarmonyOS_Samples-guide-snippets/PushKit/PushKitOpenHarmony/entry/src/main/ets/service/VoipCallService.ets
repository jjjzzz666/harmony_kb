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

// [Start voip_message_service]
import { voipCall } from '@kit.CallServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { image } from '@kit.ImageKit';
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

export interface VoipScene {
  scene: string;
}

export interface Content {
  data: string;
  header: string;
  callId: string;
}

export class VoipCallService {
  private static callId: string | undefined;

  public static async processVoIPMainMsg(data: string,
    context: common.UIAbilityContext): Promise<void> {
    hilog.info(0x0000, 'testTag', `Process VoIP message: ${data}`);

    let content: Content = JSON.parse(data);
    let scene: VoipScene = JSON.parse(content.data);
    let callId: string = content.callId;
    if (!callId) {
      hilog.error(0x0000, 'testTag', `CallId is null`);
    }
    VoipCallService.callId = callId;

    try {
      // 注册voipCallUiEvent事件
      voipCall.on('voipCallUiEvent', async (event) => {
        hilog.info(0x0000, 'testTag', `Process voip call ui event: ${JSON.stringify(event)}.`);

        await VoipCallService.processVoipCallEvent(event.voipCallUiEvent);
      });
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to register event: %{public}d %{public}s', e.code, e.message);
    }

    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
    // example.png表示用户头像，取值为“/resources/rawfile”路径下的文件名
    let fileData: Uint8Array = new Uint8Array(0);
    try {
      fileData = await resourceMgr.getRawFileContent('example.png');
    } catch (e) {
      hilog.error(0x0000, 'testTag', 'Failed to get raw file: %{public}d %{public}s', e.code, e.message);
    }
    const buffer = fileData.buffer;
    const imageSource: image.ImageSource = image.createImageSource(buffer);
    const pixelMap: image.PixelMap = await imageSource.createPixelMap();
    if (pixelMap) {
      pixelMap.getImageInfo((err, imageInfo) => {
        if (imageInfo) {
          hilog.info(0x0000, 'testTag',
            `User profile imageInfo: ${imageInfo.size.width} * ${imageInfo.size.height}.`);
        }
      });
    }

    // 构造上报来电的参数。注意，voipCallType.scene为您自定义的场景类型字段，从云侧推送消息时，请注意与端侧取值保持一致
    let call: voipCall.VoipCallAttribute = {
      callId: callId,
      voipCallType: scene?.scene === 'video' ? voipCall.VoipCallType.VOIP_CALL_VIDEO :
        voipCall.VoipCallType.VOIP_CALL_VOICE,
      userName: 'push',
      userProfile: pixelMap,
      abilityName: 'VoIPUIAbility',
      voipCallState: voipCall.VoipCallState.VOIP_CALL_STATE_RINGING
    };

    try {
      // 上报来电
      let error = await voipCall.reportIncomingCall(call);
      hilog.info(0x0000, 'testTag', `ReportIncomingCall result: ${error}.`);
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to report incoming call: %{public}d %{public}s', e.code, e.message);
    }

    // ...应用播放振动和铃声
  }

  public static async processVoipCallEvent(event: voipCall.VoipCallUiEvent) {
    try {
      switch (event) {
        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VOICE_ANSWER:
        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VIDEO_ANSWER:
          // 立即向Call Service Kit上报answered状态
          await voipCall.reportCallStateChange(VoipCallService.callId,
            voipCall.VoipCallState.VOIP_CALL_STATE_ANSWERED);

          // ...在应用内完成接听

          // 应用内接听后，向Call Service Kit上报active状态
          await voipCall.reportCallStateChange(VoipCallService.callId,
            voipCall.VoipCallState.VOIP_CALL_STATE_ACTIVE);
          break;
        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_REJECT:
        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_HANGUP:
          // ...应用内完成挂断

          // 向Call Service Kit上报通话状态
          await voipCall.reportCallStateChange(VoipCallService.callId,
            voipCall.VoipCallState.VOIP_CALL_STATE_DISCONNECTED);
          break;
        default: {
          break;
        }
      }
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to report call state change: %{public}d %{public}s', e.code, e.message);
    }
  }

  public static close(): void {
    hilog.info(0x0000, 'testTag', `Close VoIP`);

    VoipCallService.processVoipCallEvent(voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_HANGUP);
    try {
      voipCall.off('voipCallUiEvent');
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to unregister event: %{public}d %{public}s', e.code, e.message);
    }
  }
}
// [End voip_message_service]