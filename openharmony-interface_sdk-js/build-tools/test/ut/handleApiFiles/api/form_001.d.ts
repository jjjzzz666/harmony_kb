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
/**
 * @file
 * @kit TestKit
 */
/**
 * Test function with @form tag without version info.
 *
 * @form
 * @since 10 dynamic&static
 */
export function testForm(): void;

/**
 * Test function with @form tag and staticonly label.
 *
 * @form
 * @since 10 static
 */
export function testFormStatic(): void;

/**
 * Test function with @form tag and dynamiconly label.
 *
 * @form
 * @since 10 dynamic
 */
export function testFormDynamic(): void;
