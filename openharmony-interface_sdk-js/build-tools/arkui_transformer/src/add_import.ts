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
import uiconfig from './arkui_config_util';
import path from 'path';
import { ComponentFile } from "./component_file";

export function addImportTransformer(): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        return (sourceFile) => {
            const [updatedSource, targetImport] = createTargetImport(sourceFile, context);
            const insertPosition = findBestInsertPosition(updatedSource);

            const newStatements = [
                ...updatedSource.statements.slice(0, insertPosition),
                ...targetImport,
                ...updatedSource.statements.slice(insertPosition)
            ];

            return ts.factory.updateSourceFile(
                updatedSource,
                newStatements,
                updatedSource.isDeclarationFile,
                updatedSource.referencedFiles,
                updatedSource.typeReferenceDirectives,
                updatedSource.hasNoDefaultLib,
                updatedSource.libReferenceDirectives
            );
        };
    };
}

function findBestInsertPosition(sourceFile: ts.SourceFile): number {
    let lastImportIndex = -1;
    sourceFile.statements.forEach((stmt, index) => {
        if (ts.isImportDeclaration(stmt)) {
            lastImportIndex = index;
        }
    });

    if (lastImportIndex !== -1) {
        return lastImportIndex + 1;
    }

    return 0;
}

function handleImportDeclaration(node: ts.ImportDeclaration): [ts.Node, boolean] {
    if (node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
        const moduleText = node.moduleSpecifier.text;
        const haveCommon = moduleText.includes("common");
        if (uiconfig.isComponentFile(moduleText)) {
            const importClause = node.importClause;
            const uiprefixImports: Set<string> = new Set
            if (importClause && ts.isImportClause(importClause) && importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
                const namedImports = importClause.namedBindings.elements;
                const existingImports = namedImports.map((element) => element.name.text);
                if (moduleText.includes("common")) {
                    uiprefixImports.add('AttributeModifier');
                    uiprefixImports.add('CommonMethod');
                }

                const addedImports = Array.from(uiprefixImports).filter((im) => !existingImports.includes(im));
                const pureModule = path.basename(moduleText)
                const updatedName = ComponentFile.snake2Camel(pureModule, true)
                const updatedModuleSpecifier = ts.factory.createStringLiteral(moduleText.replace(pureModule, updatedName));
                const updatedNode = ts.factory.updateImportDeclaration(
                    node,
                    undefined,
                    ts.factory.updateImportClause(
                        importClause,
                        importClause.isTypeOnly,
                        importClause.name,
                        ts.factory.updateNamedImports(
                            importClause.namedBindings,
                            [
                                ...namedImports,
                                ...addedImports.map(im => { return ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(im)) }),
                            ]
                        )
                    ),
                    updatedModuleSpecifier,
                    undefined
                );
                return [updatedNode, haveCommon]
            } else {
                throw new Error("Unexpected import clause structure");
            }
        }
    }
    return [node, false];
}

function createTargetImport(sourceFile: ts.SourceFile, context: ts.TransformationContext): [ts.SourceFile, ts.ImportDeclaration[]] {
    const targetImport: ts.ImportDeclaration[] = []

    const memoImport = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(
            false,
            undefined,
            ts.factory.createNamedImports([
                ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier('Memo'))
            ])
        ),
        ts.factory.createStringLiteral('./../incremental/annotation')
    );
    targetImport.push(memoImport);

    const customBuilderImport = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(
            false,
            undefined,
            ts.factory.createNamedImports([
                ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("ComponentBuilder"))
            ])
        ),
        ts.factory.createStringLiteral('./builder')
    );
    targetImport.push(customBuilderImport);

    let haveCommonImportFlag = false;
    const newSource = ts.visitEachChild(sourceFile, (node) => {
        if (ts.isImportDeclaration(node)) {
            const [transNode, flag] = handleImportDeclaration(node)!;
            haveCommonImportFlag = flag ? flag : haveCommonImportFlag
            return transNode
        }
        return node;
    }, context)

    if (!haveCommonImportFlag) {
        const commonImport = ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                false,
                undefined,
                ts.factory.createNamedImports([
                    ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("AttributeModifier")),
                    ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("CommonMethod")),
                ])
            ),
            ts.factory.createStringLiteral("./common"),
            undefined
        )
        targetImport.push(commonImport)
    }
    return [newSource, targetImport]
}
