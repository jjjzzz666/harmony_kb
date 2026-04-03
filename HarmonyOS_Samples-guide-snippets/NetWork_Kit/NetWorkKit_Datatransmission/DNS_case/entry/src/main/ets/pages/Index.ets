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

import { ComponentId } from '../common/CommonConstant';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  build() {
    Column({ space: 30 }) {
      Text($r('app.string.dns_case'))
        .id(ComponentId.HTTP_TITLE)
        .fontSize(25)
        .fontWeight(FontWeight.Bold)
        .fontColor('#1890FF')
        .margin({ top: 40 })

      Column({ space: 20 }) {
        Button($r('app.string.DNS'))
          .id(ComponentId.DNS_BTN)
          .width(200)
          .height(50)
          .fontSize(18)
          .fontColor('#FFFFFE')
          .backgroundColor('#1890FF')
          .borderRadius(12)
          .onClick(() => {
            this.getUIContext().getRouter().pushUrl({ url: 'pages/DNS' }).catch(() => {
              hilog.error(0x000, 'testTag', 'pushUrl error');
            });
          })

        Button($r('app.string.Unicode'))
          .id(ComponentId.ASCII_BTN)
          .width(200)
          .height(50)
          .fontSize(18)
          .fontColor('#FFFFFE')
          .backgroundColor('#1890FF')
          .borderRadius(12)
          .onClick(() => {
            this.getUIContext().getRouter().pushUrl({ url: 'pages/Unicode' }).catch(() => {
              hilog.error(0x000, 'testTag', 'pushUrl error');
            });
          })
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FAFAFA')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
}
