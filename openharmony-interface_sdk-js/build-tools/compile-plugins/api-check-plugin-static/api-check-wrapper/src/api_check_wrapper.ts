/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

import * as arkts from '@koalaui/libarkts';
import { traverseProgram, getJSDocInformation } from '../utils/ts_wrapper_node_util';
import {
  ApiCheckWrapperServiceHost,
  JsDocNodeCheckConfig,
  FileCheckModuleInfo,
  JSDoc,
  JSDocTag,
  JsDocNodeCheckConfigItem,
  CurrentAddress,
  LegacyStructMap
} from '../utils/api_check_wrapper_typedef';
import { SINCE_TAG_NAME } from '../../utils/api_check_plugin_define';
import { parseJSDoc } from '../custom-plugins/custom-comment-parser';
import { globalObject } from '../../index';
import path from 'path';
export let curApiCheckWrapper: ApiCheckWrapper;
export let curFileCheckModuleInfo: FileCheckModuleInfo;

/**
 * 导出arkts命名空间
 */
export const WrapperApi = {
  ...arkts
}

let checkedNode = new Map();

export class ApiCheckWrapper {
  constructor(apiCheckHost: ApiCheckWrapperServiceHost) {
    this.apiCheckHost = apiCheckHost;
  }
  setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  fileName: string // ets源文件位置

  sourcefile: string // 声明节点位置

  apiCheckHost: ApiCheckWrapperServiceHost
}

/**
 * API检查的入口逻辑，通过获取当前ets文件路径，设置参数，循环遍历节点。
 * 
 * @param { ApiCheckWrapperServiceHost } apiCheckHost host对象，提供检查配置和工具方法
 * @param { number | undefined } peer 上下文标识
 */
export function checkApiExpression(apiCheckHost: ApiCheckWrapperServiceHost, peer: number | undefined): void {
  const contextPtr = arkts.arktsGlobal.compilerContext?.peer ?? peer;
  if (contextPtr === null || contextPtr === undefined) {
    return;
  }

  curApiCheckWrapper = new ApiCheckWrapper(apiCheckHost);
  curFileCheckModuleInfo = {} as FileCheckModuleInfo;
  let fileNames: Map<number, string> = new Map();
  let legacyModuleList: string[] = [];
  let legacyStructMap: Map<string, LegacyStructMap> = new Map();

  // 获取当前ets文件路径，设置参数
  let program = arkts.getOrUpdateGlobalContext(contextPtr).program;
  const visited: Set<number> = new Set();
  const queue: arkts.Program[] = [program];
  getLegacyModule(legacyStructMap, legacyModuleList);
  while (queue.length > 0) {
    const currProgram = queue.shift()!;
    if (visited.has(currProgram.peer)) {
      continue;
    }
    if (currProgram.peer !== program.peer) {
      const name: string = fileNames.get(currProgram.peer)!;
      if (globalObject.projectConfig.compileFiles.includes(path.normalize(currProgram.sourceFilePath))) {
        curApiCheckWrapper.fileName = currProgram.sourceFilePath;
        curFileCheckModuleInfo.currentFileName = currProgram.fileName;
        // 清空map对象
        checkedNode = new Map();
        // 获取根节点，开始遍历
        traverseProgram(currProgram.astNode);
      }
    }
    visited.add(currProgram.peer);
    for (const externalSource of currProgram.externalSources) {
      visitNextProgramInQueue(queue, visited, externalSource, fileNames);
    }
  }
}

/**
 * 从项目配置的依赖模块中收集需要验证的节点。
 * 
 * @param { Map<string,LegacyStructMap> } legacyStructMap 用于存储需要验证的结构映射的Map（键为模块名）
 * @param { string[] } legacyModuleList 用于存储需要验证的节点数组
 */
function getLegacyModule(legacyStructMap: Map<string, LegacyStructMap>, legacyModuleList: string[]): void {
  const moduleList = globalObject.projectConfig?.dependentModuleList;
  if (moduleList === undefined) {
    return;
  }
  for (const module of moduleList) {
    const moduleName = module.moduleName;
    if (!legacyStructMap.has(moduleName)) {
      legacyStructMap.set(moduleName, {});
      legacyModuleList.push(moduleName);
    }
  }
}

/**
 * 匹配当前文件名是否需要验证。
 * 
 * @param { (string | RegExp)[] } prefixCollection 前缀集合，元素可为字符串或正则表达式
 * @param { string } name 需要检查的文件名
 * @returns { boolean } 若文件名匹配任一前缀，返回true；否则返回false
 */
function matchPrefix(prefixCollection: (string | RegExp)[], name: string): boolean {
  for (const prefix of prefixCollection) {
    let regex: RegExp;

    if (typeof prefix === 'string') {
      regex = new RegExp('^' + prefix);
    } else {
      regex = new RegExp('^' + prefix.source);
    }

    if (regex.test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * 将program节点加入遍历队列并记录文件名。
 * 
 * @param { arkts.Program[] } queue 程序遍历队列，用于存储待处理的程序对象
 * @param { Set<number> } visited 已访问程序的标识集合，用于去重
 * @param { arkts.ExternalSource } externalSource 外部源对象，包含关联的程序
 * @param { Map<number,string> } fileNames 用于存储程序标识与文件名映射的Map
 */
function visitNextProgramInQueue(
  queue: arkts.Program[],
  visited: Set<number>,
  externalSource: arkts.ExternalSource,
  fileNames: Map<number, string>
): void {
  const nextProgramArr: arkts.Program[] = externalSource.programs ?? [];
  for (const nextProgram of nextProgramArr) {
    fileNames.set(nextProgram.peer, externalSource.getName());
    if (!visited.has(nextProgram.peer)) {
      queue.push(nextProgram);
    }
  }
}

/**
 * 检查Identifier节点对应的声明是否符合API规范（基于JSDoc配置）。
 * 
 * @param { arkts.AstNode } node 需要检查的标识符AST节点
 */
export function checkIdentifier(node: arkts.AstNode): void {
  // 获取校验节点的声明节点
  const decl = arkts.getDecl(node);

  if (decl === undefined || decl === null) {
    return;
  }
  // 获取声明节点系统路径
  let sysPath = getSysPath(decl);

  if (sysPath === undefined || sysPath === null) {
    return
  }
  let checkPram: JsDocNodeCheckConfig = curApiCheckWrapper.apiCheckHost.getJsDocNodeCheckedConfig(
    curFileCheckModuleInfo.currentFileName, sysPath);
  if (!checkPram.nodeNeedCheck) {
    return;
  }
  // 获取校验节点的行列信息
  const address = getCurrentAddressByNode(node);
  if (confirmNodeChecked(node.name, address.line, address.column)) {
    return;
  }
  //进入检查jsdoc流程
  expressionCheckByJsDoc(decl, node, address, checkPram.checkConfig);
}

/**
 *  获取校验节点的行列信息，实现打印报错去重。
 * 
 * @param { string } nodeName 标识符节点的名称
 * @param { number } line 节点所在的行号
 * @param { number } col 节点所在的列号
 */
function confirmNodeChecked(nodeName: string, line: number, col: number): boolean {
  const nodeKey = `${curApiCheckWrapper.fileName}_${nodeName}_${line}_${col}`;
  if (checkedNode.has(nodeKey) && checkedNode.get(nodeKey) !== undefined) {
    return true;
  } else {
    checkedNode.set(nodeKey, nodeName);
    return false;
  }
}

/**
 * 获取声明节点的Api文件路径
 * 
 * @param { arkts.AstNode } decl 声明节点
 * @returns { string } Api文件路径
 */
function getSysPath(decl: arkts.AstNode): string {
  // 获取节点的声明节点，
  let program = arkts.getProgramFromAstNode(decl);
  return program.sourceFilePath;
}

/**
 * 通过声明节点获取Jsdoc注释内容
 * 
 * @param { arkts.AstNde } decl 声明节点
 * @returns { string } 注释信息
 */
export function getPeerJsDocs(decl: arkts.AstNde): string {
  return getJSDocInformation(decl);
}

/**
 * 遍历jsdoc信息，对AST节点进行规则校验并打印报错信息。
 * 
 * @param { arkts.AstNode } declaration 声明节点
 * @param { arkts.AstNode } identifier AST节点
 * @param { CurrentAddress } address 当前文件地址
 * @param { JsDocNodeCheckConfigItem[] } checkConfig 校验配置
 */
function expressionCheckByJsDoc(
  declaration: arkts.AstNode, identifier: arkts.AstNode,
  address: CurrentAddress, checkConfig: JsDocNodeCheckConfigItem[]): void {
  const jsDocsString: string = getPeerJsDocs(declaration);
  const jsDocs: JSDoc[] = parseJSDoc(jsDocsString);
  const jsDocTags: JSDocTag[] = getCurrentJSDoc(jsDocs);
  for (let i = 0; i < checkConfig.length; i++) {
    const config: JsDocNodeCheckConfigItem = checkConfig[i];
    let tagNameExisted = false;
    jsDocTags.forEach((item) => {
      if (!config.tagName.includes(item.tag)) {
        tagNameExisted = false;
        return;
      }
  
      if (config.checkValidCallback) {
        tagNameExisted = config.checkValidCallback(jsDocs, config);
      } else {
        tagNameExisted = true;
      }
  
      if (tagNameExisted && !config.tagNameShouldExisted) {
        curApiCheckWrapper.apiCheckHost.pushLogInfo(
          identifier.name, 
          curApiCheckWrapper.fileName,
          address, 
          config.type, 
          config.message
        );
      }
    })
    if (config.tagNameShouldExisted && !tagNameExisted) {
      curApiCheckWrapper.apiCheckHost.pushLogInfo(
        identifier.name, curApiCheckWrapper.fileName,
        address, config.type, config.message);
    }
  }
}

/**
 * 获取AST节点在源文件中的行列位置信息
 * 
 * @param { arkts.AstNode } node 需要获取行列信息的节点
 * @returns { CurrentAddress } 节点行列信息
 */
function getCurrentAddressByNode(node: arkts.AstNode): CurrentAddress {
  let address = {} as CurrentAddress;
  let startPosition = node.startPosition;
  address.column = startPosition.col();
  address.line = startPosition.line() + 1;
  return address;
}

/**
 * 通过比较JSDoc注释中@since标签的版本号，筛选出版本号最大的注释对象，
 * 返回其包含的所有标签（JSDocTag），用于获取最新版本的API文档注释信息。
 * 
 * @param { JSDoc[] } jsDocs JSDoc注释对象数组
 * @returns { JSDocTag[] } 最新版本JSDoc注释中的标签数组；若无有效注释，返回空数组
 */
function getCurrentJSDoc(jsDocs: JSDoc[]): JSDocTag[] {
  let jsDocTags: JSDocTag[] = [];
  let maxVersion: number = 0;

  if (!jsDocs || jsDocs.length === 0) {
    return jsDocTags;
  }
  for (const jsdoc of jsDocs) {
    if (!jsdoc.tags || jsdoc.tags.length === 0) {
      continue;
    }
    for (const tag of jsdoc.tags) {
      if (tag.tag !== SINCE_TAG_NAME) {
        continue;
      }
      const currentVersion: number = Number.parseInt(tag.name ?? '0');
      if (!Number.isNaN(currentVersion) && currentVersion > maxVersion) {
        maxVersion = currentVersion;
        jsDocTags = jsdoc.tags;
      }
      break;
    }
  }

  return jsDocTags;
}