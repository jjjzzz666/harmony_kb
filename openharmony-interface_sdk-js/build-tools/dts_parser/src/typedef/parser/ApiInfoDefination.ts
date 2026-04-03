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

import ts from 'typescript';
import path from "path";

import { FileUtils } from '../../utils/FileUtils';
import { StringConstant } from '../../utils/Constant';
import { Comment } from './Comment';
import { DecoratorInfo } from './Decorator';
import { JsDocProcessorHelper } from '../../coreImpl/parser/JsDocProcessor';

export enum ApiType {
  SOURCE_FILE = 'SourceFile',
  REFERENCE_FILE = 'Reference',
  PROPERTY = 'Property',
  CLASS = 'Class',
  INTERFACE = 'Interface',
  NAMESPACE = 'Namespace',
  METHOD = 'Method',
  MODULE = 'Module',
  EXPORT = 'Export',
  EXPORT_DEFAULT = 'ExportDefault',
  CONSTANT = 'Constant',
  IMPORT = 'Import',
  DECLARE_CONST = 'DeclareConst',
  ENUM_VALUE = 'EnumValue',
  TYPE_ALIAS = 'TypeAlias',
  PARAM = 'Param',
  ENUM = 'Enum',
  STRUCT = 'Struct',
}

export enum TypeAliasType {
  UNION_TYPE = 'UnionType',
  OBJECT_TYPE = 'ObjectType',
  TUPLE_TYPE = 'TupleType',
  REFERENCE_TYPE = 'ReferenceType',
}

export class BasicApiInfo {
  private node: ts.Node | undefined = undefined; //astnode节点
  filePath: string = ''; // api所在文件的路径
  apiType: ApiType = '' as ApiType; // api的类型
  // api的定义语句，如果为namespace、class、interface、enum等节点的话，则仅为定义的那行
  definedText: string = '';
  pos: ts.LineAndCharacter = { line: -1, character: -1 }; // api所在的位置信息
  parentApi: BasicApiInfo | undefined = undefined; // 定义api节点的父节点的api信息
  isExport: boolean = false; // api节点是否有export关键字进行导出
  apiName: string = ''; // api的名称
  hierarchicalRelations: string[] = []; // api所属的层级关系
  decorators: DecoratorInfo[] | undefined = undefined; //decorators修饰器集合
  isStruct: boolean = false; //是否为structDeclaration内部api
  syscap: string = '';
  currentVersion = '-1';
  jsDocText: string = '';
  isJoinType: boolean = false;
  genericInfo: GenericInfo[] = [];
  parentApiType: string = '';
  fileAbsolutePath: string = ''; //绝对路径
  isSameNameFunction: boolean = false; //是否为同名API

  constructor(apiType: string = '', node: ts.Node, parentApi: BasicApiInfo | undefined) {
    this.node = node;
    this.setParentApi(parentApi);
    this.setParentApiType(parentApi?.getApiType());
    if (parentApi) {
      this.setFilePath(parentApi.getFilePath());
      this.setFileAbsolutePath(parentApi.getFileAbsolutePath());
      this.setIsStruct(parentApi.getIsStruct());
    }
    this.setApiType(apiType);
    const sourceFile: ts.SourceFile = node.getSourceFile();
    const start: number = node.getStart();
    const pos: ts.LineAndCharacter = sourceFile.getLineAndCharacterOfPosition(start);
    pos.character++;
    pos.line++;
    this.setPos(pos);
    if (node.decorators) {
      node.decorators.forEach((decorator: ts.Decorator) => {
        this.addDecorators([new DecoratorInfo(decorator)]);
      });
    }
  }

  getNode(): ts.Node | undefined {
    return this.node;
  }

  removeNode(): void {
    this.node = undefined;
  }

  setFilePath(fileFilePath: string): void {
    this.filePath = fileFilePath;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setFileAbsolutePath(absolutePath: string): void {
    this.fileAbsolutePath = absolutePath;
  }

  getFileAbsolutePath(): string {
    return this.fileAbsolutePath;
  }

  setApiType(apiType: string): void {
    this.apiType = apiType as ApiType;
  }

  getApiType(): string {
    return this.apiType;
  }

  setDefinedText(definedText: string): void {
    this.definedText = definedText;
  }

  getDefinedText(): string {
    return this.definedText;
  }

  setPos(pos: ts.LineAndCharacter): void {
    this.pos = pos;
  }

  getPos(): ts.LineAndCharacter {
    return this.pos;
  }

  setParentApi(parentApi: BasicApiInfo | undefined): void {
    this.parentApi = parentApi;
  }

  getParentApi(): BasicApiInfo | undefined {
    return this.parentApi;
  }

  setParentApiType(parentApiType: string | undefined): void {
    if (parentApiType) {
      this.parentApiType = parentApiType;
    }
  }

  getParentApiType(): string {
    return this.parentApiType;
  }

  setIsExport(isExport: boolean): void {
    this.isExport = isExport;
  }

  getIsExport(): boolean {
    return this.isExport;
  }

  setApiName(apiName: string): void {
    this.apiName = apiName;
    if (this.parentApi) {
      this.setHierarchicalRelations(this.parentApi.getHierarchicalRelations());
    }
    this.addHierarchicalRelation([apiName]);
  }

  getApiName(): string {
    return this.apiName;
  }

  setHierarchicalRelations(hierarchicalRelations: string[]): void {
    this.hierarchicalRelations = [...hierarchicalRelations];
  }

  getHierarchicalRelations(): string[] {
    return this.hierarchicalRelations;
  }

  addHierarchicalRelation(hierarchicalRelation: string[]): void {
    this.hierarchicalRelations.push(...hierarchicalRelation);
  }

  setDecorators(decorators: DecoratorInfo[]): void {
    this.decorators = decorators;
  }

  addDecorators(decorators: DecoratorInfo[]): void {
    if (!this.decorators) {
      this.decorators = [];
    }
    this.decorators.push(...decorators);
  }

  getDecorators(): DecoratorInfo[] | undefined {
    return this.decorators;
  }

  setIsStruct(isStruct: boolean): void {
    this.isStruct = isStruct;
  }

  getIsStruct(): boolean {
    return this.isStruct;
  }

  setSyscap(syscap: string): void {
    this.syscap = syscap;
  }

  getSyscap(): string {
    return this.syscap;
  }

  setCurrentVersion(version: string): void {
    this.currentVersion = version;
  }

  getCurrentVersion(): string {
    return this.currentVersion;
  }

  setJsDocText(jsDocText: string): void {
    this.jsDocText = jsDocText;
  }

  getJsDocText(): string {
    return this.jsDocText;
  }

  setIsJoinType(jsJoinType: boolean): void {
    this.isJoinType = jsJoinType;
  }

  getIsJoinType(): boolean {
    return this.isJoinType;
  }

  setGenericInfo(genericInfo: GenericInfo): void {
    this.genericInfo.push(genericInfo);
  }

  getGenericInfo(): GenericInfo[] {
    return this.genericInfo;
  }

  setIsSameNameFunction(isSameNameFunction: boolean): void {
    this.isSameNameFunction = isSameNameFunction;
  }

  getIsSameNameFunction(): boolean {
    return this.isSameNameFunction;
  }
}

export class ExportDefaultInfo extends BasicApiInfo { }

export class ReferenceInfo extends BasicApiInfo {
  pathName: string = '';

  setPathName(pathName: string): ReferenceInfo {
    this.pathName = pathName;
    return this;
  }

  getPathName(): string {
    return this.pathName;
  }
}

export class ExportDeclareInfo extends BasicApiInfo {
  exportValues: Array<ExportImportValue> = [];

  addExportValues(name: string, type: string): void {
    this.exportValues.push({ key: name, value: type || name });
  }

  getExportValues(): Array<ExportImportValue> {
    return this.exportValues;
  }
}

/**
 * import导入的信息，包含导入的值和路径信息
 */
export class ImportInfo extends BasicApiInfo {
  importValues: Array<ExportImportValue> = [];
  importPath: string = '';

  addImportValue(name: string, type: string): void {
    this.importValues.push({ key: name, value: type || name });
  }

  getImportValues(): Array<ExportImportValue> {
    return this.importValues;
  }

  setImportPath(importPath: string): void {
    this.importPath = importPath;
  }

  getImportPath(): string {
    return this.importPath;
  }
}

export class ApiInfo extends BasicApiInfo {
  jsDocInfos: Comment.JsDocInfo[] = []; // 所有的JsDoc信息

  constructor(apiType: string = '', node: ts.Node, parentApi: BasicApiInfo | undefined) {
    super(apiType, node, parentApi);
    let parentKitInfo: string = 'NA';
    let parentFileTagContent: string = 'NA';
    if (parentApi) {
      parentKitInfo = this.getKitInfoFromParent(parentApi).kitInfo;
      parentFileTagContent = this.getKitInfoFromParent(parentApi).fileTagContent;
    }
    const jsDocInfos: Comment.JsDocInfo[] = JsDocProcessorHelper.processJsDocInfos(
      node,
      apiType,
      parentKitInfo,
      parentFileTagContent
    );
    const jsDocText: string = node
      .getFullText()
      .substring(0, node.getFullText().length - node.getText().length)
      .trim();
    this.setJsDocText(jsDocText);
    this.addJsDocInfos(jsDocInfos);
  }

  getKitInfoFromParent(parentApi: BasicApiInfo): FileTag {
    const parentApiInfo = parentApi as ApiInfo;
    const jsDocInfos: Comment.JsDocInfo[] = parentApiInfo.getJsDocInfos();
    let kitInfo: string | undefined = '';
    let fileTagContent: string = 'NA';
    jsDocInfos.forEach((jsDocInfo: Comment.JsDocInfo) => {
      kitInfo = jsDocInfo.getKit();
      fileTagContent = jsDocInfo.getFileTagContent();
    });
    return { kitInfo, fileTagContent };
  }

  getJsDocInfos(): Comment.JsDocInfo[] {
    return this.jsDocInfos;
  }

  getLastJsDocInfo(): Comment.JsDocInfo | undefined {
    const length: number = this.jsDocInfos.length;
    if (length === 0) {
      return undefined;
    }
    return this.jsDocInfos[length - 1];
  }

  getPenultimateJsDocInfo(): Comment.JsDocInfo | undefined {
    const length: number = this.jsDocInfos.length;
    if (length === 0) {
      return undefined;
    }
    return this.jsDocInfos[length - 2];
  }

  addJsDocInfos(jsDocInfos: Comment.JsDocInfo[]): void {
    if (jsDocInfos.length > 0) {
      this.setCurrentVersion(jsDocInfos[jsDocInfos.length - 1]?.getSince());
    }
    this.jsDocInfos.push(...jsDocInfos);
  }

  addJsDocInfo(jsDocInfo: Comment.JsDocInfo): void {
    this.setCurrentVersion(jsDocInfo.getSince());
    this.jsDocInfos.push(jsDocInfo);
  }
}

export class ClassInfo extends ApiInfo {
  parentClasses: ParentClass[] = []; // 继承的父类
  childApis: BasicApiInfo[] = []; // 子节点的信息

  setParentClasses(parentClass: ParentClass): void {
    this.parentClasses.push(parentClass);
  }

  getParentClasses(): ParentClass[] {
    return this.parentClasses;
  }

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class InterfaceInfo extends ApiInfo {
  parentClasses: ParentClass[] = []; // 继承的父类
  childApis: BasicApiInfo[] = []; // 子节点的信息

  setParentClasses(parentClass: ParentClass): void {
    this.parentClasses.push(parentClass);
  }

  getParentClasses(): ParentClass[] {
    return this.parentClasses;
  }

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class NamespaceInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class StructInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class ModuleInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class EnumInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

/**
 * 属性会包含declare const定义的节点
 */
export class PropertyInfo extends ApiInfo {
  type: string[] = []; // 属性的类型，数组是由于可能为联合类型
  isReadOnly: boolean = false; // 属性是否为只读
  isRequired: boolean = false; // 属性是否为必选
  isStatic: boolean = false; // 属性是否为静态
  typeKind: ts.SyntaxKind = ts.SyntaxKind.Unknown; //type类型的kind值
  typeLocations: ApiInfo[] = []; // 参数、返回值的JsDoc信息
  objLocations: PropertyInfo[] = []; // 匿名类型的JsDoc信息

  constructor(apiType: string = '', node: ts.Node, parentApi: BasicApiInfo | undefined) {
    super(apiType, node, parentApi);
    let propertyNode: PropertyNode = node as PropertyNode;
    this.setTypeKind(propertyNode.type ? propertyNode.type.kind : ts.SyntaxKind.Unknown);
  }

  addType(type: string[]): void {
    this.type.push(...type);
  }

  getType(): string[] {
    return this.type;
  }

  setIsReadOnly(isReadOnly: boolean): void {
    this.isReadOnly = isReadOnly;
  }

  getIsReadOnly(): boolean {
    return this.isReadOnly;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }

  setIsStatic(isStatic: boolean): void {
    this.isStatic = isStatic;
  }

  getIsStatic(): boolean {
    return this.isStatic;
  }

  setTypeKind(typeKind: ts.SyntaxKind | undefined): void {
    this.typeKind = typeKind ? typeKind : ts.SyntaxKind.Unknown;
  }

  getTypeKind(): ts.SyntaxKind {
    return this.typeKind;
  }

  addTypeLocations(typeLocation: ApiInfo): void {
    this.typeLocations.push(typeLocation);
  }

  getTypeLocations(): ApiInfo[] {
    return this.typeLocations;
  }

  setTypeLocations(apiInfos: ApiInfo[]): void {
    this.typeLocations = apiInfos;
  }

  addObjLocations(ObjLocation: PropertyInfo): void {
    this.objLocations.push(ObjLocation);
  }

  getObjLocations(): PropertyInfo[] {
    return this.objLocations;
  }

  setObjLocations(objLocations: PropertyInfo[]): void {
    this.objLocations = objLocations;
  }
}

export class ConstantInfo extends ApiInfo {
  value: string = ''; // 常量的取值

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

/**
 * 使用type关键字定义的节点，归为自定义类型的范畴
 */
export class TypeAliasInfo extends ApiInfo {
  type: string[] = []; // type定义的类型
  typeName: TypeAliasType = '' as TypeAliasType; //type的类型
  returnType: string[] = []; //type类型为function时的返回值
  paramInfos: ParamInfo[] = []; //type类型为function时的参数名和参数类型
  typeIsFunction: boolean = false; //type类型是否为function
  typeLiteralApiInfos: PropertyInfo[] = [];//type类型为匿名对象时的属性数据
  typeIsObject: boolean = false;//type类型是否为匿名对象
  addType(type: string[]): void {
    this.type.push(...type);
  }

  getType(): string[] {
    return this.type;
  }

  setTypeName(typeName: string): TypeAliasInfo {
    this.typeName = typeName as TypeAliasType;
    return this;
  }

  getTypeName(): string {
    return this.typeName;
  }

  setReturnType(returnValue: string[]): void {
    this.returnType.push(...returnValue);
  }

  getReturnType(): string[] {
    return this.returnType;
  }

  setParamInfos(paramInfo: ParamInfo): TypeAliasInfo {
    this.paramInfos.push(paramInfo);
    return this;
  }

  getParamInfos(): ParamInfo[] {
    return this.paramInfos;
  }

  setTypeIsFunction(typeIsFunction: boolean): TypeAliasInfo {
    this.typeIsFunction = typeIsFunction;
    return this;
  }

  getTypeIsFunction(): boolean {
    return this.typeIsFunction;
  }

  setTypeLiteralApiInfos(propertyInfo: PropertyInfo): TypeAliasInfo {
    this.typeLiteralApiInfos.push(propertyInfo);
    return this;
  }

  getTypeLiteralApiInfos(): PropertyInfo[] {
    return this.typeLiteralApiInfos;
  }

  setTypeIsObject(typeIsObject: boolean): TypeAliasInfo {
    this.typeIsObject = typeIsObject;
    return this;
  }

  getTypeIsObject(): boolean {
    return this.typeIsObject;
  }
}

/**
 * type自定义类型为function时，解析参数
 */
export class TypeParamInfo {
  //type类型为function时的参数名
  paramName: string = '';
  //type类型为function时的参数类型
  paramType: string = '';

  setParamName(paramName: string): TypeParamInfo {
    this.paramName = paramName;
    return this;
  }

  getParamName(): string {
    return this.paramName;
  }

  setParamType(paramType: string | undefined): TypeParamInfo {
    if (!paramType) {
      return this;
    }
    this.paramType = paramType;
    return this;
  }

  getParamType(): string {
    return this.paramType;
  }
}

export class EnumValueInfo extends ApiInfo {
  value: string = ''; // 枚举值

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

export class MethodInfo extends ApiInfo {
  callForm: string = ''; // 方法的调用形式
  params: ParamInfo[] = []; // 方法的参数列表
  returnValue: string[] = []; // 方法的返回值类型
  isStatic: boolean = false; // 方法是否是静态
  sync: string = ''; //同步函数标志
  returnValueType: ts.SyntaxKind = ts.SyntaxKind.Unknown;
  typeLocations: ApiInfo[] = []; // 参数、返回值的JsDoc信息
  objLocations: PropertyInfo[] = []; // 匿名类型的JsDoc信息
  isRequired: boolean = false;

  setCallForm(callForm: string): void {
    this.callForm = callForm;
  }

  getCallForm(): string {
    return this.callForm;
  }

  addParam(paramInfo: ParamInfo): void {
    this.params.push(paramInfo);
  }

  getParams(): ParamInfo[] {
    return this.params;
  }

  setReturnValue(returnValue: string[]): void {
    this.returnValue.push(...returnValue);
  }

  getReturnValue(): string[] {
    return this.returnValue;
  }

  setReturnValueType(returnValueType: ts.SyntaxKind): void {
    this.returnValueType = returnValueType;
  }

  getReturnValueType(): ts.SyntaxKind {
    return this.returnValueType;
  }

  setIsStatic(isStatic: boolean): void {
    this.isStatic = isStatic;
  }

  getIsStatic(): boolean {
    return this.isStatic;
  }

  addTypeLocations(typeLocation: ApiInfo): void {
    this.typeLocations.push(typeLocation);
  }

  getTypeLocations(): ApiInfo[] {
    return this.typeLocations;
  }

  setTypeLocations(apiInfos: ApiInfo[]): void {
    this.typeLocations = apiInfos;
  }

  addObjLocations(ObjLocation: PropertyInfo): void {
    this.objLocations.push(ObjLocation);
  }

  getObjLocations(): PropertyInfo[] {
    return this.objLocations;
  }

  setObjLocations(objLocations: PropertyInfo[]): void {
    this.objLocations = objLocations;
  }

  setSync(sync: string): void {
    this.sync = sync;
  }

  getSync(): string {
    return this.sync;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }
}

export class TypeLocationInfo extends Comment.JsDocInfo {
  typeName: string = '';//当前类型名称

  getTypeName(): string {
    return this.typeName;
  }

  setTypeName(typeName: string): void {
    this.typeName = typeName;
  }
}

export class ParamInfo {
  apiType: string = ''; // api的类型为方法参数
  apiName: string = ''; // 参数名
  paramType: ts.SyntaxKind = ts.SyntaxKind.Unknown; // 参数类型的kind
  type: string[] = []; // 参数的类型
  isRequired: boolean = false; // 参数是否必选
  definedText: string = '';
  methodApiInfo: MethodInfo | undefined;
  typeLocations: ApiInfo[] = []; // 参数、返回值的JsDoc信息
  objLocations: PropertyInfo[] = []; // 匿名类型的JsDoc信息
  typeIsObject: boolean = false;//type类型是否为匿名对象

  constructor(apiType: string) {
    this.apiType = apiType;
  }

  getApiType(): string {
    return this.apiType;
  }

  setApiName(apiName: string): void {
    this.apiName = apiName;
  }

  getApiName(): string {
    return this.apiName;
  }

  setType(type: string[]): void {
    this.type.push(...type);
  }

  getParamType(): ts.SyntaxKind {
    return this.paramType;
  }

  setParamType(paramType: ts.SyntaxKind | undefined): void {
    this.paramType = paramType ? paramType : ts.SyntaxKind.Unknown;
  }

  getType(): string[] {
    return this.type;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }

  setDefinedText(definedText: string): void {
    this.definedText = definedText;
  }

  getDefinedText(): string {
    return this.definedText;
  }

  addTypeLocations(typeLocation: ApiInfo): void {
    this.typeLocations.push(typeLocation);
  }

  getTypeLocations(): ApiInfo[] {
    return this.typeLocations;
  }

  setTypeLocations(apiInfos: ApiInfo[]): void {
    this.typeLocations = apiInfos;
  }

  addObjLocations(ObjLocation: PropertyInfo): void {
    this.objLocations.push(ObjLocation);
  }

  getObjLocations(): PropertyInfo[] {
    return this.objLocations;
  }

  setObjLocations(objLocations: PropertyInfo[]): void {
    this.objLocations = objLocations;
  }

  setMethodApiInfo(methodApiInfo: MethodInfo | undefined): void {
    this.methodApiInfo = methodApiInfo;
  }

  getMethodApiInfo(): MethodInfo | undefined {
    return this.methodApiInfo;
  }


}

export class GenericInfo {
  isGenericity: boolean = false;
  genericContent: string = '';

  setIsGenericity(isGenericity: boolean): void {
    this.isGenericity = isGenericity;
  }
  getIsGenericity(): boolean {
    return this.isGenericity;
  }

  setGenericContent(genericContent: string): void {
    this.genericContent = genericContent;
  }

  getGenericContent(): string {
    return this.genericContent;
  }
}

export class ParentClass {
  extendClass: string = '';
  implementClass: string = '';

  setExtendClass(extendClass: string): void {
    this.extendClass = extendClass;
  }

  getExtendClass(): string {
    return this.extendClass;
  }

  setImplementClass(implementClass: string): void {
    this.implementClass = implementClass;
  }

  getImplementClass(): string {
    return this.implementClass;
  }
}

export class ParserParam {
  fileDir: string = '';
  filePath: string = '';
  libPath: string = '';
  sdkPath: string = '';
  rootNames: string[] = [];
  tsProgram: ts.Program = ts.createProgram({
    rootNames: [],
    options: {},
  });
  compilerHost: ts.CompilerHost = ts.createCompilerHost({});
  constructor() { }

  getFileDir(): string {
    return this.fileDir;
  }

  setFileDir(fileDir: string): void {
    this.fileDir = fileDir;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  getLibPath(): string {
    return this.libPath;
  }

  setLibPath(libPath: string): void {
    this.libPath = libPath;
  }

  getSdkPath(): string {
    return this.sdkPath;
  }

  setSdkPath(sdkPath: string): void {
    this.sdkPath = sdkPath;
  }

  getRootNames(): string[] {
    return this.rootNames;
  }

  setRootNames(rootNames: string[]): void {
    this.rootNames = rootNames;
  }

  getTsProgram(): ts.Program {
    return this.tsProgram;
  }

  getETSOptions(componentLibs: Array<string>): any {
    const tsconfig = require('../../config/tsconfig.json');
    const etsConfig = tsconfig.compilerOptions.ets;
    etsConfig.libs = [...componentLibs];
    return etsConfig;
  }

  setProgram(): void {
    const apiLibs: Array<string> = FileUtils.readFilesInDir(this.sdkPath, (name) => {
      return name.endsWith(StringConstant.DTS_EXTENSION) || name.endsWith(StringConstant.DETS_EXTENSION);
    });
    const esLibs: Array<string> = FileUtils.readFilesInDir(this.libPath, (name) => {
      return name.endsWith(StringConstant.DTS_EXTENSION) || name.endsWith(StringConstant.DETS_EXTENSION);
    });
    const compilerOption: ts.CompilerOptions = {
      target: ts.ScriptTarget.ES2017,
      ets: this.getETSOptions([]),
      allowJs: false,
      lib: [...apiLibs, ...esLibs],
      module: ts.ModuleKind.CommonJS,
      baseUrl: "./",
      paths: {
        "@/*": ["./*"]
      },
    };
    this.compilerHost = ts.createCompilerHost(compilerOption);
    // 设置别名
    this.compilerHost.resolveModuleNames = (moduleNames: string[], containingFile: string,
      reusedNames: string[] | undefined, redirectedReference: ts.ResolvedProjectReference | undefined,
      compilerOptions: ts.CompilerOptions): (ts.ResolvedModule | undefined)[] => {
      return moduleNames.map(moduleName => {
        if (process.env.IS_OH === 'true') {
          return ts.resolveModuleName(moduleName, containingFile, compilerOptions, this.compilerHost).resolvedModule;
        }
        const value: ts.ResolvedModule = {
          resolvedFileName: '',
          isExternalLibraryImport: false
        };
        const alias: { [key: string]: string; } = {
          "^(@ohos\\.inner\\.)(.*)$": "../../../base/ets/api/",
          "^(@ohos\\.)(.*)$": "../../../base/ets/api/",
        };
        for (const key in alias) {
          const regex = new RegExp(key);
          if (regex.test(moduleName)) {
            moduleName = moduleName.replace(regex, ($0, $1, $2) => {
              let realPath = '';
              switch ($1) {
                case "@ohos.":
                  realPath = alias[key] + $1 + $2;
                  break;
                case "@ohos\.inner\.":
                  realPath = alias[key] + $2.replace(/\./g, '/');
                  break;
                default:
                  realPath = '';
                  break;
              }
              return realPath;
            });
            break;
          }
        }
        const resolvedFileName: string | undefined = ts.resolveModuleName(moduleName, containingFile, compilerOptions,
          this.compilerHost).resolvedModule?.resolvedFileName;
        if (resolvedFileName) {
          value.resolvedFileName = resolvedFileName;
          value.isExternalLibraryImport = true;
        } else {
          return undefined;
        }
        return value;
      });
    };
    this.tsProgram = ts.createProgram({
      rootNames: [...this.rootNames],
      options: compilerOption,
      host: this.compilerHost
    });
  }
}

export type ExportImportValue = { key: string; value: string; };
export interface NodeProcessorInterface {
  (node: ts.Node, parentApiInfo: BasicApiInfo): BasicApiInfo;
}

export type PropertyNode = ts.PropertyDeclaration | ts.PropertySignature;
export type PropertyTypeNode = ts.TypeNode | ts.Expression | undefined;

export interface ModifierProcessorInterface {
  (propertyInfo: BasicApiInfo): void;
}

export interface FileTag {
  kitInfo: string;
  fileTagContent: string;
}

/**
 * ts中所有方法节点
 */
export type MethodType =
  | ts.MethodDeclaration
  | ts.MethodSignature
  | ts.FunctionDeclaration
  | ts.CallSignatureDeclaration
  | ts.ConstructorDeclaration
  | ts.ConstructSignatureDeclaration;

/**
 * 拥有子节点的class，处理数据时需要addChildApi，获取数据时可以getChildApis
 */
export type ContainerApiInfo = NamespaceInfo | ClassInfo | InterfaceInfo | EnumInfo | ModuleInfo | StructInfo;

/**
 * 拥有引用类型或者匿名对象的class，输出json文件时需要特殊编队objLocations和typeLocations，去除其中的node和parent节点
 */
export type LocationsAPIType = ParamInfo | PropertyInfo | MethodInfo;

/**
 * 将节点强制转换为ContainerApiInfo节点时需要根据ApiType来判断哪些apiInfo节点有childApi
 */
export const containerApiTypes: Set<string> = new Set([
  ApiType.NAMESPACE,
  ApiType.CLASS,
  ApiType.INTERFACE,
  ApiType.ENUM,
  ApiType.MODULE,
  ApiType.STRUCT,
]);

/**
 * 不存在jsdoc信息的节点
 */
export const notJsDocApiTypes: Set<string> = new Set([
  ApiType.SOURCE_FILE,
  ApiType.IMPORT,
  ApiType.EXPORT,
  ApiType.EXPORT_DEFAULT,
  ApiType.MODULE,
  ApiType.REFERENCE_FILE,
]);
