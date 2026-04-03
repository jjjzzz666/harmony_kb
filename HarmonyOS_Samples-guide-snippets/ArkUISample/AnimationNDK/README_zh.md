# UseAnimationNDK

## 介绍

本示例通过使用[ArkUI指南文档](https://gitcode.com/openharmony/docs/tree/master/zh-cn/application-dev/ui)中各场景的开发示例，展示在工程中，帮助开发者更好地理解ArkUI提供的组件及组件属性并合理使用。该工程中展示的代码详细描述可查如下链接：

1. [使用动画](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/ndk-use-animation.md)。

本示例展示了keyFrameAnimeteto、animateTo、tranisation及animator动画。该工程中展示的接口详细描述可查如下链接：

[native_animate.h](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-arkui/capi-native-animate-h.md)。

## 效果预览

| 帧动画效果预览                                      | 组件转场效果预览                                               |
| -------------------------------------------- |--------------------------------------------------------|
|<img src="./screenshots/Animation.gif" width="300" />| <img src="./screenshots/Animation2.gif" width="300" /> |

## 使用说明
1. 安装编译生成的hap包，并打开应用；
2. 点击关键帧动画下的组件，触发关键帧动画；
3. 点击Animeteto下的组件，触发AnimateTo动画；
4. 点击transition按键，触发组件显隐动画；
5. 点击create后点击play，触发Animator动画；

## 工程目录

```
AnimationNDK
entry/src/main/ets/
└── pages
    └── Index.ets
    └── TransitionAnimation.ets
    └── UseFrameAnimation.ets
entry/src/main/
├── cpp
│   ├── types
│   │   └── libentry
│   │       └── index.d.ts (对应的js映射)
│   ├── ArkUIAnimate.h (动画页面实现)
|   ├── ArkUIBaseNode.h (提供组件挂载与卸载)
|   ├── ArkUIButtonNode.h (button组件实现)
|   ├── ArkUIColumnNode.h (column组件实现)
|   ├── ArkUIListItemNode.h (listItem实现)
|   ├── ArkUIListNode.h (list组件实现)
|   ├── ArkUINode.h (通用属性实现)
|   ├── ArkUIScrollNode.h (scroll实现)
|   ├── ArkUITextNode.h (text组件实现)
|   ├── ArkUITransition.h
|   ├── NapiInit.cpp
|   ├── NativeEntry.cpp (使动画节点挂载到页面节点)
|   ├── NativeEntry.h
|   ├── NativeModule.h
│   └── NormalTextListExample.h
└── resources
    ├── base
    │   ├── element
    │   │   ├── color.json
    │   │   ├── float.json
    │   │   └── string.json
    │   └── media
```
### 具体实现

1. 组件出现/消失转场
  组件内转场通过NODE_XX_TRANSITION属性（XX包括：OPACITY、TRANSLATE、SCALE、ROTATE、MOVE）配置转场参数，在组件插入和删除时显示过渡动效
  （通过NODE_TRANSFORM_CENTER属性设置NODE_SCALE_TRANSITION和NODE_ROTATE_ROTATE动效的中心点坐标）。主要用于容器组件中子组件插入和删除时，提升用户体验。
2. 使用关键帧动画
  keyframeAnimateTo接口来指定若干个关键帧状态，实现分段的动画。同属性动画，布局类改变宽高的动画，内容都是直接到终点状态。
3. 使用帧动画
  帧动画具有逐帧回调的特性，便于开发者在每一帧中调整所需属性。通过提供onFrame逐帧回调，帧动画允许开发者在应用的每一帧设置属性值，从而实现组件属性值变化的自然过渡，营造出流畅的动画效果。帧动画接口可参考createAnimator。
  与属性动画相比，帧动画能让开发者实时感知动画进程，即时调整UI值，并具备事件即时响应和可暂停的优势，但在性能方面略逊于属性动画。当属性动画能满足需求时，建议优先采用属性动画接口实现。animateTo接口的使用可参考使用属性动画。

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
echo ArkUISample/AnimationNDK > .git/info/sparse-checkout
git remote add origin https://gitcode.com/harmonyos_samples/guide-snippets.git
git pull origin master
```