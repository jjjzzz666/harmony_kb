/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BackgroundTasksKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/*** if arkts dynamic */
import { WantAgent } from '@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '@ohos.app.ability.wantAgent';
/*** endif */
import Context from './application/BaseContext';
import type notificationManager from './@ohos.notificationManager';

/**
 * Manages background tasks.
 *
 * @namespace backgroundTaskManager
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.Core
 * @since 9
 */
/**
 * Manages background tasks.
 *
 * @namespace backgroundTaskManager
 * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace backgroundTaskManager {
  /**
   * The request object of continuous task.
   *
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  export class ContinuousTaskRequest {
    /**
     * Modes of continuous task.
     *
     * @returns { BackgroundTaskMode[] } the background modes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskModes(): BackgroundTaskMode[];

    /**
     * Modes of continuous task.
     *
     * @param { BackgroundTaskMode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskModes(value: BackgroundTaskMode[]);

    /**
     * Submodes of continuous task.
     *
     * @returns { BackgroundTaskSubmode[] } the background submodes
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    get backgroundTaskSubmodes(): BackgroundTaskSubmode[];

    /**
     * Submodes of continuous task.
     *
     * @param { BackgroundTaskSubmode[] } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    set backgroundTaskSubmodes(value: BackgroundTaskSubmode[]);

    /**
     * Indicates which ability to start when user click the notification bar.
     *
     * @returns { WantAgent } the wantAgent
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 21 dynamic
     * @since 24 static
     */
    get wantAgent(): WantAgent;

    /**
     * Indicates which ability to start when user click the notification bar.
     *
     * @param { WantAgent } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    set wantAgent(value: WantAgent);

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     */
    combinedTaskNotification?: boolean;

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @returns { boolean | undefined } whethre to merge notifications
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get combinedTaskNotification(): boolean | undefined;

    /**
     * Indicates whether to merge notifications, default is not to merge.
     *
     * @param { boolean | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set combinedTaskNotification(value: boolean | undefined);

    /**
     * The continuous task id, default -1.
     *
     * @type { ?number }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     */
    continuousTaskId?: number;

    /**
     * The continuous task id, default -1.
     *
     * @returns { int | undefined } the continuous task id
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    get continuousTaskId(): int | undefined;

    /**
     * The continuous task id, default -1.
     *
     * @param { int | undefined } value
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 24 static
     */
    set continuousTaskId(value: int | undefined);

    /**
     * Whether the modes of continuous task are supported.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @returns { boolean } Whether the modes of continuous task are supported.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    isModeSupported(): boolean;

    /**
     * Requesting MODE_SPECIAL_SCENARIO_PROCESSING authorization from users,
     *     a dialog box will be displayed.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @param { Callback<UserAuthResult> } callback - The callback of the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    requestAuthFromUser(context: Context, callback: Callback<UserAuthResult>): void;

    /**
     * Check whether the application can request MODE_SPECIAL_SCENARIO_PROCESSING.
     *
     * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
     * @param { Context } context - App running context.
     * @returns { Promise<UserAuthResult> } The promise returns the result of user authorization.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 9800004 - System service operation failed.
     * @throws { BusinessError } 9800005 - Continuous task verification failed.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    checkSpecialScenarioAuth(context: Context): Promise<UserAuthResult>;
  }

  /**
   * The info of delay suspend.
   *
   * @interface DelaySuspendInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  interface DelaySuspendInfo {
    /**
     * The unique identifier of the delay request.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    requestId: int;
    /**
     * The actual delay duration (ms).
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 9 dynamic
     * @since 23 static
     */
    actualDelayTime: int;
  }

  /**
   * The callback info of transient task.
   *
   * @interface TransientTaskInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransientTaskInfo {
    /**
     * Total remaining quota of an application in one day.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    remainingQuota: int;
    /**
     * The info list of delay suspend.
     *
     * @type { DelaySuspendInfo[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
     * @since 20 dynamic
     * @since 23 static
     */
    transientTasks: DelaySuspendInfo[];
  }

  /**
   * The info of continuous task notification.
   *
   * @interface ContinuousTaskNotification
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ContinuousTaskNotification {
    /**
     * The notification slot type.
     *
     * @type { notificationManager.SlotType }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    slotType: notificationManager.SlotType;
    /**
     * The notification content type.
     *
     * @type { notificationManager.ContentType }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    contentType: notificationManager.ContentType;
    /**
     * The notification id.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * The continuous task id.
     * @type { ?int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    continuousTaskId?: int;
  }

  /**
   * The continuous task cancel info.
   *
   * @interface ContinuousTaskCancelInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  interface ContinuousTaskCancelInfo {
    /**
     * The cancel reason of continuous task.
     *
     * @type { ContinuousTaskCancelReason }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    reason: ContinuousTaskCancelReason;

    /**
     * The id of cancelled continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    id: int;
  }

  /**
   * The continuous task active info.
   *
   * @interface ContinuousTaskActiveInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskActiveInfo {
    /**
     * The id of active continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    id: int;
  }

  /**
   * The continuous task info.
   *
   * @interface ContinuousTaskInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskInfo {
    /**
     * The ability name of apply continuous task.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;
   /**
     * The uid of apply continuous task.
     *
     * @type { int}
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
   /**
     * The pid of apply continuous task.
     *
     * @type { int}
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
    /**
     * Is apply continuous task from webview.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    isFromWebView: boolean;
    /**
     * Background modes of apply continuous task.
     *
     * @type { string[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundModes: string[];
    /**
     * Background sub modes of apply continuous task.
     *
     * @type { string[] }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    backgroundSubModes: string[];
    /**
     * The notification id of apply continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    notificationId: int;
    /**
     * The continuous task id of apply continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;
   /**
     * The ability id of apply continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    abilityId: int;
    /**
     * The wantAgent bundle name of apply continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentBundleName: string;
    /**
     * The wantAgent ability name of apply continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    wantAgentAbilityName: string;
    /**
     * The suspend state of apply continuous task.
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;
    /**
     * The bundleName of apply continuous task.
     * @type { ?string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    bundleName?: string;
    /**
     * The appIndex of apply continuous task.
     * @type { ?int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 23 dynamic
     * @since 24 static
     */
    appIndex?: int;
  }

  /**
   * The background task state info of user authorization status.
   *
   * @interface BackgroundTaskStateInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  interface BackgroundTaskStateInfo {
    /**
     * UserId of the application applying for special continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    userId: int;
    /**
     * BundleName of the application applying for special continuous task.
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    bundleName: string;
    /**
     * AppIndex of the application applying for special continuous task.
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    appIndex: int;
    /**
     * Type of user authorization status.
     * @type { ?UserAuthResult }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 24 static
     */
    authResult?: UserAuthResult;
  }

  /**
   * The continuous task suspend info.
   *
   * @interface ContinuousTaskSuspendInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  interface ContinuousTaskSuspendInfo {
    /**
     * The id of suspended continuous task.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    continuousTaskId: int;

    /**
     * The suspend state of continuous task.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendState: boolean;

    /**
     * The suspend reason of continuous task.
     *
     * @type { ContinuousTaskSuspendReason }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    suspendReason: ContinuousTaskSuspendReason;
  }

  /**
   * The continuous task state change subscriber.
   *
   * @typedef BackgroundTaskSubscriber
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  export interface BackgroundTaskSubscriber {  
    /**
     * Callback of continuous task start.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStart(info: ContinuousTaskInfo): void;

    /**
     * Callback of continuous task update.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskUpdate(info: ContinuousTaskInfo): void;

    /**
     * Callback of continuous task stop.
     *
     * @param { ContinuousTaskInfo } info - The continuous task info.
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    onContinuousTaskStop(info: ContinuousTaskInfo): void;
  }

  /**
   * Efficiency Resources information.
   *
   * @interface EfficiencyResourcesInfo
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface EfficiencyResourcesInfo {
    /**
     * The set of resource types that app wants to apply.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    resourceTypes: int;
    /**
     * The duration that the resource can be used most.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    timeout: int;
    /**
     * True if the apply action is persistent, else false. Default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isPersistent: boolean;
    /**
     * True if apply action is for process, false is for package. Default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isForProcess: boolean;
    /**
     * The apply reason.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    reason: string;
   /**
     * The uid of apply efficiency resources.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;
   /**
     * The pid of apply efficiency resources.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pid: int;
   /**
     * Specify CPU resources. The system will allocate the specified CPU resources
     *     to the application during idle load times.
     *
     * @type { ?EfficiencyResourcesCpuLevel }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * Cancels delayed transition to the suspended state.
   *
   * @param { int } requestId - The identifier of the delay request.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelSuspendDelay(requestId: int): void;

  /**
   * Obtains the remaining time before an application enters the suspended state.
   *
   * @param { int } requestId - The identifier of the delay request.
   * @param { AsyncCallback<int> } callback - The callback of the remaining delay time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemainingDelayTime(requestId: int, callback: AsyncCallback<int>): void;

  /**
   * Obtains the remaining time before an application enters the suspended state.
   *
   * @param { int } requestId - The identifier of the delay request.
   * @returns { Promise<int> } The promise returns the remaining delay time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemainingDelayTime(requestId: int): Promise<int>;

  /**
   * Requests delayed transition to the suspended state.
   *
   * @param { string } reason - Indicates the reason for delayed transition to the suspended state.
   * @param { Callback<void> } callback - The callback delay time expired.
   * @returns { DelaySuspendInfo } Info of delay request.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900002 - Transient task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 9 dynamic
   * @since 23 static
   */
  function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;

  /**
   * Obtains transient task info before an application enters the suspended state.
   *
   * @returns { Promise<TransientTaskInfo> } The promise returns the transient tasks info.
   * @throws { BusinessError } 9900001 - Caller information verification failed for a transient task.
   * @throws { BusinessError } 9900003 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9900004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getTransientTaskInfo(): Promise<TransientTaskInfo>;

  /**
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to the this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 9
   */
  /**
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to the this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to the this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 9
   */
  /**
   * Service ability uses this method to request start running in background.
   * <p> System will publish a notification related to the this service. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { BackgroundMode } bgMode - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise<void>;

  /**
   * UIAbility uses this method to request start running in background.
   * <p> System will publish a notification related to the UIAbility. </p>
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { string[] } bgModes - Indicates which background mode to request.
   * @param { WantAgent } wantAgent - Indicates which ability to start when user click the notification bar.
   * @returns { Promise<ContinuousTaskNotification> } The The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise<ContinuousTaskNotification>;

  /**
   * UIAbility uses this method to request start running in background,
   *     a UIAbility can request multi continuous task at a time.
   *     System will publish a notification related to the UIAbility.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { ContinuousTaskRequest } request - The continuous task request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  function startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>;

  /**
   * UIAbility uses this method to update background mode.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { string[] } bgModes - Indicates which background mode to request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function updateBackgroundRunning(context: Context, bgModes: string[]): Promise<ContinuousTaskNotification>;

  /**
   * UIAbility uses this method to update background mode, support update acording to continuous task id.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { ContinuousTaskRequest } request - Indicates which background mode to request.
   * @returns { Promise<ContinuousTaskNotification> } The continuous task notification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  function updateBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise<ContinuousTaskNotification>;

  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 9
   */
  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12
   */
  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @param { AsyncCallback<void> } callback - The callback of the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void;

  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 9
   */
  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12
   */
  /**
   * Service ability uses this method to request stop running in background.
   *
   * @param { Context } context - App running context.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function stopBackgroundRunning(context: Context): Promise<void>;

  /**
   * UI ability uses this method to request stop running in background acording to continuous task id.
   *
   * @param { Context } context - App running context.
   * @param { number } continuousTaskId - continuousTaskId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @throws { BusinessError } 9800006 - Notification verification failed for a continuous task.
   * @throws { BusinessError } 9800007 - Continuous task storage failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  function stopBackgroundRunning(context: Context, continuousTaskId: number): Promise<void>;

  /**
   * Obtains all the continuous tasks before an application enters the suspended state,
   *     including continuous tasks in suspended state.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context): Promise<ContinuousTaskInfo[]>;

  /**
   * Obtains all the continuous tasks before an application enters the suspended state.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Context } context - App running context.
   * @param { boolean } includeSuspended - Return the suspended continuous tasks.
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllContinuousTasks(context: Context, includeSuspended: boolean): Promise<ContinuousTaskInfo[]>;

  /**
   * Set the user authorization status of special continuous tasks.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Background task state info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  function setBackgroundTaskState(stateInfo: BackgroundTaskStateInfo): void;

  /**
   * Get the user authorization status of special continuous tasks.
   *
   * @permission ohos.permission.SET_BACKGROUND_TASK_STATE
   * @param { BackgroundTaskStateInfo } stateInfo - Background task state info.
   * @returns { UserAuthResult } Type of user authorization status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 22 dynamic
   * @since 24 static
   */
  function getBackgroundTaskState(stateInfo: BackgroundTaskStateInfo): UserAuthResult;

  /**
   * Obtains information about all continuous tasks in the system.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @returns { Promise<ContinuousTaskInfo[]> } The promise returns the continuous task info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function obtainAllContinuousTasks(): Promise<ContinuousTaskInfo[]>;

  /**
   * Subscribe to continuous task state change.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - The continuous task state change subscriber.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function subscribeContinuousTaskState(subscriber: BackgroundTaskSubscriber): void;

  /**
   * Unsubscribe to continuous task state change.
   *
   * @permission ohos.permission.GET_BACKGROUND_TASK_INFO
   * @param { BackgroundTaskSubscriber } subscriber - The continuous task state change subscriber.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function unsubscribeContinuousTaskState(subscriber: BackgroundTaskSubscriber): void;

  /**
   * Apply or unapply efficiency resources.
   *
   * @param { EfficiencyResourcesRequest } request - The request of apply or unapply efficiency resources.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function applyEfficiencyResources(request: EfficiencyResourcesRequest): void;

  /**
   * Reset all efficiency resources apply.
   *
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 9800003 - Internal transaction failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function resetAllEfficiencyResources(): void;

  /**
   * Obtains all the efficiency resources of current application.
   *
   * @returns { Promise<EfficiencyResourcesInfo[]> } The promise returns the efficiency resources info.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 18700001 - Caller information verification failed for an energy resource request.
   * @throws { BusinessError } 18700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   * <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 18700004 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllEfficiencyResources(): Promise<EfficiencyResourcesInfo[]>;

  /**
   * Register continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type - The type of continuous task cancel.
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function on(type: 'continuousTaskCancel', callback: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Register continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Register a exist callback type; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskCancel(callback: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Unregister continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskCancel' } type - The type of continuous task cancel.
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   */
  function off(type: 'continuousTaskCancel', callback?: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Unregister continuous task cancel callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskCancelInfo> } callback - the callback of continuous task cancel.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
   * <br> 2. Unregister type has not register; 3. Parameter verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskCancel(callback?: Callback<ContinuousTaskCancelInfo>): void;

  /**
   * Register continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - The type of continuous task suspend.
   * @param { Callback<ContinuousTaskSuspendInfo> } callback - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskSuspend', callback: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Register continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskSuspendInfo> } callback - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskSuspend(callback: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskSuspend' } type - The type of continuous task suspend.
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback] - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskSuspend', callback?: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskSuspendInfo> } [callback] - the callback of continuous task suspend.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskSuspend(callback?: Callback<ContinuousTaskSuspendInfo>): void;

  /**
   * Register continuous task active callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - The type of continuous task active.
   * @param { Callback<ContinuousTaskActiveInfo> } callback - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function on(type: 'continuousTaskActive', callback: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Register continuous task active callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskActiveInfo> } callback - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function onContinuousTaskActive(callback: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { 'continuousTaskActive' } type - The type of continuous task active.
   * @param { Callback<ContinuousTaskActiveInfo> } [callback] - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   */
  function off(type: 'continuousTaskActive', callback?: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Unregister continuous task suspend callback.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Callback<ContinuousTaskActiveInfo> } [callback] - the callback of continuous task active.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 9800005 - Continuous task verification failed.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 23 static
   */
  function offContinuousTaskActive(callback?: Callback<ContinuousTaskActiveInfo>): void;

  /**
   * Supported background mode.
   *
   * @enum { number }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 9
   */
  /**
   * Supported background mode.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum BackgroundMode {
    /**
     * data transfer mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_TRANSFER = 1,

    /**
     * audio playback mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9
     */
    /**
     * audio playback mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_PLAYBACK = 2,

    /**
     * audio recording mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_RECORDING = 3,

    /**
     * location mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    LOCATION = 4,

    /**
     * bluetooth interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH_INTERACTION = 5,

    /**
     * multi-device connection mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9
     */
    /**
     * multi-device connection mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_DEVICE_CONNECTION = 6,

    /**
     * wifi interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_INTERACTION = 7,

    /**
     * Voice over Internet Phone mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 13 dynamic
     * @since 23 static
     */
    VOIP = 8,

    /**
     * background continuous calculate mode, for example 3D render.
     * only supported in particular device
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 9 dynamic
     * @since 23 static
     */
    TASK_KEEPING = 9,
  }

  /**
   * Supported Continuous task mode.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskMode {
    /**
     * data transfer mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_DATA_TRANSFER = 1,

    /**
     * audio playback mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_PLAYBACK = 2,

    /**
     * audio recording mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_AUDIO_RECORDING = 3,

    /**
     * share location mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_LOCATION = 4,

    /**
     * bluetooth interaction mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_BLUETOOTH_INTERACTION = 5,

    /**
     * multi-device connection mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_MULTI_DEVICE_CONNECTION = 6,

    /**
     * allow wifi aware mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_ALLOW_WIFI_AWARE = 7,

    /**
     * Voice over Internet Phone mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_VOIP = 8,

    /**
     * background continuous calculate mode, for example 3D render.
     * only supported in particular device
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    MODE_TASK_KEEPING = 9,

    /**
     * 'av playback and record' mode, for example audio playback, audio recording.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_AV_PLAYBACK_AND_RECORD = 12,

    /**
     * special scenario processing mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    MODE_SPECIAL_SCENARIO_PROCESSING = 13
  }

  /**
   * Supported Continuous task submode.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 21 dynamic
   * @since 24 static
   */
  export enum BackgroundTaskSubmode {
    /**
     * submode of 'MODE_BLUETOOTH_INTERACTION'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_CAR_KEY_NORMAL_NOTIFICATION = 1,

    /**
     * normal notification submode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_NORMAL_NOTIFICATION = 2,

    /**
     * obvious notification submode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 21 dynamic
     * @since 24 static
     */
    SUBMODE_LIVE_VIEW_NOTIFICATION = 3,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION = 4,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AVSESSION_AUDIO_PLAYBACK = 5,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION = 6,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION = 7,

    /**
     * submode of 'MODE_AV_PLAYBACK_AND_RECORD'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION = 8,

    /**
     * submode of 'MODE_SPECIAL_SCENARIO_PROCESSING'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION = 9,

    /**
     * submode of 'MODE_MULTI_DEVICE_CONNECTION'.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION = 10,

    /**
     * submode of 'MODE_SPECIAL_SCENARIO_PROCESSING', used for workout scenarios.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    SUBMODE_WORK_OUT_NORMAL_NOTIFICATION = 11
  }

  /**
   * The type of resource.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ResourceType {
    /**
     * The cpu resource for not being suspended.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CPU = 1,

    /**
     * The resource for not being proxyed common_event.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT = 1 << 1,

    /**
     * The resource for not being proxyed timer.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    TIMER = 1 << 2,

    /**
     * The resource for not being proxyed workscheduler.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1 << 3,

    /**
     * The resource for not being proxyed bluetooth.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BLUETOOTH = 1 << 4,

    /**
     * The resource for not being proxyed gps.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GPS = 1 << 5,

    /**
     * The resource for not being proxyed audio.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = 1 << 6,

    /**
     * The resource for not being proxyed running lock.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING_LOCK = 1 << 7,

    /**
     * The resource for not being proxyed sensor.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR = 1 << 8
  }

  /**
   * The type of CPU level.
   *
   * @enum { int } The type of resource.
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum EfficiencyResourcesCpuLevel {
    /**
     * Runs up to small cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SMALL_CPU = 0,

    /**
     * Runs up to medium cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIUM_CPU = 1,

    /**
     * Runs up to large cores.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LARGE_CPU = 2
  }

  /**
   * The request of efficiency resources.
   *
   * @interface EfficiencyResourcesRequest
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EfficiencyResourcesRequest {
    /**
     * The set of resource types that app wants to apply.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    resourceTypes: int;

    /**
     * True if the app begin to use, else false.
     *
     * @type { boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isApply: boolean;

    /**
     * The duration that the resource can be used most.
     *
     * @type { int }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    timeOut: int;

    /**
     * True if the apply action is persist, else false. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isPersist?: boolean;

    /**
     * True if apply action is for process, false is for package. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isProcess?: boolean;

    /**
     * The apply reason.
     *
     * @type { string }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: string;

   /**
     * Specify CPU resources. The system will allocate the specified CPU resources
     *     to the application during idle load times.
     *
     * @type { ?EfficiencyResourcesCpuLevel }
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cpuLevel?: EfficiencyResourcesCpuLevel;
  }

  /**
   * The type of continuous task cancel reason.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskCancelReason {
    /**
     * User cancel.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL = 1,
    /**
     * System cancel.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL = 2,
    /**
     * User remove notification.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    USER_CANCEL_REMOVE_NOTIFICATION = 3,

    /**
     * Low network speed when request data transfer mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_DATA_TRANSFER_LOW_SPEED = 4,

    /**
     *  Not use avsession when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,

    /**
     * Audio is not running when request audio playback mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_PLAYBACK_NOT_RUNNING = 6,

    /**
     * Audio is not running when request audio recording mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_AUDIO_RECORDING_NOT_RUNNING = 7,

    /**
     * Not use location when request location mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_LOCATION = 8,

    /**
     * Not use bluetooth when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_BLUETOOTH = 9,

    /**
     * Not use multi device when request multi-device connection mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_NOT_USE_MULTI_DEVICE = 10,

    /**
     * Use some mode illegally.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 15 dynamic
     * @since 23 static
     */
    SYSTEM_CANCEL_USE_ILLEGALLY = 11,
  }

  /**
   * Supported background submode.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundSubMode {
    /**
     * bluetooth car key mode
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    CAR_KEY = 1
  }

  /**
   * Supported background mode type.
   *
   * @enum { string }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 16 dynamic
   * @since 23 static
   */
  export enum BackgroundModeType {
    /**
     * subMode type
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 16 dynamic
     * @since 23 static
     */
    SUB_MODE = 'subMode'
  }

  /**
   * Type of continuous task suspend reason.
   *
   * @enum { int }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 20 dynamic
   * @since 23 static
   */
  export enum ContinuousTaskSuspendReason {
    /**
     * Low network speed when request data transfer mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED = 4,
  
    /**
     *  Not use avsession when request audio playback mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5,
  
    /**
     * Audio is not running when request audio playback mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING = 6,
  
    /**
     * Audio is not running when request audio recording mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING = 7,
  
    /**
     * Not use location when request location mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_LOCATION_NOT_USED = 8,
  
    /**
     * Not use bluetooth when request bluetooth interaction mode.
     *
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_BLUETOOTH_NOT_USED = 9,
  
    /**
     * Not use multi device when request multi-device connection mode.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED = 10,
  
    /**
     * Use some mode illegally.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_USED_ILLEGALLY = 11,

    /**
     * System load warning.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING = 12,
  }

  /**
   * Type of user authorization status.
   *
   * @enum { number }
   * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
   * @since 22 dynamic
   * @since 24 static
   */
  export enum UserAuthResult {
    /**
     * Request is not supported.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_SUPPORTED = 0,

    /**
     * Permission is not determined.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_DETERMINED = 1,

    /**
     * Permission has been denied, only can change it in settings.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    DENIED = 2,

    /**
     * The permission was granted once.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ONCE = 3,

    /**
     * Permissions are always granted.
     * 
     * @syscap SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask
     * @since 22 dynamic
     * @since 24 static
     */
    GRANTED_ALWAYS = 4
  }
}

export default backgroundTaskManager;
