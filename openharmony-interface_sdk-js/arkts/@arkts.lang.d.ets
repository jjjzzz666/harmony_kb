/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * ArkTS lang.
 *
 * @namespace lang
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 12
 */
/**
 * ArkTS lang.
 *
 * @namespace lang
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 18 dynamiconly
 */
declare namespace lang {
  /**
   * Base interface for all Sendable classes/interfaces.
   * 
   * @interface ISendable
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12
   */
  /**
   * Base interface for all Sendable classes/interfaces.
   *
   * @interface ISendable
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 18 dynamiconly
   */
  interface ISendable {}
}


/**
 * Enum for Retention annotation field type.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 dynamic
 */
export const enum RetentionPolicy {
  /**
   * Enumerated value, which is used to identify source annotations.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  SOURCE = 'source',
  /**
   * Enumerated value, which is used to identify bytecode annotations.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  BYTECODE = 'bytecode'
}

/**
 * An annotation used to annotate the lifecycle of other annotations.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 dynamic
 */
export @interface Retention {
  /**
   * Indicates the lifecycle of annotated annotations.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamic
   */
  policy: RetentionPolicy;
}

export default lang;