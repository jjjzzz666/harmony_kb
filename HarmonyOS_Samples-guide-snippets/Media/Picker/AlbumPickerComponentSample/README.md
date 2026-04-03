# 使用AlbumPicker组件访问相册列表

## 介绍

本示例旨在演示如何使用AlbumPicker组件访问相册列表，主要展示通过组件方式使用AlbumPicker进行相册选择功能，帮助开发者快速掌握AlbumPicker组件的使用方法。

## 使用说明

1. 进入示例应用，页面将显示一个按钮和PhotoPicker组件。
2. 点击'所有相册'按钮，会弹出AlbumPicker组件显示相册列表。
3. 相册列表分为三个标签页：系统模式、浅色模式和深色模式。
4. 在相册列表中选择一个相册后，下方的PhotoPicker组件会显示该相册中的图片。

## 工程目录

```
├──entry/src/main/ets                                  // 代码区。
│  ├──entryability                                    // 应用入口。
│  │  └──EntryAbility.ets                             // 入口能力。
│  └──pages                                           // 页面文件。
│     └──Index.ets                                    // 示例页面。
├──entry/src/main/resources                           // 应用资源目录。
└──entry/src/ohosTest                                 // 测试用例目录。
   ├──ets/test
   │  ├──List.test.ets                                // 测试入口文件。
   │  └──AlbumPickerComponentSample.test.ets          // 相册选择器组件测试用例。
   └──module.json5                                    // 测试配置文件。
```

## 相关权限

使用AlbumPicker组件不需要显式申请权限，组件内部会自动处理权限请求。

## 依赖

不涉及。

## 约束与限制

1. 本示例仅支持在标准系统上运行。

2. 本示例为Stage模型，支持SDK 5.1.0版本。

3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。

4. 当前支持访问系统相册列表。
