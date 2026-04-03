/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [Start data_cloud_sync_of_rdb_store_one]
import { relationalStore, cloudData } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';
import EntryAbility from '../entryability/EntryAbility';
const context = EntryAbility.getContext();
let store: relationalStore.RdbStore | undefined = undefined
// [End data_cloud_sync_of_rdb_store_one]

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Column() {
      Button('设备A设置端云同步表')
        .fontSize(20)
        .onClick(async () => {
          // [Start data_cloud_sync_of_rdb_store_two]
          // 创建关系型数据库，设置端云同步分布式表
          const STORE_CONFIG: relationalStore.StoreConfig = {
            name: 'RdbTest.db', // 数据库文件名
            securityLevel: relationalStore.SecurityLevel.S1 // 数据库安全级别
          };
          store = await relationalStore.getRdbStore(context, STORE_CONFIG);
          try {
            if (store != undefined) {
              await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE(employeeId TEXT PRIMARY KEY,NAME TEXT NOT NULL,AGE INTEGER,SALARY REAL NOT NULL,CODES BLOASSET ASSET)',
                null);
              await store.executeSql('CREATE TABLE IF NOT EXISTS SALARY(costId TEXT PRIMARY KEY,employeeId TEXT,SALARY REAL NOT NULL, performance_SALARY REAL, BONOUREAL)',
                null);
              // 设置分布式同步表，支持表在设备和云端之间分布式
              let config: relationalStore.DistributedConfig = {
                autoSync: true // true表示该表支持自动同步和手动同步，false表示该表只支持手动同步，不支持自动同步
              };
              // 设置分布式数据库表
              store.setDistributedTables(["EMPLOYEE", "SALARY"], relationalStore.DistributedType.DISTRIBUTED_CLOUD, config);
              // 进行数据的相关操作.....
              // [Start data_cloud_sync_of_rdb_store_two]
            }
          } catch (err) {
            console.error(`executeSql or setDistributedTables failed,errcode:${JSON.stringify(err)}.`);
          }
        })
        .width('50%')
        .margin({ top: 20, left: 50 })

      Button('设备B设置端元同步策略')
        .fontSize(20)
        .onClick(async () => {
          // [Start data_cloud_sync_of_rdb_store_three]
          try {
            // 设置网络策略为仅允许WIFI网络同步
            // 第二个参数不传或者传undefined和null，代表取消策略设置。按全局策略进行配置
            // 网络策略中，第二个参数内枚举代表可同步的网络。即：传空列表则代表所有网络均不允许同步，传WIFI和蜂窝则代表WIFI和蜂窝均可同步
            await cloudData.setCloudStrategy(cloudData.StrategyType.NETWORK, [cloudData.NetWorkStrategy.WIFI])
              .then(() => {
                console.info(`setCloudStrategy success.`);
              })
              .catch((err: BusinessError) => {
                console.error(`setCloudStrategy failed,errcode:${JSON.stringify(err)}.`);
              });
          } catch (err) {
            console.error(`setCloudStrategy failed,errcode:${JSON.stringify(err)}.`);
          }
          // [End data_cloud_sync_of_rdb_store_three]
        })
        .width('50%')
        .margin({ top: 20, left: 50 })

      Button('端云同步数据')
        .fontSize(20)
        .onClick(async () => {
          // 创建关系型数据库，设置端云同步分布式表
          const STORE_CONFIG: relationalStore.StoreConfig = {
            name: 'RdbTest.db', // 数据库文件名
            securityLevel: relationalStore.SecurityLevel.S1 // 数据库安全级别
          };
          store = await relationalStore.getRdbStore(context, STORE_CONFIG);
          try {
            if (store != undefined) {
              // [Start data_cloud_sync_of_rdb_store_four]
              // 手动执行对指定表的端云同步，使用SYNC_MODE_TIME_FIRST模式，进行手动同步，表示数据从修改时间较近的一端同步到修改时间较远的一端。
              const tables = ["table1", "table2"];
              store.cloudSync(relationalStore.SyncMode.SYNC_MODE_TIME_FIRST, tables,
                (ProgressDetails: relationalStore.ProgressDetails) => {
                  console.info("Progress:" + `\n` + JSON.stringify(ProgressDetails));
                }, (err: BusinessError) => {
                  if (err) {
                    console.error(`Cloud sync failed,code is ${err.code},message is ${err.message}`);
                    return;
                  }
                  console.info(`Cloud sync success`);
                });
              // [end data_cloud_sync_of_rdb_store_four]
            }
          } catch (err) {
            console.error(`cloudSync failed,code is ${err.code},message is ${err.message}`);
          }
        })
        .width('50%')
        .margin({ top: 20, left: 50 })

      Button('设备B订阅数据变化通知')
        .fontSize(20)
        .onClick(async () => {
          // 创建关系型数据库，设置端云同步分布式表
          const STORE_CONFIG: relationalStore.StoreConfig = {
            name: 'RdbTest.db', // 数据库文件名
            securityLevel: relationalStore.SecurityLevel.S1 // 数据库安全级别
          };
          store = await relationalStore.getRdbStore(context, STORE_CONFIG);

          // [Start data_cloud_sync_of_rdb_store_five]
          let accountObserver = (accounts: Array<string>) => {
            for (let i = 0; i < accounts.length; i++) {
              console.info(`${accounts[i]} data changed`);
            }
          }
          try {
            // 订阅云端数据更改,需要传入accountObserver函数
            if (store != undefined) {
              (store as relationalStore.RdbStore).on("dataChange", relationalStore.SubscribeType.SUBSCRIBE_TYPE_CLOUD, accountObserver);
            }
          } catch (err) {
            console.error(`Register observer failed,code is ${err.code},message is ${err.message}`);
          }
          try {
            // 当前不需要订阅端云数据变化时，可以将其取消
            if (store != undefined) {
              (store as relationalStore.RdbStore).off('dataChange', relationalStore.SubscribeType.SUBSCRIBE_TYPE_CLOUD,
                accountObserver);
            }
          } catch (err) {
            let code = (err as BusinessError).code;
            let message = (err as BusinessError).message
            console.error(`Unregister observer failed, code is ${code},message is ${message}`);
          }
          // [End data_cloud_sync_of_rdb_store_five]
        })
        .width('50%')
        .margin({ top: 20, left: 50 })

      Button('查询云侧数据变化')
        .fontSize(20)
        .onClick(async () => {
          // [Start data_cloud_sync_of_rdb_store_six]
          const STORE_CONFIG: relationalStore.StoreConfig = {
            name: 'RdbTest.db',
            autoCleanDirtyData: false,
            securityLevel: relationalStore.SecurityLevel.S1
          };
          store = await relationalStore.getRdbStore(context, STORE_CONFIG);

          // ...
          // 此处需要应用获取之前保存的cursor: getCursor()
          // 获取应用上次已同步的cursor，需要应用自己持久化
          let currentCursor: number = 0; // 已获取的上次同步cursor
          let predicates = new relationalStore.RdbPredicates("EMPLOYEE");
          predicates.greaterThan(relationalStore.Field.CURSOR_FIELD, currentCursor);
          predicates.and();
          // 只获取云端变化的数据
          predicates.equalTo(relationalStore.Field.ORIGIN_FIELD, relationalStore.Origin.CLOUD);
          predicates.orderByAsc(relationalStore.Field.CURSOR_FIELD);
          if (store == undefined) {
            return;
          }
          // uuid：同步表中的主键
          let resultSet: relationalStore.ResultSet = await store.query(predicates, ["uuid"]);
          if (!resultSet || !resultSet.goToFirstRow()) {
            return;
          }
          let cursor: number = 0;
          let deleteFlag: number = 0;
          do {
            cursor = resultSet.getLong(resultSet.getColumnIndex(relationalStore.Field.CURSOR_FIELD));
            deleteFlag = resultSet.getLong(resultSet.getColumnIndex(relationalStore.Field.DELETED_FLAG_FIELD));
            // 判断应用是否存在端云同步删除操作
            if (deleteFlag) {
              // 处理删除逻辑
            } else {
              // 处理非删除逻辑
            }
          } while (resultSet.goToNextRow());
          // 清理脏数据
          store.cleanDirtyData("EMPLOYEE", cursor);
          // 保存新的cursor值，以便下次获取数据同步更新使用
          // SaveCursor("EMPLOYEE", cursor)
          resultSet.close();
          // [Start data_cloud_sync_of_rdb_store_six]
        })
        .width('50%')
        .margin({ top: 20, left: 50 })
    }
    .height('100%')
    .width('100%')
  }
}