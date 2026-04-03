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

import { ComponentContent } from '@kit.ArkUI'

class Params {
}

@Builder
function sampleLoadingBuilder(params: Params) {
  Column() {
    LoadingProgress()
      .color(Color.Blue)
  }
}

@Builder
function sampleAreaChangePlaceholderBuilder(params: Params) {
  Column() {
  }
  .width('100%')
  .height('100%')
  .backgroundColor(Color.Orange)
}

@Component
export struct UIExtension {
  @State message1: string = 'Hello World 1'
  @State message2: string = 'Hello World 2'
  @State message3: string = 'Hello World 3'
  @State visible: Visibility = Visibility.Hidden
  @State wid: number = 300
  @State hei: number = 300
  private initPlaceholder = new ComponentContent(this.getUIContext(), wrapBuilder(sampleLoadingBuilder), new Params);
  private areaChangePlaceholder =
    new ComponentContent(this.getUIContext(), wrapBuilder(sampleAreaChangePlaceholderBuilder), new Params);

  build() {
    NavDestination() {
      Column() {
        Column() {
          Text(this.message1).fontSize(25)
          Text(this.message2).fontSize(25)
          Text(this.message3).fontSize(25)



          Button($r('app.string.UIExtensionComponent_button3')).onClick(() => {

          })
        }
      }
      .height('100%')
      .width('100%')
      .padding({ left: 12, right: 12 })
    }
    .backgroundColor('#f1f2f3')
    .title($r('app.string.UI_Extension_Component_title'))
  }
}
