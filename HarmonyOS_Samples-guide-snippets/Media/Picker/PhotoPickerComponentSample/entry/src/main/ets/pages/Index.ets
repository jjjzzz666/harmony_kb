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

// [Start PhotoPickerComponent_full]
// [Start PhotoPickerComponent_import]
// 1. 导入PhotoPicker组件模块文件
import {
  PhotoPickerComponent,
  PickerController,
  PickerOptions,
  DataType,
  BaseItemInfo,
  ItemInfo,
  PhotoBrowserInfo,
  ItemType,
  ClickType,
  MaxCountType,
  PhotoBrowserRange,
  ReminderMode,
  photoAccessHelper
} from '@kit.MediaLibraryKit';
// [End PhotoPickerComponent_import]

@Entry
@Component
struct PhotoPickerComponentDemo {
  // [Start PhotoPickerComponent_create]
  // 2. 创建选择选项实例
  // 组件初始化时设置参数信息。
  pickerOptions: PickerOptions = new PickerOptions();

  // 组件初始化完成后，可控制组件部分行为。
  @State pickerController: PickerController = new PickerController();
  // [End PhotoPickerComponent_create]

  // 已选择的图片。
  @State selectUris: Array<string> = new Array<string>();

  // 目前选择的图片。
  @State currentUri: string = '';

  // 是否显示大图。
  @State isBrowserShow: boolean = false;

  aboutToAppear() {
    // [Start PhotoPickerComponent_config]
    // 3. 初始化选择选项实例
    // 设置picker宫格页数据类型
    this.pickerOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE // 图片和视频都显示。
    // 最大选择数量。
    this.pickerOptions.maxSelectNumber = 5;
    // 超出最大选择数量时。
    this.pickerOptions.maxSelectedReminderMode = ReminderMode.TOAST;
    // 是否展示搜索框，默认false。
    this.pickerOptions.isSearchSupported = true;
    // 是否支持拍照，默认false。
    this.pickerOptions.isPhotoTakingSupported = true;
    // [End PhotoPickerComponent_config]
  }

  // [Start PhotoPickerComponent_callbacks]
  // 4. 实现相关回调
  // 资源被选中回调，返回资源的信息，以及选中方式。
  private onItemClicked(itemInfo: ItemInfo, clickType: ClickType): boolean {
    if (!itemInfo) {
      return false;
    }
    let type: ItemType | undefined = itemInfo.itemType;
    let uri: string | undefined = itemInfo.uri;
    if (type === ItemType.CAMERA) {
      // 点击相机item。
      return true; // 返回true则拉起系统相机，若应用需要自行处理则返回false。
    } else {
      if (clickType === ClickType.SELECTED) {
        // 应用做自己的业务处理。
        if (uri) {
          this.selectUris.push(uri);
          this.pickerOptions.preselectedUris = [...this.selectUris];
        }
        return true; // 返回true则勾选，否则则不响应勾选。
      } else {
        if (uri) {
          this.selectUris = this.selectUris.filter((item: string) => {
            return item != uri;
          });
          this.pickerOptions.preselectedUris = [...this.selectUris];
        }
      }
      return true;
    }
  }

  // 进入大图的回调。
  private onEnterPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {
    this.isBrowserShow = true;
    return true;
  }

  // 退出大图的回调。
  private onExitPhotoBrowser(photoBrowserInfo: PhotoBrowserInfo): boolean {
    this.isBrowserShow = false;
    return true;
  }

  // 接收到该回调后，便可通过pickerController相关接口向picker发送数据，在此之前不生效。
  private onPickerControllerReady(): void {
  }

  // 大图左右滑动的回调。
  private onPhotoBrowserChanged(browserItemInfo: BaseItemInfo): boolean {
    this.currentUri = browserItemInfo.uri ?? '';
    return true;
  }

  // 已勾选图片被删除时的回调。
  private onSelectedItemsDeleted(baseItemInfos: Array<BaseItemInfo>): void {
  }

  // 超过最大选择数量再次点击时的回调。
  private onExceedMaxSelected(exceedMaxCountType: MaxCountType): void {
  }

  // 当前相册被删除时的回调。
  private onCurrentAlbumDeleted(): void {
  }
  // [End PhotoPickerComponent_callbacks]

  build() {
    Flex({
      direction: FlexDirection.Column,
      alignItems: ItemAlign.Start
    }) {
      // [Start PhotoPickerComponent_use]
      // 5. 创建PhotoPickerComponent组件
      PhotoPickerComponent({
        pickerOptions: this.pickerOptions,
        pickerController: this.pickerController,
        onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => 
          this.onItemClicked(itemInfo, clickType),
        onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => 
          this.onEnterPhotoBrowser(photoBrowserInfo),
        onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => 
          this.onExitPhotoBrowser(photoBrowserInfo),
        onPickerControllerReady: (): void => this.onPickerControllerReady(),
        onPhotoBrowserChanged: (browserItemInfo: BaseItemInfo): boolean => 
          this.onPhotoBrowserChanged(browserItemInfo),
        onSelectedItemsDeleted: (baseItemInfos: Array<BaseItemInfo>) => 
          this.onSelectedItemsDeleted(baseItemInfos),
        onExceedMaxSelected: (exceedMaxCountType: MaxCountType) => 
          this.onExceedMaxSelected(exceedMaxCountType),
        onCurrentAlbumDeleted: () => this.onCurrentAlbumDeleted()
      })
      // [End PhotoPickerComponent_use]

      // 这里模拟应用侧底部的选择栏。
      if (this.isBrowserShow) {
        // 已选择的图片缩略图。
        Row() {
          ForEach(this.selectUris, (uri: string) => {
            if (uri === this.currentUri) {
              Image(uri)
                .height(50)
                .width(50)
                .onClick(() => {})
                .borderWidth(1)
                .borderColor('red')
            } else {
              Image(uri)
                .height(50)
                .width(50)
                .onClick(() => {
                  this.pickerController.setData(DataType.SET_SELECTED_URIS, this.selectUris);
                  this.pickerController.setPhotoBrowserItem(uri, PhotoBrowserRange.ALL);
                })
            }
          }, (uri: string) => JSON.stringify(uri))
        }.alignSelf(ItemAlign.Center).margin(this.selectUris.length ? 10 : 0)
      } else {
        // 进入大图，预览已选择的图片。
        Button($r('app.string.photo_picker_preview'))
          .width('33%')
          .alignSelf(ItemAlign.Start)
          .height('5%')
          .margin(10)
          .onClick(() => {
            if (this.selectUris.length > 0) {
              this.pickerController.setPhotoBrowserItem(
                this.selectUris[0], 
                PhotoBrowserRange.SELECTED_ONLY
              );
            }
          })
      }
    }
  }
}
// [End PhotoPickerComponent_full]