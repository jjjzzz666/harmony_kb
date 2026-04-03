/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit CoreFileKit
 */

import { AsyncCallback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * FileIO
 *
 * @namespace fileIo
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
declare namespace fileIo {

  /**
   * Mode Indicates the open flags.
   *
   * @namespace OpenMode
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  namespace OpenMode {
    /**
     * Read only Permission.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const READ_ONLY = 0o0;
    /**
     * Write only Permission.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const WRITE_ONLY = 0o1;
    /**
     * Write and Read Permission.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const READ_WRITE = 0o2;
    /**
     * If not exist, create file.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const CREATE = 0o100;
    /**
     * File truncate len 0.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const TRUNC = 0o1000;
    /**
     * File append write.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const APPEND = 0o2000;
    /**
     * File open in nonblocking mode.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const NONBLOCK = 0o4000;
    /**
     * File is Dir.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const DIR = 0o200000;
    /**
     * File is not symbolic link.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const NOFOLLOW = 0o400000;
    /**
     * SYNC IO.
     *
     * @constant
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    const SYNC = 0o4010000;
  }

/**
 * Checks whether the file or directory exists or has the operation permission.
 * This API uses a promise to return the result.
 * If the read, write, or read and write permission verification fails,
 * the error code 13900012 (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file to check.
 * @param { AccessModeType } [mode = fs.AccessModeType.EXIST] - Permission on the file to verify.
 *     <br>If this parameter is left blank, the system checks whether the file exists.
 * @returns { Promise<boolean> } Promise used to return a Boolean value.
 *     <br>Returns true if the file exists; returns false otherwise.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function access(path: string, mode?: AccessModeType): Promise<boolean>;

/**
 * Checks whether a file or directory exists. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file to check.
 * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result.
 *     <br>The value true means the file exists; the value false means the opposite.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function access(path: string, callback: AsyncCallback<boolean>): void;

/**
 * Checks whether the file or directory is stored locally or has the operation permission.
 * This API uses a promise to return the result. If the read, write, or read and write permission verification fails,
 * the error code 13900012 (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file to check.
 * @param { AccessModeType } mode - Permission on the file to verify.
 * @param { AccessFlagType } flag - Location of the file to verify.
 * @returns { Promise<boolean> } Promise used to return a Boolean value.
 *     <br>The value true means the file is a local file and has the related permission.
 *     <br>The value false means the file does not exist or is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>;

/**
 *
 * Checks whether a file or directory exists or has the operation permission.
 * This API returns the result synchronously. If the read, write, or read and write permission verification fails,
 * the error code 13900012 (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file to check.
 * @param { AccessModeType } [mode = fs.AccessModeType.EXIST] - Permission on the file to verify.
 *     <br>If this parameter is left blank, the system checks whether the file exists.
 * @returns { boolean } Returns true if the file exists; returns false otherwise.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function accessSync(path: string, mode?: AccessModeType): boolean;

/**
 * Checks whether a file or directory is stored locally or has the operation permission.
 * This API returns the result synchronously.
 * If the read, write, or read and write permission verification fails,
 * the error code 13900012 (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file to check.
 * @param { AccessModeType } mode - Permission on the file to verify.
 * @param { AccessFlagType } flag - Location of the file to verify.
 * @returns { boolean } Returns true if the file is a local file and has the related permission;
 *     <br>returns false if the file does not exist or is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * Closes a file or directory. This API uses a promise to return the result.
 *
 * @param { int | File } file - File object or FD of the file to close.
 *     <br>Once closed, the File object or FD cannot be used for read or write operations.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function close(file: int | File): Promise<void>;

/**
 * Closes a file or directory. This API uses an asynchronous callback to return the result.
 *
 * @param { int | File } file - File object or FD of the file to close.
 *     <br>Once closed, the File object or FD cannot be used for read or write operations.
 * @param { AsyncCallback<void> } callback - Callback invoked immediately after the file is closed.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function close(file: int | File, callback: AsyncCallback<void>): void;

/**
 * Closes a file or directory. This API returns the result synchronously.
 *
 * @param { int | File } file - File object or FD of the file to close.
 *     <br>Once closed, the File object or FD cannot be used for read or write operations.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function closeSync(file: int | File): void;

/**
 * Copies a file or directory. This API uses a promise to return the result.
 * File copy across devices is supported. This API forcibly overwrites the file or directory.
 * The input parameter can be the URI of the file or directory. A maximum of 10 cross-device copy tasks
 * are allowed at the same time, and the number of files to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } [options] - Callback invoked to provide the copy progress.
 *     <br>If this parameter is not set, the callback will not be invoked.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, options?: CopyOptions): Promise<void>;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 * File copy across devices is supported. This API forcibly overwrites the file or directory.
 * The file or directory URI is supported. A maximum of 10 cross-device copy tasks are allowed at the same time,
 * and the number of files to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, callback: AsyncCallback<void>): void;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 * File copy across devices is supported. This API forcibly overwrites the file or directory.
 * The file or directory URI is supported. A maximum of 10 cross-device copy tasks are allowed at the same time,
 * and the number of files to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } options - Callback used to return the copy progress.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination directory. This API uses a promise to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination folder.
 * @param { int } [mode = 0] - Copy mode. The default value is 0.
 *     <br>0: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved
 *     <br>to the destination directory, and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the
 *     <br>conflicting files in the Array<ConflictFiles> format.
 *     <br>1: Forcibly overwrite the files with the same name in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Copies the source directory to the destination directory.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination directory.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copies the source directory to the destination directory. You can set the copy mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Copy mode. The default value is 0.
 *     <br>0: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved
 *     <br>to the destination directory, and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the
 *     <br>conflicting files in the Array<ConflictFiles> format.
 *     <br>1: Forcibly overwrite the files with the same name in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination directory. You can set the copy mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Copy mode. The default value is 0.
 *     <br>0: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved
 *     <br>to the destination directory, and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the
 *     <br>conflicting files in the Array<ConflictFiles> format.
 *     <br>1: Forcibly overwrite the files with the same name in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, mode: int,
  callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copies the source directory to the destination directory. This API returns the result synchronously.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode = 0] - Copy mode. The default value is 0.
 *     <br>0: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved
 *     <br>to the destination directory, and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the
 *     <br>conflicting files in the Array<ConflictFiles> format.
 *     <br>1: Forcibly overwrite the files with the same name in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirSync(src: string, dest: string, mode?: int): void;

/**
 * Copies a file. This API uses a promise to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode = 0] - Whether to overwrite the file with the same name in the destination directory.
 *     <br>The default value is 0, which is the only value supported.
 *     <br>0: overwrite the file with the same name and truncate the part that is not overwritten.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyFile(src: string | int, dest: string | int, mode?: int): Promise<void>;

/**
 * Copies a file. This API overwrites the file with the same name in the destination directory
 * and truncates the part that is not overwritten. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { AsyncCallback<void> } callback - Callback invoked immediately after the file is copied.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyFile(src: string | int, dest: string | int, callback: AsyncCallback<void>): void;

/**
 * Copies a file. This API overwrites the file with the same name in the destination directory
 * and truncates the part that is not overwritten. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode = 0] - Whether to overwrite the file with the same name in the destination directory.
 *     <br>The default value is 0, which is the only value supported.
 *     <br>0: overwrite the file with the same name and truncate the part that is not overwritten.
 * @param { AsyncCallback<void> } callback - Callback invoked immediately after the file is copied.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyFile(
  src: string | int,
  dest: string | int,
  mode: int,
  callback: AsyncCallback<void>
): void;

/**
 * Copies a file. This API returns the result synchronously.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode = 0] - Whether to overwrite the file with the same name in the destination directory.
 *     <br>The default value is 0, which is the only value supported.
 *     <br>0: overwrite the file with the same name and truncate the part that is not overwritten.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyFileSync(src: string | int, dest: string | int, mode?: int): void;

/**
 * Creates a stream based on a file path. This API uses a promise to return the result.
 * To close the stream, use close() of Stream.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content. If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file.
 *     <br>If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 * @returns { Promise<Stream> } Promise used to return the stream opened.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createStream(path: string, mode: string): Promise<Stream>;

/**
 * Creates a stream based on a file path. This API uses an asynchronous callback to return the result.
 * To close the stream, use close() of Stream.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content. If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file.
 *     <br>If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Creates a stream based on a file path. This API returns the result synchronously.
 * To close the stream, use close() of Stream.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content. If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file.
 *     <br>If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 * @returns { Stream } Stream opened.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createStreamSync(path: string, mode: string): Stream;

/**
 * Creates a RandomAccessFile instance based on a file path or file object.
 * This API uses a promise to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for creating the RandomAccessFile instance.
 *     <br>This parameter is valid only when the application sandbox path of the file is passed in.
 *     <br>One of the following options must be specified:
 *     <br>OpenMode.READ_ONLY(0o0): Create the file in read-only mode. This is the default value.
 *     <br>OpenMode.WRITE_ONLY(0o1): Create the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By default,
 *     <br>no additional options are given.
 *     <br>OpenMode.CREATE(0o100): If the file does not exist, create it.
 *     <br>OpenMode.TRUNC(0o1000): If the RandomAccessFile object already exists and is created in write mode,
 *     <br>truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Create the file in append mode. New data will be added to the end
 *     <br>of the RandomAccessFile object.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the created file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Create a RandomAccessFile instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - Defines the options used in createRandomAccessFile().
 * @returns { Promise<RandomAccessFile> } Promise used to return the RandomAccessFile instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): Promise<RandomAccessFile>;

/**
 * Creates a RandomAccessFile object in read-only mode based on a file path or file object.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the RandomAccessFile instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a RandomAccessFile instance based on a file path or file object.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for creating the RandomAccessFile instance.
 *     <br>This parameter is valid only when the application sandbox path of the file is passed in.
 *     <br>One of the following options must be specified:
 *     <br>OpenMode.READ_ONLY(0o0): Create the file in read-only mode. This is the default value.
 *     <br>OpenMode.WRITE_ONLY(0o1): Create the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By default,
 *     <br>no additional options are given.
 *     <br>OpenMode.CREATE(0o100): If the file does not exist, create it.
 *     <br>OpenMode.TRUNC(0o1000): If the RandomAccessFile object already exists and is created in write mode,
 *     <br>truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Create the file in append mode. New data will be added to the end
 *     <br>of the RandomAccessFile object.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the created file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Create a RandomAccessFile instance in synchronous I/O mode.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the RandomAccessFile instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, mode: int, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a RandomAccessFile instance based on a file path or file object.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for creating the RandomAccessFile instance.
 *     <br>This parameter is valid only when the application sandbox path of the file is passed in.
 *     <br>One of the following options must be specified:
 *     <br>OpenMode.READ_ONLY(0o0): Create the file in read-only mode. This is the default value.
 *     <br>OpenMode.WRITE_ONLY(0o1): Create the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By default,
 *     <br>no additional options are given.
 *     <br>OpenMode.CREATE(0o100): If the file does not exist, create it.
 *     <br>OpenMode.TRUNC(0o1000): If the RandomAccessFile object already exists and is created in write mode,
 *     <br>truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Create the file in append mode. New data will be added to the end
 *     <br>of the RandomAccessFile object.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the created file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Create a RandomAccessFile instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - Defines the options used in createRandomAccessFile().
 * @returns { RandomAccessFile } RandomAccessFile instance created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createRandomAccessFileSync(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): RandomAccessFile;

/**
 * Creates a readable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { ReadStreamOptions } [options] - The options are as follows:
 *     <br>start (long): start position of the data to read in the file. This parameter is optional.
 *     <br>By default, data is read from the current position.
 *     <br>end (long): end position of the data to read in the file. This parameter is optional.
 *     <br>The default value is the end of the file.
 * @returns { ReadStream } ReadStream instance obtained.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

/**
 * Creates a writeable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { WriteStreamOptions } [options] - The options are as follows:
 *     <br>start (long): start position to write the data in the file. This parameter is optional.
 *     <br>By default, data is written from the current position.
 *     <br>mode (int): mode for creating the writeable stream. This parameter is optional.
 *     <br>The default value is the write-only mode.
 * @returns { WriteStream } WriteStream instance obtained.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

/**
 * Creates a Watcher object to listen for file or directory changes.
 *
 * @param { string } path - Application sandbox path of the file or directory to observe.
 * @param { int } events - Events to observe. Multiple events can be separated by a bitwise OR operator (|).
 * @param { WatchEventListener } listener - Callback invoked when an observed event occurs.
 *     <br>The callback will be invoked each time an observed event occurs.
 * @returns { Watcher } Watcher object created.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function createWatcher(path: string, events: int, listener: WatchEventListener): Watcher;

/**
 * Duplicates the file descriptor and returns the corresponding File object.
 *
 * @param { int } fd - FD of the file.
 * @returns { File } File object opened.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function dup(fd: int): File;

/**
 * Synchronizes the data of a file. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasync(fd: int): Promise<void>;

/**
 * Synchronizes the data (excluding the metadata) of a file.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the data of a file. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasyncSync(fd: int): void;

/**
 * Opens a stream based on an FD. This API uses a promise to return the result. To close the stream,
 * use close() of Stream.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     <br>create a file. If the file exists, write data to the end of the file (the original content
 *     <br>of the file is reserved).
 * @returns { Promise<Stream> } Returns the Stream object in promise mode.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdopenStream(fd: int, mode: string): Promise<Stream>;

/**
 * Opens a stream based on an FD. This API uses an asynchronous callback to return the result.
 * To close the stream, use close() of Stream.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     <br>create a file. If the file exists, write data to the end of the file (the original content
 *     <br>of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdopenStream(fd: int, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Opens a stream based on an FD. This API returns the result synchronously. To close the stream, use close() of Stream.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - r: Open a file for reading. The file must exist.
 *     <br>r+: Open a file for both reading and writing. The file must exist.
 *     <br>w: Open a file for writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>w+: Open a file for both reading and writing. If the file exists, clear its content.
 *     <br>If the file does not exist, create a file.
 *     <br>a: Open a file in append mode for writing at the end of the file. If the file does not exist, create a file.
 *     <br>If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>a+: Open a file in append mode for reading or updating at the end of the file. If the file does not exist,
 *     <br>create a file. If the file exists, write data to the end of the file (the original content
 *     <br>of the file is reserved).
 * @returns { Stream } Returns the Stream object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdopenStreamSync(fd: int, mode: string): Stream;

/**
 * Synchronizes the cached data of a file to storage. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsync(fd: int): Promise<void>;

/**
 * Synchronizes the cached data of a file to storage. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the cached data of a file to storage. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsyncSync(fd: int): void;

/**
 * Lists all file names in a directory. This API supports recursive listing of all file names and file filtering.
 * The returned result starts with a slash (/) and contains the subdirectory.
 * This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { Promise<string[]> } Promise used to return the file names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>;

/**
 * Lists the names of all files and directories in the current path.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(path: string, callback: AsyncCallback<string[]>): void;

/**
 * Lists all file names in a directory. This API supports recursive listing of all file names and file filtering.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void;

/**
 * Lists all file names in a directory. This API returns the result synchronously.
 * This API supports recursive listing of all file names and file filtering.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { string[] } List of the file names obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 * Adjusts the position of the file offset pointer.
 *
 * @param { int } fd - FD of the file.
 * @param { long } offset - Number of bytes to move the offset.
 * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset.
 *     <br>If this parameter is not specified, the file start position is used by default.
 * @returns { long } Returns the file offset relative to starting position of file.
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900026 - Illegal seek
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function lseek(fd: int, offset: long, whence?: WhenceType): long;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory.
 * This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @returns { Promise<Stat> } Promise used to return the symbolic link information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function lstat(path: string): Promise<Stat>;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the symbolic link information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function lstat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory.
 * This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @returns { Stat } File information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function lstatSync(path: string): Stat;

/**
 * Creates a directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdir(path: string): Promise<void>;

/**
 * Creates a directory. This API uses a promise to return the result.
 * The value true means to create a directory recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br>The value true means to create a directory recursively.
 *     <br>The value false means to create a single-level directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdir(path: string, recursion: boolean): Promise<void>;

/**
 * Creates a directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Creates a directory. This API uses an asynchronous callback to return the result.
 * The value true means to create a directory recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br>The value true means to create a directory recursively.
 *     <br>The value false means to create a single-level directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdir(path: string, recursion: boolean, callback: AsyncCallback<void>): void;

/**
 * Creates a directory. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdirSync(path: string): void;

/**
 * Creates a directory. This API returns the result synchronously.
 * The value true means to create a directory recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br>The value true means to create a directory recursively.
 *     <br>The value false means to create a single-level directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdirSync(path: string, recursion: boolean): void;

/**
 * Creates a temporary directory. This API uses a promise to return the result.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     <br>create a unique temporary directory.
 * @returns { Promise<string> } Promise used to return the directory created.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdtemp(prefix: string): Promise<string>;

/**
 * Creates a temporary directory. This API uses an asynchronous callback to return the result.
 * The directory name is created by replacing a string (specified by prefix) with six randomly generated characters.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     <br>create a unique temporary directory.
 * @param { AsyncCallback<string> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;

/**
 * Creates a temporary directory. This API returns the result synchronously.
 * The directory name is created by replacing a string (specified by prefix) with six randomly generated characters.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     <br>create a unique temporary directory.
 * @returns { string } Unique path generated.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function mkdtempSync(prefix: string): string;

/**
 * Moves the source directory to the destination directory. This API uses a promise to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode = 0] - Move mode. The default value is 0.
 *     <br>0: Throw an exception if a directory conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a non-empty directory with
 *     <br>the same name as the source directory.
 *     <br>1: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved to the destination directory,
 *     <br>and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the conflicting files in
 *     <br>the Array<ConflictFiles> format.
 *     <br>2: Forcibly overwrite the conflicting files in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 *     <br>3: Forcibly overwrite the conflicting directory.
 *     <br>The source directory is moved to the destination directory, and the content of the moved directory is the
 *     <br>same as that of the source directory. If the destination directory contains a directory with the same name
 *     <br>as the source directory, all original files in the directory will be deleted.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Moves the source directory to the destination directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory to the destination directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirWithConflictFiles(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Moves the source directory to the destination directory. You can set the move mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Move mode. The default value is 0.
 *     <br>0: Throw an exception if a directory conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a non-empty directory with
 *     <br>the same name as the source directory.
 *     <br>1: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved to the destination directory,
 *     <br>and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the conflicting files in
 *     <br>the Array<ConflictFiles> format.
 *     <br>2: Forcibly overwrite the conflicting files in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 *     <br>3: Forcibly overwrite the conflicting directory.
 *     <br>The source directory is moved to the destination directory, and the content of the moved directory is the
 *     <br>same as that of the source directory. If the destination directory contains a directory with the same name
 *     <br>as the source directory, all original files in the directory will be deleted.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory to the destination directory. You can set the move mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Move mode. The default value is 0.
 *     <br>0: Throw an exception if a directory conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a non-empty directory with
 *     <br>the same name as the source directory.
 *     <br>1: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved to the destination directory,
 *     <br>and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the conflicting files in
 *     <br>the Array<ConflictFiles> format.
 *     <br>2: Forcibly overwrite the conflicting files in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 *     <br>3: Forcibly overwrite the conflicting directory.
 *     <br>The source directory is moved to the destination directory, and the content of the moved directory is the
 *     <br>same as that of the source directory. If the destination directory contains a directory with the same name
 *     <br>as the source directory, all original files in the directory will be deleted.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirWithConflictFiles(src: string, dest: string, mode: int,
  callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Moves the source directory to the destination directory. This API returns the result synchronously.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode = 0] - Move mode. The default value is 0.
 *     <br>0: Throw an exception if a directory conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a non-empty directory with
 *     <br>the same name as the source directory.
 *     <br>1: Throw an exception if a file conflict occurs.
 *     <br>An exception will be thrown if the destination directory contains a directory with
 *     <br>the same name as the source directory, and a file with the same name exists in the conflict directory.
 *     <br>All the non-conflicting files in the source directory will be moved to the destination directory,
 *     <br>and the non-conflicting files in the destination directory will be retained.
 *     <br>The data attribute in the error returned provides information about the conflicting files in
 *     <br>the Array<ConflictFiles> format.
 *     <br>2: Forcibly overwrite the conflicting files in the destination directory.
 *     <br>When the destination directory contains a directory with the same name as the source directory,
 *     <br>the files with the same names in the destination directory are overwritten forcibly;
 *     <br>the files without conflicts in the destination directory are retained.
 *     <br>3: Forcibly overwrite the conflicting directory.
 *     <br>The source directory is moved to the destination directory, and the content of the moved directory is the
 *     <br>same as that of the source directory. If the destination directory contains a directory with the same name
 *     <br>as the source directory, all original files in the directory will be deleted.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirSync(src: string, dest: string, mode?: int): void;

/**
 * Moves a file. This API uses a promise to return the result.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { int } [mode = 0] - Move mode.
 *     <br>The value 0 means to overwrite the file with the same name in the destination directory;
 *     <br>the value 1 means to throw an exception. The default value is 0.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveFile(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Moves a file and forcibly overwrites the file with the same name in the destination directory.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves a file with the specified mode. This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination to move.
 * @param { int } [mode = 0] - Move mode.
 *     <br>The value 0 means to overwrite the file with the same name in the destination directory;
 *     <br>the value 1 means to throw an exception. The default value is 0.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveFile(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Moves a file. This API returns the result synchronously.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination to move.
 * @param { int } [mode = 0] - Move mode.
 *     <br>The value 0 means to overwrite the file with the same name in the destination directory;
 *     <br>the value 1 means to throw an exception. The default value is 0.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveFileSync(src: string, dest: string, mode?: int): void;

/**
 * Opens a file or directory. This API uses a promise to return the result. This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for opening the file.
 *     <br>You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>OpenMode.READ_ONLY(0o0): Open the file in read-only mode.
 *     <br>OpenMode.WRITE_ONLY(0o1): Open the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Open the file in read/write mode.
 *     <br>You can add the following function options in bitwise OR mode. By default, no additional option is added.
 *     <br>OpenMode.CREATE(0o100): Create a file if the file does not exist.
 *     <br>OpenMode.TRUNC(0o1000): If the file exists and is opened in write mode, truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Open the file in append mode. New data will be added to the end of the file.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Open the file in synchronous I/O mode.
 * @returns { Promise<File> } Promise used to return the File object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function open(path: string, mode?: int): Promise<File>;

/**
 * Opens a file or directory. This API uses an asynchronous callback to return the result.
 * This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 * @param { AsyncCallback<File> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function open(path: string, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory with the specified mode. This API uses an asynchronous callback to return the result.
 * This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for opening the file.
 *     <br>You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>OpenMode.READ_ONLY(0o0): Open the file in read-only mode.
 *     <br>OpenMode.WRITE_ONLY(0o1): Open the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Open the file in read/write mode.
 *     <br>You can add the following function options in bitwise OR mode. By default, no additional option is added.
 *     <br>OpenMode.CREATE(0o100): Create a file if the file does not exist.
 *     <br>OpenMode.TRUNC(0o1000): If the file exists and is opened in write mode, truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Open the file in append mode. New data will be added to the end of the file.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Open the file in synchronous I/O mode.
 * @param { AsyncCallback<File> } callback - The callback is used to return the File object to record
 *     <br>the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function open(path: string, mode: int, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory. This API returns the result synchronously. This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or file URI of the file to open.
 * @param { int } [mode = OpenMode.READ_ONLY] - Mode for opening the file.
 *     <br>You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>OpenMode.READ_ONLY(0o0): Open the file in read-only mode.
 *     <br>OpenMode.WRITE_ONLY(0o1): Open the file in write-only mode.
 *     <br>OpenMode.READ_WRITE(0o2): Open the file in read/write mode.
 *     <br>You can add the following function options in bitwise OR mode. By default, no additional option is added.
 *     <br>OpenMode.CREATE(0o100): Create a file if the file does not exist.
 *     <br>OpenMode.TRUNC(0o1000): If the file exists and is opened in write mode, truncate the file length to 0.
 *     <br>OpenMode.APPEND(0o2000): Open the file in append mode. New data will be added to the end of the file.
 *     <br>OpenMode.NONBLOCK(0o4000): If path points to a named pipe (also known as a FIFO), block special file,
 *     <br>or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>OpenMode.DIR(0o200000): If path does not point to a directory, throw an exception.
 *     <br>The write permission is not allowed.
 *     <br>OpenMode.NOFOLLOW(0o400000): If path points to a symbolic link, throw an exception.
 *     <br>OpenMode.SYNC(0o4010000): Open the file in synchronous I/O mode.
 * @returns { File } Returns the File object to record the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function openSync(path: string, mode?: int): File;

/**
 * Reads file data. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the buffer length.
 *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
 *     <br>This parameter is optional. By default, data is read from the filePointer.
 * @returns { Promise<long> } Promise used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<long>;

/**
 * Reads data from a file. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function read(fd: int, buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

/**
 * Reads data from a file. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the buffer length.
 *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
 *     <br>This parameter is optional. By default, data is read from the filePointer.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Reads data from a file. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the buffer length.
 *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
 *     <br>This parameter is optional. By default, data is read from the filePointer.
 * @returns { long } Length of the data read, in bytes.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readSync(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): long;

/**
 * Reads the text content of a file line by line. This API uses a promise to return the result.
 * Only the files in UTF-8 format are supported.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options for reading the text. The options are as follows:
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @returns { Promise<ReaderIterator> } Promise used to return a ReaderIterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readLines(filePath: string, options?: Options): Promise<ReaderIterator>;

/**
 * Reads a file text line by line. This API uses an asynchronous callback to return the result.
 * Only the files in UTF-8 format are supported.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return a ReaderIterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readLines(filePath: string, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads a file text line by line. This API uses an asynchronous callback to return the result.
 * Only the files in UTF-8 format are supported.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } options - Options for reading the text. The options are as follows:
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return a ReaderIterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readLines(filePath: string, options: Options, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads the text content of a file line by line. This API returns the result synchronously.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options for reading the text. The options are as follows:
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @returns { ReaderIterator } Returns the iterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readLinesSync(filePath: string, options?: Options): ReaderIterator;

/**
 * Reads the text content of a file. This API uses a promise to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>offset (long): start position to read the data. This parameter is optional.
 *     <br>By default, data is read from the current position.
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the file length.
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @returns { Promise<string> } Promise used to return the file content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readText(
  filePath: string,
  options?: ReadTextOptions
): Promise<string>;

/**
 * Reads the text content of a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<string> } callback - Callback used to return the content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readText(filePath: string, callback: AsyncCallback<string>): void;

/**
 * Reads the text content of a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>offset (long): start position to read the data. This parameter is optional.
 *     <br>By default, data is read from the current position.
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the file length.
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @param { AsyncCallback<string> } callback - Callback used to return the content read.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readText(
  filePath: string,
  options: ReadTextOptions,
  callback: AsyncCallback<string>
): void;

/**
 * Reads the text of a file. This API returns the result synchronously.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>offset (long): start position to read the data. This parameter is optional.
 *     <br>By default, data is read from the current position.
 *     <br>length (long): length of the data to read. This parameter is optional.
 *     <br>The default value is the file length.
 *     <br>encoding (string): format of the data to be encoded. It is valid only when the data is of the string type.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @returns { string } Returns the contents of the read file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * Renames a file or directory. This API uses a promise to return the result.
 *
 * @param { string } oldPath - Application sandbox path of the file or directory to rename.
 * @param { string } newPath - Application sandbox path of the renamed file or directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Renames a file or directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } oldPath - Application sandbox path of the file or directory to rename.
 * @param { string } newPath - Application sandbox path of the renamed file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;

/**
 * Renames a file or directory. This API returns the result synchronously.
 *
 * @param { string } oldPath - Application sandbox path of the file or directory to rename.
 * @param { string } newPath - Application sandbox path of the renamed file or directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function renameSync(oldPath: string, newPath: string): void;

/**
 * Removes a directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdir(path: string): Promise<void>;

/**
 * Removes a directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Removes a directory. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdirSync(path: string): void;

/**
 * Obtains detailed attribute information of a file or directory. This API uses a promise to return the result.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @returns { Promise<Stat> } Promise used to return detailed file information.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function stat(file: string | int): Promise<Stat>;

/**
 * Obtains detailed attribute information of a file or directory.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the file information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function stat(file: string | int, callback: AsyncCallback<Stat>): void;

/**
 * Obtains detailed attribute information of a file or directory. This API returns the result synchronously.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>NOTE: URIs can be passed since API version 22.
 * @returns { Stat } File information obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function statSync(file: string | int): Stat;

/**
 * Creates a symbolic link based on a file path. This API uses a promise to return the result.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function symlink(target: string, srcPath: string): Promise<void>;

/**
 * Creates a symbolic link based on a file path. This API uses an asynchronous callback to return the result.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;

/**
 * Creates a symbolic link based on a file path. This API returns the result synchronously.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function symlinkSync(target: string, srcPath: string): void;

/**
 * Truncates a file. This API uses a promise to return the result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } [len = 0] - File length, in bytes, after truncation. The default value is 0.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function truncate(file: string | int, len?: long): Promise<void>;

/**
 * Truncates a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { AsyncCallback<void> } callback - Callback that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function truncate(file: string | int, callback: AsyncCallback<void>): void;

/**
 * Truncates a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } len - File length, in bytes, after truncation.
 * @param { AsyncCallback<void> } callback - Callback that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function truncate(file: string | int, len: long, callback: AsyncCallback<void>): void;

/**
 * Truncates the file content. This API returns the result synchronously.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } [len = 0] - File length, in bytes, after truncation. The default value is 0.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function truncateSync(file: string | int, len?: long): void;

/**
 * Deletes a file. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function unlink(path: string): Promise<void>;

/**
 * Deletes a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { AsyncCallback<void> } callback - Callback invoked immediately after the file is deleted.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function unlink(path: string, callback: AsyncCallback<void>): void;

/**
 * Deletes a file. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function unlinkSync(path: string): void;

/**
 * Changes the time when the file was last modified.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { double } mtime - New timestamp. The value is the number of milliseconds elapsed since
 *     <br>the Epoch time (00:00:00 UTC on January 1, 1970). Only the last access time of a file can be modified.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function utimes(path: string, mtime: double): void;

/**
 * Writes data into a file. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - Defines the options use din write(). It inherits from Options.
 * @returns { Promise<long> } Returns the number of bytes written to the file in promise mode.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<long>;

/**
 * Writes data to a file. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { AsyncCallback<long> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function write(fd: int, buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

/**
 * Writes data to a file. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - The options are as follows:
 *     <br>length (long): length of the data to write. This parameter is optional.
 *     <br>The default value is the buffer length.
 *     <br>offset (long): start position to write the data in the file. This parameter is optional.
 *     <br>By default, data is written from the current position.
 *     <br>encoding (string): format of the data to be encoded when the data is a string.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @param { AsyncCallback<long> } callback - The callback is used to return the number of bytes written to the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Writes data to a file. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - The options are as follows:
 *     <br>length (long): length of the data to write. This parameter is optional.
 *     <br>The default value is the buffer length.
 *     <br>offset (long): start position to write the data in the file. This parameter is optional.
 *     <br>By default, data is written from the current position.
 *     <br>encoding (string): format of the data to be encoded when the data is a string.
 *     <br>The default value is 'utf-8', which is the only value supported.
 * @returns { long } Length of the data written, in bytes.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function writeSync(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): long;

/**
 * Connect Distributed File System.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - The networkId of device.
 * @param { DfsListeners } listeners - The listeners of Distributed File System.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900045 - Connection failed.
 * @throws { BusinessError } 13900046 - Software caused connection abort.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>;

/**
 * Disconnect Distributed File System.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - The networkId of device.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13600004 - Unmount failed.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function disconnectDfs(networkId: string): Promise<void>;

/**
 * DfsListener Callback function.
 *
 * @typedef {function} DfsListenerCallback.
 * @param { string } networkId - The networkId of device.
 * @param { int } status - The status code of Distributed File System.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 23 static
 */
type DfsListenerCallback = (networkId: string, status: int) => void;

/**
 * The listeners of Distributed File System.
 *
 * @typedef DfsListeners
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 23 static
 */
export interface DfsListeners {
  /**
   * The Listener of Distributed File System status
   *
   * @type { DfsListenerCallback }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 23 static
   */
  onStatus: DfsListenerCallback;
}

/**
 * Sets an extended attribute of a file or directory.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { string } key - Key of the extended attribute to obtain.
 *     <br>The value is a string of less than 256 bytes and can contain only the user. prefix.
 * @param { string } value -Value of the extended attribute to set.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function setxattr(path: string, key: string, value: string): Promise<void>;

/**
 * Sets an extended attribute of a file or directory.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { string } key - Key of the extended attribute to obtain.
 *     <br>The value is a string of less than 256 bytes and can contain only the user. prefix.
 * @param { string } value - Value of the extended attribute to set.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function setxattrSync(path: string, key: string, value: string): void;

/**
 * Obtains an extended attribute of a file or directory.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { Promise<string> } Promise used to return the value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function getxattr(path: string, key: string): Promise<string>;

/**
 * Obtains an extended attribute of a file. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { string } Value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function getxattrSync(path: string, key: string): string;

/**
 * Defines the copy progress information.
 *
 * @typedef Progress
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Progress {
  /**
   * Size of the copied data.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly processedSize: long;

  /**
   * Total size of the data to be copied.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly totalSize: long;
}

/**
 * Provides APIs for interrupting a copy task.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class TaskSignal {
  /**
   * Cancels a copy task.
   *
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900043 - No task can be canceled.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  cancel(): void;
}

/**
 * Defines the callback for listening for the copy progress.
 *
 * @typedef CopyOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface CopyOptions {
  /**
   * Listener used to observe the copy progress.
   *
   * @type { ?ProgressListener }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  progressListener?: ProgressListener;
  /**
   * Signal used to cancel a copy task.
   *
   * @type { ?TaskSignal }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  copySignal?: TaskSignal;
}

/**
 * Signal used to cancel a copy task.
 *
 * @typedef { function } ProgressListener
 * @param { Progress } progress - indicates the progress data of copyFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type ProgressListener = (progress: Progress) => void;

/**
 * Represents a File object opened by open().
 *
 * @interface File
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface File {

  /**
   * FD of the file.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * Path of the file.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Name of the file.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly name: string;

  /**
   * Obtains the parent directory of this file object.
   *
   * @returns { string } Parent directory obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getParent(): string;

  /**
   * Applies an exclusive lock or a shared lock on this file in blocking mode.
   * This API uses a promise to return the result.
   *
   * @param { boolean } exclusive - Lock to apply. The value true means an exclusive lock,
   *     <br>and the value false (default) means a shared lock.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(exclusive?: boolean): Promise<void>;

  /**
   * Applies an exclusive lock or a shared lock on this file in blocking mode.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on this file in blocking mode.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } exclusive - Lock to apply. The value true means an exclusive lock,
   *     <br>and the value false (default) means a shared lock.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(exclusive: boolean, callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on this file in non-blocking mode.
   *
   * @param { boolean } exclusive - Lock to apply. The value true means an exclusive lock,
   *     <br>and the value false (default) means a shared lock.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  tryLock(exclusive?: boolean): void;

  /**
   * Unlocks a file.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  unlock(): void;
}

/**
 * Provides APIs for randomly reading and writing a stream. Before invoking any API of RandomAccessFile,
 * you need to use createRandomAccessFile() to create a RandomAccessFile instance synchronously or asynchronously
 *
 * @interface RandomAccessFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface RandomAccessFile {

  /**
   * FD of the file.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * Offset pointer to the RandomAccessFile instance.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly filePointer: long;

  /**
   * Sets the file offset pointer.
   *
   * @param { long } filePointer - Offset pointer to the RandomAccessFile instance.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  setFilePointer(filePointer: long): void;

  /**
   * Closes this RandomAccessFile instance. This API returns the result synchronously.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;

  /**
   * Writes data into a file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is written from the filePointer.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @returns { Promise<long> } Returns the number of bytes written to the file in promise mode.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Writes data to a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Writes data to a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is written from the filePointer.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Writes data to a file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is written from the filePointer.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @returns { long } Length of the data written in the file.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Reads data from a file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is read from the filePointer.
   * @returns { Promise<long> } Promise used to return the data read.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Reads data from a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
   * Reads data from a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is read from the filePointer.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Reads data from a file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data (it is determined by filePointer plus offset).
   *     <br>This parameter is optional. By default, data is read from the filePointer.
   * @returns { long } Returns the number of file bytes read to buffer.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;

  /**
   * Obtains a ReadStream instance of this RandomAccessFile.
   *
   * @returns { ReadStream } ReadStream instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getReadStream(): ReadStream;

  /**
   * Obtains a WriteStream instance of this RandomAccessFile.
   *
   * @returns { WriteStream } WriteStream instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getWriteStream(): WriteStream;
}

/**
 * Defines a readable stream. You need to use fs.createReadStream to create a ReadStream instance,
 * which is inherited from the stream base class.
 * The data obtained by ReadStream is a decoded string. Currently, only the UTF-8 format is supported.
 *
 * @extends stream.Readable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class ReadStream extends stream.Readable {
  /**
   * The ReadStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor();

  /**
   * Number of bytes read by the readable stream.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesRead: long;

  /**
   * Path of the file corresponding to the readable stream.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Adjusts the position of the readable stream offset pointer.
   *
   * @param { long } offset - Number of bytes to move the offset.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset. The default value is SEEK_SET,
   *     <br>which indicates the beginning of the file.
   * @returns { long } Returns the offset relative to starting position of stream.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Closes this readable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;
}

/**
 * Defines a writeable stream. You need to use fs.createWriteStream to create a WriteStream instance,
 * which is inherited from the stream base class.
 *
 * @extends stream.Writable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class WriteStream extends stream.Writable {
  /**
   * The WriteStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor();

  /**
   * Number of bytes written to the writable stream.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesWritten: long;

  /**
   * Path of the file corresponding to the writeable stream.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Adjusts the position of the writeable stream offset pointer.
   *
   * @param { long } offset - Number of bytes to move the offset.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset.
   *     <br>The default value is SEEK_SET, which indicates the beginning of the file.
   * @returns { long } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Closes this writeable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;
}

/**
 * AtomicFile is a class used to perform atomic read and write operations on files.
 * A temporary file is written and renamed to the original file location, which ensures file integrity.
 * If the write operation fails, the temporary file is deleted without modifying the original file content.
 * You can call finishWrite() or failWrite() to write or roll back file content.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export class AtomicFile {
  /**
   * The AtomicFile constructor.
   *
   * @param { string } path - Application sandbox path of the file.
   * @throws { BusinessError } 401 Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor(path: string);

  /**
   * Obtains the file object through the AtomicFile object. The FD needs to be closed by calling close().
   *
   * @returns { File } File object opened.
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900005 IO error
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getBaseFile(): File;

  /**
   * Creates a ReadStream instance.
   *
   * @returns { ReadStream } ReadStream instance obtained.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  openRead(): ReadStream;

  /**
   * Reads all content of a file.
   *
   * @returns { ArrayBuffer } Full content of a file.
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readFully(): ArrayBuffer;

  /**
   * Starts to write new file data in the WriteStream object returned. If the file does not exist, create a file.
   * Call finishWrite() if the write operation is successful; call failWrite() if the write operation fails.
   *
   * @returns { WriteStream } Returns the file write stream.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  startWrite(): WriteStream;

  /**
   * Finishes writing file data when the write operation is complete.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  finishWrite(): void;

  /**
   * Rolls back the file after the file fails to be written.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  failWrite(): void;

  /**
   * Deletes the AtomicFile class, including the original files and temporary files.
   *
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  delete(): void;
}

/**
 * Represents detailed file information. Before calling any API of the Stat() class,
 * use stat() to create a Stat instance.
 *
 * @interface Stat
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stat {
  /**
   * File identifier, which varies with files on the same device.
   *
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ino: bigint;

  /**
   * File permissions. The meaning of each bit is as follows:
   * The following values are in octal format. The return values are in decimal format. You need to convert the values.
   * 0o400: The user has the read permission on a regular file or a directory entry.
   * 0o200: The user has the permission to write a regular file or create and delete a directory entry.
   * 0o100: The user has the permission to execute a regular file or search for the specified path in a directory.
   * 0o040: The user group has the read permission on a regular file or a directory entry.
   * 0o020: The user group has the permission to write a regular file or create and delete a directory entry.
   * 0o010: The user group has the permission to execute a regular file or search for the specified path in a directory.
   * 0o004: Other users have the permission to read a regular file or read a directory entry.
   * 0o002: Other users have the permission to write a regular file or create and delete a directory entry.
   * 0o001: Other users have the permission to execute a regular file or search for the specified path in a directory.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mode: long;

  /**
   * ID of the file owner.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly uid: long;

  /**
   * ID of the user group of the file.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly gid: long;

  /**
   * File size, in bytes. This parameter is valid only for regular files.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly size: long;

  /**
   * Time when the file was last accessed. The value is the number of seconds elapsed since 00:00:00 on January 1, 1970.
   * NOTE: Currently, user data partitions are mounted in noatime mode by default, and atime update is disabled.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atime: long;

  /**
   * Time when the file content was last modified. The value is the number of seconds elapsed
   * since 00:00:00 on January 1, 1970.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtime: long;

  /**
   * Time when the file metadata was last modified. The value is the number of seconds elapsed
   * since 00:00:00 on January 1, 1970.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctime: long;

  /**
   * Time of the last access to the file. The value is the number of nanoseconds elapsed
   * since 00:00:00 on January 1, 1970.
   * NOTE: Currently, user data partitions are mounted in noatime mode by default, and atime update is disabled.
   *
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atimeNs?:bigint;

  /**
   * Time of the last modification to the file. The value is the number of
   * nanoseconds elapsed since 00:00:00 on January 1, 1970.
   *
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtimeNs?:bigint;

  /**
   * Time of the last status change of the file. The value is the number of nanoseconds elapsed
   * since 00:00:00 on January 1, 1970.
   *
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctimeNs?:bigint;

  /**
   * File location, which indicates whether the file is stored in a local device or in the cloud.
   *
   * @type { LocationType }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly location: LocationType;

  /**
   * Checks whether this file is a block special file. A block special file supports access by block only,
   * and it is cached when accessed.
   *
   * @returns { boolean } Returns whether the path/fd point to a block device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isBlockDevice(): boolean;

  /**
   * Checks whether this file is a character special file. A character special device supports random access,
   * and it is not cached when accessed.
   *
   * @returns { boolean } Returns whether the path/fd point to a character device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isCharacterDevice(): boolean;

  /**
   * Checks whether this file is a directory.
   *
   * @returns { boolean } Returns whether the path/fd point to a directory or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isDirectory(): boolean;

  /**
   * Checks whether this file is a named pipe (or FIFO). Named pipes are used for inter-process communication.
   *
   * @returns { boolean } Returns whether the path/fd point to a fifo file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFIFO(): boolean;

  /**
   * Checks whether this file is a regular file.
   *
   * @returns { boolean } Returns whether the path/fd point to a normal file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFile(): boolean;

  /**
   * Checks whether this file is a socket.
   *
   * @returns { boolean } Returns whether the path/fd point to a socket file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSocket(): boolean;

  /**
   * Checks whether this file is a symbolic link.
   *
   * @returns { boolean } Returns whether the path/fd point to a symbolic link or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSymbolicLink(): boolean;
}

/**
 * Provides API for stream operations. Before calling any API of Stream,
 * you need to create a Stream instance by using fs.createStream or fs.fdopenStream.
 *
 * @interface Stream
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stream {
  /**
   * Closes the file stream. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): Promise<void>;

  /**
   * Closes the file stream. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Return the callback function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(callback: AsyncCallback<void>): void;

  /**
   * Close stream with sync interface.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  closeSync(): void;

  /**
   * Flushes this stream. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  flush(): Promise<void>;

  /**
   * Flushes this stream. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  flush(callback: AsyncCallback<void>): void;

  /**
   * Flushes this stream. This API returns the result synchronously.
   *
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  flushSync(): void;

  /**
   * Writes data to this stream. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data in the file. This parameter is optional.
   *     <br>By default, data is written from the current position.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @returns { Promise<long> } Promise used to return the length of the data written.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Writes data to this stream. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { AsyncCallback<long> } callback - The callback is used to return the
   *     <br>number of file bytes written to file.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Writes data to this stream. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data in the file. This parameter is optional.
   *     <br>By default, data is written from the current position.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Writes data to this stream. This API returns the result synchronously.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to write. The default value is the buffer length.
   *     <br>offset (long): start position to write the data in the file. This parameter is optional.
   *     <br>By default, data is written from the current position.
   *     <br>encoding (string): format of the data to be encoded when the data is a string.
   *     <br>The default value is 'utf-8', which is the only value supported.
   * @returns { long } Length of the data written in the file.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Reads data from the stream. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data. This parameter is optional. By default,
   *     <br>data is read from the current position.
   * @returns { Promise<long> } Promise used to return the data read.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Reads data from this stream. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
   * Reads data from this stream. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data. This parameter is optional. By default,
   *     <br>data is read from the current position.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Reads data from this stream. This API returns the result synchronously.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>length (long): length of the data to read. This parameter is optional.
   *     <br>The default value is the buffer length.
   *     <br>offset (long): start position to read the data. This parameter is optional. By default,
   *     <br>data is read from the current position.
   * @returns { long } Length of the data read.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;
}

/**
 * Provides APIs for observing the changes of files or directories.
 * Before using the APIs of Watcher, call createWatcher() to create a Watcher object.
 *
 * @interface Watcher
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Watcher {
  /**
   * Starts listening.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start(): void;

  /**
   * Stops listening and removes the Watcher object.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  stop(): void;
}

/**
 * Enumerates the types of the relative offset position used in lseek().
 *
 * @enum { int } whence type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum WhenceType {
  /**
   * Starting position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_SET = 0,

  /**
   * Current position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_CUR = 1,

  /**
   * Ending position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_END = 2,
}

/**
 * Enumeration of different types of file location.
 *
 * @enum { int } location type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum LocationType {
  /**
   * The file is stored in a local device.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 1 << 0,

  /**
   * The file is stored in the cloud.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  CLOUD = 1 << 1,
}

/**
 * Enumerates the access modes to verify. If this parameter is left blank, the system checks whether the file exists.
 *
 * @enum { int } access mode type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessModeType {
  /**
   * Whether the file exists.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  EXIST = 0,

  /**
   * Verify the write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  WRITE = 2,

  /**
   * Verify the read permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ = 4,

  /**
   * Verify the read/write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ_WRITE = 6,
}

/**
 * Enumerates the locations of the file to verify.
 *
 * @enum { int } access flag type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessFlagType {
  /**
   * The file is stored locally.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 0,
}

/**
 * Provides a ReaderIterator object. Before calling APIs of ReaderIterator,
 * you need to use readLines() to create a ReaderIterator instance.
 *
 * @interface ReaderIterator
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface ReaderIterator {
  /**
   * Obtains the ReaderIterator result.
   *
   * @returns { ReaderIteratorResult } ReaderIteratorResult object obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  next(): ReaderIteratorResult;
}

}

/**
 * Specifies the callback function to be invoked.
 *
 * @typedef { function } WatchEventListener
 * @param { WatchEvent } event - Event for the callback to invoke.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export type WatchEventListener = (event: WatchEvent) => void;

/**
 * Defines the event to observe.
 *
 * @interface WatchEvent
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WatchEvent {
  /**
   * Sandbox path of the file to observe. The sandbox path contains the file name.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fileName: string;

  /**
   * Events to observe. Multiple events can be separated by a bitwise OR operator (|).
   * 0x1: IN_ACCESS: A file is accessed.
   * 0x2: IN_MODIFY: The file content is modified.
   * 0x4: IN_ATTRIB: The file metadata is modified.
   * 0x8: IN_CLOSE_WRITE: A file is opened, written with data, and then closed.
   * 0x10: IN_CLOSE_NOWRITE: A file or directory is opened and then closed without data written.
   * 0x20: IN_OPEN: A file or directory is opened.
   * 0x40: IN_MOVED_FROM: A file in the observed directory is moved.
   * 0x80: IN_MOVED_TO: A file is moved to the observed directory.
   * 0x100: IN_CREATE: A file or directory is created in the observed directory.
   * 0x200: IN_DELETE: A file or directory is deleted from the observed directory.
   * 0x400: IN_DELETE_SELF: The observed directory is deleted. After the directory is deleted, the listening stops.
   * 0x800: IN_MOVE_SELF: The observed file or directory is moved.
   *     <br>After the file or directory is moved, the listening continues.
   * 0xfff: IN_ALL_EVENTS: All events.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly event: int;

  /**
   * Cookie bound with the event. Currently, only the IN_MOVED_FROM and IN_MOVED_TO events are supported.
   * The IN_MOVED_FROM and IN_MOVED_TO events of the same file have the same cookie value.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly cookie: int;
}

/**
 * Represents the information obtained by the ReaderIterator object.
 *
 * @interface ReaderIteratorResult
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReaderIteratorResult {
  /**
   * Whether the iteration is complete.
   * The value true means the iteration is complete; the value false means the iteration is not complete.
   *
   * @type { boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  done: boolean;

  /**
   * File text content read line by line.
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  value: string;
}

/**
 * Defines the file filtering configuration used by listFile().
 *
 * @interface Filter
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Filter {
  /**
   * Locate files that fully match the specified file name extensions, which are of the OR relationship.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  suffix?: Array<string>;

  /**
   * Locate files that fuzzy match the specified file names, which are of the OR relationship.
   * Currently, only the wildcard * is supported.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  displayName?: Array<string>;

  /**
   * Locate files that fully match the specified MIME types, which are of the OR relationship.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mimeType?: Array<string>;

  /**
   * Locate files that are greater than or equal to the specified size.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  fileSizeOver?: long;

  /**
   * Locate files whose last modification time is the same or later than the specified time.
   *
   * @type { ?double }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lastModifiedAfter?: double;

  /**
   * Whether to exclude the files already in Media. The value true means to exclude the files already in Media;
   * the value false means not to exclude the files already in Media.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  excludeMedia?: boolean;
}

/**
 * Defines conflicting file information used in copyDir() or moveDir().
 *
 * @interface ConflictFiles
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ConflictFiles {
  /**
   * The path of the source file.
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  srcFile: string;

  /**
   * The path of the destination file.
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  destFile: string;
}

/**
 * Defines the options used in readLines().
 *
 * @interface Options
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Options {
  /**
   * File encoding format. It is optional.
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * Defines the options used in read().
 *
 * @interface ReadOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadOptions {
  /**
   * Start position of the file to read (current filePointer plus offset), in bytes. This parameter is optional.
   * By default, data is read from the filePointer.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;

  /**
   * Length of the data to read, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * Defines the options used in readText(). It inherits from ReadOptions.
 *
 * @extends ReadOptions
 * @interface ReadTextOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * Format of the data to be encoded. This parameter is valid only when the data type is string.
   * The default value is 'utf-8', which is the only value supported.
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * Defines the options use din write(). It inherits from Options.
 *
 * @extends Options
 * @interface WriteOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteOptions extends Options {
  /**
   * Start position of the file to write (current filePointer plus offset), in bytes. This parameter is optional.
   * By default, data is written from the filePointer.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;
  /**
   * Length of the data to write, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * ListFileOptions type
 *
 * @interface ListFileOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ListFileOptions {
  /**
   * Whether to list all files in the subdirectories recursively. This parameter is optional.
   * The default value is false. If recursion is false, the names of files and directories that meet the filtering
   * requirements in the current directory are returned. If recursion is true, relative paths (starting with /)
   * of all files that meet the specified conditions in the current directory are returned.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  recursion?: boolean;

  /**
   * Number of file names to list. This parameter is optional. The default value is 0, which means to list all files.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  listNum?: long;

  /**
   * File filtering configuration. This parameter is optional. It specifies the file filtering conditions.
   *
   * @type { ?Filter }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  filter?: Filter;
}

/**
 * Defines the options used in createRandomAccessFile().
 *
 * @interface RandomAccessFileOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface RandomAccessFileOptions {
  /**
   * Start position to read the data, in bytes. This parameter is optional.
   * By default, data is read from the current position.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * End position to read the data, in bytes. This parameter is optional. The default value is the end of the file.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * Defines the options used in createReadStream().
 *
 * @interface ReadStreamOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadStreamOptions {
  /**
   * Start position to read the data, in bytes. This parameter is optional. By default,
   * data is read from the current position.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * End position to read the data, in bytes. This parameter is optional.
   * The default value is the end of the file.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * Defines the options used in createWriteStream().
 *
 * @interface WriteStreamOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteStreamOptions {
  /**
   * Option for creating the writeable stream.
   *
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mode?: int;
  /**
   * Start position to write the data, in bytes. This parameter is optional.
   * By default, data is written from the beginning of the file.
   *
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;
}

/**
 * Task signal.
 * @typedef { fileIo.TaskSignal }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type TaskSignal = fileIo.TaskSignal;

/**
 * Watcher object
 * @typedef { fileIo.Watcher }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type Watcher = fileIo.Watcher;

/**
 * AtomicFile object
 * @typedef { fileIo.AtomicFile }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type AtomicFile = fileIo.AtomicFile;

export default fileIo;
export {TaskSignal, Watcher, AtomicFile}
