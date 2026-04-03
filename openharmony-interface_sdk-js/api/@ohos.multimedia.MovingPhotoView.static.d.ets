'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file A component which support applications to show moving photo data 
 * @kit MediaLibraryKit
 */
import photoAccessHelper from './@ohos.file.photoAccessHelper';
import media from './@ohos.multimedia.media';
import { CommonMethod, ComponentBuilder, CustomBuilder, ImageFit, ImageAIOptions } from '@ohos.arkui.component';

/**
 * Defines the moving photo view options.
 *
 * @interface MovingPhotoViewOptions
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 24 static
 */
export declare interface MovingPhotoViewOptions {
    /**
     * moving photo data.
     *
     * @type { photoAccessHelper.MovingPhoto }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    movingPhoto: photoAccessHelper.MovingPhoto;
    /**
     * controller of MovingPhotoView.
     *
     * @type { ?MovingPhotoViewController }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    controller?: MovingPhotoViewController;
    /**
     * image ai options of MovingPhotoView.
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    imageAIOptions?: ImageAIOptions;
    /**
     * format of MovingPhotoView.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    movingPhotoFormat?: PixelMapFormat;
    /**
     * range mode of MovingPhotoView.
     *
     * @type { ?DynamicRangeMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    dynamicRangeMode?: DynamicRangeMode;
    /**
     * the watermask of the cover photo whether to contain during movingphoto playback
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    playWithMask?: boolean;
}
/**
 * function that moving photo view media events callback.
 *
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 24 static
 */
declare type MovingPhotoViewEventCallback = () => void;
/**
 * Defines the moving photo view attribute functions.
 *
 * @extends CommonMethod
 * @interface MovingPhotoViewAttribute
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 24 static
 */
export declare interface MovingPhotoViewAttribute extends CommonMethod {
    /**
     * Called when judging whether the video is muted.
     *
     * @param { boolean } isMuted
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    muted(isMuted: boolean): MovingPhotoViewAttribute;
	/**
     * Called when determining the zoom type of the view.
     *
     * @param { ImageFit } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    objectFit(value: ImageFit): MovingPhotoViewAttribute;
    /**
     * Called when the image load completed.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when the video is played.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when the video playback stopped.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when the video playback paused.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when the video playback ends.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when playback fails.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Called when playback prepared.
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * Sets automatic play period, If not set, the moving photo plays in the full video duration.
     * If set, the moving photo plays in the automatic play period.
     *
     * @param { double } startTime - video plays start time
     * @param { double } endTime - video plays end time
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute;
    /**
     * Sets whether to allow automatic play. If the value is true, the moving photo starts 
     * automatic after the resource is loaded.
     *
     * @param { boolean } isAutoPlay - Whether to automatic play
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute;
    /**
     * Sets whether to allow repeat play. If the value is true, the moving photo plays 
     * repeat after the resource is loaded.
     *
     * @param { boolean } isRepeatPlay - Whether to repeat play
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute;
    /**
     * Sets whether to enable moving photo analyzer. If the value is true, the moving photo can
     * be analyzed by AI.
     *
     * @param { boolean } enabled - whether to enable moving photo analyzer
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute;
    /**
     * Sets playback strategy.
     * 
     * @param { media.PlaybackStrategy } strategy - playback strategy
     * @returns { MovingPhotoViewAttribute }
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute;
}
/**
 * Defines the MovingPhotoView controller.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 24 static
 */
export declare class MovingPhotoViewController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    constructor();
    /**
     * Start play moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    startPlayback(): void;
    /**
     * Stop play moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    stopPlayback(): void;
    /**
     * refresh moving photo data
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 static
     */
    refreshMovingPhoto(): void;
    /**
     * Pause moving photo and show current frame, start playing from the current frame when
     * playing again
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    pausePlayback(): void;
    /**
     * Reset moving photo playback options as default.
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    reset(): void;
    /**
     * Restart to play the video with current options.
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    restart(): void;
    /**
     * Enable or disable the zoom transition effect and can be set during initialization
     * 
     * @param { boolean } enabled - Whether to enable the transition effect
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    enableTransition(enabled: boolean): void;
    /**
     * Set moving photo playback period
     * 
     * @param { double } startTime - video playback start time
     * @param { double } endTime - video playback end time
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    setPlaybackPeriod(startTime: double, endTime: double): void;
    /**
     * Dynamically refresh the autoplay property, which will force to play after
     * moving photo is initialized
     * 
     * @param { boolean } enabled - Whether to auto play
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    enableAutoPlay(enabled: boolean): void;
    /**
     * Notify the component to execute the picture transition animation.
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    notifyMovingPhotoTransition(): void;
}
/**
 * Dynamic range mode of moving photo.
 *
 * @enum { number }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum DynamicRangeMode {
    /**
     * Restrict the image content to dynamic range to the standard range
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    STANDARD = 2,
    /**
     * Allow image content to use some extended range
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    CONSTRAINT = 1,
    /**
     * Allow image content to use an unrestricted extended range
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    HIGH = 0
}
/**
 * Enumerates pixel map formats.
 *
 * @enum { number }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum PixelMapFormat {
    /**
     * Indicates that the storage order is to store Y first and then V U alternately each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    NV21 = 2,
    /**
     * Indicates that the storage order is to store Y first and then U V alternately each occupies 10 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    YCBCR_P010 = 4,
    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：
     * R(10bits), G(10bits), B(10bits), A(2bits) and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    RGBA_1010102 = 3,
    /**
     * Indicates that each pixel is stored on 32 bits.
     * Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    RGBA_8888 = 1,
    /**
     * Indicates that the storage order is to store Y first and then V U alternately each occupies 10 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    YCRCB_P010 = 5,
    /**
     * Indicates an unknown format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    UNKNOWN = 0
}
/**
 * Defines the MovingPhotoView component.
 *
 * @param { MovingPhotoViewOptions } options - MovingPhotoView option.
 * @param { CustomBuilder } [content_] - container
 * @returns { MovingPhotoViewAttribute } The attribute of the movingPhotoView.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 24 staticonly
 */
@ComponentBuilder
export declare function MovingPhotoView(
    options: MovingPhotoViewOptions, 
    content_?: CustomBuilder,
): MovingPhotoViewAttribute;