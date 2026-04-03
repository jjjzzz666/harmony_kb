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

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import { OperateType } from '../model/Enums';
import { OPERATE_MESSAGE_MAP } from '../model/Constants';

export function makePackagingOption(name: string, version: string, customCallback: Function): Command {
  const program: Command = new Command();
  program
    .name(name)
    .version(version);
  program
    .option('--path <string>', 'path name')
    .option('--type <string>', 'handle type')
    .action((opts) => {
      customCallback(opts.path, opts.type);
    });
  return program;
}

/**
 * 
 * @param { string } apiPath 需要处理的api文件所在路径
 * @param { string } rootPath ets文件夹路径
 * @returns { Set<string> } 需要处理的api文件的相对于ets目录的路径
 */
export function getApiFileName(apiPath: string, rootPath: string, allApiFilePathSet: Set<string>) {
  const apiFilePathSet: Set<string> = new Set<string>();
  const fileNames: string[] = fs.readdirSync(apiPath);

  fileNames.forEach((fileName: string) => {
    const apiFilePath: string = path.join(apiPath, fileName).replace(/\\/g, '/');
    const stat: fs.Stats = fs.statSync(apiFilePath);

    if (stat.isDirectory()) {
      getApiFileName(apiFilePath, rootPath, allApiFilePathSet);
    } else {
      const apiRelativePath: string = apiFilePath.replace(rootPath, '');
      allApiFilePathSet.add(apiRelativePath);
    }
  });
  return apiFilePathSet;
}

export function getOperateMessage(operateType: OperateType, ...supplys: string[]): string {
  const operateMessage: string | undefined = OPERATE_MESSAGE_MAP.get(operateType);
  supplys.forEach((supply: string, index: number) => {
    // TODO 替换$2
  });
  return operateMessage ?? '';
}