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

// [Start cmac_key_ar]

import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from "@kit.BasicServicesKit";
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import testNapi from 'libentry.so';

/* 1.确定密钥别名 */
let keyAlias = 'test_cmac';
let handle: number;
let plainText = '123456';
let IV = cryptoFramework.createRandom().generateRandomSync(8).data;
let macData: Uint8Array;

function StringToUint8Array(str: String) {
  let arr: number[] = new Array();
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

function Uint8ArrayToString(fileData: Uint8Array) {
  let dataString = '';
  for (let i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i]);
  }
  return dataString;
}

/* 2.初始化密钥生成属性集 */
function GenerateKeyProperties() {
  const properties: Array<huks.HuksParam> = [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_3DES
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_3DES_KEY_SIZE_128
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_MAC
  }];
  return properties;
}

/* 3.初始化CMAC属性集 */
function GetCmacProperties() {
  const properties: Array<huks.HuksParam> = [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_CMAC
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_3DES_KEY_SIZE_128
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_MAC
  }, {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC
  }, {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_ISO_IEC_9797_1
  }, {
    tag: huks.HuksTag.HUKS_TAG_IV,
    value: IV
  }];
  return properties;
}

/* 4.生成密钥 */
async function GenerateCmacKey() {
  /* 4.1 获取生成密钥算法参数配置 */
  let genProperties = GenerateKeyProperties();
  let options: huks.HuksOptions = {
    properties: genProperties
  }
  /* 4.2 调用generateKeyItem */
  await huks.generateKeyItem(keyAlias, options)
    .then(() => {
      console.info(`promise: generate cmac key success`);
    }).catch((error: BusinessError) => {
      console.error(`promise: generate cmac key failed, errCode : ${error.code}, errMsg : ${error.message}`);
    })
}

/* 5.执行CMAC操作 */
async function CmacData() {
  /* 5.1 获取CMAC算法参数配置 */
  let cmacProperties = GetCmacProperties();
  let options: huks.HuksOptions = {
    properties: cmacProperties,
    inData: StringToUint8Array(plainText)
  }
  /* 5.2 调用initSession获取handle */
  await huks.initSession(keyAlias, options)
    .then((data) => {
      handle = data.handle;
    }).catch((error: BusinessError) => {
      console.error(`promise: init EncryptData failed, errCode : ${error.code}, errMsg : ${error.message}`);
    })
  /* 5.3 调用finishSession获取CMAC的结果 */
  await huks.finishSession(handle, options)
    .then((data) => {
      macData = data.outData as Uint8Array;
      console.info(`promise: cmac data success, data is ${Uint8ArrayToString(macData)}`);
    }).catch((error: BusinessError) => {
      console.error(`promise: cmac data failed, errCode : ${error.code}, errMsg : ${error.message}`);
    })
}

async function testCMAC(): Promise<string> {
  await GenerateCmacKey();
  await CmacData();
  return 'Success';
}

// [End cmac_key_ar]

@Entry
@Component
struct Index {
  @State message: string = 'CMAC Key';

  build() {
    Column({ space: 5 }) {
      Text(this.message)
        .fontWeight(FontWeight.Regular)
        .fontSize($r('sys.float.ohos_id_text_size_body1'))
        .fontColor($r('sys.color.ohos_id_color_text_primary'))
        .maxLines(Infinity)
        .textAlign(TextAlign.Start)
      Button($r('app.string.call_cpp'))
        .padding('12vp')
        .height('40vp')
        .borderRadius($r('sys.float.ohos_id_corner_radius_button'))
        .backgroundColor($r('sys.color.ohos_id_color_emphasize'))
        .fontSize('14sp')
        .fontColor('#ffffff')
        .onClick(() => {
          let ret: number = testNapi.cmacKey();
          this.message = 'C/C++ Call Result: ' + ret.toString();
        })
      Button($r('app.string.call_arkts'))
        .padding('12vp')
        .height('40vp')
        .borderRadius($r('sys.float.ohos_id_corner_radius_button'))
        .backgroundColor($r('sys.color.ohos_id_color_emphasize'))
        .fontSize('14sp')
        .fontColor('#ffffff')
        .onClick(async () => {
          let ret = await testCMAC();
          this.message = 'ArkTS Call Result: ' + ret;
        })
    }
    .width('100%')
    .height('100%')
  }
}