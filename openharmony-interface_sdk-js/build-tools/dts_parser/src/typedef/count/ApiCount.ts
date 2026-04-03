/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * api数量统计工具类
 */
export class ApiCountInfo {
  //api文件路径
  filePath: string = '';
  //api所属kit名称
  kitName: string = '';
  //api所属子系统名称
  subSystem: string = '';
  //同一个api文件里的api个数
  apiNumber: number = -1;

  setFilePath(filePath: string): ApiCountInfo {
    this.filePath = filePath;
    return this;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setKitName(kitName: string | undefined): ApiCountInfo {
    if (!kitName) {
      return this;
    }
    this.kitName = kitName;
    return this;
  }

  getKitName(): string {
    return this.kitName;
  }

  setsubSystem(subSystem: string | undefined): ApiCountInfo {
    if (!subSystem) {
      return this;
    }
    this.subSystem = subSystem;
    return this;
  }

  getsubSystem(): string {
    return this.subSystem;
  }

  setApiNumber(apiNumber: number): ApiCountInfo {
    this.apiNumber = apiNumber;
    return this;
  }

  getApiNumber(): number {
    return this.apiNumber;
  }
}
