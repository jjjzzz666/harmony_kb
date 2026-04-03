# 使用RecentPhotoComponent组件获取最近一张图片

## 介绍

本示例旨在演示如何通过使用RecentPhotoComponent组件获取最近一张图片，帮助开发者快速掌握RecentPhotoComponent组件的使用方法。

## 使用说明

1. 进入示例应用，页面将自动显示RecentPhotoComponent组件。
2. 系统会检查设备中是否存在最近图片。

配置显示多久时间段内的最近图片，单位为秒（s）。最长可配置时长为1天（86400s）。
当值小于等于0、大于86400或者未配置时，默认按最长时间段1天显示最近图片。当配置时间段内无符合的图片或视频时，组件不显示。

3. 如果存在符合条件的最近图片，组件会显示该图片。
4. 点击图片可以查看图片的详细信息，URI会在页面上显示。
5. 如果不存在符合条件的图片，将显示"未找到符合条件的最近图片"提示信息。

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
│  │  └──RecentPhotoComponentSample.test.ets            // 最近照片组件测试用例。
│  └──module.json5                                      // 测试配置文件。
```
## 相关权限

使用RecentPhotoComponent组件不需要显式申请权限，组件内部会自动处理权限请求。

## 依赖

不涉及。

## 约束与限制

1. 本示例仅支持在标准系统上运行。

2. 本示例为Stage模型，支持SDK 5.1.0版本。

3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。

4. 当前仅支持获取最近一张图片。