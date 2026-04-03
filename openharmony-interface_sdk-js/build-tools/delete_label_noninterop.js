/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
const path = require('path');
const fs = require('fs');
const commander = require('commander');

function start() {
  const program = new commander.Command();
  program
    .name('deleteLabel')
    .version('0.0.1');
  program
    .option('--input <string>', 'input path')
    .option('--output <string>', 'output path')
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      transformFiles(opts.input);
    });
  program.parse(process.argv);
}

function transformFiles(inputDir) {
  // 入口
  try {
    const utFiles = [];
    readFile(inputDir, utFiles); // 读取文件
    tsTransform(utFiles);
  } catch (error) {
    console.error('DELETE_LABEL_NONINTEROP ERROR: ', error);
  }
}

/**
 * 删除所有 * @noninterop
 * @param {string} content 
 */
function deleteLabel(content) {
  let result = content.replace(/^\s*\*\s*\@noninterop\s*[\r\n]/mg, '');
  return result;
}

function getFileName(filePath) {
  return path
    .basename(filePath);
}

function getKitName(content) {
  let kitName = '';
  if (content.match(/\@kit (.*)\r?\n/g)) {
    kitName = RegExp.$1.replace(/\s/g, '');
  }
  return kitName;
}

function needDeleteLabelNonInterop(fileName, kitName) {
  if (inputDir.endsWith('component') || fileName.startsWith('@ohos.arkui') || kitName === 'ArkUI') {
    return true;
  }
  return false;
}

/**
 * 遍历所有文件进行处理
 * @param {Array} utFiles 所有文件
 */
function tsTransform(utFiles) {
  utFiles.forEach((url) => {
    let content = fs.readFileSync(url, 'utf-8'); // 文件内容
    const fileName = getFileName(url);
    const kitName = getKitName(content);
    if (needDeleteLabelNonInterop(fileName, kitName)) {
      writeFile(url, deleteLabel(content));
    } else {
      writeFile(url, content);
    }
  });
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.log('ETS ERROR: ' + e);
  }
}

function writeFile(url, data, option) {
  const newFilePath = path.resolve(outputPath, path.relative(inputDir, url));
  fs.mkdir(path.dirname(newFilePath), { recursive: true }, (err) => {
    if (err) {
      console.error(`ERROR FOR CREATE PATH ${err}`);
    } else {
      if (data === '') {
        fs.rmSync(newFilePath);
        return;
      }
      fs.writeFileSync(newFilePath, data, option, (err) => {
        if (err) {
          console.error(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}

let outputPath = '';
let inputDir = '';
start();
