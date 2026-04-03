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

// [Start form_refresh_def]
import { formBindingData, FormExtensionAbility, formInfo } from '@kit.FormKit';
import { Want } from '@kit.AbilityKit';
// [StartExclude form_refresh_def]
import { hilog } from '@kit.PerformanceAnalysisKit';
// [EndExclude form_refresh_def]
export default class EntryFormAbility extends FormExtensionAbility {
  onAddForm(want: Want): formBindingData.FormBindingData {
    // 获取formId
    const formId = want.parameters![formInfo.FormParam.IDENTITY_KEY] as string;

    // 定义需要在WidgetCard中刷新的字段
    class CreateFormData {
      formId: string = '';
      text_key: string = '';
      image_key: string = '';
    }

    const obj: CreateFormData = {
      formId: formId,
      text_key: '默认文本',
      image_key: ''
    }
    const bindingData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);

    // 定义需要通过Push Kit代理刷新的字段，每个key均需要在上面bindingData中定义
    const text_key: formBindingData.ProxyData = {
      key: 'text_key',
      subscriberId: formId
    };
    const image_key: formBindingData.ProxyData = {
      key: 'image_key',
      subscriberId: formId
    };
    bindingData.proxies = [text_key, image_key];
    return bindingData;
  }

  // [StartExclude form_refresh_def]
  onCastToNormalForm(formId: string) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onCastToNormalForm has called');
    // Called when the form provider is notified that a temporary form is successfully
    // converted to a normal form
  }

  onUpdateForm(formId: string) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onUpdateForm has called');
    // Called to notify the form provider to update a specified form
  }

  onFormEvent(formId: string, message: string) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onFormEvent has called');
    // Called when a specified message event defined by the form provider is triggered
  }

  onRemoveForm(formId: string) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onRemoveForm has called');
    // Called to notify the form provider that a specified form has been destroyed
  }

  onAcquireFormState(want: Want) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'onAcquireFormState has called');
    // Called to return a {@link FormState} object
    return formInfo.FormState.READY;
  }
  // [EndExclude form_refresh_def]
}
// [End form_refresh_def]