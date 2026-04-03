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

// [Start floating_ball_utils]
// Utils.ts
// 该页面提供工具类，展示闪控球的创建、更新、关闭逻辑
import hilog from '@ohos.hilog';
import image from '@ohos.multimedia.image';
import { BusinessError } from '@kit.BasicServicesKit';
import { floatingBall } from '@kit.ArkUI';
import { Want } from '@kit.AbilityKit';
import { ContextUtil } from './ContextUtil';

const DOMAIN: number = 0xF811;
const TAG: string = '[Sample_FloatingBall]';
const BUNDLE_NAME: string = ContextUtil.context.abilityInfo.bundleName;

export class Utils {
    public static getRawfilePixelMapSync(path: string): image.PixelMap {
        try {
            const BUFFER = ContextUtil.context.resourceManager.getRawFileContentSync(path);
            const IMAGE_SOURCE: image.ImageSource = image.createImageSource(BUFFER.buffer as ArrayBuffer);
            hilog.debug(DOMAIN, TAG, `Get rawfile pixelMap path '${path}' successfully`);
            return IMAGE_SOURCE.createPixelMapSync();
        } catch (e) {
            hilog.error(DOMAIN, TAG, `Get rawfile pixelMap path '${path}' failed, error: ${e}`);
            throw e as Error;
        }
    }

    // 闪控球启动逻辑
    public static async onClickCreateFloatingBall(
        floatingBallController: floatingBall.FloatingBallController | undefined,
        template: floatingBall.FloatingBallTemplate,
        onActiveRowChange: (value: number) => void,  // 接收状态更新回调函数
        title: string = 'title',
        content: string = 'content',
        backgroundColor: string = '#0ff77c',
        icon?: image.PixelMap): Promise<void> {
        // 注册 监听点击回调事件
        floatingBallController?.on('click', () => {
            hilog.debug(DOMAIN, TAG, `FloatingBall onClickEvent`);
            let want: Want = {
                bundleName: BUNDLE_NAME,
                abilityName: 'MainAbility'
            }
            // 使用promise异步回调
            floatingBallController?.restoreMainWindow(want)
            .then(() => {
                hilog.debug(DOMAIN, TAG, `Success in restoring FloatingBall main window`);
            }).catch((err: BusinessError) => {
                hilog.error(DOMAIN, TAG, `failed to restore FloatingBall main window. code: ${err.code}, message: ${err.message}`);
            })
        })
        // 注册 监听状态变化事件
        floatingBallController?.on('stateChange',
        (state: floatingBall.FloatingBallState) => {
            hilog.debug(DOMAIN, TAG, `FloatingBall stateCange: ${state}`);
            if(state === floatingBall.FloatingBallState.STOPPED) {
                floatingBallController?.off('click')
                floatingBallController?.off('stateChange')
                floatingBallController = undefined;
                // 执行状态更新回调
                onActiveRowChange?.(-1);
            }
        })
        // 最后启动闪控球
        let startParams: floatingBall.FloatingBallParams = icon? {
            template: template,
            title: title,
            content: content,
            backgroundColor: backgroundColor,
            icon: icon
        } : {
            template: template,
            title: title,
            content: content,
            backgroundColor: backgroundColor
        }
        try {
            floatingBallController?.startFloatingBall(startParams)
            .then(() => {
                hilog.debug(DOMAIN, TAG, `succeed in starting FloatingBall`);
            }).catch((err: BusinessError) => {
                hilog.error(DOMAIN, TAG, `failed to start FloatingBall. code: ${err.code}, message: ${err.message}`);
            })
        } catch (e) {
            console.error('startFloatingBall Error', e)
        }
    }

// 闪控球更新逻辑
public static onClickUpdateFloatingBall(
    floatingBallController: floatingBall.FloatingBallController | undefined,
    template: floatingBall.FloatingBallTemplate,
    title: string = 'newTitle',
    content: string = 'newContent',
    icon?: image.PixelMap): void {
        // 更新时给标题、内容 随机使用数字后缀
        let random_string: string = Math.floor(Math.random() * 100).toString();
        let updateParams: floatingBall.FloatingBallParams = icon ? {
            template: template,
            title: title + random_string,
            content: content + random_string,
            backgroundColor: '#f6ea0a',
            icon: icon
        } : {
            template: template,
            title: title + random_string,
            content: content + random_string,
            backgroundColor: '#f6ea0a',
        }
        try {
            floatingBallController?.updateFloatingBall(updateParams).then(() => {
                hilog.debug(DOMAIN, TAG, `Succeed in updating FloatingBall`);
            }).catch((err: BusinessError) => {
                hilog.error(DOMAIN, TAG, `failed to update FloatingBall. code: ${err.code}, message: ${err.message}`);
            })
        } catch (e) {
            console.error('updateFloatingBall Error:', e)
        }
    }

    // 闪控球停止逻辑
    public static onClickStopFloatingBall(floatingBallController: floatingBall.FloatingBallController | undefined): void {
        // stop 是异步流程，需要通过 stateChange 状态回调获取实际删除结果
        floatingBallController?.stopFloatingBall().then(() => {
            hilog.debug(DOMAIN, TAG, `Succeed in stopping FloatingBall`);
        }).catch((err: BusinessError) => {
            hilog.error(DOMAIN, TAG, `failed to stop FloatingBall. code: ${err.code}, message: ${err.message}`);
        })
    }
}
// [End floating_ball_utils]