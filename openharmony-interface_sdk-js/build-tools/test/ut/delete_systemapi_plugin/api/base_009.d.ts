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
 * Test case definition for @systemapi comment removal
 */
export interface SystemApiTestCase {
    /** Unique identifier for the test case */
    readonly id: string;
    /** Human-readable test name */
    readonly name: string;
    /** Input TypeScript code with @systemapi comments */
    readonly input: string;
    /** Expected output after removing @systemapi comments */
    readonly expected: string;
    /** Description of what the test verifies */
    readonly description: string;
    /** Category of the test case */
    readonly category: TestCategory;
}

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
export type TestCategory = 
    | "class-definition"
    | "interface-definition" 
    | "function-definition"
    | "type-definition"
    | "enum-definition"
    | "decorator-definition"
    | "generic-definition"
    | "module-declaration"
    | "namespace-declaration"
    | "variable-declaration"
    | "string-literal"
    | "edge-case"
    | "mixed-content";

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
 * Pattern matching constants for @systemapi detection
 */
export interface SystemApiPatterns {
    /** Exact pattern for @systemapi tag */
    readonly SYSTEMAPI_TAG: "@systemapi";
    /** Exact pattern for @since tag */
    readonly SINCE_TAG: "@since";
    /** Target version to check */
    readonly TARGET_VERSION: "20";
    /** Combined tag pattern */
    readonly COMBINED_PATTERN: string;
    /** Pattern for multi-line comments */
    readonly MULTILINE_COMMENT_PATTERN: string;
    /** Pattern for single-line comments */
    readonly SINGLE_COMMENT_PATTERN: string;
    /** Pattern for JSDoc comments */
    readonly JSDOC_COMMENT_PATTERN: string;
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
export type TestErrorCode = 
    | "REMOVAL_FAILED"
    | "INCORRECT_REMOVAL"
    | "STRING_PRESERVATION_FAILED"
    | "WHITESPACE_MISMATCH"
    | "TIMEOUT"
    | "INVALID_INPUT"
    | "UNEXPECTED_ERROR";

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

// ============ TEST CASE DECLARATIONS ============

/**
 * Test case: Class definition with @systemapi
 */
export const CLASS_DEFINITION_TEST: SystemApiTestCase;

/**
 * Test case: Interface definition with @systemapi
 */
export const INTERFACE_DEFINITION_TEST: SystemApiTestCase;

/**
 * Test case: Function definition with @systemapi
 */
export const FUNCTION_DEFINITION_TEST: SystemApiTestCase;

/**
 * Test case: Type alias with @systemapi
 */
export const TYPE_ALIAS_TEST: SystemApiTestCase;

/**
 * Test case: Enum definition with @systemapi
 */
export const ENUM_DEFINITION_TEST: SystemApiTestCase;

/**
 * Test case: Decorator with @systemapi
 */
export const DECORATOR_TEST: SystemApiTestCase;

/**
 * Test case: Generic type with @systemapi
 */
export const GENERIC_TEST: SystemApiTestCase;

/**
 * Test case: Module declaration with @systemapi
 */
export const MODULE_TEST: SystemApiTestCase;

/**
 * Test case: Namespace with @systemapi
 */
export const NAMESPACE_TEST: SystemApiTestCase;

/**
 * Test case: Variable declaration with @systemapi
 */
export const VARIABLE_TEST: SystemApiTestCase;

/**
 * Test case: String literals containing @systemapi patterns
 */
export const STRING_LITERAL_TEST: SystemApiTestCase;

/**
 * Test case: Mixed JSDoc tags with @systemapi
 */
export const MIXED_JSDOC_TEST: SystemApiTestCase;

/**
 * Test case: Nested comments with @systemapi
 */
export const NESTED_COMMENT_TEST: SystemApiTestCase;

/**
 * Test case: Multiple @systemapi tags in one comment
 */
export const MULTIPLE_TAGS_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with different whitespace variations
 */
export const WHITESPACE_VARIATION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi on same line as @since
 */
export const SAME_LINE_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with only @systemapi tag
 */
export const SYSTEMAPI_ONLY_TEST: SystemApiTestCase;

/**
 * Test case: @since 20 without @systemapi
 */
export const SINCE_ONLY_TEST: SystemApiTestCase;

/**
 * Test case: Template literals with @systemapi
 */
export const TEMPLATE_LITERAL_TEST: SystemApiTestCase;

/**
 * Test case: Regular expressions containing @systemapi
 */
export const REGEX_TEST: SystemApiTestCase;

/**
 * Test case: Complex class with inheritance and @systemapi
 */
export const COMPLEX_CLASS_TEST: SystemApiTestCase;

/**
 * Test case: Abstract class with @systemapi methods
 */
export const ABSTRACT_CLASS_TEST: SystemApiTestCase;

/**
 * Test case: Interface extension with @systemapi
 */
export const INTERFACE_EXTENSION_TEST: SystemApiTestCase;

/**
 * Test case: Type intersection with @systemapi
 */
export const TYPE_INTERSECTION_TEST: SystemApiTestCase;

/**
 * Test case: Conditional types with @systemapi
 */
export const CONDITIONAL_TYPE_TEST: SystemApiTestCase;

/**
 * Test case: Mapped types with @systemapi
 */
export const MAPPED_TYPE_TEST: SystemApiTestCase;

/**
 * Test case: Function overloads with @systemapi
 */
export const FUNCTION_OVERLOAD_TEST: SystemApiTestCase;

/**
 * Test case: Async functions with @systemapi
 */
export const ASYNC_FUNCTION_TEST: SystemApiTestCase;

/**
 * Test case: Generator functions with @systemapi
 */
export const GENERATOR_FUNCTION_TEST: SystemApiTestCase;

/**
 * Test case: Arrow functions with @systemapi
 */
export const ARROW_FUNCTION_TEST: SystemApiTestCase;

/**
 * Test case: Constructor with @systemapi
 */
export const CONSTRUCTOR_TEST: SystemApiTestCase;

/**
 * Test case: Property decorators with @systemapi
 */
export const PROPERTY_DECORATOR_TEST: SystemApiTestCase;

/**
 * Test case: Parameter decorators with @systemapi
 */
export const PARAM_DECORATOR_TEST: SystemApiTestCase;

/**
 * Test case: Method decorators with @systemapi
 */
export const METHOD_DECORATOR_TEST: SystemApiTestCase;

/**
 * Test case: Accessor decorators with @systemapi
 */
export const ACCESSOR_DECORATOR_TEST: SystemApiTestCase;

/**
 * Test case: Ambient declarations with @systemapi
 */
export const AMBIENT_DECLARATION_TEST: SystemApiTestCase;

/**
 * Test case: Global augmentations with @systemapi
 */
export const GLOBAL_AUGMENTATION_TEST: SystemApiTestCase;

/**
 * Test case: Import/export statements with @systemapi comments
 */
export const IMPORT_EXPORT_TEST: SystemApiTestCase;

/**
 * Test case: Triple-slash directives with @systemapi
 */
export const TRIPLE_SLASH_TEST: SystemApiTestCase;

/**
 * Test case: Empty comment with @systemapi
 */
export const EMPTY_COMMENT_TEST: SystemApiTestCase;

/**
 * Test case: Comment with only whitespace and @systemapi
 */
export const WHITESPACE_ONLY_TEST: SystemApiTestCase;

/**
 * Test case: Multiple consecutive @systemapi comments
 */
export const CONSECUTIVE_COMMENTS_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi at file start
 */
export const FILE_START_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi at file end
 */
export const FILE_END_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in the middle of code
 */
export const MIDDLE_OF_CODE_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with unusual indentation
 */
export const UNUSUAL_INDENTATION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with tabs instead of spaces
 */
export const TAB_INDENTATION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with mixed indentation
 */
export const MIXED_INDENTATION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in single-line block comment
 */
export const SINGLE_LINE_BLOCK_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with no space after asterisk
 */
export const NO_SPACE_AFTER_ASTERISK_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with extra spaces
 */
export const EXTRA_SPACES_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with @since on different lines with other tags
 */
export const WITH_OTHER_TAGS_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with version 20 but different format
 */
export const VERSION_FORMAT_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi with multiple @since tags
 */
export const MULTIPLE_SINCE_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in deprecated comment
 */
export const DEPRECATED_COMMENT_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in example comment
 */
export const EXAMPLE_COMMENT_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in param description
 */
export const PARAM_DESCRIPTION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in returns description
 */
export const RETURNS_DESCRIPTION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in throws description
 */
export const THROWS_DESCRIPTION_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in type parameter description
 */
export const TYPE_PARAM_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in see tag
 */
export const SEE_TAG_TEST: SystemApiTestCase;

/**
 * Test case: @systemapi in link tag
 */
export const LINK_TAG_TEST: SystemApiTestCase;

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
 * Pattern constants for @systemapi detection
 */
export const PATTERNS: SystemApiPatterns;

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
