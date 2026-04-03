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

const ts = require('typescript');
const fs = require('fs');
const path = require('path');
const commander = require('commander');
let errStr = '';
const errVersionArr = [];

/**
 * 配置参数
 */
function main() {
  const program = new commander.Command();
  program
    .name('apiLevelCheck')
    .version('0.0.1');
  program
    .option('--path <string>', 'input path')
    .option('--versionNumber <string>', 'version number')
    .action((opts) => {
      if (!opts.path || !opts.versionNumber) {
        console.error('Error: Must provide --path and --versionNumber parameters');
        process.exit(1);
      }
      if (!/^[1-9][0-9]?((\.(0|[1-9][0-9]?)){2})?$/.test(opts.versionNumber)) {
        console.error(
          'Error: --versionNumber must be a valid version number format. major.minor.patch or single major version.',
        );
        console.error('  Valid formats: single number (e.g., 26) or three-part version (e.g., 26.0.0)');
        console.error('  Number range: major 1-99, minor 0-99, patch 0-99');
        console.error('  Example: --versionNumber 26 or --versionNumber 26.0.0');
        process.exit(1);
      }
      // 将相对路径解析为绝对路径
      inputDir = path.resolve(opts.path);
      let apiUtFiles = [];
      readFile(inputDir + '/api', apiUtFiles);
      readFile(inputDir + '/arkts', apiUtFiles);
      transform(inputDir, opts.versionNumber, apiUtFiles);
      /**
       * 异常信息实例：
       * 以下接口版本号不合规，请检查！
       * api/@ohos.xxx.d.ts#xxx#xxx#xxx
       */
      if (errVersionArr.length === 0) {
        console.log('');
      } else {
        errVersionArr.forEach(str => {
          errStr = errStr + '\n' + str + '\n';
        });
        errStr =
          'The current API version must not exceed' +
          opts.versionNumber +
          ', The following interface version numbers are not compliant. Please check！\n' +
          'Example of correct format: 26 or 26.0.0 ' +
          'version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
          errStr;
        console.log(errStr);
      }
    });
  program.parse(process.argv);
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  if (!fs.existsSync(dir)) {
    return;
  }
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      if (element === 'build-tools') {
        return;
      }
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath.replace(inputDir, ''));
      }
    });
  } catch (e) {
    console.error('Error reading files: ' + e.message);
  }
}

function transform(dirPath, apiVersion, apiUtFiles) {
  apiUtFiles.forEach(url => {
    const apiBaseName = path.basename(url);
    if (/\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName)) {
      let content = fs.readFileSync(dirPath + url, 'utf-8');
      const fileName = processFileName(dirPath + url);
      ts.transpileModule(content, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2017,
          etsAnnotationsEnable: true
        },
        fileName: fileName,
        transformers: { before: [recursionAstCallback(apiVersion, url)] }
      });
    }
  });
}

/**
 * 统一处理文件名称，修改后缀等
 * @param {string} filePath 文件路径
 * @returns {string} filename 文件名称
 */
function processFileName(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, '.ts')
    .replace(/\.d\.ets$/g, '.ets');
}

/**
 * 每个文件处理签回调函数第一个
 * @callback recursionAstCallback
 * @param {string} url 文件路径
 * @param {string} apiVersion 检查版本号
 */
function recursionAstCallback(apiVersion, url) {
  return (context) => {
    return (sourceFile) => {
      node = apiLevelCheck(context, sourceFile, apiVersion, url);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 遍历处理tsnode节点
 * @param {context} 解析过后的内容
 * @param {node} 解析过后的节点
 * @returns ts.node
 */
function apiLevelCheck(context, node, apiVersion, url) {
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (node.jsDoc) {
      processAllNodesJSDoc(node.jsDoc);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  };
  function processAllNodesJSDoc(jsDocNode) {
    if (jsDocNode.length === 0) {
      return;
    }
    const latesJsDoc = jsDocNode[jsDocNode.length - 1];
    if (!latesJsDoc.tags) {
      return;
    }
    latesJsDoc.tags.forEach(tag => {
      checkVersion(tag);
    });
  }
  function checkVersion(tag) {
    if (tag.tagName.getText() !== 'since') {
      return;
    }
    const versionComment = tag.comment ? tag.comment : tag.getFullText().replace('@' + tag.tagName.getText(), '');
    const versionNumber = versionComment.trim();
    if (!/^[1-9][0-9]?((\.(0|[1-9][0-9]?)){2})?$/.test(versionNumber)) {
      const errVersionStr = recursionParentNode(tag, url, node);
      const invalidVersionErr =
        errVersionStr +
        '\nerror since version: "' +
        versionNumber +
        '" is not a valid API version number,' +
        ' please check if the version number format of the @since tag is correct.\n';
      errVersionArr.push(invalidVersionErr);
      return;
    }
    if (compareVersions(versionNumber, apiVersion) > 0) {
      const errVersionStr = recursionParentNode(tag, url, node);
      errVersionArr.push(errVersionStr);
    }
  }

  /**
   * 比较两个版本号大小
   * 支持格式：
   * - 单数字格式: '20', '26'
   * - 三段式格式: '26.0.0', '26.1.2'
   * @param {string} v1 版本号1
   * @param {string} v2 版本号2
   * @returns {number} 1: v1 > v2, 0: v1 === v2, -1: v1 < v2
   */
  function compareVersions(v1, v2) {
    // 将版本号解析为 [major, minor, patch] 数组
    const parseVersion = (version) => {
      const trimmed = version.trim();
      if (trimmed.includes('.')) {
        const parts = trimmed.split('.').map(p => parseInt(p, 10));
        // 确保有三段，不足则补0
        return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
      }
      // 单数字格式转换为 [major, 0, 0]
      const num = parseInt(trimmed, 10);
      return [num, 0, 0];
    };

    const p1 = parseVersion(v1);
    const p2 = parseVersion(v2);

    // 按位比较: major -> minor -> patch
    for (let i = 0; i < 3; i++) {
      if (p1[i] > p2[i]) {
        return 1;
      }
      if (p1[i] < p2[i]) {
        return -1;
      };
    }
    return 0; // 版本号相等
  }
}

/**
 * 处理告警信息
 * @param {ts.Node} tag TypeScript节点
 * @param {node} 解析后的节点
 * @returns {string} 不符合版本要求的API信息
 */
function recursionParentNode(tag, url, node) {
  let errVersionStr = '';
  let parent = tag.parent;
  while (parent) {
    if (getApiNodeName(parent)) {
      if (errVersionStr === '') {
        errVersionStr = getApiNodeName(parent);
      } else {
        errVersionStr = getApiNodeName(parent) + '#' + errVersionStr;
      }
    } else if (parent.expression) {
      errVersionStr = parent.expression.getText() + '#' + errVersionStr;
    }
    parent = parent.parent;
  }
  errVersionStr = url + '#' + errVersionStr;
  // 获取到注释的位置，向下遍历找对应的定义，并将找到的行数追加到打印信息中
  const strArr = errVersionStr.split('#');
  const start = tag.getStart();
  const lineAndChar = node.getLineAndCharacterOfPosition(start);
  const sinceLine = lineAndChar.line;

  const sourceText = node.getFullText();
  const lines = sourceText.split('\n');

  for (let i = 1; i <= lines.length; i++) {
    const targetLineIndex = sinceLine + i;
    if (targetLineIndex >= lines.length) {
      break;
    }
    const lineText = lines[targetLineIndex].trim();
    const firstChar = lineText.charAt(0);
    if (lineText.includes(strArr[strArr.length - 1]) && firstChar !== '*') {
      return errVersionStr = errVersionStr + '(行号：' + (targetLineIndex + 1) + ')';
    }
  }
  return errVersionStr;
}

/**
 * 获取api节点名称，VariableStatement需要特殊处理
 * @param {ts.Node} node TypeScript节点
 * @returns {string} API名称或null
 */
function getApiNodeName(node) {
  let apiName = '';
  if (ts.isVariableStatement(node)) {
    apiName = variableStatementGetEscapedText(node);
  } else if (ts.isConstructorDeclaration(node)) {
    apiName = 'constructor';
  } else {
    apiName = node.name?.getText();
  }
  return apiName || null;
}

/**
 * 获取 variableStatement节点名称
 * @param {ts.Node} statement 
 * @returns {string}
 */
function variableStatementGetEscapedText(statement) {
  let name = '';
  if (statement && statement?.declarationList?.declarations?.length > 0) {
    const declaration = statement.declarationList.declarations[0];
    if (declaration?.name?.escapedText !== undefined) {
      name = declaration.name.escapedText.toString();
    }
  }
  return name;
}

main();
