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

import { PackagingModelType } from "./Enums";

export class PackagingModel {
  private apiName: string;
  private type: PackagingModelType;
  private etsPath: string;
  private ets2Path: string;

  constructor(apiName: string, type: PackagingModelType, etsPath: string = '', ets2Path: string = '') {
    this.apiName = apiName;
    this.type = type;
    this.etsPath = etsPath;
    this.ets2Path = ets2Path;
  }

  setApiName(apiName: string): void {
    this.apiName = apiName;
  }
  getApiName(): string {
    return this.apiName;
  }
  setType(type: PackagingModelType): void {
    this.type = type;
  }
  getType(): PackagingModelType {
    return this.type;
  }
  setEtsPath(etsPath: string): void {
    this.etsPath = etsPath;
  }
  getEtsPath(): string {
    return this.etsPath;
  }
  setEts2Path(ets2Path: string): void {
    this.ets2Path = ets2Path;
  }
  getEts2Path(): string {
    return this.ets2Path;
  }
}