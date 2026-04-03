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
import { ErrorMessage, ErrorTagFormat } from '../../../typedef/checker/result_type';
import { Comment } from '../../../typedef/parser/Comment';
import { tagsArrayOfOrder, CommonFunctions } from '../../../utils/checkUtils';
import { ApiInfo } from '../../../typedef/parser/ApiInfoDefination';

export class OrderCheck {
  /**
   * Check if the tags order is correct.
   * @param { Comment.JsDocInfo } apiJsdoc -api jsdoc all infomation
   * @returns { boolean }
   */
  static orderCheck(singleApi: ApiInfo, apiJsdoc: Comment.JsDocInfo): ErrorTagFormat {
    const orderCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const tagsOrder: Comment.CommentTag[] | undefined = apiJsdoc.tags;
    if (tagsOrder === undefined) {
      return orderCheckResult;
    }
    const tagsNameOrder: string[] = [];
    tagsOrder.forEach((tagsOrder: Comment.CommentTag) => { tagsNameOrder.push(tagsOrder.tag) });

    if (tagsNameOrder.includes('deprecated')) {
      return orderCheckResult;
    }
    
    for (let tagIndex = 0; tagIndex < tagsOrder.length; tagIndex++) {
      if (tagIndex + 1 < tagsOrder.length) {
        // 获取前后两个tag下标
        const firstIndex = tagsArrayOfOrder.indexOf(tagsOrder[tagIndex].tag);
        const secondIndex = tagsArrayOfOrder.indexOf(tagsOrder[tagIndex + 1].tag);
        // 判断标签是否为官方标签
        const firstTag = CommonFunctions.isOfficialTag(tagsOrder[tagIndex].tag);
        // 非自定义标签在前或数组降序时报错
        if (tagsOrder[tagIndex].tag !== 'form' && tagsOrder[tagIndex + 1].tag !== 'form' &&
          ((firstTag && secondIndex > -1) || (firstIndex > secondIndex && secondIndex > -1))) {
          orderCheckResult.state = false;
          orderCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_ORDER, [tagsOrder[tagIndex].tag]);
          break;
        } else if (tagsOrder[tagIndex].tag === 'form') {
          orderCheckResult.state = OrderCheck.formOrderCheck(tagsOrder, tagIndex, firstIndex, secondIndex);
          orderCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_ORDER, [tagsOrder[tagIndex].tag]);
        }
      }
    }
    return orderCheckResult;
  }

  /**
 * 对form标签的顺序做兼容处理
 */
  static formOrderCheck(tags: Comment.CommentTag[], tagIndex: number, firstIndex: number, secondIndex: number): boolean {
    const frontFirstIndex = tagIndex - 1 > -1 ? tagsArrayOfOrder.indexOf(tags[tagIndex - 1].tag) : 0;
    const formNeighborArr = [frontFirstIndex, firstIndex];
    const newTagIndex = tagsArrayOfOrder.lastIndexOf(tags[tagIndex].tag);
    const newFormNeighborArr = [frontFirstIndex, newTagIndex];
    if (secondIndex > -1) {
      formNeighborArr.push(secondIndex);
      newFormNeighborArr.push(secondIndex);
    }
    if (!CommonFunctions.isAscending(formNeighborArr) && !CommonFunctions.isAscending(newFormNeighborArr)) {
      return false;
    }
    return true;
  }

}
