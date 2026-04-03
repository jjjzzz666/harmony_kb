/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JSDoc, JSDocTag } from '../../../utils/api_check_wrapper_typedef';

/**
 * 解析JSDoc字符串
 * 
 * @param { string } jsDocContent JSDoc字符串
 * @returns { JSDoc[] } JSDoc数组
 */
export function parseJSDoc(jsDocContent: string): JSDoc[] {
  const jsdocReg: RegExp = /(\/\*\*\s)(.|\n)*?(\s\*\/)/g;
  const jsDocs: JSDoc[] = [];
  const matches: RegExpStringIterator<RegExpExecArray> = jsDocContent.matchAll(jsdocReg);
  for (const match of matches) {
    if (match && match[0]) {
      const jsDocContent: string = match[0];
      const description: string = collectDescription(jsDocContent);
      const jsDocTags: JSDocTag[] = collectJSDocTags(jsDocContent);
      jsDocs.push({
        description: description,
        tags: jsDocTags
      });
    }
  }
  return jsDocs;
}

/**
 * 匹配JSDoc整体内容
 * 
 * @param { string } jsDocContent 
 * @returns { string }
 */
function collectDescription(jsDocContent: string): string {
  const jsDocDescriptionReg: RegExp = /(?<=\/\*\*\s)(.|\n)*?(?=(\s|\*)(\@|\s\*\/))/g;
  let description: string = '';
  const descriptionMatche: RegExpMatchArray | null = jsDocContent.match(jsDocDescriptionReg);
  if (descriptionMatche && descriptionMatche[0]) {
    description = descriptionMatche[0].replace(/ *\* */g, '').replace(/\n|\r\n/g, ' ');
  }
  return description;
}

/**
 * 匹配"@"符号后内容
 * 
 * @param { string } jsDocContent 
 * @returns { JSDocTag[] }
 */
function collectJSDocTags(jsDocContent: string): JSDocTag[] {
  const jsdocTagReg: RegExp = /(?<=(\s|\*)\@)(.|\n)*?(?=(\@|\s\*\/))/g;
  const jsDocTags: JSDocTag[] = [];
  const matches: RegExpStringIterator<RegExpExecArray> = jsDocContent.matchAll(jsdocTagReg);
  for (const match of matches) {
    if (match && match[0]) {
      const jsDocTagContent: string = match[0].replace(/ *\* */g, '').replace(/\n|\r\n/g, ' ');
      const jsDocTag: JSDocTag | undefined = collectJSDocTag(jsDocTagContent);
      if (jsDocTag) {
        jsDocTags.push(jsDocTag);
      }
    }
  }
  return jsDocTags;
}

/**
 * 将解析后的JSDoc内容组装成JSDocTag对象
 * 
 * @param { string } jsDocTagContent 
 * @returns { JSDocTag | undefined }
 */
function collectJSDocTag(jsDocTagContent: string): JSDocTag | undefined {
  const jsDocTagTypeReg: RegExp = /(?<=\{).*?(?=\})/;
  let content: string = jsDocTagContent;
  const tagMatch: RegExpMatchArray | null = content.match(/\S+/);
  const jsDocTag: JSDocTag = {
    tag: '',
    name: '',
    description: '',
    comment: ''
  }

  if (!tagMatch || !tagMatch[0]) {
    return undefined;
  }
  jsDocTag.tag = tagMatch[0];
  content = content.replace(tagMatch[0], '').trim();

  if (!/\S+/g.test(content)) {
    return jsDocTag;
  }

  jsDocTag.comment = content;
  const tagNameMatch: RegExpMatchArray | null = content.match(/\S+/);

  if (!tagNameMatch || !tagNameMatch[0]) {
    return jsDocTag;
  }

  jsDocTag.name = tagNameMatch[0];
  content = content.replace(tagNameMatch[0], '').trim();

  if (!/\S+/g.test(content)) {
    return jsDocTag;
  }

  jsDocTag.description = content;

  return jsDocTag;
}