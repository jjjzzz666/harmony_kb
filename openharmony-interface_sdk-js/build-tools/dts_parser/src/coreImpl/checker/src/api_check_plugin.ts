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
import fs from 'fs';
import path from 'path';
import { Parser, FilesMap } from '../../parser/parser';
import { ApiInfo, BasicApiInfo, notJsDocApiTypes } from '../../../typedef/parser/ApiInfoDefination';
import {
  ErrorType,
  ErrorID,
  LogType,
  ErrorLevel,
  ErrorTagFormat,
  ErrorMessage,
  ApiCheckInfo,
  ErrorBaseInfo,
} from '../../../typedef/checker/result_type';
import { ClassInfo } from '../../../typedef/parser/ApiInfoDefination';
import { Comment } from '../../../typedef/parser/Comment';
import { compositiveResult, compositiveLocalResult, CommonFunctions, cleanApiCheckResult } from '../../../utils/checkUtils';
import { OrderCheck } from './tag_order_check';
import { TagNameCheck } from './tag_name_check';
import { LegalityCheck } from './tag_legality_check';
import { TagRepeatCheck } from './tag_repeat_check';
import { AddErrorLogs } from './compile_info';
import { TagValueCheck } from './tag_value_check';
import { WordsCheck } from './words_check';
import { ForbiddenWordsCheck } from './forbidden_words_check';
import { ApiNamingCheck } from './naming_check';
import { CheckHump } from './check_hump';
import { EventMethodChecker } from './event_method_check';
import { EventMethodData } from '../../../typedef/checker/event_method_check_interface';
import { ApiChangeCheck } from './check_api_diff';
import { TagInheritCheck } from './tag_inherit_check';
import { ChineseCheck } from './check_chinese';
import { AnonymousFunctionCheck } from './check_anonymous_function';
import { CheckErrorCode } from './check_error_code';

export let currentFilePath: string = '';

export class Check {
  /**
   * checker tool main entrance
   * @param { string[] } files -File path for storing file information.
   */
  static scanEntry(files: string[], prId: string): void {
    cleanApiCheckResult();
    ApiChangeCheck.checkApiChange(prId);
    files.forEach((filePath: string, index: number) => {
      currentFilePath = filePath;
      if (process.env.NODE_ENV !== 'development' && filePath.indexOf('build-tools') !== -1) {
        return;
      }
      console.log(`scaning file in no ${++index}!`);
      const fileParseResult: FilesMap = Check.parseAPICodeStyle(filePath);
      const baseInfos: BasicApiInfo[] = Parser.getAllBasicApi(fileParseResult);
      Check.checkNodeInfos(baseInfos as ClassInfo[]);
      const currFileInfo = fileParseResult.get(path.basename(filePath));
      if (currFileInfo) {
        CheckHump.checkAPIFileName(currFileInfo);
      }
      CheckHump.checkAllAPINameOfHump(baseInfos);
      //words check
      WordsCheck.wordCheckResultsProcessing(baseInfos);
      // event check
      const eventMethodChecker: EventMethodChecker = new EventMethodChecker(fileParseResult);
      const eventMethodDataMap: Map<string, EventMethodData> = eventMethodChecker.getAllEventMethod();
      eventMethodChecker.checkEventMethod(eventMethodDataMap);
    });
  }

  /**
   * Obtain the path of the file to be checked.
   * @param { string } url -File path for storing file information.
   * @returns { Array<string> } -file path array
   */
  static getMdFiles(url: string): Array<string> {
    const content: string = fs.readFileSync(url, 'utf-8');
    const mdFiles: Array<string> = content.split(/[(\r\n)\r\n]+/);
    return mdFiles;
  }

  /**
   * Based on a single file path,parse it using the Parser method.
   * @param { string } filePath -single file path to be checked
   * @returns { FilesMap }
   */
  static parseAPICodeStyle(filePath: string): FilesMap {
    const parseResult: FilesMap = Parser.parseFile(path.resolve(filePath, '..'), filePath);
    return parseResult;
  }

  /**
   * Obtain all API information and check api jsdoc
   * @param { ClassInfo[] } baseInfos
   */
  static checkNodeInfos(baseInfos: ClassInfo[]): void {
    let allNodeInfos: ApiInfo[] = [];
    Check.getHasJsdocApiInfos(baseInfos, allNodeInfos);
    // for all nodes of the current file
    allNodeInfos.forEach((singleApi: ApiInfo) => {
      const apiJsdoc: Comment.JsDocInfo | undefined = singleApi.getLastJsDocInfo();
      const apiJsdocTextLength: number = singleApi.getJsDocText().length;
      if (singleApi.getApiType() === 'Method' && singleApi.getParentApi()?.apiType === 'Struct') {
        return;
      }
      if (apiJsdoc === undefined || apiJsdocTextLength === 0) {
        const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
        errorBaseInfo
          .setErrorID(ErrorID.NO_JSDOC_ID)
          .setErrorLevel(ErrorLevel.MIDDLE)
          .setErrorType(ErrorType.NO_JSDOC)
          .setLogType(LogType.LOG_JSDOC)
          .setErrorInfo(ErrorMessage.ERROR_NO_JSDOC);
        const apiInfoNojsdoc: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
          errorBaseInfo);
        AddErrorLogs.addAPICheckErrorLogs(apiInfoNojsdoc, compositiveResult, compositiveLocalResult);
      } else {
        if (apiJsdoc.getKit() === 'NA') {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.WRONG_SCENE_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.WRONG_SCENE)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['kit']));
          const apiInfoNoKit: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoNoKit, compositiveResult, compositiveLocalResult);
        }
        if (!apiJsdoc.getFileTagContent()) {
          const apiInfo: ApiCheckInfo = new ApiCheckInfo();
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.WRONG_SCENE_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.WRONG_SCENE)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['file']));
          const apiInfoNoFile: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoNoFile, compositiveResult, compositiveLocalResult);
        }
        // legality check
        const tagLegalityCheckResult: ErrorTagFormat[] = LegalityCheck.apiLegalityCheck(singleApi, apiJsdoc);
        // order check
        const orderCheckResult: ErrorTagFormat = OrderCheck.orderCheck(singleApi, apiJsdoc);
        // api naming check
        const namingCheckResult: ErrorTagFormat = ApiNamingCheck.namingCheck(singleApi);
        // check jsdoc chinese
        const chineseCheckResult: ErrorTagFormat = ChineseCheck.checkChinese(apiJsdoc);
        // check error code
        const errorCodeResult: ErrorTagFormat = CheckErrorCode.checkErrorCode(apiJsdoc);
        // tags name check
        const tagNameCheckResult: ErrorTagFormat = TagNameCheck.tagNameCheck(apiJsdoc);
        // tags inherit check
        const tagInheritCheckResult: ErrorTagFormat[] = TagInheritCheck.tagInheritCheck(singleApi);
        // tags value check
        const tagValueCheckResult: ErrorTagFormat[] = TagValueCheck.tagValueCheck(singleApi, apiJsdoc);
        // tags repeat check
        const tagRepeatCheckResult: ErrorTagFormat[] = TagRepeatCheck.tagRepeatCheck(apiJsdoc);
        // api forbidden wors check
        const forbiddenWordsCheckResult: ErrorTagFormat = ForbiddenWordsCheck.forbiddenWordsCheck(singleApi as ClassInfo);

        const anonymousFunction: ErrorTagFormat = AnonymousFunctionCheck.checkAnonymousFunction(singleApi);

        if (!orderCheckResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.WRONG_ORDER_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.WRONG_ORDER)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(orderCheckResult.errorInfo);
          const apiInfoOrder: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoOrder, compositiveResult, compositiveLocalResult);
        }
        if (!tagNameCheckResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.UNKNOW_DECORATOR_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.UNKNOW_DECORATOR)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(tagNameCheckResult.errorInfo);
          const apiInfoName: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoName, compositiveResult, compositiveLocalResult);
        }
        if (!forbiddenWordsCheckResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.FORBIDDEN_WORDS_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.FORBIDDEN_WORDS)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(forbiddenWordsCheckResult.errorInfo);
          const apiInfoForbiddenWords: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoForbiddenWords, compositiveResult, compositiveLocalResult);
        }
        if (!namingCheckResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.NAMING_ERRORS_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.NAMING_ERRORS)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(namingCheckResult.errorInfo);
          const apiInfoNaming: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoNaming, compositiveResult, compositiveLocalResult);
        }
        if (!chineseCheckResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.JSDOC_HAS_CHINESE)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.JSDOC_HAS_CHINESE)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(chineseCheckResult.errorInfo);
          const apiInfoChineseCheck: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoChineseCheck, compositiveResult, compositiveLocalResult);
        }
        if (!errorCodeResult.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.ERROR_ERROR_CODE)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.ERROR_ERROR_CODE)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(errorCodeResult.errorInfo);
          const apiInfoErrorCode: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoErrorCode, compositiveResult, compositiveLocalResult);
        }
        tagInheritCheckResult.forEach((inheritCheckResult: ErrorTagFormat) => {
          if (!inheritCheckResult.state) {
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.WRONG_SCENE_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.WRONG_SCENE)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(inheritCheckResult.errorInfo);
            const apiInfoInherit: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoInherit, compositiveResult, compositiveLocalResult);
          }
        });
        tagLegalityCheckResult.forEach((legalityResult) => {
          if (legalityResult.state === false) {
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.WRONG_SCENE_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.WRONG_SCENE)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(legalityResult.errorInfo);
            const apiInfoInherit: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoInherit, compositiveResult, compositiveLocalResult);
          }
        });
        tagValueCheckResult.forEach((valueResult) => {
          if (valueResult.state === false) {
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.WRONG_VALUE_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.WRONG_VALUE)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(valueResult.errorInfo);
            const apiInfoValue: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoValue, compositiveResult, compositiveLocalResult);
          }
        });
        tagRepeatCheckResult.forEach((repeatResult) => {
          if (repeatResult.state === false) {
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.WRONG_SCENE_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.WRONG_SCENE)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(repeatResult.errorInfo);
            const apiInfoRepeat: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoRepeat, compositiveResult, compositiveLocalResult);
          }
        });
        if (!anonymousFunction.state) {
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.WRONG_SCENE_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.WRONG_SCENE)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(anonymousFunction.errorInfo);
          const apiInfoAnonymous: ApiCheckInfo = CommonFunctions.getErrorInfo(singleApi, apiJsdoc, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoAnonymous, compositiveResult, compositiveLocalResult);
        }
      }
    });
  }
  /**
   * Filter out all nodes with comments.
   * @param { BasicApiInfo[] } childNodeApis -original data.
   * @param { ApiInfo[] } childNodeInfos -processed data.
   */
  static getHasJsdocApiInfos(childNodeApis: BasicApiInfo[], childNodeInfos: ApiInfo[]): void {
    childNodeApis.forEach((childNodeApi) => {
      if (!notJsDocApiTypes.has(childNodeApi.getApiType())) {
        childNodeInfos.push(childNodeApi as ApiInfo);
      }
    });
    return;
  }
}
