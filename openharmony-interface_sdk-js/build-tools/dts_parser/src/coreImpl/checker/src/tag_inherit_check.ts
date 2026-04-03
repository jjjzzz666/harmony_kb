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
import { CommonFunctions, inheritTagArr, followTagArr } from '../../../utils/checkUtils';
import { ApiInfo, BasicApiInfo, ContainerApiInfo, containerApiTypes } from '../../../typedef/parser/ApiInfoDefination';

export class TagInheritCheck {
  /**
   * Tag's inheritance check.
   * @param { ApiInfo } singleApi
   * @returns { ErrorTagFormat }
   */
  static tagInheritCheck(singleApi: ApiInfo): ErrorTagFormat[] {
    const tagNameCheckResult: ErrorTagFormat[] = [];
    const apiJsdoc: Comment.JsDocInfo | undefined = singleApi.getLastJsDocInfo();
    if (apiJsdoc === undefined) {
      return tagNameCheckResult;
    }
    const tagsInfo: Comment.CommentTag[] | undefined = apiJsdoc.tags;
    const apiTagsName: string[] = [];
    if (tagsInfo === undefined) {
      return tagNameCheckResult;
    }
    tagsInfo.forEach((tag) => {
      apiTagsName.push(tag.tag);
    });
    let parentApi: ContainerApiInfo = singleApi.getParentApi() as ContainerApiInfo;
    if (containerApiTypes.has(parentApi.getApiType())) {
      TagInheritCheck.checkParentJsdoc(parentApi, apiTagsName, tagNameCheckResult);
    }
    return tagNameCheckResult;
  }

  static checkParentJsdoc(basicApiInfo: BasicApiInfo | undefined, apiTagsName: string[],
    tagNameCheckResult: ErrorTagFormat[]): boolean {
    if (basicApiInfo === undefined || !containerApiTypes.has(basicApiInfo.getApiType())) {
      return true;
    }
    const parentApi = basicApiInfo as ContainerApiInfo;
    const parentApisJsdoc: Comment.CommentTag[] | undefined = parentApi.getLastJsDocInfo()?.tags;
    const trueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    if (parentApisJsdoc === undefined) {
      return true;
    }
    let currTag: string = '';
    const hasInheritTag: boolean = parentApisJsdoc.some((parentApiJsdoc: Comment.CommentTag) => {
      currTag = parentApiJsdoc.tag;
      return inheritTagArr.includes(parentApiJsdoc.tag) && !apiTagsName.includes(parentApiJsdoc.tag);
    });
    const inheritCheckResult: ErrorTagFormat = hasInheritTag ? {
      state: false,
      errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_INHERIT, [currTag.toLocaleLowerCase()]),
    } : trueCheckResult;

    const parentApiTagName: string[] = [];
    parentApisJsdoc.forEach(parentApiJsdoc => {
      parentApiTagName.push(parentApiJsdoc.tag);
    });
    const hasFollowTag: boolean = apiTagsName.some((apiTagName: string) => {
      currTag = apiTagName;
      return followTagArr.includes(apiTagName) && !parentApiTagName.includes(apiTagName);
    });
    const followCheckResult: ErrorTagFormat = hasFollowTag ? {
      state: false,
      errorInfo: CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_FOLLOW, [currTag]),
    } : trueCheckResult;

    if (hasInheritTag || hasFollowTag) {
      tagNameCheckResult.push(...(hasInheritTag ?
        (hasFollowTag ? [followCheckResult, inheritCheckResult] : [inheritCheckResult]) :
        [followCheckResult]));
      return false;
    }
    const parentApis: BasicApiInfo | undefined = parentApi.getParentApi();
    return TagInheritCheck.checkParentJsdoc(parentApis, apiTagsName, tagNameCheckResult);
  }
}
