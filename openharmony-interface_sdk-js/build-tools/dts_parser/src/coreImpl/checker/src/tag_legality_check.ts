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
import { ApiInfo, ApiType, MethodInfo, PropertyInfo, TypeAliasInfo } from '../../../typedef/parser/ApiInfoDefination';
import {
  tagsArrayOfOrder,
  optionalTags,
  apiLegalityCheckTypeMap
} from '../../../utils/checkUtils';
import { Comment } from '../../../typedef/parser/Comment';
import { ErrorTagFormat, ErrorMessage, ParticularErrorCode } from '../../../typedef/checker/result_type';
import { CommonFunctions, conditionalOptionalTags } from '../../../utils/checkUtils';

export class LegalityCheck {
  /**
   * Tag's legality check
   * @param { ApiInfo } singleApi -Individual node information.
   * @param { Comment.JsDocInfo } apiJsdoc -Individual node JsDoc.
   * @returns { ErrorTagFormat[] }
   */
  static apiLegalityCheck(singleApi: ApiInfo, apiJsdoc: Comment.JsDocInfo): ErrorTagFormat[] {
    const apiLegalityCheckResult: ErrorTagFormat[] = [];

    //check systemapi and atomicservice
    LegalityCheck.checkSystemapiAtomicservice(apiJsdoc, apiLegalityCheckResult);

    const nodeInfo: ts.Node = singleApi.getNode() as ts.Node;
    const apiLegalityTagsArray: string[] = apiLegalityCheckTypeMap.get(nodeInfo.kind) as string[];
    const apiLegalityTagsSet: Set<string> = new Set(apiLegalityTagsArray);
    const illegalTagsArray: string[] = LegalityCheck.getIllegalTagsArray(apiLegalityTagsArray);
    let extendsApiValue = '';
    let implementsApiValue = '';
    if (singleApi.getApiType() === ApiType.CLASS || singleApi.getApiType() === ApiType.INTERFACE) {
      extendsApiValue = CommonFunctions.getExtendsApiValue(singleApi);
      implementsApiValue = CommonFunctions.getImplementsApiValue(singleApi);
    }
    if (extendsApiValue === '') {
      apiLegalityTagsSet.delete('extends');
      illegalTagsArray.push('extends');
    }
    if (implementsApiValue === '') {
      apiLegalityTagsSet.delete('implements');
      illegalTagsArray.push('implements');
    }

    if (singleApi.getApiType() === ApiType.PROPERTY) {
      if (!(singleApi as PropertyInfo).getIsReadOnly()) {
        apiLegalityTagsSet.delete('readonly');
        illegalTagsArray.push('readonly');
      }
    }

    // 判断api的jsdoc中是否存在非法标签，是否缺失必选标签
    if (!Array.isArray(apiLegalityTagsArray)) {
      return apiLegalityCheckResult;
    }
    const apiTags: Comment.CommentTag[] | undefined = apiJsdoc.tags;
    const apiTagsName: string[] = [];
    const throwsCodeArr: string[] = [];
    if (apiTags === undefined) {
      const requiredTagLost: ErrorTagFormat = {
        state: false,
        errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['since']) +
          CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['syscap']),
      };
      apiLegalityCheckResult.push(requiredTagLost);
      return apiLegalityCheckResult;
    }
    const tagsTag: string[] = [];
    apiTags.forEach((apiTag: Comment.CommentTag) => { tagsTag.push(apiTag.tag); });
    if (tagsTag.includes('deprecated')) {
      return apiLegalityCheckResult;
    }

    let paramTagNumber: number = 0;
    let paramApiNumber: number =
      singleApi.getApiType() === ApiType.METHOD ? (singleApi as MethodInfo).getParams().length : 0;

    paramApiNumber = singleApi.getApiType() === ApiType.TYPE_ALIAS ?
      (singleApi as TypeAliasInfo).getParamInfos().length : paramApiNumber;

    apiTags.forEach((apiTag) => {
      apiTagsName.push(apiTag.tag);
      if (apiTag.tag === 'throws') {
        throwsCodeArr.push(apiTag.name);
      }
      paramTagNumber = apiTag.tag === 'param' ? paramTagNumber + 1 : paramTagNumber;
      const isUseinsteadLegalSituation: boolean = apiTag.tag === 'useinstead' && apiJsdoc.deprecatedVersion !== '-1';
      apiLegalityTagsSet.delete('param');
      if (apiLegalityTagsSet.has(apiTag.tag)) {
        apiLegalityTagsSet.delete(apiTag.tag);
      }
      if (singleApi.getApiType() === ApiType.PROPERTY || singleApi.getApiType() === ApiType.DECLARE_CONST) {
        apiLegalityTagsSet.delete('constant');
        illegalTagsArray.push('constant');
      }
      if (singleApi.getApiType() === ApiType.INTERFACE && (apiTag.tag === 'typedef' || apiTag.tag === 'interface')) {
        apiLegalityTagsSet.delete('typedef');
        apiLegalityTagsSet.delete('interface');
      }
      if (singleApi.getApiType() === ApiType.TYPE_ALIAS && singleApi.getIsExport()) {
        apiLegalityTagsSet.delete('typedef');
      }
      if ((singleApi.getApiType() === ApiType.METHOD && (singleApi as MethodInfo).getReturnValue().length === 0) ||
        singleApi.getApiType() === ApiType.TYPE_ALIAS && ((singleApi as TypeAliasInfo).getReturnType().join() === 'void' ||
          !(singleApi as TypeAliasInfo).getTypeIsFunction())) {
        apiLegalityTagsSet.delete('returns');
        illegalTagsArray.push('returns');
      }
      if (illegalTagsArray.includes(apiTag.tag)) {
        if (apiTag.tag !== 'useinstead' || !isUseinsteadLegalSituation) {
          const apiRedundantResultFormat: ErrorTagFormat = {
            state: false,
            errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_USE, [apiTag.tag]),
          };
          apiLegalityCheckResult.push(apiRedundantResultFormat);
        }
      }
    });
    if (singleApi.getApiType() === ApiType.METHOD) {
      LegalityCheck.checkThrowsCode(throwsCodeArr, apiTagsName, paramApiNumber, apiLegalityCheckResult);
    }
    // param合法性单独进行校验
    LegalityCheck.paramLegalityCheck(paramTagNumber, paramApiNumber, apiLegalityCheckResult);
    // 缺失标签set合集
    apiLegalityTagsSet.forEach((apiLegalityTag) => {
      if (!conditionalOptionalTags.includes(apiLegalityTag)) {
        const apiLostResultFormat: ErrorTagFormat = {
          state: false,
          errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, [apiLegalityTag]),
        };
        apiLegalityCheckResult.push(apiLostResultFormat);
      }
    });
    return apiLegalityCheckResult;
  }

  /**
   * param tag  legality check
   * @param { number } paramTagNumber
   * @param { number } paramApiNumber
   * @param { ErrorTagFormat[] } apiLegalityCheckResult
   */
  static paramLegalityCheck(
    paramTagNumber: number,
    paramApiNumber: number,
    apiLegalityCheckResult: ErrorTagFormat[]
  ): void {
    if (paramTagNumber > paramApiNumber) {
      const apiRedundantResultFormat: ErrorTagFormat = {
        state: false,
        errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_MORELABEL, [
          JSON.stringify(paramTagNumber - paramApiNumber),
          'param',
        ]),
      };
      apiLegalityCheckResult.push(apiRedundantResultFormat);
    } else if (paramTagNumber < paramApiNumber) {
      const apiLostResultFormat: ErrorTagFormat = {
        state: false,
        errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, ['param']),
      };
      apiLegalityCheckResult.push(apiLostResultFormat);
    }
  }

  /**
   * check api doc legality about throws code
   * @param { string[] } apiThrowsCode 
   * @param { string[] } apiTagsName 
   * @param { number } paramApiNumber
   * @param { ErrorTagFormat[] } apiLegalityCheckResult 
   */
  static checkThrowsCode(apiThrowsCode: string[], apiTagsName: string[], paramApiNumber: number, apiLegalityCheckResult: ErrorTagFormat[]): void {
    const apiLostPermissionTag: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const apiLostSystemapiTag: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const apiRedundantThrows: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const apiRepeatThrows: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const hasPermissionTag: boolean = apiTagsName.includes(ParticularErrorCode.ERROR_PERMISSION);
    const hasSystemapiTag: boolean = apiTagsName.includes(ParticularErrorCode.ERROR_SYSTEMAPI);
    const hasError201: boolean = apiThrowsCode.includes(ParticularErrorCode.ERROR_CODE_201);
    const hasError202: boolean = apiThrowsCode.includes(ParticularErrorCode.ERROR_CODE_202);
    const hasError401: boolean = apiThrowsCode.includes(ParticularErrorCode.ERROR_CODE_401);
    // check permission 201
    if (hasPermissionTag !== hasError201) {
      apiLostPermissionTag.state = false;
      apiLostPermissionTag.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, [hasPermissionTag ? 'throws 201' : ParticularErrorCode.ERROR_PERMISSION]);
    }
    // check systemapi 202
    if (hasSystemapiTag !== hasError202) {
      apiLostSystemapiTag.state = false;
      apiLostSystemapiTag.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_LOST_LABEL, [hasSystemapiTag ? 'throws 202' : ParticularErrorCode.ERROR_SYSTEMAPI]);
    }
    // check systemapi 401
    if (hasError401 && paramApiNumber === 0) {
      apiRedundantThrows.state = false;
      apiRedundantThrows.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_USE, ['throws 401']);
    }
    // check repeat throws
    const orderedThrowsCode: string[] = apiThrowsCode.sort();
    for (let i = 0; i < orderedThrowsCode.length; i++) {
      if (orderedThrowsCode[i] === orderedThrowsCode[i + 1]) {
        apiRepeatThrows.state = false;
        apiRepeatThrows.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_REPEATLABEL, ['throws']);
      }

    }
    apiLegalityCheckResult.push(apiLostPermissionTag, apiLostSystemapiTag, apiRedundantThrows, apiRepeatThrows);

  }

  /**
   * Gets all illegal tags for the api.
   * @param { string[] } RequiredTagsArray
   * @returns { string[] }
   */
  static getIllegalTagsArray(requiredTagsArray: string[]): string[] {
    const illegalTagsArray: string[] = [];

    tagsArrayOfOrder.forEach((tag) => {
      if (!optionalTags.includes(tag) && !Array.isArray(requiredTagsArray)) {
        illegalTagsArray.push(tag);
      } else if (!optionalTags.includes(tag) && !requiredTagsArray.includes(tag)) {
        illegalTagsArray.push(tag);
      }
    });
    return illegalTagsArray;
  }
  /**
   * systemapi and atomicservice cannot exist at the same time
   * @param apiJsdoc 
   */
  static checkSystemapiAtomicservice(apiJsdoc: Comment.JsDocInfo, apiLegalityCheckResult: ErrorTagFormat[]): void {
    const apiSystemapiAtomicservice: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const tagsName: string[] = [];
    apiJsdoc.tags?.forEach((tag: Comment.CommentTag) => {
      tagsName.push(tag.tag);
    });
    const hasSystemapi: boolean = tagsName.includes('systemapi');
    const hasAtomicservice: boolean = tagsName.includes('atomicservice');
    if (hasSystemapi && hasAtomicservice) {
      apiSystemapiAtomicservice.state = false;
      apiSystemapiAtomicservice.errorInfo = ErrorMessage.ERROR_ERROR_SYSTEMAPI_ATOMICSERVICE;
    }
    apiLegalityCheckResult.push(apiSystemapiAtomicservice);
  }
}
