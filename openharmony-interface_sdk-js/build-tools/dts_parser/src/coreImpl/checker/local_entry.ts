/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import { ApiResultSimpleInfo, ApiResultMessage, ApiBaseInfo, checkEntryType } from '../../typedef/checker/result_type';
import { Check } from './src/api_check_plugin';
import { LogUtil } from '../../utils/logUtil';
import { GenerateFile } from '../../utils/checkUtils';
import { compositiveResult, compositiveLocalResult, apiCheckResult, hierarchicalRelationsSet } from '../../utils/checkUtils';
import { DOC, DEFINE, CHANEGE } from './config/api_check_config.json';
import { ApiChangeCheck } from './src/check_api_diff';

/**
 * local entrance
 */
export class LocalEntry {

  static checkEntryLocal(checkParam: checkEntryType): ApiResultMessage[] {
    let allResult: ApiResultMessage[] = apiCheckResult;
    try {
      Check.scanEntry(checkParam.filePathArr, checkParam.prId);
      const incrementResult: ApiResultSimpleInfo[] = LocalEntry.filterIncrementResult(compositiveResult, checkParam.isIncrement);
      LocalEntry.maskAlarm(incrementResult, checkParam.fileRuleArr);
    } catch (error) {
      LogUtil.e('API_CHECK_ERROR', error);
    } finally {
      GenerateFile.writeFile(apiCheckResult, checkParam.output, {});
      if (checkParam.isOutExcel === 'true') {
        GenerateFile.writeExcelFile(apiCheckResult);
      }
    }
    return allResult;
  }

  /**
   * 过滤增量检查结果
   *
   * @param {ApiResultSimpleInfo[]} allResultInfo 所有apicheck结果
   * @param {boolean} isIncrement 是否为命令配置的增量检查，默认为true
   * @return {*}  {ApiResultSimpleInfo[]}
   * @memberof LocalEntry
   */
  static filterIncrementResult(allResultInfo: ApiResultSimpleInfo[], isIncrement: boolean): ApiResultSimpleInfo[] {
    // 不需要增量检查或者diff数据为空
    if (!isIncrement || hierarchicalRelationsSet.size === 0) {
      return allResultInfo;
    }
    return allResultInfo.filter((resultItem: ApiResultSimpleInfo) => {
      return !Boolean(process.env.IS_INCREMENT_CHECK) || LocalEntry.hasHierarchicalRelations(resultItem);
    });
  }

  static hasHierarchicalRelations(resultItem: ApiResultSimpleInfo): boolean {
    if (process.env.NODE_ENV === 'development') {
      return hierarchicalRelationsSet.has(resultItem.hierarchicalRelations);
    } else if (process.env.NODE_ENV === 'production') {
      return hierarchicalRelationsSet.has(resultItem.hierarchicalRelations);
    }
    return hierarchicalRelationsSet.has(resultItem.hierarchicalRelations);
  }

  static maskAlarm(allResultInfo: ApiResultSimpleInfo[], fileRuleArr: string[]): void {
    const localScan: boolean = (fileRuleArr.length === 1 && fileRuleArr[0] === 'all') ? true : false;
    const apiCheckInfos: Map<string, string> = new Map(Object.entries({ ...DOC, ...DEFINE, ...CHANEGE }));
    let apiCheckAdmissiveSet: Set<string> = new Set();
    if (localScan) {
      apiCheckAdmissiveSet = new Set([...apiCheckInfos.values()]);
    } else {
      fileRuleArr.forEach((apiCheckItem: string) => {
        const apiCheckItemMessage: string | undefined = apiCheckInfos.get(apiCheckItem);
        if (apiCheckItemMessage) {
          apiCheckAdmissiveSet.add(apiCheckItemMessage);
        }
      });
    }
    let allResultInfoSet: Set<ApiResultSimpleInfo> = new Set(allResultInfo);
    const maskResult: ApiResultSimpleInfo[] = LocalEntry.filterAllResultInfo(allResultInfo,
      apiCheckInfos, apiCheckAdmissiveSet);
    maskResult.forEach(resultItem => {
      const apiBaseInfos: ApiBaseInfo = new ApiBaseInfo();
      apiBaseInfos
        .setApiName(resultItem.apiName)
        .setApiType(resultItem.apiType)
        .setHierarchicalRelations(resultItem.hierarchicalRelations)
        .setParentModuleName(resultItem.parentModuleName);

      const apiChecktErrorLog: ApiResultMessage = new ApiResultMessage();
      apiChecktErrorLog
        .setFilePath(resultItem.filePath)
        .setLocation(resultItem.location)
        .setLevel(resultItem.level)
        .setType(resultItem.type)
        .setMessage(resultItem.message)
        .setMainBuggyCode(resultItem.apiText)
        .setMainBuggyLine(resultItem.location)
        .setExtendInfo(apiBaseInfos);
      apiCheckResult.push(apiChecktErrorLog);
    });
  }

  static filterAllResultInfo(allResultInfo: ApiResultSimpleInfo[], apiCheckInfos: Map<string, string>,
    apiCheckAdmissiveSet: Set<string>): ApiResultSimpleInfo[] {
    return allResultInfo.filter((resultItem: ApiResultSimpleInfo) => {
      let resultItemInfo: string = resultItem.message.replace(/API check error of \[.*\]: /g, '');
      const regex1 = /Prohibited word in \[.*\]:{option}.The word allowed is \[.*\]\./g;
      const regex2 = /Prohibited word in \[.*\]:{ability} in the \[.*\] file\./g;
      const regex3 = /please confirm whether it needs to be corrected to a common word./g;
      const regex4 = /tag does not exist. Please use a valid JSDoc tag./g;
      const regex5 = /The event name should be named by small hump./g;
      if (/\d/g.test(resultItemInfo)) {
        resultItemInfo = resultItemInfo.replace(/\d+/g, '1');
      }
      if (regex1.test(resultItemInfo)) {
        resultItemInfo = JSON.stringify(apiCheckInfos.get('API_DEFINE_NAME_01')).replace(/\"/g, '');
      }
      if (regex2.test(resultItemInfo)) {
        resultItemInfo = JSON.stringify(apiCheckInfos.get('API_DEFINE_NAME_02')).replace(/\"/g, '');
      }
      if (regex3.test(resultItemInfo)) {
        resultItemInfo = resultItemInfo.replace(/\{.*\}/g, '{XXXX}');
      }
      if (regex4.test(resultItemInfo)) {
        resultItemInfo = resultItemInfo.replace(/\[.*\]/g, '[XXXX]');
      }
      if (regex5.test(resultItemInfo)) {
        resultItemInfo = resultItemInfo.replace(/\[.*\]/g, '[XXXX]');
      }
      if (/This name \[.*\] should be named by/g.test(resultItemInfo)) {
        resultItemInfo = resultItemInfo.replace(/\[.*\]/g, '[XXXX]');
      }
      if (apiCheckAdmissiveSet.has(resultItemInfo)) {
        const key: string = LocalEntry.filterApiCheckInfos(apiCheckInfos, resultItemInfo);
        if (key !== '') {
          resultItem.setType(key);
        }
      }
      return apiCheckAdmissiveSet.has(resultItemInfo);
    });
  }

  static filterApiCheckInfos(apiCheckInfos: Map<string, string>, resultItemInfo: string): string {
    for (let [key, value] of apiCheckInfos.entries()) {
      if (value === resultItemInfo) {
        return key;
      }
    }
    return '';
  }

  static apiChangeCheckEntryLocal(checkParam: checkEntryType): ApiResultMessage[] {
    let apiChangeCheckResult: ApiResultMessage[] = apiCheckResult;
    try {
      ApiChangeCheck.checkApiChange(checkParam.prId);
      LocalEntry.maskAlarm(compositiveResult, checkParam.fileRuleArr);
    } catch (error) {
      LogUtil.e('API_CHECK_ERROR', error);
    } finally {
      GenerateFile.writeFile(apiCheckResult, checkParam.output, {});
      if (checkParam.isOutExcel === 'true') {
        GenerateFile.writeExcelFile(apiCheckResult);
      }
    }
    return apiChangeCheckResult;
  }
}
