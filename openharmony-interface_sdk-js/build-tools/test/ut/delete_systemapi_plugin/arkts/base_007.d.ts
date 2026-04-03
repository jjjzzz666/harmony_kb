/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
/**
 * @file Provides the capability of integrating advertising services with vendors
 * @kit AdsKit
 */
/**
 * @since 20
 */
interface SyscapTestResult {
  testName: string;
  passed: boolean;
  description: string;
}

/**
 * @since 20
 */
declare namespace SyscapTestCases {
  /**
   * Test 1: Multi-line comment with @systemapi on separate line
   */
  const multiLineWithAtSymbol: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Multi-line comment with @systemapi on separate line";
  };

  /**
   * Test 2: Multi-line comment with @systemapi immediately after /*
   */
  const multiLineDirect: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Multi-line comment with @systemapi immediately after /*";
  };

  /**
   * Test 3:Included in the definition
   */
  const singleLineComment: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Single-line comment with @systemapi";
  };

  /**
   * Test 4: '@systemapi'
   */
  const mixedComments: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Mixed single-line and multi-line comments";
  };

  /**
   * Test 5: Indented comments
   */
  const indentedComments: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Indented comments";
  };

  /**
   * Test 6: Exact format from requirement
   * @systemapi
   * Test whether single-line comments and multi-line comments work normally
   *  
   */
  // @systemapi: Single line Test
  const exactRequirementFormat: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Exact format from requirement";
  };

  /**
   * Test 7: Multiple consecutive @systemapi comments
   */
  const consecutiveComments: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Multiple consecutive @systemapi comments";
  };

  /**
   * Test 8: No space after // in comment
   */
  const noSpaceComment: {
    readonly input: string;
    readonly expected: string;
    readonly description: "No space after // in comment";
  };

  /**
   * Test 9: Tab indented comments
   */
  const tabIndentedComments: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Tab indented comments";
  };

  /**
   * Test 10: Preservation of non-@systemapi comments
   */
  const preservationTest: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Preservation of non-@systemapi comments";
  };

  /**
   * Test 11: String literals containing @systemapi patterns
   */
  const stringLiteralsTest: {
    readonly input: string;
    readonly expected: string;
    readonly description: "String literals containing @systemapi patterns";
  };

  /**
   * Test 12: Complete example from requirement
   */
  const completeExample: {
    readonly input: string;
    readonly expected: string;
    readonly description: "Complete example from requirement";
  };
}

/**
 * Function signature for removing @systemapi comments
 * Implementation should be provided separately
 */
declare function removeSyscapComments(code: string): string;

/**
 * Test runner interface - implementation should be in .ts file
 */
declare interface SyscapTestRunner {
  /**
   * Run all tests and return results
   */
  runAllTests(): SyscapTestResult[];

  /**
   * Run specific Test by name
   */
  runTest(testName: keyof typeof SyscapTestCases): SyscapTestResult;

  /**
   * Validate Test cases (check that inputs/expected are properly formatted)
   */
  validateTestCases(): boolean;
}

/**
 * @since 20
 */
declare namespace SyscapPatterns {
  /**
   * Pattern for single-line comments starting with // followed by @systemapi
   */
  const singleLinePattern: RegExp;

  /**
   * Pattern for multi-line comments containing @systemapi
   */
  const multiLinePattern: RegExp;

  /**
   * Combined pattern for both comment types
   */
  const combinedPattern: RegExp;
}

/**
 * @since 20
 */
declare namespace SyscapErrors {
  /**
   * Error when comment removal fails
   */
  interface RemovalError extends Error {
    readonly code: string;
    readonly lineNumber?: number;
    readonly columnNumber?: number;
  }

  /**
   * Error when Test validation fails
   */
  interface ValidationError extends Error {
    readonly testName: string;
    readonly actual: string;
    readonly expected: string;
  }

  /**
   * Error when pattern matching fails
   */
  interface PatternError extends Error {
    readonly pattern: string;
    readonly input: string;
  }
}

/**
 * @systemapi Test if everything is deleted
 */
declare namespace SyscapTestUtils {
  /**
   * Normalize code string for comparison
   */
  type NormalizeFunction = (code: string) => string;

  /**
   * Compare function for Test results
   */
  type CompareFunction = (actual: string, expected: string) => boolean;

  /**
   * Test case validator
   */
  type TestCaseValidator = (testCase: {
    input: string;
    expected: string;
    description: string;
  }) => boolean;
}

/**
 * Export all declarations
 */
export {
  SyscapTestResult,
  SyscapTestCases,
  removeSyscapComments,
  SyscapTestRunner,
  SyscapPatterns,
  SyscapErrors,
  SyscapTestUtils
};