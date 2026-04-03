/*
 * Copyright (C) 2023-2025 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
import type { CustomColors } from './@ohos.arkui.theme';

/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 10
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 11
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace photoAccessHelper {
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @since 10
   */
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
  * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
  *
  * @param { Context } context - Context of the ability instance.
  * @returns { PhotoAccessHelper | null } Instance of PhotoAccessHelper. if the operation fails, returns null.
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types; 3. Parameter verification failed.
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 23 static
  */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper | null;

  /**
   * Returns an instance of PhotoAccessHelper
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Hap context information
   * @param { int } userId - Target userId
   * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19 dynamic
   */
  function getPhotoAccessHelper(context: Context, userId: int): PhotoAccessHelper;

  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Context of the ability instance.
   * @param { int } userId - Target userId
   * @returns { PhotoAccessHelper | null } Instance of PhotoAccessHelper. if the operation fails, returns null.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     1. userId is invalid.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getPhotoAccessHelper(context: Context, userId: int): PhotoAccessHelper | null;

  /**
   * Enumerates the types of av file format.
   *
   * @enum { string } SupportedImageFormat
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum SupportedImageFormat {
    /**
     * jpg format
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    AVFILE_FORMAT_JPG = 'jpg',
  }

  /**
  * Context information of the exit status of PhotoPicker,
  * which can be used for on-site recovery of PhotoPicker next time.
  *
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @atomicservice
  * @since 21 dynamic
  * @since 24 static
  */
  class ContextRecoveryInfo {
    /**
     * The album URI from which the user exited during the last selection.
     * The default value is empty string.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    albumUri: string;

    /**
     * Timestamp of the first fully visible photo in the last selection interface.
     * The default value is 0.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    time: number;

    /**
     * Filename of the first fully visible photo in the last selection interface.
     * The default value is empty string.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    displayName: string;

    /**
     * Enum value of the recommendation content set by the user during the last selection (see `RecommendationType`).
     * The default value is 0.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    recommendationType: int;

    /**
     * Enum value of the recommendation content selected by  the user during the last selection (see `RecommendationType`).
     * The default value is 0.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    selectedRecommendationType: int;

    /**
     * Context data version number for validating compatibility of context recovery.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    version: int;

    /**
     * Enum value of the grid level by the user during the last selection.
     * This information is only included when gridPinchModeType is configured as FULL_FUNCTION_GRID.
     *
     * @type { ?GridLevel }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    gridLevel?: GridLevel;

    /**
     * the sort rule by the user during the last selection.
     * The default value is empty string.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    sortRule?: string;

    /**
     * size of the first fully visible photo in the last selection interface.
     * the default value is 0.
     * 
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fileSize?: int;
  }

  /**
   * Enumerates media file types.
   *
   * @enum { int } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates media file types.
   *
   * @enum { int } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enumerates media file types.
   *
   * @enum { int } PhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhotoType {
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Image asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    IMAGE = 1,
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Video asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO = 2
  }

  /**
   * Enumerates the PhotoAsset types.
   *
   * @enum { int } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  /**
   * Enumerates the PhotoAsset types.
   *
   * @enum { int } PhotoSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhotoSubtype {
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT = 1,
    /**
     * Moving Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO = 3,
    /**
     * Burst Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BURST = 4,
    /**
     * Slow Motion Video Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SLOW_MOTION_VIDEO = 6,
    /**
     * Spatial 3DGS Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SPATIAL_3DGS = 7,
  }

  /**
   * Enumerates the formats for displaying media assets.
   *
   * @enum { int } DynamicRangeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum DynamicRangeType {
    /**
     * Standard dynamic range (SDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 0,
    /**
     * High dynamic range (HDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR = 1
  }

  /**
   * Ability to access thumbnail
   *
   * @enum { int } ThumbnailVisibility
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    VISIBLE = 1
  }

  /**
   * Enumerates the file locations.
   *
   * @enum { int } Photo asset position, such as local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10
   */
  /**
   * Enumerates the file locations.
   *
   * @enum { int } Photo asset position, such as local device or cloud
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 16 dynamic
   * @since 23 static
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16 dynamic
     * @since 23 static
     */
    LOCAL = 1,
    /**
     * Stored only on a local device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Stored only on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16 dynamic
     * @since 23 static
     */
    CLOUD = 2,
    /**
     * Stored both on a local device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16 dynamic
     * @since 23 static
     */
    LOCAL_AND_CLOUD = 3
  }

  /**
   * Analysis type
   *
   * @enum { int } AnalysisType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AnalysisType {
    /**
     * Analysis of aesthetics score
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_AESTHETICS_SCORE = 0,
    /**
     * Analysis of label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_LABEL = 1,
    /**
     * Analysis of ocr
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OCR = 2,
    /**
     * Analysis of face
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_FACE = 3,
    /**
     * Analysis of object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OBJECT = 4,
    /**
     * Analysis of recommendation
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_RECOMMENDATION = 5,
    /**
     * Analysis of segmentation
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SEGMENTATION = 6,
    /**
     * Analysis of composition
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_COMPOSITION = 7,
    /**
     * Analysis of saliency
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SALIENCY = 8,
    /**
     * Analysis of photo detail address info
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_DETAIL_ADDRESS = 9,
    /**
     * Analysis of human face tag
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HUMAN_FACE_TAG = 10,
    /**
     * Analysis of head position
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HEAD_POSITION = 11,
    /**
     * Analysis of bone pose
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_BONE_POSE = 12,
    /**
     * Analysis of video label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_VIDEO_LABEL = 13,
    /**
     * Analysis of highlight
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HIGHLIGHT = 14,
    /**
     * Analysis of multi crop
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_MULTI_CROP = 15,
    /**
     * Analysis of search index
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    ANALYSIS_SEARCH_INDEX = 16
  }

  /**
   * Enumerates the types of recommended images.
   *
   * @enum { int } RecommendationType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 24 static
   */
  enum RecommendationType {
    /**
     * QR_OR_BAR_CODE indicates that QR code or barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    QR_OR_BAR_CODE = 1,

    /**
     * QR_CODE indicates that QR code photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    QR_CODE = 2,

    /**
     * BAR_CODE indicates that barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    BAR_CODE = 3,

    /**
     * ID_CARD indicates that QR code or barcode photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    ID_CARD = 4,

    /**
     * PROFILE_PICTURE indicates that profile picture photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    PROFILE_PICTURE = 5,

    /**
     * PASSPORT indicates that passport photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    PASSPORT = 6,

    /**
     * BANK_CARD indicates that bank card photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    BANK_CARD = 7,

    /**
     * DRIVER_LICENSE indicates that driver license photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    DRIVER_LICENSE = 8,

    /**
     * DRIVING_LICENSE indicates that driving license photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    DRIVING_LICENSE = 9,

    /**
     * FEATURED_SINGLE_PORTRAIT indicates that featured single portrait photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    FEATURED_SINGLE_PORTRAIT = 10,

    /**
     * COLOR_STYLE_PHOTO indicates that color style photo can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 24 static
     */
    COLOR_STYLE_PHOTO = 12,

    /**
     * CAT indicates that cat photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    CAT = 13,

    /**
     * DOG indicates that dog photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    DOG = 14,

    /**
     * ARCHITECTURE indicates that architecture photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    ARCHITECTURE = 15,

    /**
     * LANDSCAPE indicates that landscape photos can be recommended
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    LANDSCAPE = 16,

    /**
     * GAUSSIAN_SPLAT_3D indicates that images generated with 3D Gaussian splatting can be recommended
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    GAUSSIAN_SPLAT_3D = 17
  }

  /**
   * Enumerates the asset delivery modes.
   *
   * @enum { int } DeliveryMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DeliveryMode {
    /**
     * Fast mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAST_MODE = 0,

    /**
     * High-quality mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    HIGH_QUALITY_MODE = 1,

    /**
     * Balance mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    BALANCE_MODE = 2
  }

  /**
   * Enumerates the video transcoding mode.
   *
   * @enum { int } CompatibleMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum CompatibleMode {
    /**
     * Maintains the original video format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    ORIGINAL_FORMAT_MODE = 0,

    /**
     * Converts the HDR content to SDR format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    COMPATIBLE_FORMAT_MODE = 1
  }

  /**
   * Data handler used to notify the progress of required media asset data
   *
   * @interface MediaAssetProgressHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface MediaAssetProgressHandler {
    /**
     * Indicates the progress of required media asset data
     *
     * @param { int } progress - Progress in percentage. Value range: 0 to 100
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    onProgress(progress: int): void;
  }

  /**
   * Enumerates the types of the file to read.
   *
   * @enum { int } SourceMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum SourceMode {
    /**
     * Original file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ORIGINAL_MODE = 0,

    /**
     * Edited file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    EDITED_MODE = 1
  }

  /**
   * Enumeration type of permissions for accessing asset uri.
   *
   * @enum { int } PhotoPermissionType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhotoPermissionType {
    /**
     * Temporary read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TEMPORARY_READ_IMAGEVIDEO = 0,

    /**
     * Persistent read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PERSISTENT_READ_IMAGEVIDEO = 1
  }

  /**
   * Enumerates the types of media resource information to be hidden from an application.
   *
   * @enum { int } HideSensitiveType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HideSensitiveType {
    /**
     * Geographical location and shooting parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_AND_SHOOTING_PARAM = 0,

    /**
     * Geographical location information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_ONLY = 1,

    /**
     * Shooting parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_SHOOTING_PARAM_ONLY = 2,

    /**
     * Do not hide any information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NO_HIDE_SENSITIVE_TYPE = 3,

    /**
     * Refer MEDIA_LOCATION permission to hide location and shooting parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 4,
  }

  /**
   * Enumerates the authorization modes.
   *
   * @enum { int } AuthorizationMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthorizationMode {
    /**
     * Temporary authorization.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHORT_TIME_AUTHORIZATION = 0
  }

  /**
   * Enumerates the watermark editable flags.
   *
   * @enum { int } WatermarkType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum WatermarkType {
    /**
     * Watermarks are not editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Brand and common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND_COMMON = 1,

    /**
     * Common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    COMMON = 2,

    /**
     * Brand watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND = 3,
  }

  /**
   * Enum: complete button text
   *
   * @enum { int } CompleteButtonText
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 24 static
   */
  enum CompleteButtonText {
    /**
     * Complete button text: done
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 24 static
     */
    TEXT_DONE = 0,
    /**
     * Complete button text: send
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 24 static
     */
    TEXT_SEND = 1,

    /**
     * Complete button text: add
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 24 static
     */
    TEXT_ADD = 2,
  }

  /**
   * Enumerates the composite photo display mode.
   *
   * @enum { int } CompositeDisplayMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  enum CompositeDisplayMode {
    /**
     * The composite photo display mode is default.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * The composite photo display mode is cloud enhancement.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    CLOUD_ENHANCEMENT = 1,
  }

  /**
   * Options to request media asset
   *
   * @interface RequestOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestOptions {
    /**
     * Indicates the delivery mode
     *
     * @type { DeliveryMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    deliveryMode: DeliveryMode;

    /**
     * Indicates the source mode
     *
     * @type { ?SourceMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    sourceMode?: SourceMode;

    /**
     * Indicates the compatible mode
     *
     * @type { ?CompatibleMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    compatibleMode?: CompatibleMode;

    /**
     * data handler used to notify the progress of required media asset data
     *
     * @type { ?MediaAssetProgressHandler }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    mediaAssetProgressHandler?: MediaAssetProgressHandler;
  }

  /**
   * Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.
   *
   * @interface MediaAssetDataHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaAssetDataHandler<T> {
    /**
     * Indicates required media asset data is prepared
     *
     * @param { T } data - the returned data of media asset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Indicates required media asset data is prepared
     *
     * @param { T } data - the returned data of media asset
     * @param { Map<string, string> } [map] - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     */
    onDataPrepared(data: T, map?: Map<string, string>): void;

    /**
     * Indicates required media asset data is prepared
     *
     * @param { T | undefined } data - the returned data of media asset
     *     if data of media asset is invalid, return undefined.
     * @param { Map<string, string> } [map] - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onDataPrepared(data: T | undefined, map?: Map<string, string>): void;
  }

  /**
   * Data handler when quick request image is finished
   *
   * @typedef QuickImageDataHandler
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface QuickImageDataHandler<T> {
    /**
     * Indicates required media asset data quickly is prepared
     *
     * @param { T } data - the returned data of picture
     * @param { image.ImageSource } imageSource - the returned data of imageSource
     * @param { Map<string, string> } map - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     */
    onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void;

   /**
    * Indicates required media asset data quickly is prepared
    *
    * @param { T | undefined } data - the returned data of picture
    *     if data of media asset is invalid,return undefined.
    * @param { image.ImageSource | null } imageSource - the returned data of imageSource
    *     if data of imageSource is invalid, return null.
    * @param { Map<string, string> } map - additional information for the data
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 static
    */
    onDataPrepared(data: T | undefined, imageSource: image.ImageSource | null, map: Map<string, string>): void;
  }


  /**
   * Photo proxy object, which is used by the camera application to write image data.
   *
   * @interface PhotoProxy
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoProxy {}

  /**
   * A media asset manager class, used for manipulating the read and write operations of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11
   */
  /**
   * A media asset manager class, used for manipulating the read and write operations of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class MediaAssetManager {
    /**
     * Request image
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<image.ImageSource> } dataHandler - Media asset handler,
     * <br>which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>;

    /**
     * Requests an image quickly.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { QuickImageDataHandler<image.Picture> } dataHandler - Media asset handler,
     * <br>which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     */
    static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>;

    /**
     * Requests image data.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<ArrayBuffer> } dataHandler - Media asset handler,
     * <br>which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>;

    /**
     * Requests a moving photo object, which can be used to request the asset data of the moving photo.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler,
     * <br>which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Requests a moving photo object, which can be used to request the asset data of the moving photo.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler,
     * <br>which invokes a callback to return the image when the requested image is ready.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>;

    /**
     * Cancels a request for the asset, the callback of which has not been triggered yet.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string } requestId - ID of the request to cancel. It is a valid request ID returned by requestImage.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    static cancelRequest(context: Context, requestId: string): Promise<void>;

    /**
     * Request video file
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the video asset.
     * @param { string } fileUri - the destination file uri to save the video data
     * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler.
     * <br>When the requested video is written to the specified directory, a callback is triggered.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Request video file
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the video asset.
     * @param { string } fileUri - the destination file uri to save the video data
     * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler.
     * <br>When the requested video is written to the specified directory, a callback is triggered.
     * @returns { Promise<string> } Returns request id
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>;

    /**
     * Load moving photo
     *
     * @param { Context } context - AbilityContext or UIExtensionContext instance.
     * @param { string } imageFileUri - image file uri of the moving photo to be loaded
     * @param { string } videoFileUri - video file uri of the moving photo to be loaded
     * @returns { Promise<MovingPhoto> } Returns moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Load moving photo
     *
     * @param { Context } context - AbilityContext or UIExtensionContext instance.
     * @param { string } imageFileUri - image file uri of the moving photo to be loaded
     * @param { string } videoFileUri - video file uri of the moving photo to be loaded
     * @returns { Promise<MovingPhoto> } Returns moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>;
  }

  /**
   * Indicates the type of photo asset member.
   *
   * @typedef { int | long | double | string | boolean } MemberType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Indicates the type of photo asset member.
   *
   * @typedef { int | long | double | string | boolean } MemberType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  type MemberType = int | long | double | string | boolean;

  /**
   * Indicates the type of a batch photo asset member.
   *
   * @typedef { Record<string, MemberType>[] } PhotoAssetParams
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 21 dynamic
   * @since 23 static
   */
  type PhotoAssetParams = Record<string, MemberType>[];

  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides APIs for encapsulating file asset attributes.
   *
   * @interface PhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PhotoAsset {
    /**
     * uri of the asset.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * uri of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly uri: string;
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Photo type, image or video
     *
     * @type { PhotoType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly photoType: PhotoType;
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Display name (with a file name extension) of the asset.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayName: string;
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Returns the value of the specified member.
     *
     * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
     * @returns { MemberType } Returns the value of the specified photo asset member
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    get(member: string): MemberType;
    /**
     * Sets a PhotoAsset member parameter.
     *
     * @param { string } member - Photo asset member
     * @param { string } value - The new value of the member.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    commitModify(): Promise<void>;
    /**
     * Open the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @param { AsyncCallback<number> } callback - Callback return the fd of the asset.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open the asset
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for open, for example: rw, r, w.
     * @returns { Promise<number> } Returns the fd
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    open(mode: string): Promise<number>;
    /**
     * Opens this file in read-only mode. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor (FD) of the file opened.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    getReadOnlyFd(callback: AsyncCallback<number>): void;
    /**
     * Opens this file in read-only mode. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Returns the read only fd
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#open
     */
    getReadOnlyFd(): Promise<number>;
    /**
     * Closes a file. This API uses an asynchronous callback to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Closes a file. This API uses a promise to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.file.fs/fileIo#close
     */
    close(fd: number): Promise<void>;
    /**
     * Obtains the thumbnail of this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     */
    /**
     * Obtains the thumbnail of this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     */
    /**
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     */
    /**
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Obtains the ArrayBuffer of a file thumbnail by specifying its type. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<ArrayBuffer> } Returns the thumbnail's ArrayBuffer.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getThumbnailData(type: ThumbnailType): Promise<ArrayBuffer>;
    /**
     * Favorites or unfavorites this file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Operation to perform. The value true means to favorite the file asset, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Favorites or unfavorites this file asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Operation to perform. The value true means to favorite the file asset, and false means the opposite.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean): Promise<void>;
    /**
     * Sets this file to hidden state. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. The value true means to hide the file; the value false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets this file asset to hidden state. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. The value true means to hide the file; the value false means the opposite.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean): Promise<void>;
    /**
     * Sets user comment information of an image or video. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * Sets user comment information of an image or video. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string): Promise<void>;
    /**
     * Obtains the exchangeable image file format (EXIF) data from a JPG image. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the EXIF data, in JSON strings.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getExif(callback: AsyncCallback<string>): void;
    /**
     * Obtains analysis data. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Smart analysis type.
     * @returns { Promise<string> } Returns analysis info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAnalysisData(analysisType: AnalysisType): Promise<string>;
    /**
     * Obtains the exchangeable image file format (EXIF) data from a JPG image. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns exif info into a json string
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getExif(): Promise<string>;
    /**
     * Sets the pending state for this image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state.
     * <br>The value true means to set the file to pending state, and the value false means to remove the pending state.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setPending(pendingState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the pending state for this image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state.
     * <br>The value true means to set the file to pending state, and the value false means to remove the pending state.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setPending(pendingState: boolean): Promise<void>;
    /**
     * Checks whether this image or video asset is edited. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     * <br>The value true means that the image or video asset is edited, and false means the opposite.
     * <br>The default value is false.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isEdited(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether this image or video asset is edited. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Returns whether the asset has been edited.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isEdited(): Promise<boolean>;
    /**
     * Obtains the edit data of this image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the edit data obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestEditData(callback: AsyncCallback<string>): void;
    /**
     * Obtains the edit data of this image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns asset edit data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestEditData(): Promise<string>;
    /**
     * Obtains the edited data of this asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<MediaAssetEditData> } Returns media asset edit data
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getEditData(): Promise<MediaAssetEditData>;
    /**
     * Clone asset.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - The title of asset.
     * @returns { Promise<PhotoAsset> } Returns asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamic
     * @since 23 static
     */
    clone(title: string): Promise<PhotoAsset>;
    /**
     * Copy a picture in the same album and convert it to a specified format.
     * The album here refers to the album created by user or application album.
     * The API supports media types include normal picture, movingphoto(only picture part), and burst photo, but video is not included.
     * The API supports image format include heif and heic.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - The new image title.
     * @param { SupportedImageFormat } imageFormat - The target image format.
     * @returns { Promise<PhotoAsset> } Returns the new PhotoAsset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     * 1. The original file does not exist locally in PhotoAsset;
     * 2. The original file format is not within the supported range;
     * 3. The original file is a temporary file or is being edited;
     * 4. The title is the same with an image in the same album;
     * 5. PhotoAsset is a photo in the trash or a hidden photo;
     * 6. The title does not meet the parameter specifications.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the
     * logs. Possible causes:
     * 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    convertImageFormat(title: string, imageFormat: SupportedImageFormat): Promise<PhotoAsset>;
    /**
     * Create a compatibility copy of the asset for applications that do not support the encoding format.
     * The current HEIF image will generate a JPEG image when this interface is called.
     * The API supports media types include normal picture,movingphoto(only picture part), and burst photo,
     * but video is not included.
     * The API supports image format incluse heif and heic.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns the void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *    1. The original file does not exist locally in PhotoAsset;
     *    2. The original file format is not within the supported range;
     *    3. The original file is a temporary file or is being edited;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the
     *    logs.Possible causes:
     *    1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    createTemporaryCompatibleDuplicate(): Promise<void>;
    /**
     * Opens the source file to obtain the FD. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<int> } callback - Callback used to return the FD.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestSource(callback: AsyncCallback<int>): void;
    /**
     * Opens the source file to obtain the FD. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<int> }  Returns opened source asset fd.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestSource(): Promise<int>;
    /**
     * Commits the edited image or video asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    commitEditedAsset(editData: string, uri: string, callback: AsyncCallback<void>): void;
    /**
     * Commits the edited image or video asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    commitEditedAsset(editData: string, uri: string): Promise<void>;
    /**
     * Reverts to the state of the file before being edited. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    revertToOriginal(callback: AsyncCallback<void>): void;
    /**
     * Reverts to the state of the file before being edited. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    revertToOriginal(): Promise<void>;
    /**
     * Obtains the quick thumbnail and quality thumbnail of this asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback invoked twice to return the quick and quality thumbnails obtained.
     * @returns { string } Returns request photo task id.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    requestPhoto(callback: AsyncCallback<image.PixelMap>): string;

    /**
     * Obtains the quick thumbnail and quality thumbnail of this asset.
     *     This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback invoked twice to return the quick
     *     and quality thumbnails obtained.
     * @returns { string | null } Returns request photo task id. if the operation fails, returns null.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    requestPhoto(callback: AsyncCallback<image.PixelMap>): string | null;

    /**
     * Obtains the thumbnails of an asset based on the specified options. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - Options for obtaining the asset thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnails obtained.
     * <br>The callback may be invoked more than once, depending on options.
     * @returns { string } Returns request photo task id.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string;

    /**
     * Obtains the thumbnails of an asset based on the specified options.
     *     This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - Options for obtaining the asset thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnails obtained.
     *     The callback may be invoked more than once, depending on options.
     * @returns { string | null } Returns request photo task id. if the operation fails, returns null.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string | null

    /**
     * Cancels a task for obtaining media thumbnails.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } requestId - ID of the task to cancel.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cancelPhotoRequest(requestId: string): void;
    /**
     * Obtains the thumbnail of the specified type for the key frame. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } beginFrameTimeMs - Time of the start frame, in ms. The value 0 indicates the cover frame.
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getKeyFrameThumbnail(beginFrameTimeMs: long, type: ThumbnailType): Promise<image.PixelMap>;
  }

  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */
  /**
   * Enumeration of photo asset members
   *
   * @enum { string } PhotoKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum PhotoKeys {
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Asset uri, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Photo type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PHOTO_TYPE = 'media_type',
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Asset name, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DISPLAY_NAME = 'display_name',
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Size of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SIZE = 'size',
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Creation date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_ADDED = 'date_added',
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Modified date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Duration of video files, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DURATION = 'duration',
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Width of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    WIDTH = 'width',
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Height of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    HEIGHT = 'height',
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Date taken of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_TAKEN = 'date_taken',
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Orientation of the image asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ORIENTATION = 'orientation',
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Favorite state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FAVORITE = 'is_favorite',
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Title of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TITLE = 'title',
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10
     */
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16
     */
    /**
     * Asset position, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    POSITION = 'position',
    /**
     * Trashed date of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TRASHED = 'date_trashed',
    /**
     * Hidden state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN = 'hidden',
    /**
     * User comment info
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    USER_COMMENT = 'user_comment',
    /**
     * Camera shot key
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_SHOT_KEY = 'camera_shot_key',
    /**
     * The year of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_YEAR = 'date_year',
    /**
     * The month of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_MONTH = 'date_month',
    /**
     * The day of the file created, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_DAY = 'date_day',
    /**
     * Pending state of the asset, true means asset is pending, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PENDING = 'pending',
    /**
     * Creation time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Creation time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_ADDED_MS = 'date_added_ms',
    /**
     * Modified time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Modified time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_MODIFIED_MS = 'date_modified_ms',
    /**
     * Trashed time of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_TRASHED_MS = 'date_trashed_ms',
    /**
     * Photo subtype of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Photo subtype of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PHOTO_SUBTYPE = 'subtype',
    /**
     * Effect mode of moving photo, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO_EFFECT_MODE = 'moving_photo_effect_mode',
    /**
     * Dynamic range type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Dynamic range type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DYNAMIC_RANGE_TYPE = 'dynamic_range_type',
    /**
     * Cover position of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Cover position of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    COVER_POSITION = 'cover_position',
    /**
     * Unique uuid of the burst photos, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Unique uuid of the burst photos, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    BURST_KEY = 'burst_key',
    /**
     * Thumbnail of photo asset has been ready, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THUMBNAIL_READY = 'thumbnail_ready',
    /**
     * Width and height information of lcd picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Width and height information of lcd picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LCD_SIZE = 'lcd_size',
    /**
     * Width and height information of thumbnail picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Width and height information of thumbnail picture, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    THM_SIZE = 'thm_size',
    /**
     * Detail time of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    /**
     * Detail time of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DETAIL_TIME = 'detail_time',
    /**
     * Date taken of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    /**
     * Date taken of the asset in milliseconds, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DATE_TAKEN_MS = 'date_taken_ms',
    /**
     * Cloud enhancement status of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CE_AVAILABLE = 'ce_available',
    /**
     * watermark type of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SUPPORTED_WATERMARK_TYPE = 'supported_watermark_type',
    /**
     * visibility of thumbnails
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    THUMBNAIL_VISIBLE = 'thumbnail_visible',
    /**
     * Whether the photo supports auto cloud enhancement task, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_CE_AUTO = 'is_auto',
    /**
     * Owner album id of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Owner album id of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    OWNER_ALBUM_ID = 'owner_album_id',
    /**
     * Recentshow state of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_RECENT_SHOW = 'is_recent_show',
    /**
     * Suffix of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    MEDIA_SUFFIX = 'media_suffix',
    /**
     * total size of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    SUM_SIZE = 'sum(size)',
    /**
     * orientation in exif
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    EXIF_ROTATE = 'exif_rotate',
    /**
     * AppLink state of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    HAS_APPLINK = 'has_applink',
    /**
     * AppLink info of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    APPLINK = 'applink',
    /**
     * HDR mode of the asset, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_MODE = 'hdr_mode',
    /**
     * The unique key when an asset is on the cloud, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    CLOUD_ID = 'cloud_id',
    /**
     * Compatible duplicate of asset exists, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXIST_COMPATIBLE_DUPLICATE = 'exist_compatible_duplicate',
    /**
     * Composite display status of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    COMPOSITE_DISPLAY_STATUS = 'composite_display_status',
    /**
     * Video mode, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VIDEO_MODE = 'video_mode',
    /**
     * Source type of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    ASSET_SOURCE_TYPE = 'file_source_type',
    /**
     * Storage path of fusion assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    FUSION_ASSET_STORAGE_PATH = 'storage_path',
    /**
     * width/height of a photo
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ASPECT_RATIO = 'aspect_ratio',
    /**
     * Edit data of asset exists, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EDIT_DATA_EXIST = 'edit_data_exist',
    /**
     * change time of photo
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * Package name.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PACKAGE_NAME = 'package_name',
    /**
     * Risk status of a photo.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PHOTO_RISK_STATUS = 'photo_risk_status',
    /**
     * Year of date_added time.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_YEAR = 'date_added_year',
    /**
     * Month of date_added time.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_MONTH = 'date_added_month',
    /**
     * Day of date_added time.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_DAY = 'date_added_day'
  }

  /**
   * Enumeration of photo risk status
   *
   * @enum { int } PhotoRiskStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PhotoRiskStatus {
    /**
     * Unidentified type.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIDENTIFIED = 0,
    /**
     * A photo without risk.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    APPROVED = 1,
    /**
     * A photo might be a risk photo.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SUSPICIOUS = 2,
    /**
     * A risk photo with confirmed
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REJECTED = 3
  }

  /**
   * Enumeration of fusion asset type
   *
   * @enum { int } FusionAssetType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 22 dynamic
   */
  enum FusionAssetType {
    /**
     * compatible asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    COMPATIBLE_ASSET = 0,
  }
  /**
   * Fusion assets information.
   *
   * @interface FusionAssetsInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   */
  interface FusionAssetsInfo {
    /**
     * Assets type.
     *
     * @type { FusionAssetType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    assetsType: FusionAssetType;
    /**
     * Assets count.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    assetsCount: int;
    /**
     * Assets path.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    assetsPath: string;
  }
  /**
   * Enumerates the key album attributes.
   *
   * @enum { string } AlbumKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates the key album attributes.
   *
   * @enum { string } AlbumKeys
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AlbumKeys {
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ALBUM_NAME = 'album_name',
    /**
     * Virtual path of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Virtual path of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    ALBUM_LPATH = 'lpath',
    /**
     * Bundle name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    BUNDLE_NAME = 'bundle_name',
    /**
     * Timestamp when the album was modified, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * album cover uri source
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COVER_URI_SOURCE = 'cover_uri_source',
    /**
     * Album upload status
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    UPLOAD_STATUS = 'upload_status',
    /**
     * change time of album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * hidden state of album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HIDDEN = 'hidden'
  }

  /**
   * Enumerates the display modes of hidden files in the system.
   *
   * @enum { int } HiddenPhotosDisplayMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum HiddenPhotosDisplayMode {
    /**
     * Display all hidden files in the system.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSETS_MODE,
    /**
     * Display hidden files by album (display all albums that contain hidden files in the system,
     * <br>excluding the preset hidden album and the albums in the trash).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALBUMS_MODE
  }

  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */
  /**
   * Defines the options for fetching media files.
   *
   * @interface FetchOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface FetchOptions {
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Indicates the members to query.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    fetchColumns: Array<string>;
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Predicates that specify the fetch criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Options for creating an image or video asset.
   *
   * @interface PhotoCreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoCreateOptions {
    /**
     * Specify subtype of the asset to create
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
    /**
     * Camera shot key
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cameraShotKey?: string;
    /**
     * User ID.
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    userId?: int;
  }

  /**
   * Config to create photo asset
   *
   * @interface PhotoCreationConfig
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PhotoCreationConfig {
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * Extension of the asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    fileNameExtension: string;

    /**
     * Specify photo type of the asset to create, include image or video
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    photoType: PhotoType;

    /**
     * Specify photo subtype of the asset to create, include default or moving_photo
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Setting to create photo asset
   *
   * @interface CreationSetting
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  interface CreationSetting {  
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    title?: string;

    /**
     * Extension of the asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    fileNameExtension: string;

    /**
     * Specify photo type of the asset to create, include image or video
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    photoType: PhotoType;
  }

  /**
   * Options for creating an image or video asset.
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Options for creating an image or video asset.
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Options for creating an image or video asset.
   *
   * @interface CreateOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CreateOptions {
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Title of the asset
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * Specify subtype of the asset to create
     *
     * @type { ?PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Defines the options for obtaining the thumbnail of an image or video.
   *
   * @interface RequestPhotoOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestPhotoOptions {
    /**
     * Size of the thumbnail to obtain.
     *
     * @type { ?image.Size }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    size?: image.Size;
    /**
     * Operation to perform.
     *
     * @type { ?RequestPhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestPhotoType?: RequestPhotoType;
  }

  /**
   * Defines the application information provided to create assets on behalf of the application.
   *
   * @interface PhotoCreationSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface PhotoCreationSource {
    /**
     * Bundle name of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName?: string;
    /**
     * Name of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appName?: string;
    /**
     * ID of the target application
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appId?: string;
    /**
     * Token ID of the target application
     *
     * @type { ?long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    tokenId?: long;
  }

  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12
   */
  /**
   * Provides APIs to manage the file retrieval result.
   *
   * @interface FetchResult
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { int } Total number of objects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { int } Total number of objects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the total number of objects in the fetch result.
     *
     * @returns { int } Total number of objects.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getCount(): int;
    /**
     * Checks whether the cursor is in the last row of the result set.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Checks whether the cursor is in the last row of the result set.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Checks whether the result set points to the last row.
     * You need to check whether the object is the last one before calling getNextObject.
     *
     * @returns { boolean } Whether the object is the last one in the fetch result.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isAfterLast(): boolean;
    /**
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the first object in the fetch result.
     *
     * @param { AsyncCallback<T> } callback - Returns the first object in the fetch result.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the first object in the fetch result.
     *
     * @returns { Promise<T> } Returns the first object in the fetch result.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the next object in the fetch result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     * in the fetch result. This method only works when the current position is not the last row.
     *
     * @param { AsyncCallback<T> } callback - Returns the next object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the next object in the fetch result.
     * Before calling this method, you must use isAfterLast() to check whether the current position is the last row
     * in the fetch result. This method only works when the current position is not the last row.
     *
     * @returns { Promise<T> } Returns the next object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the last object in the fetch result
     *
     * @param { AsyncCallback<T> } callback - Returns the last object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the last object in the fetch result
     *
     * @returns { Promise<T> } Returns the last object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the object with the specified index in the fetch result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getObjectByPosition(index: int, callback: AsyncCallback<T>): void;
    /**
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains the object with the specified index in the fetch result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from 0.
     * @returns { Promise<T> } Returns the object
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getObjectByPosition(index: int): Promise<T>;
    /**
     * Obtains the objects in the fetch result in segments.
     *
     * @param { int } index - Index of the asset to obtain.
     * @param { int } offset - Offset of the asset to obtain.
     * @returns { Promise<T[]> } Returns the objects in segments
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 'index or 'offset' validity check failed.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    /**
     * Obtains the objects in the fetch result in segments.
     *
     * @param { int } index - Index of the asset to obtain.
     * @param { int } offset - Offset of the asset to obtain.
     * @returns { Promise<T[]> } Returns the objects in segments
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: index or offset validity check failed.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    getRangeObjects(index: int, offset: int): Promise<T[]>;
    /**
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains all objects in the fetch result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Returns all the objects
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getAllObjects(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Obtains all objects in the fetch result.
     *
     * @returns { Promise<Array<T>> } Returns all the objects
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Releases the fetch result.
     *
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Whether an object is in the fetch result.
     *
     * @param { T } object - The object to be found.
     * @returns { Promise<boolean> } Returns whether the object is in the fetch result
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    contains(object: T): Promise<boolean>;

    /**
     * Obtains the objects in the fetch result by index set.
     *
     * @param { int[] } indexSet - Index set of the assets to obtain.
     * @returns { Promise<T[]> } Returns the objects.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1.The indexSet is null, undefined or empty.
     *     2.The indexSet length is bigger than 500.
     *     3.The max value of indexSet is equal or bigger than the fetch result length.
     *     4.The min value of indexSet is less than 0.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getObjectsByIndexSet(indexSet: int[]): Promise<T[]>;

    /**
     * Gets an object index in the fetch result, returns-1 when object is not in the fetch result.
     *
     * @param { T } object - Whose index to get.
     * @returns { Promise<int> } Returns the object index in the fetch result.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getIndex(object: T): Promise<int>;
  }

  /**
   * Enumerates the album types.
   *
   * @enum { int } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerates the album types.
   *
   * @enum { int } AlbumType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    USER = 0,
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SYSTEM = 1024,
    /**
     * Album created by app.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Album created by app.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    SOURCE = 2048,
    /**
     * Album created by smart abilities.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SMART = 4096
  }

  /**
   * Enumerate the album subtypes.
   *
   * @enum { int } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Enumerate the album subtypes.
   *
   * @enum { int } AlbumSubtype
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AlbumSubtype {
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    USER_GENERIC = 1,
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA,
    /**
     * Image album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11
     */
    /**
     * Image album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    IMAGE = 1031,
    /**
     * Cloud Enhancement album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1032,
    /**
     * Source album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    /**
     * Source album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    SOURCE_GENERIC = 2049,
    /**
     * Classify album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CLASSIFY = 4097,
    /**
     * Location album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * City album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_CITY,
    /**
     * ShootingMode album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SHOOTING_MODE,
    /**
     * Portrait album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PORTRAIT,
    /**
     * Group photo album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    GROUP_PHOTO,
    /**
     * Highlight album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT = 4104,
    /**
     * Highlight suggestions album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT_SUGGESTIONS,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ANY = 2147483647
  }

  /**
   * Enumerates the types of the operation for obtaining image or video thumbnails.
   *
   * @enum { int } RequestPhotoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum RequestPhotoType {
    /**
     * Obtain both the quick thumbnail and the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_ALL_THUMBNAILS = 0,
    /**
     * Obtain only the quick thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_FAST_THUMBNAIL,
    /**
     * Obtain only the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_QUALITY_THUMBNAIL
  }

  /**
   * Enumerates the source types of cover URIs.
   *
   * @enum { int } CoverUriSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum CoverUriSource {
    /**
     * Default cover.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT_COVER = 0,

    /**
     * Cover manually set.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    MANUAL_COVER = 1
  }

  /**
   * Defines the abstract interface of albums.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the abstract interface of albums.
   *
   * @interface AbsAlbum
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AbsAlbum {
    /**
     * Album type
     *
     * @type { AlbumType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album type
     *
     * @type { AlbumType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @type { AlbumSubtype }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album subtype
     *
     * @type { AlbumSubtype }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    albumName: string;
    /**
     * Album uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Album uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly albumUri: string;
    /**
     * Number of assets in the album
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Number of assets in the album
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly count: int;
    /**
     * Cover uri for the album
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    readonly coverUri: string;
    /**
     * Lpath for the album, one album has a virtual path
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Lpath for the album, one album has a virtual path
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    readonly lpath?: string;
    /**
     * Album cover uri source
     *
     * @type { ?CoverUriSource }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly coverUriSource?: CoverUriSource;
    /**
     * Album upload status, true means the albim and its assets will upload to cloud or hdc
     *     ,false means the albim and its assets will not upload to cloud or hdc
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    readonly uploadStatus: boolean;
    /**
     * The change time of album
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    readonly changeTime?: long;
    /**
     * The hidden state of album
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly hidden?: boolean;
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Fetch assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Fetch options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
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
     * @since 13 dynamic
     * @since 23 static
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * Enumerates the types of media asset and album changes.
   * @enum { int } NotifyChangeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum NotifyChangeType {
    /**
     * Media assets and albums are added.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_ADD = 0,
    /**
     * Data(assets or albums) have been modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_UPDATE = 1,
    /**
     * Media assets and albums are deleted.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_REMOVE = 2,
    /**
     * Data(YUV buffer of the photo asset) is ready.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_YUV_READY = 3,
    /**
     * Media assets added to analysis album.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_ADD_ANALYSIS = 4,
    /**
     * Media assets removed from analysis album.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_REMOVE_ANALYSIS = 5
  }

  /**
   * Defines the album.
   *
   * @extends AbsAlbum
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines the album.
   *
   * @extends AbsAlbum
   * @interface Album
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface Album extends AbsAlbum {
    /**
     * Number of image assets in the album
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Number of image assets in the album
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly imageCount?: int;
    /**
     * Number of video assets in the album
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Number of video assets in the album
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly videoCount?: int;
    /**
     * Album dateAdded
     *
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateAdded?: long;
    /**
     * Album dateModified
     *
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateModified?: long;
    /**
     * Modify metadata for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify metadata for the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(): Promise<void>;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Removes image and video assets from an album. The album and file resources must exist.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Removes image and video assets from an album. The album and file resources must exist.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist in the trash.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * Sets the album cover. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Sets the album cover. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string): Promise<void>;
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
     * @since 13 dynamic
     * @since 23 static
     */
    getFaceId(): Promise<string>;
    /**
     * Fetch selected assets in an album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } optionCheck - Fetch options.
     * @param { string } [filter] - Filter options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    getSelectedAssets(optionCheck: FetchOptions, filter?: string): Promise<FetchResult<PhotoAsset>>;
    /**
     * Obtains fusion assets information.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<FusionAssetsInfo[]> } Returns fusion assets information.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    getFusionAssetsInfo(): Promise<FusionAssetsInfo[]>;
  }

  /**
   * Defines the album sorting information.
   * @interface AlbumOrder
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumOrder {
    /**
     * The album id of album asset.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumId: int;
    /**
     * The album order of album asset.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumOrder: int;
    /**
     * The order section of album asset.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderSection: int;
    /**
     * The order type of album asset.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderType: int;
    /**
     * The order status of album asset.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderStatus: int;
  }

  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Helper functions to access photos and albums.
   *
   * @interface PhotoAccessHelper
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PhotoAccessHelper {
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Options for fetching the image and video assets.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Fetch photo assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Obtains burst assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - UUID of a set of burst photos (BURST_KEY of PhotoKeys). The value is a string of 36 characters.
     * @param { FetchOptions } options - Options for fetching the burst photos.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    /**
     * Fetch a group of burst assets
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - Burst asset uuid
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Creates an image or video asset with the specified file name. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { AsyncCallback<PhotoAsset> } callback - File name of the image or video to create.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Creates an image or video asset with the specified file name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file name and options. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @returns { Promise<PhotoAsset> } Returns the newly created asset
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, options: PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * Creates an image or video asset with the specified file name and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the image or video created.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, options: PhotoCreateOptions, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
    /**
     * Creates an image or video asset with the specified file type and file name extension.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type and file name extension.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Creates an image or video asset with the specified file type and file name extension.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Creates an image or video asset with the specified file type, file name extension, and options.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
    /**
     * Creates an image or video asset with the specified file type, file name extension, and title.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { string } [title] - The title of an image or video asset.
     * @returns { Promise<string> } Returns the uri of the newly created asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The extension format is unsupported
     *     2. Title contains unsupported  character, such as . .. \ / : * ? " ' ` < > | { } [ ]
     *     3. The title is an empty string
     *     4. The total length of title and extension is more than 255
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    createPhotoAsset(photoType: PhotoType, extension: string, title?: string): Promise<string>;
    /**
     * Creates an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @param { AsyncCallback<Album> } callback - Callback used to return the created album instance.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Creates an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#createAlbumRequest
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Deletes albums. This API uses an asynchronous callback to return the result.
     * Ensure that the albums to be deleted exist. Only user albums can be deleted.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Deletes albums. This API uses a promise to return the result.
     * Ensure that the albums to be deleted exist. Only user albums can be deleted.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAlbums
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } options - Options for fetching the albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } options - Options for fetching the albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Album subtype.
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of albums containing hidden assets.
     * @param { FetchOptions } options - Options to fetch albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns fetchResult of albums containing hidden assets.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;

    /**
     * Obtains photo albums based on the specified options. This API uses a promise to return the result.
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Options for fetching the albums.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getPhotoAlbums(options?: FetchOptions): Promise<FetchResult<Album>>;

    /**
     * Obtains hidden albums based on the specified display mode. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } [options] - Options for retrieving the files.
     * @returns { Promise<FetchResult<Album>> } Returns fetchResult of albums containing hidden assets.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Deletes media assets. This API uses an asynchronous callback to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    deleteAssets(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    deleteAssets(uriList: Array<string>): Promise<void>;
    /**
     * Registers listening for the specified URI. This API uses a callback to return the result.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
     * @param { boolean } forChildUris - Whether to perform fuzzy listening.
     * If uri is the URI of an album, the value true means to listen for the changes of the files in the album;
     * the value false means to listen for the changes of the album only.
     * If uri is the URI of a photoAsset, there is no difference between true and false for forChildUris.
     * If uri is DefaultChangeUri, forChildUris must be set to true. If forChildUris is false,
     * the URI cannot be found and no message can be received.
     * @param { Callback<ChangeData> } callback - Callback used to return the ChangeData.
     * Multiple callback listeners can be registered for a URI.
     * You can use unRegisterChange to unregister all listeners for the URI or a specified callback listener.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
    /**
     * Get analysis progress of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Analysis type
     * @returns { Promise<string> } Returns analysis progress info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Get analysis progress of the asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } [analysisType] - Analysis type
     * @returns { Promise<string> } Returns analysis progress info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
     getDataAnalysisProgress(analysisType?: AnalysisType): Promise<string>;
    /**
     * Unregisters listening for the specified URI. Multiple callbacks can be registered for a URI for listening.
     * You can use this API to unregister the listening of the specified callbacks or all callbacks.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
     * @param { Callback<ChangeData> } [callback] - The callback function to unregister.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    unRegisterChange(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * Creates a dialog box for deleting media files. This API uses an asynchronous callback to return the result.
     * The deleted media files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Creates a dialog box for deleting media files. This API uses a promise to return the result.
     * The deleted media files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
     */
    createDeleteRequest(uriList: Array<string>): Promise<void>;
    /**
     * Create a save dialog to save photos
     *
     * @param { Array<string> } srcFileUris - List of the file uris to be saved
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - List of the photo asset creation configs
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    showAssetsCreationDialog(srcFileUris: Array<string>, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
    /**
     * Create a save dialog to save photos
     *
     * @param { Array<string> } srcFileUris - List of the file uris to be saved
     * @param { Array<CreationSetting> } creationSettings - List of the photo asset creation settings
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     1. Database corrupted;
     *     2. The file system is abnormal;
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    showAssetsCreationDialogEx(srcFileUris: Array<string>, creationSettings: Array<CreationSetting>): Promise<Array<string>>;
    /**
     * Create a save dialog to save single photo
     *
     * @param { string } srcFileUri - The file uri to be saved
     * @param { CreationSetting } creationSetting - The photo asset creation setting
     * @param { boolean } isImageFullyDisplayed - Supports displaying the image without cropping in the window
     * @returns { Promise<string> } - Returns the media library file uri to application which has been authorized
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     1. Database corrupted;
     *     2. The file system is abnormal;
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    showSingleAssetCreationDialogEx(srcFileUri: string, creationSetting: CreationSetting, isImageFullyDisplayed: boolean): Promise<string>;
    /**
     * Create assets and grant save permission to the app which called the save dialog.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - BundleName of the application which called the save dialog
     * @param { string } appName - AppName of the application which called the save dialog
     * @param { long } tokenId - TokenId of the application which called the save dialog
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - List of the photo asset creation configs
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. The photoCreationConfigs is empty;
     * <br>2. Incorrect photoCreationConfigs format.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    createAssetsForApp(bundleName: string, appName: string, tokenId: long, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
    /**
     * Create asset and grant short term permission to the application.
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { PhotoCreationConfig } photoCreationConfig - photo asset creation configs
     * @returns { Promise<string> } - Returns the media library file uri to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 24 static
     */
    createAssetWithShortTermPermission(photoCreationConfig: PhotoCreationConfig): Promise<string>;
    /**
     * Create asset and grant short term permission to the application.
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { CreationSetting } creationSetting - photo asset creation settings
     * @returns { Promise<string> } - Returns the media library file uri to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    createAssetWithShortTermPermissionEx(creationSetting: CreationSetting): Promise<string>;
    /**
     * Creates assets with a temporary permission. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - Bundle name of the target application.
     * @param { string } appName - Name of the target application.
     * @param { string } appId - ID of the target application.
     * @param { long } tokenId - Unique identifier for the temporary authorization.
     * @param { AuthorizationMode } authorizationMode - Mode of authorization
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets in the media library.
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    createAssetsForAppWithMode(
      bundleName: string,
      appName: string,
      appId: string,
      tokenId: long,
      authorizationMode: AuthorizationMode,
      photoCreationConfigs: Array<PhotoCreationConfig>
    ): Promise<Array<string>>;
    /**
     * Grants the save permission for URIs. This API uses a promise to return the result.
     *
     * @param { Array<string> } srcFileUris - URIs of the images or videos to be granted with the permission.
     * @returns { Promise<Array<string>> } - Returns the authorized uri list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 24 static
     */
    requestPhotoUrisReadPermission(srcFileUris: Array<string>): Promise<Array<string>>;
     /**
      * Grants the save permission for URIs. This API uses a promise to return the result.
      *
      * @param { Array<string> } srcFileUris - URIs of the images or videos to be granted with the permission.
      * @returns { Promise<RequestReadPermissionResult> } - Returns the result list,
      *     which includes authorized URI list and invalid URI list.
      * @throws { BusinessError } 23800301 - Internal system error.
      *     It is recommended to retry and check the logs. Possible causes:
      *     1. Database corrupted;
      *     2. The file system is abnormal;
      *     3. The IPC request timed out.
      * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
      * @stagemodelonly
      * @atomicservice
      * @since 23 dynamic
      * @since 24 static
      */
    requestPhotoUrisReadPermissionEx(srcFileUris: Array<string>): Promise<RequestReadPermissionResult>;
    /**
     * Obtains the index of an image or video in an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string.
     * <br>If it is an empty string, all the media assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Fetch options. Only one search condition or sorting mode must be set in predicates.
     * <br> If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully.
     * @param { AsyncCallback<int> } callback - Callback used to return the index obtained.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<int>): void;
    /**
     * Obtains the index of an image or video in an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string.
     * <br>If it is an empty string, all the media assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Fetch options. Only one search condition or sorting mode must be set in predicates.
     * <br>If no value is set or multiple search criteria or sorting modes are set, the API cannot be called successfully.
     * @returns { Promise<int> } - Returns the index of the asset in the album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<int>;
    /**
     * Releases this PhotoAccessHelper instance. This API uses an asynchronous callback to return the result.
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases this PhotoAccessHelper instance. This API uses a promise to return the result.
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
    /**
     * Saves form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @param { AsyncCallback<void> } callback - No value returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    saveFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * Saves form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    saveFormInfo(info: FormInfo): Promise<void>;
    /**
     * Saves gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    saveGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Removes form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @param { AsyncCallback<void> } callback - No value returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    removeFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * Removes form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information store with the form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    removeFormInfo(info: FormInfo): Promise<void>;
    /**
     * Removes gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    removeGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Updates gallery form information
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information store with the gallery form.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    updateGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * Applies media changes. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { MediaChangeRequest } mediaChangeRequest - Request for asset changes or album changes.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    applyChanges(mediaChangeRequest: MediaChangeRequest): Promise<void>;
    /**
     * Get index construction progress.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns progress of the photo and video
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getIndexConstructProgress(): Promise<string>;
    /**
     * Grants an application the permission to access multiple URIs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { Array<string> } uriList - A list of URIs, which cannot exceed 1000.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide.
     * <br>This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in.
     * @returns { Promise<int> } Returns result of grant permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    grantPhotoUrisPermission(
      tokenId: long,
      uriList: Array<string>,
      photoPermissionType: PhotoPermissionType,
      hideSensitiveType: HideSensitiveType
    ): Promise<int>;
    /**
     * Grants an application the permission to access a URI. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide.
     * <br>This parameter is reserved. Currently, any enumerated value of HideSensitiveType can be passed in.
     * @returns { Promise<int> } Returns result of grant permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    grantPhotoUriPermission(
      tokenId: long,
      uri: string,
      photoPermissionType: PhotoPermissionType,
      hideSensitiveType: HideSensitiveType
    ): Promise<int>;
    /**
     * Cancels the permission for accessing an URI from an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Permission type.
     * @returns { Promise<int> } Returns result of cancel permission
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes: 1. Incorrect uri format;
     * <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    cancelPhotoUriPermission(tokenId: long, uri: string, photoPermissionType: PhotoPermissionType): Promise<int>;
    /**
     * Provides the capability of thumbnail generation according to specified rules.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - Rule options for generating thumbnails.
     * @param { AsyncCallback<void> } callback - Returns void when the task is completed.
     * @returns { int } Create task id for generating thumbnails
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): int;
    /**
     * Provides the capability of thumbnail generation according to specified rules.
     * Support for returning information indicating that all thumbnails have been generated.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - Rule options for generating thumbnails.
     * @param { AsyncCallback<void> } callback - Returns void when the task is completed.
     * @param { AsyncCallback<int> } response - Return information indicating that all thumbnails have been generated.
     * @returns { int } Create task id for generating thumbnails
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *    Possible causes: The predicates invalid.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     1. Database corrupted;
     *     2. The file system is abnormal;
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>, response: AsyncCallback<int>): int;
    /**
     * Provides the capability of stop generating thumbnails.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } taskId - Stop generating thumbnail task id.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    stopThumbnailCreationTask(taskId: int): void;
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
     * @since 13 dynamic
     * @since 23 static
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
    /**
     * Obtains the list of image or video file name extensions supported by the media library.
     *
     * @param { PhotoType } photoType - Type of the file.
     * @returns { Promise<Array<string>> } - Return the list of image or video suffixes supported by the media library
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    getSupportedPhotoFormats(photoType: PhotoType): Promise<Array<string>>;
    /**
     * Starts asset analysis.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisType } type - Smart analysis type.
     * @param { Array<string> } assetUris - Array of asset URIs.
     * @returns { Promise<int> } Returns the task id of the service.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    startAssetAnalysis(type: AnalysisType, assetUris?: Array<string>): Promise<int>;
    /**
     * Obtains album information by album IDs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<int> } albumIds - Array of album IDs.
     * @returns { Promise<Map<int, Album>> } - Return the map of albums
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getAlbumsByIds(albumIds: Array<int>): Promise<Map<int, Album>>;
    /**
     * Creates assets for the current application or other applications in the specified source or user album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoCreationSource } source - Application information provided to create assets on behalf of the application.
     * @param { string } albumUri - URI of the album.
     * @param { boolean } isAuthorized - Whether to authorize other applications.
     * <br>The value true means that the permission is authorized, and false means the opposite.
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets in the media library.
     * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    createAssetsForAppWithAlbum(source: PhotoCreationSource, albumUri: string, isAuthorized: boolean,
      photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;

    /**
     * Batchly obtain the values of PhotoAsset members.
     *
     * @param {PhotoAsset[]} assets - The array of PhotoAsset objects.
     * @param {string[]} members - The array of member property names to get.
     * @returns { PhotoAssetParams } Returns the objects in segments
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The attribute to be queried does not exist in assets.
     * @throws { BusinessError } 23800104 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    batchGetPhotoAssetParams(assets: PhotoAsset[], members: string[]): PhotoAssetParams;

    /**
     * Register the callback of photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - The value is fixed at 'photoChange', indicating the photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - The value is fixed at 'photoChange', indicating the photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of hidden photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the hidden photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of hidden photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - The value is fixed at 'hiddenPhotoChange', indicating the hidden photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of trashed photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback invoked when the trashed photo is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unregister the callback of trashed photo changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - The value is fixed at 'trashedPhotoChange', indicating the trashed photo change event.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedPhotoChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to changes of analysis photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unsubscribes from changes of analysis photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAnalysisPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Register the callback of album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - The value is fixed at 'photoAlbumChange', indicating the album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - The value is fixed at 'photoAlbumChange', indicating the album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'photoAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Register the callback of hidden album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the hidden album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of hidden album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - The value is fixed at 'hiddenAlbumChange', indicating the hidden album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'hiddenAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Register the callback of trashed album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - The value is fixed at 'trashedAlbumChange', indicating the trashed album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback invoked when the trashed album is changed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unregister the callback of trashed album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - The value is fixed at 'trashedAlbumChange', indicating the trashed album change event.
     * @param { Callback<AlbumChangeInfos> } callback - Callback to be removed.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The type is not fixed at 'trashedAlbumChange'; 2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     * <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
    * Subscribes to changes of photos and videos.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
    *     The same callback is registered repeatedly.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 static
    */
    onPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
    * Unsubscribes from changes of photos and videos.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
    *     The same callback is unregistered repeatedly.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 static
    */
    offPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to changes of hidden photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onHiddenPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unsubscribes from changes of hidden photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offHiddenPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to changes of trashed photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onTrashedPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Unsubscribes from changes of trashed photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offTrashedPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onPhotoAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unsubscribes from album changes.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    offPhotoAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Subscribes to changes of hidden albums.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onHiddenAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unsubscribes from changes of hidden albums.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offhiddenAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Subscribes to changes of the trashed album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onTrashedAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unsubscribes from changes in the trashed album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offTrashedAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
    * Subscribes to single album changes.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { Album } album Album to be listened.
    * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes：
    *     1. The same callback is registered repeatedly. 2. Album has been removed. 3. The uri of the a invalid.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 dynamic&static
    */
    onSinglePhotoAlbumChange(album: Album, callback: Callback<AlbumChangeInfos>): void;

    /**
    * Unsubscribes from single album changes.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { Album } [album] Album to be listened.
    * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscriptions.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes：
    *     1. The same callback is unregistered repeatedly. 2. The uri of the album invalid.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 dynamic&static
    */
    offSinglePhotoAlbumChange(album?: Album, callback?: Callback<AlbumChangeInfos>): void;

    /**
    * Subscribes to changes of single photos and videos.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { PhotoAsset } asset Asset to be listened.
    * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes：
    *     1. The same callback is registered repeatedly. 2. Asset has been removed. 3. The uri of the asset invalid.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 dynamic&static
    */
    onSinglePhotoChange(asset: PhotoAsset, callback: Callback<PhotoAssetChangeInfos>): void;

    /**
    * Unsubscribes from changes of single photos and videos.
    *
    * @permission ohos.permission.READ_IMAGEVIDEO
    * @param { PhotoAsset } [asset] Asset to be listened.
    * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
    * @throws { BusinessError } 201 - Permission denied
    * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes：
    *     1. The same callback is unregistered repeatedly. 2. The uri of the asset invalid.
    * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
    *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @since 23 dynamic&static
    */
    offSinglePhotoChange(asset?: PhotoAsset, callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to changes of the analysis album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * Unsubscribes from changes in the analysis album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAnalysisAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Get the PhotoPickerComponent default album name.
     *
     * @returns { Promise<string> } - Returns the default album name.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. The IPC request timed out. 2. system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    getPhotoPickerComponentDefaultAlbumName(): Promise<string>;

    /**
     * checks whether the application supports compatiblle copies by bundleName
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - BundleName of target applicaation
     * @returns { Promise<boolean> } - Returns the whether appplication supports compatible copies
     * @throws {BusinessError } 201 - Permission denied
     * @throws {BusinessError } 202 - Called by non-system aapplication
     * @throws {BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs
     *    <br>Possible causes: 1. The IPC request timed out. 2.system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    isCompatibleDuplicateSupported(bundleName: string): Promise<boolean>;

    /**
     * Obtains the order of the photo album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } orderStyle Style of photo album sorting.
     * @param { FetchOptions } [options] Options for obtaining the album order.
     * @returns { Promise<FetchResult<AlbumOrder>> } Promise used to return the order of the photo album.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. 
     *     It is recommended to retry and check the logs. Possible causes: 
     *     1. Database corrupted; 
     *     2. The file system is abnormal; 
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getPhotoAlbumOrder(orderStyle: int, options?: FetchOptions): Promise<FetchResult<AlbumOrder>>;

    /**
     * Set Order of Photo Albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { int } orderStyle - order style for albums
     * @param { Array<AlbumOrder> } albumOrders - array AlbumOrder of the content.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1.The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setPhotoAlbumOrder(orderStyle: int, albumOrders: Array<AlbumOrder>): Promise<void>;

    /**
     * Get recent photo or video info by options
     *
     * @param { RecentPhotoOptions } [options] - options for recent photo
     * @returns { Promise<RecentPhotoInfo> } - Returns the recent photo info
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    getRecentPhotoInfo(options?: RecentPhotoOptions): Promise<RecentPhotoInfo>;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { string } sql - The query conditions.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The SQL statement is abnormal.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    query(sql: string): Promise<ResultSet>;

    /**
     * This interface is used to obtain the current uris by post-cloning asset URI list.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - The old asset uris before cloning.
     * @returns { Promise<Map<string, string>> } A list of Maps consisting of the corresponding post-clone asset URIs.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The size of input parameter exceeds 100 or is 0.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     1. Database corrupted;
     *     2. The file system is abnormal;
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    getClonedAssetUris(oldUris: Array<string>): Promise<Map<string, string>>;

    /**
     * This interface is used to obtain the current uris by post-cloning album URI list.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - The old album uris before cloning.
     * @returns { Promise<Map<string, string>> } A list of Maps consisting of the corresponding post-clone album URIs.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The size of input parameter exceeds 100 or is 0.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     1. Database corrupted;
     *     2. The file system is abnormal;
     *     3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    getClonedAlbumUris(oldUris: Array<string>): Promise<Map<string, string>>;

    /**
     * Start medialibrary database backup and wait for returning with backup information which only works on beta device.
     *
     * @param { string } betaIssueId - The beta issue id.
     * @param { string } betaScenario - The beta scenario.
     * @returns { Promise<Map<string, string>> } The returning with backup information,
     *     which includes FILE_FD, FILE_NAME and FILE_SIZE.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The betaIssueId parameter is invalid, such as null, undefined or empty string.
     *     2. The betaScenario parameter is invalid, such as null, undefined or empty string.
     *     3. The same betaIssueId task is processing.
     * @throws { BusinessError } 23800201 - Unsupported operation type, this api only works on beta device.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    acquireDebugDatabase(betaIssueId: string, betaScenario: string): Promise<Map<string, string>>;

    /**
     * Release medialibrary database backup resources includes closing backup database fd and
     *     deleting temporary backup database file which only works on beta device.
     *
     * @param { string } betaIssueId - The beta issue id.
     * @param { int } dbFd - The backup database fd.
     * @returns { Promise<void> } Return void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The betaIssueId parameter is invalid, such as null, undefined or empty string.
     *     2. The dbFd parameter is invalid, such as out of range 0~1023.
     * @throws { BusinessError } 23800201 - Unsupported operation type, this api only works on beta device.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    releaseDebugDatabase(betaIssueId: string, dbFd: int): Promise<void>;

    /**
     * Get the corresponding albumId of a bundleName.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - The app bundleName.
     * @returns { Promise<int> } - Return the corresponding albumId of the a bundleName.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stageModelOnly
     * @since 22 dynamic
     * @since 23 static
     */
    getAlbumIdByBundleName(bundleName: string): Promise<int>;

    /**
     * Get the corresponding albumId of an album's lpath, which only supports camera album, screenshot album
     *     and screen recording album.
     *
     * @param { string } lpath - The album's lpath.
     * @returns { Promise<int> } - Return the corresponding albumId of an album's lpath.
     * @throws { BusinessError } 23800151 - The lpath is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stageModelOnly
     * @since 22 dynamic
     * @since 23 static
     */
    getAlbumIdByLpath(lpath: string): Promise<int>;

    /**
     * Whether a kind of media data is ready.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } mediaDataKey - Media data key.
     * @returns { Promise<boolean> } Returns whether the specified media data is ready.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails, unsupported media data type.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isMediaDataReady(mediaDataKey: string): Promise<boolean>;

    /**
     * Get PhotoAsset objects from ValuesBucket record info.
     *
     * @param { ValuesBucket[] } assetsData - Array of asset records. Each element in the array contains the asset's
     *     column names and their values. The array size cannot exceed 500. Each element in the array must contain
     *     the following asset column information: file_id, data, display_name, media_type, and subtype.
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
     * @since 24 dynamic&static
     */
    getPhotoAssets(assetsData: ValuesBucket[]): Promise<PhotoAsset[]>;

    /**
     * Configure the asset compatibility capability. The system is compatible with special assets,
     *  and if you want to obtain original assets, you need to register compatibility capabilities into system.
     *
     * @param { AssetCompatibleCapability } capability - Asset compatible Capability
     *     <br>Asset compatible Capability
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails, Invalid tokenId.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAssetCompatibleCapability(capability: AssetCompatibleCapability):Promise<void>;

    /**
     * Configure the asset compatibility capability based on TokenId.
     * You can obtain compatibility capabilities and determine whether to
     * perform compatibility conversion based on the compatibility capabilities.
     *
     * @param { string } bundleName - Bundle name of target application.
     * @param { AssetCompatibleCapability } capability - Asset compatible Capability
     *     <br>Asset compatible Capability
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName or capability is invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAssetCompatibleCapability(bundleName: string, capability: AssetCompatibleCapability):Promise<void>;

    /**
     * Obtains the asset compatibility capability based on TokenId. When you serve a file to an application,
     * You can obtain compatibility capabilities and determine whether to 
     * perform compatibility conversion based on the compatibility capabilities.
     *
     * @param { string } bundleName - Bundle name of target application.
     * @returns { Promise<AssetCompatibleCapability> } Returns the specified asset compatibility capability.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getAssetCompatibleCapability(bundleName: string): Promise<AssetCompatibleCapability>
  }

  /**
   * RecentPhotoOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 24 static
   */
  export class RecentPhotoOptions {
    /**
     * Support set period time
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    period?: int;

    /**
     * The Type of the file in the recent photo window.
     *
     * @type { ?photoAccessHelper.PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

    /**
     * PhotoSource
     *
     * @type { ?PhotoSource }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    photoSource?: PhotoSource;
  }

  /**
   * Recent photo info
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 24 static
   */
  export class RecentPhotoInfo {
    /**
     * The dateTaken of photos or videos
     *
     * @type { ?long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    dateTaken?: long;

    /**
     * The identifier of photos or videos
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    identifier?: string;
  }

  /**
   * Enumeration of PhotoSource type
   *
   * @enum { int } PhotoSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 24 static
   */
  export enum PhotoSource {
    /**
     * all resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    ALL = 0,

    /**
     * camera resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    CAMERA = 1,

    /**
     * screenshot resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    SCREENSHOT = 2
  }

  /**
   * Enumeration status of thumbnail change.
   *
   * @enum { int } ThumbnailChangeStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum ThumbnailChangeStatus {
    /**
     * No thumbnail is generated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_EXISTS = 0,

    /**
     * A thumbnail is added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_ADD = 1,

    /**
     * The original image is modified, and a thumbnail is regenerated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_UPDATE = 2,

    /**
     * The thumbnail does not change.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_CHANGE = 3
  }

  /**
   * Enumerates the flags of cloud-based enhancements for photos and videos.
   * @enum { int } StrongAssociationType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum StrongAssociationType {
    /**
     * Regular image or video.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * Cloud-based enhancement for photos and videos.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1
  }

  /**
   * Defines the photo asset change infos.
   *
   * @interface PhotoAssetChangeInfos
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfos {
    /**
     * Notification type of photo asset.
     *
     * @type { NotifyChangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;

    /**
     * The changed asset datas.
     *
     * @type { PhotoAssetChangeData[] | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetChangeDatas: PhotoAssetChangeData[] | null;

    /**
     * Whether the application needs to requery. This flag helps address abnormal scenarios like abnormal
     * service restarts by enabling the application to refresh the page correctly through proactive querying.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * Defines the photo or video change data.
   *
   * @interface PhotoAssetChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeData {
    /**
     * Photo or video information before change.
     * 
     * 
     *
     * @type { PhotoAssetChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetBeforeChange: PhotoAssetChangeInfo | null;

    /**
     * Photo or video information after change.
     *
     * @type { PhotoAssetChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetAfterChange: PhotoAssetChangeInfo | null;

    /**
     * Whether the content of a photo or video changes. It is used to distinguish between attribute changes
     * and content changes of a photo or video.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isContentChanged: boolean;

    /**
     * Whether the photo or video is permanently completely.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isDeleted: boolean;

    /**
     * Change status of the thumbnail corresponding to the photo or video.
     * 
     *
     * @type { ThumbnailChangeStatus }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailChangeStatus: ThumbnailChangeStatus;

    /**
     * Version of the photo or video information. It is used to determine the sequence of notifications.
     *
     * 
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * Defines the photo asset info.
   *
   * @interface PhotoAssetChangeInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfo {
    /**
     * URI of the photo or video.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Media type of the photo or video.
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;

    /**
     * URI of the album that the image or video belongs to.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;

    /**
     * Unique ID of the photo or video.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fileId: int;

    /**
     * Date of the photo or video.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateDay: string;

    /**
     * Whether the image or video is added to favorites.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isFavorite: boolean;

    /**
     * Whether the photo or video is hidden.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * Cloud-based enhancement flag for photos and videos.
     *
     * @type { StrongAssociationType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    strongAssociation: StrongAssociationType;

    /**
     * Whether the thumbnail is visible.
     *
     * @type { ThumbnailVisibility }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailVisible: ThumbnailVisibility;

    /**
     * Time when the photo or video is deleted, in milliseconds.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;

    /**
     * Time when the photo or video is added, in milliseconds.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateAddedMs: long;

    /**
     * Time when the photo or video is captured, in milliseconds.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTakenMs: long;

    /**
     * asset position.
     *
     * @type { ?PositionType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    position?: PositionType;

    /**
     * Display name of photo asset.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    displayName?: string;

    /**
     * Size of photo asset.
     *
     * @type { ?long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    size?: long;

    /**
     * The analysis album change info.
     *
     * @type { ?(AlbumChangeInfo[] | null) } The analysis album change info.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    albumChangeInfos?: AlbumChangeInfo[] | null;
  }

  /**
   * Defines the album change infos.
   *
   * @interface AlbumChangeInfos
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfos {
    /**
     * Notification type of album changes.
     *
     * @type { NotifyChangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;

    /**
     * Data about album changes.
     * @type { AlbumChangeData[] | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumChangeDatas: AlbumChangeData[] | null;

    /**
     * Whether the application needs to requery. This flag helps address abnormal scenarios like abnormal
     * service restarts by enabling the application to refresh the page correctly through proactive querying.
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * Defines the album change data.
   *
   * @interface AlbumChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeData {
    /**
     * Album before change.
     * @type { AlbumChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumBeforeChange: AlbumChangeInfo | null;

    /**
     * Album after change.
     * @type { AlbumChangeInfo | null }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumAfterChange: AlbumChangeInfo | null;

    /**
     * Version of the album information. It is used to determine the sequence of notifications.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * Defines the detailed attributes of an album.
   * @interface AlbumChangeInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfo {
    /**
     * Album type.
     * @type { AlbumType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumType: AlbumType;

    /**
     * Subtype of the album.
     *
     * @type { AlbumSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumSubtype: AlbumSubtype;

    /**
     * Album name.
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumName: string;

    /**
     * Album URI.
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;

    /**
     * Total number of photos in the album.
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    imageCount: int;

    /**
     * Total number of videos in the album.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    videoCount: int;

    /**
     * Total number of photos and videos in the album.
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    count: int;

    /**
     * Cover URI.
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    coverUri: string;

    /**
     * Total number of hidden photos and videos in the album.
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCount: int;

    /**
     * Cover of hidden assets in the album.
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverUri: string;

    /**
     * Whether the album cover content is changed. It is used to distinguish between attribute changes and
     * content changes of a photo.
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCoverChanged: boolean;

    /**
     * Whether the cover of hidden assets in the album is changed. It is used to distinguish between attribute
     * changes and content changes of a cover asset.
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHiddenCoverChanged: boolean;

    /**
     * Detailed asset change information of the cover.
     * @type { ?PhotoAssetChangeInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    coverInfo?: PhotoAssetChangeInfo;

    /**
     * Cover changes of hidden assets in the album.
     * @type { ?PhotoAssetChangeInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverInfo?: PhotoAssetChangeInfo;

    /**
     * The order section of album asset.
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    orderSection?: int;

    /**
     * The album order of album asset.
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    albumOrder?: int;

    /**
     * hidden state of the album.
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hidden?: boolean;
  }

  /**
   * Gallery Form information.
   *
   * @interface GalleryFormInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface GalleryFormInfo {
    /**
     * Id of the form.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * uriList of the photo or album.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    assetUris?: Array<string>;
  }

  /**
   * Defines the Gallery widget information.
   *
   * @interface FormInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormInfo {
    /**
     * Widget ID, which is provided when a widget is created in Gallery.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * URI of the image bound to the widget. When a widget is created, uri can be empty or the URI of an image.
     * When a widget is removed, uri is not verified and can be empty.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
  }

  /**
   * Enumeration types of data change.
   *
   * @enum { int } NotifyType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * Data(assets or albums) have been newly created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ADD,
    /**
     * Data(assets or albums) have been modified
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_UPDATE,
    /**
     * Data(assets or albums) have been removed
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_REMOVE,
    /**
     * Assets have been added to an album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * Assets have been removed from an album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * Enumeration uris for registerChange.
   *
   * @enum { string } DefaultChangeUri
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum DefaultChangeUri {
    /**
     * Uri for default PhotoAsset, use with forDescendant{true}, will receive all PhotoAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_PHOTO_URI = 'file://media/Photo',
    /**
     * Uri for default Album, use with forDescendant{true}, will receive all Album's change notifications
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum',
    /**
     * Uri for albums in hidden album view.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT_HIDDEN_ALBUM_URI = 'file://media/HiddenAlbum'
  }

  /**
   * Defines the change data
   *
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * The NotifyType of ChangeData
     *
     * @type { NotifyType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * The changed uris
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    uris: Array<string>;
    /**
     * Change details of the asset uris to an album.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    extraUris: Array<string>;
    /**
     * sharedPhotoAssets of the same type
     *
     * @type { Array<SharedPhotoAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedPhotoAssets: Array<SharedPhotoAsset>;
    /**
     * sharedAlbumAssets of the same type
     *
     * @type { Array<SharedAlbumAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedAlbumAssets: Array<SharedAlbumAsset>;
    /**
     * sharedExtraPhotoAssets of the same type
     *
     * @type { Array<SharedPhotoAsset> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedExtraPhotoAssets: Array<SharedPhotoAsset>;
  }

  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
   *
   * @enum { string } PhotoViewMIMETypes
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  export enum PhotoViewMIMETypes {
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * IMAGE_TYPE indicates that the selected media resources are images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    IMAGE_TYPE = 'image/*',
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * VIDEO_TYPE indicates that the selected media resources are videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_TYPE = 'video/*',
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    IMAGE_VIDEO_TYPE = '*/*',

    /**
     * MOVING_PHOTO_IMAGE_TYPE indicates that the selected media resources are moving photos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MOVING_PHOTO_IMAGE_TYPE = 'image/movingPhoto'
  }

  /**
   * Enumeration type of filter operator.
   *
   * @enum { int } FilterOperator
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 24 static
   */
  export enum FilterOperator {
    /**
     * Filter operator: equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    EQUAL_TO = 0,
    /**
     * Filter operator: not equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    NOT_EQUAL_TO = 1,
    /**
     * Filter operator: more than
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    MORE_THAN = 2,
    /**
     * Filter operator: less than
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    LESS_THAN = 3,
    /**
     * Filter operator: more than or equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    MORE_THAN_OR_EQUAL_TO = 4,
    /**
     * Filter operator: less than or equal to
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    LESS_THAN_OR_EQUAL_TO = 5,
    /**
     * Filter operator: between
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    BETWEEN = 6,
  }

    /**
     * Enumeration type of single selection mode
     *
     * @enum { number } SingleSelectionMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
  export enum SingleSelectionMode {
    /**
     * browser mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    BROWSER_MODE = 0,
    /**
     * select directly mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    SELECT_MODE = 1,
    /**
     * browser and select mode
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    BROWSER_AND_SELECT_MODE = 2
  }

  /**
   * Class BaseSelectOptions, which is extracted from class PhotoSelectOptions
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  class BaseSelectOptions {
    /**
     * The Type of the file in the picker window.
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * The Type of the file in the picker window.
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The Type of the file in the picker window.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?PhotoViewMIMETypes }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MIMEType?: PhotoViewMIMETypes;

    /**
     * Maximum number of images for a single selection.
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Maximum number of images for a single selection.
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Maximum number of images for a single selection.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    maxSelectNumber?: int;

    /**
     * Support search.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Support search.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    isSearchSupported?: boolean;

    /**
     * Support taking photos.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Support taking photos.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    isPhotoTakingSupported?: boolean;

    /**
    * The recommendation options when use recommendation photo function.
    *
    * @type { ?RecommendationOptions }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @atomicservice
    * @since 11
    */
    /**
     * The recommendation options when use recommendation photo function.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?RecommendationOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    recommendationOptions?: RecommendationOptions;

    /**
     * The uri for the preselected files.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The uri for the preselected files.
     * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    preselectedUris?: Array<string>;

    /**
     * Support preview in single selection mode or not
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    isPreviewForSingleSelectionSupported?: boolean;

    /**
     * The mode of single selection
     *
     * @type { ?SingleSelectionMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    singleSelectionMode?: SingleSelectionMode;

    /**
     * Media file filtering configuration.
     *
     * @type { ?MimeTypeFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    mimeTypeFilter?: MimeTypeFilter;

    /**
     * Media file size filtering configuration.
     *
     * @type { ?FileSizeFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    fileSizeFilter?: FileSizeFilter;

    /**
     * Media file video duration filtering configuration.
     *
     * @type { ?VideoDurationFilter }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    videoDurationFilter?: VideoDurationFilter;

    /**
     * Configures filter conditions as a string array, supporting multiple combined
     * conditions to specify supported file types. When this parameter is set, the
     * original file type configuration parameters `MIMEType` and `mimeTypeFilter` become invalid.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    combinedMediaTypeFilter?: Array<string>;

    /**
     * Media file type and size combined filtering configuration. The array supports a maximum length of 3.
     * Setting this parameter will cause the `fileSizeFilter` and `MIMEType` parameters to be ignored.
     *
     * @type { ?Array<PhotoViewMimeTypeFileSizeFilter> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>;

    /**
     * Support showing moving photo badge.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    isMovingPhotoBadgeShown?: boolean

    /**
     * Media asset filtering configuration.
     *
     * @type { ?Array<OperationItem> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    assetFilter?: Array<OperationItem>;

    /**
     * Moving photo playback mode. Supports up to two modes.
     *
     * @type { ?Array<AutoPlayScene> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    autoPlayScenes?: Array<AutoPlayScene>;    

    /**
     * Grid pinch mode.
     *
     * @type { ?GridPinchMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    gridPinchMode?: GridPinchMode;

    /**
     * Initial state for global moving photos.
     * Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration.
     * Defaults to MOVING_PHOTO_ENABLE, which enables the dynamic effect.
     *
     * @type { ?MovingPhotoBadgeStateType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    globalMovingPhotoState?: MovingPhotoBadgeStateType;

    /**
     * Display date information when dragging the scrollbar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    showDateOnScrollbar?: boolean;
  }

  /**
   * Enumerates the types of the moving photo badge.
   *
   * @enum { int } MovingPhotoBadgeStateType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  export enum MovingPhotoBadgeStateType {
    /**
     * NOT_MOVING_PHOTO indicates that non-moving photos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_MOVING_PHOTO = 0,
    /**
     * MOVING_PHOTO_ENABLED indicates that the motion photo effect is activated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    MOVING_PHOTO_ENABLED = 1,
    /**
     * MOVING_PHOTO_DISABLED indicates that the motion photo effect is deactivated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    MOVING_PHOTO_DISABLED =	2
  }

  /**
   * Media file filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 24 static
   */
  class MimeTypeFilter {
    /**
     * Indicates the media file type to be filtered.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    mimeTypeArray: Array<string>;
  }

  /**
   * Media file size filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 24 static
   */
    class FileSizeFilter {
      /**
       * Specifing filter operator.
       *
       * @type { FilterOperator }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      filterOperator: FilterOperator;

      /**
       * Specifing the size of files to be filtered.
       *
       * @type { long }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      fileSize: long;

      /**
       * Specifing the upper limit of file size to be filtered.
       *
       * @type { ?long }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      extraFileSize?: long;
    }

  /**
   * Media file video duration filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 24 static
   */
  class VideoDurationFilter {
      /**
       * Specifing filter operator.
       *
       * @type { FilterOperator }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      filterOperator: FilterOperator;

      /**
       * Specifing the video duration of files to be filtered.
       *
       * @type { int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      videoDuration: int;

      /**
       * Specifing the upper limit of video duration to be filtered.
       *
       * @type { ?int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 19 dynamic
       * @since 24 static
       */
      extraVideoDuration?: int;
  }

  /**
   * Media file type and size combined filtering configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 24 static
   */
    class PhotoViewMimeTypeFileSizeFilter {
      /**
       * Specifing filter Type.
       *
       * @type { PhotoViewMIMETypes }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 20 dynamic
       * @since 24 static
       */
      photoViewMimeType: PhotoViewMIMETypes;

      /**
       * Specifing file size filtering configuration.
       *
       * @type { FileSizeFilter }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @atomicservice
       * @since 20 dynamic
       * @since 24 static
       */
      sizeFilter: FileSizeFilter;
    }

    /**
     * Indicates possible value types
     * 
     * @typedef { long | double | string | boolean } OperationValueType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    export type OperationValueType = long | double | string | boolean;

    /**
     * Operation item
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    export class OperationItem {
      /**
       * The type of the operation
       * 
       * @type { OperationType }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @stagemodelonly
       * @atomicservice
       * @since 22 dynamic
       * @since 24 static
       */
      operationType: OperationType;

      /**
       * The field of the operation.
       * 
       * @type { ?PhotoKeys }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @stagemodelonly
       * @atomicservice
       * @since 22 dynamic
       * @since 24 static
       */
      field?: PhotoKeys;

      /**
       * The value of the operation. The value length follows operationType-specific limit N (max 10),
       * truncated to first N if exceeded.
       * 
       * @type { ?Array<OperationValueType> }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @stagemodelonly
       * @atomicservice
       * @since 22 dynamic
       * @since 24 static
       */
      value?: Array<OperationValueType>;
  }

  /**
   * Request read permission result
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export class RequestReadPermissionResult {
    /**
    * The list of authorized URI.
    *
    * @type { ?Array<string> }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    authorizedUris?: Array<string>;

    /**
    * The list of invalid URI.
    *
    * @type { ?Array<string> }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    invalidUris?: Array<string>;
  }
  
  /**
   * Grid pinch mode
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export class GridPinchMode {
    /**
    * The type of grid pinch mode.
    *
    * @type { ?GridPinchModeType }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    gridPinchModeType?: GridPinchModeType;

    /**
    * The default grid level.
    *
    * @type { ?GridLevel }
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    defaultGridLevel?: GridLevel;
  }

  /**
   * PhotoSelectOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * PhotoSelectOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * PhotoSelectOptions extends base class BaseSelectOptions
   *
   * @extends BaseSelectOptions
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  class PhotoSelectOptions extends BaseSelectOptions {
    /**
     * Support editing photos.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    isEditSupported?: boolean;

    /**
     * Support select original photo or not
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    isOriginalSupported?: boolean;

    /**
     * SubWindow name
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    subWindowName?: string;

    /**
     * Theme color
     *
     * @type { ?CustomColors }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 24 static
     */
    themeColor?: CustomColors;

    /**
     * Complete button text
     *
     * @type { ?CompleteButtonText }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 24 static
     */
    completeButtonText?: CompleteButtonText;

    /**
     * user id
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 24 static
     */
    userId?: int;

     /**
     * Context recovery information for restoring the last selection session.
     *
     * @type { ?ContextRecoveryInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    contextRecoveryInfo?: ContextRecoveryInfo;

    /**
     * Support destruction with navigation.
     * 
     * @type {?boolean}
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    isDestroyedWithNavigation?: boolean;

    /**
     * Support setting the max photo select number.
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    maxPhotoSelectNumber?: int;

    /**
     * Support setting the max video select number.
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    maxVideoSelectNumber?: int;

    /**
     * In single selection mode, supports returning to the photo browser page after taking and confirming a photo.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    isReturnToPhotoBrowserEnabled?: boolean;
  }

  /**
   * Defines the image recommendation options.
   * The image recommendation feature depends on the image data analysis capability, which varies with devices.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 24 static
   */
  class RecommendationOptions {
    /**
     * Type of the recommended image.
     *
     * @type { ?RecommendationType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 24 static
     */
    recommendationType?: RecommendationType;

    /**
     * Text based on which images are recommended.
     * If both recommendationType and textContextInfo are set, textContextInfo takes precedence over recommendationType.
     *
     * @type { ?TextContextInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    textContextInfo?: TextContextInfo;

    /**
     * List of recommended image types.
     *
     * @type { ?Array<RecommendationType> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    recommendationTypeList?: Array<RecommendationType>;

    /**
     * This configuration takes effect only when `RecommendationTypeList` is set.
     * When enabled, the Picker will directly display the corresponding recommended photos upon opening.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultRecommendationType?: RecommendationType;
  }

  /**
   * Represents the text information about the recommended images.
   *
   * @interface TextContextInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  interface TextContextInfo {
    /**
     * Text based on which images are recommended.
     * The text cannot exceed 250 characters. The default value is an empty string.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    text?: string;
  }

  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  class PhotoSelectResult {
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
     * For details about how to use the media file URI, see Using a Media File URI.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    photoUris: Array<string>;

    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Whether the selected media asset is the original image.
     * The value true means that the selected media asset is the original image, and false means the opposite.
     * The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    isOriginalPhoto: boolean;

    /**
     * Contextual information about the PhotoPicker's exit state.
     *
     * @type { ContextRecoveryInfo }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    contextRecoveryInfo: ContextRecoveryInfo;

    /**
     * Moving photo badge states for the selected media files in the gallery.
     * When isMovingPhotoBadgeShown is true, movingPhotoBadgeStates contains the moving photo states;
     * otherwise, it is empty.
     *
     * @type { Array<MovingPhotoBadgeStateType> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    movingPhotoBadgeStates: Array<MovingPhotoBadgeStateType>;
  }

  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10
   */
  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides APIs for the user to select images and videos.
   * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  class PhotoViewPicker {
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
     * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;

    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { PhotoSelectOptions } option - represents the options provided in select mode.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pull up the photo picker based on the selection mode.
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    select(callback: AsyncCallback<PhotoSelectResult>): void;
  }

  /**
   * Represents the edited media asset data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetEditData {
    /**
     * Constructor.
     *
     * @param { string } compatibleFormat - Format of the edited data.
     * @param { string } formatVersion - Version of the data format.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(compatibleFormat: string, formatVersion: string);

    /**
     * Compatible format
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    compatibleFormat: string;

    /**
     * Format version
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formatVersion: string;

    /**
     * Edit data
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    data: string;
  }

  /**
   * Enumerates the types of the resources to write.
   *
   * @enum { int } ResourceType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceType {
    /**
     * Image resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_RESOURCE = 1,

    /**
     * Video resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_RESOURCE = 2,

    /**
     * Photo proxy
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTO_PROXY = 3,

    /**
     * Private moving photo resource
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_RESOURCE = 4,

    /**
     * Private moving photo metadata
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_METADATA = 5
  }

  /**
   * Enumerates the types of image files to save.
   *
   * @enum { int } ImageFileType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum ImageFileType {
    /**
     * JPEG
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    JPEG = 1,

    /**
     * HEIF
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    HEIF = 2
  }

  /**
   * Enumeration of moving photo effect mode.
   *
   * @enum { int } MovingPhotoEffectMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum MovingPhotoEffectMode {
    /**
     * Default
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Bounce play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOUNCE_PLAY = 1,

    /**
     * Loop play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LONG_EXPOSURE = 3,

    /**
     * Multi exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinema graph
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    IMAGE_ONLY = 10
  }

  /**
   * Enumerates the types of segmented video enhancement.
   *
   * @enum { int } VideoEnhancementType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
  */
  enum VideoEnhancementType {
    /**
     * Apply enhancement on the device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL = 0,

    /**
     * Apply enhancement on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_CLOUD = 1,

    /**
     * Apply enhancement on both the device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL_AND_CLOUD = 2
  }

  /**
   * Enumeration type of operation.
   * 
   * @enum { int } OperationType 
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @Stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  export enum OperationType {
    /**
     * Matches fields that are equal to the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    EQUAL_TO = 1,

    /**
     * Matches fields that are not equal to the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_EQUAL_TO = 2,

    /**
     * Matches fields that are greater than the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    GREATER_THAN = 3,

    /**
     * Matches fields that are less than the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    LESS_THAN = 4,

    /**
     * Matches fields that are greater than or equal to the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    GREATER_THAN_OR_EQUAL_TO = 5,

    /**
     * Matches fields that are less than or equal to the specified value. The value length is limited to 1.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    LESS_THAN_OR_EQUAL_TO = 6,

    /**
     * Equivalent to the "AND" operator in SQL. No field or value parameters required.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    AND = 7,
    
    /**
     * Equivalent to the "OR" operator in SQL. No field or value parameters required.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    OR = 8,

    /**
     * Matches fields within the specified range. The value length is limited to 10.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    IN = 9,

    /**
     * Matches fields outside the specified range. The value length is limited to 10.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_IN = 10,

    /**
     * Used to add a left parenthesis to the predicate, equivalent to the "(" in SQL.
     * Must be used together with a right parenthesis. No field or value parameters required.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    BEGIN_WRAP = 11,

    /**
     * Used to add a right parenthesis to the predicate, equivalent to the ")" in SQL.
     * Must be used together with a left parenthesis. No field or value parameters required.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    END_WRAP = 12,

    /**
     * Matches fields within the specified range. The interval is inclusive of both endpoints (closed interval).
     * The value length is limited to 2, representing the left and right boundaries.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    BETWEEN = 13,

    /**
     * Matches fields outside the specified range. The interval is exclusive of both endpoints (open interval).
     * The value length is limited to 2, representing the left and right boundaries.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    NOT_BETWEEN = 14,
  }

  /**
   * Defines the interface of media change request.
   *
   * @interface MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string
  }

  /**
   * Defines the class of media asset change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetChangeRequest implements MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * Constructor used to initialize an asset change request.
     *
     * @param { PhotoAsset } asset - Assets to change.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Constructor used to initialize an asset change request.
     *
     * @param { PhotoAsset } asset - Assets to change.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(asset: PhotoAsset);

    /**
     * Creates an image asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Creates an image asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * Creates an image asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset,
     *     which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance,
     *     if the operation fails, returns null
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800101 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null;

    /**
     * Creates a video asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the video asset, which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * Creates a video asset change request.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the video asset,
     *     which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance.
     *     if the operation fails, returns null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800101 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null;

    /**
     * Creates an asset change request with the specified file name.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } [options] - Options for creating an image or video asset.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest;

    /**
     * Creates an asset change request with the specified file name.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } [options] - Options for creating an image or video asset.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance.
     *     if the operation fails, returns null
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800102 - The format or length of the display name does not meet the specifications.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest | null;

    /**
     * Create an asset change request based on the file type and filename extension.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
     * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest;

    /**
     * Create an asset change request based on the file type and filename extension.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset,
     *     for example, {title: 'testPhoto'}.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance,
     *     if the operation fails, returns null
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest | null;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of assets to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    static deleteAssets(context: Context, uriList: Array<string>): Promise<void>;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     1. context is null or invalid; 2. The uri format is incorrect or does not exist.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    static deleteAssetsToTrashWithUris(context: Context, uriList: Array<string>): Promise<void>;

    /**
     * Get the asset.
     *
     * @returns { PhotoAsset } - Returns the asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Obtains the asset in this asset change request.
     *
     * @returns { PhotoAsset } - Returns the asset
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getAsset(): PhotoAsset;

    /**
     * Obtains the asset in this asset change request.
     *
     * @returns { PhotoAsset | null } - Returns the asset. if the operation fails, returns null.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    getAsset(): PhotoAsset | null;

    /**
     * Set favorite state of the asset.
     *
     * @param { boolean } favoriteState - true: Put the asset into favorite album; false: Remove the asset from favorite album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Set hidden state of the asset.
     *
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setHidden(hiddenState: boolean): void;

    /**
     * Set user comment of the asset.
     *
     * @param { string } userComment - user comment info
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setUserComment(userComment: string): void;

    /**
     * Sets location information.
     *
     * @param { double } longitude - Longitude.
     * @param { double } latitude - Latitude.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setLocation(longitude: double, latitude: double): void;

    /**
     * Sets the media asset title.
     *
     * @param { string } title - Title to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * Sets the media asset title.
     *
     * @param { string } title - Title to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setTitle(title: string): void;

    /**
     * Saves the edited data of an asset.
     *
     * @param { MediaAssetEditData } editData - Edited data to save.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setEditData(editData: MediaAssetEditData): void;

    /**
     * Obtains the handler used for writing a file to cache.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<int> } Returns the write cache handler
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getWriteCacheHandler(): Promise<int>;

    /**
     * Adds a resource using fileUri.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { string } fileUri - Data source of the resource to be added, which is specified by a URI in the application sandbox directory.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, fileUri: string): void;

    /**
     * Adds a resource using ArrayBuffer data.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { ArrayBuffer } data - Data of the resource to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, data: ArrayBuffer): void;

    /**
     * Adds resources using PhotoProxy data.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { PhotoProxy } proxy - PhotoProxy data of the resource to add.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, proxy: PhotoProxy): void;

    /**
     * Sets the Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the screen off.
     *
     * @param { string } cameraShotKey - Key for the Ultra Snapshot feature.
     * <br>This parameter is available only for the system camera, and the key value is defined by the system camera.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setCameraShotKey(cameraShotKey: string): void;

    /**
     * Saves the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    saveCameraPhoto(): void;

    /**
     * Saves the photo taken by the camera.
     *
     * @param { ImageFileType } imageFileType - File type of the photo to save.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    saveCameraPhoto(imageFileType: ImageFileType): void;

    /**
     * Discards the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    discardCameraPhoto(): void;

    /**
     * Sets the effect of this moving photo.
     *
     * @param { MovingPhotoEffectMode } mode - Effect to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setEffectMode(mode: MovingPhotoEffectMode): void;

    /**
     * Sets the orientation of this image.
     *
     * @param { int } orientation - Rotation angle of the image to set. The value can only be 0, 90, 180, or 270.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    setOrientation(orientation: int): void;

    /**
     * Set video enhancement attribute
     *
     * @param { VideoEnhancementType } videoEnhancementType - The type of video enhancement
     * @param { string } photoId - The photo id of video
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
    */
    setVideoEnhancementAttr(videoEnhancementType: VideoEnhancementType, photoId: string): void;

    /**
     * Sets the watermark type supported by photos.
     *
     * @param { WatermarkType } watermarkType - Watermark type to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setSupportedWatermarkType(watermarkType: WatermarkType): void;

    /**
     * Adds a resource using fileUri from file management directory
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { ResourceType } type - Type of the resource to add.
     * @param { string } fileUri - Data source of the resource to be added,
     *     which is specified by a URI in the application sandbox directory.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     1. The file corresponding to the URI is not in the app sandbox. 2. ResourceType must be image or video
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes: 1. The database is corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    addResourceForPicker(type: ResourceType, fileUri: string): void;


    /**
     * Permanently deletes photos or videos in batches. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of images or videos to be permanently deleted.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static deleteLocalAssetsPermanently(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * Delete local assets permanently from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { Array<string> } assetUris - Uris of the assets to be deleted permanently
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    static deleteLocalAssetsPermanentlyWithUri(context: Context, assetUris: Array<string>): Promise<void>;

    /**
     * Delete local assets to trash from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { string[] } assetUris - Uris of the assets to be deleted
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The context is empty;
     *     2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1.Database corrupted; 2.The file system is abnormal; 3.The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    static deleteLocalAssetsWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * Delete cloud assets to trash from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { string[] } assetUris - Uris of the assets to be deleted
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The context is empty;
     *     2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    static deleteCloudAssetsWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * Delete assets without trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     *     <br>Hap context information
     * @param { string[] } assetUris - Uris of the assets to be deleted
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by nonsystem application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The context is empty;
     *     2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    static deleteAssetsPermanentlyWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * Set the AppLink state of this asset.
     *
     * @param { int } hasAppLink - AppLink state of the asset to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.Possible causes:
     * The input parameter is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    setHasAppLink(hasAppLink: int): void;

    /**
     * Set the AppLink state of this asset.
     *
     * @param { AppLinkState } appLinkState - Boomerang status of assets
     * @throws { BusinessError } 202 - Invoked by non-system applications
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     The input parameter is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAppLinkState(appLinkState: AppLinkState): void;

    /**
     * Set the AppLink info of this asset.
     *
     * @param { string } appLink - AppLink info of the asset to set.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.Possible causes:
     * The input parameter's length is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    setAppLinkInfo(appLink: string): void;

    /**
     * Sets display mode for the composite photos.
     *
     * @param { CompositeDisplayMode } compositeDisplayMode - CompositeDisplayMode type to set.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     1. The compositeDisplayMode is not within the supported range.
     *     2. The original file does not exist locally in PhotoAsset.
     *     3. The PhotoAsset is not composite Asset
     *     4. The original file format is not within the supported range.
     *     5. The original file has been edited.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    setCompositeDisplayMode(compositeDisplayMode: CompositeDisplayMode): Promise<void>;
  }

  /**
   * Defines the class of media assets change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetsChangeRequest implements MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * Constructor.
     *
     * @param { Array<PhotoAsset> } assets - Assets to change.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(assets: Array<PhotoAsset>);

    /**
     * Set favorite state of the assets.
     *
     * @param { boolean } favoriteState - true: Put the assets into favorite album; false: Remove the assets from favorite album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Set hidden state of the assets.
     *
     * @param { boolean } hiddenState - true: Put the assets into hidden album; false: Recover the assets from hidden album.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setHidden(hiddenState: boolean): void;

    /**
     * Set user comment of the assets.
     *
     * @param { string } userComment - user comment info
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setUserComment(userComment: string): void;

    /**
     * Sets whether this asset is displayed in the Recent list.
     *
     * @param { boolean } isRencentShow - Whether this asset is displayed in the Recent list.
     * <br>The value true means this asset is displayed in the Recent list, and false means the opposite.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setIsRecentShow(isRencentShow: boolean): void;
  }

  /**
   * Defines the class of media album change request.
   *
   * @implements MediaChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAlbumChangeRequest implements MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * The constructor to create a MediaAlbumChangeRequest instance.
     *
     * @param { Album } album - Specify which album to change
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * Creates a MediaAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @returns { MediaAlbumChangeRequest } - Returns a MediaAlbumChangeRequest instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    static createAlbumRequest(context: Context, name: string): MediaAlbumChangeRequest;

    /**
     * Creates a MediaAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @returns { MediaAlbumChangeRequest | null } - Returns a MediaAlbumChangeRequest instance.
     *     if the operation fails, returns null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static createAlbumRequest(context: Context, name: string): MediaAlbumChangeRequest | null;

    /**
     * Deletes albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static deleteAlbums(context: Context, albums: Array<Album>): Promise<void>;

    /**
     * Delete albums With Uri.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { Array<string> } albumUris - Uris of albums to delete
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    static deleteAlbumsWithUri(context: Context, albumUris: Array<string>): Promise<void>;

    /**
     * Set albums cloud or hdc upload status
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Hap context information
     * @param { Album[] } albums - Album array which will to be set cloud or hdc upload status
     * @param { boolean } allowUpload - True means upload these albums and their assets to cloud or hdc
     *     , false means do not upload these albums and their assets to cloud or hdc
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     1. The context is empty;
     *     2. Album array size is bigger than 500.
     * @throws { BusinessError } 23800301  - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1.Database corrupted; 2.The file system is abnormal; 3.The IPC request timed out;
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    static setUploadStatus(context: Context, albums: Album[], allowUpload: boolean): Promise<void>;

    /**
     * Obtains the album in the current album change request.
     *
     * @returns { Album } - Returns the album
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    getAlbum(): Album;

    /**
     * Obtains the album in the current album change request.
     *
     * @returns { Album | null } - Returns the album, if the operation fails, returns null
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    getAlbum(): Album | null;

    /**
     * Sets the album cover.
     *
     * @param { string } coverUri - URI of the file to be set as the album cover.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setCoverUri(coverUri: string): void;

    /**
     * Sets the album name.
     *
     * @param { string } name - Album name to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAlbumName(name: string): void;

    /**
     * Add assets to the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    addAssets(assets: Array<PhotoAsset>): void;

    /**
     * Removes assets from the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to remove.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    removeAssets(assets: Array<PhotoAsset>): void;

    /**
     * Moves assets to another album.
     *
     * @param { Array<PhotoAsset> } assets - Assets to move.
     * @param { Album } targetAlbum - Album to which the assets are to be moved.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    moveAssets(assets: Array<PhotoAsset>, targetAlbum: Album): void;

    /**
     * Move assets to the target album.
     *
     * @param { Array<string> } assetUris - Uris of assets to move
     * @param { Album } targetAlbum - target album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    moveAssetsWithUri(assetUris: Array<string>, targetAlbum: Album): void;

    /**
     * Recovers assets from the trash.
     *
     * @param { Array<PhotoAsset> } assets - Assets to recover.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    recoverAssets(assets: Array<PhotoAsset>): void;

    /**
     * Recover assets from the trash album.
     *
     * @param { Array<string> } assetUris - Uris of assets to recover
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    recoverAssetsWithUri(assetUris: Array<string>): void;

    /**
     * Permanently deletes assets from the trash.
     *
     * @param { Array<PhotoAsset> } assets - Assets to be permanently deleted.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    deleteAssets(assets: Array<PhotoAsset>): void;

    /**
     * Delete assets permanently from the trash album.
     *
     * @param { Array<string> } assetUris - Uris of assets to be deleted permanently
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    deleteAssetsWithUri(assetUris: Array<string>): void;

    /**
     * Set portrait album to me
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setIsMe(): void;

    /**
     * Set display level of the portrait album
     *
     * @param { int } displayLevel - The level of display interface for portrait albums, such as homepage and more pages
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setDisplayLevel(displayLevel: int): void;

    /**
     * Remove assets from the smart album
     *
     * @param { Array<PhotoAsset> } assets - Assets to remove.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    dismissAssets(assets: Array<PhotoAsset>): void;

    /**
     * Merge two portrait albums
     *
     * @param { Album } target - Album generated after the merge. The album must be renamed.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    mergeAlbum(target: Album): void;

    /**
     * Places this album before an album.
     *
     * @param { Album } album - Target album. To place this album to the end, set album to null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    placeBefore(album: Album): void;

    /**
     * Removes this group photo album.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dismiss(): void;

    /**
     * Resets the cover.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     * <br>Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    resetCoverUri(): void;
  }

  /**
   * Defines the shared photo asset
   *
   * @interface SharedPhotoAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface SharedPhotoAsset {
    /**
     * File id of photo asset
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    fileId: int;
    /**
     * URI of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Path data of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    data: string;
    /**
     * Media type of photo asset
     *
     * @type { PhotoType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;
    /**
     * Display name of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    displayName: string;
    /**
     * Size of photo asset
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * Added date of photo asset
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAdded: long;
    /**
     * Modify date of photo asset
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModified: long;
    /**
     * Duration of video photo asset
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    duration: int;
    /**
     * Width of photo asset
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Height of photo asset
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    height: int;
    /**
     * DateTaken of photo asset
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTaken: long;
    /**
     * Orientation of photo asset
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * Favorite state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isFavorite: boolean;
    /**
     * Title of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * Position of photo asset
     *
     * @type { PositionType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    position: PositionType;
    /**
     * Trashed date of photo asset
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashed: long;
    /**
     * Hidden state of photo asset
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    hidden: boolean;
    /**
     * User comment info of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    userComment: string;
    /**
     * Camera shot key of photo asset
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cameraShotKey: string;
    /**
     * The year of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateYear: string;
    /**
     * The month of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateMonth: string;
    /**
     * The day of the file created
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateDay: string;
    /**
     * Pending state of the asset, true means asset is pending
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    pending: boolean;
    /**
     * Added date of photo asset in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAddedMs: long;
    /**
     * Modified time of the asset in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModifiedMs: long;
    /**
     * Trashed time of the asset in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;
    /**
     * Subtype of photo asset
     *
     * @type { PhotoSubtype }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    subtype: PhotoSubtype;
    /**
     * Effect mode of moving photo
     *
     * @type { MovingPhotoEffectMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the asset
     *
     * @type { DynamicRangeType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Ready state of thumbnail
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thumbnailReady: boolean;
    /**
     * Width and height information of lcd picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    lcdSize: string;
    /**
     * Width and height information of thumbnail picture
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thmSize: string;
    /**
     * modified time of thumbnail status
     *
     * @type { ?long }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    thumbnailModifiedMs?: long;
    /**
     * visibility of thumbnails
     *
     * @type { ThumbnailVisibility }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * Defines the shared album asset
   *
   * @interface SharedAlbumAsset
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
    interface SharedAlbumAsset {
      /**
       * album id of album asset
       *
       * @type { int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      albumId: int;
      /**
       * type of album asset
       *
       * @type { AlbumType }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      albumType: AlbumType;
      /**
       * subtype of album asset
       *
       * @type { AlbumSubtype }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      albumSubType: AlbumSubtype;
      /**
       * album name
       *
       * @type { string }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      albumName: string;
      /**
       * uri of album cover
       *
       * @type { string }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      coverUri: string;
      /**
       * number of assets in this album
       *
       * @type { int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      count: int;
      /**
       * number of photo assets in this album
       *
       * @type { int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      imageCount: int;
      /**
       * number of video assets in this album
       *
       * @type { int }
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      videoCount: int;
    }

  /**
   * Provides APIs for managing a moving photo instance.
   *
   * @interface MovingPhoto
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface MovingPhoto {
    /**
     * Requests the image data and video data of this moving photo and writes them to the specified URIs, respectively.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } imageFileUri - URI to which the image data of the moving photo is to be written.
     * @param { string } videoFileUri - URI to which the video data of the moving photo is to be written.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(imageFileUri: string, videoFileUri: string): Promise<void>;

    /**
     * Requests the moving photo content of the specified resource type and writes it to the specified URI.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @param { string } fileUri - URI to which the moving photo content is to be written.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(resourceType: ResourceType, fileUri: string): Promise<void>;

    /**
     * Requests the moving photo content of the specified resource type and returns it in ArrayBuffer format.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @returns { Promise<ArrayBuffer> } Returns array buffer of the content
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(resourceType: ResourceType): Promise<ArrayBuffer>;

    /**
     * Obtains the URI of this moving photo.
     *
     * @returns { string } Returns uri of the moving photo
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getUri(): string;

    /**
     * Obtains the URI of this moving photo.
     *
     * @returns { string | null } Returns uri of the moving photo, if the operation fails, returns null
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    getUri(): string | null;

    /**
     * Check whether the video of the moving photo is ready.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise used to return the check result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isVideoReady(): Promise<boolean>;
  }

  /**
   * Enumerates the types of the highlights album information.
   *
   * @enum { int } HighlightAlbumInfoType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightAlbumInfoType {
    /**
     * Cover information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COVER_INFO = 0,
    /**
     * Music information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PLAY_INFO = 1,
    /**
     * Highlight Album information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    ALBUM_INFO = 2
  }

  /**
   * Enumerates the user behavior types of the highlights album.
   *
   * @enum { int } HighlightUserActionType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightUserActionType {
    /**
     * Number of inserted pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INSERTED_PIC_COUNT = 0,
    /**
     * Number of removed pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REMOVED_PIC_COUNT,
    /**
     * Number of times that a full-length image in a highlights album is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_SCREENSHOT_COUNT,
    /**
     * Number of times that a highlights cover is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_COVER_COUNT,
    /**
     * Number of times that a highlights album is renamed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENAMED_COUNT,
    /**
     * Number of times that a cover is changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CHANGED_COVER_COUNT,
    /**
     * Number of times that the pictures in a highlights album are played.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_TIMES = 100,
    /**
     * Time used to play the pictures in a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_DURATION,
    /**
     * Number of times that a highlights album is viewed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_TIMES,
    /**
     * Time used to view a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_DURATION
  }

  /**
   * Enumerates the types of the highlights album attribute which can be set.
   *
   * @enum { number } HighlightAlbumChangeAttribute
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   */
  enum HighlightAlbumChangeAttribute {
    /**
     * The highlight has been viewed or not.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    IS_VIEWED = 0,

    /**
     * Time of this highlight notification.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    NOTIFICATION_TIME = 1,

    /**
     * Favorite of this highlight album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    IS_FAVORITE = 2
  }

  /**
   * Enumerates thumbnail types.
   *
   * @enum { int } ThumbnailType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum ThumbnailType {
    /**
     * LCD thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    LCD = 1,
    /**
     * THM thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THM = 2
  }

  /**
   * Defines the class of media analysis album change request.
   *
   * @extends MediaAlbumChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
   class MediaAnalysisAlbumChangeRequest extends MediaAlbumChangeRequest {
    /**
     * The constructor to create a MediaAnalysisAlbumChangeRequest instance.
     *
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * Set order positions of assets in the album
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album for which the sequence needs to be set.
     * @param { Array<int> } position - Sequence of assets in the album.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setOrderPosition(assets: Array<PhotoAsset>, position: Array<int>): void;

    /**
     * Set the relationship in the album with the phone owner
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } relationship - The relationship with the phone owner
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     * <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
     setRelationship(relationship: string): Promise<void>;

    /**
     * Creates a MediaAnalysisAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @returns { MediaAnalysisAlbumChangeRequest | null} - Returns a MediaAnalysisAlbumChangeRequest instance.
     *     If the operation fails, returns null.
     * @throws {BusinessError } 202 - Called by non-system application.
     * @throws {BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws {BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2.The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    static createAnalysisAlbumRequest(
      context:Context,
      name: string,
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest | null;

    /**
     * Creates a MediaAnalysisAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @returns { MediaAnalysisAlbumChangeRequest } - Returns a MediaAnalysisAlbumChangeRequest instance.
     * @throws {BusinessError } 202 - Called by non-system application.
     * @throws {BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws {BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2.The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    static createAnalysisAlbumRequest(
      context:Context,
      name: string,
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest;

    /**
     * Sets the default analysis album cover.
     *
     * @param { string } coverUri - URI of the file to be set as the default analysis album cover.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2.The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setDefaultCoverUri(coverUri: string): void;
  }

  /**
   * Defines the class of media highlight album change request.
   *
   * @extends MediaAnalysisAlbumChangeRequest
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   */
  class MediaHighlightAlbumChangeRequest extends MediaAnalysisAlbumChangeRequest {
    /**
     * The constructor to create a MediaHighlightAlbumChangeRequest instance.
     *
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    constructor(album: Album);

    /**
     * Set attribute values of highlight album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightAlbumChangeAttribute } attribute - Highlight attribute to be set.
     * @param { string } value - Value of attribute.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
    setHighlightAttribute(attribute: HighlightAlbumChangeAttribute, value: string): void;
  }

  /**
   * Analysis album to create.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  class AnalysisAlbum {
    /**
     * The constructor to create an analysisAlbum instance.
     *
     * @param { Album } album - Album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(album: Album);
    /**
     * Obtains the sequence of assets in the Analysis album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album whose sequence needs to be obtained.
     * @returns { Promise<Array<int>> } Returns the order of positions of assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getOrderPosition(assets: Array<PhotoAsset>): Promise<Array<int>>;

    /**
     * Get the relationship in the album with the phone owner
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Returns the relationship of the album with the phone owner
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     */
     getRelationship(): Promise<string>;
  }

  /**
   * Provides APIs for managing the Highlights album, which is an automatically generated collection of memorable photos or videos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class HighlightAlbum {
    /**
     * The constructor to create a highlight instance.
     *
     * @param { Album } album - Analysis album
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * Obtains specific information about the Highlights album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { HighlightAlbumInfoType } type - Type of the album information to obtain.
     * @returns { Promise<string> } Returns highlight album info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getHighlightAlbumInfo(type: HighlightAlbumInfoType): Promise<string>;

    /**
     * Obtains the ArrayBuffer for caching the specified asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } resourceUri - URI of the asset to cache.
     * @returns { Promise<ArrayBuffer> } Returns array buffer of the content
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getHighlightResource(resourceUri: string): Promise<ArrayBuffer>;

    /**
     * Sets the user behavior data for the Highlights album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightUserActionType } type - Type of the user behavior data to set.
     * @param { int } actionData - Behavior data.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setHighlightUserActionData(type: HighlightUserActionType, actionData: int): Promise<void>;

    /**
     * Set highlight sub title
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } subTitle - Highlight sub title
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setSubTitle(subTitle: string): Promise<void>;

    /**
     * Deletes highlight albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Array of highlight albums to delete.
     * @returns { Promise<int> } Returns result of delete highlight album
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static deleteHighlightAlbums(context: Context, albums: Array<Album>): Promise<int>;
  }

  /**
   * Enumerates the cloud enhancement task states, which are returned by CloudEnhancementTaskState.
   *
   * @enum { int } CloudEnhancementTaskStage
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementTaskStage {
    /**
     * The cloud enhancement task is abnormal.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXCEPTION = -1,
    /**
     * The cloud enhancement task is being prepared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_PREPARING,
    /**
     * The cloud enhancement task is uploading data.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_UPLOADING,
    /**
     * The cloud enhancement task is being executed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXECUTING,
    /**
     * The cloud enhancement task is downloading data.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_DOWNLOADING,
    /**
     * The cloud enhancement task failed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_FAILED,
    /**
     * The cloud enhancement task is complete.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_COMPLETED
  }

  /**
   * Represents the cloud enhancement task information,
   * which includes the cloud enhancement task state and other information related to certain states.
   *
   * @interface CloudEnhancementTaskState
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface CloudEnhancementTaskState {
    /**
     * Indicates the cloud enhancement task stage.
     *
     * @type { CloudEnhancementTaskStage }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly taskStage: CloudEnhancementTaskStage;
    /**
     * Indicates the transferred file size.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly transferredFileSize?: int;
    /**
     * Indicates the total file size.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly totalFileSize?: int;
    /**
     * Indicates the expected duration of cloud enhancement queue time.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly expectedDuration?: int;
    /**
     * Status code when failed in cloud enhancement.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly statusCode?: int;
  }

  /**
   * Provides APIs for cloud enhancement management,
   * including managing the tasks of generating AI-powered cloud enhancement photos
   * and obtaining the association between the original photos and AI cloud enhancement photos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  class CloudEnhancement {
    /**
     * Obtains a cloud enhancement instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudEnhancement } Returns cloud enhancement instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     */
    static getCloudEnhancementInstance(context: Context): CloudEnhancement;

    /**
     * Obtains a cloud enhancement instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudEnhancement | null } Returns cloud enhancement instance, if the operation fails, returns null
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
 	  static getCloudEnhancementInstance(context: Context): CloudEnhancement | null;

    /**
     * Submits cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - PhotoAsset to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud enhancement watermark to the enhanced images.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    submitCloudEnhancementTasks(photoAssets: Array<PhotoAsset>, hasCloudWatermark: boolean): Promise<void>;

    /**
     * Submits cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - PhotoAsset to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud watermark to the enhanced image.
     * The value true means to add the watermark, and false means the opposite.
     * @param { int } [triggerMode] - Trigger mode of the cloud enhancement task.
     * 0: manually triggered. 1: automatically triggered. The default value is 0.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    submitCloudEnhancementTasks(
      photoAssets: Array<PhotoAsset>,
      hasCloudWatermark: boolean,
      triggerMode?: int
    ): Promise<void>;

    /**
     * Prioritizes a cloud enhancement task.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - PhotoAsset whose cloud enhancement priority needs to be escalated.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    prioritizeCloudEnhancementTask(photoAsset: PhotoAsset): Promise<void>;

    /**
     * Cancels cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - Array of PhotoAssets whose cloud enhancement tasks are to be canceled.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cancelCloudEnhancementTasks(photoAssets: Array<PhotoAsset>): Promise<void>;

    /**
     * Cancels all cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cancelAllCloudEnhancementTasks(): Promise<void>;

    /**
     * Queries information about a cloud enhancement task.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - PhotoAsset whose cloud enhancement task information is to be queried.
     * @returns { Promise<CloudEnhancementTaskState> } Returns cloud enhancement task state
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    queryCloudEnhancementTaskState(photoAsset: PhotoAsset): Promise<CloudEnhancementTaskState>;

    /**
     * Synchronizes the cloud enhancement task status.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    syncCloudEnhancementTaskStatus(): Promise<void>;

    /**
     * Obtains the photo after cloud enhancement.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - PhotoAsset whose cloud enhancement photo is to be obtained.
     * @returns { Promise<PhotoAsset> } Returns cloud-enhanced asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getCloudEnhancementPair(asset: PhotoAsset): Promise<PhotoAsset>;
  }

  /**
   * Enumerates the cloud enhancement states.
   *
   * @enum { int } CloudEnhancementState
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementState {
    /**
     * Cloud enhancement is unavailable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 0,
    /**
     * Cloud enhancement is available.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    AVAILABLE,
    /**
     * Cloud enhancement is being executed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    EXECUTING,
    /**
     * Cloud enhancement has been completed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    COMPLETED
  }

  /**
   * Enumerates the statuses of tasks used for downloading cloud media assets.
   *
   * @enum { int } CloudMediaAssetTaskStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaAssetTaskStatus {
    /**
     * The task is in progress.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOADING = 0,
    /**
     * The task is paused.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    PAUSED = 1,
    /**
     * There is no download task.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    IDLE = 2
  }

  /**
   * Enumerates the reasons why a cloud media asset download task is paused.
   *
   * @enum { int } CloudMediaTaskPauseCause
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaTaskPauseCause {
    /**
     * The device temperature is excessively high.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NO_PAUSE = 0,
    /**
     * The device temperature is excessively high.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    TEMPERATURE_LIMIT = 1,
    /**
     * Network traffic is restricted, and Wi-Fi is not available.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    ROM_LIMIT = 2,
    /**
     * Network traffic is restricted, and Wi-Fi is not available.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NETWORK_FLOW_LIMIT = 3,
    /**
     * Power usage is restricted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 4,
    /**
     * Power usage is restricted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    POWER_LIMIT = 5,
    /**
     * The device is not in charging screen-off mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUND_TASK_UNAVAILABLE = 6,
    /**
     * The user is making requests too frequently.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 7,
    /**
     * There is an error with the cloud service.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    CLOUD_ERROR = 8,
    /**
     * The download has been paused by the user.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    USER_PAUSED = 9
  }

  /**
   * Describes the details of a cloud media asset download task.
   * It is the return value of the API used by applications to obtain the cloud asset download task status.
   *
   * @interface CloudMediaAssetStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface CloudMediaAssetStatus {
    /**
     * Status of the download task.
     *
     * @type { CloudMediaAssetTaskStatus }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskStatus: CloudMediaAssetTaskStatus;
    /**
     * Total number of and size (measured in bytes) of the assets that have been downloaded,
     * and the total number and size (also measured in bytes) of the assets remaining to be downloaded.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskInfo: string;
    /**
     * Reason why the download task is suspended.
     *
     * @type { CloudMediaTaskPauseCause }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly errorCode: CloudMediaTaskPauseCause;
  }

  /**
   * Enumerates the types of download tasks.
   *
   * @enum { int } CloudMediaDownloadType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaDownloadType {
    /**
     * High-priority download, without the need for the device to switch to screen-off charging mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_FORCE = 0,
    /**
     * Low-priority download, demanding that device be in screen-off charging mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_GENTLE = 1
  }

  /**
   * Enumerates the modes used for deleting cloud media assets.
   *
   * @enum { int } CloudMediaRetainType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaRetainType {
    /**
     * Deletes the local metadata and thumbnail of the original files from the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    RETAIN_FORCE = 0,
    /**
     * Deletes the local metadata and thumbnail of the original files from the hdc device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDC_RETAIN_FORCE = 1
  }

  /**
   * A class used for cloud media asset management. It is used to manage download tasks for media assets stored
   * in the cloud and delete local data and files pertaining to these cloud-based assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  class CloudMediaAssetManager {
    /**
     * Obtains a CloudMediaAssetManager instance.
     *
     * @param { Context } context - Obtains a CloudMediaAssetManager instance.
     * @returns { CloudMediaAssetManager } Returns cloud media asset manager instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager;

    /**
     * Obtains a CloudMediaAssetManager instance.
     *
     * @param { Context } context - Obtains a CloudMediaAssetManager instance.
     * @returns { CloudMediaAssetManager | null } Returns cloud media asset manager instance,
     *     if the operation fails, returns null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager | null;

    /**
     * Starts or resumes a task to download cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaDownloadType } downloadType - Type of the download task.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    startDownloadCloudMedia(downloadType: CloudMediaDownloadType): Promise<void>;

    /**
     * Suspends a task that downloads cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    pauseDownloadCloudMedia(): Promise<void>;

    /**
     * Cancels a task that downloads cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    cancelDownloadCloudMedia(): Promise<void>;

    /**
     * Deletes local metadata and files of cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaRetainType } retainType - Mode for deleting cloud media assets.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    retainCloudMediaAsset(retainType: CloudMediaRetainType): Promise<void>;

    /**
     * Obtains the status of a task that downloads cloud media assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<CloudMediaAssetStatus> } Returns cloud media asset status
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getCloudMediaAssetStatus(): Promise<CloudMediaAssetStatus>;

    /**
     * Start download cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] } assetUris - Asset uris which will download
     * @returns { Promise<Map<string, CloudAssetDownloadCode>> } Returns start task result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     1. The assetUris is empty;
     *     2. The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    /**
     * Start downloading cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] } assetUris - List of URIs to be downloaded.
     * @param { int } [taskSequence] - Task sequence set by the application.
     * @returns { Promise<Map<string, CloudAssetDownloadCode>> } Youdo not have the permission.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The assetUris array is empty;
     *     2. The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    startDownloadSpecificCloudMedia(assetUris: string[], taskSequence?: int): Promise<Map<string, CloudAssetDownloadCode>>;

    /**
     * Set the network policy for downloading cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] } assetUris - List of asset URIs to be downloaded
     * @param { CloudDownloadNetworkPolicy } networkPolicy - network policy
     * @returns { Promise<void> } Returnnull
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The assetUris array is empty;
     *     2. The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    setDownloadSpecificCloudMediaNetworkPolicy(assetUris: string[], networkPolicy: CloudDownloadNetworkPolicy): Promise<void>;

    /**
     * Pause download cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Asset uris which will pause, null or empty array means pause all
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    pauseDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * Resume download cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Asset uris which will resume, null or empty array means resume all
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    resumeDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * Cancel download cloud assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Asset uris which will cancel, null or empty array means cancel all
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    cancelDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * Query download cloud assets task infomation.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - Filter parameter.
     * @returns { Promise<CloudAssetDownloadStatus> } Returns download cloud assets task infomation.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    queryDownloadSpecificCloudMediaDetails(predicates: dataSharePredicates.DataSharePredicates): Promise<CloudAssetDownloadStatus>;

    /**
     * Query download cloud assets task count.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - Filter parameter.
     * @returns { Promise<int> } Returns download cloud assets task count.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    queryDownloadSpecificCloudMediaTaskCount(predicates: dataSharePredicates.DataSharePredicates): Promise<int>;

    /**
     * Query download cloud assets count and size.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - Filtering parameters
     * @returns { Promise<int[]> } Returns download cloud assets count and size.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.
     *     Possible causes: Predicates null or undefined.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
	 * @stagemodelonly
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    queryDownloadSpecificCloudMediaTaskCountAndSize(predicates: dataSharePredicates.DataSharePredicates): Promise<int[]>;

    /**
     * Register callback of download cloud assets task.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } callback - event callback
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    onDownloadProgressChange(callback: Callback<CloudAssetDownloadProgressInfo>): void;

    /**
     * Unregister callback of download cloud assets task.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } [callback] - event callback
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    offDownloadProgressChange(callback?: Callback<CloudAssetDownloadProgressInfo>): void;
  }

  /**
   * Custom record of media asset.
   *
   * @interface PhotoAssetCustomRecord
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetCustomRecord {
    /**
     * Indicates the media asset file Id.
     * It must be must be greater than 0.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fileId: int;
    /**
     * Indicates the media asset share count.
     * It must be must be greater than 0.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly shareCount: int;
    /**
     * Indicates the media asset lcd jump count.
     * It must be must be greater than 0.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly lcdJumpCount: int;
  }

  /**
   * Defines the class of media asset custom record manager.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class PhotoAssetCustomRecordManager {
    /**
     * Get media asset custom record manager instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager } Returns media asset custom record manager instance
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager;

    /**
     * Get media asset custom record manager instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager | null } Returns media asset custom record manager instance
     *     if operation fails, return null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager | null;

    /**
     * Creates custom records.
     * A maximum of 200 custom records can be created at once.
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom records.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification. Possible causes:
     * <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     * <br>2. The transferred record already exists. 3. The number of transferred records exceeds 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    createCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<void>;
    /**
     * Get custom records.
     *
     * @param { FetchOptions } optionCheck - Options to fetch custom records.
     * @returns { Promise<FetchResult<PhotoAssetCustomRecord>> } Returns fetchResult of PhotoAssetCustomRecord
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * 1. The filter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCustomRecords(optionCheck: FetchOptions): Promise<FetchResult<PhotoAssetCustomRecord>>;
    /**
     * Set custom records.
     * A maximum of 200 custom records can be set at once.
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom records.
     * @returns { Promise<Array<int>> } Returns list of fileId in photoAssetCustomRecord which set failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     * <br>2. The number of transferred records exceeds 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<Array<int>>;
    /**
     * Remove custom records.
     *
     * @param { FetchOptions } optionCheck - Options to remove custom records.
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * <br>1. The filter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    removeCustomRecords(optionCheck: FetchOptions): Promise<void>;
    /**
     * Add share count which fileId is in ids
     * A maximum of 500 ids can be add at once.
     *
     * @param { Array<int> } ids - ids which need to add share count.
     * @returns {Promise<Array<int>> } Returns list of fileId which add failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * <br>1. The ids list is empty. 2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    addShareCount(ids: Array<int>): Promise<Array<int>>;
    /**
     * Add lcd jump count which fileId is in ids
     * A maximum of 500 ids can be add at once.
     *
     * @param { Array<int> } ids - ids which need to add share count.
     * @returns {Promise<Array<int>> } Returns list of fileId which add failed
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     * <br>1. The ids list is empty. 2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    addLcdJumpCount(ids: Array<int>): Promise<Array<int>>;
  }

  /**
   * Automatic playback scene of moving photo.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  class AutoPlayScene {
    /**
     * Type of moving photo scene.
     *
     * @type { SceneType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    sceneType: SceneType;
 	
    /**
     * Play mode of moving photo in different scenes.
     *
     * @type { PlayMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    playMode: PlayMode;
  }
  
  /**
   * Enumeration type of scene.
   *
   * @enum { int } SceneType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export enum SceneType {
    /**
     * GRID_TO_PHOTO_BROWSER indicates that the view is transitioning from the grid to the photo browser.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    GRID_TO_PHOTO_BROWSER = 0,
    /**
     * PHOTO_BROWSER_SWIPE indicates that a swipe operation occurs in the photo browser.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    PHOTO_BROWSER_SWIPE = 1,
  }

  /**
   * Enumeration type of grid pinch mode.
   *
   * @enum { int } GridPinchModeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export enum GridPinchModeType {
    /**
    * FULL_FUNCTION_GRID indicates that the grid supports selection and other operations after pinch-to-zoom gesture.
    *
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    FULL_FUNCTION_GRID = 0
  }
  
  /**
   * Enumeration type of grid level.
   *
   * @enum { int } GridLevel
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export enum GridLevel {
    /**
    * SPACIOUS indicates that a grid layout with one fewer column than the standard grid level.
    *
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    SPACIOUS = 0,

    /**
    * STANDARD indicates that the standard grid level across different forms or states.
    *
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    STANDARD = 1,

    /**
    * COMPACT indicates that a grid layout with one more column than the standard grid level.
    *
    * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
    * @stagemodelonly
    * @atomicservice
    * @since 23 dynamic
    * @since 24 static
    */
    COMPACT = 2
  }
  
  /**
   * Enumeration type of play mode.
   *
   * @enum { int } PlayMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 24 static
   */
  export enum PlayMode {
    /**
     * DEFAULT indicates that the default play mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    DEFAULT = 0,
    /**
     * AUTO_PLAY indicates that moving photos will play automatically.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    AUTO_PLAY = 1,
  }
 	 

  /**
   * Enumerates the HDR mode of media assets.
   *
   * @enum { number } HdrMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   */
  enum HdrMode {
    /**
     * Default type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    DEFAULT = 0,
    /**
     * Indicates ISO HDR type of single layer image
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_ISO_SINGLE = 1,
    /**
     * Indicates ISO HDR type of dual layer image
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_ISO_DUAL = 2,
    /**
     * Indicates CUVA HDR type of image
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_CUVA = 3,
    /**
     * Indicates HDR vivid type of single layer image
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_VIVID_SINGLE = 4,
    /**
     * Indicates HDR vivid type of dual layer image
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     */
    HDR_VIVID_DUAL = 5,
  }

  /**
   * Enumeration of video mode type
   *
   * @enum { int } VideoMode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 22 dynamic
   * @since 23 static
   */
  enum VideoMode {
    /**
     * Default type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Log video
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    LOG_VIDEO = 1,
  }

  /**
   * Download cloud asset callback info.
   *
   * @interface CloudAssetDownloadProgressInfo
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadProgressInfo {
    /**
     * Download cloud asset callback event type.
     *
     * @type { CloudAssetDownloadNotifyType }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly downloadEventType: CloudAssetDownloadNotifyType;

    /**
     * Download cloud asset file id.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly fileId: int;

    /**
     * Download cloud asset progress.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly percent: int;

    /**
     * Download cloud asset auto pause reason.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly autoPauseReason: int;
  }

  /**
   * Download cloud asset status info.
   *
   * @interface CloudAssetDownloadStatus
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadStatus {
    /**
     * Download cloud asset auto status info.
     *
     * @type { string[] }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly taskInfos: string[];
  }

  /**
   * Add download cloud asset task result code.
   *
   * @enum { int } CloudAssetDownloadCode
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
     * @since 21 dynamic
     * @since 23 static
   */
  enum CloudAssetDownloadCode {
    /**
     * Add download cloud asset success
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ADD_DOWNLOAD_TASK_SUCCESS = 0,

    /**
     * The asset is not exist when adding download cloud asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_NOT_EXIST = 1,
  }

  /**
   * Enumerates download cloud asset event type.
   *
   * @enum { int } CloudAssetDownloadNotifyType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum CloudAssetDownloadNotifyType {
    /**
     * Progress info event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_PROGRESS = 0,

    /**
     * Download finish event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FINISHED = 1,

    /**
     * Download failed event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 2,

    /**
     * Download asset is deleted event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_DELETED = 3,

    /**
     * Download asset auto pause event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_PAUSED = 4,

    /**
     * Download asset auto resume event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_RESUMED = 5,

    /**
     * Many Download assets status changed event
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_REFRESHED = 6,
  }

  /**
   * Indicates possible value types
   *
   * @typedef { int | long | double | string | boolean | Uint8Array | null } ValueType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | Uint8Array | null;

  /**
   * Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record<string, ValueType>
   *
   * @typedef { Record<string, ValueType> } ValuesBucket
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;

  /**
   * Provides methods for accessing a database result set generated by querying the database.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  class ResultSet {
    /**
     * Obtains the number of columns in the result set.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    columnCount: int;
    /**
     * Obtains the number of rows in the result set.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowCount: int;
    /**
     * Obtains the current index of the result set.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowIndex: int;
    /**
     * Checks whether the cursor is positioned at the last row.
     *
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    isAtLastRow: boolean;
    /**
     * Go to the specified row of the result set.
     *
     * @param { int } position - Indicates the index of the specified row, which starts from 0.
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: position invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToRow(position: int): boolean;
    /**
     * Go to the first row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToFirstRow(): boolean;
    /**
     * Go to the next row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToNextRow(): boolean;
    /**
     * Obtains the values of all columns in the specified row.
     *
     * @returns { ValuesBucket } Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getRow(): ValuesBucket;
    /**
     * Obtains the value of the specified column in the current row.
     *
     * @param { int } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { ValueType } The value of the specified column..
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: columnIndex invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getValue(columnIndex: int): ValueType;
    /**
     * Closes the result set.
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    close(): void;
  }

  /**
   * Enumerates related entity filed type.
   *
   * @enum { number } FieldType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FieldType {  
    /**
     * Field Type None
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NONE = 0,
    /**
     * Field Type Analysis People
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_PEOPLE = 1,
    /**
     * Field Type Analysis Label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_LABEL = 2,
    /**
     * Field Type Analysis City
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_CITY = 3,
    /**
     * Field Type Year
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    YEAR = 4,
    /**
     * Field Type Month
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MONTH = 5,
    /**
     * Field Type Day
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DAY = 6,
    /**
     * Field Type Holiday
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HOLIDAY = 7,
    /**
     * Field Type Media Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIA_TYPE = 8
  }
 
  /**
   * Enumerates related entity Ranking Method
   *
   * @enum { number } RankingMethod
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum RankingMethod {  
    /**
     * Random Vote Ranking Method
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANDOM_VOTE = 0
  }
 
  /**
   * App link state of an asset
   *
   * @enum { int } AppLinkState
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AppLinkState {  
    /**
     * Unknow whether an asset has app link or not
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT = 0,
    
    /**
     * An asset has no app link
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_NO_LINK = 1,

    /**
     * An asset has app link
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_LINK = 2
  }
 
  /**
   * Provides APIs for input Context Map.
   *
   * @interface ContextMap
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContextMap {  
    /**
     * Field Types
     *
     * @type { FieldType[] }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    topicField: FieldType[];
  }
 
  /**
   * Provides APIs for input Options.
   *
   * @interface Options
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Options {  
 
    /**
     * Ranking Method option
     *
     * @type { ?RankingMethod }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rankingMethod?: RankingMethod;
    /**
     * Recommendation Count option
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    recommendationCount?: int;
    /**
     * Suggestion Fields option
     *
     * @type { ?FieldType[] }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    suggestionFields?: FieldType[];
  }
 
  /**
   * Provides APIs for output Entity.
   *
   * @interface Entity
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Entity {  
    /**
     * Indicates Entity Id.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;
 
    /**
     * Indicates Entity Name.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    name: string;
 
    /**
     * Indicates Entity Name.
     *
     * @type { FieldType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    field: FieldType;
 
    /**
     * Indicates Entity Alias.
     *
     * @type { string[] }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    alias: string[];
  }

  /**
   * Asset compatibility capabilities.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AssetCompatibleCapability {
    /**
     * Enable support for high-resolution asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    supportedHighResolution: boolean;

    /** 
      * Supported MIME types. 
      * 
      * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core 
      * @stagemodelonly 
      * @atomicservice 
      * @since 26.0.0 dynamic&static 
      */ 
    supportedMimeType: Array<string>;  
  }
  /**
   * Knowledge Content class, used for geting related entity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class KnowledgeContent {  
    /**
     * Get Related Entities, Smart Label
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } topic - Searching topic string.
     * @param { ContextMap } context - Context Map indicates topic filed.
     * @param { Options } [option] - Options for getRelatedEntity.
     * @returns { Promise<Entity[]> } Returns Array of Related Entities
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by nonsystem application
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>;
  }

  /**
   * Network policy which is used to download cloud assets.
   *
   * @enum { int } CloudDownloadNetworkPolicy
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  enum CloudDownloadNetworkPolicy {  
    /**
     * DEFAULT means only download cloud assets when the network is WIFI without user selected it.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    DEFAULT = 0,
    /**
     * CELL means download cloud assets when network is CELL or WIFI
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    CELL = 1,
    /**
     * WIFI means only download cloud assets when network is WIFI with user selected WIFI
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    WIFI = 2
  }
}

export default photoAccessHelper;
