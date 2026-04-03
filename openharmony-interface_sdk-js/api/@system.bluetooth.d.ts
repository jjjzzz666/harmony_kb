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
 * @kit ConnectivityKit
 */

/**
 * @typedef StartBLEScanOptions
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export interface StartBLEScanOptions {
  /**
   * Time of delay for reporting the scan result
   *
   * @type { number }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  interval: number;
  /**
   * StartBLEScanOptions success
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  success: () => void;
  /**
   * StartBLEScanOptions failed
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  fail: (data: string, code: number) => void;
  /**
   * StartBLEScanOptions completed
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  complete: () => void;
}

/**
 * @typedef StopBLEScanOptions
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export interface StopBLEScanOptions {
  /**
   * StopBLEScanOptions success
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  success: () => void;
  /**
   * StopBLEScanOptions failed
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  fail: (data: string, code: number) => void;
  /**
   * StopBLEScanOptions completed
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  complete: () => void;
}

/**
 * @typedef BluetoothDevice
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export interface BluetoothDevice {
  /**
   * The addrType of address, may be public or random
   *
   * @type { 'public' | 'random' }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  addrType: 'public' | 'random';
  /**
   * Address of BluetoothDevice
   *
   * @type { string }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  addr: string;
  /**
   * RSSI of the remote device
   *
   * @type { number }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  rssi: number;
  /**
   * Transmission power level for advertising
   *
   * @type { string }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  txpower: string;
  /**
   * The data of BluetoothDevice
   *
   * @type { string }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  data: string;
}

/**
 * @typedef BLEFoundResponse
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export interface BLEFoundResponse {
  /**
   * The devices of BLEFoundResponse
   *
   * @type { Array<BluetoothDevice> }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  devices: Array<BluetoothDevice>;
}

/**
 * @typedef SubscribeBLEFoundOptions
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export interface SubscribeBLEFoundOptions {
  /**
   * SubscribeBLEFoundOptions success
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  success: (data: BLEFoundResponse) => void;
  /**
   * SubscribeBLEFoundOptions failed
   *
   * @type { function }
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  fail: (data: string, code: number) => void;
}

/**
 * Provides methods to manage BLE scan.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Lite
 * @since 6 dynamiconly
 */
export default class Bluetooth {
  /**
   * Start BLE scan
   *
   * @param { StartBLEScanOptions } options - Options
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  static startBLEScan(options: StartBLEScanOptions): void;

  /**
   * Stop BLE scan
   *
   * @param { StopBLEScanOptions } options - Options
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  static stopBLEScan(options: StopBLEScanOptions): void;

  /**
   * Subscribe BLE found
   *
   * @param { SubscribeBLEFoundOptions } options - Options
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  static subscribeBLEFound(options: SubscribeBLEFoundOptions): void;

  /**
   * Stop the subscription of BLE found
   *
   * @syscap SystemCapability.Communication.Bluetooth.Lite
   * @since 6 dynamiconly
   */
  static unsubscribeBLEFound(): void;
}