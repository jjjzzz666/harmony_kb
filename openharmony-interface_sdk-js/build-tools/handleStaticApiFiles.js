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

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const commander = require('commander');
// 处理的目录类型
let dirType = '';
const deleteApiSet = new Set();
const importNameSet = new Set();
const ARKTS_FLAG = 'use static';

// 处理的目录类型，ets代表处理的是1.1目录，ets2代表处理的是1.2目录里有@arkts 1.1&1.2标签的文件，
// noTagInEts2代表处理的是1.2目录里无标签的文件
const DirType = {
  'dynamicApi': 'ets',
  'staticApi': 'ets2',
  'staticFile': 'noTagInEts2',
};

const NotNullFilePath = [
  'api',
  'api/@internal/ets',
  'api/arkui/component',
  'arkts',
  'kits',
];

const COMPILER_OPTIONS = {
  target: ts.ScriptTarget.ES2017,
  etsAnnotationsEnable: true
};

const NOT_COPY_DIR = ['build-tools', '.git', '.gitee'];
/**
 * 默认不带标签的since为dynamic，在特殊场景需要将不带标签的处理为static，例如
 * 1、文件名称使用.static.d.ets，接口未添加@since xx static
 * 2、文件名称重复，同时存在.d.ets和.d.ts，.d.ets中接口未添加@since xx static
 */
let defaultIsDynamic = true;

function isEtsFile(path) {
  return path.endsWith('d.ets');
}

function isTsFile(path) {
  return path.endsWith('d.ts');
}

function isStaticFile(path) {
  return path.endsWith('static.d.ets');
}

function hasEtsFile(path) {
  // 为StateManagement.d.ts设定白名单，在1.2打包的时候在Linux上有大小写不同的重名，碰到直接返回true
  if (path.includes('StateManagement.d.ts')) {
    console.log('StateManagement.d.ts is in white list, return true. path = ', path);
    return true;
  } else {
    return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ets'));
  }
}

function hasTsFile(path) {
  return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ts'));
}

function hasStaticFile(path) {
  // 为StateManagement.d.ts设定白名单，在1.2打包的时候在Linux上有大小写不同的重名，碰到直接返回true
  if (path.includes('StateManagement.d.ts')) {
    console.log('StateManagement.d.ts is in white list, return true. path = ', path);
    return true;
  } else {
    return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.static.d.ets'));
  }
}

/**
 * 配置参数
 */
function start() {
  const program = new commander.Command();
  program
    .name('handleApiFile')
    .version('0.0.1');
  program
    .option('--path <string>', 'path name')
    .option('--type <string>', 'handle type')
    .option('--output <string>', 'output path')
    .option('--isPublic <string>', 'is Public')
    .option('--create-keep-file <string>', 'create keep file', 'false')
    .action((opts) => {
      dirType = opts.type;
      handleApiFiles(opts.path, opts.type, opts.output, opts.isPublic, opts.createKeepFile);
    });
  program.parse(process.argv);
}
/**
 * 处理API文件的入口函数
 * 
 * @param {*} rootPath 
 * @param {*} type 
 */
function handleApiFiles(rootPath, type, output, isPublic, createKeepFile) {
  const allApiFilePathSet = new Set();
  const fileNames = fs.readdirSync(rootPath);
  const apiRootPath = rootPath.replace(/\\/g, '/');
  fileNames.forEach(fileName => {
    const apiPath = path.join(apiRootPath, fileName);
    const stat = fs.statSync(apiPath);
    if (NOT_COPY_DIR.includes(fileName)) {
      return;
    }
    if (stat.isDirectory()) {
      getApiFileName(apiPath, apiRootPath, allApiFilePathSet);
    } else {
      allApiFilePathSet.add(fileName);
    }

  });

  for (const apiRelativePath of allApiFilePathSet) {
    try {
      handleApiFileByType(apiRelativePath, rootPath, type, output, isPublic);
    } catch (error) {
      console.log('error===>', error);
    }
  }
  const needCreateKeepFile = createKeepFile.toString() === 'true';
  if (type === DirType.staticApi && needCreateKeepFile) {
    NotNullFilePath.forEach((dir) => {
      const outDir = path.join(output, dir);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
        writeFile(path.join(outDir, '.keep'), ' ');
        return;
      }
      const fileNames = fs.readdirSync(outDir);
      if (fileNames.length === 0) {
        writeFile(path.join(outDir, '.keep'), ' ');
      }
    });
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
function handleApiFileByType(apiRelativePath, rootPath, type, output, isPublic) {
  const fullPath = path.join(rootPath, apiRelativePath);
  const isEndWithEts = isEtsFile(apiRelativePath);
  const isEndWithTs = isTsFile(apiRelativePath);
  const isEndWithStatic = isStaticFile(apiRelativePath);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  defaultIsDynamic = true;
  if (isEndWithStatic) {
    defaultIsDynamic = false;
    if (type === DirType.staticApi) {
      let staticFileCotent = deleteArktsTag(fileContent);
      if (isPublic === 'true') {
        writeFile(outputPath, deleteUnsportedTag(staticFileCotent));
        return;
      } else {
        writeFile(outputPath.replace(/\.static\.d\.ets$/, '.d.ets'), deleteUnsportedTag(staticFileCotent));
        return;
      }
    } else {
      return;
    }
  }

  if (!isEndWithEts && !isEndWithTs) {
    writeFile(outputPath, fileContent);
    return;
  }
  const isCorrectHandleFullpath = isHandleFullPath(fullPath, apiRelativePath, type);
  if (type === DirType.staticApi && isCorrectHandleFullpath) {
    handleFileInStaticApi(apiRelativePath, fullPath, type, output);
  }
}

/**
 * 判断当前的文件路径是否符合当前打包场景，过滤同名文件
 * @param {*} fullPath 
 * @param {*} apiRelativePath 
 * @param {*} type 
 * @returns 
 */
function isHandleFullPath(fullPath, apiRelativePath, type) {
  // 当前文件为.ts结尾文件
  if (isTsFile(apiRelativePath)) {
    if (type === DirType.dynamicApi) {
      return true;
    }
    if (!(hasEtsFile(fullPath)) && !(hasStaticFile(fullPath))) {
      return true;
    }
  }
  // 当前文件为.ets结尾文件
  if (isEtsFile(apiRelativePath)) {
    if (!(hasTsFile(fullPath)) && !(hasStaticFile(fullPath))) {
      return true;
    }
    if (hasTsFile(fullPath) && !(hasStaticFile(fullPath)) && type === DirType.staticApi) {
      return true;
    }
    if (hasStaticFile(fullPath) && !(hasTsFile(fullPath)) && type === DirType.dynamicApi) {
      return true;
    }
  }
  // 当前文件为.static结尾文件
  if (isStaticFile(apiRelativePath) && type === DirType.staticApi) {
    return true;
  }
  return false;
}

/**
 * 处理文件过滤 if arkts 1.1|1.2|1.1&1.2 定义
 * 
 * @param {*} type 
 * @param {*} fileContent 
 * @returns 
 */
function handleArktsDefinition(type, fileContent) {
  const REGX_DYNAMIC = /\/\*\*\* if arkts (1\.1|dynamic) \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  const REGX_STATIC = /\/\*\*\* if arkts (1\.2|static) \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  const REGX_DYNAMIC_STATIC = /\/\*\*\* if arkts (1.1&1.2|dynamic&static) \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  fileContent = fileContent.replace(REGX_DYNAMIC, (substring, p1, p2) => {
    return type === DirType.dynamicApi ? p2 : '';
  });
  fileContent = fileContent.replace(REGX_STATIC, (substring, p1, p2) => {
    // todo if arkts 特殊用法
    if (type === DirType.staticApi) {
      return p2.replace(/(\s*)(\*\s\@since\s*\S*)\s*(?=\r?\n)/g, '$1* @arkts 1.2$1$2 static');
    } else {
      return '';
    }
  });
  fileContent = fileContent.replace(REGX_DYNAMIC_STATIC, (substring, p1, p2) => {
    // todo if arkts 特殊用法
    if (type === DirType.dynamicApi) {
      return p2;
    } else {
      return p2.replace(/(\s*)(\*\s\@since\s*\S*)\s*(?=\r?\n)/g, '$1* @arkts 1.2$1$2 dynamic&static');
    }
  });
  return fileContent;
}

/**
 * 保留static接口中static相关的jsdoc
 * 
 * @param {*} fileContent 
 * @returns 
 */
function saveStaticJsDoc(fileContent) {
  // 获取包含@since的多段连续注释
  return fileContent.replace(/\s*\/\*\*(?:(?!\/\*\*)[\s\S])*?@since[\s\S]*?\*\/\s*(?=\r?\n)/g, (substring) => {
    let arktsSinceTagRegx = /\s*\*\s*@since\s\S*\s(dynamic&static|staticonly|static)\s*(?=\r?\n)/g;
    let arktsTagRegx = /\s*\*\s*@arkts\s*((1\.1&)?1\.2|dynamic&static|staticonly|static)\s*(?=\r?\n)/g;
    if (!defaultIsDynamic) {
      arktsSinceTagRegx = /\s*\*\s*@since\s\S*(\s(dynamic&static|staticonly|static))?\s*(?=\r?\n)/g;
    }
    if (arktsSinceTagRegx.test(substring) || arktsTagRegx.test(substring)) {
      return substring;
    } else {
      return '';
    }
  });
}

/**
 * 删除指定的arkts标签
 * 
 * @param {*} fileContent 文件内容
 * @param {*} regx 删除的正则表达式
 * @returns 
 */
function deleteArktsTag(fileContent) {
  const arktsTagRegx = /\s*\*\s*@arkts\s(1\.1|1\.2|1\.1&1\.2|dynamic|static|dynamic&static)\s*(?=\r|\n)/g;
  fileContent = fileContent.replace(arktsTagRegx, (substring, p1) => {
    return '';
  });
  fileContent = replaceSinceDynamicStatic(fileContent);
  fileContent = replaceJsDocDynamicStatic(fileContent);
  return fileContent;
}

/**
 * 通过正则去除since标签之后的dynamic和static修饰符，根据dirType判断场景替换
 * @param {string} fileContent 
 * @returns 
 */
function replaceSinceDynamicStatic(fileContent) {
  const arktsSinceTagRegx = /\s*\*\s*@since\s\S*(\s(dynamic&static|dynamiconly|dynamic|staticonly|static))?\s*(?=\r?\n)/g;
  // 处理@since xx dynamic&static格式标签文本
  return fileContent.replace(arktsSinceTagRegx, (substring, tag) => {
    if (!tag && defaultIsDynamic && dirType === DirType.dynamicApi) {
      return substring;
    }
    if (!tag && !defaultIsDynamic && (dirType === DirType.staticApi || dirType === DirType.staticFile)) {
      return substring;
    }
    const hasStatic = substring.includes('static');
    if ((dirType === DirType.staticApi || dirType === DirType.staticFile) && hasStatic) {
      substring = substring.replace(/\s(staticonly|(dynamic&)?static)/g, '');
    } else {
      substring = '';
    }
    return substring;
  });
}

/**
 * 通过正则去除jsdoc所有标签之后的dynamiconly和staticonly修饰符，根据dirType判断场景替换
 * @param {string} fileContent 
 * @returns 
 */
function replaceJsDocDynamicStatic(fileContent) {
  const getJsDocWithDynamicStaticRegx = /\s*\/\*\*(?:(?!\*\/)[\s\S])*?\[(dynamiconly|staticonly)\][\s\S]*?\*\/\s*?/g;

  return fileContent.replace(getJsDocWithDynamicStaticRegx, (jsDoc) => {
    return replaceJsDocTagDynamicStatic(jsDoc);
  });
}

function replaceJsDocTagDynamicStatic(jsDoc) {
  const jsdocTagRegx = /\s*\*\s*@\S*(?:(?!\s*\*\s*@\S*)[\s\S])*\s*\[(dynamiconly|staticonly)\]\s*(?=\r|\n)/g;
  // 处理jsDoc中使用[dynamiconly]/[staticonly]格式标签文本
  return jsDoc.replace(jsdocTagRegx, (substring, p1) => {
    if (dirType === DirType.dynamicApi && p1 === 'staticonly') {
      substring = '';
    } else if ((dirType === DirType.staticApi || dirType === DirType.staticFile) && p1 === 'dynamiconly') {
      substring = '';
    } else {
      substring = substring.replace(/\s*\[(dynamiconly|staticonly)\]\s*$/g, '');
      substring = substring.replace(/\s*\*\s*$/g, '');
    }
    return substring;
  });
}

/**
 * 删除1.2未支持标签
 * 
 * @param {*} fileContent 文件内容
 * @param {*} regx 删除的正则表达式
 * @returns 
 */
function deleteUnsportedTag(fileContent) {
  const arktsTagRegx = /\*\s*@crossplatform\s*(\r|\n)\s*|\*\s*@form\s*(\r|\n)\s*|\*\s*@atomicservice\s*(\r|\n)\s*/g;
  fileContent = fileContent.replace(arktsTagRegx, (substring, p1) => {
    return '';
  });
  return fileContent;
}

/**
 * 处理ets2目录
 * 
 * @param {string} fullPath 文件完整路径
 * @returns 
 */
function handleFileInStaticApi(apiRelativePath, fullPath, type, output) {
  const secondRegx = /(?:\*\s(@arkts\s1.2|@arkts\sstatic|@since\s\S*\sstatic)\s*(\r|\n)\s*)/;
  const thirdRegx = /(?:\*\s(@arkts\s1\.1&1\.2|@arkts\sdynamic&static|@since\s\S*\sdynamic&static)\s*(\r|\n)\s*)/;
  const arktsRegx = /\/\*\*\* if arkts ((1.1|dynamic)&)?(1.2|static) \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  let sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true, undefined, COMPILER_OPTIONS);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  if (!secondRegx.test(fileContent) && !thirdRegx.test(fileContent) && arktsRegx.test(fileContent)) {
    saveApiByArktsDefinition(sourceFile, fileContent, outputPath);
    return;
  }
  //删除使用/*** if arkts 1.2 */
  fileContent = handleArktsDefinition(type, fileContent);
  sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true, undefined, COMPILER_OPTIONS);
  const regx = /(?:\*\s(@arkts\s1\.1|@since\s\S\sdynamic)\s*(\r|\n)\s*)/;

  if (sourceFile.statements.length === 0) {
    // 有1.2标签的文件，删除标记
    if (secondRegx.test(sourceFile.getFullText())) {
      let newFileContent = deleteUnsportedTag(fileContent);
      newFileContent = addStaticString(newFileContent);
      writeFile(outputPath, deleteArktsTag(newFileContent));
      return;
    }
    // 处理标有@arkts 1.1&1.2的声明文件
    if (thirdRegx.test(sourceFile.getFullText())) {
      handlehasTagFile(sourceFile, outputPath);
      return;
    }
    // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
    handleNoTagFileInSecondType(sourceFile, outputPath, fullPath);
    return;
  }

  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });

  if (firstNode) {
    const firstJsdocText = getFileJsdoc(firstNode);
    if (regx.test(firstJsdocText)) {
      return;
    }
  }

  // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
  handleNoTagFileInSecondType(sourceFile, outputPath, fullPath);
}

/**
 * 获取文件jsdoc
 * @param {*} firstNode 
 * @returns 
 */
function getFileJsdoc(firstNode) {
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

/**
 * 处理有@arkts 1.1&1.2标签的文件
 * @param {*} outputPath 
 */
function handlehasTagFile(sourceFile, outputPath) {
  dirType = DirType.staticApi;
  let newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveStaticJsDoc(newContent);
  newContent = deleteUnsportedTag(newContent);
  writeFile(outputPath, deleteArktsTag(newContent));
}

/**
 * 处理1.2目录中无arkts标签的文件
 * @param {*} sourceFile 
 * @param {*} outputPath 
 * @returns 
 */
function handleNoTagFileInSecondType(sourceFile, outputPath, fullPath) {
  dirType = DirType.staticFile;
  const arktsTagRegx = /\*\s*(@arkts\s(1.1&)?1.2|@since\s\S*\s(staticonly|(dynamic&)?static))\s*(\r|\n)\s*/g;
  const fileContent = sourceFile.getFullText();
  let newContent = '';
  // API未标@arkts 1.2或@arkts 1.1&1.2标签，删除文件
  if (!arktsTagRegx.test(fileContent)) {
    return;
  }
  newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveStaticJsDoc(newContent);
  newContent = deleteArktsTag(newContent);
  newContent = deleteUnsportedTag(newContent);
  writeFile(outputPath, newContent);
}

/**
 * 没有arkts标签，但有if arkts 1.2和1.1&1.2的情况
 * @param {*} sourceFile 
 * @param {*} fileContent 
 * @param {*} outputPath 
 */
function saveApiByArktsDefinition(sourceFile, fileContent, outputPath) {
  const regx = /\/\*\*\* if arkts ((1\.1|dynamic)&)?(1\.2|static) \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  const regex = /\/\*\r?\n\s*\*\s*Copyright[\s\S]*?\*\//g;
  const copyrightMessage = fileContent.match(regex)[0];
  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });
  let fileJsdoc = firstNode ? getFileJsdoc(firstNode) + '*/\n' : '';
  let newContent = copyrightMessage + fileJsdoc + Array.from(fileContent.matchAll(regx), match => match[4]).join('\n');
  newContent = addStaticString(newContent);

  writeFile(outputPath, saveStaticJsDoc(newContent));
}

/**
 * 拼接上被删除的文件注释
 * 
 * @param {*} deletionContent 
 * @param {*} sourceFile 
 * @returns 
 */
function joinFileJsdoc(deletionContent, sourceFile) {
  const fileJsdoc = sourceFile.getFullText().replace(sourceFile.getText(), '');
  const copyrightMessage = hasCopyright(fileJsdoc.split('*/')[0]) ? fileJsdoc.split('*/')[0] + '*/' : '';
  const regx = /@kit | @file/g;
  let kitMessage = '';

  if (regx.test(fileJsdoc)) {
    kitMessage = fileJsdoc.split('*/')[1] + '*/';
  }
  let newContent = deletionContent;
  const isHasCopyright = hasCopyright(deletionContent);

  if (!isHasCopyright && !regx.test(deletionContent)) {
    newContent = copyrightMessage + '\r\n' + kitMessage + deletionContent;
  } else if (!isHasCopyright) {
    newContent = copyrightMessage + '\r\n' + deletionContent;
  } else if (isHasCopyright && !/@kit | @file/g.test(deletionContent)) {
    const joinFileJsdoc = copyrightMessage + '\r\n' + kitMessage;
    newContent = deletionContent.replace(copyrightMessage, joinFileJsdoc);
  }

  if (dirType !== DirType.dynamicApi) {
    // TODO：添加use static字符串
    newContent = addStaticString(newContent);
  }
  return newContent;
}

function getDeletionContent(sourceFile) {
  const deletionContent = deleteApi(sourceFile);
  if (deletionContent === '') {
    return '';
  }
  let newContent = joinFileJsdoc(deletionContent, sourceFile);

  // 处理since版本
  newContent = handleSinceInSecondType(newContent);
  return newContent;
}

/**
 * 重写文件内容
 * @param {*} outputPath 
 * @param {*} fileContent 
 */
function writeFile(outputPath, fileContent) {
  const outputDir = path.dirname(outputPath);
  let newPath = outputPath;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (dirType !== DirType.dynamicApi && isTsFile(outputPath)) {
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
function addStaticString(fileContent) {
  let newContent = fileContent;
  //判断是否存在use static且位置在第一个行
  const fileContentRegex = /^\s*(['"])use static\1\s*;?$/gm;
  if (fileContentRegex.test(fileContent) && fileContentRegex.exec(fileContent) &&
    fileContentRegex.exec(fileContent).index > 0) {
    newContent = newContent.replace(/^\s*(['"])use static\1\s*;?$/gm, '');
  }
  const hasStaticMessage = fileContentRegex.test(newContent);
  const staticMessage = 'use static';
  if (!hasStaticMessage) {
    newContent = `'${staticMessage}'\r\n${newContent}`;
  }
  return newContent;
}

/**
 * 判断新生成的文件内容有没有版权头
 * 
 * @param {*} fileText 新生成的文件内容
 * @returns 
 */
function hasCopyright(fileText) {
  return /http(\:|\?:)\/\/www(\.|\/)apache\.org\/licenses\/LICENSE\-2\.0 | Copyright\s*\(c\)/gi.test(fileText);
}

// 创建 Transformer
const transformer = (context) => {
  return (rootNode) => {
    const visit = (node) => {
      //struct节点下面会自动生成constructor节点, 置为undefined
      if (node.kind === ts.SyntaxKind.Constructor && node.parent.kind === ts.SyntaxKind.StructDeclaration) {
        return undefined;
      }

      // 判断是否为要删除的变量声明
      if ((apiNodeTypeArr.includes(node.kind) || validateExportDeclaration(node)) && judgeIsDeleteApi(node)) {
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

function validateExportDeclaration(node) {
  return ts.isExportDeclaration(node) && node.jsDoc && node.jsDoc.length !== 0;
}

/**
 * 删除API
 * @param {*} sourceFile 
 * @returns 
 */
function deleteApi(sourceFile) {
  let result = ts.transform(sourceFile, [transformer], { etsAnnotationsEnable: true });
  const newSourceFile = result.transformed[0];
  if (isEmptyFile(newSourceFile)) {
    return '';
  }

  // 打印结果
  const printer = ts.createPrinter();
  let fileContent = printer.printFile(newSourceFile);
  result = ts.transform(newSourceFile, [transformExportApi], { etsAnnotationsEnable: true });
  fileContent = printer.printFile(result.transformed[0]);
  deleteApiSet.clear();
  return fileContent.replace(/export\s*(?:type\s*)?\{\s*\}\s*(;)?/g, '');
}

/**
 * api被删除后，对应的export api也需要被删除
 * @param {*} context 
 * @returns 
 */
const transformExportApi = (context) => {
  return (rootNode) => {
    const importOrExportNodeVisitor = (node) => {
      if (ts.isImportClause(node) && node.name && ts.isIdentifier(node.name) ||
        ts.isImportSpecifier(node) && node.name && ts.isIdentifier(node.name)) {
        importNameSet.add(node.name?.getText());
      }
      // 剩下未被删除的API中，如果还有与被删除API名字一样的API，就将其从set集合中删掉
      const apiNodeName = getApiNodeName(node);
      if (apiNodeTypeArr.includes(node.kind) && deleteApiSet.has(apiNodeName)) {
        deleteApiSet.delete(apiNodeName);
      }
      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, importOrExportNodeVisitor, context);
    };
    ts.visitNode(rootNode, importOrExportNodeVisitor);

    const allNodeVisitor = (node) => {
      // 判断是否为要删除的变量声明
      if (ts.isExportAssignment(node) && deleteApiSet.has(node.expression.escapedText.toString()) &&
        !importNameSet.has(node.expression.escapedText.toString())) {
        return undefined;
      }

      if (ts.isExportSpecifier(node) && deleteApiSet.has(node.name.escapedText.toString()) &&
        !importNameSet.has(node.name.escapedText.toString())) {
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, allNodeVisitor, context);
    };
    return ts.visitNode(rootNode, allNodeVisitor);
  };
};

/**
 * 获取api节点名称，VariableStatement需要特殊处理
 *
 * @param { ts.Node } node 
 * @returns { string }
 */
function getApiNodeName(node) {
  let apiName = '';
  if (ts.isVariableStatement(node)) {
    apiName = variableStatementGetEscapedText(node);
  } else {
    apiName = node.name?.getText();
  }
  return apiName;
}

/**
 * 获取 variableStatement节点名称
 * @param {ts.Node} statement 
 * @returns 
 */
function variableStatementGetEscapedText(statement) {
  let name = '';
  if (
    statement &&
    statement.declarationList &&
    statement.declarationList.declarations &&
    statement.declarationList.declarations.length > 0 &&
    statement.declarationList.declarations[0].name &&
    statement.declarationList.declarations[0].name.escapedText
  ) {
    name = statement.declarationList.declarations[0].name.escapedText.toString();
  }
  return name;
}

/**
 * 判断是否为use static标记
 * @param { ts.Node } node 
 * @returns { boolean }
 */
function isStaticFlag(node) {
  return ts.isExpressionStatement(node) &&
    node.expression &&
    ts.isStringLiteral(node.expression) &&
    node.expression.text &&
    node.expression.text === ARKTS_FLAG;
}

function isEmptyFile(node) {
  let isEmpty = true;
  if (ts.isSourceFile(node) && node.statements) {
    const needExportName = new Set();
    for (let i = 0; i < node.statements.length; i++) {
      const statement = node.statements[i];
      if (isStaticFlag(statement)) {
        continue;
      }
      if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
        isEmpty = false;
        break;
      }
      if (judgeExportHasImport(statement, needExportName)) {
        continue;
      }
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}

function collectDeletionApiName(node) {
  if (!ts.isImportClause(node)) {
    deleteApiSet.add(node.name?.getText());
    return;
  }

  if (ts.isImportDeclaration(node) && node.importClause?.name) {
    deleteApiSet.add(node.importClause.name.escapedText.toString());
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
 * 判断import节点和export节点。
 * 当前文本如果还有其他节点则不能删除，
 * 如果只有import和export则判断是否export导出import节点
 * 
 * @param {*} statement 
 * @param {*} needExportName 
 * @returns 
 */
function judgeExportHasImport(statement, needExportName) {
  if (ts.isImportDeclaration(statement)) {
    processImportDeclaration(statement, needExportName);
    return true;
  } else if (ts.isExportAssignment(statement) &&
    !needExportName.has(statement.expression.escapedText.toString())) {
    return true;
  } else if (ts.isExportDeclaration(statement)) {
    return !statement.exportClause.elements.some((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      return needExportName.has(exportName);
    });
  }
  return false;
}

function processImportDeclaration(statement, needExportName) {
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
 * 判断node节点中是否有famodelonly/deprecated/arkts <=1.1标签
 * 
 * @param {*} node 
 * @returns 
 */
function judgeIsDeleteApi(node) {
  // 删除api适配arkts标签
  const notesContent = node.getFullText().replace(node.getText(), '');
  if (notesContent.replace(/\s/g, '') === '') {
    return false;
  }
  const notesArr = notesContent.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  const sinceArr = notesStr.match(/@since\s*\d+/);
  let sinceVersion = 20;
  const hasDynamicTag = /@arkts\s*1\.1(&1\.2)?/g.test(notesStr);
  const hasStaticTag = /@arkts\s*(1\.1&)?1\.2/g.test(notesStr);
  const hasDynamicSince = /@since\s\S*(\s(dynamiconly|dynamic(&static)?))?\s*(?=\r?\n)/g.test(notesStr);
  const hasStaticSince = /@since\s\S*\s(staticonly|(dynamic&)?static)/g.test(notesStr);
  const hasDeprecatedTag = /@deprecated/g.test(notesStr);

  if (dirType === DirType.dynamicApi) {
    return (!hasDynamicTag && hasStaticTag) || (hasStaticSince && !hasDynamicSince);
  }

  if (sinceArr) {
    sinceVersion = sinceArr[0].replace(/@since\s*/, '');
  }

  if (dirType === DirType.staticApi) {
    return (hasDeprecatedTag && sinceVersion < 20) ||
      (hasDynamicTag && !hasStaticTag) ||
      (hasDynamicSince && !hasStaticSince);
  }

  if (dirType === DirType.staticFile) {
    return !hasStaticTag && !hasStaticSince;
  }

  return false;
}

/**
 * 生成1.2目录里文件时，需要去掉since标签里的dynamic版本号
 * 
 * @param {*} fileContent 
 * @returns 
 */
function handleSinceInSecondType(fileContent) {
  const regx = /@since\s+arkts\s*(\{.*\})/g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    const versionObj = JSON.parse(p1.replace(/'/g, '"'));
    const staticVersion = versionObj['1.2'] || versionObj.static;
    return '@since ' + staticVersion + ' static';
  });
  return fileContent;
}

/**
 * 
 * @param { string } apiPath 需要处理的api文件所在路径
 * @param { string } rootPath ets文件夹路径
 * @returns { Set<string> } 需要处理的api文件的相对于ets目录的路径
 */
function getApiFileName(apiPath, rootPath, allApiFilePathSet) {
  const apiFilePathSet = new Set();
  const fileNames = fs.readdirSync(apiPath);

  fileNames.forEach(fileName => {
    const apiFilePath = path.join(apiPath, fileName).replace(/\\/g, '/');
    const stat = fs.statSync(apiFilePath);

    if (stat.isDirectory()) {
      getApiFileName(apiFilePath, rootPath, allApiFilePathSet);
    } else {
      const apiRelativePath = apiFilePath.replace(rootPath, '');
      allApiFilePathSet.add(apiRelativePath);
    }
  });

  return apiFilePathSet;
}

// 所有API的节点类型
const apiNodeTypeArr = [
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
  ts.SyntaxKind.StructDeclaration,
  ts.SyntaxKind.GetAccessor,
  ts.SyntaxKind.SetAccessor,
  ts.SyntaxKind.IndexSignature,
  ts.SyntaxKind.OverloadDeclaration
];

start();
