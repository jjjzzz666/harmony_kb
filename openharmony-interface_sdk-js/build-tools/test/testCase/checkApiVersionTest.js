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
const assert = require('assert');
const path = require('path');
const {
  execFileSync
} = require('child_process');
const BUILD_TOOLS_PATH = path.resolve(__dirname, '../../');
const CHECK_API_VERSION_PATH = path.resolve(BUILD_TOOLS_PATH, 'checkApiVersion.js');
const TEST_UT_PATH = path.resolve(BUILD_TOOLS_PATH, 'test', 'ut');

/**
 * checkApiVersion 测试用例
 */
describe('checkApiVersion', function () {

  /**
   * 测试1: 旧格式单数字版本号 - 全部符合要求
   * 检查版本号不超过25，所有接口都是20-25，应该通过
   */
  describe('old_format_compatible', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '25';
    it('should pass when all old format versions are <= 25', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该没有错误输出（或只有空行）
      const expectedResult = '\n';
      assert.equal(result, expectedResult, 'Expected no error for old_format_compatible');
    });
  });

  /**
   * 测试2: 旧格式单数字版本号 - 有超出版本
   * 检查版本号不超过25，接口中有26和27，应该报错
   */
  describe('old_format_exceeded', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '25';
    it('should report error when old format versions > 25', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该报错，包含old_format_002.d.ts中的超版本接口
      const expectedResult =
        'The current API version must not exceed25, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\old_format_002.d.ts#OldFormatInterface2#method1(行号：23)\n' +
        '\n' +
        '\\api\\old_format_002.d.ts#OldFormatInterface2#method2(行号：28)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for old_format_exceeded');
    });
  });

  /**
   * 测试3: 新格式三段式版本号 - 全部符合要求
   * 检查版本号不超过26.1.0，所有接口都是26.0.0-26.1.0，应该通过
   */
  describe('new_format_compatible', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26.1.0';
    it('should pass when all new format versions are <= 26.1.0', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该没有错误输出
      const expectedResult = '\n';
      assert.equal(result, expectedResult, 'Expected no error for new_format_compatible');
    });
  });

  /**
   * 测试4: 新格式三段式版本号 - 有超出版本
   * 检查版本号不超过26.0.0，接口中有27.0.0，应该报错
   */
  describe('new_format_exceeded', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26.0.0';
    it('should report error when new format versions > 26.0.0', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该报错，包含new_format_002.d.ts中的超版本接口
      // NewFormatInterface2本身是26.0.0不报错，method1(27.0.0), method2(26.1.0), method3(26.0.1)都报错
      const expectedResult =
        'The current API version must not exceed26.0.0, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\new_format_002.d.ts#NewFormatInterface2#method1(行号：23)\n' +
        '\n' +
        '\\api\\new_format_002.d.ts#NewFormatInterface2#method2(行号：28)\n' +
        '\n' +
        '\\api\\new_format_002.d.ts#NewFormatInterface2#method3(行号：33)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for new_format_exceeded');
    });
  });

  /**
   * 测试5: 混合格式 - 新旧版本号并存
   * 检查版本号不超过26.0.0，既有旧格式又有新格式
   */
  describe('mixed_format', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26.0.0';
    it('should handle mixed old and new format versions', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该报错，因为mixed_format_001.d.ts中newMethod2(26.1.0)和oldMethod2(27)超过了26.0.0
      // newMethod1(26.0.0)等于检查版本不报错
      const expectedResult =
        'The current API version must not exceed26.0.0, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\mixed_format_001.d.ts#MixedFormatInterface#newMethod2(行号：33)\n' +
        '\n' +
        '\\api\\mixed_format_001.d.ts#MixedFormatInterface#oldMethod2(行号：38)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for mixed_format');
    });
  });

  /**
   * 测试6: 边界测试 - 单数字 vs 三段式
   * 测试26和26.0.0应该是相等的
   */
  describe('edge_case', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26';
    it('should treat 26 and 26.0.0 as equal', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // 应该报错，因为edge_case_001.d.ts中有27.0.0
      // 26和26.0.0应该相等，不应该报错
      const expectedResult =
        'The current API version must not exceed26, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\edge_case_001.d.ts#EdgeCaseInterface#method3(行号：33)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for edge_case');
    });
  });

  /**
   * 测试7: 新格式版本号检查 - 精确比较
   * 测试26.0.1 > 26.0.0
   */
  describe('new_format_precise', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', 'new_format_compatible');
    const versionNumber = '26.0.0';
    it('should compare new format versions precisely', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // new_format_001.d.ts中的method2(26.1.0)和method3(26.0.1)应该报错
      // NewFormatInterface本身和method1都是26.0.0不报错
      const expectedResult =
        'The current API version must not exceed26.0.0, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\new_format_001.d.ts#NewFormatInterface#method2(行号：28)\n' +
        '\n' +
        '\\api\\new_format_001.d.ts#NewFormatInterface#method3(行号：33)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for precise comparison');
    });
  });

  /**
   * 测试8: arkts目录下的新格式版本号
   * 测试在arkts目录下使用新的x.y.z版本号格式
   */
  describe('arkts_format', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26';
    it('should handle new format in arkts directory', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // arkts_format_001.d.ets中的27.0.0应该报错
      const expectedResult =
        'The current API version must not exceed26, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\arkts\\arkts_format_001.d.ets#arktsFunction3(行号：29)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for arkts_format');
    });
  });

  /**
   * 测试9: 旧版本号格式检查
   * 使用旧版本号格式检查，确保向后兼容
   */
  describe('backward_compatibility', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', 'old_format_compatible');
    const versionNumber = '20';
    it('should support old single number format', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      
      // old_format_001.d.ts中method2(21)和method3(25)应该报错
      // OldFormatInterface本身和method1都是20不报错
      const expectedResult =
        'The current API version must not exceed20, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\old_format_001.d.ts#OldFormatInterface#method2(行号：28)\n' +
        '\n' +
        '\\api\\old_format_001.d.ts#OldFormatInterface#method3(行号：33)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for backward_compatibility');
    });
  });

  /**
   * 测试10: 新版本号格式 - 版本号相等测试
   * 测试27.0.0和27.0.0相等的情况
   */
  describe('new_format_equal', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', 'new_format_exceeded');
    const versionNumber = '27.0.0';
    it('should treat 27.0.0 and 27.0.0 as equal', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // new_format_002.d.ts的method1是27.0.0，应该等于检查版本27.0.0，不应该报错
      // method2(26.1.0)和method3(26.0.1)也应该通过
      const expectedResult = '\n';
      assert.equal(result, expectedResult, 'Expected no error for new_format_equal');
    });
  });

  /**
   * 测试11: 匿名函数和构造函数
   * 测试包含箭头函数、高阶函数、构造函数等场景
   */
  describe('anonymous_function', function () {
    const inputDir = path.resolve(TEST_UT_PATH, 'checkApiVersion', this.title);
    const versionNumber = '26';
    it('should handle anonymous functions and constructors', function () {
      const result = execFileSync('node', [CHECK_API_VERSION_PATH, '--path', inputDir, '--versionNumber', versionNumber], {
        encoding: 'utf-8'
      });
      // MyClass(27), constructor(27.0.0), method(27.1.0)都应该报错
      // arrowFunction(26), higherOrderFunction(26.0.0)不报错
      const expectedResult =
        'The current API version must not exceed26, The following interface version numbers are not compliant. Please check！\n' +
        'Example of correct format: 26 or 26.0.0 version number range: major version number 1-99, minor version number 0-99, revised version number 0-99\n' +
        '\n' +
        '\\api\\anonymous_function_001.d.ts#MyClass(行号：34)\n' +
        '\n' +
        '\\api\\anonymous_function_001.d.ts#MyClass#constructor(行号：38)\n' +
        '\n' +
        '\\api\\anonymous_function_001.d.ts#MyClass#method(行号：43)\n' +
        '\n';
      assert.equal(result, expectedResult, 'Expected specific error output for anonymous_function');
    });
  });
});
