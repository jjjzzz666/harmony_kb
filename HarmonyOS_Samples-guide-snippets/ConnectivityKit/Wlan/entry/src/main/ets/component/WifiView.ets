/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { wifiManager } from '@kit.ConnectivityKit';
import hilog from '../model/Logger';

const TAG: string = 'WifiView';

@Component
export struct WifiView {
  private wifi: wifiManager.WifiScanInfo | null = null;
  private securityString: Resource = $r('app.string.encryption');
  @State isLock: boolean = true;

  aboutToAppear() {
    hilog.debug(TAG, `aboutToAppear ${JSON.stringify(this.wifi)}`);

    // 如果wifi不存在，直接返回
    if (!this.wifi) return;

    // 如果securityType不存在，直接返回
    if (!this.wifi.securityType) return;

    // 主逻辑：检查安全类型
    const securityType = this.wifi.securityType as number;
    if (securityType !== 0 && securityType !== 1) return;

    // 符合条件时执行的逻辑
    this.securityString = $r('app.string.open');
    this.isLock = false;
  }

  build() {
    Row() {
      Column() {
        if (this.wifi) {
          if (this.wifi.ssid) {
            Text(this.wifi.ssid)
              .fontSize(20)
              .width('100%')
          }
        }
        Text(this.securityString)
          .fontSize(18)
          .fontColor(Color.Gray)
          .width('100%')
      }
      .layoutWeight(1)

      Stack({ alignContent: Alignment.BottomEnd }) {
        Image($r('app.media.wifi'))
          .height(30)
          .width(30)
          .objectFit(ImageFit.Contain)
        if (this.isLock) {
          Image($r('app.media.lock'))
            .objectFit(ImageFit.Contain)
            .width(15)
            .height(15)
        }
      }
      .width(40)
      .height(40)
      .margin({ right: 10 })
    }
    .backgroundColor(Color.White)
    .width('100%')
    .padding(10)
  }
}