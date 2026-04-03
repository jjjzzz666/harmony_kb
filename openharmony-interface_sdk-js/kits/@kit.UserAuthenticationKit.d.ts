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
 * @file
 * @kit UserAuthenticationKit
 */
/*** if arkts dynamic */
import companionDeviceAuth from '@ohos.userIAM.companionDeviceAuth';
import faceAuth from '@ohos.userIAM.faceAuth';
import userAccessCtrl from '@ohos.userIAM.userAccessCtrl';
import userAuth from '@ohos.userIAM.userAuth';
import UserAuthExtensionAbility from '@ohos.app.ability.UserAuthExtensionAbility';
import UserAuthIcon from '@ohos.userIAM.userAuthIcon';

export { companionDeviceAuth, faceAuth, userAccessCtrl, userAuth, UserAuthExtensionAbility, UserAuthIcon };
/*** endif */

/*** if arkts static */
import companionDeviceAuth from '@ohos.userIAM.companionDeviceAuth';
import faceAuth from '@ohos.userIAM.faceAuth';
import userAccessCtrl from '@ohos.userIAM.userAccessCtrl';
import userAuth from '@ohos.userIAM.userAuth';
import UserAuthExtensionAbility from '@ohos.app.ability.UserAuthExtensionAbility';
import { UserAuthIcon } from '@ohos.userIAM.userAuthIcon';

export { companionDeviceAuth, faceAuth, userAccessCtrl, userAuth, UserAuthExtensionAbility, UserAuthIcon };
/*** endif */
