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

import {
  ApiInfo,
  ApiType,
  BasicApiInfo,
  ConstantInfo,
  EnumValueInfo,
  MethodInfo,
  ParamInfo,
  PropertyInfo,
  TypeAliasInfo,
  InterfaceInfo,
  ClassInfo
} from '../../typedef/parser/ApiInfoDefination';
import { Comment } from '../../typedef/parser/Comment';
import {
  ApiDiffType,
  ApiStatusCode,
  ApiNodeDiffProcessor,
  ApiSceneDiffProcessor,
  ApiScenesDiffProcessor,
  BasicDiffInfo,
  DiffTypeInfo,
  diffMap,
  incompatibleApiDiffTypes,
  JsDocDiffProcessor,
  parentApiTypeSet,
} from '../../typedef/diff/ApiInfoDiff';
import { StringUtils } from '../../utils/StringUtils';
import { CharMapType, CompareReturnObjType, PermissionsProcessorHelper, RangeChange } from './PermissionsProcessor';
import { DecoratorInfo } from '../../typedef/parser/Decorator';
import { CommonFunctions } from '../../utils/checkUtils';
import { NumberConstant } from '../../utils/Constant';
import ts from 'typescript';

export namespace DiffProcessorHelper {
  /**
   * 权限编码进行逻辑运算的转义规则
   */
  export const permissionsCharMap: CharMapType = new Map([
    ['and', { splitchar: 'and', transferchar: '&' }],
    ['or', { splitchar: 'or', transferchar: '|' }],
  ]);

  /**
   * type进行逻辑运算的转义规则
   */
  export const typeCharMap: CharMapType = new Map([
    ['and', { splitchar: '&', transferchar: '&' }],
    ['or', { splitchar: '|', transferchar: '|' }],
  ]);

  /**
   * 处理api节点jsdoc中的diff信息工具
   *
   */
  export class JsDocDiffHelper {
    static diffJsDocInfo(
      oldApiInfo: ApiInfo,
      newApiInfo: ApiInfo,
      diffInfos: BasicDiffInfo[],
      isAllDeprecated?: boolean,
      isAllSheet?: boolean
    ): void {
      const oldJsDocInfo: Comment.JsDocInfo | undefined = oldApiInfo.getLastJsDocInfo();
      const newJsDocInfo: Comment.JsDocInfo | undefined = newApiInfo.getLastJsDocInfo();
      JsDocDiffHelper.diffSinceVersion(oldApiInfo, newApiInfo, diffInfos);
      const allDiffTypeInfo: DiffTypeInfo[] | undefined = JsDocDiffHelper.diffErrorCodes(oldJsDocInfo, newJsDocInfo);
      allDiffTypeInfo?.forEach((diffType: DiffTypeInfo) => {
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffType);
        diffInfos.push(diffInfo);
      });
      for (let i = 0; i < jsDocDiffProcessors.length; i++) {
        const jsDocDiffProcessor: JsDocDiffProcessor | undefined = jsDocDiffProcessors[i];
        const diffType: DiffTypeInfo | undefined = jsDocDiffProcessor(
          oldJsDocInfo,
          newJsDocInfo,
          isAllDeprecated,
          isAllSheet
        );
        if (!diffType) {
          continue;
        }
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffType);
        diffInfos.push(diffInfo);
      }
    }

    static getFirstSinceVersion(jsDocInfos: Comment.JsDocInfo[]): string {
      let sinceVersion: string = '';
      for (let i = 0; i < jsDocInfos.length; i++) {
        const jsDocInfo: Comment.JsDocInfo = jsDocInfos[i];
        if (jsDocInfo.getSince() !== '-1') {
          sinceVersion = jsDocInfo.getSince();
          return sinceVersion;
        }
      }
      return sinceVersion;
    }

    static diffSinceVersion(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldFirstJsDocInfo: Comment.JsDocInfo | undefined = oldApiInfo.getJsDocInfos()[0];
      const newFirstJsDocInfo: Comment.JsDocInfo | undefined = newApiInfo.getJsDocInfos()[0];
      const sinceVersionOfOld: string = oldFirstJsDocInfo ? oldFirstJsDocInfo.getSince() : '-1';
      const sinceVersionOfNew: string = newFirstJsDocInfo ? newFirstJsDocInfo.getSince() : '-1';
      diffTypeInfo
        .setStatusCode(ApiStatusCode.VERSION_CHNAGES)
        .setOldMessage(sinceVersionOfOld)
        .setNewMessage(sinceVersionOfNew);
      if (sinceVersionOfOld === sinceVersionOfNew) {
        return;
      }
      if (sinceVersionOfOld === '-1') {
        diffTypeInfo.setDiffType(ApiDiffType.SINCE_VERSION_NA_TO_HAVE);
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
        diffInfos.push(diffInfo);
        return;
      }
      if (sinceVersionOfNew === '-1') {
        diffTypeInfo.setDiffType(ApiDiffType.SINCE_VERSION_HAVE_TO_NA);
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
        diffInfos.push(diffInfo);
        return;
      }
      diffTypeInfo.setDiffType(ApiDiffType.SINCE_VERSION_A_TO_B);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }

    static diffIsSystemApi(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const isSystemApiOfOld: boolean = oldJsDocInfo ? oldJsDocInfo.getIsSystemApi() : false;
      const isSystemApiOfNew: boolean = newJsDocInfo ? newJsDocInfo.getIsSystemApi() : false;
      diffTypeInfo
        .setStatusCode(ApiStatusCode.SYSTEM_API_CHNAGES)
        .setOldMessage(StringUtils.transformBooleanToTag(isSystemApiOfOld, Comment.JsDocTag.SYSTEM_API))
        .setNewMessage(StringUtils.transformBooleanToTag(isSystemApiOfNew, Comment.JsDocTag.SYSTEM_API));
      if (isSystemApiOfNew === isSystemApiOfOld) {
        return undefined;
      }
      if (isSystemApiOfNew) {
        return diffTypeInfo.setDiffType(ApiDiffType.PUBLIC_TO_SYSTEM);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.SYSTEM_TO_PUBLIC);
    }

    static diffModelLimitation(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const modelLimitationDiffMap: Map<string, ApiDiffType> = new Map([
        ['_stagemodelonly', ApiDiffType.NA_TO_STAGE],
        ['stagemodelonly_', ApiDiffType.STAGE_TO_NA],
        ['_famodelonly', ApiDiffType.NA_TO_FA],
        ['famodelonly_', ApiDiffType.FA_TO_NA],
        ['famodelonly_stagemodelonly', ApiDiffType.FA_TO_STAGE],
        ['stagemodelonly_famodelonly', ApiDiffType.STAGE_TO_FA],
      ]);
      const modelLimitationOfOld: string = oldJsDocInfo ? oldJsDocInfo.getModelLimitation().toLowerCase() : '';
      const modelLimitationOfNew: string = newJsDocInfo ? newJsDocInfo.getModelLimitation().toLowerCase() : '';
      if (modelLimitationOfNew === modelLimitationOfOld) {
        return undefined;
      }
      const diffMsg: string = `${modelLimitationOfOld.toLowerCase()}_${modelLimitationOfNew.toLowerCase()}`;
      const diffType: ApiDiffType = modelLimitationDiffMap.get(diffMsg) as ApiDiffType;
      diffTypeInfo
        .setStatusCode(ApiStatusCode.MODEL_CHNAGES)
        .setDiffType(diffType)
        .setOldMessage(modelLimitationOfOld)
        .setNewMessage(modelLimitationOfNew);
      return diffTypeInfo;
    }

    static diffIsForm(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const isCardOfOld: boolean = oldJsDocInfo ? oldJsDocInfo.getIsForm() : false;
      const isCardOfNew: boolean = newJsDocInfo ? newJsDocInfo.getIsForm() : false;
      diffTypeInfo
        .setStatusCode(ApiStatusCode.FORM_CHANGED)
        .setOldMessage(StringUtils.transformBooleanToTag(isCardOfOld, Comment.JsDocTag.FORM))
        .setNewMessage(StringUtils.transformBooleanToTag(isCardOfNew, Comment.JsDocTag.FORM));
      if (isCardOfNew === isCardOfOld) {
        return undefined;
      }
      if (isCardOfNew) {
        return diffTypeInfo.setDiffType(ApiDiffType.NA_TO_CARD);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.CARD_TO_NA);
    }

    static diffIsCrossPlatForm(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const isCrossPlatFormOfOld: boolean = oldJsDocInfo ? oldJsDocInfo.getIsCrossPlatForm() : false;
      const isCrossPlatFormOfNew: boolean = newJsDocInfo ? newJsDocInfo.getIsCrossPlatForm() : false;
      diffTypeInfo
        .setStatusCode(ApiStatusCode.CROSSPLATFORM_CHANGED)
        .setOldMessage(StringUtils.transformBooleanToTag(isCrossPlatFormOfOld, Comment.JsDocTag.CROSS_PLAT_FORM))
        .setNewMessage(StringUtils.transformBooleanToTag(isCrossPlatFormOfNew, Comment.JsDocTag.CROSS_PLAT_FORM));
      if (isCrossPlatFormOfNew === isCrossPlatFormOfOld) {
        return undefined;
      }
      if (isCrossPlatFormOfNew) {
        return diffTypeInfo.setDiffType(ApiDiffType.NA_TO_CROSS_PLATFORM);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.CROSS_PLATFORM_TO_NA);
    }

    static diffAtomicService(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const isAtomicServiceOfOld: boolean | undefined = oldJsDocInfo ? oldJsDocInfo.getIsAtomicService() : false;
      const isAtomicServiceOfNew: boolean | undefined = newJsDocInfo ? newJsDocInfo.getIsAtomicService() : false;
      diffTypeInfo
        .setStatusCode(ApiStatusCode.ATOMICSERVICE_CHANGE)
        .setOldMessage(StringUtils.transformBooleanToTag(isAtomicServiceOfOld, Comment.JsDocTag.ATOMIC_SERVICE))
        .setNewMessage(StringUtils.transformBooleanToTag(isAtomicServiceOfNew, Comment.JsDocTag.ATOMIC_SERVICE));
      if (isAtomicServiceOfOld === isAtomicServiceOfNew) {
        return undefined;
      }
      if (isAtomicServiceOfNew) {
        return diffTypeInfo.setDiffType(ApiDiffType.ATOMIC_SERVICE_NA_TO_HAVE);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA);
    }

    static diffPermissions(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const permissionsOfOld: string = oldJsDocInfo ? oldJsDocInfo.getPermission() : '';
      const permissionsOfNew: string = newJsDocInfo ? newJsDocInfo.getPermission() : '';
      diffTypeInfo
        .setStatusCode(ApiStatusCode.PERMISSION_CHANGES)
        .setOldMessage(permissionsOfOld)
        .setNewMessage(permissionsOfNew);
      if (permissionsOfOld === permissionsOfNew) {
        return undefined;
      }
      if (permissionsOfOld === '') {
        return diffTypeInfo.setStatusCode(ApiStatusCode.PERMISSION_NEW).setDiffType(ApiDiffType.PERMISSION_NA_TO_HAVE);
      }
      if (permissionsOfNew === '') {
        return diffTypeInfo
          .setStatusCode(ApiStatusCode.PERMISSION_DELETE)
          .setDiffType(ApiDiffType.PERMISSION_HAVE_TO_NA);
      }
      const permiss: PermissionsProcessorHelper = new PermissionsProcessorHelper(permissionsCharMap);
      const compareVal: CompareReturnObjType = permiss.comparePermissions(permissionsOfOld, permissionsOfNew);
      if (compareVal.range === RangeChange.DOWN) {
        return diffTypeInfo.setDiffType(ApiDiffType.PERMISSION_RANGE_SMALLER);
      }
      if (compareVal.range === RangeChange.UP) {
        return diffTypeInfo.setDiffType(ApiDiffType.PERMISSION_RANGE_BIGGER);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.PERMISSION_RANGE_CHANGE);
    }

    static diffErrorCodes(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo[] | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const errorCodesOfOld: number[] = oldJsDocInfo ? oldJsDocInfo.getErrorCode().sort() : [];
      const errorCodesOfNew: number[] = newJsDocInfo ? newJsDocInfo.getErrorCode().sort() : [];
      const errorCodeSetOfOld: Set<number> = new Set(errorCodesOfOld);
      const errorCodeSetOfNew: Set<number> = new Set(errorCodesOfNew);
      const allErrorCodes: Set<number> = new Set(errorCodesOfNew.concat(errorCodesOfOld));
      const errorCodesStringOfOld: string = errorCodesOfOld.toString();
      const errorCodesStringOfNew: string = errorCodesOfNew.toString();
      const allDiffTypeInfo: DiffTypeInfo[] = [];
      diffTypeInfo
        .setStatusCode(ApiStatusCode.ERRORCODE_CHANGES)
        .setOldMessage(errorCodesStringOfOld)
        .setNewMessage(errorCodesStringOfNew);
      if (errorCodesStringOfNew === errorCodesStringOfOld) {
        return undefined;
      }
      if (errorCodesOfOld.length === 0 && errorCodesOfNew.length !== 0) {
        allDiffTypeInfo.push(
          diffTypeInfo.setStatusCode(ApiStatusCode.NEW_ERRORCODE).setDiffType(ApiDiffType.ERROR_CODE_NA_TO_HAVE)
        );
        return allDiffTypeInfo;
      }
      const oldChangeErrorCodes: number[] = [];
      const newChangeErrorCodes: number[] = [];
      allErrorCodes.forEach((errorCode: number) => {
        if (!errorCodeSetOfOld.has(errorCode)) {
          oldChangeErrorCodes.push(errorCode);
        }
        if (!errorCodeSetOfNew.has(errorCode)) {
          newChangeErrorCodes.push(errorCode);
        }
      });
      if (oldChangeErrorCodes.length !== 0) {
        const oldDiffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
        oldDiffTypeInfo
          .setOldMessage('NA')
          .setNewMessage(oldChangeErrorCodes.join())
          .setStatusCode(ApiStatusCode.NEW_ERRORCODE)
          .setDiffType(ApiDiffType.ERROR_CODE_ADD);
        allDiffTypeInfo.push(oldDiffTypeInfo);
      }
      if (newChangeErrorCodes.length !== 0) {
        const newDiffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
        newDiffTypeInfo
          .setOldMessage(newChangeErrorCodes.join())
          .setNewMessage('NA')
          .setStatusCode(ApiStatusCode.ERRORCODE_DELETE)
          .setDiffType(ApiDiffType.ERROR_CODE_REDUCE);
        allDiffTypeInfo.push(newDiffTypeInfo);
      }
      return allDiffTypeInfo;
    }

    static diffSyscap(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const syscapOfOld: string = oldJsDocInfo ? oldJsDocInfo.getSyscap() : '';
      const syscapOfNew: string = newJsDocInfo ? newJsDocInfo.getSyscap() : '';
      diffTypeInfo.setStatusCode(ApiStatusCode.SYSCAP_CHANGES).setOldMessage(syscapOfOld).setNewMessage(syscapOfNew);
      if (syscapOfNew === syscapOfOld) {
        return undefined;
      }
      if (syscapOfOld === '') {
        return diffTypeInfo.setDiffType(ApiDiffType.SYSCAP_NA_TO_HAVE);
      }
      if (syscapOfNew === '') {
        return diffTypeInfo.setDiffType(ApiDiffType.SYSCAP_HAVE_TO_NA);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.SYSCAP_A_TO_B);
    }

    static diffDeprecated(
      oldJsDocInfo: Comment.JsDocInfo | undefined,
      newJsDocInfo: Comment.JsDocInfo | undefined,
      isAllDeprecated?: boolean,
      isAllSheet?: boolean
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const deprecatedVersionOfOld: string = oldJsDocInfo ? oldJsDocInfo.getDeprecatedVersion() : '-1';
      const deprecatedVersionOfNew: string = newJsDocInfo ? newJsDocInfo.getDeprecatedVersion() : '-1';
      diffTypeInfo
        .setStatusCode(ApiStatusCode.DEPRECATED_CHNAGES)
        .setOldMessage(deprecatedVersionOfOld.toString())
        .setNewMessage(deprecatedVersionOfNew.toString());
      if (deprecatedVersionOfNew === deprecatedVersionOfOld) {
        return undefined;
      }
      if (isAllSheet) {
        if (deprecatedVersionOfOld === '-1' && !isAllDeprecated) {
          return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_NOT_All);
        }
        if (deprecatedVersionOfOld === '-1' && isAllDeprecated) {
          return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_NA_TO_HAVE);
        }
      } else {
        if (deprecatedVersionOfOld === '-1') {
          return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_NA_TO_HAVE);
        }
        if (deprecatedVersionOfNew === '-1') {
          return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_HAVE_TO_NA);
        }
      }

      if (deprecatedVersionOfNew === '-1') {
        return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_HAVE_TO_NA);
      }

      return diffTypeInfo.setDiffType(ApiDiffType.DEPRECATED_A_TO_B);
    }
  }

  /**
   * 比较API的装饰器信息
   */
  export class ApiDecoratorsDiffHelper {
    /**
     * 新旧版本API一致的情况下，比较装饰器
     *
     * @param {ApiInfo} oldApiInfo
     * @param {ApiInfo} newApiInfo
     * @param {BasicDiffInfo[]} diffInfos
     * @returns
     */
    static diffDecorator(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const oldDecoratorsMap: Map<string, string[] | undefined> = ApiDecoratorsDiffHelper.setDecoratorsMap(
        oldApiInfo.getDecorators()
      );
      const newDecoratorsMap: Map<string, string[] | undefined> = ApiDecoratorsDiffHelper.setDecoratorsMap(
        newApiInfo.getDecorators()
      );
      if (newDecoratorsMap.size === 0) {
        for (const key of oldDecoratorsMap.keys()) {
          ApiDecoratorsDiffHelper.addDeleteDecoratorsInfo(key, oldApiInfo, newApiInfo, diffInfos);
        }
        return;
      }

      if (oldDecoratorsMap.size === 0) {
        for (const key of newDecoratorsMap.keys()) {
          ApiDecoratorsDiffHelper.addNewDecoratorsInfo(key, oldApiInfo, newApiInfo, diffInfos);
          newDecoratorsMap.delete(key);
        }
        return;
      }
      ApiDecoratorsDiffHelper.diffDecoratorInfo(oldDecoratorsMap, newDecoratorsMap, oldApiInfo, newApiInfo, diffInfos);
    }

    static diffDecoratorInfo(
      oldDecoratorsMap: Map<string, string[] | undefined>,
      newDecoratorsMap: Map<string, string[] | undefined>,
      oldApiInfo: ApiInfo,
      newApiInfo: ApiInfo,
      diffInfos: BasicDiffInfo[]
    ): void {
      const sameDecoratorSet: Set<string> = new Set();
      for (const key of oldDecoratorsMap.keys()) {
        const newDecoratorArguments: string[] | undefined = newDecoratorsMap.get(key);
        const oldDecoratorArguments: string[] | undefined = oldDecoratorsMap.get(key);
        //新版本没有这个装饰器
        if (!newDecoratorArguments) {
          ApiDecoratorsDiffHelper.addDeleteDecoratorsInfo(key, oldApiInfo, newApiInfo, diffInfos);
          sameDecoratorSet.add(key);
          continue;
        }

        // 新旧版本装饰器参数一样
        if (oldDecoratorArguments && newDecoratorArguments.join() === oldDecoratorArguments.join()) {
          newDecoratorsMap.delete(key);
          sameDecoratorSet.add(key);
          continue;
        }
      }
      // 新版中剩下的装饰器为新增
      for (const key of newDecoratorsMap.keys()) {
        ApiDecoratorsDiffHelper.addNewDecoratorsInfo(key, oldApiInfo, newApiInfo, diffInfos);
      }

      for (const key of oldDecoratorsMap.keys()) {
        if (sameDecoratorSet.has(key)) {
          continue;
        }
        ApiDecoratorsDiffHelper.addDeleteDecoratorsInfo(key, oldApiInfo, newApiInfo, diffInfos);
      }
    }

    static setDecoratorsMap(decorators: DecoratorInfo[] | undefined): Map<string, string[] | undefined> {
      const decoratorsMap: Map<string, string[]> = new Map();
      if (!decorators) {
        return decoratorsMap;
      }

      decorators.forEach((decoratorInfo: DecoratorInfo) => {
        const expressionArguments: string[] | undefined = decoratorInfo.getExpressionArguments();
        decoratorsMap.set(decoratorInfo.getExpression(), expressionArguments === undefined ? [] : expressionArguments);
      });
      return decoratorsMap;
    }

    static addDeleteDecoratorsInfo(
      decoratorName: string,
      oldApiInfo: ApiInfo,
      newApiInfo: ApiInfo,
      diffInfos: BasicDiffInfo[]
    ): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo
        .setStatusCode(ApiStatusCode.DELETE_DECORATOR)
        .setDiffType(ApiDiffType.DELETE_DECORATOR)
        .setOldMessage(decoratorName)
        .setNewMessage('');
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }

    static addNewDecoratorsInfo(
      decoratorName: string,
      oldApiInfo: ApiInfo,
      newApiInfo: ApiInfo,
      diffInfos: BasicDiffInfo[]
    ): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo
        .setStatusCode(ApiStatusCode.NEW_DECORATOR)
        .setDiffType(ApiDiffType.NEW_DECORATOR)
        .setOldMessage('')
        .setNewMessage(decoratorName);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }
  }

  export class ApiCheckHelper {
    /**
     * 比较两个API的历史版本jsdoc
     *
     * @param {ApiInfo} oldApiInfo
     * @param {ApiInfo} newApiInfo
     * @param {BasicDiffInfo[]} diffInfos
     */
    static diffHistoricalJsDoc(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const currentVersion: string = CommonFunctions.getCheckApiVersion().toString();
      const oldJsDocTextArr: Array<string> = oldApiInfo.getJsDocText().split('*/');
      const newJsDocTextArr: Array<string> = newApiInfo.getJsDocText().split('*/');
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();

      if (oldApiInfo.getCurrentVersion() === currentVersion) {
        oldJsDocTextArr.splice(NumberConstant.DELETE_CURRENT_JS_DOC);
      } else {
        oldJsDocTextArr.splice(-1);
      }

      if (newApiInfo.getCurrentVersion() === currentVersion) {
        newJsDocTextArr.splice(NumberConstant.DELETE_CURRENT_JS_DOC);
      } else {
        newJsDocTextArr.splice(-1);
      }

      if (oldJsDocTextArr.length !== newJsDocTextArr.length) {
        diffTypeInfo.setDiffType(ApiDiffType.HISTORICAL_JSDOC_CHANGE);
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
        diffInfos.push(diffInfo);
        return;
      }
      for (let i = 0; i < oldJsDocTextArr.length; i++) {
        if (oldJsDocTextArr[i].replace(/\r\n|\n|\s+/g, '') !== newJsDocTextArr[i].replace(/\r\n|\n|\s+/g, '')) {
          diffTypeInfo.setDiffType(ApiDiffType.HISTORICAL_JSDOC_CHANGE);
          const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
          diffInfos.push(diffInfo);
        }
      }
    }

    static diffHistoricalAPI(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const currentVersion: string = CommonFunctions.getCheckApiVersion().toString();
      const oldApiDefinedText: string = oldApiInfo.getDefinedText();
      const newApiDefinedText: string = newApiInfo.getDefinedText();
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      if (oldApiDefinedText !== newApiDefinedText && newApiInfo.getCurrentVersion() !== currentVersion) {
        diffTypeInfo.setDiffType(ApiDiffType.HISTORICAL_API_CHANGE);
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
        diffInfos.push(diffInfo);
      }
    }
  }

  /**
   * 处理api节点的diff信息工具
   *
   */
  export class ApiNodeDiffHelper {
    /**
     * 根据节点类型处理节点的diff信息，处理的主流程
     *
     * @param {ApiInfo} oldApiInfo 旧版本的节点信息
     * @param {ApiInfo} newApiInfo 新版本的节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     * @return {void}
     */
    static diffNodeInfo(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[], isCheck?: boolean): void {
      if (isCheck) {
        ApiCheckHelper.diffHistoricalJsDoc(oldApiInfo, newApiInfo, diffInfos);
        ApiCheckHelper.diffHistoricalAPI(oldApiInfo, newApiInfo, diffInfos);
      }
      const oldApiType: string = oldApiInfo.getApiType();
      const newApiType: string = newApiInfo.getApiType();
      if (
        `${oldApiType}_${newApiType}` === `${ApiType.CONSTANT}_${ApiType.PROPERTY}` ||
        `${oldApiType}_${newApiType}` === `${ApiType.PROPERTY}_${ApiType.CONSTANT}`
      ) {
        ApiNodeDiffHelper.diffConstant(oldApiInfo as ApiInfo, newApiInfo as ApiInfo, diffInfos);
      }
      if (oldApiInfo.getApiType() !== newApiType) {
        return;
      }
      const apiNodeDiff: ApiNodeDiffProcessor | undefined = apiNodeDiffMethod.get(newApiType);
      if (!apiNodeDiff) {
        return;
      }
      apiNodeDiff(oldApiInfo, newApiInfo, diffInfos);
    }

    /**
     * 处理type类型
     *
     * @static
     * @param {string} oldType 旧版本的type字符串
     * @param {string} newType 新版本的type字符串
     * @return { ApiDiffType | undefined}  type范围的变化情况
     * @memberof ApiNodeDiffHelper
     */
    static diffBaseType(oldType: string, newType: string): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      if (oldType === newType) {
        return undefined;
      }
      diffTypeInfo.setStatusCode(ApiStatusCode.TYPE_CHNAGES).setOldMessage(oldType).setNewMessage(newType);
      if (oldType === '') {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_RANGE_CHANGE);
      }
      if (newType === '') {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_RANGE_CHANGE);
      }
      const permiss: PermissionsProcessorHelper = new PermissionsProcessorHelper(typeCharMap);
      const compareVal: CompareReturnObjType = permiss.comparePermissions(oldType, newType);
      if (compareVal.range === RangeChange.DOWN) {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_RANGE_SMALLER);
      }
      if (compareVal.range === RangeChange.UP) {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_RANGE_BIGGER);
      }
      return diffTypeInfo.setDiffType(ApiDiffType.TYPE_RANGE_CHANGE);
    }

    /**
     * 处理方法节点，获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的方法节点信息
     * @param {ApiInfo} newApiInfo 新版本的方法节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     */
    static diffMethod(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      methodDiffProcessors.forEach((methodDiffProcessor: ApiScenesDiffProcessor) => {
        const diffTypeInfo: DiffTypeInfo[] | DiffTypeInfo | undefined = methodDiffProcessor(
          oldApiInfo as MethodInfo,
          newApiInfo as MethodInfo
        );
        if (!diffTypeInfo) {
          return;
        }
        if (diffTypeInfo instanceof Array) {
          diffTypeInfo.forEach((info: DiffTypeInfo) => {
            const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
              oldApiInfo,
              newApiInfo,
              info.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
            );
            diffInfos.push(diffInfo);
          });
        } else {
          const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
            oldApiInfo,
            newApiInfo,
            diffTypeInfo.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
          );
          diffInfos.push(diffInfo);
        }
      });
    }
    static diffTypeAliasReturnType(oldApiInfo: TypeAliasInfo, newApiInfo: TypeAliasInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldReturnType: string[] = oldApiInfo.getReturnType();
      const newReturnType: string[] = newApiInfo.getReturnType();
      const olaMethodTypeStr = oldReturnType.toString().replace(/\r|\n|\s+|'|"/g, '');
      const newMethodTypeStr = newReturnType.toString().replace(/\r|\n|\s+|'|"/g, '');
      if (olaMethodTypeStr === newMethodTypeStr) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(olaMethodTypeStr).setNewMessage(newMethodTypeStr);
      if (checkParentContainChild(newReturnType, oldReturnType)) {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_ADD);
      }
      if (checkParentContainChild(oldReturnType, newReturnType)) {
        return diffTypeInfo.setDiffType(ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_REDUCE);
      }
      // 旧版本不包含新版本，新版本也不含旧版本，就定义为返回值变更
      return diffTypeInfo.setDiffType(ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_CHANGE);
    }
    /**
     * 处理方法节点的返回值
     *
     * @param {MethodInfo} oldApiInfo 旧版本的方法节点信息
     * @param {MethodInfo} newApiInfo 新版本的方法节点信息
     * @return {*}  {(ApiDiffType | undefined)} 方法节点的返回值的变化情况
     */
    static diffMethodReturnType(
      oldApiInfo: MethodInfo,
      newApiInfo: MethodInfo | TypeAliasInfo
    ): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldReturnType: string[] = oldApiInfo.getReturnValue();
      const newReturnType: string[] =
        newApiInfo.getApiType() === ApiType.TYPE_ALIAS
          ? (newApiInfo as TypeAliasInfo).getReturnType()
          : (newApiInfo as MethodInfo).getReturnValue();
      const oldMethodTypeStr = oldReturnType.toString().replace(/\r|\n|\s+|'|"|>/g, '');
      const newMethodTypeStr = newReturnType.toString().replace(/\r|\n|\s+|'|"|>/g, '');
      if (oldMethodTypeStr === newMethodTypeStr) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(oldReturnType.toString()).setNewMessage(newReturnType.toString());
      if (checkParentContainChild(newReturnType, oldReturnType)) {
        return diffTypeInfo.setDiffType(ApiDiffType.FUNCTION_RETURN_TYPE_ADD);
      }
      if (StringUtils.hasSubstring(newMethodTypeStr, oldMethodTypeStr)) {
        return diffTypeInfo.setDiffType(ApiDiffType.FUNCTION_RETURN_TYPE_ADD);
      }
      if (checkParentContainChild(oldReturnType, newReturnType)) {
        return diffTypeInfo.setDiffType(ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE);
      }
      if (StringUtils.hasSubstring(oldMethodTypeStr, newMethodTypeStr)) {
        return diffTypeInfo.setDiffType(ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE);
      }
      // 旧版本不包含新版本，新版本也不含旧版本，就定义为返回值变更
      return diffTypeInfo.setDiffType(ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE);
    }

    /**
     *
     * @param isTypeAlias 是否为自定义节点类型
     * @returns {*} {DiffMethodType} 当前节点类型对应的修改类型
     */
    static getDiffMethodTypes(isTypeAlias: boolean): DiffMethodType & DiffTypeChangeType {
      if (isTypeAlias) {
        return {
          POS_CHANGE: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_POS_CHAHGE,
          ADD_OPTIONAL_PARAM: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_UNREQUIRED_ADD,
          ADD_REQUIRED_PARAM: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REQUIRED_ADD,
          REDUCE_PARAM: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REDUCE,
          PARAM_TYPE_CHANGE: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE,
          PARAM_TYPE_ADD: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD,
          PARAM_TYPE_REDUCE: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE,
          PARAM_TO_UNREQUIRED: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_UNREQUIRED,
          PARAM_TO_REQUIRED: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_REQUIRED,
          PARAM_CHANGE: ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_CHANGE,
        };
      } else {
        return {
          POS_CHANGE: ApiDiffType.FUNCTION_PARAM_POS_CHANGE,
          ADD_OPTIONAL_PARAM: ApiDiffType.FUNCTION_PARAM_UNREQUIRED_ADD,
          ADD_REQUIRED_PARAM: ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD,
          REDUCE_PARAM: ApiDiffType.FUNCTION_PARAM_REDUCE,
          PARAM_TYPE_CHANGE: ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE,
          PARAM_TYPE_ADD: ApiDiffType.FUNCTION_PARAM_TYPE_ADD,
          PARAM_TYPE_REDUCE: ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE,
          PARAM_TO_UNREQUIRED: ApiDiffType.FUNCTION_PARAM_TO_UNREQUIRED,
          PARAM_TO_REQUIRED: ApiDiffType.FUNCTION_PARAM_TO_REQUIRED,
          PARAM_CHANGE: ApiDiffType.FUNCTION_PARAM_CHANGE,
        };
      }
    }
    /**
     * 处理方法节点的参数，获取对应diff信息
     *
     * @param {MethodInfo} oldApiInfo 旧版本的方法节点信息
     * @param {MethodInfo} newApiInfo 新版本的方法节点信息
     * @return {*}  {ApiDiffType[]}  返回各个参数的变化情况
     */
    static diffMethodParams(
      oldApiInfo: MethodInfo | TypeAliasInfo,
      newApiInfo: MethodInfo | TypeAliasInfo
    ): DiffTypeInfo[] {
      const diffTypeInfos: DiffTypeInfo[] = [];
      const isTypeAlias: boolean = oldApiInfo.getApiType() === 'TypeAlias';
      const oldMethodParams: ParamInfo[] =
        oldApiInfo.getApiType() === ApiType.TYPE_ALIAS
          ? (oldApiInfo as TypeAliasInfo).getParamInfos()
          : (oldApiInfo as MethodInfo).getParams();
      const newMethodParams: ParamInfo[] =
        newApiInfo.getApiType() === ApiType.TYPE_ALIAS
          ? (newApiInfo as TypeAliasInfo).getParamInfos()
          : (newApiInfo as MethodInfo).getParams();
      const diffMethodType: DiffMethodType & DiffTypeChangeType = ApiNodeDiffHelper.getDiffMethodTypes(isTypeAlias);

      ApiNodeDiffHelper.diffParamsPosition(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffNewOptionalParam(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffNewRequiredParam(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffReducedParam(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffParamTypeChange(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffParamChange(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      ApiNodeDiffHelper.diffMethodParamChange(oldMethodParams, newMethodParams, diffTypeInfos, diffMethodType);
      return diffTypeInfos;
    }
    /**
     * 方法参数名变化,且不属于新增、减少的情况，归纳为方法参数变化,
     *
     * @param {ParamInfo[]} oldMethodParams 函数旧参数节点信息
     * @param {ParamInfo[]} newMethodParams 函数新参数节点信息
     * @param diffTypeInfos 处理好的结果信息
     */
    static diffMethodParamChange(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      // 1.新旧版本参数一个不存在即不符合，直接返回
      if (!oldParamLen || !newParamLen) {
        return;
      }
      // 2. 判断新旧版本参数名称相同的参数的个数和新旧版本的参数是否相同,相同即为新增或者减少参数
      // 2.1 循环得到所有的参数名称
      const oldParamNames: string[] = [];
      const newParamNames: string[] = [];
      for (let i: number = 0; i < Math.max(oldParamLen, newParamLen); i++) {
        const newCur: ParamInfo = newMethodParams[i];
        const oldCur: ParamInfo = oldMethodParams[i];
        newCur && newParamNames.push(newCur.getApiName());
        oldCur && oldParamNames.push(oldCur.getApiName());
      }
      // 2.2 找出旧版本不同的参数名称
      const oldDiffParams: ParamInfo[] = oldMethodParams.filter(
        (oldParam: ParamInfo) => !newParamNames.includes(oldParam.getApiName())
      );
      // 2.3 得到参数相同的个数
      const sameParamsLength: number = oldParamLen - oldDiffParams.length;
      // 2.4 判断新旧版本参数名称相同的参数的个数和新旧版本的参数是否相同,相同即为新增或者减少参数
      if (sameParamsLength === oldParamLen || sameParamsLength === newParamLen) {
        return;
      }

      let oldDiffInfos: ParamInfo[] = oldMethodParams;
      let newDiffInfos: ParamInfo[] = newMethodParams;
      // 3.将新旧版本参数信息中前面检查出来的信息去掉
      diffTypeInfos.forEach((diffInfo: DiffTypeInfo) => {
        // 循环已经得到的结果信息,找到新旧版本里不在已经得到的结果信息里面的参数信息
        oldDiffInfos = oldDiffInfos.filter(
          (oldDiffInfo: ParamInfo) => diffInfo.getOldMessage() !== oldDiffInfo.getDefinedText()
        );
        newDiffInfos = newDiffInfos.filter(
          (newDiffInfo: ParamInfo) => diffInfo.getNewMessage() !== newDiffInfo.getDefinedText()
        );
      });
      // 4.剩下的部分就是发生变化的部分,生成返回信息
      const oldNamesStr: string = stitchMethodParameters(oldDiffInfos);
      const newNamesStr: string = stitchMethodParameters(newDiffInfos);
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo.setDiffType(diffMethodType.PARAM_CHANGE).setOldMessage(oldNamesStr).setNewMessage(newNamesStr);
      diffTypeInfos.push(diffTypeInfo);
    }
    /**
     * 比较函数位置发生变化
     *
     * @param {ParamInfo[]} oldMethodParams 函数旧参数节点信息
     * @param {ParamInfo[]} newMethodParams 函数新参数节点信息
     * @param diffTypeInfos
     */
    static diffParamsPosition(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      // 1.如果旧版本的参数长度不大于1,或者两者长度不一致,直接返回
      if (oldParamLen <= 1 || oldParamLen !== newParamLen) {
        return;
      }
      // 2.判断两个版本的相同位置的参数名称是否一致,相同直接返回
      const isSamePosition: boolean = checkIsSameOfSamePosition(newMethodParams, oldMethodParams);
      if (isSamePosition) {
        return;
      }
      // 3.如果旧版本的参数不完全包含新版本的参数或者两个版本的参数是否完全一致,一个不符合直接返回
      const isContain: boolean = checkIsContain(oldMethodParams, newMethodParams);
      if (!isContain) {
        return;
      }
      // 4.上述情况都不符合,处理返回信息
      const oldNamesStr: string = stitchMethodParameters(oldMethodParams);
      const newNamesStr: string = stitchMethodParameters(newMethodParams);
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo.setDiffType(diffMethodType.POS_CHANGE).setOldMessage(oldNamesStr).setNewMessage(newNamesStr);
      diffTypeInfos.push(diffTypeInfo);
    }

    /**
     * 函数新增可选参数
     *
     * @param oldMethodParams
     * @param newMethodParams
     * @param diffTypeInfos
     */
    static diffNewOptionalParam(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      // 1.如果新版本参数为空或者旧版本参数长度大于或者等于新版本参数长度,直接返回
      if (newParamLen === 0 || oldParamLen >= newParamLen) {
        return;
      }
      // 2.新版本参数需要完全包含旧版本,如果不包含,直接返回
      const isContain: boolean = checkIsContain(newMethodParams, oldMethodParams);
      if (!isContain) {
        return;
      }
      // 3.是否存在新增的可选参数
      const oldParamNames: string[] = oldMethodParams.map((oldParam: ParamInfo) => oldParam.getApiName());
      const addParams: ParamInfo[] = newMethodParams.filter((newParam: ParamInfo) => {
        const curParamName: string = newParam.getApiName();
        return !oldParamNames.includes(curParamName) && !newParam.getIsRequired();
      });
      // 4.新版本新增的参数是否存在参数是可选类型,不存在直接返回
      if (!addParams.length) {
        return;
      }
      // 5.存在新增的参数是可选参数,处理返回信息
      const addParamNamesStr: string = stitchMethodParameters(addParams);
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo.setOldMessage('').setDiffType(diffMethodType.ADD_OPTIONAL_PARAM).setNewMessage(addParamNamesStr);
      diffTypeInfos.push(diffTypeInfo);
    }

    /**
     * 函数新增必选参数
     *
     * @param oldMethodParams
     * @param newMethodParams
     * @param diffTypeInfos
     */
    static diffNewRequiredParam(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      // 1.如果新版本参数为空或者旧版本参数长度大于或者等于新版本参数长度,直接返回
      if (newParamLen === 0 || oldParamLen >= newParamLen) {
        return;
      }
      // 2.新版本参数需要完全包含旧版本,如果不包含,直接返回
      const isContain: boolean = checkIsContain(newMethodParams, oldMethodParams);
      if (!isContain) {
        return;
      }
      // 3.是否存在新增的必选参数
      const oldParamNames: string[] = oldMethodParams.map((oldParam: ParamInfo) => oldParam.getApiName());
      const addParams: ParamInfo[] = newMethodParams.filter((newParam: ParamInfo) => {
        const curParamName: string = newParam.getApiName();
        return !oldParamNames.includes(curParamName) && newParam.getIsRequired();
      });
      // 4.新版本新增的参数是否存在参数是必选类型,不存在直接返回
      if (!addParams.length) {
        return;
      }
      // 5.存在新增的参数是可选参数,处理返回信息
      const addParamNamesStr: string = stitchMethodParameters(addParams);
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo.setDiffType(diffMethodType.ADD_REQUIRED_PARAM).setOldMessage('').setNewMessage(addParamNamesStr);
      diffTypeInfos.push(diffTypeInfo);
    }

    /**
     * 函数删除参数
     *
     * @param oldMethodParams
     * @param newMethodParams
     * @param diffTypeInfos
     */
    static diffReducedParam(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      // 1.旧版本参数为空或者新版本参数长度大于或者等于旧版本参数长度,直接返回
      if (oldParamLen === 0 || newParamLen >= oldParamLen) {
        return;
      }
      // 2.如果旧版本的参数不包含新版本的参数,直接返回
      const isContain: boolean = checkIsContain(oldMethodParams, newMethodParams);
      if (newParamLen > 0 && !isContain) {
        return;
      }
      // 3.参数减少,处理返回信息
      const newParamNames: string[] = newMethodParams.map((newParam: ParamInfo) => newParam.getApiName());
      const reduceParams: ParamInfo[] = oldMethodParams.filter(
        (oldParam: ParamInfo) => !newParamNames.includes(oldParam.getApiName())
      );
      const reduceNamesStr: string = stitchMethodParameters(reduceParams);
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      diffTypeInfo.setDiffType(diffMethodType.REDUCE_PARAM).setOldMessage(reduceNamesStr).setNewMessage('');
      diffTypeInfos.push(diffTypeInfo);
    }
    /**
     * 比较参数必选/可选的变更,(可选->必选，必选->可选)
     *
     * @param oldMethodParams
     * @param newMethodParams
     * @param diffTypeInfos
     */
    static diffParamChange(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType
    ): void {
      // 1.新旧版本的参数长度应大于0
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      if (!oldParamLen || !newParamLen) {
        return;
      }
      // 2.找到参数名称一致和参数类型一致的参数进行比较,不存在直接返回
      const sameParamInfos: ParamInfo[] = oldMethodParams.filter((oldParam: ParamInfo) => {
        const oldParamName: string = oldParam.getApiName();
        return newMethodParams.find((newParam: ParamInfo) => newParam.getApiName() === oldParamName);
      });
      if (!sameParamInfos.length) {
        return;
      }
      // 3.比较参数名和类型一致是否发生了可选/必选的变化,参数类型不需要计较
      sameParamInfos.forEach((sameInfo: ParamInfo, idx: number) => {
        const curOldParamName: string = sameInfo.getApiName();
        const curNewParam: ParamInfo = newMethodParams.find(
          (newParam: ParamInfo) => newParam.getApiName() === curOldParamName
        )!;
        if (curNewParam.getIsRequired() !== sameInfo.getIsRequired()) {
          // 参数发生了可选/必选的变化,处理返回信息
          const oldMessage = sameInfo.getDefinedText();
          const newMessage = curNewParam.getDefinedText();
          const changeType: number = sameInfo.getIsRequired()
            ? diffMethodType.PARAM_TO_UNREQUIRED
            : diffMethodType.PARAM_TO_REQUIRED;
          const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
          diffTypeInfo.setDiffType(changeType).setOldMessage(oldMessage).setNewMessage(newMessage);
          diffTypeInfos.push(diffTypeInfo);
        }
      });
    }

    /**
     * 比较参数类型的变更，(参数类型范围扩大/参数类型范围缩小/参数类型变更)
     *
     * @param oldMethodParams
     * @param newMethodParams
     * @param diffTypeInfos
     */
    static diffParamTypeChange(
      oldMethodParams: ParamInfo[],
      newMethodParams: ParamInfo[],
      diffTypeInfos: DiffTypeInfo[],
      diffMethodType: DiffMethodType & DiffTypeChangeType
    ): void {
      //1.判断新旧版本参数长度大于0
      const oldParamLen: number = oldMethodParams.length;
      const newParamLen: number = newMethodParams.length;
      if (!oldParamLen || !newParamLen) {
        return;
      }
      const newParamName: string[] = newMethodParams.map((newParam: ParamInfo) => newParam.getApiName());
      // 2.需要新旧版本存在参数名称一致的,不存在直接返回
      const sameParamInfo: ParamInfo[] = oldMethodParams.filter((oldParam: ParamInfo) =>
        newParamName.includes(oldParam.getApiName())
      );
      if (!sameParamInfo.length) {
        return;
      }
      // 3.寻找参数名称相同的情况下的参数类型变化的
      sameParamInfo.forEach((curSame: ParamInfo, idx: number) => {
        const oldParamTypes: string[] = curSame.getType();
        const curNewParam: ParamInfo = newMethodParams.find(
          (newParam: ParamInfo) => newParam.getApiName() === curSame.getApiName()
        )!;
        const newParamTypes: string[] = curNewParam.getType();
        // 处理参数类型不一样的,生成返回信息
        if (
          oldParamTypes.toString().replace(/\r|\n|\s+|'|"|,|;/g, '') ===
          newParamTypes.toString().replace(/\r|\n|\s+|'|"|,|;/g, '')
        ) {
          return;
        }

        // 根据参数的差异来获取对应的statusCode
        let diffType: ApiDiffType = ApiNodeDiffHelper.getParamDiffType(curSame, curNewParam, diffMethodType);
        const oldMessage: string = curSame.getDefinedText();
        const newMessage: string = curNewParam.getDefinedText();
        const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
        diffTypeInfo.setDiffType(diffType).setOldMessage(oldMessage).setNewMessage(newMessage);
        diffTypeInfos.push(diffTypeInfo);
      });
    }

    /**
     * 匿名对象整改后，获得参数类型变更类型
     *
     * @param oldParamInfo
     * @param newParamInfo
     * @returns
     */
    static getParamDiffType(
      oldParamInfo: ParamInfo,
      newParamInfo: ParamInfo,
      diffMethodType: DiffMethodType & DiffTypeChangeType
    ): ApiDiffType {
      const oldParamTypes: string[] = oldParamInfo.getType();
      const newParamTypes: string[] = newParamInfo.getType();
      // 根据参数的差异来获取对应的statusCode
      let diffType: ApiDiffType = diffChangeType(oldParamTypes, newParamTypes, diffMethodType);
      //匿名对象整改
      if (
        oldParamInfo.getParamType() === ts.SyntaxKind.TypeLiteral &&
        newParamInfo.getParamType() === ts.SyntaxKind.TypeReference
      ) {
        const oldApiInfos: ApiInfo[] = oldParamInfo.getObjLocations();
        const newApiInfo: ApiInfo = newParamInfo.getTypeLocations()[0];
        diffType = !ApiNodeDiffHelper.judgeIsCompatible(oldApiInfos, newApiInfo)
          ? ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE
          : ApiDiffType.PARAM_TYPE_CHANGE_COMPATIABLE;
      } else if (
        oldParamInfo.getParamType() === ts.SyntaxKind.FunctionType &&
        newParamInfo.getParamType() === ts.SyntaxKind.TypeReference
      ) {
        diffType = !ApiNodeDiffHelper.diffFunctionTypeNode(oldParamInfo, newParamInfo)
          ? ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE
          : ApiDiffType.PARAM_TYPE_CHANGE_COMPATIABLE;
      }
      return diffType;
    }

    /**
     * 匿名函数整改后进行对比
     *
     * @param oldParamInfo
     * @param newParamInfo
     * @returns
     */
    static diffFunctionTypeNode(oldParamInfo: ParamInfo, newParamInfo: ParamInfo): boolean {
      const oldApiInfo: MethodInfo | undefined = oldParamInfo.getMethodApiInfo();
      const newApiInfo: TypeAliasInfo = (newParamInfo.getTypeLocations()[0]) as TypeAliasInfo;
      const diffTypes: DiffTypeInfo[] = [];
      if (!oldApiInfo || !newApiInfo) {
        return false;
      }

      if (newApiInfo.getApiType() !== ApiType.TYPE_ALIAS) {
        return false;
      }
      diffTypes.push(...ApiNodeDiffHelper.diffMethodParams(oldApiInfo, newApiInfo));
      const diffTypeInfo: DiffTypeInfo | undefined = ApiNodeDiffHelper.diffMethodReturnType(oldApiInfo, newApiInfo);
      if (diffTypeInfo) {
        diffTypes.push(diffTypeInfo);
      }
      let isCompatible: boolean = true;
      diffTypes.forEach((diffType: DiffTypeInfo) => {
        if (incompatibleApiDiffTypes.has(diffType.getDiffType())) {
          isCompatible = false;
        }
      });
      return isCompatible;
    }

    /**
     * 匿名对象整改后进行比较
     *
     * @param oldApiInfos
     * @param newApiInfos
     * @returns
     */
    static diffTypeLiteral(oldApiInfos: ApiInfo[], newApiInfos: BasicApiInfo[]): BasicDiffInfo[] {
      const oldApiInfoMap: Map<string, ApiInfo> = ApiNodeDiffHelper.setmethodInfoMap(oldApiInfos);
      const newApiInfoMap: Map<string, ApiInfo> = ApiNodeDiffHelper.setmethodInfoMap(newApiInfos);
      const diffInfos: BasicDiffInfo[] = [];
      oldApiInfoMap.forEach((oldApiInfo: ApiInfo, key: string) => {
        const newApiInfo: ApiInfo | undefined = newApiInfoMap.get(key);
        if (!newApiInfo) {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              oldApiInfo,
              undefined,
              new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, oldApiInfo.getDefinedText())
            )
          );
          return;
        }
        JsDocDiffHelper.diffJsDocInfo(oldApiInfo, newApiInfo, diffInfos);
        ApiDecoratorsDiffHelper.diffDecorator(oldApiInfo, newApiInfo, diffInfos);
        ApiNodeDiffHelper.diffNodeInfo(oldApiInfo, newApiInfo, diffInfos);
        newApiInfoMap.delete(key);
      });
      newApiInfoMap.forEach((newApiInfo: ApiInfo) => {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newApiInfo,
            new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, newApiInfo.getDefinedText())
          )
        );
      });
      return diffInfos;     
    }

    static judgeIsCompatible(oldApiInfos: ApiInfo[], newApiInfo: ApiInfo): boolean {
      if (!newApiInfo) {
        return false;
      }

      let newApiInfos: BasicApiInfo[] | PropertyInfo[] = [];
      if (newApiInfo.getApiType() === ApiType.TYPE_ALIAS) {
        newApiInfos = (newApiInfo as TypeAliasInfo).getTypeLiteralApiInfos();
      } else if (newApiInfo.getApiType() === ApiType.INTERFACE) {
        newApiInfos = (newApiInfo as InterfaceInfo).getChildApis();
      } else if (newApiInfo.getApiType() === ApiType.CLASS) {
        newApiInfos = (newApiInfo as ClassInfo).getChildApis();
      }
  
      const diffInfos: BasicDiffInfo[] = ApiNodeDiffHelper.diffTypeLiteral(oldApiInfos, newApiInfos);
      let isCompatible: boolean = true;
      diffInfos.forEach((diffInfo: BasicDiffInfo) => {
        if (!diffInfo.getIsCompatible()) {
          isCompatible = false;
        }
      });
      return isCompatible;
    }

    static setmethodInfoMap(apiInfos:BasicApiInfo[]): Map<string, ApiInfo> {
      const methodInfoMap: Map<string, ApiInfo> = new Map();
      apiInfos.forEach((apiInfo: BasicApiInfo) => {
        methodInfoMap.set(apiInfo.getApiName(), apiInfo as ApiInfo);
      });
      return methodInfoMap;
    }

    /**
     * 处理方法节点的参数名称
     *
     * @param {ParamInfo} oldApiInfo 旧版本的参数节点信息
     * @param {ParamInfo} newApiInfo 新版本的参数节点信息
     * @return {*}  {(ApiDiffType | undefined)} 方法节点的参数名称的变化情况
     */
    static diffMethodParamName(oldApiInfo: ParamInfo, newApiInfo: ParamInfo): ApiDiffType | undefined {
      const oldParamName: string = oldApiInfo.getApiName();
      const newParamName: string = newApiInfo.getApiName();
      if (oldParamName === newParamName) {
        return undefined;
      }
      return ApiDiffType.FUNCTION_PARAM_NAME_CHANGE;
    }

    /**
     * 处理方法节点的参数类型
     *
     * @param {ParamInfo} oldApiInfo 旧版本的参数节点信息
     * @param {ParamInfo} newApiInfo 新版本的参数节点信息
     * @return {*}  {(ApiDiffType | undefined)} 方法节点的参数类型的变化情况
     */
    static diffMethodParamType(oldApiInfo: ParamInfo, newApiInfo: ParamInfo): ApiDiffType | undefined {
      const oldParamType: string[] = oldApiInfo.getType();
      const newParamType: string[] = newApiInfo.getType();
      const oldParamTypeStr: string = oldParamType
        .toString()
        .replace(/\r|\n|\s+|'|"/g, '')
        .replace(/\|/g, '\\|');
      const newParamTypeStr: string = newParamType
        .toString()
        .replace(/\r|\n|\s+|'|"/g, '')
        .replace(/\|/g, `\\|`);
      if (oldParamTypeStr === newParamTypeStr) {
        return undefined;
      }
      if (StringUtils.hasSubstring(newParamTypeStr, oldParamTypeStr)) {
        return ApiDiffType.FUNCTION_PARAM_TYPE_ADD;
      }
      if (StringUtils.hasSubstring(oldParamTypeStr, newParamTypeStr)) {
        return ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE;
      }
      return ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE;
    }

    /**
     * 处理方法节点的参数必选
     *
     * @param {ParamInfo} oldApiInfo 旧版本的参数节点信息
     * @param {ParamInfo} newApiInfo 新版本的参数节点信息
     * @return {*}  {(ApiDiffType | undefined)} 方法节点的必选参数的变化情况
     */
    static diffMethodParamRequired(oldApiInfo: ParamInfo, newApiInfo: ParamInfo): ApiDiffType | undefined {
      const oldParamISRequired: boolean = oldApiInfo.getIsRequired();
      const newParamISRequired: boolean = newApiInfo.getIsRequired();
      if (oldParamISRequired === newParamISRequired) {
        return undefined;
      }
      return newParamISRequired ? ApiDiffType.FUNCTION_PARAM_TO_REQUIRED : ApiDiffType.FUNCTION_PARAM_TO_UNREQUIRED;
    }

    /**
     * 处理class节点，获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的class节点信息
     * @param {ApiInfo} newApiInfo 新版本的class节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     * @return {*}  {void}
     */
    static diffClass(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaClassName: string = oldApiInfo.getApiName();
      const newClassName: string = newApiInfo.getApiName();
      if (olaClassName === newClassName) {
        return;
      }
      diffTypeInfo
        .setStatusCode(ApiStatusCode.CLASS_CHANGES)
        .setDiffType(ApiDiffType.API_NAME_CHANGE)
        .setOldMessage(olaClassName)
        .setNewMessage(newClassName);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }

    /**
     * 处理interface节点，获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的interface节点信息
     * @param {ApiInfo} newApiInfo 新版本的interface节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     * @return {*}  {void}
     */
    static diffInterface(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaClassName: string = oldApiInfo.getApiName();
      const newClassName: string = newApiInfo.getApiName();
      if (olaClassName === newClassName) {
        return;
      }
      diffTypeInfo
        .setStatusCode(ApiStatusCode.CLASS_CHANGES)
        .setDiffType(ApiDiffType.API_NAME_CHANGE)
        .setOldMessage(olaClassName)
        .setNewMessage(newClassName);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }

    /**
     * 处理namespace节点,获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的namespace节点信息
     * @param {ApiInfo} newApiInfo 新版本的namespace节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     * @return {*}  {void}
     */
    static diffNamespace(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaClassName: string = oldApiInfo.getApiName();
      const newClassName: string = newApiInfo.getApiName();
      if (olaClassName === newClassName) {
        return;
      }
      diffTypeInfo
        .setStatusCode(ApiStatusCode.CLASS_CHANGES)
        .setDiffType(ApiDiffType.API_NAME_CHANGE)
        .setOldMessage(olaClassName)
        .setNewMessage(newClassName);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
      diffInfos.push(diffInfo);
    }

    /**
     * 处理属性节点,获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的属性节点信息
     * @param {ApiInfo} newApiInfo 新版本的属性节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     * @return {*}  {void}
     */
    static diffProperty(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      propertyDiffProcessors.forEach((propertyDiffProcessor: ApiSceneDiffProcessor) => {
        const diffType: DiffTypeInfo | undefined = propertyDiffProcessor(oldApiInfo, newApiInfo);
        if (!diffType) {
          return;
        }
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
          oldApiInfo,
          newApiInfo,
          diffType.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
        );
        diffInfos.push(diffInfo);
      });
    }

    /**
     * 处理属性节点的类型
     *
     * @param {ApiInfo} oldApiInfo 旧版本的属性节点信息
     * @param {ApiInfo} newApiInfo 新版本的属性节点信息
     * @return {*}  {(ApiDiffType | undefined)} 属性节点的类型的变化情况
     */
    static diffPropertyType(oldApiInfo: PropertyInfo, newApiInfo: PropertyInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldPropertyType: string[] = oldApiInfo.getType();
      const newPropertyType: string[] = newApiInfo.getType();
      const oldPropertyIsReadOnly: boolean = oldApiInfo.getIsReadOnly();
      const newPropertyIsReadOnly: boolean = newApiInfo.getIsReadOnly();
      const oldPropertyTypeStr = oldPropertyType.toString().replace(/\r|\n|\s+|\>|\}/g, '');
      const newPropertyTypeStr = newPropertyType.toString().replace(/\r|\n|\s+|\>|\}/g, '');
      const isUnionType: boolean = newApiInfo.getTypeKind() === ts.SyntaxKind.UnionType ? true : false;
      if (oldPropertyTypeStr === newPropertyTypeStr) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(oldPropertyType.toString()).setNewMessage(newPropertyType.toString());
      if (oldPropertyTypeStr.replace(/\,|\;/g, '') === newPropertyTypeStr.replace(/\,|\;/g, '')) {
        return diffTypeInfo.setDiffType(ApiDiffType.PROPERTY_TYPE_SIGN_CHANGE);
      }

      if (isUnionType && checkParentContainChild(oldPropertyType, newPropertyType)) {
        return diffTypeInfo.setDiffType(
          oldPropertyIsReadOnly ? ApiDiffType.PROPERTY_READONLY_REDUCE : ApiDiffType.PROPERTY_WRITABLE_REDUCE
        );
      }

      if (isUnionType && checkParentContainChild(newPropertyType, oldPropertyType)) {
        return diffTypeInfo.setDiffType(
          newPropertyIsReadOnly ? ApiDiffType.PROPERTY_READONLY_ADD : ApiDiffType.PROPERTY_WRITABLE_ADD
        );
      }
      if (!isUnionType && StringUtils.hasSubstring(newPropertyTypeStr, oldPropertyTypeStr)) {
        return diffTypeInfo.setDiffType(
          newPropertyIsReadOnly ? ApiDiffType.PROPERTY_READONLY_ADD : ApiDiffType.PROPERTY_WRITABLE_ADD
        );
      }
      if (!isUnionType && StringUtils.hasSubstring(oldPropertyTypeStr, newPropertyTypeStr)) {
        return diffTypeInfo.setDiffType(
          oldPropertyIsReadOnly ? ApiDiffType.PROPERTY_READONLY_REDUCE : ApiDiffType.PROPERTY_WRITABLE_REDUCE
        );
      }
      return diffTypeInfo.setDiffType(ApiDiffType.PROPERTY_TYPE_CHANGE);
    }

    /**
     * 处理属性节点的必选属性
     *
     * @param {ApiInfo} oldApiInfo 旧版本的属性节点信息
     * @param {ApiInfo} newApiInfo 新版本的属性节点信息
     * @return {*}  {(ApiDiffType | undefined)} 属性节点的必选属性的变化情况
     */
    static diffPropertyRequired(oldApiInfo: PropertyInfo, newApiInfo: PropertyInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldPropertyName: string = oldApiInfo.getApiName();
      const newPropertyName: string = newApiInfo.getApiName();
      const oldPropertyIsReadOnly: boolean = oldApiInfo.getIsReadOnly();
      //？？？只读属性是否会变为可写属性
      const propertyRequiredDiffMap: Map<string, ApiDiffType> = new Map([
        //old是否必选_new是否必选_old是否只读
        ['_true_false_true', ApiDiffType.PROPERTY_READONLY_TO_UNREQUIRED],
        ['_false_true_true', ApiDiffType.PROPERTY_READONLY_TO_REQUIRED],
        ['_true_false_false', ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED],
        ['_false_true_false', ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED],
      ]);
      const oldPropertyISRequired: boolean = oldApiInfo.getIsRequired();
      const newPropertyISRequired: boolean = newApiInfo.getIsRequired();

      if (oldPropertyName === newPropertyName && oldPropertyISRequired === newPropertyISRequired) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(oldApiInfo.getDefinedText()).setNewMessage(newApiInfo.getDefinedText());
      const paramRequiredStr: string = `_${!!oldPropertyISRequired}_${!!newPropertyISRequired}_${!!oldPropertyIsReadOnly}`;
      const paramRequiredType: ApiDiffType = propertyRequiredDiffMap.get(paramRequiredStr) as ApiDiffType;
      return diffTypeInfo.setDiffType(paramRequiredType);
    }

    /**
     * 处理常量节点,获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的常量节点信息
     * @param {ApiInfo} newApiInfo 新版本的常量节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     */
    static diffConstant(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      constantDiffProcessors.forEach((constantDiffProcessor: ApiSceneDiffProcessor) => {
        const diffTypeInfo: DiffTypeInfo | undefined = constantDiffProcessor(oldApiInfo, newApiInfo);
        if (!diffTypeInfo) {
          return;
        }
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
          oldApiInfo,
          newApiInfo,
          diffTypeInfo.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
        );
        diffInfos.push(diffInfo);
      });
    }

    /**
     * 处理常量节点的值
     *
     * @param {ConstantInfo} oldApiInfo 旧版本的常量节点信息
     * @param {ConstantInfo} newApiInfo 新版本的常量节点信息
     * @return {*}  {(ApiDiffType | undefined)} 常量节点的值的变化情况
     */
    static diffConstantValue(oldApiInfo: ApiInfo, newApiInfo: ApiInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldConstantValue: string =
        oldApiInfo.getApiType() === ApiType.CONSTANT
          ? (oldApiInfo as ConstantInfo).getValue()
          : (oldApiInfo as PropertyInfo).getType().join();
      const newConstantValue: string =
        newApiInfo.getApiType() === ApiType.CONSTANT
          ? (newApiInfo as ConstantInfo).getValue()
          : (newApiInfo as PropertyInfo).getType().join();
      if (oldConstantValue === newConstantValue) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(oldConstantValue).setNewMessage(newConstantValue);
      return diffTypeInfo.setDiffType(ApiDiffType.CONSTANT_VALUE_CHANGE);
    }

    /**
     * 处理自定义类型节点,过去对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的自定义类型节点信息
     * @param {ApiInfo} newApiInfo 新版本的自定义类型节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     */
    static diffTypeAlias(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      typeAliasDiffProcessors.forEach((typeAliasDiffProcessor: ApiSceneDiffProcessor) => {
        const diffTypeInfo: DiffTypeInfo | undefined = typeAliasDiffProcessor(oldApiInfo, newApiInfo);
        if (!diffTypeInfo) {
          return;
        }
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(oldApiInfo, newApiInfo, diffTypeInfo);
        diffInfos.push(diffInfo);
      });
      const oldTypeAliasInfo: TypeAliasInfo = oldApiInfo as TypeAliasInfo;
      const newTypeAliasInfo: TypeAliasInfo = newApiInfo as TypeAliasInfo;
      // 自定义类型为方法
      if (oldTypeAliasInfo.getTypeIsFunction()) {
        const diffTypeInfos: DiffTypeInfo[] = ApiNodeDiffHelper.diffMethodParams(
          oldApiInfo as TypeAliasInfo,
          newApiInfo as TypeAliasInfo
        );
        const diffTypeReturnInfo: DiffTypeInfo | undefined = ApiNodeDiffHelper.diffTypeAliasReturnType(
          oldApiInfo as TypeAliasInfo,
          newApiInfo as TypeAliasInfo
        );
        diffTypeReturnInfo && diffTypeInfos.push(diffTypeReturnInfo);
        diffTypeInfos.forEach((info: DiffTypeInfo) => {
          const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
            oldApiInfo,
            newApiInfo,
            info.setStatusCode(ApiStatusCode.TYPE_CHNAGES)
          );
          diffInfos.push(diffInfo);
        });
      }

      if (oldTypeAliasInfo.getTypeIsObject() && newTypeAliasInfo.getTypeIsObject()) {
        const oldChildApiInfos: PropertyInfo[] = oldTypeAliasInfo.getTypeLiteralApiInfos();
        const newChildApiInfos: PropertyInfo[] = newTypeAliasInfo.getTypeLiteralApiInfos();
        const diffTypeInfos: BasicDiffInfo[] = ApiNodeDiffHelper.diffTypeLiteral(oldChildApiInfos, newChildApiInfos);
        diffInfos.push(...diffTypeInfos);
      }
    }

    /**
     * 处理自定义类型节点的类型(类型值范围扩大/类型值范围缩小/类型值改变)
     *
     * @param {TypeAliasInfo} oldApiInfo 旧版本的自定义类型节点信息
     * @param {TypeAliasInfo} newApiInfo 新版本的自定义类型节点信息
     * @return {*}  {(ApiDiffType | undefined)} 自定义类型节点的类型的变化情况
     */
    static diffTypeAliasType(oldApiInfo: TypeAliasInfo, newApiInfo: TypeAliasInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaTypeAliasType: string[] = oldApiInfo.getType();
      const newTypeAliasType: string[] = newApiInfo.getType();
      const olaTypeAliasTypeStr: string = olaTypeAliasType.toString();
      const newTypeAliasTypeStr: string = newTypeAliasType.toString();
      // 1.两者定义相同,没有变化
      if (olaTypeAliasTypeStr.replace(/\r|\n|\s+|'|"/g, '') === newTypeAliasTypeStr.replace(/\r|\n|\s+|'|"/g, '')) {
        return undefined;
      }
      if (oldApiInfo.getTypeIsObject() && newApiInfo.getTypeIsObject()) {
        return undefined;
      }
      // 自定义函数类型
      if (oldApiInfo.getTypeIsFunction()) {
        return undefined;
      }
      // 2.两者定义不同
      const diffMethodType: DiffTypeChangeType = {
        PARAM_TYPE_CHANGE: ApiDiffType.TYPE_ALIAS_CHANGE,
        PARAM_TYPE_ADD: ApiDiffType.TYPE_ALIAS_ADD,
        PARAM_TYPE_REDUCE: ApiDiffType.TYPE_ALIAS_REDUCE,
      };
      const diffType: number = diffChangeType(olaTypeAliasType, newTypeAliasType, diffMethodType);
      diffTypeInfo
        .setOldMessage(olaTypeAliasType.join(' | '))
        .setNewMessage(newTypeAliasType.join(' | '))
        .setStatusCode(ApiStatusCode.TYPE_CHNAGES)
        .setDiffType(diffType);
      return diffTypeInfo;
    }
    /**
     * 处理枚举值节点，获取对应diff信息
     *
     * @param {ApiInfo} oldApiInfo 旧版本的枚举值节点信息
     * @param {ApiInfo} newApiInfo 新版本的枚举值节点信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     */
    static diffEnum(oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const oldEnumName: string = oldApiInfo.getApiName();
      const newEnumName: string = newApiInfo.getApiName();
      if (oldEnumName === newEnumName) {
        return;
      }
      diffTypeInfo.setDiffType(ApiDiffType.API_NAME_CHANGE).setOldMessage(oldEnumName).setNewMessage(newEnumName);
      const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
        oldApiInfo,
        newApiInfo,
        diffTypeInfo.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
      );
      diffInfos.push(diffInfo);
    }

    /**
     * 处理枚举值节点的每个元素，获取对应diff信息
     *
     * @param {EnumValueInfo} oldApiInfo 旧版本的枚举值节点元素信息
     * @param {EnumValueInfo} newApiInfo 新版本的枚举值节点元素信息
     * @param {BasicDiffInfo[]} diffInfos 各个节点diff信息集合
     */
    static diffEnumMember(oldApiInfo: EnumValueInfo, newApiInfo: EnumValueInfo, diffInfos: BasicDiffInfo[]): void {
      enumDiffProcessors.forEach((enumDiffProcessor: ApiSceneDiffProcessor) => {
        const diffTypeInfo: DiffTypeInfo | undefined = enumDiffProcessor(oldApiInfo, newApiInfo);
        if (!diffTypeInfo) {
          return;
        }
        const diffInfo: BasicDiffInfo = DiffProcessorHelper.wrapDiffInfo(
          oldApiInfo,
          newApiInfo,
          diffTypeInfo.setStatusCode(ApiStatusCode.FUNCTION_CHANGES)
        );
        diffInfos.push(diffInfo);
      });
    }

    /**
     * 处理枚举值节点的每个元素的值
     *
     * @param {EnumValueInfo} oldApiInfo 旧版本的枚举值节点元素信息
     * @param {EnumValueInfo} newApiInfo 新版本的枚举值节点元素信息
     * @return {*}  {(ApiDiffType | undefined)} 枚举值节点的每个元素的值的变化情况
     */
    static diffEnumMemberValue(oldApiInfo: EnumValueInfo, newApiInfo: EnumValueInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaEnumMemberValue: string = oldApiInfo.getValue();
      const newEnumMemberValue: string = newApiInfo.getValue();
      if (olaEnumMemberValue === newEnumMemberValue) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(olaEnumMemberValue).setNewMessage(newEnumMemberValue);
      return diffTypeInfo.setDiffType(ApiDiffType.ENUM_MEMBER_VALUE_CHANGE);
    }

    /**
     * 处理通用类型节点的apiName
     *
     * @param {ApiInfo} oldApiInfo 旧版本的节点信息
     * @param {ApiInfo} newApiInfo 新版本的节点信息
     * @return {*}  {(ApiDiffType | undefined)} apiName的变化情况
     */
    static diffApiName(oldApiInfo: ApiInfo, newApiInfo: ApiInfo): DiffTypeInfo | undefined {
      const diffTypeInfo: DiffTypeInfo = new DiffTypeInfo();
      const olaConstantName: string = oldApiInfo.getApiName();
      const newConstantName: string = newApiInfo.getApiName();
      if (olaConstantName === newConstantName) {
        return undefined;
      }
      diffTypeInfo.setOldMessage(olaConstantName).setNewMessage(newConstantName);
      return diffTypeInfo.setDiffType(ApiDiffType.API_NAME_CHANGE);
    }

    /**
     * 新旧版本参数个数没变化时，判断参数类型范围扩大/缩小/更改
     *
     * @param oldTypes 旧版本参数类型
     * @param newTypes 新版本参数类型
     * @param diffTypes
     * @returns
     */
    static diffSingleParamType(oldTypes: string[], newTypes: string[], diffTypes: DiffTypeChangeType): number {
      const oldParamTypeStr: string = oldTypes
        .toString()
        .replace(/\r|\n|\s+|'|"|>/g, '')
        .replace(/\|/g, '\\|');
      const newParamTypeStr: string = newTypes
        .toString()
        .replace(/\r|\n|\s+|'|"|>/g, '')
        .replace(/\|/g, '\\|');
      if (StringUtils.hasSubstring(newParamTypeStr, oldParamTypeStr)) {
        return diffTypes.PARAM_TYPE_ADD;
      }
      if (StringUtils.hasSubstring(oldParamTypeStr, newParamTypeStr)) {
        return diffTypes.PARAM_TYPE_REDUCE;
      }
      return diffTypes.PARAM_TYPE_CHANGE;
    }
  }

  /**
   * 检查父集是否完全包含子集
   *
   * @param {ParamInfo[]} parentInfos 父集节点信息
   * @param {ParamInfo[]} childInfos 子集节点信息
   * @returns {*} {boolean} 完全包含为true, 否则为false
   */
  function checkIsContain(parentInfos: ParamInfo[], childInfos: ParamInfo[]): boolean {
    return childInfos.every((child: ParamInfo) => {
      const curChildName = child.getApiName();
      // 父节点里面是否存在子节点的参数名称
      const curParentNode = parentInfos.find((item: ParamInfo) => item.getApiName() === curChildName);
      // 相同参数的类型是否一样
      return curParentNode && curParentNode.getApiType() === child.getApiType();
    });
  }

  function checkParentContainChild(parentStrArr: string[], childStrArr: string[]): boolean {
    return childStrArr.every((child: string) => parentStrArr.includes(child));
  }

  interface DiffTypeChangeType {
    PARAM_TYPE_CHANGE: ApiDiffType;
    PARAM_TYPE_ADD: ApiDiffType;
    PARAM_TYPE_REDUCE: ApiDiffType;
  }
  // statusCode对应的几种变化类型
  interface DiffMethodType {
    POS_CHANGE: ApiDiffType;
    ADD_OPTIONAL_PARAM: ApiDiffType;
    ADD_REQUIRED_PARAM: ApiDiffType;
    REDUCE_PARAM: ApiDiffType;
    PARAM_TO_UNREQUIRED: ApiDiffType;
    PARAM_TO_REQUIRED: ApiDiffType;
    PARAM_CHANGE: ApiDiffType;
  }
  /**
   * 根据参数的差异来获取对应的statusCode
   *
   * @param {string[]} oldTypes 旧参数数组
   * @param {string[]} newTypes 新参数数组
   * @returns {*} {ApiDiffType} statusCode
   */
  function diffChangeType(oldTypes: string[], newTypes: string[], diffTypes: DiffTypeChangeType): ApiDiffType {
    const oldLen: number = oldTypes.length;
    const newLen: number = newTypes.length;
    switch (oldLen - newLen) {
      case 0:
        return ApiNodeDiffHelper.diffSingleParamType(oldTypes, newTypes, diffTypes);
      case -newLen:
        return diffTypes.PARAM_TYPE_ADD;
      case oldLen:
        return diffTypes.PARAM_TYPE_REDUCE;
      default:
        if (oldLen > newLen) {
          return newTypes.every((type: string) => oldTypes.includes(type))
            ? diffTypes.PARAM_TYPE_REDUCE
            : diffTypes.PARAM_TYPE_CHANGE;
        } else {
          return oldTypes.every((type: string) => newTypes.includes(type))
            ? diffTypes.PARAM_TYPE_ADD
            : diffTypes.PARAM_TYPE_CHANGE;
        }
    }
  }

  /**
   * 检查两个版本的相同位置的参数的参数名是否相同
   *
   * @param {ParamInfo[]} parentInfos 父节点信息
   * @param {ParamInfo[]} childInfos 子集节点信息
   * @returns {*} {boolean} 完全相同为true, 否则为false
   */
  function checkIsSameOfSamePosition(parentInfos: ParamInfo[], childInfos: ParamInfo[]): boolean {
    return parentInfos.every((curParentItem: ParamInfo, idx: number) => {
      const curChildItem: ParamInfo = childInfos[idx];
      return curParentItem.getApiName() === curChildItem.getApiName();
    });
  }

  /**
   * 根据当前节点信息来拼接返回的新旧信息
   *
   * @param {ParamInfo} methodParams 函数参数的节点信息
   * @returns {*} {string} 字符串拼接后的节点信息
   */
  function stitchMethodParameters(methodParams: ParamInfo[]): string {
    if (methodParams.length <= 1) {
      return methodParams[0].getDefinedText();
    }
    return methodParams.reduce((preStr: string, curItem: ParamInfo, idx: number) => {
      let curStr: string = curItem.getDefinedText();
      if (idx !== methodParams.length - 1) {
        curStr += ', ';
      }
      return (preStr += curStr);
    }, '');
  }

  /**
   * 根据节点信息和type生成需要的diff对象
   *
   * @param {(BasicApiInfo | undefined)} [oldApiInfo=undefined] 旧版本节点信息，默认undefined
   * @param {(BasicApiInfo | undefined)} [newApiInfo=undefined] 新版本节点信息，默认undefined
   * @param {ApiDiffType} diffType diff的节点类型
   * @return {*}  {BasicDiffInfo} 生成的diff对象
   */
  export function wrapDiffInfo(
    oldApiInfo: BasicApiInfo | undefined = undefined,
    newApiInfo: BasicApiInfo | undefined = undefined,
    diffTypeInfo: DiffTypeInfo,
    isNewFile?: boolean
  ): BasicDiffInfo {
    const newPropertyInfo = newApiInfo as PropertyInfo;
    const newMethodInfo = newApiInfo as MethodInfo;
    const parentApiType: string = newApiInfo && newApiInfo.getParentApiType() ? newApiInfo.getParentApiType() : '';
    let isCompatible = true;
    if (
      !isNewFile &&
      parentApiTypeSet.has(parentApiType) &&
      diffTypeInfo.getDiffType() === ApiDiffType.ADD &&
      ((newApiInfo?.getApiType() === ApiType.METHOD && newMethodInfo.getIsRequired()) ||
        (newApiInfo?.getApiType() === ApiType.PROPERTY && newPropertyInfo.getIsRequired()))
    ) {
      isCompatible = false;
    }
    const diffInfo: BasicDiffInfo = new BasicDiffInfo();
    const diffType: ApiDiffType = diffTypeInfo.getDiffType();
    const clonedOldApiInfo = oldApiInfo as ApiInfo;
    const clonedNewApiInfo = newApiInfo as ApiInfo;
    const oldApiLevel: boolean | undefined = clonedOldApiInfo?.getLastJsDocInfo()?.getIsSystemApi();
    const newApiLevel: boolean | undefined = clonedNewApiInfo?.getLastJsDocInfo()?.getIsSystemApi();
    let apiIsSameName: boolean | undefined = clonedNewApiInfo?.getIsSameNameFunction();
    if (!newApiInfo) {
      apiIsSameName = clonedOldApiInfo?.getIsSameNameFunction();
    }

    if (oldApiInfo) {
      processOldApiDiff(oldApiInfo, diffInfo);
    }
    if (newApiInfo) {
      processNewApiDiff(newApiInfo, diffInfo);
    }
    diffInfo
      .setDiffType(diffType)
      .setDiffMessage(diffMap.get(diffType) as string)
      .setStatusCode(diffTypeInfo.getStatusCode())
      .setIsCompatible(!isCompatible ? false : !incompatibleApiDiffTypes.has(diffType))
      .setOldDescription(diffTypeInfo.getOldMessage())
      .setNewDescription(diffTypeInfo.getNewMessage())
      .setIsSystemapi(newApiLevel ? newApiLevel : oldApiLevel)
      .setIsSameNameFunction(apiIsSameName);
    return diffInfo;
  }

  /**
   * 添加旧版本的基础信息
   *
   * @param {BasicApiInfo} oldApiInfo 旧版本的节点信息
   * @param {BasicDiffInfo} diffInfo 需要填充的diff对象
   */
  function processOldApiDiff(oldApiInfo: BasicApiInfo, diffInfo: BasicDiffInfo): void {
    const clonedOldApiInfo: ApiInfo = oldApiInfo as ApiInfo;
    const kitInfo: string | undefined = clonedOldApiInfo.getLastJsDocInfo?.()?.getKit?.();
    if (kitInfo) {
      diffInfo.setOldKitInfo(kitInfo);
    }

    diffInfo
      .setOldApiDefinedText(oldApiInfo.getDefinedText())
      .setApiType(oldApiInfo.getApiType())
      .setOldApiName(oldApiInfo.getApiName())
      .setOldDtsName(oldApiInfo.getFilePath())
      .setOldHierarchicalRelations(oldApiInfo.getHierarchicalRelations())
      .setOldPos(oldApiInfo.getPos())
      .setOldSyscapField(oldApiInfo.getSyscap());
  }

  /**
   * 添加新版本的基础信息
   *
   * @param {BasicApiInfo} newApiInfo 新版本的节点信息
   * @param {BasicDiffInfo} diffInfo 需要填充的diff对象
   */
  function processNewApiDiff(newApiInfo: BasicApiInfo, diffInfo: BasicDiffInfo): void {
    const clonedOldApiInfo: ApiInfo = newApiInfo as ApiInfo;
    const kitInfo: string | undefined = clonedOldApiInfo.getLastJsDocInfo?.()?.getKit?.();
    if (kitInfo) {
      diffInfo.setNewKitInfo(kitInfo);
    }
    diffInfo
      .setNewApiDefinedText(newApiInfo.getDefinedText())
      .setApiType(newApiInfo.getApiType())
      .setNewApiName(newApiInfo.getApiName())
      .setNewDtsName(newApiInfo.getFilePath())
      .setNewHierarchicalRelations(newApiInfo.getHierarchicalRelations())
      .setNewPos(newApiInfo.getPos())
      .setNewSyscapField(newApiInfo.getSyscap());
  }
  /**
   * api节点类型对应的处理方法，获取diff信息
   */
  export const apiNodeDiffMethod: Map<string, ApiNodeDiffProcessor> = new Map([
    [ApiType.PROPERTY, ApiNodeDiffHelper.diffProperty],
    [ApiType.CLASS, ApiNodeDiffHelper.diffClass],
    [ApiType.INTERFACE, ApiNodeDiffHelper.diffInterface],
    [ApiType.NAMESPACE, ApiNodeDiffHelper.diffNamespace],
    [ApiType.METHOD, ApiNodeDiffHelper.diffMethod],
    [ApiType.CONSTANT, ApiNodeDiffHelper.diffConstant],
    [ApiType.ENUM, ApiNodeDiffHelper.diffEnum],
    [ApiType.ENUM_VALUE, ApiNodeDiffHelper.diffEnumMember],
    [ApiType.TYPE_ALIAS, ApiNodeDiffHelper.diffTypeAlias],
  ]);

  /**
   * api节点jsdoc需要处理的数据，获取diff信息
   */
  export const jsDocDiffProcessors: JsDocDiffProcessor[] = [
    JsDocDiffHelper.diffSyscap,
    JsDocDiffHelper.diffDeprecated,
    JsDocDiffHelper.diffPermissions,
    JsDocDiffHelper.diffIsForm,
    JsDocDiffHelper.diffIsCrossPlatForm,
    JsDocDiffHelper.diffModelLimitation,
    JsDocDiffHelper.diffIsSystemApi,
    JsDocDiffHelper.diffAtomicService,
  ];

  /**
   * 枚举值节点需要处理的数据
   */
  export const enumDiffProcessors: ApiSceneDiffProcessor[] = [
    ApiNodeDiffHelper.diffApiName,
    ApiNodeDiffHelper.diffEnumMemberValue,
  ];

  /**
   * 自定义类型节点需要处理的数据
   */
  export const typeAliasDiffProcessors: ApiSceneDiffProcessor[] = [
    ApiNodeDiffHelper.diffApiName,
    ApiNodeDiffHelper.diffTypeAliasType,
  ];

  /**
   * 常量节点需要处理的数据
   */
  export const constantDiffProcessors: ApiSceneDiffProcessor[] = [
    ApiNodeDiffHelper.diffApiName,
    ApiNodeDiffHelper.diffConstantValue,
  ];

  /**
   * 属性节点需要处理的数据
   */
  export const propertyDiffProcessors: ApiSceneDiffProcessor[] = [
    ApiNodeDiffHelper.diffApiName,
    ApiNodeDiffHelper.diffPropertyType,
    ApiNodeDiffHelper.diffPropertyRequired,
  ];

  /**
   * 属性节点需要处理的数据
   */
  export const methodDiffProcessors: ApiScenesDiffProcessor[] = [
    ApiNodeDiffHelper.diffApiName,
    ApiNodeDiffHelper.diffMethodReturnType,
    ApiNodeDiffHelper.diffMethodParams,
  ];
}
