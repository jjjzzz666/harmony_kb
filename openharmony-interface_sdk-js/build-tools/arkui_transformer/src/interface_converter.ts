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

import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { assert } from 'console';
import uiconfig from './arkui_config_util';
import { ComponentFile } from './component_file';
import { analyzeBaseClasses, isComponentHerirage, getBaseClassName, removeDuplicateMethods, mergeUniqueOrdered } from './lib/attribute_utils';

function readLangTemplate(): string {
    return fs.readFileSync('./pattern/arkts_component_decl.pattern', 'utf8');
}

function extractSignatureComment(
    signature: ts.CallSignatureDeclaration,
    sourceFile: ts.SourceFile
): string {
    const jsDoc = (signature as any).jsDoc?.[0] as ts.JSDoc | undefined;
    if (!jsDoc) return '';


    const commentText = sourceFile.text
        .slice(jsDoc.getStart(sourceFile), jsDoc.getEnd());

    return commentText.split('\n').map((l, index) => {
        if (index == 0) {
            return l.trimStart();
        }
        return ' ' + l.trimStart();
    }).join('\n');
}

interface ComponnetFunctionInfo {
    sig: string[],
    comment: string;
}

interface ComponentPram {
    name: string,
    type: string[],
    isOptional: boolean,
}

function getAllInterfaceCallSignature(node: ts.InterfaceDeclaration, originalCode: ts.SourceFile, mergeCallSig: boolean = false): Array<ComponnetFunctionInfo> {
    const signatureParams: Array<string[]> = [];
    const comments: string[] = [];
    const paramList: Array<ComponentPram[]> = [];

    node.members.forEach(member => {
        if (ts.isCallSignatureDeclaration(member)) {
            const currentSignature: string[] = [];
            const currentParam: ComponentPram[] = [];
            const comment = extractSignatureComment(member, originalCode);
            comments.push(comment);

            member.parameters.forEach(param => {
                currentSignature.push(param.getText(originalCode));
                currentParam.push({ name: (param.name as ts.Identifier).escapedText as string, type: [param.type!.getText(originalCode)], isOptional: !!param.questionToken });
            });
            signatureParams.push(currentSignature);
            paramList.push(currentParam);
        }
    });

    const result: Array<ComponnetFunctionInfo> = new Array;

    if (mergeCallSig) {
        const mergedParamList: Array<ComponentPram> = [];
        paramList.forEach((params, _) => {
            params.forEach((param, index) => {
                if (!mergedParamList[index]) {
                    mergedParamList.push(param);
                    if (index > 0) {
                        (mergedParamList[index] as ComponentPram).isOptional = true;
                    }
                } else {
                    mergedParamList[index] = { name: param.name, type: mergeUniqueOrdered(mergedParamList[index].type, param.type), isOptional: mergedParamList[index].isOptional || param.isOptional };
                }
            });
        });
        const mergedSignature: string[] = [];
        mergedParamList.forEach((param, index) => {
            mergedSignature.push(`${param.name}${param.isOptional ? '?' : ''}: ${param.type.join(' | ')}`);
        });
        result.push({
            sig: mergedSignature,
            comment: ''
        });
    } else {
        for (let i = 0; i < signatureParams.length; i++) {
            result.push({ sig: signatureParams[i], comment: comments[i] });
        }
    }
    return result;
}

function handleComponentInterface(node: ts.InterfaceDeclaration, file: ComponentFile) {
    const result = getAllInterfaceCallSignature(node, file.sourceFile, !uiconfig.useMemoM3);
    const declPattern = readLangTemplate();
    const declComponentFunction: string[] = [];
    const attributeName = node.name!.escapedText as string;
    const componentName = attributeName.replace(/Interface/g, '');
    result.forEach(p => {
        declComponentFunction.push(declPattern
            .replace(/%COMPONENT_NAME%/g, componentName)
            .replace(/%FUNCTION_PARAMETERS%/g, p.sig?.map(it => `${it}, `).join("") ?? "")
            .replace(/%COMPONENT_COMMENT%/g, p.comment));
    });
    return declComponentFunction.join('\n');
}

function updateMethodDoc(node: ts.MethodDeclaration): ts.MethodDeclaration {
    const returnType = ts.factory.createThisTypeNode();
    if ('jsDoc' in node) {
        const paramNameType: Map<string, ts.TypeNode> = new Map();
        node.parameters.forEach(param => {
            paramNameType.set((param.name as ts.Identifier).escapedText!, param.type!);
        });
        const jsDoc = node.jsDoc as ts.JSDoc[];
        const updatedJsDoc = jsDoc.map((doc) => {
            const updatedTags = (doc.tags || []).map((tag: ts.JSDocTag) => {
                if (tag.tagName.escapedText === 'returns') {
                    return ts.factory.updateJSDocReturnTag(
                        tag as ts.JSDocReturnTag,
                        tag.tagName,
                        ts.factory.createJSDocTypeExpression(returnType),
                        tag.comment
                    );
                }
                if (tag.tagName.escapedText === 'param') {
                    const paramTag = tag as ts.JSDocParameterTag;
                    return ts.factory.updateJSDocParameterTag(
                        paramTag,
                        paramTag.tagName,
                        paramTag.name,
                        paramTag.isBracketed,
                        ts.factory.createJSDocTypeExpression(paramNameType.get((paramTag.name as ts.Identifier).escapedText!)!),
                        paramTag.isNameFirst,
                        paramTag.comment
                    );
                }
                return tag;
            });
            return ts.factory.updateJSDocComment(doc, doc.comment, updatedTags);
        });
        (node as any).jsDoc = updatedJsDoc;
    }
    return node;
}

function handleOptionalType(paramType: ts.TypeNode, wrapUndefined: boolean = true): ts.TypeNode {
    if (!ts.isTypeReferenceNode(paramType)) {
        return paramType;
    }
    const typeName = (paramType.typeName as ts.Identifier).escapedText;

    const wrapUndefinedOp = (type: ts.TypeNode) => {
        if (!wrapUndefined) {
            return type;
        }
        return ts.factory.createUnionTypeNode([
            ...(ts.isUnionTypeNode(type) ? type.types : [type]),
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
        ]);
    };

    // Check if the parameter type is Optional<XX>
    if (typeName === 'Optional' && paramType.typeArguments?.length === 1) {
        const innerType = paramType.typeArguments[0];
        return wrapUndefinedOp(innerType);
    }
    return wrapUndefinedOp(paramType);
}

function handleAttributeMember(node: ts.MethodDeclaration): ts.MethodSignature {
    const updatedParameters = node.parameters.map(param => {
        const paramType = param.type;

        // Ensure all other parameters are XX | undefined
        if (paramType) {
            if (ts.isTypeReferenceNode(paramType)) {
                return ts.factory.updateParameterDeclaration(
                    param,
                    undefined,
                    param.dotDotDotToken,
                    param.name,
                    param.questionToken,
                    handleOptionalType(paramType),
                    param.initializer
                );
            } else if (ts.isUnionTypeNode(paramType)) {
                const removeOptionalTypes = paramType.types.map(type => {
                    return handleOptionalType(type, false);
                });
                // Check if the union type already includes undefined
                const hasUndefined = removeOptionalTypes.some(
                    type => type.kind === ts.SyntaxKind.UndefinedKeyword
                );

                if (!hasUndefined) {
                    const updatedType = ts.factory.createUnionTypeNode([
                        ...removeOptionalTypes,
                        ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
                    ]);

                    return ts.factory.updateParameterDeclaration(
                        param,
                        undefined,
                        param.dotDotDotToken,
                        param.name,
                        param.questionToken,
                        updatedType,
                        param.initializer
                    );
                }
            } else {
                // If not a union type, add | undefined
                const updatedType = ts.factory.createUnionTypeNode([
                    paramType,
                    ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
                ]);

                return ts.factory.updateParameterDeclaration(
                    param,
                    undefined,
                    param.dotDotDotToken,
                    param.name,
                    param.questionToken,
                    updatedType,
                    param.initializer
                );
            }
        }

        return param;
    });


    const returnType = ts.factory.createThisTypeNode();
    const methodSignature = ts.factory.createMethodSignature(
        undefined,
        node.name,
        node.questionToken,
        node.typeParameters,
        updatedParameters,
        returnType
    );

    return methodSignature;
}

function handleHeritageClause(node: ts.NodeArray<ts.HeritageClause> | undefined): ts.HeritageClause[] {
    const heritageClauses: ts.HeritageClause[] = [];
    if (!node) {
        return heritageClauses;
    }
    node.forEach(clause => {
        const types = clause.types.map(type => {
            if (ts.isExpressionWithTypeArguments(type) &&
                ts.isIdentifier(type.expression) && type.typeArguments) {

                return ts.factory.updateExpressionWithTypeArguments(
                    type,
                    type.expression,
                    [],
                );
            }
            return type;
        });
        const newClause = ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, types);
        heritageClauses.push(newClause);
    });
    return heritageClauses;
}

function handleAttributeModifier(node: ts.ClassDeclaration, members: ts.MethodSignature[]) {
    if (!isComponentAttribute(node)) {
        members.forEach(m => {
            if ((m.name as ts.Identifier).escapedText === 'attributeModifier') {
                members.splice(members.indexOf(m), 1);
            }
        });
        return;
    }
    members.push(
        ts.factory.createMethodSignature(
            undefined,
            ts.factory.createIdentifier("attributeModifier"),
            undefined,
            undefined,
            [ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                ts.factory.createIdentifier("modifier"),
                undefined,
                ts.factory.createUnionTypeNode([
                    ts.factory.createTypeReferenceNode(
                        ts.factory.createIdentifier("AttributeModifier"),
                        [ts.factory.createTypeReferenceNode(
                            node.name!,
                            undefined
                        )]
                    ),
                    ts.factory.createTypeReferenceNode(
                        ts.factory.createIdentifier("AttributeModifier"),
                        [ts.factory.createTypeReferenceNode(
                            ts.factory.createIdentifier("CommonMethod"),
                            undefined
                        )]
                    ),
                    ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)
                ]),
                undefined
            )],
            ts.factory.createThisTypeNode()
        )
    );
}

function transformComponentAttribute(node: ts.ClassDeclaration): ts.Node[] {
    const members = node.members.map(member => {
        if (!ts.isMethodDeclaration(member)) {
            return undefined;
        }
        return handleAttributeMember(member);
    }).filter((member): member is ts.MethodSignature => member !== undefined);

    const filetredMethos = removeDuplicateMethods(members);

    if (uiconfig.shouldHaveAttributeModifier(node.name!.escapedText as string)) {
        handleAttributeModifier(node, filetredMethos);
    }

    const exportModifier = ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);
    const delcareModifier = ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword);

    const heritageClauses = handleHeritageClause(node.heritageClauses);

    const noneUIAttribute = ts.factory.createInterfaceDeclaration(
        [exportModifier, delcareModifier],
        node.name as ts.Identifier,
        [],
        heritageClauses,
        filetredMethos
    );
    return [noneUIAttribute];
}

function getLeadingSpace(line: string): string {
    let leadingSpaces = '';
    for (const char of line) {
        if (char === ' ') {
            leadingSpaces += char;
        } else {
            break;
        }
    }
    return leadingSpaces;
}

function extractMethodName(code: string): string | undefined {
    const match = code.match(/^\s*([^(]+)/);
    if (!match) return undefined;
    return match[1].trim();
}

function addAttributeMemo(node: ts.ClassDeclaration, componentFile: ComponentFile) {
    const originalSource = componentFile.sourceFile;
    const commentRanges = ts.getLeadingCommentRanges(originalSource.text, node.pos);
    const classStart = commentRanges?.[0]?.pos ?? node.getStart(originalSource);
    const classEnd = node.getEnd();
    const originalCode = originalSource.text.substring(classStart, classEnd).split('\n');

    const functionSet: Set<string> = new Set();
    node.members.forEach(m => {
        functionSet.add((m.name! as ts.Identifier).escapedText!);
    });

    const updatedCode: string[] = [];
    originalCode.forEach(l => {
        const name = extractMethodName(l);
        if (!name) {
            updatedCode.push(l);
            return;
        }
        if (functionSet.has(name)) {
            updatedCode.push(getLeadingSpace(l) + '@Memo');
        }
        updatedCode.push(l);
    });
    const attributeName = node.name!.escapedText!;
    const superInterface = getBaseClassName(node);
    componentFile.appendAttribute(updatedCode.join('\n')
        .replace(`export declare interface ${attributeName}`, `export declare interface UI${attributeName}`)
        .replace(`extends ${superInterface}`, `extends UI${superInterface}`)
    );
}

function isComponentAttribute(node: ts.Node) {
    if (!(ts.isClassDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    return uiconfig.isComponent(node.name.escapedText, 'Attribute');
}

function isComponentInterface(node: ts.Node) {
    if (!(ts.isInterfaceDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    return uiconfig.isComponent(node.name.escapedText, 'Interface');
}

export function addMemoTransformer(componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        const visit: ts.Visitor = (node) => {
            if (isComponentHerirage(node)) {
                addAttributeMemo(node as ts.ClassDeclaration, componentFile);
            }
            return ts.visitEachChild(node, visit, context);
        };
        return (sourceFile) => { componentFile.sourceFile = sourceFile; return ts.visitNode(sourceFile, visit); };
    };
}

export function interfaceTransformer(program: ts.Program, componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        const visit: ts.Visitor = (node) => {
            if (isComponentInterface(node)) {
                componentFile.appendFunction(handleComponentInterface(node as ts.InterfaceDeclaration, componentFile));
                return undefined;
            }
            if (isComponentHerirage(node)) {
                return transformComponentAttribute(node as ts.ClassDeclaration);
            }
            return ts.visitEachChild(node, visit, context);
        };

        return (sourceFile) => ts.visitNode(sourceFile, visit);
    };
}

export function componentInterfaceCollector(program: ts.Program, componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        const visit: ts.Visitor = (node) => {
            if (isComponentAttribute(node)) {
                const attributeName = (node as ts.ClassDeclaration).name!.escapedText as string;
                componentFile.componentName = attributeName.replace(/Attribute/g, '');
                const baseTypes = analyzeBaseClasses(node as ts.ClassDeclaration, componentFile.sourceFile, program);
                uiconfig.addComponentAttributeHeritage([attributeName, ...baseTypes]);
            }
            return ts.visitEachChild(node, visit, context);
        };

        return (sourceFile) => ts.visitNode(sourceFile, visit);
    };
}