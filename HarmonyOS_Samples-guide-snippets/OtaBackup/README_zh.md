# OtaBackup

### 介绍
OtaBackup 部件示例 Sample，应用接入数据备份恢复需要通过配置BackupExtensionAbility实现。

BackupExtensionAbility，是Stage模型中扩展组件ExtensionAbility的派生类。开发者可以通过修改配置文件定制备份恢复框架的行为，包括是否允许备份恢复，备份哪些文件等。

本sample主要用于指导开发者接入BackupExtensionAbility。

### 效果预览
不涉及

### 使用说明

#### 播放
不涉及

### 目录

仓目录结构如下：

```
OtaBackup/entry/src/main/
├─ets
│  ├─entryability
│  ├─entrybackupability
|  |---EntryBackupAbility.ets         // 数据恢复处理
│  └─pages
└─resources
    ├─base
    │  ├─element
    │  ├─media
    │  └─profile
    ├─dark
    │  └─element
    └─rawfile
```

### 相关权限
不涉及

### 依赖
不涉及。

### 约束与限制

1.本示例仅支持标准系统上运行，支持设备: RK3568;

2.本示例已适配API Version 20 版本SDK, 版本号 6.0 Release;

3.本示例需要使用DevEco Studio 版本号(6.0 Release) 及以上版本才可编译运行。