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

const fs = require('fs');
const path = require('path');
const ignoreApiFileConfig = require('./ignoreApiFile.json');
const apiFileConfig = require('./apiFile.json');
// 转换配置
const DirType = {
  undefined: 'dynamic',
  1.1: 'dynamic',
  1.2: 'static',
  static: 'static',
  '1.1&1.2': 'dynamic&static',
  dynamiconly: 'dynamiconly',
  staticonly: 'staticonly',
};
// P0级别KIT，需要将动态接口转换为dynamic
const HIGH_LEVEL_KIT_SET = new Set([
  'ArkUI',
  'BasicServicesKit',
  'AbilityKit',
  'ArkData',
  'ArkTS',
  'TelephonyKit',
  'ArkGraphics2D',
  'ArkGraphics3D',
  'ArkWeb',
  'ConnectivityKit',
  'NetworkKit',
  'CameraKit',
  'CoreFileKit',
  'AudioKit',
  'MediaLibraryKit',
  'InputKit',
  'ImageKit',
  'MediaKit',
  'AVSessionKit',
  'NotificationKit',
  'LocalizationKit',
  'IMEKit',
  'DeviceCertificateKit',
  'CryptoArchitectureKit',
  'PerformanceAnalysisKit',
  'IPCKit',
  'DistributedServiceKit',
  'BackgroundTasksKit',
  'SensorServiceKit',
  'LocationKit',
  'AccessibilityKit',
  'FormKit',
  'TestKit',
  'UserAuthenticationKit',
  'RemoteCommunicationKit',
  'NearLinkKit',
  'UIDesignKit',
  'ServiceCollaborationKit',
  'NetworkBoostKit',
]);
// 非P0级别KIT的API文件，需要将动态接口转换为dynamic
const SPEC_KIT_FILE_SET = new Set([]);
// 脚本输入
const inputDir = process.argv[2] ? process.argv[2] : '';
// 脚本输出
const outDir = process.argv[3] ? process.argv[3] : '';
// 全局文件级arkts标签
let currentArkts = undefined;
// 记录调试数据
const debugInfoMap = new Map();

main();
function main() {
  const apiFiles = [];
  readFile(path.join(inputDir, 'api'), apiFiles);
  readFile(path.join(inputDir, 'arkts'), apiFiles);
  readFile(path.join(inputDir, 'kits'), apiFiles);
  apiFiles.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8'); // 文件内容
    // 非api文件，直接打印输出
    if (!isEtsFile(filePath) && !isTsFile(filePath) && !isStaticFile(filePath)) {
      writeFile(getOutFilePath(filePath), content);
      return;
    }
    const relativeFilePath = path.relative(inputDir, filePath).replace(/\\/g, '/');
    if (ignoreApiFileConfig.files.includes(relativeFilePath) || !apiFileConfig.files.includes(relativeFilePath)) {
      writeFile(getOutFilePath(filePath), content);
      return;
    }
    currentArkts = getCurrentFileType(filePath);
    let kitName = '';
    let fileAndKitComment = getFileAndKitComment(content);
    // 处理文件级arkts标签
    if (fileAndKitComment.match(/.*\@arkts (.*)\r?\n/g)) {
      currentArkts = currentArkts || RegExp.$1.replace(/\s/g, '');
      content = content.replace(
        fileAndKitComment,
        fileAndKitComment.replace(/(.*\@arkts )(.*)(\r?\n)/g, ``)
      );
    }
    // 收集kit名称
    if (content.match(/\@kit (.*)\r?\n/g)) {
      kitName = RegExp.$1.replace(/\s/g, '');
    }
    content = processContent(filePath, content, kitName);
    writeFile(getOutFilePath(filePath), content);
  });

  // 打印工具日志
  debugInfoMap.forEach((value, key) => {
    console.log(key, value);
  });
}

/**
 * 处理文件内容
 *
 * @param {string} content
 * @returns
 */
function processContent(filePath, content, kitName) {
  content = content.replace(/(\s*\/\*\*(?:(?!\/\*\*)[\s\S])*?@since[\s\S]*?\*\/\s*?)+/g, (substring, p1) => {
    // 转义特殊字符，确保安全替换
    const specialSearch = p1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return substring.replace(new RegExp(specialSearch, 'g'), () => getNewCommont(p1, kitName, filePath));
  });
  //修改if arkts
  content = content.replace(/(if arkts )(1\.1&1\.2|1\.1|1\.2)/g, (substring, p1, p2) => {
    return `${p1}${DirType[p2]}`;
  });
  return content;
}

/**
 * 获取同名文件类型（1.1/1.2）
 * @param {string} filePath
 * @returns
 */
function getCurrentFileType(filePath) {
  let sameFilePath = '';
  if (isStaticFile(filePath)) {
    return '1.2';
  } else if (isEtsFile(filePath)) {
    sameFilePath = filePath.replace(/\.d\.ets$/g, '.d.ts');
    if (fs.existsSync(sameFilePath)) {
      return '1.2';
    }
    sameFilePath = filePath.replace(/\.d\.ets$/g, '.static.d.ets');
    if (fs.existsSync(sameFilePath)) {
      return '1.1';
    }
  } else if (isTsFile(filePath)) {
    sameFilePath = filePath.replace(/\.d\.ts$/g, '.d.ets');
    if (fs.existsSync(sameFilePath)) {
      return '1.1';
    }
    sameFilePath = filePath.replace(/\.d\.ts$/g, '.static.d.ets');
    if (fs.existsSync(sameFilePath)) {
      return '1.1';
    }
  }
  return undefined;
}

// 判断是否为.d.ets文件
function isEtsFile(filePath) {
  return filePath.endsWith('.d.ets');
}

// 判断是否为.d.ts文件
function isTsFile(filePath) {
  return filePath.endsWith('.d.ts');
}

// 判断是否为.static.d.ets文件
function isStaticFile(filePath) {
  return filePath.endsWith('.static.d.ets');
}

/**
 * 获取转换后JSDoc
 * @param substring
 * @param currentArkts
 * @param filePath
 */
function getNewCommont(substring, kitName, filePath) {
  const relativePath = path.relative(inputDir, filePath);
  // 重复转换跳过
  const hasSinceTagDynamic = /\*\s+\@since\s.*(dynamic|static)/g.test(substring);
  if (hasSinceTagDynamic) {
    return substring;
  }
  // 获取版本信息
  const sinceInfo = getSinceInfo(substring, currentArkts);
  // 收集不同场景调试信息
  let sinceInfoStr = getSinceInfoString(sinceInfo);
  if (debugInfoMap.has(sinceInfoStr)) {
    debugInfoMap.set(sinceInfoStr, debugInfoMap.get(sinceInfoStr) + 1);
  } else {
    debugInfoMap.set(sinceInfoStr, 1);
  }
  if (!HIGH_LEVEL_KIT_SET.has(kitName) && !SPEC_KIT_FILE_SET.has(relativePath) && !sinceInfo.apiArkts &&
    !currentArkts) { // 若非P0接口，直接返回当前JSDoc信息
    return substring;
  }
  const sinceTagContent = parseSinceTagContent(sinceInfo, filePath);
  substring = substring.replace(/(.*@since\s+).*/g, sinceTagContent);
  if (sinceInfo.apiArkts) {
    substring = substring.replace(/.*\*\s+@arkts\s+\S*\s*(\r|\n)/g, '');
  }
  return substring;
}

// 判断是否需要转换为dynamic&static标记
function needParse2Static(arktsVersionObj, version) {
  return arktsVersionObj && arktsVersionObj['1.1'] === arktsVersionObj['1.2'] ||
    !arktsVersionObj && Number(version) >= 20;
}

// 转换@since标签文本
function parseSinceTagContent(sinceInfo, filePath) {
  const relativePath = path.relative(inputDir, filePath).replace(/\\/g, '/');
  const isDynamiconlyFile = ignoreApiFileConfig.dynamiconlyFiles.includes(relativePath);
  const isStaticonlyFile = ignoreApiFileConfig.staticonlyFiles.includes(relativePath);
  const arktsVersionObj = sinceInfo.arktsSince;
  let replaceVal = ``;
  if (sinceInfo.toDynamic) { // 转换为@since xx dynamic
    const sinceValue = sinceInfo.since || arktsVersionObj['1.1'];
    const dynamicTag = (sinceInfo.toDynamicOnly || isDynamiconlyFile) && !sinceInfo.toStatic ?
      DirType.dynamiconly :
      DirType['1.1'];
    replaceVal += `$1${sinceValue} ${dynamicTag}`;
  }
  if (sinceInfo.toDynamic && sinceInfo.toStatic) {
    replaceVal += '\n';
  }
  if (sinceInfo.toStatic) { // 转换为@since xx static
    replaceVal += `$1`;
    if (sinceInfo.since && Number(sinceInfo.since) >= 20) {
      replaceVal += `${sinceInfo.since}`;
    } else if (arktsVersionObj) {
      replaceVal += `${arktsVersionObj['1.2']}`;
    } else {
      replaceVal += `22`;
    }
    const staticTag = (sinceInfo.toStaticOnly || isStaticonlyFile) && !sinceInfo.toDynamic ?
      DirType.staticonly :
      DirType['1.2'];
    replaceVal += ` ${staticTag}`;
  }
  // 转换为@since xx dynamic&static
  if (sinceInfo.toDynamic && sinceInfo.toStatic && needParse2Static(arktsVersionObj, sinceInfo.since)) {
    replaceVal = `$1${sinceInfo.since || arktsVersionObj['1.2']} ${DirType['1.1&1.2']}`;
  }
  return replaceVal;
}

/**
 * typeof sinceInfoObj
 * @typedef sinceInfoObj
 * @type {object}
 * @property {string} currentArkts -  currentArkts.
 * @property {string} apiArkts - apiArkts.
 * @property {number} since - since ID.
 * @property {object} arktsSince - arkts since object.
 * @property {boolean} toDynamic - to dynamic.
 * @property {boolean} toStatic - to static.
 * @property {boolean} toDynamicOnly - to dynamic.
 * @property {boolean} toStaticOnly - to static.
 * @property {number} dynamicSince - dynamic since ID.
 * @property {number} staticSince -  static since ID.
 */

/**
 * 获取jsDoc中关于since的信息，用于拆分
 *
 * @param {string} jsDocStr
 * @return { sinceInfoObj }
 */
function getSinceInfo(jsDocStr, currentArkts) {
  const hasDeprecatedTag = /\*\s+\@deprecated\s+/gi.test(jsDocStr);
  const hasUseinsteadTag = /\*\s+\@useinstead\s+/gi.test(jsDocStr);
  const hasFamodelonlyTag = /\*\s+\@famodelonly\s+/gi.test(jsDocStr);
  /** @type {sinceInfoObj} */
  let sinceInfo = {
    toDynamic: false,
    toStatic: false,
    toDynamicOnly: (hasDeprecatedTag && hasUseinsteadTag) || hasFamodelonlyTag,
    toStaticOnly: false,
    currentArkts: currentArkts
  };
  const sinceStr = jsDocStr.match(/\*\s+\@since\s+(.*)/)?.[1];
  if (!isNaN(sinceStr)) {
    // 纯数字
    sinceInfo.since = Number(sinceStr);
  } else {
    // arkts对象
    try {
      sinceInfo.arktsSince = JSON.parse(sinceStr.replace(/(arkts|\s)/g, '').replace(/'/g, '"'));
    } catch (error) {
      // 不是json对象
      sinceInfo.since = sinceStr;
    }
  }

  const arktsStr = jsDocStr.match(/\*\s+\@arkts\s+(\S+)/)?.[1];
  if (arktsStr) {
    sinceInfo.apiArkts = arktsStr;
    currentArkts = arktsStr;
  }
  switch (currentArkts) {
    case undefined:
    case '1.1':
      sinceInfo.toDynamic = true;
      break;
    case '1.1&1.2':
      sinceInfo.toDynamic = true;
    case '1.2':
    case 'static':
      sinceInfo.toStatic = true;
      break;
    default:
      console.log(`${arktsStr ? 'api级' : '文件级'}处理 arkts 标签异常`);
      break;
  }
  return sinceInfo;
}

/**
 * 获取sinceInfo字符串 判断场景
 *
 * @param {sinceInfoObj} sinceInfo
 */
function getSinceInfoString(sinceInfo) {
  let sinceInfoStr = `文件级atkst标签:${sinceInfo.currentArkts},`;
  try {
    sinceInfoStr += `api节点atkts标签:${sinceInfo.apiArkts},`;
    sinceInfoStr += `since标签:${Boolean(sinceInfo.since)},`;
    sinceInfoStr += `since arkts标签:${Boolean(sinceInfo.arktsSince?.['1.1'])},`;
    sinceInfoStr += `toDynamic:${sinceInfo.toDynamic},`;
    sinceInfoStr += `toStatic:${sinceInfo.toStatic},`;
  } catch (error) {
    console.error(error);
  }
  return sinceInfoStr;
}
/**
 *
 * 防止@file和@kit段注释丢失
 * @param {string} fileFullText
 * @returns {string}
 *
 */
function getFileAndKitComment(fileFullText) {
  let fileAndKitComment = '';
  let pattern = /\/\*\*\s*\*\s*@file[\s\S]*?@kit[\s\S]*?\*\//;
  let comment = fileFullText.match(pattern);
  if (comment) {
    fileAndKitComment = comment[0];
  }
  return fileAndKitComment;
}

/**
 * 获取当前文件相对于outFir的输出路径
 *
 * @param { string } filePath
 * @return { string }
 */
function getOutFilePath(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const outFilePath = path.resolve(outDir, relativePath);
  return outFilePath;
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.error('ETS ERROR: ' + e);
  }
}

function writeFile(url, data, option) {
  fs.mkdir(path.dirname(url), { recursive: true }, (err) => {
    if (err) {
      console.error(`ERROR FOR CREATE PATH ${err}`);
    } else {
      if (data === '') {
        fs.rmSync(url);
        return;
      }
      fs.writeFileSync(url, data, option, (err) => {
        if (err) {
          console.error(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}
