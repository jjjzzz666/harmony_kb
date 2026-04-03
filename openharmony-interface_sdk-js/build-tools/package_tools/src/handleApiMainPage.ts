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

import { fileDir } from '../model/Constants';
import { PackagingType } from '../model/Enums';
import { deleteFile, getFile, writeFile } from '../model/FileModify';

import fs from 'fs';
import path from 'path';
import commander from 'commander';
import ts from 'typescript';

// 处理的目录类型
const deleteApiSet: Set<string | undefined> = new Set();
let dirType: string = '';

/**
 * 配置参数
 */
export function start() {
  const program = new commander.Command();
  program
    .name('handleApiFile')
    .version('0.0.1');
  program
    .option('--path <string>', 'path name')
    .option('--type <string>', 'handle type')
    .option('--output [string]', 'output path')
    .action((opts) => {
      dirType = opts.type;
      handleApiFiles(opts.path, opts.type, opts.output);
    });
  program.parse(process.argv);
}

/**
 * 处理API文件的入口函数
 *
 * @param {*} rootPath
 * @param {*} type
 */
function handleApiFiles(rootPath: string, type: string, output: string) {
  const allApiFilePathSet: Set<string> = new Set();
  const fileNames = fs.readdirSync(rootPath);
  const apiRootPath = rootPath.replace(/\\/g, '/');
  fileNames.forEach(fileName => {
    const apiPath = path.join(apiRootPath, fileName);
    const stat = fs.statSync(apiPath);
    if (fileDir.NOT_COPY_DIR.includes(fileName)) {
      return;
    }

    if (stat.isDirectory()) {
      getFile.getApiFileName(apiPath, apiRootPath, allApiFilePathSet);
    } else {
      allApiFilePathSet.add(fileName);
    }

  });

  for (const apiRelativePath of allApiFilePathSet) {
    try {
      handleApiFileByType(apiRelativePath as string, rootPath, type, output);
    } catch (error) {
      console.log('error===>', error);
    }
  }
}

/**
 * 根据传入的type值去处理文件
 *
 * @param {*} apiRelativePath
 * @param {*} allApiFilePathSet
 * @param {*} rootPath
 * @param {*} type
 * @returns
 */
function handleApiFileByType(apiRelativePath: string, rootPath: string, type: string, output: string) {
  const fullPath = path.join(rootPath, apiRelativePath);
  const isEndWithEts = getFile.isEtsFile(apiRelativePath);
  const isEndWithTs = getFile.isTsFile(apiRelativePath);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  if (!isEndWithEts && !isEndWithTs) {
    writeFile.rewriteFileType(outputPath, fileContent);
    return;
  }
  if (type === 'ets2' && !(getFile.hasEtsFile(fullPath) && isEndWithTs)) {
    handleFileInSecondType(apiRelativePath, fullPath, type, output);
  } else if (type === 'ets' && !(getFile.hasTsFile(fullPath) && isEndWithEts)) {
    handleFileInFirstType(apiRelativePath, fullPath, type, output);
  }
}

/**
 * 处理文件过滤 if arkts 1.1|1.2|1.1&1.2 定义
 *
 * @param {*} type
 * @param {*} fileContent
 * @returns
 */
function handleArktsDefinition(type: string, fileContent: string) {
  let regx = /\/\*\*\* if arkts 1\.1 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let regx2 = /\/\*\*\* if arkts 1\.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let regx3 = /\/\*\*\* if arkts 1\.1\&1\.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return type === 'ets' ? p1 : '';
  });
  fileContent = fileContent.replace(regx2, (substring, p1) => {
    if (type === 'ets2') {
      return p1.replace(/(\s*)(\*\s\@since)/g, '$1* @arkts 1.2$1$2');
    } else {
      return '';
    }
  });
  fileContent = fileContent.replace(regx3, (substring, p1) => {
    if (type === 'ets') {
      return p1;
    } else {
      return p1.replace(/(\s*)(\*\s\@since)/g, '$1* @arkts 1.2$1$2');
    }
  });
  return fileContent;
}

/**
 * 保留每个api最新一段jsdoc
 *
 * @param {*} fileContent
 * @returns
 */
function saveLatestJsDoc(fileContent: string) {
  let regx = /(\/\*[\s\S]*?\*\*\/)/g;

  fileContent = fileContent.split('').reverse().join('');
  let preset = 0;
  fileContent = fileContent.replace(regx, (substring, p1, offset, str) => {
    if (!/ecnis@\s*\*/g.test(substring)) {
      return substring;
    }
    const preStr = str.substring(preset, offset);
    preset = offset + substring.length;
    if (/\S/g.test(preStr)) {
      return substring;
    }
    return '';
  });
  fileContent = fileContent.split('').reverse().join('');
  return fileContent;
}

/**
 * 处理ets目录
 *
 * @param {string} apiRelativePath
 * @param {string} fullPath
 * @returns
 */
function handleFileInFirstType(apiRelativePath: string, fullPath: string, type: string, output: string) {
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  //删除使用/*** if arkts 1.2 */
  fileContent = handleArktsDefinition(type, fileContent);

  const sourceFile = ts.createSourceFile(path.basename(apiRelativePath), fileContent, ts.ScriptTarget.ES2017, true);
  const secondRegx = /(?:@arkts1.2only|@arkts\s+>=\s*1.2|@arkts\s*1.2)/;
  const thirdRegx = /(?:\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*)/;
  if (sourceFile.statements.length === 0) {
    // reference文件识别不到首段jsdoc，全文匹配1.2标签，有的话直接删除
    if (secondRegx.test(sourceFile.getFullText())) {
      return;
    }
    // 标有@arkts 1.1&1.2的声明文件，处理since版本号，删除@arkts 1.1&1.2标签
    if (thirdRegx.test(sourceFile.getFullText())) {
      fileContent = handleSinceInFirstType(deleteFile.deleteArktsTag(fileContent));
      writeFile.rewriteFileType(outputPath, fileContent);
      return;
    }

    handleNoTagFileInFirstType(sourceFile, outputPath, fileContent);
    return;
  }
  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });


  if (firstNode) {
    const firstJsdocText = getFile.getFileJsdoc(firstNode);
    // 标有1.2标签的声明文件，不拷贝
    if (secondRegx.test(firstJsdocText)) {
      return;
    }
    // 标有@arkts 1.1&1.2的声明文件，处理since版本号，删除@arkts 1.1&1.2标签
    if (thirdRegx.test(firstJsdocText)) {
      fileContent = handleSinceInFirstType(deleteFile.deleteArktsTag(fileContent));
      writeFile.rewriteFileType(outputPath, fileContent);
      return;
    }
  }

  handleNoTagFileInFirstType(sourceFile, outputPath, fileContent);
}

/**
 * 处理1.1目录中无arkts标签的文件
 * @param {*} sourceFile
 * @param {*} outputPath
 * @returns
 */
function handleNoTagFileInFirstType(sourceFile: ts.SourceFile, outputPath: string, fileContent: string) {
  if (path.basename(outputPath) === 'index-full.d.ts') {
    writeFile.rewriteFileType(outputPath, fileContent);
    return;
  }
  fileContent = deleteApi(sourceFile);

  if (fileContent === '') {
    return;
  }
  fileContent = deleteFile.deleteArktsTag(fileContent);
  fileContent = writeFile.joinFileJsdoc(fileContent, sourceFile, dirType);

  fileContent = handleSinceInFirstType(fileContent);
  writeFile.rewriteFileType(outputPath, fileContent);
}


/**
 * 生成1.1目录里文件时，需要去掉since标签里的1.2版本号
 *
 * @param {*} sourceFile
 * @param {*} fullPath
 */
function handleSinceInFirstType(fileContent: string) {
  const regx = /@since\s+arkts\s*(\{.*\})/g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return '@since ' + JSON.parse(p1.replace(/'/g, '"'))['1.1'];
  });
  return fileContent;
}

/**
 * 处理ets2目录
 *
 * @param {string} fullPath 文件完整路径
 * @returns
 */
function handleFileInSecondType(apiRelativePath: string, fullPath: string, type: string, output: string) {
  const secondRegx = /(?:@arkts1.2only|@arkts\s+>=\s*1.2|@arkts\s*1.2)/;
  const thirdRegx = /(?:\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*)/;
  const arktsRegx = /\/\*\*\* if arkts (1.1&)?1.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  let sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  if (!secondRegx.test(fileContent) && !thirdRegx.test(fileContent) && arktsRegx.test(fileContent)) {
    saveApiByArktsDefinition(sourceFile, fileContent, outputPath);
    return;
  }
  //删除使用/*** if arkts 1.2 */
  fileContent = handleArktsDefinition(type, fileContent);
  sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true);
  const regx = /(?:@arkts1.1only|@arkts\s+<=\s+1.1)/;
  if (sourceFile.statements.length === 0) {
    // 有1.2标签的文件，删除标记
    if (secondRegx.test(sourceFile.getFullText())) {
      writeFile.rewriteFileType(outputPath, deleteFile.deleteArktsTag(fileContent));
      return;
    }
    // 处理标有@arkts 1.1&1.2的声明文件
    if (thirdRegx.test(sourceFile.getFullText())) {
      handlehasTagFile(sourceFile, outputPath);
      return;
    }
    // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
    handleNoTagFileInSecondType(sourceFile, outputPath);
    return;
  }

  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });

  if (firstNode) {
    const firstJsdocText = getFile.getFileJsdoc(firstNode);
    if (regx.test(firstJsdocText)) {
      return;
    }
    // 有1.2标签的文件，删除标记
    if (secondRegx.test(firstJsdocText)) {
      writeFile.rewriteFileType(outputPath, deleteFile.deleteArktsTag(fileContent));
      return;
    }
    // 处理标有@arkts 1.1&1.2的声明文件
    if (thirdRegx.test(firstJsdocText)) {
      handlehasTagFile(sourceFile, outputPath);
      return;
    }
  }

  // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
  handleNoTagFileInSecondType(sourceFile, outputPath);
}

/**
 * 处理有@arkts 1.1&1.2标签的文件
 * @param {*} outputPath
 */
function handlehasTagFile(sourceFile: ts.SourceFile, outputPath: string) {
  dirType = PackagingType.ETS2;
  let newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveLatestJsDoc(newContent);
  writeFile.rewriteFileType(outputPath, deleteFile.deleteArktsTag(newContent));
}

/**
 * 处理1.2目录中无arkts标签的文件
 * @param {*} sourceFile
 * @param {*} outputPath
 * @returns
 */
function handleNoTagFileInSecondType(sourceFile: ts.SourceFile, outputPath: string) {
  dirType = PackagingType.NO_TAG_IN_ETS2;
  const arktsTagRegx = /\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*|@arkts\s*1.2/g;
  const fileContent = sourceFile.getFullText();
  // API未标@arkts 1.2或@arkts 1.1&1.2标签，删除文件
  if (!arktsTagRegx.test(fileContent)) {
    if (!fileDir.API_NO_TAGS_FILTER_LIST.includes(path.basename(outputPath))) {
      writeFile.rewriteFileType(outputPath, writeFile.joinFileJsdoc(fileContent, sourceFile, dirType));
    }
    // TODO：api未标标签，删除文件
    return;
  }
  let newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveLatestJsDoc(newContent);
  newContent = deleteFile.deleteArktsTag(newContent);
  writeFile.rewriteFileType(outputPath, newContent);
}

/**
 * 生成1.2目录里文件时，需要去掉since标签里的dynamic版本号
 *
 * @param {*} fileContent
 * @returns
 */
function handleSinceInSecondType(fileContent: string) {
  const regx = /@since\s+arkts\s*(\{.*\})/g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return '@since ' + JSON.parse(p1.replace(/'/g, '"'))['1.2'];
  });
  return fileContent;
}


function getDeletionContent(sourceFile: ts.SourceFile) {
  const deletionContent = deleteApi(sourceFile);
  if (deletionContent === '') {
    return '';
  }
  let newContent = writeFile.joinFileJsdoc(deletionContent, sourceFile, dirType);

  // 处理since版本
  newContent = handleSinceInSecondType(newContent);
  return newContent;
}

function collectDeletionApiName(node: ts.Node) {
  if (!ts.isImportClause(node)) {
    deleteApiSet.add((node as ts.ImportClause).name?.getText());
    return;
  }
  if (ts.isImportDeclaration(node) && (node as ts.ImportDeclaration).importClause?.name) {
    deleteApiSet.add((node as ts.ImportDeclaration).importClause?.name?.escapedText.toString());
    return;
  }
  const namedBindings = node.namedBindings;
  if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
    const elements = namedBindings.elements;
    elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      deleteApiSet.add(exportName);
    });
  }
}

/**
 * 删除API
 * @param {*} sourceFile
 * @returns
 */
function deleteApi(sourceFile: ts.SourceFile) {
  let result = ts.transform(sourceFile, [transformer]);
  const newSourceFile = result.transformed[0];
  if (getFile.isEmptyFile(newSourceFile)) {
    return '';
  }

  // 打印结果
  const printer = ts.createPrinter();
  let fileContent = printer.printFile(newSourceFile as ts.SourceFile);
  result = ts.transform(newSourceFile, [transformExportApi]);
  fileContent = printer.printFile(result.transformed[0] as ts.SourceFile);
  deleteApiSet.clear();
  return fileContent.replace(/export\s*(?:type\s*)?\{\s*\}\s*(;)?/g, '');
}

// 创建 Transformer
const transformer = (context: ts.TransformationContext) => {
  return (rootNode: ts.Node) => {
    const visit = (node: ts.Node) => {
      //struct节点下面会自动生成constructor节点, 置为undefined
      if (node.kind === ts.SyntaxKind.Constructor && node.parent.kind === ts.SyntaxKind.StructDeclaration) {
        return undefined;
      }
      // 判断是否为要删除的变量声明
      if (fileDir.apiNodeTypeArr.includes(node.kind) && getFile.judgeIsDeleteApi(node, dirType)) {
        collectDeletionApiName(node);
        // 删除该节点
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, visit, context);
    };
    return ts.visitNode(rootNode, visit);
  };
};

/**
 * 没有arkts标签，但有if arkts 1.2和1.1&1.2的情况
 * @param {*} sourceFile
 * @param {*} fileContent
 * @param {*} outputPath
 */
function saveApiByArktsDefinition(sourceFile: ts.SourceFile, fileContent: string, outputPath: string) {
  const regx = /\/\*\*\* if arkts (1.1&)?1.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  const regex = /\/\*\r?\n\s*\*\s*Copyright[\s\S]*?limitations under the License\.\r?\n\s*\*\//g;
  const copyrightMessage = fileContent.match(regex)?.[0];
  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });
  let fileJsdoc = firstNode ? getFile.getFileJsdoc(firstNode) + '*/\n' : '';
  let newContent = copyrightMessage + fileJsdoc + Array.from(fileContent.matchAll(regx), match => match[2]).join('\n');

  writeFile.rewriteFileType(outputPath, saveLatestJsDoc(newContent));
}


/**
 * api被删除后，对应的export api也需要被删除
 * @param {*} context
 * @returns
 */
const transformExportApi = (context: ts.TransformationContext) => {
  return (rootNode: ts.Node) => {
    const visit = (node: ts.Node) => {
      //struct节点下面会自动生成constructor节点, 置为undefined
      if (node.kind === ts.SyntaxKind.Constructor && node.parent.kind === ts.SyntaxKind.StructDeclaration) {
        return undefined;
      }
      // 判断是否为要删除的变量声明
      if (ts.isExportAssignment(node) && deleteApiSet.has(node.expression.getText().toString())) {
        return undefined;
      }

      if (ts.isExportSpecifier(node) && deleteApiSet.has(node.name.escapedText.toString())) {
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, visit, context);
    };
    return ts.visitNode(rootNode, visit);
  };
};