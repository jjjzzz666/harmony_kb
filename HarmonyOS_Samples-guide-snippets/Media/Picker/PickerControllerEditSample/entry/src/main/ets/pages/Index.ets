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

// [Start PickerController_full]
// [Start PickerController_import]
 // 1. 导入PickerController相关模块文件
import photoAccessHelper from '@ohos.file.photoAccessHelper';
import {
  PhotoPickerComponent,
  PickerController,
  PickerOptions,
  ItemInfo,
  PhotoBrowserInfo,
  ItemType,
  ClickType,
  MaxCountType,
  BaseItemInfo,
  SaveMode,
} from '@ohos.file.PhotoPickerComponent';
import { AlbumPickerOptions } from '@ohos.file.AlbumPickerComponent';
import { common } from '@kit.AbilityKit';
import { AsyncCallback } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';
// [End PickerController_import]

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  // [Start PickerController_create]
  // 2. 创建PickerController实例
  @State pickerController: PickerController = new PickerController();
  // [End PickerController_create]
  
  // [Start PickerController_config]
  // 3. 初始化PickerOptions实例
  pickerOptions: PickerOptions = new PickerOptions();
  albumOptions: AlbumPickerOptions = new AlbumPickerOptions();
  // [End PickerController_config]
  
  @State selectedUris: Array<string> = new Array<string>();
  @State allBackGroundColor: number = 0xf1f3f5;
  @State isShowAll: boolean = true;
  @State isShowVideo: boolean = false;
  @State isShowPhoto: boolean = false;
  @State isShowAlbum: boolean = false;
  private isBlock: boolean = false;
  @State isInPhotoBrowser: boolean = false;
  @State isShow: boolean = true;
  @State originUrl: string = '';
  @State trustedUris: Array<string> = new Array<string>();

  // [Start PickerController_callbacks]
  // 5. 实现相关回调
  private onEnterPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {
    this.isInPhotoBrowser = true;
    return false;
  }

  private onExitPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {
    this.isInPhotoBrowser = false;
    return false;
  }

  private onPickerControllerReady(): void {
    this.isShow = false;
  }

  private onSelect(uri: string): void {
    this.pickerOptions.preselectedUris = [...this.selectedUris];
    this.originUrl = uri;
  }

  private onDeselect(uri: string): void {
    this.pickerOptions.preselectedUris = [...this.selectedUris];
  }

  private onItemClicked(itemInfo: ItemInfo, clickType: ClickType): boolean {
    if (!itemInfo) {
      return false;
    }
    let type: ItemType | undefined = itemInfo.itemType;
    let uri: string | undefined = itemInfo.uri;
    if (type === ItemType.CAMERA) {
      return true;
    } else if (type === ItemType.THUMBNAIL) {
      if (clickType === ClickType.SELECTED) {
        if (this.isBlock) {
          return false;
        }
        if (uri) {
          this.selectedUris.push(uri);
          this.pickerOptions.preselectedUris = [...this.selectedUris];
        }
      } else {
        if (uri) {
          this.selectedUris = this.selectedUris.filter((item: string) => {
            return item !== uri;
          })
          this.pickerOptions.preselectedUris = [...this.selectedUris];
        }
      }
    }
    return true;
  }

  private onSelectedItemsDeleted(baseItemInfos: Array<BaseItemInfo>): void {
    for (let info of baseItemInfos) {
      if (info?.uri) {
        this.selectedUris = this.selectedUris.filter((item: string) => {
          return info?.uri != item;
        })
      }
    }
  }

  private onExceedMaxSelected(exceedMaxCountType: MaxCountType): void {
  }

  private onCurrentAlbumDeleted(): void {
  }
  // [End PickerController_callbacks]

  aboutToAppear() {
    // 设置选项参数
    this.pickerOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
    this.pickerOptions.isPreviewForSingleSelectionSupported = false;
    this.pickerOptions.isSlidingSelectionSupported = false;
    this.pickerOptions.isRepeatSelectSupported = false;
  }

  @State currentIndex: number = 0;
  private controller: TabsController = new TabsController();

  @Builder
  tabBuilder(index: number) {
    Column() {
      Text($r('app.string.picker_controller_all'))
        .fontColor(this.currentIndex === index ? '#007DFF' : '#6B7280')
        .fontSize(16)
        .fontWeight(this.currentIndex === index ? 500 : 400)
        .lineHeight(22)
        .margin({ top: 17, bottom: 7 })
      Divider()
        .strokeWidth(2)
        .color('#007DFF')
        .opacity(this.currentIndex === index ? 1 : 0)
    }.width('100%')
  }

  handle(callback: AsyncCallback<number>): Promise<number> {
    let num = 1
    return new Promise((resolve, reject) => {
      if (num == 1) {
        resolve(100);
      } else {
        reject(100);
      }
    })
  }

  build() {
    Row() {
      Stack() {
        Column() {
          Row() {
            Button($r('app.string.picker_controller_save_as'))
              .width('25%')
              .height('50%')
              .margin({ top: 10, bottom: 10, left: 10, right: 10 })
              .onClick(() => {
                console.log("----save as new:--------------------------------------------");
                let replaceUris: Array<string> = [];
                this.trustedUris.forEach((uri: string) => {
                  replaceUris.push(uri);
                });
                this.trustedUris.splice(0, this.trustedUris.length);
                this.pickerController.saveTrustedPhotoAssets(
                  replaceUris,
                  (a, b) => {
                    console.log("this.pickerController.save as new, res:" + b);
                  },
                  undefined,
                  SaveMode.SAVE_AS
                );
              })

            Button($r('app.string.picker_controller_overwrite_save'))
              .width('25%')
              .height('50%')
              .margin({ top: 10, bottom: 10, left: 10, right: 10 })
              .onClick(() => {
                console.log("----save as overwrite:--------------------------------------------");
                let replaceUris: Array<string> = [];
                this.trustedUris.forEach((uri: string) => {
                  replaceUris.push(uri);
                });
                this.trustedUris.splice(0, this.trustedUris.length);

                this.pickerController.saveTrustedPhotoAssets(
                  replaceUris,
                  (a, b) => {
                    console.log("this.pickerController.save override, res:" + b)
                  },
                  undefined,
                  SaveMode.OVERWRITE
                );
              })

            Button($r('app.string.picker_controller_replace_url'))
              .width('25%')
              .height('50%')
              .margin({ top: 10, bottom: 10, left: 10, right: 10 })
              .onClick(() => {
                let mediaType = this.originUrl.split('.')[this.originUrl.split('.').length - 1];
                let boxPath = this.getReplaceUri(mediaType);
                this.trustedUris.push(boxPath);
                this.pickerController.replacePhotoPickerPreview(
                  this.originUrl,
                  boxPath,
                  (a, b) => {
                    console.log(
                      "this.pickerController.replaceUrl code" +
                      JSON.stringify(a) + ", res:" +
                      JSON.stringify(b)
                    )
                  }
                )
              })
          }.width('100%').height('10%')

          Row() {
            ForEach(this.selectedUris, (uri: string) => {
              Image(uri)
                .height('95%')
                .width('20%')
                .backgroundColor(this.allBackGroundColor)
                .onClick(() => {})
              
            }, (uri: string) => JSON.stringify(uri))
          }.width('100%').height('15%')

          Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {
            TabContent() {
              // [Start PickerControllerComponent_use]
              // 4. 创建PhotoPickerComponent组件
              PhotoPickerComponent({
                pickerOptions: this.pickerOptions,
                pickerController: this.pickerController,
                onSelect: (uri: string): void => this.onSelect(uri),
                onDeselect: (uri: string): void => this.onDeselect(uri),
                onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => 
                  this.onItemClicked(itemInfo, clickType),
                onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => 
                  this.onEnterPhotoBrowser(photoBrowserInfo),
                onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => 
                  this.onExitPhotoBrowser(photoBrowserInfo),
                onPickerControllerReady: (): void => this.onPickerControllerReady(),
                onSelectedItemsDeleted: (baseItemInfos: Array<BaseItemInfo>): void => 
                  this.onSelectedItemsDeleted(baseItemInfos),
                onExceedMaxSelected: (maxCountType: MaxCountType): void => 
                  this.onExceedMaxSelected(maxCountType),
                onCurrentAlbumDeleted: (): void => this.onCurrentAlbumDeleted()
              })
                .height('87%')
                .width('100%')
                .defaultFocus(true)
              // [End PickerControllerComponent_use]
            }.tabBar(this.tabBuilder(0))
          }
          .vertical(false)
          .barMode(BarMode.Fixed)
          .barWidth('100%')
          .barHeight(56)
          .animationDuration(100)
          .onChange((index: number) => {
            if (index === 1) {
              this.isShow = true;
            }
            this.currentIndex = index;
          })
          .width('100%')
          .height('84%')
          .backgroundColor('#F1F3F5')
          .scrollable(!this.isInPhotoBrowser)
        }.width('100%').height('100%')
      }
    }
  }

  private getReplaceUri(mediaType: string) {
    let boxPath = fileUri.getUriFromPath(this.context.filesDir + '/test1.jpg');
    if (mediaType === 'mp4') {
      boxPath = fileUri.getUriFromPath(this.context.filesDir + '/file1.mp4');
    }
    return boxPath;
  }
}
// [End PickerController_full]