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

// [Start Dns_GetAddress_Ascii_Import]
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// [End Dns_GetAddress_Ascii_Import]
import { ComponentId } from '../common/CommonConstant';

@Entry
@Component
struct Unicode {
  // [Start Dns_GetAddress_Ascii_Data]
  @State hostVal: string = '';   // 转码之后的主机名
  @State ipResult: string = '';  // 获取的IP地址结果
  @State doaminResult: string = '';  // 转码之后的中文主机名
  private hostName: string = '';  // 初始主机名

  // [Start Dns_GetSource]
  aboutToAppear() {
    try {
      this.hostName =
        (this.getUIContext().getHostContext() as Context).resourceManager.getStringSync($r('app.string.hostName').id);
    } catch (error) {
      hilog.error(0x0000, 'testTag', `getStringSync fail. ${JSON.stringify(error)}`)
    };
  }
  // [End Dns_GetSource]

  // [Start Dns_GetAddress_Ascii_Fun]
  getAddressName(isChange: boolean) {
    this.ipResult = '';
    connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
      if (netHandle.netId === 0) {
        return;
      }
      if (isChange) {
        try {
          this.hostVal = connection.getDnsAscii(this.hostName);
        } catch (error) {
          hilog.error(0x0000, 'testTag', `getDnsAscii error.: ${JSON.stringify(error)}`);
        }
      } else {
        this.hostVal = '';
      }
      netHandle.getAddressByName(isChange ? this.hostVal : this.hostName,
        (error: BusinessError, data: connection.NetAddress) => {
          if (error) {
            this.ipResult = `Failed to get address. Code:${error.code}, message:${error.message}`;
            hilog.error(0x0000, 'testTag', `Failed to get address. Code:${error.code}, message:${error.message}`);
            return;
          }
          this.ipResult = JSON.stringify(data);
          hilog.info(0x0000, 'testTag', `Succeeded to get data: ${JSON.stringify(data)}`);
        });
    }).catch((error: BusinessError) => {
      hilog.error(0x0000, 'testTag', `getDefaultNet error.: ${JSON.stringify(error)}`);
    });
  }
  // [End Dns_GetAddress_Ascii_Fun]

  build() {
    Column() {
      // 标题区域
      Text('DNS解析支持中文转码')
        .fontSize(28)
        .fontWeight(FontWeight.Bold)
        .fontColor('#1890FF')
        .margin({ top: 40, bottom: 30 })

      // 操作按钮区域
      Row({ space: 20 }) {
        Button($r('app.string.UnChangeBtn'))
          .id(ComponentId.UN_CHANGE_GET_IPADDRESS)
          .fontSize(16)
          .padding({
            left: 24,
            right: 24,
            top: 12,
            bottom: 12
          })
          .backgroundColor('#1890FF')
          .fontColor('#fff9faf9')
          .borderRadius(8)
          .onClick((event: ClickEvent) => {
            // [Start UnChange_Handle]
            this.getAddressName(false);
            // [End UnChange_Handle]
          })

        Button($r('app.string.ChangeAsciiBtn'))
          .id(ComponentId.GET_ASCII)
          .fontSize(16)
          .padding({
            left: 24,
            right: 24,
            top: 12,
            bottom: 12
          })
          .backgroundColor('#1890FF')
          .fontColor('#fff9faf9')
          .borderRadius(8)
          .onClick((event: ClickEvent) => {
            // [Start Change_Handle]
            this.getAddressName(true);
            // [End Change_Handle]
          })
      }
      .margin({ bottom: 30 })

      // 转换结果区域
      Column({ space: 12 }) {
        Text($r('app.string.HostResult'))
          .fontSize(16)
          .fontColor('#666666')

        Text(this.hostVal)
          .fontSize(18)
          .fontWeight(FontWeight.Medium)
          .fontColor('#333333')
          .maxLines(2)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }
      .width('85%')
      .padding(16)
      .backgroundColor('#F5F5F5')
      .borderRadius(12)
      .margin({ bottom: 20 })

      // IP结果区域
      Column({ space: 12 }) {
        Text($r('app.string.result'))
          .fontSize(16)
          .fontColor('#666666')

        Text(this.ipResult)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .fontColor('#333333')
          .maxLines(4)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }
      .width('85%')
      .padding(16)
      .backgroundColor('#F5F5F5')
      .borderRadius(12)
      .margin({ bottom: 30 })

      // 转换回Unicode按钮
      Button($r('app.string.ChangeUnicodeBtn'))
        .id(ComponentId.GET_UNICODE)
        .fontSize(16)
        .padding({
          left: 24,
          right: 24,
          top: 12,
          bottom: 12
        })
        .backgroundColor('#52C41A')
        .fontColor('#fff9faf9')
        .borderRadius(8)
        .onClick((event: ClickEvent) => {
          try {
            // [Start Change_Unicode_Handle]
            this.doaminResult = connection.getDnsUnicode(this.hostVal);
            // [End Change_Unicode_Handle]
          } catch (error) {
            hilog.error(0x0000, 'testTag', 'getDnsUnicode error. Cause: %{public}s', JSON.stringify(error));
          }
        })

      // 转换结果区域
      Column({ space: 12 }) {
        Text('中文域名结果')
          .fontSize(16)
          .fontColor('#666666')

        Text(this.doaminResult)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .fontColor('#333333')
          .maxLines(4)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }
      .width('85%')
      .padding(16)
      .backgroundColor('#F5F5F5')
      .borderRadius(12)
      .margin({ bottom: 30 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FAFAFA')
  }
}
