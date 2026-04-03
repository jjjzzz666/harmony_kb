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
 * Test result structure
 */
export interface SystemApiTestResult {
    /** Test case identifier */
    readonly testId: string;
    /** Whether the test passed */
    readonly passed: boolean;
    /** Actual output from the comment removal function */
    readonly actual: string;
    /** Error message if test failed */
    readonly error?: string;
    /** Execution time in milliseconds */
    readonly executionTime?: number;
}
/**
 * Categories of test cases
 */
export type TestCategory = "class-definition" | "interface-definition" | "function-definition" | "type-definition" | "enum-definition" | "decorator-definition" | "generic-definition" | "module-declaration" | "namespace-declaration" | "variable-declaration" | "string-literal" | "edge-case" | "mixed-content";
/**
 * Test configuration options
 */
export interface TestConfig {
    /** Whether to normalize line endings before comparison */
    readonly normalizeLineEndings: boolean;
    /** Whether to trim whitespace before comparison */
    readonly trimWhitespace: boolean;
    /** Whether to preserve empty lines */
    readonly preserveEmptyLines: boolean;
    /** Maximum time in milliseconds for each test */
    readonly timeout: number;
    /** Whether to show detailed output */
    readonly verbose: boolean;
}
/**
 * Function signature for comment removal
 */
export type CommentRemovalFunction = (code: string) => string;
/**
 * Test runner interface
 */
export interface TestRunner {
    /** Run all test cases */
    runAllTests(): readonly SystemApiTestResult[];
    /** Run specific test case by ID */
    runTest(testId: string): SystemApiTestResult | undefined;
    /** Run tests by category */
    runTestsByCategory(category: TestCategory): readonly SystemApiTestResult[];
    /** Get test case by ID */
    getTestCase(testId: string): SystemApiTestCase | undefined;
    /** Get all test cases */
    getAllTestCases(): readonly SystemApiTestCase[];
}
/**
 * Error types for test failures
 */
export interface TestError {
    /** Error code */
    readonly code: TestErrorCode;
    /** Error message */
    readonly message: string;
    /** Related test case ID */
    readonly testId?: string;
    /** Line number where error occurred */
    readonly lineNumber?: number;
}
/**
 * Error codes for test failures
 */
export type TestErrorCode = "REMOVAL_FAILED" | "INCORRECT_REMOVAL" | "STRING_PRESERVATION_FAILED" | "WHITESPACE_MISMATCH" | "TIMEOUT" | "INVALID_INPUT" | "UNEXPECTED_ERROR";
/**
 * Test suite metadata
 */
export interface TestSuiteMetadata {
    /** Suite name */
    readonly name: "SystemAPI Comment Removal Test Suite";
    /** Suite version */
    readonly version: "1.0.0";
    /** Test count */
    readonly totalTests: number;
    /** Categories covered */
    readonly categories: readonly TestCategory[];
    /** Last updated timestamp */
    readonly lastUpdated: string;
}
// ============ COLLECTIONS ============
/**
 * All test cases organized by category
 */
export const TEST_CASES_BY_CATEGORY: {
    readonly [K in TestCategory]: readonly SystemApiTestCase[];
};
/**
 * All test cases as a flat array
 */
export const ALL_TEST_CASES: readonly SystemApiTestCase[];
/**
 * Test cases that should pass (both tags present)
 */
export const SHOULD_PASS_CASES: readonly SystemApiTestCase[];
/**
 * Test cases that should be preserved (only one tag)
 */
export const SHOULD_PRESERVE_CASES: readonly SystemApiTestCase[];
/**
 * Test cases for string literals (should never be removed)
 */
export const STRING_LITERAL_CASES: readonly SystemApiTestCase[];
/**
 * Test cases for edge scenarios
 */
export const EDGE_CASES: readonly SystemApiTestCase[];
// ============ VALIDATION FUNCTIONS ============
/**
 * Function signature for validating test cases
 */
export type TestCaseValidator = (testCase: SystemApiTestCase) => boolean;
/**
 * Function signature for comparing test results
 */
export type ResultComparator = (actual: string, expected: string, config?: TestConfig) => boolean;
/**
 * Function signature for reporting test results
 */
export type ResultReporter = (results: readonly SystemApiTestResult[]) => void;
// ============ CONSTANTS ============
/**
 * Default test configuration
 */
export const DEFAULT_TEST_CONFIG: TestConfig;
/**
 * Test suite metadata
 */
export const SUITE_METADATA: TestSuiteMetadata;
/**
 * Version of the test suite
 */
export const VERSION: "1.0.0";
/**
 * Minimum supported TypeScript version
 */
export const MIN_TS_VERSION: "4.0.0";
/**
 * Maximum supported TypeScript version
 */
export const MAX_TS_VERSION: "5.4.0";
// ============ TYPES FOR CUSTOM ASSERTIONS ============
/**
 * Custom assertion result
 */
export interface AssertionResult {
    readonly passed: boolean;
    readonly message: string;
    readonly expected?: unknown;
    readonly actual?: unknown;
}
/**
 * Assertion function type
 */
export type Assertion = (condition: boolean, message: string) => AssertionResult;
/**
 * Equality assertion type
 */
export type EqualityAssertion = <T>(actual: T, expected: T, message: string) => AssertionResult;
/**
 * String assertion type
 */
export type StringAssertion = (actual: string, expected: string, message: string) => AssertionResult;
