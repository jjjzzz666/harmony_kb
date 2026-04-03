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

import * as arkts from '@koalaui/libarkts';
import { checkIdentifier } from '../src/api_check_wrapper';

// 不同节点对应的处理函数映射
export const nodeHandleFunctionMap = new Map<arkts.Es2pandaAstNodeType, (node: arkts.AstNode, ...args: arkts.AstNode[]) => void>([
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION, handleAssignmentExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, handleAnnotatedAstNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT, handleLabelledStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT, handleThrowStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY, handleClassProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_VOID_KEYWORD, handleTSVoidKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE, handleETSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_OPERATOR, handleTSTypeOperator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT, handleIfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONSTRUCTOR_TYPE, handleTSConstructorType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR, handleDecorator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION, handleTSEnumDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD, handleTSNeverKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER, handleImportDefaultSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER, handleImportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION, handleConditionalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION, handleCallExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BIGINT_LITERAL, handleBigIntLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE, handleTSImportType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION, handleTaggedTemplateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION, handleFunctionDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE, handleETSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_REFERENCE, handleTSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE, handleNamedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL, handleNumberLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_FUNCTION_TYPE, handleTSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT, handleTemplateElement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION, handleTSInterfaceDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION, handleVariableDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNDEFINED_LITERAL, handleUndefinedLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION, handleMemberExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS, handleTSClassImplements],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_OBJECT_KEYWORD, handleTSObjectKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNION_TYPE, handleETSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE, handleTSPropertySignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE, handleTSConditionalType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE, handleTSLiteralType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION, handleTSTypeAliasDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DEBUGGER_STATEMENT, handleDebuggerStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT, handleReturnStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_DEFAULT_DECLARATION, handleExportDefaultDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION, handleScriptFunction],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION, handleClassDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY, handleTSInterfaceBody],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY, handleTSTypeQuery],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_BIGINT_KEYWORD, handleTSBigintKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY, handleProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR, handleVariableDeclarator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL, handleStringLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION, handleTSTypeAssertion],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_EXTERNAL_MODULE_REFERENCE, handleTSExternalModuleReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNDEFINED_KEYWORD, handleTSUndefinedKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE, handleETSTuple],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT, handleTryStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION, handleUnaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_IN_STATEMENT, handleForInStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION, handleThisExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE, handleTSMethodSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION, handleBinaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SUPER_EXPRESSION, handleSuperExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSERT_STATEMENT, handleAssertStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_STRING_KEYWORD, handleTSStringKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT, handleExpressionStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE, handleETSModule],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION, handleMetaProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ARRAY_TYPE, handleTSArrayType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION, handleTSSignatureDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION, handleExportAllDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_SPECIFIER, handleExportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE, handleTSTupleType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_EXPRESSION, handleFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEX_SIGNATURE, handleTSIndexSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION, handleTSModuleDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DECLARATION, handleImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARENT_TYPE, handleTSParenthesizedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL, handleCharLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION, handleETSPackageDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION, handleETSImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION, handleETSStructDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_BLOCK, handleTSModuleBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION, handleETSNewArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_DECLARATION, handleAnnotationDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, handleAnnotationUsage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT, handleEmptyStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT, handleWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION, handleChainExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERSECTION_TYPE, handleTSIntersectionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION, handleUpdateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION, handleBlockExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_LITERAL, handleTSTypeLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER, handleTSTypeParameter],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BOOLEAN_LITERAL, handleTSBooleanKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE, handleTSTypePredicate],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_NAMESPACE_SPECIFIER, handleImportNamespaceSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION, handleExportNamedDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION, handleETSParameterExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_INSTANTIATION, handleTSTypeParameterInstantiation],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NULL_LITERAL, handleNullLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE, handleTSInferType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT, handleSwitchCaseStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_YIELD_EXPRESSION, handleYieldExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_EQUALS_DECLARATION, handleTSImportEqualsDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BOOLEAN_LITERAL, handleBooleanLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NUMBER_KEYWORD, handleTSNumberKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK, handleClassStaticBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION, handleTSNonNullExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION, handlePrefixAssertionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_EXPRESSION, handleClassExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT, handleForOfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL, handleTemplateLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE, handleTSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNKNOWN_KEYWORD, handleTSUnknownKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER, handleIdentifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OPAQUE_TYPE_NODE, handleOpaqueTypeNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, handleBlockStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DIRECT_EVAL, handleDirectEvalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION, handleTSTypeParameterDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION, handleMethodDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NULL_KEYWORD, handleTSNullKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_HERITAGE, handleTSInterfaceHeritage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL, handleETSClassLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BREAK_STATEMENT, handleBreakStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL, handleRegExpLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE, handleTSMappedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD, handleTSAnyKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DECLARATION, handleClassDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE, handleTSIndexedAccessType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME, handleTSQualifiedName],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_AWAIT_EXPRESSION, handleAwaitExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT, handleContinueStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION,
    handleETSNewMultiDimArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER, handleTSNamedTupleMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_EXPRESSION, handleImportExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NULL_TYPE, handleETSNullType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNDEFINED_TYPE, handleETSUndefinedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TYPEOF_EXPRESSION, handleTypeofExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER, handleTSEnumMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_STATEMENT, handleSwitchStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DO_WHILE_STATEMENT, handleDoWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE, handleCatchClause],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION, handleSequenceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION, handleArrowFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OMITTED_EXPRESSION, handleOmittedExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION, handleETSNewClassInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION, handleTSAsExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT, handleForUpdateStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART, handleETSTypeReferencePart],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT, handleETSReExportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE, handleETSPrimitiveType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION, handleNewExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY, handleTSParameterProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_WILDCARD_TYPE, handleETSWildcardType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_THIS_TYPE, handleTSThisType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARRAY_EXPRESSION, handleArrayExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SPREAD_ELEMENT, handleSpreadElement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OBJECT_EXPRESSION, handleObjectExpression]
])

type VisitNode = [arkts.Es2pandaAstNodeType, string];
const visitPath: VisitNode[] = [];

// Debug模式开关
const isDebug = false;
// 保存当前已访问过的节点
const nodeMap = new Map();
// 重复节点最大访问次数
const limitCount = 5;
// 访问路径上表达式节点个数
let exporssionCount = 0;

// 转换函数：将枚举值数组拼接为数字字符串数组
const convertToNumberStringArray = (matchArray: arkts.Es2pandaAstNodeType[][]): string[] => {
  return matchArray.map(pair => {
    // 直接将枚举值（数字）转换为字符串并拼接
    return pair.map(item => item.toString()).join('|');
  });
};
// 转换函数：将元组的数组最后4个元素拼接成字符串
const joinLastFourElement = (nodePath: VisitNode[]): string =>
  nodePath.slice(-4).map(node => node[0]).join('|');

// 有效的节点校验路径列表(倒序，从子节点开始)
const validNodeTypePathList = [
  [
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DECLARATION,
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION,
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE,
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER
  ]
]

// 有效的节点校验路径列表(字符串版本)
const ValidNodeTypePathStrList = convertToNumberStringArray(validNodeTypePathList);
/**
 * 
 * 根节点处理
 * @param { arkts.AstNode } node 
 */
export function traverseProgram(node: arkts.AstNode): void {
  // 处理Identifier
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

/**
 * 获取Jsdoc信息
 * @param { arkts.AstNode } node 节点
 * @returns { string } jsdoc 字符串
 */
export function getJSDocInformation(node: arkts.AstNode): string {
  return arkts.getJsdocStringFromDeclaration(node);
}

/**
 * 检查节点是否访问次数超过上限
 * @param { arkts.AstNode } node 传入节点
 */
function checkLimit(node: arkts.AstNode): boolean {
  if (nodeMap.has(node.peer.toString())) {
    if (nodeMap.get(node.peer.toString()) > limitCount) {
      return true;
    }
    if (isDebug && nodeMap.get(node.peer.toString()) > 2) {
      console.error('[API_CHECK_PLUGIN] repeat traverse');
    }
    nodeMap.set(node.peer.toString(), nodeMap.get(node.peer.toString()) + 1);
  } else {
    nodeMap.set(node.peer.toString(), 1);
  }
  return false;
}
/**
 * 节点通用处理逻辑
 * @param { arkts.AstNode } node 节点
 */
function handleAstNode(node: arkts.AstNode): void {
  // 用于判断是否重复访问或者陷入循环
  if (node === null || node === undefined || checkLimit(node)) {
    return;
  }
  // 通过CAPI获取节点具体类型
  let kind: number = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer)
  if (!nodeHandleFunctionMap.has(kind) || nodeHandleFunctionMap.get(kind) === undefined) {
    return;
  }
  // 根据类型获取到具体节点对应处理方法
  let func = nodeHandleFunctionMap.get(kind)!
  // 添加当前节点到访问路径
  visitPath.push([kind, `${func.name}_${node.peer.toString()}`]);
  // Expression 下的identifier才会提示告警
  if (node instanceof arkts.Expression) {
    exporssionCount++;
  }
  // 编译节点属性
  func(node);

  // 清理节点
  if (node instanceof arkts.Expression) {
    exporssionCount--;
  }
  visitPath.pop();
}

export function handleAnnotatedAstNode(node: arkts.AstNode): void { }

export function handleAnnotatedExpression(node: arkts.AstNode): void {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleAnnotatedStatement(node: arkts.AstNode): void { }

export function handleAnnotationDeclaration(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleAnnotationUsage(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleArrayExpression(node: arkts.AstNode): void {
  if (!!node.elements) {
    node.elements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleArrowFunctionExpression(node: arkts.AstNode): void {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
}

export function handleAssertStatement(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.second) {
    handleAstNode(node.second);
  }
}

export function handleAssignmentExpression(node: arkts.AstNode): void {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

export function handleAstDumper(node: arkts.AstNode): void {
  return;
}

export function handleAwaitExpression(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleBigIntLiteral(node: arkts.AstNode): void { }

export function handleBinaryExpression(node: arkts.AstNode): void {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.result) {
    handleAstNode(node.result);
  }
}

export function handleBlockExpression(node: arkts.AstNode): void {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleBlockStatement(node: arkts.AstNode): void {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleBooleanLiteral(node: arkts.AstNode): void { }

export function handleBreakStatement(node: arkts.AstNode): void {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
}

export function handleCallExpression(node: arkts.AstNode): void {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.Expression) => handleAstNode(item));
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleCatchClause(node: arkts.AstNode): void {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleChainExpression(node: arkts.AstNode): void {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
}

export function handleCharLiteral(node: arkts.AstNode): void { }

export function handleClassDeclaration(node: arkts.AstNode): void {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleClassDefinition(node: arkts.AstNode): void {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.super) {
    handleAstNode(node.super);
  }
  if (!!node.body) {
    node.body.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.implments) {
    node.implments.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.superTypeParams) {
    handleAstNode(node.superTypeParams);
  }
  if (!!node.origEnumDecl) {
    handleAstNode(node.origEnumDecl);
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleClassElement(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleClassExpression(node: arkts.AstNode): void {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
}

export function handleClassProperty(node: arkts.AstNode): void {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleClassStaticBlock(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleConditionalExpression(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    handleAstNode(node.consequent);
  }
  if (!!node.alternate) {
    handleAstNode(node.alternate);
  }
}

export function handleContext(node: arkts.AstNode): void { }

/**
 * target重复节点，不遍历
 * @param { arkts.AstNode } node 
 */
export function handleContinueStatement(node: arkts.AstNode): void {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
}

export function handleDebuggerStatement(node: arkts.AstNode): void { }

export function handleDecorator(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleDirectEvalExpression(node: arkts.AstNode): void {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.Expression) => handleAstNode(item));
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleDoWhileStatement(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleETSClassLiteral(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleETSDynamicFunctionType(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
}

export function handleETSFunctionType(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
}

export function handleETSImportDeclaration(node: arkts.AstNode): void { }

export function handleETSModule(node: arkts.AstNode): void {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleETSNewArrayInstanceExpression(node: arkts.AstNode): void {
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
  if (!!node.dimension) {
    handleAstNode(node.dimension);
  }
}

export function handleETSNewClassInstanceExpression(node: arkts.AstNode): void {
  if (!!node.getTypeRef) {
    handleAstNode(node.getTypeRef);
  }
  if (!!node.getArgments) {
    node.getArgments.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleETSNewMultiDimArrayInstanceExpression(node: arkts.AstNode): void {
  if (!!node.dimensions) {
    node.dimensions.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
}

export function handleETSNullType(node: arkts.AstNode): void { }

export function handleETSPackageDeclaration(node: arkts.AstNode): void { }

export function handleETSParameterExpression(node: arkts.AstNode): void {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.identifier) {
    handleAstNode(node.identifier);
  }
}

export function handleETSPrimitiveType(node: arkts.AstNode): void {
}

export function handleETSReExportDeclaration(node: arkts.AstNode): void {
  if (!!node.getETSImportDeclarations) {
    handleAstNode(node.getETSImportDeclarations);
  }
}

export function handleETSStructDeclaration(node: arkts.AstNode): void {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleETSTuple(node: arkts.AstNode): void {
  if (!!node.getTupleTypeAnnotationsList) {
    node.getTupleTypeAnnotationsList.forEach((item: arkts.AstNde) =>
      handleAstNode(item)
    );
  }
}

export function handleETSTypeReference(node: arkts.AstNode): void {
  if (!!node.part) {
    handleAstNode(node.part);
  }
}

export function handleETSTypeReferencePart(node: arkts.AstNode): void {
  if (!!node.previous) {
    handleAstNode(node.previous);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

export function handleETSUndefinedType(node: arkts.AstNode): void { }

export function handleETSUnionType(node: arkts.AstNode): void {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
}

export function handleETSWildcardType(node: arkts.AstNode): void {
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
}

export function handleEmptyStatement(node: arkts.AstNode): void { }

export function handleExportAllDeclaration(node: arkts.AstNode): void {
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.exported) {
    handleAstNode(node.exported);
  }
}

export function handleExportDefaultDeclaration(node: arkts.AstNode): void {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
}

export function handleExportNamedDeclaration(node: arkts.AstNode): void {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.specifiers) {
    node.specifiers.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleExportSpecifier(node: arkts.AstNode): void {
  if (!!node.local) {
    handleAstNode(node.local);
  }
  if (!!node.exported) {
    handleAstNode(node.exported);
  }
}

export function handleExpression(node: arkts.AstNode): void { }

export function handleExpressionStatement(node: arkts.AstNode): void {
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
}

export function handleForInStatement(node: arkts.AstNode): void {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleForOfStatement(node: arkts.AstNode): void {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleForUpdateStatement(node: arkts.AstNode): void {
  if (!!node.init) {
    handleAstNode(node.init);
  }
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.update) {
    handleAstNode(node.update);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleFunctionDecl(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnStatements) {
    node.returnStatements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
}

export function handleFunctionDeclaration(node: arkts.AstNode): void {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
  if (!!node.parameters) {
    node.parameters.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParamsDecl) {
    handleAstNode(node.typeParamsDecl);
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleFunctionExpression(node: arkts.AstNode): void {
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }

}

export function handleFunctionSignature(node: arkts.AstNode): void {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleIdentifier(node: arkts.AstNode): void {
  if (exporssionCount > 1 || ValidNodeTypePathStrList.includes(joinLastFourElement(visitPath))) {
    checkIdentifier(node);
  }

  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleIfStatement(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    handleAstNode(node.consequent);
  }
  if (!!node.alternate) {
    handleAstNode(node.alternate);
  }
}

export function handleImportDeclaration(node: arkts.AstNode): void {
}

export function handleImportDefaultSpecifier(node: arkts.AstNode): void {
  if (!!node.local) {
    handleAstNode(node.local);
  }
}

export function handleImportExpression(node: arkts.AstNode): void {
  if (!!node.source) {
    handleAstNode(node.source);
  }
}

export function handleImportNamespaceSpecifier(node: arkts.AstNode): void {
  if (!!node.local) {
    handleAstNode(node.local);
  }

}

export function handleImportSource(node: arkts.AstNode): void {
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.resolvedSource) {
    handleAstNode(node.resolvedSource);
  }
}

export function handleImportSpecifier(node: arkts.AstNode): void {
  if (!!node.imported) {
    handleAstNode(node.imported);
  }
  if (!!node.local) {
    handleAstNode(node.local);
  }

}

export function handleInterfaceDecl(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParam);
  }
  if (!!node.extends) {
    node.extends.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleLabelPair(node: arkts.AstNode): void {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleLabelledStatement(node: arkts.AstNode): void { }

export function handleLiteral(node: arkts.AstNode): void { }

export function handleLoopStatement(node: arkts.AstNode): void { }

export function handleMaybeOptionalExpression(node: arkts.AstNode): void { }

export function handleMemberExpression(node: arkts.AstNode): void {
  if (!!node.object) {
    handleAstNode(node.object);
  }
  if (!!node.property) {
    handleAstNode(node.property);
  }
}

export function handleMetaProperty(node: arkts.AstNode): void { }

export function handleMethodDefinition(node: arkts.AstNode): void {
  if (!!node.overloads) {
    node.overloads.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleNamedType(node: arkts.AstNode): void {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

export function handleNewExpression(node: arkts.AstNode): void {
  if (!!node.callee) {
    handleAstNode(node.callee);
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleNullLiteral(node: arkts.AstNode): void { }

export function handleNumberLiteral(node: arkts.AstNode): void { }

export function handleObjectExpression(node: arkts.AstNode): void {
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleOmittedExpression(node: arkts.AstNode): void { }

export function handleOpaqueTypeNode(node: arkts.AstNode): void { }

export function handlePrefixAssertionExpression(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleProperty(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
}

export function handleRegExpLiteral(node: arkts.AstNode): void { }

export function handleReturnStatement(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleScriptFunction(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnStatements) {
    node.returnStatements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
}

export function handleSequenceExpression(node: arkts.AstNode): void {
  if (!!node.sequence) {
    node.sequence.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleSpreadElement(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleSrcDumper(node: arkts.AstNode): void {
  return;
}

export function handleStatement(node: arkts.AstNode): void {
}

export function handleStringLiteral(node: arkts.AstNode): void { }

export function handleSuperExpression(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
}

export function handleSwitchCaseStatement(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    node.consequent.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleSwitchStatement(node: arkts.AstNode): void {
  if (!!node.discriminant) {
    handleAstNode(node.discriminant);
  }
  if (!!node.cases) {
    node.cases.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSAnyKeyword(node: arkts.AstNode): void {
}

export function handleTSArrayType(node: arkts.AstNode): void {
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

export function handleTSAsExpression(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSBigintKeyword(node: arkts.AstNode): void { }

export function handleTSBooleanKeyword(node: arkts.AstNode): void { }

export function handleTSClassImplements(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeParameters) {
    handleAstNode(node.typeParameters);
  }
}

export function handleTSConditionalType(node: arkts.AstNode): void {
  if (!!node.checkType) {
    handleAstNode(node.checkType);
  }
  if (!!node.extendsType) {
    handleAstNode(node.extendsType);
  }
  if (!!node.trueType) {
    handleAstNode(node.trueType);
  }
  if (!!node.falseType) {
    handleAstNode(node.falseType);
  }
}

export function handleTSConstructorType(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParameters);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleTSEnumDeclaration(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.members) {
    node.members.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
  if (!!node.boxedClass) {
    handleAstNode(node.boxedClass);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSEnumMember(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.init) {
    handleAstNode(node.init);
  }
}

export function handleTSExternalModuleReference(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSFunctionType(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleTSImportEqualsDeclaration(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.moduleReference) {
    handleAstNode(node.moduleReference);
  }
}

export function handleTSImportType(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    handleAstNode(node.params);
  }
  if (!!node.qualifier) {
    handleAstNode(node.qualifier);
  }
}

export function handleTSIndexSignature(node: arkts.AstNode): void {
  if (!!node.objectType) {
    handleAstNode(node.objectType);
  }
  if (!!node.indexType) {
    handleAstNode(node.indexType);
  }
}

export function handleTSIndexedAccessType(node: arkts.AstNode): void {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSInferType(node: arkts.AstNode): void {
  if (!!node.typeParam) {
    handleAstNode(node.typeParam);
  }
}

export function handleTSInterfaceBody(node: arkts.AstNode): void {
  if (!!node.body) {
    node.body.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleTSInterfaceDeclaration(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParam);
  }
  if (!!node.extends) {
    node.extends.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSInterfaceHeritage(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSIntersectionType(node: arkts.AstNode): void {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSLiteralType(node: arkts.AstNode): void {
  if (!!node.literal) {
    handleAstNode(node.literal);
  }
}

export function handleTSMappedType(node: arkts.AstNode): void {
  if (!!node.typeParameter) {
    handleAstNode(node.typeParameter);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSMethodSignature(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

export function handleTSModuleBlock(node: arkts.AstNode): void {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSModuleDeclaration(node: arkts.AstNode): void {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleTSNamedTupleMember(node: arkts.AstNode): void {
  if (!!node.label) {
    handleAstNode(node.label);
  }
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

export function handleTSNeverKeyword(node: arkts.AstNode): void { }

export function handleTSNonNullExpression(node: arkts.AstNode): void {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSNullKeyword(node: arkts.AstNode): void { }

export function handleTSNumberKeyword(node: arkts.AstNode): void { }

export function handleTSObjectKeyword(node: arkts.AstNode): void { }

export function handleTSParameterProperty(node: arkts.AstNode): void {
  if (!!node.parameter) {
    handleAstNode(node.parameter);
  }
}

export function handleTSParenthesizedType(node: arkts.AstNode): void {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSPropertySignature(node: arkts.AstNode): void {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSQualifiedName(node: arkts.AstNode): void {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

export function handleTSSignatureDeclaration(node: arkts.AstNode): void {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

export function handleTSStringKeyword(node: arkts.AstNode): void { }

export function handleTSThisType(node: arkts.AstNode): void { }

export function handleTSTupleType(node: arkts.AstNode): void {
  if (!!node.elementType) {
    node.elementType.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypeAliasDeclaration(node: arkts.AstNode): void {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSTypeAssertion(node: arkts.AstNode): void {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }

}

export function handleTSTypeLiteral(node: arkts.AstNode): void {
  if (!!node.members) {
    node.members.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSTypeOperator(node: arkts.AstNode): void {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSTypeParameter(node: arkts.AstNode): void {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.constraint) {
    handleAstNode(node.constraint);
  }
  if (!!node.defaultType) {
    handleAstNode(node.defaultType);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypeParameterDeclaration(node: arkts.AstNode): void {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypeParameterInstantiation(node: arkts.AstNode): void {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypePredicate(node: arkts.AstNode): void {
  if (!!node.parameterName) {
    handleAstNode(node.parameterName);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSTypeQuery(node: arkts.AstNode): void {
  if (!!node.exprName) {
    handleAstNode(node.exprName);
  }
}

export function handleTSTypeReference(node: arkts.AstNode): void {
  if (!!node.typeName) {
    handleAstNode(node.typeName);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

export function handleTSUndefinedKeyword(node: arkts.AstNode): void { }

export function handleTSUnionType(node: arkts.AstNode): void {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNode) => traverseProgram(item));
  }
}

export function handleTSUnknownKeyword(node: arkts.AstNode): void { }

export function handleTSVoidKeyword(node: arkts.AstNode): void { }

export function handleTaggedTemplateExpression(node: arkts.AstNode): void {
  if (!!node.tag) {
    handleAstNode(node.tag);
  }
  if (!!node.quasi) {
    handleAstNode(node.quasi);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

export function handleTemplateElement(node: arkts.AstNode): void { }

export function handleTemplateLiteral(node: arkts.AstNode): void {
  if (!!node.quasis) {
    node.quasis.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.expressions) {
    node.expressions.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleThisExpression(node: arkts.AstNode): void { }

export function handleThrowStatement(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleTryStatement(node: arkts.AstNode): void {
  if (!!node.finallyBlock) {
    handleAstNode(node.finallyBlock);
  }
  if (!!node.block) {
    handleAstNode(node.block);
  }
  if (!!node.catchClauses) {
    node.catchClauses.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTypeNode(node: arkts.AstNode): void { }

export function handleTypedAstNode(node: arkts.AstNode): void { }

export function handleTypedStatement(node: arkts.AstNode): void { }

export function handleTypeofExpression(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleUnaryExpression(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleUndefinedLiteral(node: arkts.AstNode): void { }

export function handleUpdateExpression(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleValidationInfo(node: arkts.AstNode): void { }

export function handleVariableDeclaration(node: arkts.AstNode): void {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleVariableDeclarator(node: arkts.AstNode): void {
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
}

export function handleWhileStatement(node: arkts.AstNode): void {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleYieldExpression(node: arkts.AstNode): void {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}
