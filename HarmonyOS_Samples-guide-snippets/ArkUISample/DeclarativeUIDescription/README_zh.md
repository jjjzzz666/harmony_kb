# 声明式UI描述

## 介绍

ArkTS以声明方式组合和扩展组件来描述应用程序的UI，同时还提供了基本的属性、事件和子组件配置方法，帮助开发者实现应用交互逻辑

本示例为[声明式UI描述](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/state-management/arkts-declarative-ui-description.md)的配套示例工程。

本示例展示了声明式UI描述的基本步骤及开发过程中需要注意的事项。

## 使用说明
1. 在智能穿戴设备上安装编译生成的hap包，并打开应用。
2. 阅读具体源码结合文档来理解声明式UI描述

## 工程目录

```
entry/src/main/ets/
└─── pages
    └── Index.ets(声明式UI描述)
```

## 具体实现

1. 使用无参或有参方式创建组件，链式调用.属性()配置样式或行为，例如 Text('Hello').fontSize(20)。

2. 在容器组件中添加子组件，通过.on事件()配置交互逻辑，例如 Button('Click').onClick(() => {...})。

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
echo ArkUISample/DeclarativeUIDescription > .git/info/sparse-checkout
git remote add origin https://gitcode.com/harmonyos_samples/guide-snippets.git
git pull origin master
```