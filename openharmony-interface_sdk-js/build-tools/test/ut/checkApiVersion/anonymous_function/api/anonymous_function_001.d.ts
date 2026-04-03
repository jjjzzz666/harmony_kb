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
 * @since 20
 */
export function namedFunction(): void;

/**
 * @since 26
 */
export const arrowFunction: () => void;

/**
 * @since 26.0.0
 */
export const higherOrderFunction: (callback: () => void) => void;

/**
 * @since 27
 */
export class MyClass {
  /**
   * @since 27.0.0
   */
  constructor();

  /**
   * @since 27.1.0
   */
  method(param: (() => void)): void;
}
