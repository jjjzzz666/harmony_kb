/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import ts from "typescript";
import { OperateType } from "./Enums";

export const OPERATE_MESSAGE_MAP: Map<string, string> = new Map<string, string>([
  [OperateType.DELETE_FILE, 'delete file message, reson $2']
  // TODO
])

export class fileDir {
  // 处理的目录类型，ets代表处理的是1.1目录，ets2代表处理的是1.2目录里有@arkts 1.1&1.2标签的文件，
  // noTagInEts2代表处理的是1.2目录里无标签的文件
  // static readonly DirType = {
  //     'typeOne': 'ets',
  //     'typeTwo': 'ets2',
  //     'typeThree': 'noTagInEts2',
  // };

  // 1.2SDK兼容行打包方案过滤文件
  static readonly API_NO_TAGS_FILTER_LIST = [
    '@arkts.collections.d.ets',
    '@arkts.lang.d.ets',
    '@arkts.utils.d.ets'
  ];

  // 无需处理的文件路径
  static readonly NOT_COPY_DIR = ['build-tools', '.git', '.gitee'];

  // 所有API的节点类型
  static readonly apiNodeTypeArr = [
    ts.SyntaxKind.VariableStatement,
    ts.SyntaxKind.MethodDeclaration,
    ts.SyntaxKind.MethodSignature,
    ts.SyntaxKind.FunctionDeclaration,
    ts.SyntaxKind.Constructor,
    ts.SyntaxKind.ConstructSignature,
    ts.SyntaxKind.CallSignature,
    ts.SyntaxKind.PropertyDeclaration,
    ts.SyntaxKind.PropertySignature,
    ts.SyntaxKind.EnumMember,
    ts.SyntaxKind.EnumDeclaration,
    ts.SyntaxKind.TypeAliasDeclaration,
    ts.SyntaxKind.ClassDeclaration,
    ts.SyntaxKind.InterfaceDeclaration,
    ts.SyntaxKind.ModuleDeclaration,
    ts.SyntaxKind.StructDeclaration
  ];
}