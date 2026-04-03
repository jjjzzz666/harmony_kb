'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import userAuth from '@ohos.userIAM.userAuth';
import { ResourceColor, Dimension, Component } from '@ohos.arkui.component';

/**
 * Declare UserAuthIcon, used for user authentication.
 *
 * @struct { UserAuthIcon }
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct UserAuthIcon {
    /**
     * Set user auth parameter.
     *
     * @type { userAuth.AuthParam }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    authParam: userAuth.AuthParam;

    /**
     * Set auth widget parameter.
     *
     * @type { userAuth.WidgetParam }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    widgetParam: userAuth.WidgetParam;

    /**
     * Set the height of the icon, width and height ratio 1:1. The unit is vp.
     *
     * @type { ?Dimension }
     * @default 64
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    iconHeight?: Dimension;

    /**
     * Set the color of the icon.
     *
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_activated')
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    iconColor?: ResourceColor;

    /**
     * The authentication result code is returned through the callback.
     * If the authentication is passed, the authentication token and auth type will be returned.
     * You need to apply for permission:ohos.permission.ACCESS_BIOMETRIC to use user authentication ability.
     *
     * @type { userAuth.AuthCallbackOnResultFunc }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    onAuthResult: userAuth.AuthCallbackOnResultFunc;

    /**
     * When user click the icon, it will be returned through this callback.
     *
     * @type { userAuth.ClickCallbackFunc }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 static
     */
    onIconClick?: ClickCallbackFunc;

    /**
     * The method to build the component.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}

/**
 * Callback after user clicks.
 *
 * @typedef { function } ClickCallbackFunc
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 staticonly
 */
type ClickCallbackFunc = () => void;
