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

import * as ts from "typescript";

export function exportAllTransformer(): ts.TransformerFactory<ts.SourceFile> {
  return (context) => {
    return (sourceFile) => {
      const exportModifier = ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);

      const visitor = (node: ts.Node): ts.Node => {
        if (isTopLevelExportable(node)) {
          const modifiers = ts.getModifiers(node as ts.HasModifiers) || [];
          if (!hasExportModifier(modifiers)) {
            const newNode = updateNodeWithExport(node, modifiers, exportModifier);
            return newNode || node;
          }
        }
        return ts.visitEachChild(node, visitor, context);
      };

      return ts.visitNode(sourceFile, visitor);
    };
  };
}

function isTopLevelExportable(node: ts.Node): boolean {
  return ts.isFunctionDeclaration(node) ||
    ts.isClassDeclaration(node) ||
    ts.isVariableStatement(node) ||
    ts.isInterfaceDeclaration(node) ||
    ts.isTypeAliasDeclaration(node) ||
    ts.isEnumDeclaration(node) ||
    ts.isModuleDeclaration(node);
}

function hasExportModifier(modifiers: readonly ts.Modifier[]): boolean {
  return modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
}

function hasDeclareModifier(modifiers: readonly ts.Modifier[]): boolean {
  return modifiers.some(m => m.kind === ts.SyntaxKind.DeclareKeyword);
}

function handleClassModifiers(existingModifiers: readonly ts.Modifier[]): ts.Modifier[] {
  const newModifiers = [...existingModifiers]
  if (!hasDeclareModifier(existingModifiers)) {
    newModifiers.unshift(ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword));
  }
  if (!hasExportModifier(existingModifiers)) {
    newModifiers.unshift(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
  }
  return newModifiers;
}

function updateNodeWithExport(
  node: ts.Node,
  existingModifiers: readonly ts.Modifier[],
  exportModifier: ts.Modifier
): ts.Node {
  const newModifiers = [exportModifier, ...existingModifiers];

  switch (node.kind) {
    case ts.SyntaxKind.VariableStatement:
      return ts.factory.updateVariableStatement(
        node as ts.VariableStatement,
        newModifiers,
        (node as ts.VariableStatement).declarationList
      );

    case ts.SyntaxKind.FunctionDeclaration:
      const func = node as ts.FunctionDeclaration;
      return ts.factory.updateFunctionDeclaration(
        func,
        newModifiers,
        func.asteriskToken,
        func.name,
        func.typeParameters,
        func.parameters,
        func.type,
        func.body
      );

    case ts.SyntaxKind.ClassDeclaration:
      const cls = node as ts.ClassDeclaration;
      return ts.factory.updateClassDeclaration(
        cls,
        handleClassModifiers(existingModifiers),
        cls.name,
        cls.typeParameters,
        cls.heritageClauses,
        cls.members
      );

    case ts.SyntaxKind.InterfaceDeclaration:
      const intf = node as ts.InterfaceDeclaration;
      return ts.factory.updateInterfaceDeclaration(
        intf,
        newModifiers,
        intf.name,
        intf.typeParameters,
        intf.heritageClauses,
        intf.members
      );

    case ts.SyntaxKind.TypeAliasDeclaration:
      const type = node as ts.TypeAliasDeclaration;
      return ts.factory.updateTypeAliasDeclaration(
        type,
        newModifiers.filter(m => m.kind !== ts.SyntaxKind.DeclareKeyword),
        type.name,
        type.typeParameters,
        type.type
      );

    case ts.SyntaxKind.EnumDeclaration:
      const enm = node as ts.EnumDeclaration;
      return ts.factory.updateEnumDeclaration(
        enm,
        newModifiers,
        enm.name,
        enm.members
      );

    case ts.SyntaxKind.ModuleDeclaration:
      const mod = node as ts.ModuleDeclaration;
      return ts.factory.updateModuleDeclaration(
        mod,
        newModifiers,
        mod.name,
        mod.body
      );

    default:
      return node;
  }
}