# 关系型数据库端云数据同步(cloud)指南文档示例

### 介绍


此示例提供了一套完整的关系型数据端云同步的机制，包括但不限于分布式表、数据同步、数据变化通知操作、数据同步状态查询等。

### 效果预览
|------|
| ![image](screenshots/main.png) |

### 使用说明

1. 准备两台设备。

2. 使用IDE自动签名，编译，安装（两台设备都需要安装）。

3. 两台设备登录同一个华为账号，连接同一个wifi。

4. 设备A发生数据变更，设备B订阅数据变化通知实现端-云-端数据同步。

### 工程目录
```
entry/src/
|   |--- main/
|       |---ets/
|           |---entryability/EntryAbility.ets   // 应用启动加载的入口ability
|           |---entrybackupability/EntryBackupAbility.ets  // extensionAbility
|           |---pages/index.ets                 // entry主应用入口页面及接口调用实现
```


### 具体实现

* 设备A创建关系型数据库，设置端云同步分布式表。

* 设备B设置端云同步策略。

* 端云数据同步。

* 设备B订阅数据变化通知。

* 设备B收到数据变化通知后，可以使用cursor查询云侧数据变化。


### 相关权限

不涉及。

### 依赖

不涉及。

### 约束与限制

1.本示例仅支持标准系统上运行。

2.本示例为Stage模型，支持API20版本SDK，版本号：6.0.0.53，镜像版本号：OpenHarmony_6.0.0.53。

3.本示例需要使用DevEco Studio 6.0.0 Release (Build Version: 6.0.0.858, built on September 5, 2025)及以上版本才可编译运行。

### 下载

如需单独下载本工程，执行如下命令：

````
git init
git config core.sparsecheckout true
echo code/DocsSample/ArkData/Cloud/DataCloudSyncOfRdbStore > .git/info/sparse-checkout
git remote add origin https://gitee.com/harmonyos_samples/guide-snippets.git
git pull origin master
````