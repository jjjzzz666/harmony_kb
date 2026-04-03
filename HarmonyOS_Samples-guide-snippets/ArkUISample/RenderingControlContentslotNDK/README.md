# ContentSlot：混合开发

## 介绍

本示例为[ContentSlot：混合开发](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/rendering-control/arkts-rendering-control-contentslot.md)的配套示例工程，展示了用于渲染并管理Native层使用C-API创建的组件。

## 效果预览

| 预览                                      | 
| -------------------------------------------- | 
<img src="./screenshots/rendering_control_contentslot.png" width="300" />

## 使用说明

1. 安装编译生成的hap包，并打开应用；
2. 查看创建好的组件；

## 工程目录

```
RenderingControlContentslotNDK
entry/src/main/ets/
└── pages
    └── Index.ets (获取内容界面)
entry/src/main/
├── cpp
│   ├── types
│   │   └── libentry
│   │       └── Index.d.ts (NDK函数对应的js映射)
│   ├── CMakeLists.txt (CMake脚本)
|   ├── manager.cpp (创建文本实现CPP文件)
|   ├── manager.h
│   └── napi_init.cpp (NDK函数)
└── resources
    ├── base
    │   ├── element
    │   │   ├── color.json
    │   │   ├── float.json
    │   │   └── string.json
    │   └── media
```

## 具体实现

1. ContentSlot混合开发的具体实现：首先在ArkTS侧创建NodeContent管理器并通过ContentSlot占位组件进行渲染，其中NodeContent负责管理Native侧创建的组件。其次在Native侧使用C-API创建具体的UI组件。

## 相关权限

不涉及

## 依赖

不涉及

## 约束和限制

1. 本示例仅支持标准系统上运行, 支持设备：华为手机。

2. HarmonyOS系统：HarmonyOS 5.0.5 Release及以上。

3. DevEco Studio版本：6.0.0 Release及以上。

4. HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

## 下载

如需单独下载本工程，执行如下命令：

```
git init
git config core.sparsecheckout true
echo ArkUISample/RenderingControlContentslotNDK > .git/info/sparse-checkout
git remote add origin https://gitcode.com/harmonyos_samples/guide-snippets.git
git pull origin master
```