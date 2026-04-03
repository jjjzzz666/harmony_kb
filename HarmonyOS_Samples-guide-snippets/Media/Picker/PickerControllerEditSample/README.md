# 使用PickerController将编辑后的图片替换为原图

## 介绍

本示例演示了如何在HarmonyOS应用中使用PhotoPicker和PickerController编辑图片并替换原图。同时启用了编辑功能的PhotoPicker组件，允许用户选择图片、编辑图片，并可以直接替换原图片或者保存为一个新的图片文件。

## 使用说明

1. 进入示例应用，页面将显示一个PhotoPicker组件。
2. 点击组件，会拉起系统相册，显示图片资源。
3. 选择一张图片后，会进入图片编辑界面。
4. 使用内置编辑工具修改图片。
5. 编辑完成后，点击'确认保存'按钮。
6. 在应用界面中，可以选择将编辑后的图片另存为新文件或覆盖原图。

## 工程目录
```
├──entry/src/main/ets                                  // 代码区。
│  ├──entryability                                     // 应用入口。
│  │  └──EntryAbility.ets                              // 入口能力。
│  └──pages                                            // 页面文件。
│     └──Index.ets                                      // 示例页面。
├──entry/src/main/resources                             // 应用资源目录。
└──entry/src/ohosTest                                   // 测试用例目录。
│  ├──ets/test
│  │  ├──List.test.ets                                  // 测试入口文件。
│  │  └──PickerControllerEditSample.test.ets            // 图片编辑控制器测试用例。
│  └──module.json5                                      // 测试配置文件。
```

## 相关权限

使用PhotoPicker组件不需要显式申请权限，组件内部会自动处理权限请求。

## 依赖

不涉及。

## 约束与限制

1. 本示例仅支持在标准系统上运行。

2. 本示例为Stage模型，支持SDK 5.1.0版本。

3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。

4. 当前仅支持编辑单张图片。

