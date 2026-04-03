/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */

import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import lang from '../arkts/@arkts.lang';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * Helper functions to access image and video assets
 *
 * @namespace sendablePhotoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendablePhotoAccessHelper {
  /**
   * Returns an instance of PhotoAccessHelper
   *
   * @param { Context } context - Hap context information
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * Returns an instance of PhotoAccessHelper
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Hap context information
   * @param { number } userId - Target userId
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19 dynamiconly
   */
  function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper;

  /**
   * Enumerates media file types.
   *
   * @enum { number } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const enum PhotoType {
    /**
     * Image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    IMAGE = 1,
    /**
     * Video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    VIDEO = 2
  }

  /**
   * Enumerates the PhotoAsset types.
   *
   * @enum { number } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamiconly
   */
  enum PhotoSubtype {
    /**
     * Photo, which is the default type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    DEFAULT = 0,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    SCREENSHOT = 1,
    /**
     * Moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    MOVING_PHOTO = 3,
    /**
     * Burst photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    BURST = 4,
  }

  /**
   * Enumerates the dynamic range types of media assets.
   *
   * @enum { number } DynamicRangeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 14 dynamiconly
   */
  enum DynamicRangeType {
    /**
     * Standard dynamic range (SDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    SDR = 0,
    /**
     * High dynamic range (HDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    HDR = 1
  }

  /**
   * Ability to access thumbnail
   * 
   * @enum { number } ThumbnailVisibility
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    VISIBLE = 1
  }

  /**
   * Photo asset position
   *
   * @enum { number } Photo asset position, such as local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOCAL = 1 << 0,
    /**
     * Asset exists only in cloud
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CLOUD = 1 << 1
  }

   /**
   * Enumeration of moving photo effect mode.
   *
   * @enum { number } MovingPhotoEffectMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum MovingPhotoEffectMode {
    /**
     * Default
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    DEFAULT = 0,

    /**
     * Bounce play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    BOUNCE_PLAY = 1,

    /**
     * Loop play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LONG_EXPOSURE = 3,

    /**
     * Multi exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinema graph
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    IMAGE_ONLY = 10
  }

  /**
   * Defines the photo asset
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAsset extends lang.ISendable {
    /**
     * uri of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly uri: string;
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly photoType: PhotoType;
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly displayName: string;
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Name of the member parameter to obtain.
     * Except 'uri', 'media_type', 'subtype', and 'display_name', you must pass in PhotoKeys in fetchColumns.
     * For example, to obtain the title, pass in fetchColumns: ['title'].
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    get(member: string): photoAccessHelper.MemberType;
    /**
     * Sets a PhotoAsset member parameter.
     *
     * @param { string } member - Name of the parameter to set, for example, PhotoKeys.TITLE.
     * The value contains 1 to 255 characters.
     * @param { string } value - Value to set. Only the value of PhotoKeys. TITLE can be changed. 
     * The title must meet the following requirements:
     * - It does not contain a file name extension.
     * - The file name, which is in the format of title+file name extension, does not exceed 255 characters.
     * - The title does not contain any of the following characters:\ / : * ? " ' ` < > | { } [ ]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Get analysis data of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Analysis type
     * @returns { Promise<string> } Returns analysis info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>;
    /**
     * Opens the source file to obtain the file descriptor (FD). This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> }  Returns opened source asset fd.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    requestSource(): Promise<number>;
    /**
     * Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.
     *
     * @returns { photoAccessHelper.PhotoAsset } Returns the instance if the operation is successful.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAsset(): photoAccessHelper.PhotoAsset;
  }

  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface FetchResult<T> extends lang.ISendable {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { number } Total number of objects.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getCount(): number;
    /**
     * Checks whether the cursor is in the last row of the result set.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    isAfterLast(): boolean;
    /**
     * Obtains the first asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next asset in the result set. This API uses a promise to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of
     * <br>the result set.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the asset with the given index in the result set. This API uses a promise to return the result.
     *
     * @param { number } index - Index of the asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getObjectByPosition(index: number): Promise<T>;
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * Closes this FetchFileResult instance to invalidate it.
     * After this instance is closed, the APIs in this instance cannot be invoked.
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    close(): void;
  }

  /**
   * Enumerates the album types.
   *
   * @enum { number } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER = 0,
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    SYSTEM = 1024,
    /**
     * Smart analysis album. System API: This is a system API.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SMART = 4096
  }

  /**
   * Album subtype
   *
   * @enum { number } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumSubtype {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER_GENERIC = 1,
    /**
     * Favorites.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CAMERA,
    /**
     * Image album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    IMAGE = 1031,
    /**
     * Source album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SOURCE_GENERIC = 2049,
    /**
     * Classify album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CLASSIFY = 4097,
    /**
     * Location album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * City album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_CITY,
    /**
     * ShootingMode album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SHOOTING_MODE,
    /**
     * Portrait album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    PORTRAIT,
    /**
     * Group photo album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GROUP_PHOTO,
    /**
     * Highlight album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT = 4104,
    /**
     * Highlight suggestions album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT_SUGGESTIONS,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    ANY = 2147483647
  }

  /**
   * Defines the abstract interface of albums.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface AbsAlbum extends lang.ISendable {
    /**
     * Album type
     *
     * @type { AlbumType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @type { AlbumSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumUri: string;
    /**
     * Number of assets in the album
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly count: number;
    /**
     * Cover uri for the album
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly coverUri: string;
    /**
     * Obtains media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the media assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Fetch shared photo assets in an album.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * Defines the album.
   *
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface Album extends AbsAlbum {
    /**
     * Number of image assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly imageCount?: number;
    /**
     * Number of video assets in the album
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly videoCount?: number;
    /**
     * Commits the modification on the album attributes to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * Converts this Sendable album to a non-Sendable album.
     *
     * @returns { photoAccessHelper.Album } Returns the instance if the operation is successful.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAlbum(): photoAccessHelper.Album;
    /**
     * Obtains the face identifier on the cover of a portrait album or group photo album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns tag_id if portrait album, Returns group_tag if group photo album,
     * <br>Returns empty if not found.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamiconly
     */
    getFaceId(): Promise<string>;
  }

  /**
   * Defines the shared photo asset
   *
   * @interface SharedPhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  interface SharedPhotoAsset extends lang.ISendable {
    /**
     * File id of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    fileId: number;
    /**
     * URI of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    uri: string;
    /**
     * Path data of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    data: string;
    /**
     * Media type of photo asset
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    mediaType: PhotoType;
    /**
     * Display name of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    displayName: string;
    /**
     * Size of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    size: number;
    /**
     * Added date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAdded: number;
    /**
     * Modify date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModified: number;
    /**
     * Duration of video photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    duration: number;
    /**
     * Width of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    width: number;
    /**
     * Height of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    height: number;
    /**
     * DateTaken of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTaken: number;
    /**
     * Orientation of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    orientation: number;
    /**
     * Favorite state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    isFavorite: boolean;
    /**
     * Title of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    title: string;
    /**
     * Position of photo asset
     *
     * @type { PositionType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    position: PositionType;
    /**
     * Trashed date of photo asset
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashed: number;
    /**
     * Hidden state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    hidden: boolean;
    /**
     * User comment info of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    userComment: string;
    /**
     * Camera shot key of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    cameraShotKey: string;
    /**
     * The year of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateYear: string;
    /**
     * The month of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateMonth: string;
    /**
     * The day of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateDay: string;
    /**
     * Pending state of the asset, true means asset is pending
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    pending: boolean;
    /**
     * Added date of photo asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAddedMs: number;
    /**
     * Modified time of the asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModifiedMs: number;
    /**
     * Trashed time of the asset in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashedMs: number;
    /**
     * Subtype of photo asset
     *
     * @type { PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    subtype: PhotoSubtype;
    /**
     * Effect mode of moving photo
     * 
     * @type { MovingPhotoEffectMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the asset
     *
     * @type { DynamicRangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Ready state of thumbnail
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailReady: boolean;
    /**
     * Width and height information of lcd picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    lcdSize: string;
    /**
     * Width and height information of thumbnail picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thmSize: string;
    /**
     * modified time of thumbnail status
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailModifiedMs: number;
    /**
     * visibility of thumbnails
     *
     * @type { ThumbnailVisibility }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAccessHelper extends lang.ISendable {
    /**
     * Obtains media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the media assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Obtains burst assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - Burst asset options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Creates an asset with the specified file name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the asset to create.
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * Create a photo asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - Asset name
     * @param { PhotoCreateOptions } options - Create operation
     * @throws { BusinessError } 201 - Permission denied
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     * If the caller does not have the ohos.permission.WRITE_IMAGEVIDEO permission,
     * you can create a media asset by using a security component.
     * For details, see Creating a Media Asset Using a Security Component.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'. The value contains 1 to 255 characters.
     * @param { CreateOptions } [options] - Options for creating the media asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>;
    /**
     * Obtains albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the albums to obtain.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * If this parameter is not specified, the albums are obtained based on the album type by default.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } [options] - Options for retrieving the albums.
     * If this parameter is not specified, the albums are retrieved based on the display mode.
     * @returns { Promise<FetchResult<Album>> } Returns fetchResult of albums containing hidden assets.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>;
    /**
     * Releases this PhotoAccessHelper instance. This API uses a promise to return the result.
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
    /**
     * Fetch shared photo assets.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets 
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
    /**
     * Get PhotoAsset objects from ValuesBucket record info.
     *
     * @param { photoAccessHelper.ValuesBucket[] } assetsData - Array of asset records. Each element in the array
     *     contains the asset's column names and their values. The array size cannot exceed 500. Each element in the
     *     array must contain the following asset column information: file_id, data, display_name, media_type, and
     *     subtype.
     * @returns { Promise<PhotoAsset[]> } Returns an array of PhotoAsset objects (may be empty).
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid value type in ValuesBucket;
     *     <br>2. Missing required column in ValuesBucket;
     *     <br>3. Array size exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>;
  }
}

export default sendablePhotoAccessHelper;