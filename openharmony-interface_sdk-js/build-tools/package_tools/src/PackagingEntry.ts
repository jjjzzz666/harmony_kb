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

import fs from 'fs';
import path from 'path';
import { PackagingType } from "../model/Enums";
import { PackagingModel } from "../model/PackagingModel";
import { getApiFileName } from "../utils/utils";

export function packagingEntry(type: string, inputDir: string, outputDir?: string): void {
  // 获取全量API路径
  const allApiFileSet: Set<string> = collectApiFiles(inputDir);

  // 获取数据类集合
  const packagingData: PackagingModel[] = collectPackagingModels(allApiFileSet, type);

  // 处理API文件
  outputDir = outputDir ?? inputDir;
  handleApiFileByType(packagingData, type, outputDir);
}


/**
 * 获取全路径集合
 * 
 * @param {string} rootPath
 */
function collectApiFiles(rootPath: string): Set<string> {
  const allApiFilePathSet: Set<string> = new Set<string>();
  const fileNames: string[] = fs.readdirSync(rootPath);
  const apiRootPath = rootPath.replace(/\\/g, '/');
  fileNames.forEach(fileName => {
    const apiPath: string = path.join(apiRootPath, fileName);
    const stat: fs.Stats = fs.statSync(apiPath);
    if (stat.isDirectory()) {
      getApiFileName(apiPath, apiRootPath, allApiFilePathSet);
    } else {
      allApiFilePathSet.add(fileName);
    }
  });
  // 此处应收集文件全路径集合，不应分rootdir与realpath
  return allApiFilePathSet;
}

/**
 * 获取数据类
 * 
 * @param {Set<string>} allApiFiles 
 * @param {PackagingType} type 
 */
function collectPackagingModels(allApiFiles: Set<string>, type: string): PackagingModel[] {
  const packagingData: PackagingModel[] = [];
  for (const apiFiles of allApiFiles) {
    // TODO new PackagingModel()
  }
  return packagingData;
}

/**
 * 根据传入的type值去处理文件
 * 
 * @param {PackagingModel[]} packagingData 
 * @param {PackagingType} type 
 * @param {string} outputDir 
 */
function handleApiFileByType(packagingData: PackagingModel[], type: string, outputDir: string): void {
  // TODO 当outputDir未传入时，默认修改入口路径
}