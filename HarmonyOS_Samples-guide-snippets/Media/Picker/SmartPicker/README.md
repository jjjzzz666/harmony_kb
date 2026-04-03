# 基于PhotoPicker实现图片推荐功能

## 介绍

本示例旨在解决特殊场景需要相册picker提供图片推荐功能的问题，主要使用接口与组件两种方式，拉起系统photoPicker，并分别实现了基于recommendationType配置完成特定服务类型的图片推荐，以及基于textContextInfo配置完成文案的图片推荐 ，帮助开发者通过PhotoPicker实现图片推荐功能。

### 使用说明

1. 点击首页的两个按钮，分别进入通过组件实现与通过接口实现的页面。
2. 点击'不使用图片推荐能力'按钮，仅拉起一个普通的picker界面。
3. 下拉框选择身份证或二维码，点击基于特定服务推荐图片按钮，若相册中存在该类型的图片，会拉起对应类型图片的picker界面。
4. 输入文案（例如：人像、银行卡等），会识别并拉起特殊文案推荐picker进行推荐。
5. 当前TextContextInfo仅支持250字以内的简体中文，输入英文字符无法进行图片推荐。

## 工程目录
```
├──entry/src/main/ets                                  // 代码区。
│  ├──commons
│  │  └──utils
│  │     └──SmartPhotoPickerUtils.ets                   // picker接口工具类。
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                                      // 首页。
│  └──view
│     ├──ComponentImplPage.ets                          // 组件实现示例页面。
│     └──InterfaceImplPage.ets                          // 接口实现示例页面。
├──entry/src/main/resources                            // 应用资源目录。
└──entry/src/ohosTest                                   // 测试用例目录。
   ├──ets
   │  ├──testrunner
   │  │  └──OpenHarmonyTestRunner.ets                  // 测试入口文件。
   │  └──tests
   │     └──SmartPhotoPickerUtilsTest.ets              // 最近照片组件测试用例。
   └──resources
      └──base
         └──profile
            └──test.xml                               // 测试配置文件。
```

## 相关权限

不涉及。

## 依赖

不涉及。

## 约束与限制

1. 本示例仅支持在标准系统上运行。

2. 本示例为Stage模型，支持API18版本SDK，镜像版本号：5.1.0.107。

3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。

5. 当前仅支持推荐图片类型的文件。