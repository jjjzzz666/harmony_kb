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

import ts from 'typescript';
import { EventConstant } from '../../../utils/Constant';
import { EventMethodData, CollectParamStatus } from '../../../typedef/checker/event_method_check_interface';
import { ApiCheckInfo, ErrorBaseInfo, ErrorID, ErrorLevel, ErrorMessage, ErrorType, LogType } from '../../../typedef/checker/result_type';
import { ApiInfo, ApiType, BasicApiInfo, MethodInfo, ParamInfo } from '../../../typedef/parser/ApiInfoDefination';
import { CommonFunctions } from '../../../utils/checkUtils';
import { FilesMap, Parser } from '../../parser/parser';
import { AddErrorLogs } from './compile_info';
import { compositiveResult, compositiveLocalResult } from '../../../utils/checkUtils';
import { CheckHump } from './check_hump';
import { ApiCheckVersion } from '../config/api_check_version.json';
import { Check, currentFilePath } from './api_check_plugin';

export class EventMethodChecker {
  private apiData: FilesMap;
  constructor(apiData: FilesMap) {
    this.apiData = apiData;
  }

  public getAllEventMethod(): Map<string, EventMethodData> {
    const allNodeInfos: ApiInfo[] = Parser.getAllBasicApi(this.apiData) as ApiInfo[];
    let allBasicApi: ApiInfo[] = [];
    Check.getHasJsdocApiInfos(allNodeInfos, allBasicApi);
    const eventMethodInfo: MethodInfo[] = [];
    allBasicApi.forEach((basicApi: ApiInfo) => {
      if (basicApi.apiType === ApiType.METHOD && basicApi.getIsJoinType()) {
        eventMethodInfo.push(basicApi as MethodInfo);
      }
    });
    const eventMethodDataMap: Map<string, EventMethodData> = this.getEventMethodDataMap(eventMethodInfo);
    return eventMethodDataMap;
  }

  public checkEventMethod(eventMethodData: Map<string, EventMethodData>): void {
    eventMethodData.forEach((eventMethod: EventMethodData) => {
      const onEvent: MethodInfo[] = eventMethod.onEvents.length > 0 ? eventMethod.onEvents : [];
      const onEventPublishVersionValue: string = onEvent.length > 0 ? onEvent[0].jsDocInfos[0].since : '-1';
      const offEvent: MethodInfo[] = eventMethod.offEvents.length > 0 ? eventMethod.offEvents : [];
      const offEventPublishVersionValue: string = offEvent.length > 0 ? offEvent[0].jsDocInfos[0].since : '-1';
      const isLostOnEvent: boolean = eventMethod.onEvents.length === 0 && eventMethod.offEvents.length !== 0 &&
        offEventPublishVersionValue === JSON.stringify(ApiCheckVersion);
      const isLostOffEvent: boolean = eventMethod.onEvents.length !== 0 && eventMethod.offEvents.length === 0 &&
        onEventPublishVersionValue === JSON.stringify(ApiCheckVersion);

      // check on&off event pair
      if (isLostOnEvent || isLostOffEvent) {
        const firstEvent: BasicApiInfo = eventMethod.onEvents.concat(eventMethod.offEvents)[0];
        const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_ON_AND_OFF_PAIR, []);
        const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
        errorBaseInfo
          .setErrorID(ErrorID.API_PAIR_ERRORS_ID)
          .setErrorLevel(ErrorLevel.MIDDLE)
          .setErrorType(ErrorType.API_PAIR_ERRORS)
          .setLogType(LogType.LOG_JSDOC)
          .setErrorInfo(errorMessage);
        const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(firstEvent, undefined, currentFilePath,
          errorBaseInfo);
        AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
      }

      // check off event
      let offEvnetCallbackNumber: number = 0;
      let offCallbackRequiredNumber: number = 0;
      for (let i = 0; i < eventMethod.offEvents.length; i++) {
        const offEvent: MethodInfo = eventMethod.offEvents[i] as MethodInfo;
        if (offEvent.getParams().length < 2) {
          continue;
        }
        const eventCallbackStatus: CollectParamStatus = this.collectEventCallback(offEvent, offEvnetCallbackNumber,
          offCallbackRequiredNumber);
        offEvnetCallbackNumber = eventCallbackStatus.callbackNumber;
        offCallbackRequiredNumber = eventCallbackStatus.requiredCallbackNumber;
      }
      if (eventMethod.offEvents.length > 0 && offEventPublishVersionValue === JSON.stringify(ApiCheckVersion)) {
        if ((offEvnetCallbackNumber !== 0 && offEvnetCallbackNumber === eventMethod.offEvents.length &&
          offEvnetCallbackNumber === offCallbackRequiredNumber) ||
          (offEvnetCallbackNumber === 0 && eventMethod.offEvents.length !== 0)) {
          const firstEvent: BasicApiInfo = eventMethod.offEvents[0];
          const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_CALLBACK_OPTIONAL, []);
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.PARAMETER_ERRORS_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.PARAMETER_ERRORS)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(errorMessage);
          const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(firstEvent, undefined, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
        }
      }

      // check event first param
      const allEvents: BasicApiInfo[] = eventMethod.onEvents.concat(eventMethod.offEvents)
        .concat(eventMethod.emitEvents).concat(eventMethod.onceEvents);

      for (let i = 0; i < allEvents.length; i++) {
        const event: BasicApiInfo = allEvents[i];
        if (!this.checkVersionNeedCheck(event)) {
          continue;
        }
        const eventParams: ParamInfo[] = (event as MethodInfo).getParams();
        const eventPublishVersion: string = (event as MethodInfo).jsDocInfos[0].since;
        if (eventParams.length < 1 && eventPublishVersion === JSON.stringify(ApiCheckVersion)) {
          const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_WITHOUT_PARAMETER, []);
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.PARAMETER_ERRORS_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.PARAMETER_ERRORS)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(errorMessage);
          const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(event, undefined, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
          continue;
        }
        const firstParam: ParamInfo | undefined = eventParams.length ? eventParams[0] : undefined;
        if (firstParam === undefined || eventPublishVersion !== JSON.stringify(ApiCheckVersion)) {
          continue;
        }
        if (firstParam.getParamType() === ts.SyntaxKind.LiteralType) {
          const paramTypeName: string = firstParam.getType()[0].replace(/\'/g, '');
          if (paramTypeName === '') {
            const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_NAME_NULL,
              [firstParam.getApiName()]);
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.PARAMETER_ERRORS_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.PARAMETER_ERRORS)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(errorMessage);
            const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(event, undefined, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
          } else if (!CheckHump.checkSmallHump(paramTypeName)) {
            const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_NAME_SMALL_HUMP,
              [paramTypeName]);
            const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
            errorBaseInfo
              .setErrorID(ErrorID.PARAMETER_ERRORS_ID)
              .setErrorLevel(ErrorLevel.MIDDLE)
              .setErrorType(ErrorType.PARAMETER_ERRORS)
              .setLogType(LogType.LOG_JSDOC)
              .setErrorInfo(errorMessage);
            const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(event, undefined, currentFilePath,
              errorBaseInfo);
            AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
          }
        } else if (firstParam.getParamType() !== ts.SyntaxKind.StringKeyword) {
          const errorMessage: string = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_EVENT_NAME_STRING,
            [firstParam.getApiName()]);
          const errorBaseInfo: ErrorBaseInfo = new ErrorBaseInfo();
          errorBaseInfo
            .setErrorID(ErrorID.PARAMETER_ERRORS_ID)
            .setErrorLevel(ErrorLevel.MIDDLE)
            .setErrorType(ErrorType.PARAMETER_ERRORS)
            .setLogType(LogType.LOG_JSDOC)
            .setErrorInfo(errorMessage);
          const apiInfoEvent: ApiCheckInfo = CommonFunctions.getErrorInfo(event, undefined, currentFilePath,
            errorBaseInfo);
          AddErrorLogs.addAPICheckErrorLogs(apiInfoEvent, compositiveResult, compositiveLocalResult);
        }
      }
    });
  }

  private checkVersionNeedCheck(eventInfo: BasicApiInfo): boolean {
    const eventApiVersion: string = CommonFunctions.getSinceVersion(eventInfo.getCurrentVersion());
    return parseInt(eventApiVersion) >= EventConstant.eventMethodCheckVersion;
  }

  private collectEventCallback(offEvent: MethodInfo,
    callbackNumber: number, requiredCallbackNumber: number): CollectParamStatus {
    const lastParam: ParamInfo = offEvent.getParams().slice(-1)[0];
    if (lastParam.paramType) {
      const basicTypes = new Set([ts.SyntaxKind.NumberKeyword, ts.SyntaxKind.StringKeyword,
      ts.SyntaxKind.BooleanKeyword, ts.SyntaxKind.UndefinedKeyword, ts.SyntaxKind.LiteralType]);
      if (!basicTypes.has(lastParam.paramType)) {
        callbackNumber++;
        if (lastParam.getIsRequired()) {
          requiredCallbackNumber++;
        }
      }
    }
    return {
      callbackNumber: callbackNumber,
      requiredCallbackNumber: requiredCallbackNumber
    };
  }

  private getEventMethodDataMap(eventInfos: MethodInfo[]): Map<string, EventMethodData> {
    let eventMethodDataMap: Map<string, EventMethodData> = new Map();
    eventInfos.forEach((eventInfo: MethodInfo) => {
      const directorRelations: string[] = [...eventInfo.hierarchicalRelations];
      directorRelations.pop();
      const apiCompletePath: string = [...directorRelations, this.getEventName(eventInfo.apiName)].join('/');
      let eventMethodData: EventMethodData = {
        onEvents: [],
        offEvents: [],
        emitEvents: [],
        onceEvents: []
      };
      if (eventMethodDataMap.get(apiCompletePath)) {
        eventMethodData = eventMethodDataMap.get(apiCompletePath) as EventMethodData;
      }
      eventMethodDataMap.set(apiCompletePath, this.collectEventMethod(eventMethodData, eventInfo));
    });
    return eventMethodDataMap;
  }

  private collectEventMethod(eventMethodData: EventMethodData, eventInfo: MethodInfo): EventMethodData {
    const eventType: string = this.getEventType(eventInfo.apiName);
    switch (eventType) {
      case 'on':
        eventMethodData.onEvents.push(eventInfo);
        break;
      case 'off':
        eventMethodData.offEvents.push(eventInfo);
        break;
      case 'emit':
        eventMethodData.emitEvents.push(eventInfo);
        break;
      case 'once':
        eventMethodData.onceEvents.push(eventInfo);
        break;
    }
    return eventMethodData;
  }

  private getEventName(apiName: string): string {
    return apiName.split(/\_/)[1];
  }

  private getEventType(apiName: string): string {
    return apiName.split(/\_/)[0];
  }
}
