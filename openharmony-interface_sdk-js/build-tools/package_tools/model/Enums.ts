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

export enum PackagingType {
  ETS = 'ets',
  ETS2 = 'ets2',
  NO_TAG_IN_ETS2 = 'noTagInEts2'
}

export enum PackagingModelType {
  ETS = 'ets',
  ETS2 = 'ets2',
  BOTH = 'both'
}

export enum LogType {
  INFO = 'info',
  ERROR = 'error'
}

export enum OperateType {
  DELETE_FILE = 'delete_file',
  COPY_FILE = 'copy_file',
  DELETE_IF_STATEMENT = 'delete_if_statement',
  ADD_USE_STATIC = 'add_use_static',
  DELETE_ARKTS_TAG = 'delete_arkts_tag',
  UPDATE_SINCE_TAG = 'update_since_tag',
  DELETE_HISTORY_JSDOC = 'delete_history_jsdoc',
  DELETE_DEPRECATED_API = 'delete_deprecated_api'
  // TODO
}