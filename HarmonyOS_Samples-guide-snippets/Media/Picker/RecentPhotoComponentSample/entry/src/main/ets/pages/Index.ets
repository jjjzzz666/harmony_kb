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

// [Start RecentPhoto_full]
// [Start RecentPhoto_import]
// 1. 导入最近图片组件模块文件
import {
  photoAccessHelper
} from '@kit.MediaLibraryKit';
import {
  RecentPhotoComponent, 
  RecentPhotoOptions, 
  PhotoSource, 
  RecentPhotoInfo, 
  RecentPhotoCheckResultCallback, 
  RecentPhotoClickCallback, 
  RecentPhotoCheckInfoCallback
} from '@ohos.file.RecentPhotoComponent';
import {
  BaseItemInfo
} from '@ohos.file.PhotoPickerComponent';
// [End RecentPhoto_import]

@Entry
@Component
struct PickerDemo {
  // [Start RecentPhotoOptions_create]
  // 2. 创建最近图片组件选择选项实例
  private recentPhotoOptions: RecentPhotoOptions = new RecentPhotoOptions();
  // [End RecentPhotoOptions_create]
  
  // 状态变量
  @State showRecentPhoto: boolean = true; // 设为true，运行时自动显示
  @State photoExists: boolean = false;
  @State selectedPhotoUri: string = '';

  aboutToAppear() {
    // [Start RecentPhotoOptions_config]
    // 3. 初始化最近图片组件选择选项实例
    // 设置数据类型，IMAGE_VIDEO_TYPE：图片和视频（默认值）、IMAGE_TYPE：图片、VIDEO_TYPE：视频、MOVING_PHOTO_IMAGE_TYPE：动态图片。
    this.recentPhotoOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
    
    // 设置最近图片的时间范围，单位（秒），0表示所有时间
    this.recentPhotoOptions.period = 0;
    
    // 设置资源的来源，ALL：所有、CAMERA：相机、SCREENSHOT：截图。
    this.recentPhotoOptions.photoSource = PhotoSource.ALL;
    // [End RecentPhotoOptions_config]
  }

  // [Start RecentPhoto_callbacks]
  // 5. 实现相关回调
  private onRecentPhotoCheckResult(recentPhotoExists: boolean): void {
    // 存在符合条件的照片或视频
    this.photoExists = recentPhotoExists;
    if (recentPhotoExists) {
      console.info('The photo is exist.');
    } else {
      console.info('No photo exists.');
    }
  }

  private onRecentPhotoClick(recentPhotoInfo: BaseItemInfo): boolean {
    // 照片或视频返回
    if (recentPhotoInfo) {
      console.info('The photo uri is ' + recentPhotoInfo.uri);
      this.selectedPhotoUri = recentPhotoInfo.uri ?? '';
      return false; // 修改为false，防止点击后隐藏图片
    }
    return false; // 修改为false，防止点击后隐藏图片
  }

  private onRecentPhotoCheckInfo(recentPhotoExists: boolean, info: RecentPhotoInfo): void {
    // 是否存在符合条件的照片或视频，若存在则可以拿到该照片或视频的相关信息
    this.photoExists = recentPhotoExists;
  }
  // [End RecentPhoto_callbacks]

  build() {
    Column() {
      // 添加标题
      Text($r('app.string.recent_photo_get_photo'))
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 20 })
      
      // 显示结果区域
      if (this.showRecentPhoto) {
        // [Start RecentPhotoComponent_use]
        // 4. 创建RecentPhotoComponent组件
        RecentPhotoComponent({
          recentPhotoOptions: this.recentPhotoOptions,
          onRecentPhotoCheckResult: this.recentPhotoCheckResultCallback,
          onRecentPhotoClick: this.recentPhotoClickCallback,
          onRecentPhotoCheckInfo: this.recentPhotoCheckInfoCallback
        })
          .height(300)
          .width('90%')
          .margin({ top: 10 })
        // [End RecentPhotoComponent_use]
        
        // 显示选中的照片URI
        if (this.selectedPhotoUri) {
          Text(`${$r('app.string.recent_photo_selected')} ${this.selectedPhotoUri}`)
            .fontSize(14)
            .margin({ top: 10 })
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(2)
        }
        
        // 只有在检查完成后且确实不存在照片时才显示提示
        if (!this.photoExists && this.selectedPhotoUri === '') {
          Text($r('app.string.recent_photo_not_found'))
            .fontSize(16)
            .fontColor(Color.Red)
            .margin({ top: 50 })
        }
      }
    }
    .width('100%')
    .padding(20)
  }
  
  private recentPhotoCheckResultCallback: RecentPhotoCheckResultCallback = 
    (recentPhotoExists: boolean) => this.onRecentPhotoCheckResult(recentPhotoExists);
  private recentPhotoClickCallback: RecentPhotoClickCallback = 
    (recentPhotoInfo: BaseItemInfo): boolean => this.onRecentPhotoClick(recentPhotoInfo);
  private recentPhotoCheckInfoCallback: RecentPhotoCheckInfoCallback = 
    (recentPhotoExists: boolean, info: RecentPhotoInfo) => this.onRecentPhotoCheckInfo(recentPhotoExists, info);  
}
// [End RecentPhoto_full]