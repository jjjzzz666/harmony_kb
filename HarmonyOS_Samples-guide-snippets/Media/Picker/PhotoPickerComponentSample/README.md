# 使用PhotoPicker组件访问图片/视频

## 介绍

本示例旨在演示如何使用PhotoPicker组件访问图片和视频资源，即进行图片和视频的选择功能，帮助开发者快速掌握PhotoPicker组件的使用方法。

## 使用说明

1. 进入示例应用，页面将显示一个PhotoPicker组件。
2. 点击组件，会拉起系统相册，显示图片和视频资源。
3. 在相册中选择一张或多张图片/视频。
4. 选择完成后，组件会返回选择的资源信息。

## 工程目录
```
├──entry/src/main/ets                                  // 代码区。
│  ├──entryability
│  │  └──EntryAbility.ets
│  └──pages
│     └──Index.ets                                      // 示例页面。
├──entry/src/main/resources                             // 应用资源目录。
└──entry/src/ohosTest                                   // 测试用例目录。
│  ├──ets/test
│  │  ├──List.test.ets                                  // 测试入口文件。
│  │  └──PhotoPickerComponentSample.test.ets            // 照片选择组件测试用例。
│  └──module.json5                                      // 测试配置文件。

```

## 相关权限

使用PhotoPickerComponent组件不需要显式申请权限，组件内部会自动处理权限请求。

## 依赖

不涉及。

## 约束与限制

1. 本示例仅支持在标准系统上运行。

2. 本示例为Stage模型，支持SDK 5.1.0版本及以上。

3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。

4. 当前支持选择图片和视频类型的文件。
