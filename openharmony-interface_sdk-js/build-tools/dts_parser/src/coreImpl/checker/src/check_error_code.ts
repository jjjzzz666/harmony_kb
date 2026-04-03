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


import { Comment } from '../../../typedef/parser/Comment';
import { ErrorMessage, ErrorTagFormat } from '../../../typedef/checker/result_type';
import { CommonFunctions } from '../../../utils/checkUtils';

export class CheckErrorCode {

  static errorCodeList: number[] = [201, 202, 203, 301, 401, 501, 502, 801, 901];

  static isArrayNotEmpty(arr: any): boolean {
    return Array.isArray(arr) && arr.length > 0;
  }

  /**
   * 判断数组arr1中的每个数字是否在数组arr2中
   * @param arr1
   * @param arr2
   */
  static hasNumberInArray(arr1: number[], arr2: number[]): boolean {
    return arr1.every(num => arr2.includes(num));
  }

  static checkErrorCode(apiJsdoc: Comment.JsDocInfo): ErrorTagFormat {
    const checkResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };

    const errorCodes = apiJsdoc.errorCodes.filter(number => number >= 100 && number < 1000);
    ;
    if (this.isArrayNotEmpty(errorCodes)) {
      if (!this.hasNumberInArray(errorCodes, this.errorCodeList)) {
        checkResult.state = false;
        checkResult.errorInfo = ErrorMessage.ERROR_ERROR_CODE;
      }
    }
    return checkResult;
  }
}