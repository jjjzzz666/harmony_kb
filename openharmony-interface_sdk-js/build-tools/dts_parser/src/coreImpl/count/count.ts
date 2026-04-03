/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { ApiStatisticsInfo } from '../../typedef/statistics/ApiStatistics';
import { ApiCountInfo } from '../../typedef/count/ApiCount';
import { FunctionUtils, KitData } from '../../utils/FunctionUtils';

export class ApiCountHelper {
  /**
   * 对api统计工具的结果进行处理，计算同一个api文件里的api个数
   * 
   * @param staticApiInfos 
   * @returns { ApiCountInfo[] }
   */
  static countApi(staticApiInfos: ApiStatisticsInfo[]): ApiCountInfo[] {
    const apiCountInfos: ApiCountInfo[] = [];
    const subSystemData: KitData = FunctionUtils.readKitFile();
    const filePathSet: Set<string> = subSystemData.filePathSet;
    const subsystemMap: Map<string, string> = subSystemData.subsystemMap;
    const kitNameMap: Map<string, string> = subSystemData.kitNameMap;
    filePathSet.forEach((filePath: string) => {
      let apiNumber: number = 0;
      let kitName: string = '';
      let apiCountInfo: ApiCountInfo = new ApiCountInfo();
      staticApiInfos.forEach((staticApiInfo: ApiStatisticsInfo) => {
        if (filePath === staticApiInfo.getFilePath().replace(/\\/g, '/')) {
          apiNumber++;
          kitName = staticApiInfo.getKitInfo();
        }
      });
      if (apiNumber > 0) {
        apiCountInfo
          .setFilePath(`api/${filePath}`)
          .setApiNumber(apiNumber)
          .setKitName(kitName === '' ? kitNameMap.get(filePath) : kitName)
          .setsubSystem(subsystemMap.get(filePath));
        apiCountInfos.push(apiCountInfo);
      }
    });
    return apiCountInfos;
  }
}

