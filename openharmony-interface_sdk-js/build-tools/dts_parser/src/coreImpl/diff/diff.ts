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

import _ from 'lodash';
import ts from 'typescript';
import crypto from 'crypto';
import { StringConstant } from '../../utils/Constant';
import {
  ApiInfo,
  ApiType,
  BasicApiInfo,
  ContainerApiInfo,
  MethodInfo,
  ParamInfo,
  containerApiTypes,
  TypeAliasInfo,
  PropertyInfo,
} from '../../typedef/parser/ApiInfoDefination';
import {
  ApiDiffType,
  ApiStatusCode,
  BasicDiffInfo,
  DiffTypeInfo,
  TagInfoDiffProcessor,
} from '../../typedef/diff/ApiInfoDiff';
import { ApiInfosMap, FileInfoMap, FilesMap, Parser } from '../parser/parser';
import { apiStatisticsType } from '../../typedef/statistics/ApiStatistics';
import { DiffProcessorHelper } from './DiffProcessor';
import { FunctionUtils } from '../../utils/FunctionUtils';
import { Comment } from '../../typedef/parser/Comment';
import { notJsDocApiTypes } from '../../typedef/parser/ApiInfoDefination';
import { StringUtils } from '../../utils/StringUtils';
import { CommentHelper } from '../parser/JsDocProcessor';
import { ResultsProcessHelper } from '../parser/ResultsProcess';

export class DiffHelper {
  /**
   * 根据解析后的新旧版本SDK结果，得到对比差异
   *
   * @param { FilesMap } oldSDKApiMap 旧版本SDK解析后的结果
   * @param { FilesMap } newSDKApiMap 新版本SDK解析后的结果
   * @returns { BasicDiffInfo[] } 差异结果集
   */
  static diffSDK(
    clonedOldSDKApiMap: FilesMap,
    clonedNewSDKApiMap: FilesMap,
    isAllSheet: boolean,
    isCheck?: boolean
  ): BasicDiffInfo[] {
    const diffInfos: BasicDiffInfo[] = [];
    const oldSDKApiLocations: Map<string, string[]> = DiffHelper.getApiLocations(clonedOldSDKApiMap, isCheck);
    const newSDKApiLocations: Map<string, string[]> = DiffHelper.getApiLocations(clonedNewSDKApiMap, isCheck);
    DiffHelper.diffKit(clonedOldSDKApiMap, clonedNewSDKApiMap, diffInfos);
    const oldFilePathSet: Set<string> = new Set(Array.from(clonedOldSDKApiMap.keys()));
    // 先以旧版本为基础进行对比
    for (const key of oldSDKApiLocations.keys()) {
      const apiLocation: string[] = oldSDKApiLocations.get(key) as string[];
      const oldApiInfos: ApiInfo[] = Parser.getApiInfo(apiLocation, clonedOldSDKApiMap, isAllSheet) as ApiInfo[];
      // 如果旧版本中的API在新版本中不存在，则为删除
      if (!newSDKApiLocations.has(key)) {
        oldApiInfos.forEach((oldApiInfo: ApiInfo) => {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              oldApiInfo,
              undefined,
              new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, oldApiInfo.getDefinedText())
            )
          );
        });
        continue;
      }
      // 新旧版本均存在，则进行对比
      const newApiInfos: ApiInfo[] = Parser.getApiInfo(apiLocation, clonedNewSDKApiMap, isAllSheet) as ApiInfo[];
      DiffHelper.diffApis(oldApiInfos, newApiInfos, diffInfos, isAllSheet, isCheck);
      // 对比完则将新版本中的对应API进行删除
      newSDKApiLocations.delete(key);
    }
    // 对比完还剩下的新版本中的API即为新增API
    for (const key of newSDKApiLocations.keys()) {
      const locations: string[] = newSDKApiLocations.get(key) as string[];
      const newApiInfos: ApiInfo[] = Parser.getApiInfo(locations, clonedNewSDKApiMap, isAllSheet) as ApiInfo[];
      const clonedLocations: string[] = locations;
      const parentLocations = clonedLocations.slice(0, -1);
      newApiInfos.forEach((newApiInfo: ApiInfo) => {
        let isNewFile: boolean = false;
        if (!oldFilePathSet.has(newApiInfo.getFilePath()) || !oldSDKApiLocations.get(parentLocations.join())) {
          isNewFile = true;
        }
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newApiInfo,
            new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, newApiInfo.getDefinedText()),
            isNewFile
          )
        );
      });
    }
    return diffInfos;
  }

  static diffKit(clonedOldSDKApiMap: FilesMap, clonedNewSDKApiMap: FilesMap, diffInfos: BasicDiffInfo[]): void {
    for (const key of clonedOldSDKApiMap.keys()) {
      const oldSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedOldSDKApiMap.get(key));
      oldSourceFileInfo?.setSyscap(DiffHelper.getSyscapField(oldSourceFileInfo));
      const oldKitInfo: string | undefined = oldSourceFileInfo?.getLastJsDocInfo()?.getKit();
      //文件在新版本中被删除
      if (!clonedNewSDKApiMap.get(key) && oldKitInfo !== 'NA') {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            oldSourceFileInfo,
            undefined,
            new DiffTypeInfo(ApiStatusCode.KIT_CHANGE, ApiDiffType.KIT_HAVE_TO_NA, oldKitInfo, 'NA')
          )
        );
      } else if (clonedNewSDKApiMap.get(key)) {
        const newSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedNewSDKApiMap.get(key));
        const newKitInfo: string | undefined = newSourceFileInfo?.getLastJsDocInfo()?.getKit();
        if (oldKitInfo !== newKitInfo) {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              oldSourceFileInfo,
              newSourceFileInfo,
              new DiffTypeInfo(
                ApiStatusCode.KIT_CHANGE,
                DiffHelper.getKitDiffType(oldKitInfo, newKitInfo),
                oldKitInfo,
                newKitInfo
              )
            )
          );
        }
      }
    }

    for (const key of clonedNewSDKApiMap.keys()) {
      const newSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedNewSDKApiMap.get(key));
      const newKitInfo: string | undefined = newSourceFileInfo?.getLastJsDocInfo()?.getKit();
      if (!clonedOldSDKApiMap.get(key) && newKitInfo !== 'NA') {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newSourceFileInfo,
            new DiffTypeInfo(ApiStatusCode.KIT_CHANGE, ApiDiffType.KIT_NA_TO_HAVE, 'NA', newKitInfo)
          )
        );
      }
    }
  }

  static getKitDiffType(oldKitInfo: string | undefined, newKitInfo: string | undefined): ApiDiffType {
    if (oldKitInfo === 'NA' && newKitInfo === '') {
      return ApiDiffType.KIT_NA_TO_HAVE;
    } else if (oldKitInfo === '' && newKitInfo === 'NA') {
      return ApiDiffType.KIT_HAVE_TO_NA;
    } else if (oldKitInfo === 'NA' || oldKitInfo === '') {
      return ApiDiffType.KIT_NA_TO_HAVE;
    } else if (newKitInfo === 'NA' || newKitInfo === '') {
      return ApiDiffType.KIT_HAVE_TO_NA;
    }
    return ApiDiffType.KIT_CHANGE;
  }

  static getSourceFileInfo(fileMap: FileInfoMap | undefined): ApiInfo | undefined {
    if (!fileMap) {
      return undefined;
    }
    let sourceFileInfos: ApiInfo[] = [];
    for (const apiKey of fileMap.keys()) {
      if (apiKey === StringConstant.SELF) {
        sourceFileInfos = fileMap.get(apiKey) as ApiInfo[];
      }
    }
    return sourceFileInfos[0];
  }

  /**
   * 通过数组长度判断是否为同名函数
   *
   * @param apiInfos
   */
  static judgeIsSameNameFunction(apiInfos: BasicApiInfo[]): boolean {
    let isSameNameFunction: boolean = false;
    if (apiInfos.length > 1 && apiInfos[0].getApiType() === ApiType.METHOD) {
      isSameNameFunction = true;
    }
    return isSameNameFunction;
  }

  /**
   * 对比新旧版本API差异，类型为数组是由于同名函数的存在，因此统一为数组方便处理
   *
   * @param { ApiInfo[] } oldApiInfos 老版本API信息
   * @param { ApiInfo[] } newApiInfos 新版本API信息
   * @param { BasicDiffInfo[] } diffInfos api差异结果集
   */
  static diffApis(
    oldApiInfos: ApiInfo[],
    newApiInfos: ApiInfo[],
    diffInfos: BasicDiffInfo[],
    isAllSheet: boolean,
    isCheck?: boolean
  ): void {
    const diffSets: Map<string, ApiInfo>[] = DiffHelper.getDiffSet(oldApiInfos, newApiInfos);
    const oldReduceNewMap: Map<string, ApiInfo> = diffSets[0];
    const newReduceOldMap: Map<string, ApiInfo> = diffSets[1];
    if (oldReduceNewMap.size === 0) {
      newReduceOldMap.forEach((newApiInfo: ApiInfo) => {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newApiInfo,
            new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, newApiInfo.getDefinedText())
          )
        );
      });
      return;
    }
    if (newReduceOldMap.size === 0) {
      oldReduceNewMap.forEach((oldApiInfo: ApiInfo) => {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            oldApiInfo,
            undefined,
            new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, oldApiInfo.getDefinedText(), undefined)
          )
        );
      });
      return;
    }

    DiffHelper.diffChangeApi(oldApiInfos, newApiInfos, diffInfos, isCheck);
  }

  /**
   * 删除完全一样的API后，进行对比
   * @param { ApiInfo[] } oldApiInfos
   * @param { ApiInfo[] } newApiInfos
   * @param diffInfos
   * @param { boolean } isCheck 是否是api_check工具进行调用
   */
  static diffChangeApi(
    oldApiInfos: ApiInfo[],
    newApiInfos: ApiInfo[],
    diffInfos: BasicDiffInfo[],
    isCheck?: boolean
  ): void {
    //长度为1说明新旧版本有变更的只有1个，可直接进行对比
    if (oldApiInfos.length === 1 && oldApiInfos.length === newApiInfos.length) {
      DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldApiInfos[0], newApiInfos[0], diffInfos);
      DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldApiInfos[0], newApiInfos[0], diffInfos);
      DiffProcessorHelper.ApiNodeDiffHelper.diffNodeInfo(oldApiInfos[0], newApiInfos[0], diffInfos, isCheck);
    } else {
      const newMethodInfoMap: Map<string, ApiInfo> = DiffHelper.setmethodInfoMap(newApiInfos);
      const oldMethodInfoMap: Map<string, ApiInfo> = DiffHelper.setmethodInfoMap(oldApiInfos);
      oldApiInfos.forEach((oldApiInfo: ApiInfo) => {
        const newApiInfo: ApiInfo | undefined = newMethodInfoMap.get(oldApiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
        if (!newApiInfo) {
          return;
        }
        DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldApiInfo, newApiInfo, diffInfos);
        DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldApiInfo, newApiInfo, diffInfos);
        newMethodInfoMap.delete(oldApiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
        oldMethodInfoMap.delete(oldApiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
      });

      for (const apiInfo of newMethodInfoMap.values()) {
        const jsDocLength: number = apiInfo.getJsDocInfos().length;
        if (jsDocLength === 1) {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              undefined,
              apiInfo,
              new DiffTypeInfo(
                ApiStatusCode.NEW_API,
                ApiDiffType.NEW_SAME_NAME_FUNCTION,
                undefined,
                apiInfo.getDefinedText()
              )
            )
          );
          newMethodInfoMap.delete(apiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
        }
      }

      if (oldMethodInfoMap.size === 1 && newMethodInfoMap.size === 1) {
        const oldMethodInfo: ApiInfo = oldMethodInfoMap.entries().next().value[1];
        const newMethodInfo: ApiInfo = newMethodInfoMap.entries().next().value[1];
        DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldMethodInfo, newMethodInfo, diffInfos);
        DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldMethodInfo, newMethodInfo, diffInfos);
        DiffProcessorHelper.ApiNodeDiffHelper.diffNodeInfo(oldMethodInfo, newMethodInfo, diffInfos, isCheck);
      } else {
        DiffHelper.diffSameNameFunction(oldMethodInfoMap, newMethodInfoMap, diffInfos, isCheck);
      }
    }
  }

  static diffSameNameFunction(
    oldMethodInfoMap: Map<string, ApiInfo>,
    newMethodInfoMap: Map<string, ApiInfo>,
    diffInfos: BasicDiffInfo[],
    isCheck?: boolean
  ): void {
    for (const newApiInfo of newMethodInfoMap.values()) {
      const newJsDocInfo: Comment.JsDocInfo | undefined = newApiInfo.getPenultimateJsDocInfo();
      for (const oldApiInfo of oldMethodInfoMap.values()) {
        const oldJsDocInfo: Comment.JsDocInfo | undefined = oldApiInfo.getLastJsDocInfo();
        if (!DiffHelper.diffJsDoc(newJsDocInfo, oldJsDocInfo)) {
          continue;
        }
        DiffProcessorHelper.ApiNodeDiffHelper.diffNodeInfo(oldApiInfo, newApiInfo, diffInfos, isCheck);
        oldMethodInfoMap.delete(oldApiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
        newMethodInfoMap.delete(newApiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''));
      }
    }

    for (const apiInfo of newMethodInfoMap.values()) {
      diffInfos.push(
        DiffProcessorHelper.wrapDiffInfo(
          undefined,
          apiInfo,
          new DiffTypeInfo(
            ApiStatusCode.NEW_API,
            ApiDiffType.NEW_SAME_NAME_FUNCTION,
            undefined,
            apiInfo.getDefinedText()
          )
        )
      );
    }

    for (const apiInfo of oldMethodInfoMap.values()) {
      diffInfos.push(
        DiffProcessorHelper.wrapDiffInfo(
          apiInfo,
          undefined,
          new DiffTypeInfo(
            ApiStatusCode.DELETE,
            ApiDiffType.REDUCE_SAME_NAME_FUNCTION,
            apiInfo.getDefinedText(),
            undefined
          )
        )
      );
    }
  }

  static removeApiInfo(basicApiInfo: BasicApiInfo): void {
    DiffHelper.cleanApiInfo(basicApiInfo);
    if (!containerApiTypes.has(basicApiInfo.getApiType())) {
      return;
    }
    const containerApiInfo: ContainerApiInfo = basicApiInfo as ContainerApiInfo;
    containerApiInfo.getChildApis().forEach((childApiInfo: BasicApiInfo) => {
      DiffHelper.removeApiInfo(childApiInfo);
    });
  }

  static cleanApiInfo(basicApiInfo: BasicApiInfo | undefined): void {
    if (!basicApiInfo) {
      return;
    }
    basicApiInfo.setParentApi(undefined);
    basicApiInfo.removeNode();
    if (basicApiInfo instanceof MethodInfo || basicApiInfo instanceof PropertyInfo) {
      DiffHelper.cleanChildrenApiInfo(basicApiInfo.getObjLocations());
      DiffHelper.cleanChildrenApiInfo(basicApiInfo.getTypeLocations());
      if (basicApiInfo instanceof MethodInfo) {
        basicApiInfo.getParams().forEach((param: ParamInfo) => {
          DiffHelper.cleanChildrenApiInfo(param.getObjLocations());
          DiffHelper.cleanChildrenApiInfo(param.getTypeLocations());
          DiffHelper.cleanApiInfo(param.getMethodApiInfo());
        });
      }
    }
    if (basicApiInfo instanceof TypeAliasInfo) {
      DiffHelper.cleanChildrenApiInfo(basicApiInfo.getTypeLiteralApiInfos());
      basicApiInfo.getParamInfos().forEach((param: ParamInfo) => {
        DiffHelper.cleanChildrenApiInfo(param.getObjLocations());
        DiffHelper.cleanChildrenApiInfo(param.getTypeLocations());
        DiffHelper.cleanApiInfo(param.getMethodApiInfo());
      });
    }
  }

  static cleanChildrenApiInfo(basicApiInfos: BasicApiInfo[] | undefined): void {
    if (!basicApiInfos) {
      return;
    }
    basicApiInfos.forEach((basicApiInfos: BasicApiInfo) => {
      DiffHelper.processApiInfos(basicApiInfos);
    });
  }

  /**
   * 将每一个节点解析后的对象的parentApi属性置为undefined，防止循环引用
   *
   * @param { BasicApiInfo } basicApiInfo 解析后的api对象
   */
  static processApiInfos(basicApiInfo: BasicApiInfo | undefined): void {
    if (!basicApiInfo) {
      return;
    }
    DiffHelper.cleanApiInfo(basicApiInfo);
    if (!containerApiTypes.has(basicApiInfo.getApiType())) {
      return;
    }
    const containerApiInfo: ContainerApiInfo = basicApiInfo as ContainerApiInfo;
    containerApiInfo.getChildApis().forEach((childApiInfo: BasicApiInfo) => {
      DiffHelper.processApiInfos(childApiInfo);
    });
  }

  static diffJsDoc(newJsDocInfo: Comment.JsDocInfo | undefined, oldJsDocInfo: Comment.JsDocInfo | undefined): boolean {
    const tagInfoIsSame: Set<boolean> = new Set();
    const paramAndReturnsIsSame: boolean =
      DiffTagInfoHelper.diffParamTagInfo(oldJsDocInfo, newJsDocInfo) &&
      DiffTagInfoHelper.diffReturnsTagInfo(oldJsDocInfo, newJsDocInfo);
    newJsDocInfo?.getTags()?.forEach((tagInfo: Comment.CommentTag) => {
      const method: TagInfoDiffProcessor | undefined = diffJsdocMethod.get(tagInfo.tag);
      if (!method) {
        return;
      }
      tagInfoIsSame.add(method(oldJsDocInfo, newJsDocInfo));
    });

    if (tagInfoIsSame.size === 1 && tagInfoIsSame.has(true)) {
      return true;
    } else if (tagInfoIsSame.size > 1 && paramAndReturnsIsSame) {
      return true;
    }
    return false;
  }

  static judgeIsAllDeprecated(apiInfos: ApiInfo[]): boolean {
    let isAllDeprecated: boolean = true;
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const deprecatedVersion = apiInfo.getLastJsDocInfo()?.getDeprecatedVersion();
      if (deprecatedVersion === '-1' || !deprecatedVersion) {
        isAllDeprecated = false;
      }
    });
    return isAllDeprecated;
  }

  static handleDeprecatedVersion(apiInfos: ApiInfo[]): void {
    let isAllDeprecated: boolean = true;
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const deprecatedVersion = apiInfo.getLastJsDocInfo()?.getDeprecatedVersion();
      if (deprecatedVersion === '-1' || !deprecatedVersion) {
        isAllDeprecated = false;
      }
    });
    if (isAllDeprecated) {
      return;
    }
    apiInfos.forEach((apiInfo: ApiInfo) => {
      apiInfo.getLastJsDocInfo()?.setDeprecatedVersion('-1');
    });
  }

  /**
   * 拼接同名函数的API声明
   *
   * @param methodInfoMap
   * @returns
   */
  static joinApiText(methodInfoMap: Map<string, ApiInfo>): string {
    const apiTextArr: string[] = [];
    for (const apiText of methodInfoMap.keys()) {
      apiTextArr.push(apiText);
    }
    return apiTextArr.join(' #&# ');
  }

  /**
   * 生成map，key为API声明，value为API信息
   *
   * @param apiInfos
   * @returns
   */
  static setmethodInfoMap(apiInfos: ApiInfo[]): Map<string, ApiInfo> {
    const methodInfoMap: Map<string, ApiInfo> = new Map();
    apiInfos.forEach((apiInfo: ApiInfo) => {
      methodInfoMap.set(apiInfo.getDefinedText().replace(/\r|\n|\s+|,|;/g, ''), apiInfo);
    });
    return methodInfoMap;
  }

  /**
   * 删除新旧版本里所有信息一样的API
   *
   * @param oldApiInfos
   * @param newApiInfos
   * @returns
   */
  static getDiffSet(oldApiInfos: ApiInfo[], newApiInfos: ApiInfo[]): Map<string, ApiInfo>[] {
    const oldApiInfoMap: Map<string, ApiInfo> = new Map();
    const newApiInfoMap: Map<string, ApiInfo> = new Map();
    DiffHelper.setApiInfoMap(oldApiInfoMap, oldApiInfos);
    DiffHelper.setApiInfoMap(newApiInfoMap, newApiInfos);
    const oldReduceNewMap: Map<string, ApiInfo> = new Map();
    oldApiInfoMap.forEach((apiInfo: ApiInfo, key: string) => {
      if (!newApiInfoMap.has(key)) {
        oldReduceNewMap.set(key, apiInfo);
      }
    });
    const newReduceOldMap: Map<string, ApiInfo> = new Map();
    newApiInfoMap.forEach((apiInfo: ApiInfo, key: string) => {
      if (!oldApiInfoMap.has(key)) {
        newReduceOldMap.set(key, apiInfo);
      }
    });
    return [oldReduceNewMap, newReduceOldMap];
  }

  static setApiInfoMap(apiInfoMap: Map<string, ApiInfo>, apiInfos: ApiInfo[]): void {
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const key: string = `${apiInfo.getDefinedText()}#${apiInfo.getJsDocText()}#${JSON.stringify(apiInfo.getDecorators())}`;
      apiInfoMap.set(key, apiInfo);
    });
  }

  static getApiLocations(apiMap: FilesMap, isCheck?: boolean): Map<string, string[]> {
    const apiLocations: Map<string, string[]> = new Map();
    for (const filePath of apiMap.keys()) {
      const index: number = 0;
      const fileMap: FileInfoMap = apiMap.get(filePath) as FileInfoMap;
      DiffHelper.processFileApiMap(fileMap, apiLocations, index, isCheck);
    }
    return apiLocations;
  }

  static processFileApiMap(
    fileMap: FileInfoMap,
    apiLocations: Map<string, string[]>,
    index: number,
    isCheck?: boolean
  ): void {
    for (const apiKey of fileMap.keys()) {
      if (apiKey === StringConstant.SELF) {
        continue;
      }
      const apiInfoMap: ApiInfosMap = fileMap.get(apiKey) as ApiInfosMap;
      const apiInfos: BasicApiInfo[] = apiInfoMap.get(StringConstant.SELF) as BasicApiInfo[];
      apiInfos.forEach((apiInfo: BasicApiInfo) => {
        DiffHelper.processApiInfo(apiInfo, apiLocations, index, isCheck);
        index++;
      });
    }
  }

  /**
   * 删除最外层第一个API的jsdocText中，版权头和kit相关jsdoc
   *
   * @param apiInfo
   * @returns
   */
  static deleteUselessJsdoc(apiInfo: BasicApiInfo): string {
    const jsdocTextArr: string[] = apiInfo.getJsDocText().split('*/');
    const clonedJsdocTextArr: string[] = jsdocTextArr;
    if (clonedJsdocTextArr[1] && StringUtils.hasSubstring(clonedJsdocTextArr[1], CommentHelper.fileTag)) {
      jsdocTextArr.splice(1, 1);
    }

    if (clonedJsdocTextArr[0] && StringUtils.hasSubstring(clonedJsdocTextArr[0], CommentHelper.fileTag)) {
      jsdocTextArr.splice(0, 1);
    }

    if (clonedJsdocTextArr[0] && StringUtils.hasSubstring(clonedJsdocTextArr[0], CommentHelper.licenseKeyword)) {
      jsdocTextArr.splice(0, 1);
    }

    return jsdocTextArr.join('*/');
  }

  static processApiInfo(
    basicApiInfo: BasicApiInfo,
    apiLocations: Map<string, string[]>,
    index: number,
    isCheck?: boolean
  ): void {
    const apiNode: ts.Node | undefined = basicApiInfo.getNode();
    if (isCheck) {
      const jsDocText: string | undefined = apiNode?.getFullText().replace(apiNode.getText(), '');
      if (jsDocText) {
        basicApiInfo.setJsDocText(jsDocText);
      }
    }

    if (index === 0 && basicApiInfo.getParentApiType() === ApiType.SOURCE_FILE) {
      const jsDocText: string = DiffHelper.deleteUselessJsdoc(basicApiInfo);
      basicApiInfo.setJsDocText(jsDocText);
    }

    basicApiInfo.setSyscap(DiffHelper.getSyscapField(basicApiInfo));
    if (!apiStatisticsType.has(basicApiInfo.getApiType())) {
      return;
    }
    if (basicApiInfo.getApiName() === 'constructor') {
      return;
    }
    const apiInfo: ApiInfo = basicApiInfo as ApiInfo;
    const locations: string[] = apiInfo.getHierarchicalRelations();
    apiLocations.set(locations.toString(), locations);
    if (!containerApiTypes.has(apiInfo.getApiType())) {
      return;
    }
    const containerApiInfo: ContainerApiInfo = apiInfo as ContainerApiInfo;
    containerApiInfo.getChildApis().forEach((childApiInfo: BasicApiInfo) => {
      DiffHelper.processApiInfo(childApiInfo, apiLocations, 1, isCheck);
    });
  }

  static getSyscapField(apiInfo: BasicApiInfo): string {
    if (apiInfo.getApiType() === ApiType.SOURCE_FILE) {
      const sourceFileContent: string = apiInfo.getNode()?.getFullText() as string;
      let syscap = '';
      if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(sourceFileContent)) {
        sourceFileContent.replace(
          /\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
          (sysCapInfo: string, args: []) => {
            syscap = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim();
            return syscap;
          }
        );
      }
      return FunctionUtils.handleSyscap(syscap);
    }
    if (notJsDocApiTypes.has(apiInfo.getApiType())) {
      return '';
    }
    const clonedApiInfo: ApiInfo = apiInfo as ApiInfo;
    const latestJsDocInfo: Comment.JsDocInfo | undefined = clonedApiInfo.getLastJsDocInfo();
    if (!latestJsDocInfo) {
      return DiffHelper.searchSyscapFieldInParent(clonedApiInfo);
    }
    let syscap: string | undefined = latestJsDocInfo?.getSyscap();
    if (!syscap) {
      return DiffHelper.searchSyscapFieldInParent(clonedApiInfo);
    }
    if (syscap) {
      return FunctionUtils.handleSyscap(syscap);
    }
    return '';
  }

  static searchSyscapFieldInParent(apiInfo: ApiInfo): string {
    let curApiInfo: ApiInfo = apiInfo;
    let syscap: string = '';
    const node: ts.Node | undefined = curApiInfo.getNode();
    while (node && curApiInfo && !ts.isSourceFile(node)) {
      syscap = curApiInfo.getSyscap();
      if (syscap) {
        return syscap;
      }
      curApiInfo = curApiInfo.getParentApi() as ApiInfo;
    }
    return syscap;
  }
}

/**
 * 比较每个标签的值
 */
export class DiffTagInfoHelper {
  static diffSyscapTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getSyscap() === newJsDocInfo?.getSyscap()) {
      return true;
    }
    return false;
  }

  static diffSinceTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getSince() === newJsDocInfo?.getSince()) {
      return true;
    }
    return false;
  }

  static diffFormTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getIsForm() === newJsDocInfo?.getIsForm()) {
      return true;
    }
    return false;
  }

  static diffCrossPlatFromTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getIsCrossPlatForm() === newJsDocInfo?.getIsCrossPlatForm()) {
      return true;
    }
    return false;
  }

  static diffSystemApiTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getIsSystemApi() === newJsDocInfo?.getIsSystemApi()) {
      return true;
    }
    return false;
  }

  static diffModelTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getModelLimitation() === newJsDocInfo?.getModelLimitation()) {
      return true;
    }
    return false;
  }

  static diffDeprecatedTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getDeprecatedVersion() === newJsDocInfo?.getDeprecatedVersion()) {
      return true;
    }
    return false;
  }

  static diffUseinsteadTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getUseinstead() === newJsDocInfo?.getUseinstead()) {
      return true;
    }
    return false;
  }

  static diffPermissionTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getPermission() === newJsDocInfo?.getPermission()) {
      return true;
    }
    return false;
  }

  static diffThrowsTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getErrorCode().sort().join() === newJsDocInfo?.getErrorCode().sort().join()) {
      return true;
    }
    return false;
  }

  static diffAtomicServiceTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    if (oldJsDocInfo?.getIsAtomicService() === newJsDocInfo?.getIsAtomicService()) {
      return true;
    }
    return false;
  }

  static diffParamTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    const oldParamArr: string[] = [];
    const newParamArr: string[] = [];
    oldJsDocInfo?.getTags()?.forEach((tagInfo: Comment.CommentTag) => {
      if (tagInfo.tag === Comment.JsDocTag.PARAM) {
        oldParamArr.push(`${tagInfo.name}#${tagInfo.type}`);
      }
    });

    newJsDocInfo?.getTags()?.forEach((tagInfo: Comment.CommentTag) => {
      if (tagInfo.tag === Comment.JsDocTag.PARAM) {
        newParamArr.push(`${tagInfo.name}#${tagInfo.type}`);
      }
    });
    if (oldParamArr.join() === newParamArr.join()) {
      return true;
    }
    return false;
  }

  static diffReturnsTagInfo(
    oldJsDocInfo: Comment.JsDocInfo | undefined,
    newJsDocInfo: Comment.JsDocInfo | undefined
  ): boolean {
    let oldReturnValue: string = '';
    let newReturnValue: string = '';

    oldJsDocInfo?.getTags()?.forEach((tagInfo: Comment.CommentTag) => {
      if (tagInfo.tag === Comment.JsDocTag.RETURNS) {
        oldReturnValue = tagInfo.type;
      }
    });

    newJsDocInfo?.getTags()?.forEach((tagInfo: Comment.CommentTag) => {
      if (tagInfo.tag === Comment.JsDocTag.PARAM) {
        oldReturnValue = tagInfo.type;
      }
    });
    if (oldReturnValue === oldReturnValue) {
      return true;
    }
    return false;
  }
}

export const diffJsdocMethod: Map<string, TagInfoDiffProcessor> = new Map([
  [Comment.JsDocTag.SYSCAP, DiffTagInfoHelper.diffSyscapTagInfo],
  [Comment.JsDocTag.SINCE, DiffTagInfoHelper.diffSinceTagInfo],
  [Comment.JsDocTag.FORM, DiffTagInfoHelper.diffFormTagInfo],
  [Comment.JsDocTag.CROSS_PLAT_FORM, DiffTagInfoHelper.diffCrossPlatFromTagInfo],
  [Comment.JsDocTag.SYSTEM_API, DiffTagInfoHelper.diffSystemApiTagInfo],
  [Comment.JsDocTag.STAGE_MODEL_ONLY, DiffTagInfoHelper.diffModelTagInfo],
  [Comment.JsDocTag.FA_MODEL_ONLY, DiffTagInfoHelper.diffModelTagInfo],
  [Comment.JsDocTag.DEPRECATED, DiffTagInfoHelper.diffDeprecatedTagInfo],
  [Comment.JsDocTag.USEINSTEAD, DiffTagInfoHelper.diffUseinsteadTagInfo],
  [Comment.JsDocTag.PERMISSION, DiffTagInfoHelper.diffPermissionTagInfo],
  [Comment.JsDocTag.THROWS, DiffTagInfoHelper.diffThrowsTagInfo],
  [Comment.JsDocTag.ATOMIC_SERVICE, DiffTagInfoHelper.diffAtomicServiceTagInfo],
  [Comment.JsDocTag.PARAM, DiffTagInfoHelper.diffParamTagInfo],
  [Comment.JsDocTag.RETURNS, DiffTagInfoHelper.diffReturnsTagInfo],
]);
