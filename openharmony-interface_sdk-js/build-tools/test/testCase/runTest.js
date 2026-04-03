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
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const {
  execFileSync
} = require('child_process');
const BUILD_TOOLS_PATH = path.resolve(__dirname, '../../');
const DELETE_SYSTEMAPI_PLUGIN_PATH = path.resolve(BUILD_TOOLS_PATH, 'delete_systemapi_plugin.js');
const HANDLE_API_FILES_PATH = path.resolve(BUILD_TOOLS_PATH, 'handleApiFiles.js');
const INT_TO_NUMBER_PATH = path.resolve(BUILD_TOOLS_PATH, 'intToNumber.js')
const TEST_EXPECT_PATH = path.resolve(BUILD_TOOLS_PATH, 'test', 'expect');
const TEST_OUTPUT_PATH = path.resolve(BUILD_TOOLS_PATH, 'test', 'output');
const TEST_UT_PATH = path.resolve(BUILD_TOOLS_PATH, 'test', 'ut');

/**
 * 裁剪工具测试用例
 */
describe('delete_systemapi_plugin', function () {
  const utName = this.title;
  const inputDir = path.resolve(TEST_UT_PATH, utName, 'api');
  const outputDir = path.resolve(TEST_OUTPUT_PATH, utName);
  deleteDir(outputDir);
  const result = execFileSync('node', [DELETE_SYSTEMAPI_PLUGIN_PATH, '--input', inputDir, '--output', outputDir, '--type', 'ets']);
  const outputFiles = [];
  readFile(outputDir, outputFiles); // 读取文件
  outputFiles.forEach(filePath => {
    const relativeFilePath = path.relative(TEST_OUTPUT_PATH, filePath);
    const expectFilePath = path.resolve(TEST_EXPECT_PATH, relativeFilePath);
    it('\ntestFile#' + relativeFilePath + '\noutput:' + filePath + '\nexpect:' + expectFilePath, function () {
      const outputContent = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      assert.equal(outputContent, expectFileContent);
    });
  });
});

/**
 * 动静态标签拆分工具测试用例
 */
describe('handleApiFiles', function () {
  const utName = this.title;
  const inputDir = path.resolve(TEST_UT_PATH, utName);
  //打包dynamic测试用例
  describe('dynamic', function () {
    const outputDir = path.resolve(TEST_OUTPUT_PATH, utName, this.title);
    deleteDir(outputDir);
    const result = execFileSync('node', [HANDLE_API_FILES_PATH, '--path', inputDir, '--output', outputDir, '--type', 'ets']);
    const outputFiles = [];
    readFile(outputDir, outputFiles); // 读取文件
    outputFiles.forEach(filePath => {
      const relativeFilePath = path.relative(TEST_OUTPUT_PATH, filePath);
      const expectFilePath = path.resolve(TEST_EXPECT_PATH, relativeFilePath);
      it('\ntestFile#' + relativeFilePath + '\noutput:' + filePath + '\nexpect:' + expectFilePath, function () {
        const outputContent = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
        const expectFileContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
        assert.equal(outputContent, expectFileContent);
      });
    });
  });
  //打包static测试用例
  describe('static', function () {
    const outputDir = path.resolve(TEST_OUTPUT_PATH, utName, this.title);
    deleteDir(outputDir);
    const result = execFileSync('node', [HANDLE_API_FILES_PATH, '--path', inputDir, '--output', outputDir, '--type', 'ets2']);
    const outputFiles = [];
    readFile(outputDir, outputFiles); // 读取文件
    outputFiles.forEach(filePath => {
      const relativeFilePath = path.relative(TEST_OUTPUT_PATH, filePath);
      const expectFilePath = path.resolve(TEST_EXPECT_PATH, relativeFilePath);
      it('\ntestFile#' + relativeFilePath + '\noutput:' + filePath + '\nexpect:' + expectFilePath, function () {
        const outputContent = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
        const expectFileContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
        assert.equal(outputContent, expectFileContent);
      });
    });
  });
});

/**
 * int转number测试用例
 */
describe('intToNumber', function () {
  const utName = this.title;
  const inputDir = path.resolve(TEST_UT_PATH, utName);
  const outputDir = path.resolve(TEST_OUTPUT_PATH, utName);
  deleteDir(outputDir);
  const result = execFileSync('node', [INT_TO_NUMBER_PATH, '--path', inputDir, '--output', outputDir]);
  const outputFiles = [];
  readFile(outputDir, outputFiles); // 读取文件
    outputFiles.forEach(filePath => {
    const relativeFilePath = path.relative(TEST_OUTPUT_PATH, filePath);
    const expectFilePath = path.resolve(TEST_EXPECT_PATH, relativeFilePath);
    it('\ntestFile#' + relativeFilePath + '\noutput:' + filePath + '\nexpect:' + expectFilePath, function () {
      const outputContent = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
      const expectFileContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
      assert.equal(outputContent, expectFileContent);
    });
  });
})


describe('testmocha', function () {
  it('should return -1 when the value is not present', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});

/**
 * 删除文件
 * 
 * @param {string} fileDir 删除文件路径
 */
function deleteDir(fileDir) {
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
    return;
  }
  try {
    fs.rmSync(fileDir, { recursive: true, force: true });
    console.log('删除文件夹成功', fileDir);
  } catch (error) {
    console.error('删除文件夹失败', fileDir);
    console.error(error);
  }
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
    console.error('ERROR: ' + e);
  }
}