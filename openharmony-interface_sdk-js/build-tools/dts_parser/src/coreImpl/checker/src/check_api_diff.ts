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

import path from 'path';
import fs from 'fs';
import { FilesMap, Parser } from '../../parser/parser';
import { DiffHelper } from '../../diff/diff';
import { FileUtils } from '../../../utils/FileUtils';
import { BasicDiffInfo } from '../../../typedef/diff/ApiInfoDiff';
import { AddErrorLogs } from './compile_info';
import { compositiveResult, compositiveLocalResult, CommonFunctions, hierarchicalRelationsSet } from '../../../utils/checkUtils';
import {
  ErrorType,
  ErrorID,
  LogType,
  ErrorLevel,
  ErrorMessage,
  incompatibleApiDiffTypes,
  ApiCheckInfo,
  ErrorBaseInfo,
} from '../../../typedef/checker/result_type';
import { ApiDiffType } from '../../../typedef/diff/ApiInfoDiff';
import { ApiInfo } from '../../../typedef/parser/ApiInfoDefination';

export class ApiChangeCheck {
  static checkApiChange(prId: string): void {
    let rootDir: string = '';
    const onlineDir: string = path.resolve(
      FileUtils.getBaseDirName(),
      `../../../../Archive/patch_info/openharmony_interface_sdk-js_${prId}`
    );
    const localDir: string = path.resolve(FileUtils.getBaseDirName(), prId);

    if (fs.existsSync(onlineDir)) {
      process.env.IS_INCREMENT_CHECK = 'true';
      rootDir = onlineDir;
    } else if (fs.existsSync(localDir)) {
      process.env.IS_INCREMENT_CHECK = 'true';
      rootDir = localDir;
    } else {
      process.env.IS_INCREMENT_CHECK = undefined;
    }
    const oldFileDir: string = path.resolve(rootDir, './old');
    const newFileDir: string = path.resolve(rootDir, './new');
    if (!fs.existsSync(oldFileDir) || !fs.existsSync(newFileDir)) {
      return;
    }
    const status: fs.Stats = fs.statSync(oldFileDir);
    let diffInfos: BasicDiffInfo[] = [];
    if (status.isDirectory()) {
      const oldSDKApiMap: FilesMap = Parser.parseDir(oldFileDir);
      const newSDKApiMap: FilesMap = Parser.parseDir(newFileDir);
      diffInfos = DiffHelper.diffSDK(oldSDKApiMap, newSDKApiMap, false, true);
    } else {
      const oldSDKApiMap: FilesMap = Parser.parseFile(path.resolve(oldFileDir, '..'), oldFileDir);
      const newSDKApiMap: FilesMap = Parser.parseFile(path.resolve(newFileDir, '..'), newFileDir);
      diffInfos = DiffHelper.diffSDK(oldSDKApiMap, newSDKApiMap, false, true);
    }
    diffInfos.forEach((diffInfo: BasicDiffInfo) => {
      hierarchicalRelationsSet.add(diffInfo.oldHierarchicalRelations.join('|'))
        .add(diffInfo.newHierarchicalRelations.join('|'));
      if (diffInfo.getIsCompatible() !== false) {
        return;
      }
      const errorInfo: ErrorMessage | undefined = incompatibleApiDiffTypes.get(diffInfo.getDiffType());
      if (diffInfo.getDiffType() === ApiDiffType.REDUCE) {
        const dtsName = path.basename(diffInfo.getOldDtsName());
        let apiInfoDiff: ApiCheckInfo = new ApiCheckInfo();
        const hierarchicalRelations: string[] = diffInfo.getOldHierarchicalRelations();
        const parentModuleName: string = hierarchicalRelations[hierarchicalRelations.length - 1];
        apiInfoDiff
          .setErrorID(ErrorID.API_CHANGE_ERRORS_ID)
          .setErrorLevel(ErrorLevel.MIDDLE)
          .setFilePath(dtsName)
          .setApiPostion(diffInfo.getOldPos())
          .setErrorType(ErrorType.API_CHANGE_ERRORS)
          .setLogType(LogType.LOG_JSDOC)
          .setSinceNumber(-1)
          .setApiName(diffInfo.getOldApiName())
          .setApiType(diffInfo.getApiType())
          .setApiText(diffInfo.getOldApiDefinedText())
          .setErrorInfo(errorInfo as string)
          .setHierarchicalRelations(diffInfo.getOldHierarchicalRelations().join('|'))
          .setParentModuleName(parentModuleName);

        AddErrorLogs.addAPICheckErrorLogs(apiInfoDiff, compositiveResult, compositiveLocalResult);
      } else {
        const dtsName = path.basename(diffInfo.getNewDtsName());
        let apiInfoDiff: ApiCheckInfo = new ApiCheckInfo();
        const hierarchicalRelations: string[] = diffInfo.getNewHierarchicalRelations();
        const parentModuleName: string = hierarchicalRelations[hierarchicalRelations.length - 1];
        apiInfoDiff
          .setErrorID(ErrorID.API_CHANGE_ERRORS_ID)
          .setErrorLevel(ErrorLevel.MIDDLE)
          .setFilePath(dtsName)
          .setApiPostion(diffInfo.getOldPos())
          .setErrorType(ErrorType.API_CHANGE_ERRORS)
          .setLogType(LogType.LOG_JSDOC)
          .setSinceNumber(-1)
          .setApiName(diffInfo.getNewApiName())
          .setApiType(diffInfo.getApiType())
          .setApiText(diffInfo.getNewApiDefinedText())
          .setErrorInfo(errorInfo as string)
          .setHierarchicalRelations(diffInfo.getNewHierarchicalRelations().join('|'))
          .setParentModuleName(parentModuleName);
        AddErrorLogs.addAPICheckErrorLogs(apiInfoDiff, compositiveResult, compositiveLocalResult);
      }
    });
  }
}
