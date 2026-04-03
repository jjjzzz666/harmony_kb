
import * as ts from "typescript";

import uiconfig from '../arkui_config_util'

/**
 * Analyzes the base classes of a given class declaration and collects their names recursively.
 *
 * @param classNode - The TypeScript class declaration node to analyze.
 * @param sourceFile - The source file containing the class declaration.
 * @param program - The TypeScript program instance used for type checking.
 *
 * @returns void
 *
 * This function traverses the inheritance hierarchy of the specified class declaration,
 * extracting the names of all base classes. It uses the TypeScript type checker to resolve
 * symbols and declarations of base classes, ensuring accurate identification of inherited types.
 */
export function analyzeBaseClasses(classNode: ts.ClassDeclaration, sourceFile: ts.SourceFile, program: ts.Program) {
    const className = classNode.name!.escapedText!;
    const baseTypes: string[] = [];
    const checker = program.getTypeChecker();


    const extractTypeName = (expr: ts.Expression): string | null => {
        if (ts.isIdentifier(expr)) {
            return expr.text;
        } else if (ts.isPropertyAccessExpression(expr)) {
            return `${extractTypeName(expr.expression)}.${expr.name.text}`;
        }
        return null;
    }

    const findBase = (currentClass: ts.ClassDeclaration) => {
        if (!currentClass.heritageClauses) return;

        for (const heritage of currentClass.heritageClauses) {
            if (heritage.token === ts.SyntaxKind.ExtendsKeyword) {
                for (const type of heritage.types) {
                    const baseName = extractTypeName(type.expression);
                    if (baseName) {
                        baseTypes.push(baseName);
                        const baseSymbol = checker.getSymbolAtLocation(type.expression);
                        if (baseSymbol) {
                            const baseDeclarations = baseSymbol.getDeclarations();
                            if (baseDeclarations) {
                                baseDeclarations.forEach(decl => {
                                    if (ts.isClassDeclaration(decl)) {
                                        findBase(decl);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    };

    findBase(classNode);
    return baseTypes
}

export function getBaseClassName(classNode: ts.ClassDeclaration): string | undefined {
    if (!classNode.heritageClauses) return undefined;

    for (const heritage of classNode.heritageClauses) {
        if (heritage.token === ts.SyntaxKind.ExtendsKeyword) {
            for (const type of heritage.types) {
                const baseName = type.expression.getText();
                return baseName;
            }
        }
    }
    return undefined;
}

export function isComponentHerirage(node: ts.Node): boolean {
    if (!ts.isClassDeclaration(node) && !ts.isInterfaceDeclaration(node)) {
        return false;
    }
    return uiconfig.isUIHeritage(node.name!.escapedText!)
}

export function removeDuplicateMethods(methods: ts.MethodSignature[]): ts.MethodSignature[] {
    const seenSignatures = new Set<string>();

    return methods.filter(method => {
        const signatureKey = getMethodCharacteristic(method);

        if (seenSignatures.has(signatureKey)) {
            return false;
        }

        seenSignatures.add(signatureKey);
        return true;
    });
}

export function getMethodCharacteristic(
    node: ts.MethodSignature
): string {
    const methodName = node.name.getText();

    const params = node.parameters.map((param) => {
        const typeNode = param.type;
        let typeText: string;

        if (typeNode) {
            if (ts.isUnionTypeNode(typeNode)) {
                const types = typeNode.types;
                typeText = types.map((t) => {
                    if (ts.isTypeReferenceNode(t)) {
                        return t.getText();
                    }
                    return t.kind.toString();
                }).join('|') || 'any';
            } else {
                throw new Error("UnExpected type node kind");
            }
        } else {
            throw new Error("UnExpected type node kind");
        }

        return typeText;
    });

    return `${methodName}(${params.join(',')})`;
}

export function mergeUniqueOrdered(arr1: string[], arr2: string[]): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const item of arr1) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    for (const item of arr2) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}
