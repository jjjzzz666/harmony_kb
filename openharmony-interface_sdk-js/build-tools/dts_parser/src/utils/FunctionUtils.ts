/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import path from 'path';
import { NumberConstant } from './Constant';
import { kitData } from '../../kit.json';
import { fileContent } from '../../subsystem.json';

export class FunctionUtils {
  /**
   * 判断文件路径是否为ArkUI，返回ArkUI或文件名
   *
   * @param fileFilePath 文件路径
   * @returns { string } 返回ArkUI或文件名
   */
  static getPackageName(fileFilePath: string): string {
    const packageName =
      fileFilePath.indexOf('component\\ets\\') >= 0 || fileFilePath.indexOf('component/ets/') >= 0 ?
        'ArkUI' :
        path.basename(fileFilePath).replace(/@|.d.ts$/g, '');
    return packageName;
  }

  static handleSyscap(syscap: string): string {
    const syscapArr: Array<string> = syscap.split('.');
    let syscapField: string = '';

    switch (syscapArr[1]) {
      case 'MiscServices':
        syscapField = syscapArr[NumberConstant.SYSCAP_KEY_FIELD_INDEX];
        break;
      case 'Communication':
        if (splitSubsystem.has(syscapArr[NumberConstant.SYSCAP_KEY_FIELD_INDEX])) {
          syscapField = syscapArr[NumberConstant.SYSCAP_KEY_FIELD_INDEX];
          break;
        } else {
          syscapField = syscapArr[1];
          break;
        }
      default:
        syscapField = syscapArr[1];
    }
    return syscapField;
  }

  static readSubsystemFile(): SubSystemData {
    const subsystemMap: Map<string, string> = new Map();
    const fileNameMap: Map<string, string> = new Map();

    fileContent.forEach((content: SubSystemInfo) => {
      subsystemMap.set(content.syscap, content.subsystem);
      fileNameMap.set(content.syscap, content.fileName);
    });
    return {
      subsystemMap: subsystemMap,
      fileNameMap: fileNameMap,
    };
  }

  /**
   * 遍历kit配置文件
   * 
   * @returns 
   */
  static readKitFile(): KitData {
    const subsystemMap: Map<string, string> = new Map();
    const kitNameMap: Map<string, string> = new Map();
    const filePathSet: Set<string> = new Set();
    kitData.forEach((subSystemInfo: KitInfo) => {
      subsystemMap.set(subSystemInfo.filePath, subSystemInfo.subSystem);
      kitNameMap.set(subSystemInfo.filePath, subSystemInfo.kitName);
      filePathSet.add(subSystemInfo.filePath);
    });
    return { subsystemMap, kitNameMap, filePathSet };
  }
}

/**
 * 被拆分开的子系统
 */
const splitSubsystem: Set<string> = new Set(['Bluetooth', 'NetManager']);

class SubSystemInfo {
  syscap: string = '';
  subsystem: string = '';
  fileName: string = '';
}

/**
 * 读取子系统配置文件返回的数据格式
 */
type SubSystemData = {
  subsystemMap: Map<string, string>;
  fileNameMap: Map<string, string>;
};

/**
 * 读取kit配置文件返回的数据格式
 */
export type KitData = {
  subsystemMap: Map<string, string>;
  kitNameMap: Map<string, string>;
  filePathSet: Set<string>;
};

/**
 * kit配置文件里的信息项
 */
class KitInfo {
  filePath: string = '';
  subSystem: string = '';
  kitName: string = '';
}
