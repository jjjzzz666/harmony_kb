/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import { AsyncCallback } from './@ohos.base';
import formBindingData from './@ohos.app.form.formBindingData';
import formInfo from './@ohos.app.form.formInfo';
import Want from './@ohos.app.ability.Want';
import type UIAbilityContext from './application/UIAbilityContext';

/**
 * Interface of formProvider.
 *
 * @namespace formProvider
 * @syscap SystemCapability.Ability.Form
 * @since 9
 */
/**
 * Interface of formProvider.
 *
 * @namespace formProvider
 * @syscap SystemCapability.Ability.Form
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace formProvider {
  /**
   * Set next update time for a specified form.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { int } minute - Indicates duration minute before next update.
   * @param { AsyncCallback<void> } callback - The callback of setFormNextRefreshTime.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500060 - A service connection error happened, please try again later.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds upper bound.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Set next update time for a specified form.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { int } minute - Indicates duration minute before next update.
   * @param { AsyncCallback<void> } callback - The callback of setFormNextRefreshTime.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function setFormNextRefreshTime(formId: string, minute: int, callback: AsyncCallback<void>): void;

  /**
   * Set next update time for a specified form.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { int } minute - Indicates duration minute before next update.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500060 - A service connection error happened, please try again later.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds upper bound.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Set next update time for a specified form.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { int } minute - Indicates duration minute before next update.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function setFormNextRefreshTime(formId: string, minute: int): Promise<void>;

  /**
   * Update a specified form.
   * Client to communication with FormManagerService.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { formBindingData.FormBindingData } formBindingData - Indicates the form data.
   * @param { AsyncCallback<void> } callback - The callback of updateForm.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500060 - A service connection error happened, please try again later.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Update a specified form.
   * Client to communication with FormManagerService.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { formBindingData.FormBindingData } formBindingData - Indicates the form data.
   * @param { AsyncCallback<void> } callback - The callback of updateForm.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Update a specified form.
   * Client to communication with FormManagerService.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { formBindingData.FormBindingData } formBindingData - Indicates the form data.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500060 - A service connection error happened, please try again later.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Update a specified form.
   * Client to communication with FormManagerService.
   *
   * @param { string } formId - Indicates the form ID.
   * @param { formBindingData.FormBindingData } formBindingData - Indicates the form data.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;

  /**
   * Get info of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { formInfo.FormInfoFilter } filter - Indicates the requirements the forms that the formInfos belong to have to meet.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - The callback is used to return the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Get info of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { formInfo.FormInfoFilter } filter - Indicates the requirements the forms that the formInfos belong to have to meet.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - The callback is used to return the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getFormsInfo(filter: formInfo.FormInfoFilter, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Get infos of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - The callback is used to return the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Get infos of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - The callback is used to return the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Get infos of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { formInfo.FormInfoFilter } [filter] - Indicates the requirements the forms that the formInfos belong to have to meet.
   * @returns { Promise<Array<formInfo.FormInfo>> } Returns the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Get infos of all forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { formInfo.FormInfoFilter } [filter] - Indicates the requirements the forms that the formInfos belong to have to meet.
   * @returns { Promise<Array<formInfo.FormInfo>> } Returns the formInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getFormsInfo(filter?: formInfo.FormInfoFilter): Promise<Array<formInfo.FormInfo>>;

  /**
   * Request to publish a form to the form host.
   *
   * @param { Want } want - The want of the form to publish.
   * @param { formBindingData.FormBindingData } formBindingData - Indicates the form data.
   * @param { AsyncCallback<string> } callback - The callback is used to return the form id.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(
    want: Want,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<string>
  ): void;

  /**
   * Request to publish a form to the form host.
   *
   * @param { Want } want - The want of the form to publish.
   * @param { AsyncCallback<string> } callback - The callback is used to return the form id.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;

  /**
   * Request to publish a form to the form host.
   *
   * @param { Want } want - The want of the form to publish.
   * @param { formBindingData.FormBindingData } [formBindingData] - Indicates the form data.
   * @returns { Promise<string> } Returns the form id.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<string>;

  /**
   * Check if the request of publishing a form is supported by the host
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return true if the request is supported.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isRequestPublishFormSupported(callback: AsyncCallback<boolean>): void;

  /**
   * Check if the request of publishing a form is supported by the host
   *
   * @returns { Promise<boolean> } Returns true if the request is supported.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isRequestPublishFormSupported(): Promise<boolean>;

  /**
   * Get infos of the published form belonging to current bundle.
   * Client to communicate with FormManagerService.
   *
   * @param { string } formId - Indicates the form ID.
   * @returns { Promise<formInfo.FormInfo> } Returns the formInfo.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead getPublishedRunningFormInfoById
   */
  function getPublishedFormInfoById(formId: string): Promise<formInfo.FormInfo>;

  /**
   * Get infos of all published forms belonging to current bundle.
   * Client to communicate with FormManagerService.
   *
   * @returns { Promise<Array<formInfo.FormInfo>> } Returns published formInfo belongs to the caller
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead getPublishedRunningFormInfos
   */
  function getPublishedFormInfos(): Promise<Array<formInfo.FormInfo>>;

  /**
   * Get running form info by form id belonging to the current bundle. 
   *
   * @param { string } formId - Indicates the form ID.
   * @returns { Promise<formInfo.RunningFormInfo> } Returns the running formInfo.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getPublishedRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>;
   
  /**
   * Get running form infos of all published forms belonging to current bundle.  
   *
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Returns published running formInfo belongs to the caller
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getPublishedRunningFormInfos(): Promise<Array<formInfo.RunningFormInfo>>

  /**
   * Open the view of forms belonging to current bundle.
   * Client to communication with FormManagerService.
   *
   * @param { Want } want - The want of the form to open.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function openFormManager(want: Want): void;

  /**
   * Open the view of forms belonging to the specified bundle.
   * Client to communication with FormManagerService.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE
   * @param { Want } want - The want of the form to open.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function openFormManagerCrossBundle(want: Want): void

  /**
   * Open the form edit ability
   *
   * @param { string } abilityName - Indicates the form edit ability name.
   * @param { string } formId - Indicates the edit form ID.
   * @param { boolean } isMainPage - Indicates open the main edit page， default is true
   *
   * @throws { BusinessError } 801 - Capability not supported.function openFormEditAbility can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501007 - Form is not trust.
   * @syscap SystemCapability.Ability.Form
   * @since 18 dynamic
   * @since 23 static
   */
  function openFormEditAbility(abilityName: string, formId: string, isMainPage?: boolean): void;

  /**
   * Close the form edit ability.
   *
   * @param { boolean } [isMainPage] - Indicates close the main edit page, default is true.
   * @throws { BusinessError } 801 - Capability not supported due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501015 - Cannot close the widget editing page opened by other apps.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function closeFormEditAbility(isMainPage?: boolean): void;

  /**
   * Activate scene animation
   *
   * @param { string } formId - Indicates the edit form ID.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.function activateSceneAnimation
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @throws { BusinessError } 16501011 - The form can not support this operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function activateSceneAnimation(formId: string): Promise<void>;

  /**
   * Deactivate scene animation
   *
   * @param { string } formId - Indicates the edit form ID.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.function deactivateSceneAnimation can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @throws { BusinessError } 16501011 - The form can not support this operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function deactivateSceneAnimation(formId: string): Promise<void>;

  /**
   * Request form's overflow animation
   *
   * @param { string } formId - Indicates the edit form ID.
   * @param { formInfo.OverflowInfo } overflowInfo - Indicates the overflow information.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.function requestOverflow can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @throws { BusinessError } 16501011 - The form can not support this operation.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function requestOverflow(formId: string, overflowInfo: formInfo.OverflowInfo): Promise<void>;

  /**
   * Cancel form's overflow animation
   *
   * @param { string } formId - Indicates the edit form ID.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.function cancelOverflow can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form can not be operated by the current application.
   * @throws { BusinessError } 16501011 - The form can not support this operation.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function cancelOverflow(formId: string): Promise<void>;

  /**
   * Get form rect belonging to current bundle
   *
   * @param { string } formId
   *
   * @returns { Promise<formInfo.Rect> }
   * @throws { BusinessError } 801 - Capability not supported.function getFormRect can not work correctly
   *    due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getFormRect(formId: string): Promise<formInfo.Rect>;

  /**
   * Request to update the forms of a specified type.
   *
   * @param { UIAbilityContext } context - Indicates the UIAbility context of the caller.
   * @param { string } moduleName - Obtains the name of the application module to which this form belongs.
   * @param { string } abilityName - Obtains the class name of the ability to which this form belongs.
   * @param { string } formName - Obtains the name of this form.
   * @returns { Promise<int> } Returns the number of forms to be updated.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadForms(context: UIAbilityContext, moduleName: string, abilityName: string, formName: string): Promise<int>;

  /**
   * Request to update all forms of this application.
   *
   * @param { UIAbilityContext } context - Indicates the UIAbility context of the caller.
   * @returns { Promise<int> } Returns the number of forms to be updated.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadAllForms(context: UIAbilityContext): Promise<int>;

    /**
   * Update the template form detail info.
   * @param { Array<formInfo.TemplateFormDetailInfo> } templateFormInfo - Indicates the template form detail info.
   * @returns { Promise<void> } Returns the result of updating template form detail info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501013 - The system does not support the current operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function updateTemplateFormDetailInfo(templateFormInfo: Array<formInfo.TemplateFormDetailInfo>): Promise<void>;

  /**
   * Register the callback of the cross-application form publishing control interface.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } callback - Indicates the
   *     callback of the cross-application form publishing control.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPublishFormCrossBundleControl(callback: formInfo.PublishFormCrossBundleControlCallback): void;

  /**
   * Unregister the callback of the cross-application form publishing control interface.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } [callback] - Indicates the
   *     callback of the cross-application form publishing control.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPublishFormCrossBundleControl(callback?: formInfo.PublishFormCrossBundleControlCallback): void;
}
export default formProvider;