/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { UIContext } from './@ohos.arkui.UIContext';
import type * as _ViewData from './application/ViewData';
import type * as _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType } from './application/AutoFillType';
import type * as _AutoFillRequest from './application/AutoFillRequest';
import type * as _CustomData from './application/CustomData';
import type * as _AutoFillRect from './application/AutoFillRect';
import type * as _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */
/*** if arkts static */
import { UIContext } from './@ohos.arkui.UIContext';
import _ViewData from './application/ViewData';
import _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType as _AutoFillType } from './application/AutoFillType';
import { FillRequest as _FillRequest, SaveRequest as _SaveRequest} from './application/AutoFillRequest';
import { UpdateRequest as _UpdateRequest, FillResponse as _FillResponse} from './application/AutoFillRequest';
import { FillRequestCallback as _FillRequestCallback } from './application/AutoFillRequest';
import { SaveRequestCallback as _SaveRequestCallback } from './application/AutoFillRequest';
import _CustomData from './application/CustomData';
import _AutoFillRect from './application/AutoFillRect';
import _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupSize as _PopupSize } from './application/AutoFillPopupConfig';
import { PopupPlacement as _PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType as _AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */

/**
 * This module provides the function of auto fill manager.
 *
 * @namespace autoFillManager
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 11
 */
/**
 * This module provides the function of auto fill manager.
 *
 * @namespace autoFillManager
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace autoFillManager {
  /**
   * Called when auto save request is successfully handled.
   *
   * @typedef { function }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnSuccessFn = () => void;

  /**
   * Called when auto save request is failed to be handled.
   *
   * @typedef { function }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnFailureFn = () => void;

  /**
   * Auto save callback.
   *
   * @interface AutoSaveCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 11
   */
  /**
   * Auto save callback.
   *
   * @interface AutoSaveCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface AutoSaveCallback {
    /**
     * Called when auto save request is successfully handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 11
     */
    /**
     * Called when auto save request is successfully handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    onSuccess(): void;

    /**
     * Called when auto save request is successfully handled.
     *
     * @type { OnSuccessFn }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onSuccess: OnSuccessFn;

    /**
     * Called when auto save request is failed to be handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 11
     */
    /**
     * Called when auto save request is failed to be handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    onFailure(): void;

    /**
     * Called when auto save request is failed to be handled.
     *
     * @type { OnFailureFn }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onFailure: OnFailureFn;
  }

  /**
   * Trigger an auto save request.
   *
   * @param { UIContext } context - Indicates the ui context where the save operation will be performed.
   * @param { AutoSaveCallback } [callback] - Indicates the callback that used to receive the result.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Get instance id failed;
   * <br>2. Parse instance id failed; 3. The second parameter is not of type callback.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 11
   */
  /**
   * Trigger an auto save request.
   *
   * @param { UIContext } context - Indicates the ui context where the save operation will be performed.
   * @param { AutoSaveCallback } [callback] - Indicates the callback that used to receive the result.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Get instance id failed;
   * <br>2. Parse instance id failed; 3. The second parameter is not of type callback.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void;

  /**
   * The interface of view data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of view data.
   *
   * @typedef { _ViewData.default } ViewData
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type ViewData = _ViewData.default;

  /**
   * The interface of view data.
   *
   * @typedef { _ViewData } ViewData
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ViewData = _ViewData;

  /**
   * The interface of page node info.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of page node info.
   *
   * @typedef { _PageNodeInfo.default } PageNodeInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PageNodeInfo = _PageNodeInfo.default;

  /**
   * The interface of page node info.
   *
   * @typedef { _PageNodeInfo } PageNodeInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PageNodeInfo = _PageNodeInfo;

  /**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export { AutoFillType };

  /**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillType = _AutoFillType;

  /**
   * The interface of fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of fill request.
   *
   * @typedef { _AutoFillRequest.FillRequest } FillRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type FillRequest = _AutoFillRequest.FillRequest;

  /**
   * The interface of fill request.
   *
   * @typedef { _FillRequest } FillRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequest = _FillRequest;

  /**
   * The interface of save request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of save request.
   *
   * @typedef { _AutoFillRequest.SaveRequest } SaveRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type SaveRequest = _AutoFillRequest.SaveRequest;

  /**
   * The interface of save request.
   *
   * @typedef { _SaveRequest } SaveRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type SaveRequest = _SaveRequest;

  /**
   * The interface of update request.
   *
   * @typedef { _AutoFillRequest.UpdateRequest } UpdateRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type UpdateRequest = _AutoFillRequest.UpdateRequest;

  /**
   * The interface of update request.
   *
   * @typedef { _UpdateRequest } UpdateRequest
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UpdateRequest = _UpdateRequest;

  /**
   * The interface of fill response.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of fill response.
   *
   * @typedef { _AutoFillRequest.FillResponse } FillResponse
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type FillResponse = _AutoFillRequest.FillResponse;

  /**
   * The interface of fill response.
   *
   * @typedef { _FillResponse } FillResponse
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillResponse = _FillResponse;

  /**
   * The interface of fill request callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of fill request callback.
   *
   * @typedef { _AutoFillRequest.FillRequestCallback } FillRequestCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type FillRequestCallback = _AutoFillRequest.FillRequestCallback;

  /**
   * The interface of fill request callback.
   *
   * @typedef { _FillRequestCallback } FillRequestCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequestCallback = _FillRequestCallback;

  /**
   * The interface of save request callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * The interface of save request callback.
   *
   * @typedef { _AutoFillRequest.SaveRequestCallback } SaveRequestCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type SaveRequestCallback = _AutoFillRequest.SaveRequestCallback;

  /**
   * The interface of save request callback.
   *
   * @typedef { _SaveRequestCallback } SaveRequestCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type SaveRequestCallback = _SaveRequestCallback;

  /**
   * The custom data.
   *
   * @typedef { _CustomData.default } CustomData
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  export type CustomData = _CustomData.default;

  /**
   * The custom data.
   *
   * @typedef { _CustomData } CustomData
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type CustomData = _CustomData;

  /**
   * Auto fill rectangle.
   *
   * @typedef { _AutoFillRect.default } AutoFillRect
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillRect = _AutoFillRect.default;

  /**
   * Auto fill rectangle.
   *
   * @typedef { _AutoFillRect } AutoFillRect
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillRect = _AutoFillRect;

  /**
   * The auto fill popup config.
   *
   * @typedef { _AutoFillPopupConfig.default } AutoFillPopupConfig
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig.default;

  /**
   * The auto fill popup config.
   *
   * @typedef { _AutoFillPopupConfig } AutoFillPopupConfig
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig;

  /**
   * The popup size of auto fill popup config.
   *
   * @typedef { _AutoFillPopupConfig.PopupSize } PopupSize
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PopupSize = _AutoFillPopupConfig.PopupSize;

  /**
   * The popup size of auto fill popup config.
   *
   * @typedef { _PopupSize } PopupSize
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupSize = _PopupSize;

  /**
   * The popup placement of auto fill popup config.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export { PopupPlacement };

  /**
   * The popup placement of auto fill popup config.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupPlacement = _PopupPlacement;

  /**
  * The enum of auto fill trigget type.
  *
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @systemapi
  * @stagemodelonly
  * @since 23 dynamic
  */
  export { AutoFillTriggerType };

  /**
  * The enum of auto fill trigget type.
  *
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @systemapi
  * @stagemodelonly
  * @since 23 static
  */
  export type AutoFillTriggerType = _AutoFillTriggerType;
}

export default autoFillManager;
