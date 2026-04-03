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
 * @kit BasicServicesKit
 */

import appAccount from '@ohos.account.appAccount';
import configPolicy from '@ohos.configPolicy';
import customConfig from '@ohos.customization.customConfig';
import distributedAccount from '@ohos.account.distributedAccount';
import osAccount from '@ohos.account.osAccount';
import PrintExtensionAbility from '@ohos.app.ability.PrintExtensionAbility';
import { AsyncCallback, BusinessError, Callback, ErrorCallback } from '@ohos.base';
import batteryInfo from '@ohos.batteryInfo';
import batteryStats from '@ohos.batteryStatistics';
import brightness from '@ohos.brightness';
import charger from '@ohos.charger';
import deviceAttest from '@ohos.deviceAttest';
import deviceInfo from '@ohos.deviceInfo';
import pasteboard from '@ohos.pasteboard';
import power from '@ohos.power';
import print from '@ohos.print';
import scan from '@ohos.scan';
import request from '@ohos.request';
import cacheDownload from '@ohos.request.cacheDownload';
import runningLock from '@ohos.runningLock';
import screenLock from '@ohos.screenLock';
import settings from '@ohos.settings';
import systemCapability from '@ohos.systemCapability';
import systemDateTime from '@ohos.systemDateTime';
import systemParameter from '@ohos.systemparameter';
import systemParameterEnhance from '@ohos.systemParameterEnhance';
import systemTime from '@ohos.systemTime';
import systemTimer from '@ohos.systemTimer';
import thermal from '@ohos.thermal';
import update from '@ohos.update';
import usb from '@ohos.usb';
import usbManager from '@ohos.usbManager';
import serialManager from '@ohos.usbManager.serial';
import wallpaper from '@ohos.wallpaper';
import WallpaperExtensionAbility from '@ohos.WallpaperExtensionAbility';
import zlib from '@ohos.zlib';
import commonEventManager from '@ohos.commonEventManager';
import emitter from '@ohos.events.emitter';
import StaticSubscriberExtensionAbility from '@ohos.application.StaticSubscriberExtensionAbility';
import StaticSubscriberExtensionContext from '@ohos.application.StaticSubscriberExtensionContext';
import Battery, { BatteryResponse, GetStatusOptions } from '@system.battery';
import Brightness, {
  BrightnessModeResponse, BrightnessResponse, GetBrightnessModeOptions, GetBrightnessOptions,
  SetBrightnessModeOptions, SetBrightnessOptions, SetKeepScreenOnOptions
} from '@system.brightness';
import Device, { DeviceResponse, GetDeviceOptions } from '@system.device';
import Request, {
  DownloadRequestOptions, DownloadResponse, OnDownloadCompleteOptions,
  OnDownloadCompleteResponse, RequestData, RequestFile, UploadRequestOptions, UploadResponse
} from '@system.request';
import systemLoad from '@ohos.resourceschedule.systemload';
import intelligentVoice from '@ohos.ai.intelligentVoice';
import SelectionExtensionAbility from '@ohos.selectionInput.SelectionExtensionAbility';
import { PanelInfo, PanelType } from '@ohos.selectionInput.SelectionPanel';
import selectionManager from '@ohos.selectionInput.selectionManager';
import SelectionExtensionContext from '@ohos.selectionInput.SelectionExtensionContext';
import { Available, SuppressWarnings, SuppressWarningsType } from '@ohos.annotation';
import intelligentScene from '@ohos.intelligentScene';
export {
  AsyncCallback, Battery, BatteryResponse, Brightness, BrightnessModeResponse,
  BrightnessResponse, BusinessError, Callback, Device, DeviceResponse,
  DownloadRequestOptions, DownloadResponse, ErrorCallback, GetBrightnessModeOptions,
  GetBrightnessOptions, GetDeviceOptions, GetStatusOptions, OnDownloadCompleteOptions,
  OnDownloadCompleteResponse, PrintExtensionAbility, Request, RequestData, RequestFile,
  SetBrightnessModeOptions, SetBrightnessOptions, SetKeepScreenOnOptions, UploadRequestOptions,
  UploadResponse, WallpaperExtensionAbility, appAccount, batteryInfo, batteryStats, brightness, charger, configPolicy,
  customConfig, deviceAttest, deviceInfo, distributedAccount, osAccount, pasteboard, power, print, scan, request, cacheDownload, runningLock,
  screenLock, settings, systemCapability, systemDateTime, systemParameter, systemParameterEnhance, systemTime,
  systemTimer, thermal, update, usb, usbManager, serialManager, wallpaper, zlib, commonEventManager, emitter, StaticSubscriberExtensionAbility,
  StaticSubscriberExtensionContext, systemLoad, intelligentVoice, selectionManager, SelectionExtensionAbility,
  PanelInfo, PanelType, SelectionExtensionContext, Available, SuppressWarnings, SuppressWarningsType, intelligentScene
};

/*** if arkts static */
import configPolicy from '@ohos.configPolicy';
import customConfig from '@ohos.customization.customConfig';
import { AsyncCallback, BusinessError, Callback, ErrorCallback, RecordData } from '@ohos.base';
import zlib from '@ohos.zlib';
import commonEventManager from '@ohos.commonEventManager';
import emitter from '@ohos.events.emitter';
import systemDateTime from '@ohos.systemDateTime';
import systemTimer from '@ohos.systemTimer';
import systemLoad from '@ohos.resourceschedule.systemload';
import request from '@ohos.request';
import appAccount from '@ohos.account.appAccount';
import distributedAccount from '@ohos.account.distributedAccount';
import osAccount from '@ohos.account.osAccount';
import intelligentScene from '@ohos.intelligentScene';

export {
  zlib, configPolicy, AsyncCallback, BusinessError, Callback, ErrorCallback, RecordData, customConfig, systemDateTime,
  systemTimer, systemLoad, request, commonEventManager, emitter, appAccount, distributedAccount, osAccount, intelligentScene
};
/*** endif */
