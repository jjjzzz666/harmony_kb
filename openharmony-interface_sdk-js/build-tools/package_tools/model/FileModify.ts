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
import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import { PackagingType } from '../model/Enums';
import { packagingEntry } from '../src/PackagingEntry';

export class getFile {
  /**
   * 判断文件是否为空
   * @param {*} node
   */
  public static isEmptyFile(node: ts.Node) {
    let isEmpty = true;
    if (ts.isSourceFile(node) && node.statements) {
      const needExportName = new Set();
      for (let i = 0; i < node.statements.length; i++) {
        const statement = node.statements[i];
        if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
          isEmpty = false;
          break;
        }
        if (this.judgeExportHasImport(statement, needExportName)) {
          continue;
        }
        isEmpty = false;
        break;
      }
    }
    return isEmpty;
  }

  /**
   * 判断import节点和export节点。
   * 当前文本如果还有其他节点则不能删除，
   * 如果只有import和export则判断是否export导出import节点
   *
   * @param {*} statement
   * @param {*} needExportName
   * @returns
   */
  public static judgeExportHasImport(statement: ts.Statement, needExportName: Set<any>) {
    if (ts.isImportDeclaration(statement)) {
      this.processImportDeclaration(statement, needExportName);
      return true;
    } else if (ts.isExportAssignment(statement) &&
      !needExportName.has(statement.expression.getText().toString())) {
      return true;
    } else if (ts.isExportDeclaration(statement)) {
      return !statement.exportClause?.elements.some((element) => {
        const exportName = element.propertyName ?
          element.propertyName.escapedText.toString() :
          element.name.escapedText.toString();
        return needExportName.has(exportName);
      });
    }
    return false;
  }

  /**
   *
   * @param { string } apiPath 需要处理的api文件所在路径
   * @param { string } rootPath ets文件夹路径
   * @returns { Set<string> } 需要处理的api文件的相对于ets目录的路径
   */
  public static getApiFileName(apiPath: string, rootPath: string, allApiFilePathSet: Set<string>) {
    const apiFilePathSet = new Set();
    const fileNames = fs.readdirSync(apiPath);

    fileNames.forEach(fileName => {
      const apiFilePath = path.join(apiPath, fileName).replace(/\\/g, '/');
      const stat = fs.statSync(apiFilePath);

      if (stat.isDirectory()) {
        this.getApiFileName(apiFilePath, rootPath, allApiFilePathSet);
      } else {
        const apiRelativePath = apiFilePath.replace(rootPath, '');
        allApiFilePathSet.add(apiRelativePath);
      }
    });

    return apiFilePathSet;
  }

  public static processImportDeclaration(statement: ts.Statement, needExportName: Set<string>) {
    const importClause = statement.importClause;
    if (!ts.isImportClause(importClause)) {
      return;
    }
    if (importClause.name) {
      needExportName.add(importClause.name.escapedText.toString());
    }
    const namedBindings = importClause.namedBindings;
    if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
      const elements = namedBindings.elements;
      elements.forEach((element) => {
        const exportName = element.propertyName ?
          element.propertyName.escapedText.toString() :
          element.name.escapedText.toString();
        needExportName.add(exportName);
      });
    }
  }

  /**
   *
   * @param { string } path 需要处理的api文件所在路径
   * @returns { boolean } 文件是否是ets类型
   */
  public static isEtsFile(path: string) {
    return path.endsWith('d.ets');
  }

  /**
   *
   * @param { string } path 需要处理的api文件所在路径
   * @returns { boolean } 文件是否是ts类型
   */
  public static isTsFile(path: string) {
    return path.endsWith('d.ts');
  }

  /**
   *
   * @param { string } path 需要处理的api文件所在路径
   * @returns { boolean } 验证是否存在ets类型文件
   */
  public static hasEtsFile(path: string) {
    // 为StateManagement.d.ts设定白名单，在1.2打包的时候在Linux上有大小写不同的重名，碰到直接返回true
    // TODO：白名单提出去
    if (path.includes('StateManagement.d.ts')) {
      console.log('StateManagement.d.ts is in white list, return true. path = ', path);
      return true;
    } else {
      return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ets'));
    }
  }

  /**
   *
   * @param { string } path 需要处理的api文件所在路径
   * @returns { boolean } 验证是否存在ts类型文件
   */
  public static hasTsFile(path: string) {
    return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ts'));
  }

  /**
   * 判断新生成的文件内容有没有版权头
   *
   * @param {*} fileText 新生成的文件内容
   * @returns
   */
  public static hasCopyright(fileText: string) {
    return /http(\:|\?:)\/\/www(\.|\/)apache\.org\/licenses\/LICENSE\-2\.0 | Copyright\s*\(c\)/gi.test(fileText);
  }

  /**
   * 判断node节点中是否有famodelonly/deprecated/arkts <=1.1标签
   *
   * @param {*} node
   * @returns
   */
  public static judgeIsDeleteApi(node: ts.Node, dirType: string) {
    const notesContent = node.getFullText().replace(node.getText(), '').replace(/[\s]/g, '');
    const notesArr = notesContent.split(/\/\*\*/);
    const notesStr = notesArr[notesArr.length - 1];
    const sinceArr = notesStr.match(/@since\d+/);
    let sinceVersion = 20;

    if (dirType === PackagingType.ETS) {
      return /@arkts1.2/g.test(notesStr);
    }

    if (sinceArr) {
      sinceVersion = Number(sinceArr[0].replace('@since', ''));
    }

    if (dirType === PackagingType.ETS2) {
      return (/@deprecated/g.test(notesStr) && sinceVersion < 20) || /@arkts<=1.1/g.test(notesStr);
    }

    if (dirType === PackagingType.NO_TAG_IN_ETS2) {
      return !/@arkts1.2|@arkts1.1&1.2/g.test(notesStr);
    }

    return false;
  }


  /**
   * @param firstNode 获取的第一个node节点
   * @returns fileJSDoc
   */
  public static getFileJsdoc(firstNode: ts.Node) {
    const firstNodeJSDoc = firstNode.getFullText().replace(firstNode.getText(), '');
    const jsdocs = firstNodeJSDoc.split('*/');
    let fileJSDoc = '';
    for (let i = 0; i < jsdocs.length; i++) {
      const jsdoc = jsdocs[i];
      if (/\@file/.test(jsdoc)) {
        fileJSDoc = jsdoc;
        break;
      }
    }
    return fileJSDoc;
  }
}

export class writeFile {
  /**
   *
   * @param { string } path 输出文件的路径
   * @param { string } path 需要文件内容
   */
  public static rewriteFileType(outputPath: string, fileContent: string) {
    const outputDir = path.dirname(outputPath);
    let newPath = outputPath;
    let dirType = '';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (dirType !== PackagingType.ETS && getFile.isTsFile(outputPath)) {
      newPath = outputPath.replace('.d.ts', '.d.ets');
    }
    fs.writeFileSync(newPath, fileContent);
  }

  /**
   * 添加use static字符串
   *
   * @param {*} fileContent 文件内容
   * @param {*} copyrightMessage 版权头内容
   * @returns
   */
  public static addStaticString(fileContent: string, copyrightMessage: string) {
    const hasStaticMessage = /use\s+static/g.test(fileContent);
    const regex = /\/\*\r?\n\s*\*\s*Copyright[\s\S]*?limitations under the License\.\r?\n\s*\*\//g;
    const staticMessage = 'use static';
    let newContent = fileContent;
    if (!hasStaticMessage) {
      const newfileJsdoc = `${copyrightMessage}'${staticMessage}'\r\n`;
      newContent = newContent.replace(regex, newfileJsdoc);
    }
    return newContent;
  }

  /**
   * 拼接上被删除的文件注释
   *
   * @param {*} deletionContent
   * @param {*} sourceFile
   * @param {*} dirType
   * @returns
   */
  public static joinFileJsdoc(deletionContent: string, sourceFile: ts.Node, dirType: string) {
    const fileJsdoc = sourceFile.getFullText().replace(sourceFile.getText(), '');
    const copyrightMessage = getFile.hasCopyright(fileJsdoc.split('*/')[0]) ? fileJsdoc.split('*/')[0] + '*/\r\n' : '';
    const regx = /@kit | @file/g;
    let kitMessage = '';

    if (regx.test(fileJsdoc)) {
      kitMessage = fileJsdoc.split('*/')[1] + '*/\r\n';
    }
    let newContent = deletionContent;
    const isHasCopyright = getFile.hasCopyright(deletionContent);

    if (!isHasCopyright && !regx.test(deletionContent)) {
      newContent = copyrightMessage + kitMessage + deletionContent;
    } else if (!isHasCopyright) {
      newContent = copyrightMessage + deletionContent;
    } else if (isHasCopyright && !/@kit | @file/g.test(deletionContent)) {
      const joinFileJsdoc = copyrightMessage + kitMessage;
      newContent = deletionContent.replace(copyrightMessage, joinFileJsdoc);
    }

    if (dirType !== PackagingType.ETS) {
      // TODO：添加use static字符串
    }
    return newContent;
  }
}

export class deleteFile {
  /**
   * 删除指定的arkts标签
   *
   * @param {*} fileContent 文件内容
   * @param {*} regx 删除的正则表达式
   * @returns
   */
  public static deleteArktsTag(fileContent: string) {
    const arktsTagRegx = /\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*|\*\s*@arkts\s*1.2s*(\r|\n)\s*/g;
    fileContent = fileContent.replace(arktsTagRegx, (substring, p1) => {
      return '';
    });
    return fileContent;
  }

  public static deleteSameNameFile(fullPath: string) {
    try {
      fs.unlinkSync(fullPath);
    } catch (error) {
      console.error('delete file failed: ', error);
    }
  }
}