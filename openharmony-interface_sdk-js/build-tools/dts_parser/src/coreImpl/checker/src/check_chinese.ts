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

import { ErrorMessage, ErrorTagFormat, } from '../../../typedef/checker/result_type';
import { CommonFunctions } from '../../../utils/checkUtils';
import { Comment } from '../../../typedef/parser/Comment';

export class ChineseCheck {

    static isChinese(str: string): boolean {
        return /[\u4e00-\u9fa5]/.test(str);
    }

    /**
     * 校验注释是否有中文
     *
     * @param {Comment.JsDocInfo} apiJsdoc
     * @return {ErrorTagFormat}
     */
    static checkChinese(apiJsdoc: Comment.JsDocInfo): ErrorTagFormat {
        const checkResult: ErrorTagFormat = {
            state: true,
            errorInfo: '',
        };

        if (this.isChinese(apiJsdoc.description)) {
            checkResult.state = false;
            checkResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_HAS_CHINESE, [
                apiJsdoc.description
            ]);
        }

        const tagsName: Comment.CommentTag[] | undefined = apiJsdoc.tags;
        if (tagsName === undefined) {
            return checkResult;
        }
        tagsName.forEach((tag) => {
            for (let i = 0; i < tag.tokenSource.length; i++) {
                if (this.isChinese(tag.tokenSource[i].source)) {
                    checkResult.state = false;
                    checkResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_HAS_CHINESE, [tag.tag]);
                }
            }
        });
        return checkResult;
    }
}


