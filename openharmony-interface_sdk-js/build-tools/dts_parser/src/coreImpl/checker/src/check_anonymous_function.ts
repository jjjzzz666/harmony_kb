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


import ts from 'typescript';
import { ErrorMessage, ErrorTagFormat } from '../../../typedef/checker/result_type';
import { ApiInfo, ApiType, MethodInfo, ParamInfo, PropertyInfo } from '../../../typedef/parser/ApiInfoDefination';
import { CommonFunctions } from '../../../utils/checkUtils';
import { Comment } from '../../../typedef/parser/Comment';

export class AnonymousFunctionCheck {
  static checkAnonymousFunction(singleApi: ApiInfo): ErrorTagFormat {
    const anonymousFunctionCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const jsDocInfo: Comment.JsDocInfo[] = singleApi.getJsDocInfos();
    const publishVersion: string = CommonFunctions.getSinceVersion(jsDocInfo[0].getSince());
    const apiVersionToBeVerified: string = CommonFunctions.getCheckApiVersion();
    if (publishVersion !== apiVersionToBeVerified) { return anonymousFunctionCheckResult };

    let IllegalType: ts.SyntaxKind[] = [ts.SyntaxKind.FunctionType, ts.SyntaxKind.TypeLiteral];
    let returnValueIsFunction: boolean = false;
    let paramTypeIsFunction: boolean = false;
    let typeValueIsFunction: boolean = false;
    if (singleApi.getApiType() === ApiType.METHOD) {
      returnValueIsFunction = IllegalType.includes((singleApi as MethodInfo).returnValueType);
      paramTypeIsFunction = false;
      const paramApiInfos: ParamInfo[] = (singleApi as MethodInfo).getParams();
      paramApiInfos.forEach((paramApiInfo: ParamInfo) => {
        paramTypeIsFunction = IllegalType.includes(paramApiInfo.getParamType());
      });
    } else if (singleApi.getApiType() === ApiType.PROPERTY) {
      typeValueIsFunction = IllegalType.includes((singleApi as PropertyInfo).typeKind);
    }
    if (returnValueIsFunction || paramTypeIsFunction || typeValueIsFunction) {
      anonymousFunctionCheckResult.state = false;
      anonymousFunctionCheckResult.errorInfo = ErrorMessage.ERROR_ANONYMOUS_FUNCTION;
    }
    return anonymousFunctionCheckResult;
  }
}