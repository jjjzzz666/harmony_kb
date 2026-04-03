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
declare namespace SystemApiTags {
    /**
     * Tag to identify system API comments
     */
    const SYSTEMAPI_TAG: "@systemapi";

    /**
     * Version tag for system API
     */
    const SINCE_TAG: "@since";

    /**
     * Target version for system API removal
     */
    const TARGET_VERSION: "20";

    /**
     * Alternative system API tag format
     */
    const SYSTEMAPI_TAG_ALT: "systemapi";

    /**
     * Alternative since tag format
     */
    const SINCE_TAG_ALT: "since";

    /**
     * Combined tag pattern for matching
     */
    const COMBINED_TAG_PATTERN: "@systemapi.*@since 20|@since 20.*@systemapi";

    /**
     * Single line comment prefix
     */
    const SINGLE_LINE_COMMENT_PREFIX: "//";

    /**
     * Multi-line comment start
     */
    const MULTILINE_COMMENT_START: "/*";

    /**
     * Multi-line comment end
     */
    const MULTILINE_COMMENT_END: "*/";

    /**
     * JSDoc comment start
     */
    const JSDOC_COMMENT_START: "/**";
}

/**
 * Test scenario constants
 */
declare namespace TestScenarios {
    /**
     * Class definition test scenario
     */
    const CLASS_SCENARIO: "class-definition";

    /**
     * Interface definition test scenario
     */
    const INTERFACE_SCENARIO: "interface-definition";

    /**
     * Function definition test scenario
     */
    const FUNCTION_SCENARIO: "function-definition";

    /**
     * Type alias test scenario
     */
    const TYPE_ALIAS_SCENARIO: "type-alias-definition";

    /**
     * Enum test scenario
     */
    const ENUM_SCENARIO: "enum-definition";

    /**
     * Decorator test scenario
     */
    const DECORATOR_SCENARIO: "decorator-definition";

    /**
     * Generic test scenario
     */
    const GENERIC_SCENARIO: "generic-definition";

    /**
     * Namespace test scenario
     */
    const NAMESPACE_SCENARIO: "namespace-definition";

    /**
     * Module test scenario
     */
    const MODULE_SCENARIO: "module-export";

    /**
     * Variable test scenario
     */
    const VARIABLE_SCENARIO: "variable-declaration";

    /**
     * Mixed content test scenario
     */
    const MIXED_SCENARIO: "mixed-content";

    /**
     * Edge case test scenario
     */
    const EDGE_CASE_SCENARIO: "edge-case";

    /**
     * String literal test scenario
     */
    const STRING_LITERAL_SCENARIO: "string-literal";

    /**
     * Template literal test scenario
     */
    const TEMPLATE_LITERAL_SCENARIO: "template-literal";

    /**
     * Regular expression test scenario
     */
    const REGEX_SCENARIO: "regular-expression";

    /**
     * Nested comment test scenario
     */
    const NESTED_COMMENT_SCENARIO: "nested-comment";

    /**
     * Inline comment test scenario
     */
    const INLINE_COMMENT_SCENARIO: "inline-comment";

    /**
     * Multiple comment test scenario
     */
    const MULTIPLE_COMMENT_SCENARIO: "multiple-comments";

    /**
     * Whitespace variation test scenario
     */
    const WHITESPACE_SCENARIO: "whitespace-variation";
}

/**
 * Expected behavior constants
 */
declare namespace ExpectedBehaviors {
    /**
     * Behavior for comments with both tags
     */
    const REMOVE_COMMENT: "remove-entire-comment-block";

    /**
     * Behavior for comments with only @systemapi
     */
    const PRESERVE_COMMENT: "preserve-comment";

    /**
     * Behavior for comments with only @since 20
     */
    const PRESERVE_SINCE_ONLY: "preserve-since-only-comment";

    /**
     * Behavior for string literals
     */
    const PRESERVE_STRING: "preserve-string-content";

    /**
     * Behavior for template literals
     */
    const PRESERVE_TEMPLATE: "preserve-template-content";

    /**
     * Behavior for regular expressions
     */
    const PRESERVE_REGEX: "preserve-regex-content";

    /**
     * Behavior for nested comments
     */
    const REMOVE_PARENT_ONLY: "remove-only-parent-comment";

    /**
     * Behavior for inline comments
     */
    const REMOVE_INLINE: "remove-inline-comment";

    /**
     * Behavior for multiple tags
     */
    const REMOVE_WITH_MULTIPLE_TAGS: "remove-with-multiple-tags";

    /**
     * Behavior for different whitespace
     */
    const REMOVE_REGARDLESS_WHITESPACE: "remove-regardless-whitespace";
}

/**
 * Comment format constants
 */
declare namespace CommentFormats {
    /**
     * Standard JSDoc format
     */
    const JSDOC_FORMAT: "/** ... */";

    /**
     * Multi-line block comment format
     */
    const MULTILINE_FORMAT: "/* ... */";

    /**
     * Single line comment format
     */
    const SINGLE_LINE_FORMAT: "// ...";

    /**
     * Inline comment format
     */
    const INLINE_FORMAT: "/* ... */ within line";

    /**
     * Indented comment format
     */
    const INDENTED_FORMAT: "  /* ... */";

    /**
     * Tabbed comment format
     */
    const TABBED_FORMAT: "\t/* ... */";

    /**
     * Starred multi-line format
     */
    const STARRED_MULTILINE: "/*\n * ...\n */";

    /**
     * No-space format
     */
    const NO_SPACE_FORMAT: "/**@systemapi*/";

    /**
     * Extra space format
     */
    const EXTRA_SPACE_FORMAT: "/**  @systemapi  */";
}

/**
 * Test result status constants
 */
declare namespace TestStatus {
    /**
     * Test passed successfully
     */
    const PASSED: "passed";

    /**
     * Test failed
     */
    const FAILED: "failed";

    /**
     * Test errored
     */
    const ERRORED: "errored";

    /**
     * Test skipped
     */
    const SKIPPED: "skipped";

    /**
     * Test pending
     */
    const PENDING: "pending";
}

/**
 * Error code constants
 */
declare namespace ErrorCodes {
    /**
     * Pattern matching error
     */
    const PATTERN_ERROR: "PATTERN_MATCH_ERROR";

    /**
     * Removal error
     */
    const REMOVAL_ERROR: "COMMENT_REMOVAL_ERROR";

    /**
     * Validation error
     */
    const VALIDATION_ERROR: "TEST_VALIDATION_ERROR";

    /**
     * Comparison error
     */
    const COMPARISON_ERROR: "OUTPUT_COMPARISON_ERROR";

    /**
     * Format error
     */
    const FORMAT_ERROR: "COMMENT_FORMAT_ERROR";

    /**
     * Whitespace error
     */
    const WHITESPACE_ERROR: "WHITESPACE_HANDLING_ERROR";

    /**
     * String preservation error
     */
    const STRING_ERROR: "STRING_PRESERVATION_ERROR";

    /**
     * Nested comment error
     */
    const NESTED_ERROR: "NESTED_COMMENT_ERROR";
}

/**
 * Pattern matching constants
 */
declare namespace PatternConstants {
    /**
     * Pattern for @systemapi tag
     */
    const SYSTEMAPI_PATTERN: "@systemapi";

    /**
     * Pattern for @since 20 tag
     */
    const SINCE_20_PATTERN: "@since 20";

    /**
     * Pattern for any @since tag
     */
    const ANY_SINCE_PATTERN: "@since\\s+\\d+";

    /**
     * Pattern for any version number
     */
    const VERSION_PATTERN: "\\d+";

    /**
     * Pattern for comment block
     */
    const COMMENT_BLOCK_PATTERN: "/\\*\\*[\\s\\S]*?\\*/";

    /**
     * Pattern for multi-line comment
     */
    const MULTILINE_COMMENT_PATTERN: "/\\*[\\s\\S]*?\\*/";

    /**
     * Pattern for single line comment
     */
    const SINGLE_LINE_COMMENT_PATTERN: "//.*";

    /**
     * Pattern for both tags in any order
     */
    const BOTH_TAGS_PATTERN: "(@systemapi.*@since 20|@since 20.*@systemapi)";

    /**
     * Pattern for tags with any whitespace
     */
    const TAGS_WITH_WHITESPACE: "@systemapi\\s+@since\\s+20|@since\\s+20\\s+@systemapi";

    /**
     * Pattern for tags on same line
     */
    const TAGS_SAME_LINE: ".*@systemapi.*@since 20.*|.*@since 20.*@systemapi.*";

    /**
     * Pattern for tags on separate lines
     */
    const TAGS_SEPARATE_LINES: "@systemapi[\\s\\S]*?@since 20|@since 20[\\s\\S]*?@systemapi";
}

/**
 * Test configuration constants
 */
declare namespace TestConfig {
    /**
     * Default test timeout in milliseconds
     */
    const DEFAULT_TIMEOUT: 5000;

    /**
     * Maximum test cases
     */
    const MAX_TEST_CASES: 100;

    /**
     * Maximum input length
     */
    const MAX_INPUT_LENGTH: 10000;

    /**
     * Maximum output length
     */
    const MAX_OUTPUT_LENGTH: 10000;

    /**
     * Default indentation spaces
     */
    const DEFAULT_INDENT: 2;

    /**
     * Tab size for formatting
     */
    const TAB_SIZE: 4;

    /**
     * Line ending for normalization
     */
    const LINE_ENDING: "\n";

    /**
     * Default encoding
     */
    const DEFAULT_ENCODING: "utf-8";

    /**
     * Normalize line endings
     */
    const NORMALIZE_LINE_ENDINGS: true;

    /**
     * Trim whitespace
     */
    const TRIM_WHITESPACE: true;

    /**
     * Collapse multiple empty lines
     */
    const COLLAPSE_EMPTY_LINES: true;
}


/**
 * Export all constants for external use
 */
export { SystemApiTags, TestScenarios, ExpectedBehaviors, CommentFormats, TestStatus, ErrorCodes, PatternConstants, TestConfig };