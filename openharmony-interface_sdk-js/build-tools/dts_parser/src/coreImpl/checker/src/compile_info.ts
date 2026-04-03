/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, softwarecheck{  }
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ApiResultSimpleInfo, ApiResultInfo, ErrorMessage, ApiCheckInfo } from '../../../typedef/checker/result_type';
import { CommonFunctions } from '../../../utils/checkUtils';

export class AddErrorLogs {
  /**
   * 按照格式生成错误信息
   * @param { ApiCheckInfo } apiInfo -api infomation
   * @param { ApiResultSimpleInfo[] } checkErrorInfos -save api check base error info
   * @param { ApiResultInfo[] } checkErrorAllInfos -save api check error info
   */
  static addAPICheckErrorLogs(apiInfo: ApiCheckInfo, checkErrorInfos: ApiResultSimpleInfo[],
    checkErrorAllInfos: ApiResultInfo[],
  ): void {
    const location = JSON.stringify(apiInfo.getApiPostion().line);
    const errorMessage: string = `API check error of [${apiInfo.getErrorType()}]: ${apiInfo.getErrorInfo()}`;
    const apiChecktSimpleErrorLog: ApiResultSimpleInfo = new ApiResultSimpleInfo();

    apiChecktSimpleErrorLog
      .setID(apiInfo.getErrorID())
      .setLevel(apiInfo.getErrorLevel())
      .setLocation(location)
      .setFilePath(apiInfo.getFilePath())
      .setMessage(errorMessage)
      .setApiText(apiInfo.getApiText())
      .setApiName(apiInfo.getApiName())
      .setApiType(apiInfo.getApiType())
      .setHierarchicalRelations(apiInfo.getHierarchicalRelations())
      .setParentModuleName(apiInfo.getParentModuleName());

    const apiCheckErrorLog: ApiResultInfo = new ApiResultInfo();
    apiCheckErrorLog
      .setErrorType(apiInfo.getErrorType())
      .setLocation(apiInfo.getFilePath().slice(apiInfo.getFilePath().indexOf('api'), apiInfo.getFilePath().length) + `(line: ${location})`)
      .setApiType(apiInfo.getApiType())
      .setMessage(errorMessage)
      .setVersion(apiInfo.getSinceNumber())
      .setLevel(apiInfo.getErrorLevel())
      .setApiName(apiInfo.getApiName())
      .setApiFullText(apiInfo.getApiText())
      .setBaseName(apiInfo.getFilePath().slice(apiInfo.getFilePath().lastIndexOf('\\') + 1, apiInfo.getFilePath().length))
      .setHierarchicalRelations(apiInfo.getHierarchicalRelations())
      .setParentModuleName(apiInfo.getParentModuleName())
      .setDefectType('');
    let isLostKitErrorInfo: boolean = apiInfo.getErrorInfo() === CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['kit']);
    let isLostFileErrorInfo: boolean = apiInfo.getErrorInfo() === CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['file']);
    let hasLostKitErrorInfo: string[] = [];
    let hasLostfileErrorInfo: string[] = [];

    checkErrorInfos.forEach((checkErrorInfo: ApiResultSimpleInfo) => {
      const checkErrorMessage: string = checkErrorInfo.getMessage().replace(/API check error of \[.*\]: /g, '');
      const keyMessage: string = checkErrorInfo.getFilePath() + checkErrorMessage;
      if (keyMessage === apiInfo.getFilePath() + CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['kit'])) {
        hasLostKitErrorInfo.push(checkErrorInfo.getFilePath() + checkErrorInfo.getMessage());
      }
      if (keyMessage === apiInfo.getFilePath() + CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['file'])) {
        hasLostfileErrorInfo.push(checkErrorInfo.getFilePath() + checkErrorInfo.getMessage());
      }
    });
    if ((isLostKitErrorInfo && hasLostKitErrorInfo.length !== 0) ||
      (isLostFileErrorInfo && hasLostfileErrorInfo.length !== 0)) {
      return;
    }
    checkErrorInfos.push(apiChecktSimpleErrorLog);
    checkErrorAllInfos.push(apiCheckErrorLog);
  }
}
