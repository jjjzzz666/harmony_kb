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

// [Start AlbumPicker_full]
// [Start AlbumPicker_import]
// 1. 导入相册组件模块文件
import {
  PhotoPickerComponent,
  AlbumPickerComponent,
  AlbumPickerOptions,
  AlbumInfo,
  PickerColorMode,
  PickerController,
  DataType
} from '@kit.MediaLibraryKit';
// [End AlbumPicker_import]

@Entry
@Component
struct AlbumPage {
  // [Start AlbumPicker_create]
  // 2. 创建相册选择选项实例
  @State pickerController: PickerController = new PickerController();
  albumOptions = new AlbumPickerOptions();
  albumOptions1 = new AlbumPickerOptions();
  albumOptions2 = new AlbumPickerOptions();
  // [End AlbumPicker_create]
  
  @State Width: string = '100%';
  @State Height: string = '100%';
  @State isShowAlbum: boolean = false;
  @State fontColor: string = '#6B7280';
  @State selectedFontColor: string = '#007DFF';
  @State currentIndex: number = 0;
  private controller: TabsController = new TabsController();

  // [Start AlbumPicker_callbacks]
  // 3. 实现相关回调
  /**
   *相册被选中回调，返回相册信息
   * AlbumInfo（uri）
   */
  private onAlbumClick(albumInfo: AlbumInfo): boolean {
    this.isShowAlbum = false;
    if (albumInfo?.uri) {
      //  根据相册url更新宫格页内容。
      this.pickerController.setData(DataType.SET_ALBUM_URI, albumInfo.uri);
    }
    return true;
  }
  // [End AlbumPicker_callbacks]

  aboutToAppear() {
    // [Start AlbumPicker_config]
    // 4. 初始化相册选择选项实例
    /**
     * 设置相册页颜色模式， 默认AUTO。
     * AUTO：跟随系统的模式， LIGHT：浅色模式， DARK：深色模式
     */
    this.albumOptions.themeColorMode = PickerColorMode.AUTO;
    this.albumOptions1.themeColorMode = PickerColorMode.LIGHT;
    this.albumOptions2.themeColorMode = PickerColorMode.DARK;
    // [End AlbumPicker_config]
  }

  // 设置导航栏的样式
  @Builder
  tabBuilder(index: number) {
    Column() {
      Text(index === 0 ? $r('app.string.album_picker_system') : 
          index === 1 ? $r('app.string.album_picker_light') : 
          $r('app.string.album_picker_dark'))
        .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)
        .fontSize(16)
        .fontWeight(this.currentIndex === index ? 500 : 400)
        .lineHeight(22)
        .margin({ top: 17, bottom: 7 })
      Divider()
        .strokeWidth(2)
        .color('#007DFF')
        .opacity(this.currentIndex === index ? 1 : 0)
    }
    .width('100%')
  }

  build() {
    Stack() {
      Column() {
        Row() {
        Button($r('app.string.album_picker_all_albums'))
          .width('95%')
          .height('5%')
          .onClick(() => {
            this.isShowAlbum = true;
          })
      }
      .margin({ top: 40 })
        Column() {
          PhotoPickerComponent({
            pickerController: this.pickerController,
          })
          .height(this.Height)
          .width(this.Width)
        }
        .width('100%')
        .height('100%')
        .alignItems(HorizontalAlign.Center)
      }

      if (this.isShowAlbum) {
        Row() {
          Column() {
            // [Start AlbumPickerComponent_use]
            // 5. 创建AlbumPickerComponent组件
            // Using 3 components to better demonstrate different effects
            Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {
              TabContent() {
                AlbumPickerComponent({
                  albumPickerOptions: this.albumOptions,
                  onAlbumClick: (albumInfo: AlbumInfo): boolean => {
                    return this.onAlbumClick(albumInfo)
                  },
                })
                .height('100%')
                .width('100%')
              }.tabBar(this.tabBuilder(0))
              TabContent() {
                AlbumPickerComponent({
                  albumPickerOptions: this.albumOptions1,
                  onAlbumClick: (albumInfo: AlbumInfo): boolean => {
                    return this.onAlbumClick(albumInfo)
                  },
                })
                .height('100%')
                .width('100%')
              }.tabBar(this.tabBuilder(1))

              TabContent() {
                AlbumPickerComponent({
                  albumPickerOptions: this.albumOptions2,
                  onAlbumClick: (albumInfo: AlbumInfo): boolean => {
                    return this.onAlbumClick(albumInfo)
                  },
                })
                .height('100%')
                .width('100%')
              }.tabBar(this.tabBuilder(2))
            }
            .vertical(false)
            .barMode(BarMode.Fixed)
            .barWidth('100%')
            .barHeight(56)
            .animationDuration(100)
            .onChange((index: number) => {
              this.currentIndex = index;
            })
            .width('100%')
            .height('100%')
            .backgroundColor('#F1F3F5')
            // [End AlbumPickerComponent_use]
          }
          .width('100%')
          .height('100%')
          .justifyContent(FlexAlign.Center)
          .alignItems(HorizontalAlign.Center)
        }
        .margin({ top: 40 })
      }
    }
  }
}
// [End AlbumPicker_full]