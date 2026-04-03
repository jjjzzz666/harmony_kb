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

import path from 'path';
import fs from 'fs';
import { LogType, OperateType, PackagingType } from './Enums';

export interface Position {
  line: number;
  column: number;
}

interface LogBaseInterface {
  print(): void;
}

export class LogModel implements LogBaseInterface {
  // 文件全路径
  private filePath: string;
  // 文件名
  private fileName: string;
  // 打包类型
  private packagingType: PackagingType;
  // 位置信息
  private position: Position;
  // 打包日志
  private packagingLog: PackagingBaseLog;

  constructor(filePath: string, fileName: string, packagingType: PackagingType, position: Position, packagingLog: PackagingBaseLog) {
    this.filePath = filePath;
    this.fileName = fileName;
    this.packagingType = packagingType;
    this.position = position;
    this.packagingLog = packagingLog;
  }

  print(): void {

  }
}

export interface LogParameters {
  filePath: string;
  packagingType: PackagingType;
  position: Position;
  apiPath: string;
  logType: LogType;
  operateType?: OperateType;
  errcode?: number;
  errorMessage?: string;
}

abstract class PackagingBaseLog {
  // API路径
  private apiPath: string;
  // 日志类型
  private logType: LogType;
  // 日志信息
  private message?: string;
  // 日志实例
  private logModel?: LogModel;

  constructor(apiPath: string, logType: LogType) {
    this.apiPath = apiPath;
    this.logType = logType;
  }

  abstract getMessage(msg: string): string;

  static emitLog(logParam: LogParameters): void {
    // TODO 日志唯一入口，构建LogModel实例化对象，并push到全局对象中（process.env/globalObject
    const fileName: string = path.basename(logParam.filePath)
    const logModelObject: LogModel = new LogModel(logParam.filePath, fileName, logParam.packagingType, logParam.position, this)
  }

  updateMessage(msg: string): void {
    // TODO
  }

  abstract getPackagingLogInstance(logParam: LogParameters): PackagingBaseLog;
}

export class PackagingError extends PackagingBaseLog {
  private errcode: number;
  private errorMessage: string;

  constructor(errcode: number, errorMessage: string, apiPath: string, logType: LogType) {
    super(apiPath, logType);
    this.errcode = errcode;
    this.errorMessage = this.getMessage(errorMessage);
    super.updateMessage(this.errorMessage);
  }
  getMessage(message: string): string {
    // TODO 实现组装operateMessage的方法
    return ''
  }
}

export class PackagingLog extends PackagingBaseLog {
  // 操作类型
  private type: OperateType;
  private operateMessage: string;

  constructor(type: OperateType, operateMessage: string, apiPath: string, logType: LogType) {
    super(apiPath, logType);
    this.type = type;
    this.operateMessage = this.getMessage(operateMessage);
    super.updateMessage(this.operateMessage);
  }
  getMessage(message: string): string {
    // TODO 实现组装operateMessage的方法
    return ''
  }
}