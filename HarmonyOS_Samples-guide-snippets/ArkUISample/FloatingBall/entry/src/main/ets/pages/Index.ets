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

// [Start floating_ball_index]
// Index.ets
// 该页面利用按钮点击事件展示闪控球基本操作
import hilog from '@ohos.hilog';
import image from '@ohos.multimedia.image';
import { floatingBall } from '@kit.ArkUI';
import { Utils } from '../util/Utils';

const DOMAIN: number = 0xF811;
const TAG: string = '[Sample_FloatingBall]';

@Entry 
@Component
struct Index {
  // 当前可用的行，-1 表示全部行可见
  @State private activeRow: number = -1;
  // 声明闪控球控制器
  private floatingBallController: floatingBall.FloatingBallController | undefined = undefined;
  // 缓存 icon 图标（静态布局）
  private cachedIcon1: image.PixelMap | undefined = undefined;
  // 缓存 icon 图标（强调文本布局）
  private cachedIcon2: image.PixelMap | undefined = undefined;

  // activeRow 的状态更新函数（确保闪控球销毁时，activeRow的值更新为-1）
  private activeRowChange = (value: number) => {this.activeRow = value};

  // 判断某个布局是否可用（是否置灰）
  private isEnabled(rowInex: number): boolean {
    return this.activeRow === -1 || this.activeRow === rowInex;
  }

  build() {
    Column({space: 12}) {
      // 静态布局，支持标题和图标，该布局在创建后无法修改
      Row({space: 6}) {
        Button('STATIC').onClick( async () => {
          // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext
          if (!this.floatingBallController) {
            this.floatingBallController = await floatingBall.create({
              context: this.getUIContext().getHostContext()
            })
          }
          if (this.floatingBallController) {
            // 仅当没有缓存 cachedIcon1 时才加载；有缓存时，直接使用；
            if (!this.cachedIcon1) {
              let pixelMap = Utils.getRawfilePixelMapSync('books.png');  // 图片尺寸有最大限制
              if (pixelMap) {
                this.cachedIcon1 = pixelMap;  // 把图标缓存起了
                hilog.debug(DOMAIN, TAG, `Success to load icon PixelMap`);
              } else {
                hilog.error(DOMAIN, TAG, `Failed to load icon PixelMap`);
              }
            }
            Utils.onClickCreateFloatingBall(this.floatingBallController,
              floatingBall.FloatingBallTemplate.STATIC, this.activeRowChange, 'title', 'content', '#0ff77c', this.cachedIcon1)
              this.activeRow = 0;
          }
        })
        .enabled(this.isEnabled(0))
        // 更新闪控球信息（该布局在创建后无法更新，按钮永久置灰）
        Button('Update1').enabled(false)
        // 关闭闪控球
        Button('Close1').onClick(() => {
          Utils.onClickStopFloatingBall(this.floatingBallController);
          this.activeRow = -1;  // 关闭后恢复所有行显示
        })
        .enabled(this.isEnabled(0))
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
      
    // 普通文本布局，支持标题和内容
    Row({space: 6}) {
      Button('NORMAL').onClick( async () => {
        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext
        if (!this.floatingBallController) {
          this.floatingBallController = await floatingBall.create({
            context: this.getUIContext().getHostContext()
          })
        }
        if (this.floatingBallController) {
          Utils.onClickCreateFloatingBall(this.floatingBallController,
            floatingBall.FloatingBallTemplate.NORMAL, this.activeRowChange, 'title', 'content')
            this.activeRow = 1;
        }
      })
      .enabled(this.isEnabled(1))
      // 更新闪控球信息
      Button('Update2').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,
        floatingBall.FloatingBallTemplate.NORMAL))
        .enabled(this.isEnabled(1))
      // 关闭闪控球
      Button('Close2').onClick(() => {
        Utils.onClickStopFloatingBall(this.floatingBallController);
        this.activeRow = -1;  // 关闭后恢复所有行显示
      })
      .enabled(this.isEnabled(1))
    }
    .width('100%')
    .justifyContent(FlexAlign.Center)
    
     // 强调文本布局，支持标题、图标和内容
     Row({space: 6}) {
      Button('EMPHATIC').onClick( async () => {
        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext
        if (!this.floatingBallController) {
          this.floatingBallController = await floatingBall.create({
            context: this.getUIContext().getHostContext()
          })
        }
        if (this.floatingBallController) {
          // 仅当没有缓存 cachedIcon2 时才加载；有缓存时，直接使用；
          if(!this.cachedIcon2) {
            let pixelMap = Utils.getRawfilePixelMapSync('video.png');  // 图片尺寸有最大限制
            if (pixelMap) {
              this.cachedIcon2 = pixelMap;  // 把图标缓存起了
              hilog.debug(DOMAIN, TAG, `Success to load icon PixelMap`);
            } else {
              hilog.debug(DOMAIN, TAG, `Failed to load icon PixelMap`);
            }
          }
          Utils.onClickCreateFloatingBall(this.floatingBallController,
            floatingBall.FloatingBallTemplate.EMPHATIC, this.activeRowChange, '16', 'Min', '#0ff77c', this.cachedIcon2)
            this.activeRow = 2;
        }
      })
      .enabled(this.isEnabled(2))
      // 更新闪控球信息
      Button('Update3').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,
        floatingBall.FloatingBallTemplate.EMPHATIC, '', 'Min', this.cachedIcon2))
        .enabled(this.isEnabled(2))
      // 关闭闪控球
      Button('Close3').onClick(() => {
        Utils.onClickStopFloatingBall(this.floatingBallController);
        this.activeRow = -1;  // 关闭后恢复所有行显示
      })
      .enabled(this.isEnabled(2))
    }
    .width('100%')
    .justifyContent(FlexAlign.Center)

    // 纯文本布局，只支持标题
    Row({space: 6}) {
      Button('SIMPLE').onClick( async () => {
        // 请在组件内获取context，确保this.getUIContext().getHostContext()返回的结果是UIAbilityContext
        if (!this.floatingBallController) {
          this.floatingBallController = await floatingBall.create({
            context: this.getUIContext().getHostContext()
          })
        }
        if (this.floatingBallController) {
          Utils.onClickCreateFloatingBall(this.floatingBallController,
            floatingBall.FloatingBallTemplate.SIMPLE, this.activeRowChange, 'title')
            this.activeRow = 3;
        }
      })
      .enabled(this.isEnabled(3))
      // 更新闪控球信息
      Button('Update4').onClick(() => Utils.onClickUpdateFloatingBall(this.floatingBallController,
        floatingBall.FloatingBallTemplate.SIMPLE))
        .enabled(this.isEnabled(3))
      // 关闭闪控球
      Button('Close4').onClick(() => {
        Utils.onClickStopFloatingBall(this.floatingBallController);
        this.activeRow = -1;  // 关闭后恢复所有行显示
      })
      .enabled(this.isEnabled(3))
    }
    .width('100%')
    .justifyContent(FlexAlign.Center)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
// [End floating_ball_index]