/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { AsyncCallback, RecordData } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import image from './@ohos.multimedia.image';
import unifiedDataChannel from './@ohos.data.unifiedDataChannel';

/**
 * systemPasteboard
 * @namespace pasteboard
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @since 6
 */
/**
 * systemPasteboard
 * @namespace pasteboard
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * systemPasteboard
 * @namespace pasteboard
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 * @since 23 static
 */
declare namespace pasteboard {
  /**
   * Indicates the maximum number of records allowed in a PasteData object.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Indicates the maximum number of records allowed in a PasteData object.
   * No limit the number of records in a PasteData object since API version 10.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 10
   */
  /**
   * Indicates the maximum number of records allowed in a PasteData object.
   * No limit the number of records in a PasteData object since API version 10.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  const MAX_RECORD_NUM = 512;
  /**
   * Indicates MIME types of HTML text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Indicates MIME types of HTML text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates MIME types of HTML text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  const MIMETYPE_TEXT_HTML = 'text/html';
  /**
   * Indicates MIME types of wants.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Indicates MIME types of wants.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates MIME types of wants.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  const MIMETYPE_TEXT_WANT = 'text/want';
  /**
   * Indicates MIME types of plain text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Indicates MIME types of plain text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates MIME types of plain text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  const MIMETYPE_TEXT_PLAIN = 'text/plain';
  /**
   * Indicates MIME types of URIs.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Indicates MIME types of URIs.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates MIME types of URIs.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  const MIMETYPE_TEXT_URI = 'text/uri';
  /**
   * Indicates MIME type of PixelMap.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 9
   */
  /**
   * Indicates MIME type of PixelMap.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates MIME type of PixelMap.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  const MIMETYPE_PIXELMAP = 'pixelMap';

  /**
   * Indicates type of value.
   * @type { string | image.PixelMap | Want | ArrayBuffer }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 9
   */
  /**
   * Indicates type of value.
   * @typedef { string | image.PixelMap | Want | ArrayBuffer }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Indicates type of value.
   * @typedef { string | image.PixelMap | Want | ArrayBuffer }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  type ValueType = string | image.PixelMap | Want | ArrayBuffer;

  /**
   * Indicates the callback for pasteboard content changes.
   * @typedef { function } UpdateCallback
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 22 dynamic
   */
  /**
   * Indicates the callback for pasteboard content changes.
   * @typedef { function } UpdateCallback
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @since 24 dynamic
   * @since 23 static
   */
  type UpdateCallback = () => void;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_HTML.
   * @param { string } htmlText - To save the Html text content.
   * @returns { PasteData } Containing the contents of the clipboard content object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createData
   */
  function createHtmlData(htmlText: string): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_WANT.
   * @param { Want } want - To save the want of content.
   * @returns { PasteData } Containing the contents of the clipboard content object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createData
   */
  function createWantData(want: Want): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_PLAIN.
   * @param { string } text - To save the text of content.
   * @returns { PasteData } Containing the contents of the clipboard content object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createData
   */
  function createPlainTextData(text: string): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_URI.
   * @param { string } uri - To save the uri of content.
   * @returns { PasteData } Containing the contents of the clipboard content object.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createData
   */
  function createUriData(uri: string): PasteData;

  /**
   * Creates a PasteData object with MIME type and value.
   * @param { string } mimeType - indicates MIME type of value, its size cannot be greater than 1024 bytes.
   * @param { ValueType } value - indicates the content that is set to PasteData.
   * @returns { PasteData } a new PasteData object which contains mimeType and value.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 9
   */
  /**
   * Creates a PasteData object of the specified type.
   * @param { string } mimeType - indicates type of the value, its size cannot exceed 1024 bytes.
   * @param { ValueType } value - indicates the content that is set to PasteData.
   * @returns { PasteData } a new PasteData object which contains mimeType and value.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Creates a PasteData object of the specified type.
   * @param { string } mimeType - indicates type of the value, its size cannot exceed 1024 bytes.
   * @param { ValueType } value - indicates the content that is set to PasteData.
   * @returns { PasteData } a new PasteData object which contains mimeType and value.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  function createData(mimeType: string, value: ValueType): PasteData;

  /**
   * Creates a PasteData object with the specified MIME types and values.
   * @param { Record<string, ValueType> } data - indicates the MEME types and values of the PasteData object to create.
   * @returns { PasteData } Returns the PasteData object created.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 14 dynamic
   */
  /**
   * Creates a PasteData object with the specified MIME types and values.
   * @param { Record<string, ValueType> } data - indicates the MEME types and values of the PasteData object to create.
   * @returns { PasteData } Returns the PasteData object created.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @since 24 dynamic
   * @since 23 static
   */
  function createData(data: Record<string, ValueType>): PasteData;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_HTML.
   * @param { string } htmlText - To save the Html text content.
   * @returns { PasteDataRecord } The content of a new record
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createRecord
   */
  function createHtmlTextRecord(htmlText: string): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_WANT.
   * @param { Want } want - To save the want of content.
   * @returns { PasteDataRecord } The content of a new record
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createRecord
   */
  function createWantRecord(want: Want): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_PLAIN.
   * @param { string } text - To save the text of content.
   * @returns { PasteDataRecord } The content of a new record
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createRecord
   */
  function createPlainTextRecord(text: string): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_URI.
   * @param { string } uri - To save the uri of content.
   * @returns { PasteDataRecord } The content of a new record
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.pasteboard.pasteboard#createRecord
   */
  function createUriRecord(uri: string): PasteDataRecord;

  /**
   * Creates a record object with MIME type and value.
   * @param { string } mimeType - indicates MIME type of value, its size cannot be greater than 1024 bytes.
   * @param { ValueType } value - content to be saved.
   * @returns { PasteDataRecord } a new PasteDataRecord object which contains mimeType and value.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 9
   */
  /**
   * Creates a PasteDataRecord object of the specified type.
   * @param { string } mimeType - indicates type of the value, its size cannot exceed 1024 bytes.
   * @param { ValueType } value - Data content of the specified type.
   * @returns { PasteDataRecord } A new paste data record of a specified type.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Creates a PasteDataRecord object of the specified type.
   * @param { string } mimeType - indicates type of the value, its size cannot exceed 1024 bytes.
   * @param { ValueType } value - Data content of the specified type.
   * @returns { PasteDataRecord } A new paste data record of a specified type.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  function createRecord(mimeType: string, value: ValueType): PasteDataRecord;

  /**
   * get SystemPasteboard
   * @returns { SystemPasteboard } The system clipboard object
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6
   */
  /**
   * get SystemPasteboard
   * @returns { SystemPasteboard } The system clipboard object
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * get SystemPasteboard
   * @returns { SystemPasteboard } The system clipboard object
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  function getSystemPasteboard(): SystemPasteboard;

  /**
   * Types of scope that PasteData can be pasted.
   * @enum { number }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 9
   */
  /**
   * Types of scope that PasteData can be pasted.
   * @enum { int }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ShareOption {
    /**
     * INAPP indicates that only paste in the same app is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * INAPP indicates that only intra-application pasting is allowed. 
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INAPP,
    /**
     * LOCALDEVICE indicates that paste in any app in this device is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * LOCALDEVICE indicates that paste is allowed in any application.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    LOCALDEVICE,
    /**
     * CROSSDEVICE indicates that paste in any app across devices is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * CROSSDEVICE indicates that paste is allowed in any application across devices.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
    CROSSDEVICE
  }

  /**
   * Enumerates the patterns allowed in the system pasteboard.
   * @enum { int }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 13 dynamic
   * @since 23 static
   */
  enum Pattern {
    /**
     * URL pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    URL = 0,
    /**
     * Number pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    NUMBER = 1,
    /**
     * Email address pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS = 2,
    /**
     * HTTP URL pattern.
     * 
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HTTP_URL = 3,
    /**
     * Flight number pattern.
     * 
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FLIGHT_NUMBER = 4,
  }


  /**
   * Paste data property.
   * @interface PasteDataProperty
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Defines the properties of all data records on the pasteboard, including the timestamp, data type, pasteable range, 
   * and additional data. The defined properties can be applied to the pasteboard only with the setProperty method.
   * @interface PasteDataProperty
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Defines the properties of all data records on the pasteboard, including the timestamp, data type, pasteable range, 
   * and additional data. The defined properties can be applied to the pasteboard only with the setProperty method.
   * @interface PasteDataProperty
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  interface PasteDataProperty {
    /**
     * additional property data. key-value pairs.
     * @type { object }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * additional property data. key-value pairs.
     * @type { object }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11
     */
    /**
     * additional property data. key-value pairs.
     * @type { Record<string, object> }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 23 dynamic
     */
    /**
     * additional property data. key-value pairs.
     * @type { Record<string, object> }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    additions: Record<string, object>;
    /**
     * additional property data. key-value pairs.
     * @type { Record<string, RecordData> }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    additions: Record<string, RecordData>;
    /**
     * non-repeating MIME types of all records in PasteData.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * non-repeating MIME types of all records in PasteData.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * non-repeating MIME types of all records in PasteData.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    readonly mimeTypes: Array<string>;
    /**
     * the user-defined tag of a PasteData object.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the user-defined tag of a PasteData object.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the user-defined tag of a PasteData object.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    tag: string;
    /**
     * a timestamp, which indicates when data is written to the system pasteboard.
     * @type { number }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * a timestamp, which indicates when data is written to the system pasteboard.
     * @type { long }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * a timestamp, which indicates when data is written to the system pasteboard.
     * @type { long }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
    /**
     * Checks whether PasteData is set for local access only.
     * @type { boolean }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * Checks whether PasteData is set for local access only.
     * @type { boolean }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    localOnly: boolean;
    /**
     * Indicates the scope of clipboard data which can be pasted.
     * If it is not set or is incorrectly set, The default value is CrossDevice.
     * @type { ShareOption }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Indicates the scope of clipboard data which can be pasted.
     * If it is not set or is incorrectly set, The default value is CrossDevice.
     * @type { ShareOption }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    shareOption: ShareOption;
  }

  /**
   * Paste data record.
   * @interface PasteDataRecord
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7
   */
  /**
   * Paste data record.
   * @interface PasteDataRecord
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Paste data record.
   * @interface PasteDataRecord
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  interface PasteDataRecord {
    /**
     * HTML text in a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * HTML text in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * HTML text in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    htmlText: string;
    /**
     * an want in a record.
     * @type { Want }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * Want in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { Want }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Want in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { Want }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    want: Want;
    /**
     * MIME types of a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * Default MIME type of a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Default MIME type of a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    mimeType: string;
    /**
     * plain text in a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * Plain text in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Plain text in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    plainText: string;
    /**
     * an URI in a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * URI in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * URI in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * PixelMap in a record.
     * @type { image.PixelMap }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * PixelMap in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { image.PixelMap }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * PixelMap in a record.
     * This parameter is read-only and does not support assignment operations. 
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { image.PixelMap }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
    /**
     * Custom data in a record, mimeType indicates the MIME type of custom data, ArrayBuffer indicates the value of custom data.
     * @type { object }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Custom data in a record, mimeType indicates the MIME type of custom data, ArrayBuffer indicates the value of custom data.
     * @type { object }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11
     */
    /**
     * Custom data in a record, string indicates the MIME type of custom data, ArrayBuffer indicates the value of custom data.
     * This parameter is read-only and does not support assignment operations.
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { Record<string, ArrayBuffer> }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 23 dynamic
     */
    /**
     * Custom data in a record, string indicates the MIME type of custom data, ArrayBuffer indicates the value of custom data.
     * This parameter is read-only and does not support assignment operations.
     * To assign a value, please use ohos.pasteboard.pasteboard#createData or ohos.pasteboard.pasteboard#addEntry.
     * @type { Record<string, ArrayBuffer> }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    data: Record<string, ArrayBuffer>;

    /**
     * Converts data in PasteData to text format.
     * @param { AsyncCallback<string> } callback - the callback of convertToText.
     * @throws { BusinessError } 401 - Possible causes: Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#toPlainText
     */
    convertToText(callback: AsyncCallback<string>): void;

    /**
     * Converts data in PasteData to text format.
     * @returns { Promise<string> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#toPlainText
     */
    convertToText(): Promise<string>;

    /**
     * Converts data in PasteData to text format.
     * @returns { string } the string returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Converts data in PasteData to text format.
     * @returns { string } the string returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Converts data in PasteData to text format.
     * @returns { string } the string returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    toPlainText(): string;

    /**
     * Adds data to the PasteDataRecord object.
     * @param { string } type - indicates type of the value, its size cannot exceed 1024 bytes.
     * @param { ValueType } value - indicates the value of the data to add.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 14 dynamic
     */
    /**
     * Adds data to the PasteDataRecord object.
     * @param { string } type - indicates type of the value, its size cannot exceed 1024 bytes.
     * @param { ValueType } value - indicates the value of the data to add.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @since 24 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * Obtains the valid types in the PasteDataRecord object.
     * @param { Array<string> } types - indicates an array of types from which the valid types are obtained.
     * @returns { Array<string> } Returns the valid types obtained.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 14 dynamic
     */
    /**
     * Obtains the valid types in the PasteDataRecord object.
     * @param { Array<string> } types - indicates an array of types from which the valid types are obtained.
     * @returns { Array<string> } Returns the valid types obtained.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @since 24 dynamic
     * @since 23 static
     */
    getValidTypes(types: Array<string>): Array<string>;

    /**
     * Obtains data of the specified type.
     * @param { string } type - indicates type of the data to obtain, its size cannot exceed 1024 bytes.
     * @returns { Promise<ValueType> } Promise used to return the data obtained.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 14 dynamic
     */
    /**
     * Obtains data of the specified type.
     * @param { string } type - indicates type of the data to obtain, its size cannot exceed 1024 bytes.
     * @returns { Promise<ValueType> } Promise used to return the data obtained.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @since 24 dynamic
     * @since 23 static
     */
    getData(type: string): Promise<ValueType>;
  }

  /**
   * Classes for paste data.
   * @interface PasteData
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6
   */
  /**
   * Classes for paste data.
   * @interface PasteData
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Classes for paste data.
   * @interface PasteData
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  interface PasteData {
    /**
     * Adds a Record for HTML text to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_HTML in DataProperty.
     * @param { string } htmlText - To save the Html text content.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#addRecord
     */
    addHtmlRecord(htmlText: string): void;

    /**
     * Adds an want Record to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_WANT in DataProperty.
     * @param { Want } want - To save the want content.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#addRecord
     */
    addWantRecord(want: Want): void;

    /**
     * Adds a PasteRecord to a PasteData object and updates MIME types in DataProperty.
     * @param { PasteDataRecord } record - The content of a new record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * Adds a PasteRecord to a PasteData object and updates MIME types in DataProperty.
     * @param { PasteDataRecord } record - The content of a new record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Adds a PasteRecord to a PasteData object and updates MIME types in DataProperty.
     * @param { PasteDataRecord } record - The content of a new record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    addRecord(record: PasteDataRecord): void;

    /**
     * Adds a Record for plain text to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_PLAIN in DataProperty.
     * @param { string } text - To save the text of content.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#addRecord
     */
    addTextRecord(text: string): void;

    /**
     * Adds a URI Record to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_URI in DataProperty.
     * @param { string } uri - To save the uri of content.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#addRecord
     */
    addUriRecord(uri: string): void;

    /**
     * Adds a record with mimeType and value to a PasteData object.
     * @param { string } mimeType - indicates the MIME type of value, its size cannot be greater than 1024 bytes.
     * @param { ValueType } value - content to be saved.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900002 - The number of records exceeds the upper limit.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Adds a record with mimeType and value to a PasteData object.
     * @param { string } mimeType - indicates the MIME type of value, its size cannot be greater than 1024 bytes.
     * @param { ValueType } value - content to be saved.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 10
     */
    /**
     * Adds a record with mimeType and value to a PasteData object.
     * @param { string } mimeType - indicates the MIME type of value, its size cannot be greater than 1024 bytes.
     * @param { ValueType } value - content to be saved.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Adds a record with mimeType and value to a PasteData object.
     * @param { string } mimeType - indicates the MIME type of value, its size cannot be greater than 1024 bytes.
     * @param { ValueType } value - content to be saved.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    addRecord(mimeType: string, value: ValueType): void;

    /**
     * MIME types of all content on the pasteboard.
     * @returns { Array<string> } type of array
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * MIME types of all content on the pasteboard.
     * @returns { Array<string> } type of array
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * MIME types of all content on the pasteboard.
     * @returns { Array<string> } type of array
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getMimeTypes(): Array<string>;

    /**
     * HTML text of the primary record in a PasteData object.
     * @returns { string } type of htmltext
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * HTML text of the primary record in a PasteData object.
     * @returns { string } type of htmltext
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * HTML text of the primary record in a PasteData object.
     * @returns { string } type of htmltext
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryHtml(): string;

    /**
     * the want of the primary record in a PasteData object.
     * @returns { Want } type of want
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the want of the primary record in a PasteData object.
     * @returns { Want } type of want
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the want of the primary record in a PasteData object.
     * @returns { Want } type of want
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryWant(): Want;

    /**
     * the MIME type of the primary record in a PasteData object.
     * @returns { string } type of mimetype
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the MIME type of the primary record in a PasteData object.
     * @returns { string } type of mimetype
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the MIME type of the primary record in a PasteData object.
     * @returns { string } type of mimetype
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryMimeType(): string;

    /**
     * the plain text of the primary record in a PasteData object.
     * @returns { string } type of text
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6
     */
    /**
     * the plain text of the primary record in a PasteData object.
     * @returns { string } type of text
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the plain text of the primary record in a PasteData object.
     * @returns { string } type of text
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryText(): string;

    /**
     * the URI of the primary record in a PasteData object.
     * @returns { string } type of uri
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the URI of the primary record in a PasteData object.
     * @returns { string } type of uri
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the URI of the primary record in a PasteData object.
     * @returns { string } type of uri
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryUri(): string;

    /**
     * Gets the primary PixelMap record in a PasteData object.
     * @returns { image.PixelMap } pixelMap
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Gets the primary PixelMap record in a PasteData object.
     * @returns { image.PixelMap } pixelMap
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Gets the primary PixelMap record in a PasteData object.
     * @returns { image.PixelMap } pixelMap
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getPrimaryPixelMap(): image.PixelMap;

    /**
     * DataProperty of a PasteData object.
     * @returns { PasteDataProperty } PasteDataProperty type of PasteDataProperty
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * DataProperty of a PasteData object.
     * @returns { PasteDataProperty } PasteDataProperty type of PasteDataProperty
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * DataProperty of a PasteData object.
     * @returns { PasteDataProperty } PasteDataProperty type of PasteDataProperty
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getProperty(): PasteDataProperty;

    /**
     * Sets PasteDataProperty to a PasteData object, Modifying shareOption is supported only.
     * @param { PasteDataProperty } property - save property to PasteData object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Sets PasteDataProperty to a PasteData object, Modifying shareOption is supported only.
     * @param { PasteDataProperty } property - save property to PasteData object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Sets PasteDataProperty to a PasteData object, Modifying shareOption is supported only.
     * @param { PasteDataProperty } property - save property to PasteData object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setProperty(property: PasteDataProperty): void;

    /**
     * Gets record by index in PasteData.
     * @param { number } index - indicates the record index in PasteData.
     * @returns { PasteDataRecord } the record in PasteData with index.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#getRecord
     */
    getRecordAt(index: number): PasteDataRecord;

    /**
     * Gets record by index in PasteData.
     * @param { number } index - indicates the record index in PasteData.
     * @returns { PasteDataRecord } the record in PasteData with index.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Gets record by index in PasteData.
     * @param { int } index - indicates the record index in PasteData.
     * @returns { PasteDataRecord } the record in PasteData with index.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Gets record by index in PasteData.
     * @param { int } index - indicates the record index in PasteData.
     * @returns { PasteDataRecord } the record in PasteData with index.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getRecord(index: int): PasteDataRecord;

    /**
     * the number of records in a PasteData object.
     * @returns { number } The number of the clipboard contents
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the number of records in a PasteData object.
     * @returns { int } The number of the clipboard contents
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the number of records in a PasteData object.
     * @returns { int } The number of the clipboard contents
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getRecordCount(): int;

    /**
     * the user-defined tag of a PasteData object.
     * @returns { string } type of tag
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7
     */
    /**
     * the user-defined tag of a PasteData object.
     * @returns { string } type of tag
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * the user-defined tag of a PasteData object.
     * @returns { string } type of tag
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getTag(): string;

    /**
     * Checks whether there is a specified MIME type of data in DataProperty.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#hasType
     */
    hasMimeType(mimeType: string): boolean;

    /**
     * Checks whether there is a specified MIME type of data in DataProperty.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Checks whether there is a specified MIME type of data in DataProperty.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Checks whether there is a specified MIME type of data in DataProperty.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    hasType(mimeType: string): boolean;

    /**
     * Removes a Record based on a specified index.
     * @param { number } index - indicates the record index in PasteData.
     * @returns { boolean } The query returns True on success, or False on failure.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#removeRecord
     */
    removeRecordAt(index: number): boolean;

    /**
     * Removes a Record based on a specified index.
     * @param { number } index - indicates the record index in PasteData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Removes a Record based on a specified index.
     * @param { int } index - indicates the record index in PasteData.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Removes a Record based on a specified index.
     * @param { int } index - indicates the record index in PasteData.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    removeRecord(index: int): void;

    /**
     * Replaces a specified record with a new one.
     * @param { number } index - indicates the record index in PasteData.
     * @param { PasteDataRecord } record - the content of the replaced record.
     * @returns { boolean } The query returns True on success, or False on failure.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#replaceRecord
     */
    replaceRecordAt(index: number, record: PasteDataRecord): boolean;

    /**
     * Replaces a specified record with a new one.
     * @param { number } index - indicates the record index in PasteData.
     * @param { PasteDataRecord } record - the content of a new record.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Replaces a specified record with a new one.
     * @param { int } index - indicates the record index in PasteData.
     * @param { PasteDataRecord } record - the content of the replaced record.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Replaces a specified record with a new one.
     * @param { int } index - indicates the record index in PasteData.
     * @param { PasteDataRecord } record - the content of the replaced record.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    replaceRecord(index: int, record: PasteDataRecord): void;

    /**
     * Utilized to notify pasteboard service while reading PasteData, in this case, the service will help to preserve the context and resources
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteStart(): void;

    /**
     * Invoked to notify pasteboard service the utilization of PasteData has completed and occupied resources can be released for further usage
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteComplete(): void;
  }

  /**
   * Enumerates the types of file conflict options when getting data from the Pastedboard.
   * @enum { int }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * OVERWRITE overwrite when destUri has file with same name.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE,

    /**
     * SKIP skip when destUri has file with same name.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP
  }

  /**
   * Enumerates the types of progress indicator when getting data from the Pastedboard.
   * @enum { int }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * NONE getting data without system default progress indicator.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * DEFALUT getting data with system default progress indicator.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT
  }

  /**
   * Notifies progress when getting PasteData.
   * @interface ProgressInfo
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * Progress when getting PasteData without using default system progress.
     * @type { int }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;
  }

  /**
   * Indicates progress of getting PasteData.
   * @typedef { function } ProgressListener
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type ProgressListener = (progress: ProgressInfo) => void;

  /**
   * Indicates the signals to process default system progress task.
   * @class ProgressSignal
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  export class ProgressSignal {
    /**
     * Cancel the paste in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    cancel(): void;
  }

  /**
   * Represents the get data parameters when getting PasteData from Pasteboard.
   * @interface GetDataParams
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * DestUri indicates the uri of dest path where copy files will be copied to sandbox of Application.
     * @type { ?string }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * FileConflictOptions indicates fileConflictOptions when dest path has file with same name.
     * @type { ?FileConflictOptions }
     * @default FileConflictOptions.OVERWRITE
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * ProgressIndicator indicates whether to use default system progress indicator.
     * @type { ProgressIndicator }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * ProgressListener indicates progress listener when getting PasteDate without using default system progress.
     * @type { ?ProgressListener }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressListener?: ProgressListener;

    /**
     * Progress signal when getting PasteData with system progress indacator.
     * @type { ?ProgressSignal }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressSignal?: ProgressSignal;
  }

  /**
   * Classes for system pasteboard.
   * @interface SystemPasteboard
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6
   */
  /**
   * Classes for system pasteboard.
   * @interface SystemPasteboard
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Classes for system pasteboard.
   * @interface SystemPasteboard
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   * @since 23 static
   */
  interface SystemPasteboard {
    /**
     * Callback invoked when pasteboard content changes.
     * @param { 'update' } type - indicates pasteboard content changed.
     * @param { function } callback - the callback to add.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamic
     */
    /**
     * Callback invoked when pasteboard content changes.
     * @param { 'update' } type - indicates pasteboard content changed.
     * @param { function } callback - the callback to add.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'update', callback: () => void): void;

    /**
     * Add a callback invoked when remote pasteboard content changes.
     * @param { UpdateCallback } callback - the callback to add.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    onRemoteUpdate(callback: UpdateCallback): void;

    /**
     * Remove a callback invoked when pasteboard content changes.
     * @param { 'update' } type - indicates pasteboard content changed.
     * @param { function } [callback] - the callback to remove.
     *     If this parameter is not filled in, it indicates that all callbacks for this application will be cleared.
     *     Otherwise, it indicates that the specified callback will be cleared.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamic
     */
    /**
     * Remove a callback invoked when pasteboard content changes.
     * @param { 'update' } type - indicates pasteboard content changed.
     * @param { function } [callback] - the callback to remove.
     *     If this parameter is not filled in, it indicates that all callbacks for this application will be cleared.
     *     Otherwise, it indicates that the specified callback will be cleared.
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'update', callback?: () => void): void;

    /**
     * Remove a callback invoked when remote pasteboard content changes.
     * @param { UpdateCallback } [callback] - the callback to remove. If this parameter is not filled in, it indicates
     * that all callbacks for this application will be cleared. Otherwise, it indicates that the specified callback
     * will be cleared.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    offRemoteUpdate(callback?: UpdateCallback): void;

    /**
     * Add a callback invoked when pasteboard content changes.
     * @param { UpdateCallback } callback - the callback to add.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    onUpdate(callback: UpdateCallback): void;

    /**
     * Remove a callback invoked when pasteboard content changes.
     * @param { UpdateCallback } [callback] - the callback to remove. If this parameter is not filled in, it indicates
     *     that all callbacks for this application will be cleared. Otherwise, it indicates that the specified callback
     *     will be cleared.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    offUpdate(callback?: UpdateCallback): void;

    /**
     * Checks whether the data is remote.
     * @returns { boolean } True is remote data, else false.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isRemoteData(): boolean;

    /**
     * Obtains the application bundle name of the data source.
     * @returns { string }  Application bundle name of the data source.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDataSource(): string;

    /**
     * Checks whether there is a specified MIME type of data in Data.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Checks whether there is a specified MIME type of data in Data.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    hasDataType(mimeType: string): boolean;

    /**
     * Clears the pasteboard.
     * @param { AsyncCallback<void> } callback - the callback of clearData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#clearData
     */
    clear(callback: AsyncCallback<void>): void;

    /**
     * Clears the pasteboard.
     * @returns { Promise<void> } the promise returned by the clearData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#clearData
     */
    clear(): Promise<void>;

    /**
     * Clears the pasteboard.
     * @param { AsyncCallback<void> } callback - the callback of clearData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Clears the pasteboard.
     * @param { AsyncCallback<void> } callback - the callback of clearData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Clears the pasteboard.
     * @param { AsyncCallback<void> } callback - the callback of clearData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    clearData(callback: AsyncCallback<void>): void;

    /**
     * Clears the pasteboard.
     * @returns { Promise<void> } the promise returned by the clearData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Clears the pasteboard.
     * @returns { Promise<void> } the promise returned by the clearData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Clears the pasteboard.
     * @returns { Promise<void> } the promise returned by the clearData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    clearData(): Promise<void>;

    /**
     * Clears the pasteboard.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Clears the pasteboard.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    clearDataSync(): void;

    /**
     * Gets pastedata from the system pasteboard.
     * @param { AsyncCallback<PasteData> } callback - the callback of getData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#getData
     */
    getPasteData(callback: AsyncCallback<PasteData>): void;

    /**
     * Gets pastedata from the system pasteboard.
     * @returns { Promise<PasteData> } the promise returned by the getData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#getData
     */
    getPasteData(): Promise<PasteData>;

    /**
     * Gets pastedata from the system pasteboard.
     * @param { AsyncCallback<PasteData> } callback - the callback of getData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @param { AsyncCallback<PasteData> } callback - the callback of getData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @param { AsyncCallback<PasteData> } callback - the callback of getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @param { AsyncCallback<PasteData> } callback - the callback of getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getData(callback: AsyncCallback<PasteData>): void;

    /**
     * Gets pastedata from the system pasteboard.
     * @returns { Promise<PasteData> } the promise returned by the getData.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @returns { Promise<PasteData> } the promise returned by the getData.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<PasteData> } the promise returned by the getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets pastedata from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<PasteData> } the promise returned by the getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getData(): Promise<PasteData>;

    /**
     * Gets pasteData from the system pasteboard.
     * @returns { PasteData }  a new PasteData.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11
     */
    /**
     * Gets pasteData from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { PasteData }  a new PasteData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets pasteData from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { PasteData }  a new PasteData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getDataSync(): PasteData;

    /**
     * Checks whether there is content in the pasteboard.
     * @param { AsyncCallback<boolean> } callback - the callback of setPasteData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#hasData
     */
    hasPasteData(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether there is content in the pasteboard.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#hasData
     */
    hasPasteData(): Promise<boolean>;

    /**
     * Checks whether the paste data is in a remote device.
     * @returns { boolean } True is in a remote device, else false.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 24 dynamic&static
     */
    hasRemoteData(): boolean;

    /**
     * Checks whether there is content in the system pasteboard.
     * @param { AsyncCallback<boolean> } callback - the callback of hasData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Checks whether there is content in the system pasteboard.
     * @param { AsyncCallback<boolean> } callback - the callback of hasData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Checks whether there is content in the system pasteboard.
     * @param { AsyncCallback<boolean> } callback - the callback of hasData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    hasData(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether there is content in the system pasteboard.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Checks whether there is content in the system pasteboard.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Checks whether there is content in the system pasteboard.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    hasData(): Promise<boolean>;

    /**
     * Checks whether there is content in the system pasteboard.
     * @returns { boolean } True exists, false does not exist.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Checks whether there is content in the system pasteboard.
     * @returns { boolean } True exists, false does not exist.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    hasDataSync(): boolean;

    /**
     * Writes PasteData to the pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard
     * @param { AsyncCallback<void> } callback - the callback of setPasteData.
     * @throws { BusinessError } 401 - Possible causes: 1.  Mandatory parameters are left unspecified;
     *    2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#setData
     */
    setPasteData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * Writes PasteData to the pasteboard.
     * @param { PasteData } data - Containing the contents of the clipboard content object.
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.pasteboard.pasteboard#setData
     */
    setPasteData(data: PasteData): Promise<void>;

    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard
     * @param { AsyncCallback<void> } callback - the callback of setData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard
     * @param { AsyncCallback<void> } callback - the callback of setData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard
     * @param { AsyncCallback<void> } callback - the callback of setData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 9
     */
    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setData(data: PasteData): Promise<void>;

    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setDataSync(data: PasteData): void;

    /**
     * Gets unified data from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<unifiedDataChannel.UnifiedData> } the promise returned by the getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets unified data from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<unifiedDataChannel.UnifiedData> } the promise returned by the getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>;

    /**
     * Gets unified data from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { unifiedDataChannel.UnifiedData }  a new UnifiedData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets unified data from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { unifiedDataChannel.UnifiedData }  a new UnifiedData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getUnifiedDataSync(): unifiedDataChannel.UnifiedData;

    /**
     * Writes unified data to the system pasteboard.
     * @param { unifiedDataChannel.UnifiedData } data - Unified data will be written to the pasteboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Writes unified data to the system pasteboard.
     * @param { unifiedDataChannel.UnifiedData } data - Unified data will be written to the pasteboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setUnifiedData(data: unifiedDataChannel.UnifiedData): Promise<void>;

    /**
     * Writes unified data to the system pasteboard.
     * @param { unifiedDataChannel.UnifiedData } data - Unified data will be written to the pasteboard.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Writes unified data to the system pasteboard.
     * @param { unifiedDataChannel.UnifiedData } data - Unified data will be written to the pasteboard.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    setUnifiedDataSync(data: unifiedDataChannel.UnifiedData): void;

    /**
     * Sets a unified ShareOptions for your application, so that the PasteData copied from your application is applicable to this ShareOptions.
     * 
     * @param { ShareOption } shareOptions - Scope that PasteData can be pasted.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *                                                                   2. Incorrect parameter types;
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 12900006 - Settings already exist.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi
     * @since 12
     */
    /**
     * Sets a unified ShareOptions for your application, so that the PasteData copied from your application is applicable to this ShareOptions.
     * 
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION
     * @param { ShareOption } shareOptions - Scope that PasteData can be pasted, The parameter can only be set InApp.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *                                                                   2. Incorrect parameter types;
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 12900006 - Settings already exist.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 14 dynamic
     * @since 23 static
     */
    setAppShareOptions(shareOptions: ShareOption): void;

    /**
     * Removes the unified ShareOptions of your application.
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi
     * @since 12
     */
    /**
     * Removes the unified ShareOptions of your application.
     *
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *    permission required to call the API.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 14 dynamic
     * @since 23 static
     */
    removeAppShareOptions(): void;

    /**
     * Detects the patterns in the pasteboard.
     * 
     * @param { Array<Pattern> } patterns - Patterns to detect.
     * @returns { Promise<Array<Pattern>> } Promise used to return the patterns detected.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *                                                                   2. Incorrect parameter types;
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    detectPatterns(patterns: Array<Pattern>): Promise<Array<Pattern>>;

    /**
     * Get the MIME types in the pasteboard.
     *
     * @returns { Promise<Array<string>> } Promise used to return the MIME types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Get the MIME types in the pasteboard.
     *
     * @returns { Promise<Array<string>> } Promise used to return the MIME types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getMimeTypes(): Promise<Array<string>>;

    /**
     * Gets the number of Pasteboard data changes.
     *
     * @returns { long } The number of Pasteboard data changes.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 18 dynamic
     */
    /**
     * Gets the number of Pasteboard data changes.
     *
     * @returns { long } The number of Pasteboard data changes.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     * @since 23 static
     */
    getChangeCount(): long;

    /**
     * Gets pastedata from the system pasteboard with system progress.
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @param { GetDataParams } params - Indicates the {@link GetDataParams}.
     * @returns { Promise<PasteData> } The promise returned by the getData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12900003 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 12900007 - Invalid destUri or file system error.
     * @throws { BusinessError } 12900008 - Failed to start progress.
     * @throws { BusinessError } 12900009 - Progress exits abnormally.
     * @throws { BusinessError } 12900010 - System error occurred during paste execution.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getDataWithProgress(params: GetDataParams): Promise<PasteData>;
  }
}

export default pasteboard;
