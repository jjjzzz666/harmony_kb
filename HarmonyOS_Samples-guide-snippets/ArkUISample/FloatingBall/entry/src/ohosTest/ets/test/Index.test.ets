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

import hilog from '@ohos.hilog';
import { describe, it, expect } from '@ohos/hypium';
import { abilityDelegatorRegistry, Driver, ON, MatchPattern } from '@kit.TestKit';
import { UIAbility, Want } from '@kit.AbilityKit';

function sleep(time: number) {
  return new Promise<void>((resolve: Function) => setTimeout(resolve, time))
}

const DELEGATOR: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
const TAG = '[Sample_FloatingBall]';
const DOMAIN: number = 0xF811;
const BUNDLE_NAME = abilityDelegatorRegistry.getArguments().bundleName;
const WANT: Want = {
  bundleName: BUNDLE_NAME,
  abilityName: 'MainAbility'
}

export default function IndexTest() {
  describe('IndexTest', () => {
    /**
      * 静态布局：创建闪控球，不支持更新，可以关闭
      */
    it(BUNDLE_NAME + 'StaticLayout_001', 0, async (done: Function) => {
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'StaticLayout_001, begin');
      await DELEGATOR.startAbility(WANT);
      await sleep(300);

      // 测试拉起应用
      await DELEGATOR.getCurrentTopAbility().then((Ability: UIAbility) => {
        hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'StaticLayout_001, get top ability');
        expect(Ability.context.abilityInfo.name).assertEqual('MainAbility');
      })

      // Driver 初始化
      let driver = Driver.create();
      await driver.delayMs(1000);

      // 按钮元素
      let staticLayoutCreate = await driver.findComponent(ON.text('STATIC'));
      let staticLayoutClose = await driver.findComponent(ON.text('Close1'));
      
      // 测试功能按钮
      await staticLayoutCreate.click();
      await driver.delayMs(300);
      await driver.assertComponentExist(ON.text('title')); // 断言：闪控球出现
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'StaticLayout_001, FloatingBall start successfully');
      await staticLayoutClose.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('title'))).assertNull();  // 断言：闪控球消失
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'StaticLayout_001, FloatingBall stop successfully');
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'StaticLayout_001, end');
      done();
    })

    /**
      * 普通文本布局：创建闪控球，可以更新，可以关闭
      */
    it(BUNDLE_NAME + 'NormalLayout_001', 0, async (done: Function) => {
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, begin');
      await DELEGATOR.startAbility(WANT);
      await sleep(300);

      // 拉起应用
      await DELEGATOR.getCurrentTopAbility().then((Ability: UIAbility) => {
        hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, get top ability');
        expect(Ability.context.abilityInfo.name).assertEqual('MainAbility');
      })

      // Driver 初始化
      let driver = Driver.create();
      await driver.delayMs(1000);

      // 按钮元素
      let normalLayoutCreate = await driver.findComponent(ON.text('NORMAL'));
      let normalLayoutUpdate = await driver.findComponent(ON.text('Update2'));
      let normalLayoutClose = await driver.findComponent(ON.text('Close2'));
      
      // 测试功能按钮
      await normalLayoutCreate.click();
      await driver.delayMs(300);
      await driver.assertComponentExist(ON.text('content')); // 断言：闪控球出现
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, FloatingBall start successfully');
      await normalLayoutUpdate.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('content'))).assertNull();  // 断言：闪控球更新
      await driver.assertComponentExist(ON.text('newContent', MatchPattern.CONTAINS)); // 断言：闪控球更新
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, FloatingBall update successfully');
      await normalLayoutClose.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('newContent', MatchPattern.CONTAINS))).assertNull();  // 断言：闪控球消失
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, FloatingBall stop successfully');
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'NormalLayout_001, end');
      done();
    })

    /**
      * 强调文本布局：创建闪控球，可以更新，可以关闭
      */
    it(BUNDLE_NAME + 'EmphaticLayout_001', 0, async (done: Function) => {
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, begin');
      await DELEGATOR.startAbility(WANT);
      await sleep(300);

      // 测试拉起应用
      await DELEGATOR.getCurrentTopAbility().then((Ability: UIAbility) => {
        hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, get top ability');
        expect(Ability.context.abilityInfo.name).assertEqual('MainAbility');
      })

      // Driver 初始化
      let driver = Driver.create();
      await driver.delayMs(1000);

      // 按钮元素
      let emphaticLayoutCreate = await driver.findComponent(ON.text('EMPHATIC'));
      let emphaticLayoutUpdate = await driver.findComponent(ON.text('Update3'));
      let emphaticLayoutClose = await driver.findComponent(ON.text('Close3'));
      
      // 测试功能按钮
      await emphaticLayoutCreate.click();
      await driver.delayMs(300);
      await driver.assertComponentExist(ON.text('Min')); // 断言：闪控球出现
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, FloatingBall start successfully');
      await emphaticLayoutUpdate.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('Min'))).assertNull();  // 断言：闪控球更新
      await driver.assertComponentExist(ON.text('Min', MatchPattern.CONTAINS)); // 断言：闪控球更新
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, FloatingBall update successfully');
      await emphaticLayoutClose.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('Min', MatchPattern.CONTAINS))).assertNull();  // 断言：闪控球消失
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, FloatingBall stop successfully');
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'EmphaticLayout_001, end');
      done();
    })

    /**
      * 纯文本布局：创建闪控球，可以更新，可以关闭
      */
    it(BUNDLE_NAME + 'SimpleLayout_001', 0, async (done: Function) => {
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, begin');
      await DELEGATOR.startAbility(WANT);
      await sleep(300);

      // 测试拉起应用
      await DELEGATOR.getCurrentTopAbility().then((Ability: UIAbility) => {
        hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, get top ability');
        expect(Ability.context.abilityInfo.name).assertEqual('MainAbility');
      })

      // Driver 初始化
      let driver = Driver.create();
      await driver.delayMs(1000);

      // 按钮元素
      let simpleLayoutCreate = await driver.findComponent(ON.text('SIMPLE'));
      let simpleLayoutUpdate = await driver.findComponent(ON.text('Update4'));
      let simpleLayoutClose = await driver.findComponent(ON.text('Close4'));
      
      // 测试功能按钮
      await simpleLayoutCreate.click();
      await driver.delayMs(300);
      await driver.assertComponentExist(ON.text('title')); // 断言：闪控球出现
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, FloatingBall start successfully');
      await simpleLayoutUpdate.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('title'))).assertNull();  // 断言：闪控球更新
      await driver.assertComponentExist(ON.text('newTitle', MatchPattern.CONTAINS)); // 断言：闪控球更新
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, FloatingBall update successfully');
      await simpleLayoutClose.click();
      await driver.delayMs(300);
      expect(await driver.findComponent(ON.text('newTitle', MatchPattern.CONTAINS))).assertNull();  // 断言：闪控球消失
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, FloatingBall stop successfully');
      hilog.info(DOMAIN, TAG, BUNDLE_NAME + 'SimpleLayout_001, end');
      done();
    })
  })
}