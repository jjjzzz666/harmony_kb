/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit AudioKit
 */

import { ErrorCallback, AsyncCallback, Callback, BusinessError } from './@ohos.base';

/**
 * @namespace audio
 * @since 7
 */
/**
 * @namespace audio
 * @syscap SystemCapability.Multimedia.Audio.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace audio {
  /**
   * Enumerates audio errors.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 9
   */
  /**
   * Enumerates audio errors.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioErrors {
    /**
     * Invalid parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Invalid parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ERROR_INVALID_PARAM = 6800101,
    /**
     * Allocate memory failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Allocate memory failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ERROR_NO_MEMORY = 6800102,
    /**
     * Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ERROR_ILLEGAL_STATE = 6800103,
    /**
     * Unsupported option.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Unsupported option.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ERROR_UNSUPPORTED = 6800104,
    /**
     * Time out.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_TIMEOUT = 6800105,
    /**
     * Audio specific errors.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_STREAM_LIMIT = 6800201,
    /**
     * Default error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Default error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ERROR_SYSTEM = 6800301
  }

  /**
   * Define local device network id for audio
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  const LOCAL_NETWORK_ID: string;

  /**
   * Define default volume group id for audio
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 9
   */
  /**
   * Define default volume group id for audio
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  const DEFAULT_VOLUME_GROUP_ID: int;

  /**
   * Define default interrupt group id for audio
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_INTERRUPT_GROUP_ID: int;

  /**
   * Obtains an {@link AudioManager} instance.
   * @returns { AudioManager } this {@link AudioManager} object.
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7
   */
  /**
   * Obtains an {@link AudioManager} instance.
   * <p><strong>NOTE</strong>:
   * The {@link AudioManager} instance is not a singleton.
   * </p>
   *
   * @returns { AudioManager } this {@link AudioManager} object.
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   */
  /**
   * Obtains an {@link AudioManager} instance.
   * <p><strong>NOTE</strong>:
   * The {@link AudioManager} instance is not a singleton.
   * </p>
   *
   * @returns { AudioManager } this {@link AudioManager} object.
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getAudioManager(): AudioManager;

  /**
   * Obtains an {@link AudioCapturer} instance.
   * Success: This method uses an asynchronous callback to return the capturer instance.
   * Failure: This method uses an asynchronous callback to return the error instance. Possible causes:
   *          6800301: Parameter verification failed, Permission denied, System error;
   *          6800101: Mandatory parameters are left unspecified, Incorrect parameter types.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @param { AsyncCallback<AudioCapturer> } callback - Callback used to return the audio capturer instance.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 8
   */
  /**
   * Obtains an {@link #AudioCapturer} instance. This method uses an asynchronous callback to return the 
   * capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @param { AsyncCallback<AudioCapturer> } callback - Callback used to return the audio capturer instance.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void;

  /**
   * Obtains an {@link #AudioCapturer} instance. This method uses an asynchronous callback to return the 
   * capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @param { AsyncCallback<AudioCapturer | null> } callback - Callback used to return the audio capturer 
   *     instance, or null if any error occurs.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer | null>): void;

  /**
   * Obtains an {@link AudioCapturer} instance.
   * Success: This method uses a promise to return the capturer instance.
   * Failure: This method uses a promise to return the error instance. Possible causes:
   *          6800301: Parameter verification failed, Permission denied, System error;
   *          6800101: Mandatory parameters are left unspecified, Incorrect parameter types.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @returns { Promise<AudioCapturer> } Promise used to return the audio capturer instance.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 8
   */
  /**
   * Obtains an {@link AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @returns { Promise<AudioCapturer> } Promise used to return the audio capturer instance.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>;

  /**
   * Obtains an {@link AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @returns { Promise<AudioCapturer | null> } Promise used to return the audio capturer instance,
   *     or null if any error occurs.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer | null>;

  /**
   * Obtains a special {@link #AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * This capture can be used to record both Mic-In audio data and echo reference signal, for application to
   * process algorithm.
   * Mic-In audio data and echo reference signal will be put in one buffer or multiple buffers according to
   * configuration set by application.
   * Capturer is also not allowed to be created when application is in background.
   * @permission ohos.permission.MICROPHONE
   * @param { AudioCapturerMicInConfig } config - Capturer configuration, see {@link #AudioCapturerMicInConfig}
   *     for details.
   * @returns { Promise<AudioCapturer | null> } Promise used to return the audio capturer instance,
   *     or null if any error occurs.
   * @throws { BusinessError } 201 - Permission denied, including background recording.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Capturer creation is not supported, may caused by following problems:
   *     <br> 1. Source type is unsupported for this capturer, only {@link #SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT} is
   *     supported currently.
   *     <br> 2. Echo reference signal's config is unsupported, echo reference's sampling rate and format must be the
   *     same as MicIn audio data currently.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system process crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createMicInAudioCapturer(config: AudioCapturerMicInConfig): Promise<AudioCapturer | null>;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses an asynchronous callback to return the renderer instance.
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @param { AsyncCallback<AudioRenderer> } callback - Callback used to return the audio renderer instance.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8
   */
  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @param { AsyncCallback<AudioRenderer> } callback - Callback used to return the audio renderer instance.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   */
  function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>): void;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @param { AsyncCallback<AudioRenderer | null> } callback - Callback used to return the audio renderer instance,
   *     or null when an error happens.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer | null>): void;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @returns { Promise<AudioRenderer> } Promise used to return the audio renderer instance.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8
   */
  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @returns { Promise<AudioRenderer> } Promise used to return the audio renderer instance.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   */
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer>;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @returns { Promise<AudioRenderer | null> } Promise used to return the audio renderer instance, or
   *     null when an error happens.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer | null>;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer> } callback - Callback used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer | null> } callback - Callback used to return the tonePlayer instance，
   *     null when an error happens.
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer | null>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @returns { Promise<TonePlayer> } Promise used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @returns { Promise<TonePlayer | null> } Promise used to return the tonePlayer instance, or
   *     null when an error happens.
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer | null>;

  /**
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear monitoring using a fast capturer and renderer.
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode Audio loopback mode.
   * @returns { Promise<AudioLoopback> } Promise used to return the <b>AudioLoopback</b> instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   */
  function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback>;

  /**
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
   * monitoring using a fast capturer and renderer.
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode Audio loopback mode.
   * @returns { Promise<AudioLoopback | null> } Promise used to return the <b>AudioLoopback</b> instance, or
   *     null when an error happens.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 23 static
   */
  function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback | null>;

  /**
   * Enumerates the audio states.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates the audio states.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioState {
    /**
     * Invalid state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Invalid state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_INVALID = -1,
    /**
     * Create new instance state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Create new instance state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_NEW = 0,
    /**
     * Prepared state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Prepared state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_PREPARED = 1,
    /**
     * Running state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Running state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_RUNNING = 2,
    /**
     * Stopped state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Stopped state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_STOPPED = 3,
    /**
     * Released state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Released state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_RELEASED = 4,
    /**
     * Paused state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Paused state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_PAUSED = 5
  }

  /**
   * Enumerates audio loopback mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackMode {
    /**
     * Hardware loopback mode.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    HARDWARE = 0,
  }

  /**
   * Enumerates audio loopback status.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackStatus {
    /**
     * Audio loopback is unavailable because the current input or output device does not support audio loopback.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_DEVICE = -2,
    /**
     * Audio loopback is unavailable in the current scene. For example, the loopback is interrupted by other audioi streams or there is an ongoing call.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_SCENE = -1,
    /**
     * Audio loopback is available and is in the idle state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_IDLE = 0,
    /**
     * Audio loopback is available and is in the running state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_RUNNING = 1,
  }

  /**
   * Enumerates audio loopback reverberation preset.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackReverbPreset {
    /**
     * A preset that keep the original reverberation without any enhancement.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    ORIGINAL = 1,
    /**
     * A preset representing a reverberation effect with karaoke-like acoustic characteristics.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    KTV = 2,
    /**
     * A preset representing a reverberation effect with theater-like acoustic characteristics.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    THEATER = 3,
    /**
     * A preset representing a reverberation effect with concert-like acoustic characteristics.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    CONCERT = 4,
  }

  /**
   * Enumerates audio loopback equalizer preset.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackEqualizerPreset {
    /**
     * A preset that keep the original frequency response without any enhancement.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FLAT = 1,
    /**
     * A preset representing a equalizer effect that can enhance the fullness of the vocie
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FULL = 2,
    /**
     * A preset representing a equalizer effect that can enhance the brightness of the vocie
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    BRIGHT = 3,
  }

  /**
   * Enumerates audio stream types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 7
   */
  /**
   * Enumerates audio stream types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioVolumeType {
    /**
     * Audio streams for voice calls.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 8
     */
    /**
     * Audio volume type for voice calls.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    VOICE_CALL = 0,
    /**
     * Audio streams for ringtones.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7
     */
    /**
     * Audio volume type for ringtones.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RINGTONE = 2,
    /**
     * Audio streams for media purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7
     */
    /**
     * Audio volume type for media purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA = 3,
    /**
     * Audio volume for alarm purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Audio volume type for alarm purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ALARM = 4,
    /**
     * Audio volume for accessibility purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Audio volume type for accessibility purpose.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ACCESSIBILITY = 5,
    /**
     * Audio volume for system sound.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM = 6,
    /**
     * Audio volume type for voice assistant.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 8 dynamic
     * @since 23 static
     */
    VOICE_ASSISTANT = 9,
    /**
     * Audio volume type for ultrasonic.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ULTRASONIC = 10,
    /**
     * Audio volume type for notification.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFICATION = 11,
    /**
     * Audio volume type for navigation.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NAVIGATION = 12,
    /**
     * Audio volume type for all common.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL = 100,
  }

  /**
   * Enumerates audio device flags.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Enumerates audio device flags.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceFlag {
    /**
     * None devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE_DEVICES_FLAG = 0,
    /**
     * Output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_DEVICES_FLAG = 1,
    /**
     * Input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_DEVICES_FLAG = 2,
    /**
     * All devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * All devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_DEVICES_FLAG = 3,
    /**
     * Distributed output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_OUTPUT_DEVICES_FLAG = 4,
    /**
     * Distributed input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_INPUT_DEVICES_FLAG = 8,
    /**
     * All Distributed devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_DISTRIBUTED_DEVICES_FLAG = 12,
  }

  /**
   * Enumerates audio device for usage.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceUsage {
    /**
     * Media output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_OUTPUT_DEVICES = 1,
    /**
     * Media input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_INPUT_DEVICES = 2,
    /**
     * All media devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_MEDIA_DEVICES = 3,
    /**
     * Call output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_OUTPUT_DEVICES = 4,
    /**
     * Call input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_INPUT_DEVICES = 8,
    /**
     * All call devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_CALL_DEVICES = 12,
  }

  /**
   * Enumerates device roles.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Enumerates device roles.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceRole {
    /**
     * Input role.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Input role.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_DEVICE = 1,
    /**
     * Output role.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Output role.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_DEVICE = 2,
  }

  /**
   * Enumerates device types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Enumerates device types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     * Invalid device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Invalid device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INVALID = 0,
    /**
     * Built-in earpiece.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Built-in earpiece.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EARPIECE = 1,
    /**
     * Built-in speaker.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Built-in speaker.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEAKER = 2,
    /**
     * Wired headset, which is a combination of a pair of earpieces and a microphone.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Wired headset, which is a combination of a pair of earpieces and a microphone.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    WIRED_HEADSET = 3,
    /**
     * A pair of wired headphones.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * A pair of wired headphones.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    WIRED_HEADPHONES = 4,
    /**
     * Bluetooth device using the synchronous connection oriented link (SCO).
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Bluetooth device using the synchronous connection oriented link (SCO).
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BLUETOOTH_SCO = 7,
    /**
     * Bluetooth device using advanced audio distribution profile (A2DP).
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Bluetooth device using advanced audio distribution profile (A2DP).
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BLUETOOTH_A2DP = 8,
    /**
     * Built-in microphone.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Built-in microphone.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MIC = 15,
    /**
     * USB audio headset.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * USB audio headset.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USB_HEADSET = 22,
    /**
     * Display port device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DISPLAY_PORT = 23,
    /**
     * Device type for rerouting audio to other remote devices by system application
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REMOTE_CAST = 24,
    /**
     * USB audio device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 18 dynamic
     * @since 23 static
     */
    USB_DEVICE = 25,
    /**
     * Accessory devices, such as the mic on remote control.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    ACCESSORY = 26,

    /**
     * HDMI device, such as HDMI, ARC, eARC
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    HDMI = 27,
    /**
     * Line connected digital output device, such as s/pdif
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    LINE_DIGITAL = 28,
    /**
     * Distributed virtualization audio device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    REMOTE_DAUDIO = 29,
    /**
     * Hearing aid audio device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    HEARING_AID = 30,
    /**
     * Nearlink Device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    NEARLINK = 31,
    /**
     * Bluetooth device using the spp profile.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH_SPP = 33,
    /**
     * Nearlink port.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    NEARLINK_PORT = 34,
    /**
     * System private device. Applications can ignore this device since the device is private in system.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    SYSTEM_PRIVATE = 200,
    /**
     * Default device type.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Default device type.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 1000,
  }

  /**
   * Enumerates the active device types.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.CommunicationDeviceType
   */
  enum ActiveDeviceType {
    /**
     * Speaker.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.CommunicationDeviceType.SPEAKER
     */
    SPEAKER = 2,
    /**
     * Bluetooth device using the SCO link.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.DeviceType#BLUETOOTH_SCO
     */
    BLUETOOTH_SCO = 7,
  }

  /**
   * Enumerates the available device types for communication.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @since 9
   */
  /**
   * Enumerates the available device types for communication.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum CommunicationDeviceType {
    /**
     * Speaker.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Speaker.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPEAKER = 2
  }

  /**
   * Enumerates the device select strategy.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioDevcieSelectStrategy {
    /**
     * The default follow device select strategy.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_DEFAULT = 0,
    /**
     * The independent device select strategy.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_INDEPENDENT = 1,
  }

  /**
   * Enumerates ringer modes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @since 7
   */
  /**
   * Enumerates ringer modes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioRingMode {
    /**
     * Silent mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7
     */
    /**
     * Silent mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RINGER_MODE_SILENT = 0,
    /**
     * Vibration mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7
     */
    /**
     * Vibration mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RINGER_MODE_VIBRATE = 1,
    /**
     * Normal mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7
     */
    /**
     * Normal mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RINGER_MODE_NORMAL = 2,
  }

  /**
   * Enumerates type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PolicyType {
    /**
     * EDM type.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EDM = 0,
    /**
     * PRIVACY type.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY = 1,
  }

  /**
   * Enumerates the audio sample formats.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates the audio sample formats.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSampleFormat {
    /**
     * Invalid format.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Invalid format.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_INVALID = -1,
    /**
     * Unsigned 8 format.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Unsigned 8 format.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_U8 = 0,
    /**
     * Signed 16 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Signed 16 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S16LE = 1,
    /**
     * Signed 24 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Signed 24 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S24LE = 2,
    /**
     * Signed 32 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Signed 32 bit integer, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S32LE = 3,
    /**
     * Signed 32 bit float, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Signed 32 bit float, little endian.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_F32LE = 4,
  }

  /**
   * Enumerates the audio channel.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates the audio channel.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioChannel {
    /**
     * Channel 1.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Channel 1.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_1 = 1,
    /**
     * Channel 2.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Channel 2.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_2 = 2,
    /**
     * Channel 3.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 3.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_3 = 3,
    /**
     * Channel 4.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 4.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_4 = 4,
    /**
     * Channel 5.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 5.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_5 = 5,
    /**
     * Channel 6.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 6.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_6 = 6,
    /**
     * Channel 7.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 7.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_7 = 7,
    /**
     * Channel 8.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 8.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_8 = 8,
    /**
     * Channel 9.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 9.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_9 = 9,
    /**
     * Channel 10.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 10.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_10 = 10,
    /**
     * Channel 12.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 12.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_12 = 12,
    /**
     * Channel 14.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 14.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_14 = 14,
    /**
     * Channel 16.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel 16.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CHANNEL_16 = 16
  }

  /**
   * Enumerates the audio sampling rate.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates the audio sampling rate.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSamplingRate {
    /**
     * 8kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 8kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_8000 = 8000,
    /**
     * 11.025kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 11.025kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_11025 = 11025,
    /**
     * 12kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 12kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_12000 = 12000,
    /**
     * 16kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 16kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_16000 = 16000,
    /**
     * 22.05kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 22.05kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_22050 = 22050,
    /**
     * 24kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 24kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_24000 = 24000,
    /**
     * 32kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 32kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_32000 = 32000,
    /**
     * 44.1kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 44.1kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_44100 = 44100,
    /**
     * 48kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 48kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_48000 = 48000,
    /**
     * 64kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 64kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_64000 = 64000,
    /**
     * 88.2kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_88200 = 88200,
    /**
     * 96kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * 96kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_96000 = 96000,
    /**
     * 176.4kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_176400 = 176400,
    /**
     * 192kHz sample rate.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_192000 = 192000
  }

  /**
   * Enumerates the audio encoding type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates the audio encoding type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioEncodingType {
    /**
     * Invalid type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Invalid type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENCODING_TYPE_INVALID = -1,
    /**
     * PCM encoding.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * PCM encoding.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENCODING_TYPE_RAW = 0
  }

  /**
   * Enumerates the audio content type.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.multimedia.audio.StreamUsage
   */
  enum ContentType {
    /**
     * Unknown content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_UNKNOWN
     */
    CONTENT_TYPE_UNKNOWN = 0,
    /**
     * Speech content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION
     */
    CONTENT_TYPE_SPEECH = 1,
    /**
     * Music content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC
     */
    CONTENT_TYPE_MUSIC = 2,
    /**
     * Movie content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MOVIE
     */
    CONTENT_TYPE_MOVIE = 3,
    /**
     * Notification content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_NOTIFICATION
     */
    CONTENT_TYPE_SONIFICATION = 4,
    /**
     * Ringtone content.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_RINGTONE
     */
    CONTENT_TYPE_RINGTONE = 5,
  }

  /**
   * Enumerates the stream usage.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7
   */
  /**
   * Enumerates the stream usage.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum StreamUsage {
    /**
     * Unknown usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7
     */
    /**
     * Unknown usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_UNKNOWN = 0,
    /**
     * Media usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MOVIE or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_GAME or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_AUDIOBOOK
     */
    STREAM_USAGE_MEDIA = 1,
    /**
     * Music usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Music usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MUSIC = 1,
    /**
     * Voice communication usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7
     */
    /**
     * Used for network voice call, such as WeChat voice call, QQ voice call, etc.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_COMMUNICATION = 2,
    /**
     * Voice assistant broadcast usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Voice assistant broadcast usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_ASSISTANT = 3,
    /**
     * Alarm usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Alarm usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ALARM = 4,
    /**
     * Voice message usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Voice message usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_MESSAGE = 5,
    /**
     * Notification or ringtone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_RINGTONE
     */
    STREAM_USAGE_NOTIFICATION_RINGTONE = 6,
    /**
     * Ringtone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Ringtone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_RINGTONE = 6,
    /**
     * Notification usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Notification usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NOTIFICATION = 7,
    /**
     * Accessibility usage, such as screen reader.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Accessibility usage, such as screen reader.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ACCESSIBILITY = 8,
    /**
     * System usage, such as screen lock or key click.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_SYSTEM = 9,
    /**
     * Movie or video usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Movie or video usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MOVIE = 10,
    /**
     * Game sound effect usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Game sound effect usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_GAME = 11,
    /**
     * Audiobook usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Audiobook usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_AUDIOBOOK = 12,
    /**
     * Navigation usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10
     */
    /**
     * Navigation usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NAVIGATION = 13,
    /**
     * DTMF dial tone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_DTMF = 14,
    /**
     * Enforced tone usage, such as camera shutter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ENFORCED_TONE = 15,
    /**
     * Ultrasonic playing usage. This type is only used for msdp condition.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ULTRASONIC = 16,
    /**
     * Video communication or video conference usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VIDEO_COMMUNICATION = 17,
    /**
     * Voice call assistant type. This type is only used for call assistant functionalities.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_CALL_ASSISTANT = 21,
    /**
     * Announcement usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_ANNOUNCEMENT = 22,
    /**
     * Emergency usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_EMERGENCY = 23,
  }

  /**
   * Enumerates the audio interrupt request type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestType {
    /**
     * Default type to request audio interrupt.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_TYPE_DEFAULT = 0,
  }

  /**
   * Enumerates volume related operations.
   * Flags should be powers of 2!
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum VolumeFlag {
    /**
     * Show system volume bar.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_SHOW_SYSTEM_UI = 1,
  }

  /**
   * Describes audio stream information.
   * @typedef AudioStreamInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
   /**
   * Describes audio stream information.
   * @typedef AudioStreamInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioStreamInfo {
    /**
     * Sampling rate.
     * @type { AudioSamplingRate }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Sampling rate.
     * @type { AudioSamplingRate }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    samplingRate: AudioSamplingRate;
    /**
     * Audio channels.
     * @type { AudioChannel }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
   /**
     * Audio channels.
    * @type { AudioChannel }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    channels: AudioChannel;
    /**
     * Audio sample format.
     * @type { AudioSampleFormat }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Audio sample format.
     * @type { AudioSampleFormat }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    sampleFormat: AudioSampleFormat;
    /**
     * Audio encoding type.
     * @type { AudioEncodingType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Audio encoding type.
     * @type { AudioEncodingType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    encodingType: AudioEncodingType;
    /**
     * Audio channel layout.
     * @type { ?AudioChannelLayout }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Audio channel layout.
     * @type { ?AudioChannelLayout }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    channelLayout?: AudioChannelLayout;
  }

  /**
   * Describes audio renderer information.
   * @typedef AudioRendererInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Describes audio renderer information.
   * @typedef AudioRendererInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioRendererInfo {
    /**
     * Content type.
     * @type { ContentType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.AudioRendererInfo#usage
     */
    /**
     * Content type.
     * @type { ?ContentType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 10 dynamic
     */
    content?: ContentType;
    /**
     * Stream usage.
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Stream usage.
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    usage: StreamUsage;
    /**
     * Audio renderer flags.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Audio renderer flags. This method is currently reserved, suggest setting the default value to 0.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rendererFlags: int;
    /**
     * Audio volume mode config. If volumeMode is set to {@link AudioVolumeMode.APP_INDIVIDUAL}, this audio renderer
     * will be affeted by app volume percentage setted by {@link setAppVolumePercentage}
     * @type { ?AudioVolumeMode }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
  }

  /**
   * Describes audio renderer filter.
   * @typedef AudioRendererFilter
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRendererFilter {
    /**
     * Application uid.
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     * Renderer information.
     * @type { ?AudioRendererInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererInfo?: AudioRendererInfo;
    /**
     * AudioRenderer id.
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererId?: int;
  }

  /**
   * Describe audio capturer filter.
   * @typedef AudioCapturerFilter
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioCapturerFilter {
    /**
     * Application uid.
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     * Capturer information.
     * @type { ?AudioCapturerInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    capturerInfo?: AudioCapturerInfo;
  }

  /**
   * Describes audio renderer configuration options.
   * @typedef AudioRendererOptions
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8
   */
   /**
   * Describes audio renderer configuration options.
   * @typedef AudioRendererOptions
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioRendererOptions {
    /**
     * Stream information.
     * @type { AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Stream information.
     * @type { AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * Renderer information.
     * @type { AudioRendererInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Renderer information.
     * @type { AudioRendererInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    rendererInfo: AudioRendererInfo;
    /**
     * Privacy configuration.
     * @type { ?AudioPrivacyType }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10
     */
    /**
     * Privacy configuration.
     * @type { ?AudioPrivacyType }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    privacyType?: AudioPrivacyType;
  }

  /**
   * Enumerates audio stream privacy type for playback capture.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10
   */
  /**
   * Enumerates audio stream privacy type for playback capture.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioPrivacyType {
    /**
     * Privacy type that stream can be captured by third party applications.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10
     */
    /**
     * Privacy type that stream can be captured by third party applications.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PUBLIC = 0,

    /**
     * Privacy type that stream can not be captured.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10
     */
    /**
     * Privacy type that stream can not be captured.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PRIVATE = 1,

    /**
     * Privacy type that stream can be safely captured or screen casted.
     * For example, the audio renderer with {@link StreamUsage#STREAM_USAGE_VOICE_COMMUNICATION} cannot be
     * captured or screen casted by third party applications under the PRIVACY_TYPE_PUBLIC policy.
     * However, the internal capture is allowed under the PRIVACY_TYPE_SHARED policy.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 21 dynamic
     * @since 24 static
     */
    PRIVACY_TYPE_SHARED = 2,
  }

  /**
   * Enumerates the interrupt modes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @since 9
   */
  /**
   * Enumerates the interrupt modes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum InterruptMode {
    /**
     * Mode that different stream share one interrupt unit.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 9
     */
    /**
     * Mode that different stream share one interrupt unit.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SHARE_MODE = 0,
    /**
     * Mode that each stream has independent interrupt unit.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 9
     */
    /**
     * Mode that each stream has independent interrupt unit.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INDEPENDENT_MODE = 1
  }

  /**
   * Enumerates the audio renderer rates.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioRendererRate {
    /**
     * Normal playback render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_NORMAL = 0,
    /**
     * Double playback render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_DOUBLE = 1,
    /**
     * Half playback render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_HALF = 2
  }

  /**
   * Enumerates the interrupt types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7
   */
  /**
   * Enumerates the interrupt types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum InterruptType {
    /**
     * Audio playback interruption started.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Audio playback interruption started.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_TYPE_BEGIN = 1,

    /**
     * Audio playback interruption ended.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Audio playback interruption ended.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_TYPE_END = 2
  }

  /**
   * Enumerates the interrupt hints.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7
   */
  /**
   * Enumerates the interrupt hints.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum InterruptHint {
    /**
     * None.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * None.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_NONE = 0,
    /**
     * Resume the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Resume the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_RESUME = 1,

    /**
     * Paused/Pause the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Paused/Pause the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_PAUSE = 2,

    /**
     * Stopped/Stop the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Stopped/Stop the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_STOP = 3,

    /**
     * Ducked the playback. (In ducking, the audio volume is reduced, but not silenced.)
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7
     */
    /**
     * Ducked the playback. (In ducking, the audio volume is reduced, but not silenced.)
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_DUCK = 4,

    /**
     * Unducked the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Unducked the playback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNDUCK = 5,

    /**
     * Mute the stream.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_MUTE = 6,

    /**
     * Unmute the stream.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNMUTE = 7
  }

  /**
   * Enumerates the interrupt force types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 9
   */
  /**
   * Enumerates the interrupt force types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum InterruptForceType {
    /**
     * Forced action taken by system.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Forced action taken by system.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_FORCE = 0,
    /**
     * Share type, application can choose to take action or ignore.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Share type, application can choose to take action or ignore.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INTERRUPT_SHARE = 1
  }

  /**
   * Describes the interrupt event received by the app when playback is interrupted.
   * @typedef InterruptEvent
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 9
   */
  /**
   * Describes the interrupt event received by the app when playback is interrupted.
   * @typedef InterruptEvent
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface InterruptEvent {
    /**
     * Indicates whether the interruption has started or finished.
     * @type { InterruptType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Indicates whether the interruption has started or finished.
     * @type { InterruptType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    eventType: InterruptType;

    /**
     * Indicates whether the action is taken by system or to be taken by the app.
     * @type { InterruptForceType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Indicates whether the action is taken by system or to be taken by the app.
     * @type { InterruptForceType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    forceType: InterruptForceType;

    /**
     * Indicates the kind of action.
     * @type { InterruptHint }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Indicates the kind of action.
     * @type { InterruptHint }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hintType: InterruptHint;
  }

  /**
   * Enumerates interrupt action types.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptType
   */
  enum InterruptActionType {

    /**
     * Focus gain event.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_BEGIN
     */
    TYPE_ACTIVATED = 0,

    /**
     * Audio interruption event.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_END
     */
    TYPE_INTERRUPT = 1
  }

  /**
   * Enumerates device change types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Enumerates device change types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceChangeType {
    /**
     * Device connection.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Device connection.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * Device disconnection.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Device disconnection.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DISCONNECT = 1,
  }

  /**
   * Enumerates audio scenes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @since 8
   */
  /**
   * Enumerates audio scenes.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioScene {
    /**
     * Default audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 8
     */
    /**
     * Default audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_DEFAULT = 0,
    /**
     * Ringing audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_RINGING = 1,
    /**
     * Phone call audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_PHONE_CALL = 2,
    /**
     * Voice chat audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 8
     */
    /**
     * Voice chat audio scene
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_VOICE_CHAT = 3
  }

  /**
   * Enumerates volume adjustment types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum VolumeAdjustType {
    /**
     * Adjust volume up.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_UP = 0,
    /**
     * Adjust volume down.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_DOWN = 1,
  }

  /**
   * Implements audio volume and audio device management.
   * @typedef AudioManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7
   */
  /**
   * Implements audio stream, volume, device, effect and many other management functions.
   * @typedef AudioManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   */
  /**
   * Implements audio stream, volume, device, effect and many other management functions.
   * @typedef AudioManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface AudioManager {
    /**
     * Sets the volume for a volume type. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { number } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setVolume
     */
    setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for a volume type. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { number } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setVolume
     */
    setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>;
    /**
     * Obtains the volume of a volume type. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<number> } callback - Callback used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the volume of a volume type. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<number> } Promise used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the minimum volume allowed for a stream. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<number> } callback - Callback used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the minimum volume allowed for a stream. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<number> } Promise used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the maximum volume allowed for a volume type. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<number> } callback - Callback used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the maximum volume allowed for a volume type. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<number> } Promise used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the audio devices with a specific flag. This method uses an asynchronous callback to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the audio devices with a specific flag. This method uses a promise to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * Mutes a volume type. This method uses an asynchronous callback to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the volume type, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#mute
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes a volume type. This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { boolean } mute -  Mute status to set. The value true means to mute the volume type, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#mute
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;
    /**
     * Checks whether a stream is muted. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the mute status of the stream.
     *        The value true means that the stream is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is muted. This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<boolean> } Promise used to return the mute status of the stream. The value true means
     *          that the stream is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is active. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the stream.
     *        The value true means that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is active. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<boolean> } Promise used to return the active status of the stream. The value true means
     *          that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setMicrophoneMute
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setMicrophoneMute
     */
    setMicrophoneMute(mute: boolean): Promise<void>;
    /**
     * Checks whether the microphone is muted. This method uses an asynchronous callback to return the query result.
     * @permission ohos.permission.MICROPHONE
     * @param { AsyncCallback<boolean> } callback - used to return the mute status of the microphone. The value
     *        true means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the microphone is muted. This method uses a promise to return the query result.
     * @permission ohos.permission.MICROPHONE
     * @returns { Promise<boolean> } Promise used to return the mute status of the microphone. The value
     *          true means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * Sets the ringer mode. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setRingerMode
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringer mode. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setRingerMode
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;
    /**
     * Obtains the ringer mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioRingMode> } callback - Callback used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * Obtains the ringer mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioRingMode> } Promise used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * Sets an audio parameter. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - Key of the audio parameter to set.
     * @param { string } value -  Value of the audio parameter to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioManager#setExtraParameters
     */
    setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an audio parameter. This method uses a promise to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - Key of the audio parameter to set.
     * @param { string } value - Value of the audio parameter to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioManager#setExtraParameters
     */
    setAudioParameter(key: string, value: string): Promise<void>;

    /**
     * Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.
     * @param { string } key - Key of the audio parameter whose value is to be obtained.
     * @param { AsyncCallback<string> } callback - Callback used to return the value of the audio parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioManager#getExtraParameters
     */
    getAudioParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an audio parameter. This method uses a promise to return the query result.
     * @param { string } key - Key of the audio parameter whose value is to be obtained.
     * @returns { Promise<string> } Promise used to return the value of the audio parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioManager#getExtraParameters
     */
    getAudioParameter(key: string): Promise<string>;

    /**
     * Sets extra audio parameters. This method uses a promise to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } mainKey - Main key of the audio parameters to set.
     * @param { Record<string, string> } kvpairs - Key-value pairs with subkeys and values to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setExtraParameters(mainKey: string, kvpairs: Record<string, string>): Promise<void>;

    /**
     * Obtains the values of a certain key. This method uses a promise to return the query result.
     * @param { string } mainKey - Main key of the audio parameters to get.
     * @param { Array<string> } subKeys - Sub keys of the audio parameters to get.
     * @returns { Promise<Record<string, string>> } Promise used to return the key-value pairs.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getExtraParameters(mainKey: string, subKeys?: Array<string>): Promise<Record<string, string>>;

    /**
     * Sets a device to the active state. Applications that are not in a call state cannot modify the calling device by this method.
     * This method uses an asynchronous callback to return the result.
     * @param { ActiveDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to the active
     *        status, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets a device to the active state. Applications that are not in a call state cannot modify the calling device by this method.
     * This method uses a promise to return the result.
     * @param { ActiveDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to the active
     *        status, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>;
    /**
     * Checks whether a device is active. This method uses an asynchronous callback to return the query result.
     * @param { ActiveDeviceType } deviceType - Audio device type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive
     */
    isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a device is active. This method uses a promise to return the query result.
     * @param { ActiveDeviceType } deviceType - Audio device type.
     * @returns { Promise<boolean> } Promise used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive
     */
    isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>;
    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'volumeChange' } type - Type of the event to listen for. Only the volumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:volumeChange
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;
    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     * @param { 'ringerModeChange' } type - Type of the event to listen for. Only the ringerModeChange event is supported.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#event:ringerModeChange
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;
    /**
     * Sets the audio scene mode to change audio strategies. This method uses an asynchronous callback to return the
     * result.
     * @param { AudioScene } scene - Audio scene mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene, callback: AsyncCallback<void>): void;
    /**
     * Sets the audio scene mode to change audio strategies. This method uses a promise to return the result.
     * @param { AudioScene } scene - Audio scene mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene): Promise<void>;
    /**
     * Obtains the audio scene mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioScene> } callback - Callback used to return the audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 8
     */
    /**
     * Obtains the audio scene mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioScene> } callback - Callback used to return the audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioScene(callback: AsyncCallback<AudioScene>): void;
    /**
     * Obtains the audio scene mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioScene> } Promise used to return the audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 8
     */
    /**
     * Obtains the audio scene mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioScene> } Promise used to return the audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioScene(): Promise<AudioScene>;
    /**
     * Obtains the audio scene mode.
     * @returns { AudioScene } Current audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 10
     */
    /**
     * Obtains the audio scene mode.
     * @returns { AudioScene } Current audio scene mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioSceneSync(): AudioScene;

    /**
     * Subscribes to audio scene change events. When system changes communication scene status, registered clients
     * will receive the callback.
     * @param { 'audioSceneChange' } type - Type of the event to listen for. Only the audioSceneChange event is
     * supported.
     * @param { Callback<AudioScene> } callback - Callback used to obtain the latest audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    on(type: 'audioSceneChange', callback: Callback<AudioScene>): void;

    /**
     * Subscribes to audio scene change events. When system changes communication scene status, registered clients
     * will receive the callback.
     * @param { Callback<AudioScene> } callback - Callback used to obtain the latest audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    onAudioSceneChange(callback: Callback<AudioScene>): void;

    /**
     * Unsubscribes to audio scene change events.
     * @param { 'audioSceneChange' } type - Type of the event to listen for. Only the audioSceneChange event is
     * supported.
     * @param { Callback<AudioScene> } [callback] - Callback used in subscription.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void;

    /**
     * Unsubscribes to audio scene change events.
     * @param { Callback<AudioScene> } [callback] - Callback used in subscription.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    offAudioSceneChange(callback?: Callback<AudioScene>): void;

    /**
     * Subscribes to device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to device change events.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Listens for audio interruption events. When the audio of an application is interrupted by another application,
     * the callback is invoked to notify the former application.
     * @param { 'interrupt' } type - Type of the event to listen for. Only the interrupt event is supported.
     * @param { AudioInterrupt } interrupt - Parameters of the audio interruption event type.
     * @param { Callback<InterruptAction> } callback - Callback invoked for the audio interruption event.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void;

    /**
     * Cancels the listening of audio interruption events.
     * @param { 'interrupt' } type - Type of the event to listen for. Only the interrupt event is supported.
     * @param { AudioInterrupt } interrupt - Input parameters of the audio interruption event.
     * @param { Callback<InterruptAction> } callback - Callback invoked for the audio interruption event.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void;

    /**
     * Obtains an {@link AudioVolumeManager} instance.
     * @returns { AudioVolumeManager } AudioVolumeManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains an {@link AudioVolumeManager} instance.
     * @returns { AudioVolumeManager } AudioVolumeManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     */
    /**
     * Obtains an {@link AudioVolumeManager} instance.
     * @returns { AudioVolumeManager } AudioVolumeManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getVolumeManager(): AudioVolumeManager;

    /**
     * Obtains an {@link AudioStreamManager} instance.
     * @returns { AudioStreamManager } AudioStreamManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Obtains an {@link AudioStreamManager} instance.
     * @returns { AudioStreamManager } AudioStreamManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamManager(): AudioStreamManager;

    /**
     * Obtains an {@link AudioRoutingManager} instance.
     * @returns { AudioRoutingManager } AudioRoutingManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Obtains an {@link AudioRoutingManager} instance.
     * @returns { AudioRoutingManager } AudioRoutingManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRoutingManager(): AudioRoutingManager;

    /**
     * Obtains an {@link AudioSessionManager} instance.
     * @returns { AudioSessionManager } AudioSessionManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getSessionManager(): AudioSessionManager;

    /**
     * Obtains an {@link AudioSpatializationManager} instance.
     * @returns { AudioSpatializationManager } AudioSpatializationManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    getSpatializationManager(): AudioSpatializationManager;

    /**
     * Obtains an {@link AudioEffectManager} instance.
     * @returns { AudioEffectManager } AudioEffectManager instance.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getEffectManager(): AudioEffectManager;

    /**
     * Obtains a collaborative playback management instance.
     * @returns { AudioCollaborativeManager } Returns a collaborative playback management instance.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCollaborativeManager(): AudioCollaborativeManager;

    /**
     * user disable the safe media volume state.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    disableSafeMediaVolume(): Promise<void>;
  }

  /**
   * Enumerates audio interrupt request result type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestResultType {
    /**
     * Request audio interrupt success
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_GRANT = 0,
    /**
     * Request audio interrupt fail, may have higher priority type
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_REJECT = 1
  }

  /**
   * Describes audio interrupt operation results.
   * @typedef InterruptResult
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptResult {
    /**
     * Interrupt request or abandon result.
     * @type { InterruptRequestResultType }
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    requestResult: InterruptRequestResultType;
    /**
     * Interrupt node as a unit to receive interrupt change event.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    interruptNode: int;
  }

  /**
   * Desribes audio device block status. By default, the device is consider as unblocked.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  enum DeviceBlockStatus {
    /**
     * Device is unblocked.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    UNBLOCKED = 0,
    /**
     * Device is blocked.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    BLOCKED = 1,
  }

  /**
   * Desribes audio device block status info.
   * @typedef DeviceBlockStatusInfo
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  interface DeviceBlockStatusInfo {
    /**
     * Device block status.
     * @type {DeviceBlockStatus}
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    blockStatus: DeviceBlockStatus;

    /**
     * Audio device descriptors whose block status has changed.
     * @type {AudioDeviceDescriptors}
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
  }

  /**
   * Implements audio router management.
   * @typedef AudioRoutingManager
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 9
   */
  /**
   * Implements audio router management.
   * @typedef AudioRoutingManager
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioRoutingManager {
    /**
     * Obtains the audio devices with a specific flag. This method uses an asynchronous callback to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Obtains the audio devices with a specific flag. This method uses an asynchronous callback to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the audio devices with a specific flag. This method uses a promise to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Obtains the audio devices with a specific flag. This method uses a promise to return the query result.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * Obtains the audio devices with a specific flag.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { AudioDeviceDescriptors } The device list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Obtains the audio devices with a specific flag.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { AudioDeviceDescriptors } The device list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDevicesSync(deviceFlag: DeviceFlag): AudioDeviceDescriptors;

    /**
     * Subscribes to device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Subscribes to device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onDeviceChange(deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to device change events.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * UnSubscribes to device change events.
     * @param { 'deviceChange' } type - Type of the event to listen for. Only the deviceChange event is supported.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to device change events.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * Obtains all the available audio devices with a specific device usage.
     * @param { DeviceUsage } deviceUsage - Audio device usage.
     * @returns { AudioDeviceDescriptors } The device list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { 'availableDeviceChange' } type - Type of the event to listen for. Only the availableDeviceChange event is supported.
     * @param { DeviceUsage } deviceUsage - Audio device usage.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { DeviceUsage } deviceUsage - Audio device usage.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to available device change events.
     * @param { 'availableDeviceChange' } type - Type of the event to listen for. Only the availableDeviceChange event is supported.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to available device change events.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * Sets a device to the active state. This method uses an asynchronous callback to return the result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to
     *  the active status, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Sets a device to the active state. Only the current calling application can be set to take effect.
     * This method uses an asynchronous callback to return the result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to
     *  the active status, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets a device to the active state. This method uses a promise to return the result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to the active status,
     * and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Sets a device to the active state. Only the current calling application can be set to take effect.
     * This method uses a promise to return the result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { boolean } active - Active status to set. The value true means to set the device to the active status,
     * and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>;

    /**
     * Checks whether a device is active. This method uses an asynchronous callback to return the query result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Checks whether a device is active. This method uses an asynchronous callback to return the query result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a device is active. This method uses a promise to return the query result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @returns { Promise<boolean> } Promise used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Checks whether a device is active. This method uses a promise to return the query result.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @returns { Promise<boolean> } Promise used to return the active status of the device.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>;
    /**
     * Checks whether a device is active.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @returns { boolean } The active status of the device.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 10
     */
    /**
     * Checks whether a device is active.
     * @param { CommunicationDeviceType } deviceType - Audio device type.
     * @returns { boolean } The active status of the device.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActiveSync(deviceType: CommunicationDeviceType): boolean;

    /**
     * Select the output device. This method uses an asynchronous callback to return the result.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the output device. This method uses a promise to return the result.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the output device with desired AudioRenderer. This method uses an asynchronous callback to return the result.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the output device with desired AudioRenderer. This method uses a promise to return the result.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the output device with desired AudioRenderer. This method uses a promise to return the result.
     * @param { AudioRendererFilter } filter - Filter for affected AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device to select.
     * @param { AudioDevcieSelectStrategy } strategy - Target audio device select strategy.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, strategy: AudioDevcieSelectStrategy): Promise<void>;

    /**
     * Select the input device. This method uses an asynchronous callback to return the result.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device description
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the input device. This method uses a promise to return the result.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the input device with desired AudioCapturer. This method uses a promise to return the result.
     * @param { AudioCapturerFilter } filter - Filter for AudioCapturer.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device descriptions
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    selectInputDeviceByFilter(filter: AudioCapturerFilter, inputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Get output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Get output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Get output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Get output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>;

    /**
     * Gets preferred output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Gets preferred output device for target audio renderer info.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors;

    /**
     * Get the preferred output devices by the target audio renderer filter.
     * @param { AudioRendererFilter } filter - Audio renderer filter.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getPreferredOutputDeviceByFilter(filter: AudioRendererFilter): AudioDeviceDescriptors;

    /**
     * Subscribes to prefer output device change events. When prefer device for target audio renderer info changes,
     * registered clients will receive the callback.
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Type of the event to listen for. Only the
     * preferOutputDeviceChangeForRendererInfo event is supported.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Subscribes to prefer output device change events. When prefer device for target audio renderer info changes,
     * registered clients will receive the callback.
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Type of the event to listen for. Only the
     * preferOutputDeviceChangeForRendererInfo event is supported.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to prefer output device change events. When prefer device for target audio renderer info changes,
     * registered clients will receive the callback.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * UnSubscribes to prefer output device change events.
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Type of the event to listen for. Only the
     * preferOutputDeviceChangeForRendererInfo event is supported.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * UnSubscribes to prefer output device change events.
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Type of the event to listen for. Only the
     * preferOutputDeviceChangeForRendererInfo event is supported.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * UnSubscribes to prefer output device change events.
     * @param {Callback<AudioDeviceDescriptors> } [callback] - Callback used to obtain
     *     the changed prefer devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to prefer output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     * @param { 'preferredOutputDeviceChangeByFilter' } type - Type of the event to listen for. Only the
     *     preferredOutputDeviceChangeByFilter event is supported.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices
     *     information.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    on(type: 'preferredOutputDeviceChangeByFilter', filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to prefer output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices
     *     information.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 24 static
     */
    onPreferredOutputDeviceChangeByFilter(filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * UnSubscribes to prefer output device change events.
     * @param { 'preferredOutputDeviceChangeByFilter' } type - Type of the event to listen for. Only the
     *     preferredOutputDeviceChangeByFilter event is supported.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    off(type: 'preferredOutputDeviceChangeByFilter', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * UnSubscribes to preferred output device change events.
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 24 static
     */
    offPreferredOutputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Get input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Get input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Get input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Get input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>;

    /**
     * Get the preferred input device for the target audio capturer filter.
     * @param { AudioCapturerFilter } filter - Audio capturer filter.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceByFilter(filter: AudioCapturerFilter): AudioDeviceDescriptors;

    /**
     * Subscribes to preferred input device change events. When preferred device for target audio capturer info changes,
     * registered clients will receive the callback.
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Type of the event to listen for.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Subscribes to preferred input device change events. When preferred device for target audio capturer info changes,
     * registered clients will receive the callback.
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Type of the event to listen for.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'preferredInputDeviceChangeForCapturerInfo', capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;
    
    /**
     * Subscribes to preferred input device change events. When preferred device for target
     * audio capturer info changes, registered clients will receive the callback.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the
     *     changed preferred devices information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to preferred input device change events.
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Unsubscribes to preferred input device change events.
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'preferredInputDeviceChangeForCapturerInfo', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to preferred input device change events.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain
     *     the changed preferred devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Gets preferred input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Gets preferred input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfoSync(capturerInfo: AudioCapturerInfo): AudioDeviceDescriptors;

    /**
     * Query whether microphone block detection is supported on current device.
     * @returns { Promise<boolean> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    isMicBlockDetectionSupported():Promise<boolean>;

    /**
     * Subscribes microphone blocked events. Before subscribing, users should query whether block detection is supported
     * on current device. The caller will receive the callback only when it is recording and the used
     * microphones' block status have changed. Currently, block detecting is only support for microphones located on
     * the local device.
     * @param { 'micBlockStatusChanged' } type - Type of the event to listen for.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     */
    on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Subscribes microphone blocked events. Before subscribing, users should query whether block detection is supported
     * on current device. The caller will receive the callback only when it is recording and the used
     * microphones' block status have changed. Currently, block detecting is only support for microphones located on
     * the local device.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onMicBlockStatusChanged(callback: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Unsubscribes microphone blocked events.
     * @param { 'microphoneBlockStatusChanged' } type - Type of the event to listen for.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     */
     off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Unsubscribes microphone blocked events.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offMicBlockStatusChanged(callback?: Callback<DeviceBlockStatusInfo>): void;
    
    /**
     * Exclude output devices. After calling this function successfully, audio will not be played on the specified
     * devices. Note that only the external ouput device can be excluded by this function. Local output devices is not
     * accepted.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be excluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Exclude output devices. After calling this function successfully, audio will not be played on the specified
     * devices. Note that only the external ouput device can be excluded by this function. Local output devices is not
     * accepted.
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be excluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 23 dynamic&static
     */
    excludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Unexclude output devices.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be unexcluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Unexclude output devices. This function will unexclude target output devices belong to specific usage.
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be unexcluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 23 dynamic&static
     */
    unexcludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Unexclude output devices. This function will unexclude all output devices belong to specific usage.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     */
    /**
     * Unexclude output devices. This function will unexclude all output devices belong to specific usage.
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 23 dynamic&static
     */
    unexcludeOutputDevices(usage: DeviceUsage): Promise<void>;

    /**
     * Get excluded devices by filter.
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @returns { AudioDeviceDescriptors } Exclueded devices.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getExcludedDevices(usage: DeviceUsage): AudioDeviceDescriptors;
  }

  /**
   * Implements audio stream management.
   * @typedef AudioStreamManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 9
   */
  /**
   * Implements audio stream management.
   * @typedef AudioStreamManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioStreamManager {
    /**
     * Get information of current existing audio renderers.
     * @param { AsyncCallback<AudioRendererChangeInfoArray> } callback - Callback used to return the information
     * of current existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Get information of current existing audio renderers.
     * @param { AsyncCallback<AudioRendererChangeInfoArray> } callback - Callback used to return the information
     * of current existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void;

    /**
     * Get information of current existing audio renderers.
     * @returns { Promise<AudioRendererChangeInfoArray> } Promise used to return the information of current
     * existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Get information of current existing audio renderers.
     * @returns { Promise<AudioRendererChangeInfoArray> } Promise used to return the information of current
     * existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>;

    /**
     * Get information of current existing audio renderers.
     * @returns { AudioRendererChangeInfoArray } The information of current existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Get information of current existing audio renderers.
     * @returns { AudioRendererChangeInfoArray } The information of current existing audio renderers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray;

    /**
     * Get information of current existing audio capturers.
     * @param { AsyncCallback<AudioCapturerChangeInfoArray> } callback - Callback used to return the information
     * of current existing audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Get information of current existing audio capturers.
     * @param { AsyncCallback<AudioCapturerChangeInfoArray> } callback - Callback used to return the information
     * of current existing audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void;

    /**
     * Get information of current existing audio capturers.
     * @returns { Promise<AudioCapturerChangeInfoArray> } Promise used to return the information of current existing
     * audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Get information of current existing audio capturers.
     * @returns { Promise<AudioCapturerChangeInfoArray> } Promise used to return the information of current existing
     * audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>;

    /**
     * Get information of current existing audio capturers.
     * @returns { AudioCapturerChangeInfoArray } The information of current existing audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Get information of current existing audio capturers.
     * @returns { AudioCapturerChangeInfoArray } The information of current existing audio capturers.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray;

    /**
     * Gets information of audio effects.
     * @param { StreamUsage } usage - Stream usage.
     * @param { AsyncCallback<AudioEffectInfoArray> } callback - Callback used to return the information of audio effects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void;

    /**
     * Gets information of audio effects.
     * @param { StreamUsage } usage - Stream usage.
     * @returns { Promise<AudioEffectInfoArray> } Promise used to return the information of audio effects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>;

    /**
     * Gets information of audio effects.
     * @param { StreamUsage } usage - Stream usage.
     * @returns { AudioEffectInfoArray } The information of audio effects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray;

    /**
     * Listens for audio renderer change events. When there is any audio renderer change,
     * registered clients will receive the callback.
     * @param { 'audioRendererChange' } type - Type of the event to listen for. Only the audioRendererChange event is supported.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Listens for audio renderer change events. When there is any audio renderer change,
     * registered clients will receive the callback.
     * @param { 'audioRendererChange' } type - Type of the event to listen for. Only the audioRendererChange event is supported.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Listens for audio renderer change events. When there is any audio renderer change,
     * registered clients will receive the callback.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onAudioRendererChange(callback: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * UnSubscribes to audio renderer change events.
     * @param { 'audioRendererChange' } type - Type of the event to listen for. Only the audioRendererChange event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * UnSubscribes to audio renderer change events.
     * @param { 'audioRendererChange' } type - Type of the event to listen for. Only the audioRendererChange event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes to audio renderer change events.
     * @param { 'audioRendererChange' } type - Type of the event to listen for. Only the audioRendererChange event is supported.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Unsubscribes to audio renderer change events.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offAudioRendererChange(callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Listens for audio capturer change events. When there is any audio capturer change,
     * registered clients will receive the callback.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for. Only the audioCapturerChange event is supported.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Listens for audio capturer change events. When there is any audio capturer change,
     * registered clients will receive the callback.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for. Only the audioCapturerChange event is supported.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Listens for audio capturer change events. When there is any audio capturer change,
     * registered clients will receive the callback.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * UnSubscribes to audio capturer change events.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for. Only the audioCapturerChange event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * UnSubscribes to audio capturer change events.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for. Only the audioCapturerChange event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes to audio capturer change events.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for. Only the audioCapturerChange event is supported.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Unsubscribes to audio capturer change events.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Checks whether a stream is active. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the stream.
     *  The value true means that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Checks whether a stream is active. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the active status of the stream.
     *  The value true means that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is active. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<boolean> } Promise used to return the active status of the stream. The value
     * true means that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Checks whether a stream is active. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<boolean> } Promise used to return the active status of the stream. The value
     * true means that the stream is active, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is active.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { boolean } The active status of the stream.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Checks whether a stream is active.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { boolean } The active status of the stream.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActiveSync(volumeType: AudioVolumeType): boolean;

    /**
     * Checks whether a stream is active.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { boolean } The active status of the stream.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    isStreamActive(streamUsage: StreamUsage): boolean;
    /**
     * Checks whether the specified audio source type supports echo cancellation
     * @param { SourceType } sourceType Type of audio source.
     * @returns { boolean } Check result. The value <b>true</b> means that the audio source type supports echo
     *     cancellation, and <b>false</b> means the opposite.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAcousticEchoCancelerSupported(sourceType: SourceType): boolean;

    /**
     * Checks whether the current platform supports audio loopback.
     * @param   { AudioLoopbackMode } mode Audio loopback mode.
     * @returns { boolean } Check result. The value <b>true</b> means that the current platform supports audio loopback,
     *          and <b>false</b> means the opposite.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean;

    /**
     * Checks whether the audio recording for specific capturer info can start.
     * Usually this function will be used before audio recording start, because
     * other existing recording stream may deny it.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer infomation used in creation.
     * @returns { boolean } Value <b><true></b> means audio recording can start.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean;

    /**
     * Checks whether the system recording enables Intelligent noise reduction for current device.
     *
     * @param { SourceType } sourceType - Type of audio source.
     * @returns { boolean } Check result. The value <b>true</b> means that the system recording enables intelligent
           noise reduction for current device, and <b>false</b> means the opposite.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean;

    /**
     * Return if fast playback is supported for the specific audio stream info and usage type
     *     in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if fast playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if offload playback is supported for the specific audio stream info and usage type
     *     in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if offload playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if direct playback is supported for the specific audio stream info and usage type
     *     in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if direct playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if fast recording is supported for the specific audio stream info and usage type
     *     in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { SourceType } source - stream source type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if fast recording is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean;

    /**
     * Return if multichannel playback is supported for the specific audio stream info and usage type
     *     in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if multichannel playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

  }

  /**
   * Audio concurrency mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioConcurrencyMode {
    /**
     * Default concurrency mode.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DEFAULT = 0,
    /**
     * Mix with others mode.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_MIX_WITH_OTHERS = 1,
    /**
     * Duck others mode.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DUCK_OTHERS = 2,
    /**
     * Pause others mode.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_PAUSE_OTHERS = 3,
  }

  /**
   * Audio session deactivated reason.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSessionDeactivatedReason {
    /**
     * Lower priority.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_LOWER_PRIORITY = 0,
    /**
     * Time out.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_TIMEOUT = 1,
  }

  /**
   * Audio session scene.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionScene {
    /**
     * Scene for media.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_MEDIA = 0,
    /**
     * Scene for game.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_GAME = 1,
    /**
     * Scene for voice communication.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_VOICE_COMMUNICATION = 2,
  }

  /**
   * Enumerates the session state change hints.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionStateChangeHint {
    /**
     * Resume the playback.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_RESUME = 0,

    /**
     * Paused/Pause the playback.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE = 1,

    /**
     * Stopped/Stop the playback due to focus priority.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_STOP = 2,

    /**
     * Stopped/Stop the playback due to no audio stream for a long time.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP = 3,

    /**
     * Ducked the playback. (In ducking, the audio volume is reduced, but not silenced.)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_DUCK = 4,

    /**
     * Unducked the playback.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK = 5,

    /**
     * Suggests to mute the playback because there is another application begin to play nonmixable
     * audio, application can decide whether to mute.
     * If interrupt strategy is duck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_DUCK} will replace mute suggestion event,
     * but application can still decide to mute when receive hint duck.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION = 6,

    /**
     * Suggest to unmute the playback because another application's nonmixable audio ends,
     * application can decide whether to mute.
     * If interrupt strategy is unduck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK} will replace unmute
     * suggestion event, but application can still decide to unmute when receive hint unduck.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7,

    /**
     * The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED}
     * has been set by the interface {@link #setAudioSessionBehavior}
     * and {@link #setAudioSessionScene} has been called, and the audio session has been activated.
     * After the hint is received, the audio stream is muted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE = 8,

    /**
     * The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED}
     * has been set by the interface {@link #setAudioSessionBehavior}
     * and {@link #setAudioSessionScene} has been called, and the audio session has been activated.
     * When the hint is received, the audio stream is unmuted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE = 9
  }

  /**
   * Enumerates the recommend action when device change.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum OutputDeviceChangeRecommendedAction {
    /**
     * Recommend to continue the playback.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_CONTINUE = 0,
    /**
     * Recommend to stop the playback.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_STOP = 1,
  }

  /**
   * Enumerates audio session behavior flags.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AudioSessionBehaviorFlags {
    /**
     * Default behavior, used to clear behavior settings.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
     DEFAULT_BEHAVIOR = 0x00000000,

      /**
      * Non-privacy VoIP, allowed to be recorded.
      *
      * @syscap SystemCapability.Multimedia.Audio.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
      VOIP_PRIVACY_TYPE_PUBLIC = 0x00000001,

    /**
     * When the audio stream is interrupted by the system, it performs a forced mute instead.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MUTE_WHEN_INTERRUPTED = 0x00000002
  }

  /**
   * Audio session strategy.
   * @typedef AudioSessionStrategy
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionStrategy {
    /**
     * Audio concurrency mode.
     * @type { AudioConcurrencyMode }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    concurrencyMode: AudioConcurrencyMode;
  }

  /**
   * Audio session deactivated event.
   * @typedef AudioSessionDeactivatedEvent
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionDeactivatedEvent {
    /**
     * Audio session deactivated reason.
     * @type { AudioSessionDeactivatedReason }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    reason: AudioSessionDeactivatedReason;
  }

  /**
   * Audio session state change event.
   * @typedef AudioSessionStateChangedEvent
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioSessionStateChangedEvent {
    /**
     * Audio session state change hints.
     * @type { AudioSessionStateChangeHint }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    stateChangeHint: AudioSessionStateChangeHint;
  }

  /**
   * Audio session device change info.
   * @typedef CurrentOutputDeviceChangedEvent
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface CurrentOutputDeviceChangedEvent {
    /**
     * Audio device descriptors after change.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio device change reason.
     * @type { AudioStreamDeviceChangeReason }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    changeReason: AudioStreamDeviceChangeReason;
    /**
     * Recommend action when device change.
     * @type { OutputDeviceChangeRecommendedAction }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    recommendedAction: OutputDeviceChangeRecommendedAction;
  }

  /**
   * Enumerates the categories application prefer to use
   * when recording with bluetooth and nearlink.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  enum BluetoothAndNearlinkPreferredRecordCategory {
    /**
     * Not prefer to use bluetooth and nearlink to record.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_NONE = 0,
    /**
     * Prefer to use bluetooth and nearlink to record.
     * However, whether to use low latency or high quality recording depends on system.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_DEFAULT = 1,
    /**
     * Prefer to use bluetooth and nearlink low latency mode to record.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_LOW_LATENCY = 2,
    /**
     * Prefer to use bluetooth and nearlink high quality mode to record.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_HIGH_QUALITY = 3,
  }

  /**
   * Audio session input device change info.
   * @typedef CurrentInputDeviceChangedEvent
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  interface CurrentInputDeviceChangedEvent {
    /**
     * Audio input device descriptors after change.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio input device change reason.
     * @type { AudioStreamDeviceChangeReason }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    changeReason: AudioStreamDeviceChangeReason;
  }

  /**
   * Implements audio session management.
   * @typedef AudioSessionManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionManager {
    /**
     * Activate the audio session for the current pid application.
     * If {@link setAudioSessionScene} is called, it will take focus when calling this method.
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - System error. Returned by promise.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    activateAudioSession(strategy: AudioSessionStrategy): Promise<void>;

    /**
     * Deactivate the audio session for the current pid application.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800301 - System error. Returned by promise.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    deactivateAudioSession(): Promise<void>;

    /**
     * Check whether the audio session is activated for the current pid application.
     * @returns { boolean } The active audio session status for the current pid application.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isAudioSessionActivated(): boolean;

    /**
     * Listens for audio session deactivated event. When the audio session is deactivated,
     * registered clients will receive the callback.
     * @param { 'audioSessionDeactivated' } type - Type of the event to listen for. Only the audioSessionDeactivated event is supported.
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback invoked for the audio session deactivated event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioSessionDeactivated', callback: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * Listens for audio session deactivated event. When the audio session is deactivated,
     * registered clients will receive the callback.
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback invoked for the audio session deactivated event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 23 static
     */
    onAudioSessionDeactivated(callback: Callback<AudioSessionDeactivatedEvent>): void;

    /**
    * Unsubscribes to audio session deactivated event.
    * @param { 'audioSessionDeactivated' } type - Type of the event to listen for. Only the audioSessionDeactivated event is supported.
    * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback invoked for the audio session deactivated event.
    * @throws { BusinessError } 401 - Parameter error. Possible causes:
    *                                 1.Mandatory parameters are left unspecified;
    *                                 2.Incorrect parameter types.
    * @throws { BusinessError } 6800101 - Parameter verification failed.
    * @syscap SystemCapability.Multimedia.Audio.Core
    * @crossplatform
    * @since 12 dynamic
    */
    off(type: 'audioSessionDeactivated', callback?: Callback<AudioSessionDeactivatedEvent>): void;

    /**
    * Unsubscribes to audio session deactivated event.
    * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback invoked for
    *     the audio session deactivated event.
    * @throws { BusinessError } 6800101 - Parameter verification failed.
    * @syscap SystemCapability.Multimedia.Audio.Core
    * @since 23 static
    */
   offAudioSessionDeactivated(callback?: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * Set scene for audio session.
     * @param { AudioSessionScene } scene - Audio session scene.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
     setAudioSessionScene(scene: AudioSessionScene): void;

    /**
     * Set mute hint for all capturer streams in the current audio session. It dose not mute the recording
     * stream, only affects internal processing strategy.
     * @param { boolean } mute - Use true if application recording stream muted by application if self.
     * @throws { BusinessError } 6800103 - Operation not permit at current state, there is no audio capturer running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setCapturerMuteHint(mute: boolean): Promise<void>;

    /**
     * Listens for audio session state change event. When the audio session state change,
     * registered clients will receive the callback.
     * @param { 'audioSessionStateChanged' } type - Type of the event to listen for.
     * Only the audioSessionStateChanged event is supported.
     * @param { Callback<AudioSessionStateChangedEvent> } callback - Callback invoked for the audio session state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     */
    on(type: 'audioSessionStateChanged', callback: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Listens for audio session state change event. When the audio session state change,
     * registered clients will receive the callback.
     * @param { Callback<AudioSessionStateChangedEvent> } callback - Callback invoked for the audio
     *     session state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 23 static
     */
    onAudioSessionStateChanged(callback: Callback<AudioSessionStateChangedEvent>): void;

    /**
    * Unsubscribes to audio session deactivated event.
    * @param { 'audioSessionStateChanged' } type - Type of the event to listen for.
    * Only the audioSessionStateChanged event is supported.
    * @param { Callback<AudioSessionStateChangedEvent> } [callback] - Callback invoked for the audio session state change event.
    * @throws { BusinessError } 6800101 - Parameter verification failed.
    * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
    * @syscap SystemCapability.Multimedia.Audio.Core
    * @since 20 dynamic
    */
    off(type: 'audioSessionStateChanged', callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
    * Unsubscribes to audio session deactivated event.
    * @param { Callback<AudioSessionStateChangedEvent> } [callback] - Callback invoked for the audio
    *     session state change event.
    * @throws { BusinessError } 6800101 - Parameter verification failed.
    * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
    * @syscap SystemCapability.Multimedia.Audio.Core
    * @since 23 static
    */
    offAudioSessionStateChanged(callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Gets the default output device.
     * @returns { DeviceType } - the available deviceTypes are
     *                           EARPIECE: Built-in earpiece
     *                           SPEAKER: Built-in speaker
     *                           DEFAULT: System default output device
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    getDefaultOutputDevice(): DeviceType;

    /**
     * Temporarily changes the current audio device
     * This function applys on audiorenderers whose StreamUsage are
     * STREAM_USAGE_VOICE_COMMUNICATION/STREAM_USAGE_VIDEO_COMMUNICATION/STREAM_USAGE_VOICE_MESSAGE.
     * Setting the device will only takes effect if no other accessory such as headphones are in use
     * @param { DeviceType } deviceType - the available deviceTypes are
     *                                    EARPIECE: Built-in earpiece
     *                                    SPEAKER: Built-in speaker
     *                                    DEFAULT: System default output device
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800102 - Allocate memory failed. Return by promise.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when device change.
     * @param { 'currentOutputDeviceChanged' } type - Type of the event to listen for.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     */
    on(type: 'currentOutputDeviceChanged', callback: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when device change.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onCurrentOutputDeviceChanged(callback: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * UnSubscribes output device change event callback.
     * @param { 'currentOutputDeviceChanged' } type - Type of the event to listen for.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     */
    off(type: 'currentOutputDeviceChanged', callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * UnSubscribes output device change event callback.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offCurrentOutputDeviceChanged(callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Obtains all the available audio devices with a specific device usage.
     * @param { DeviceUsage } deviceUsage - Audio device usage to filter available devices.
     * @returns { AudioDeviceDescriptors } The device list.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients
     * will receive the callback.
     * @param { 'availableDeviceChange' } type - Type of the event to listen for. Only the availableDeviceChange
     *     event is supported.
     * @param { DeviceUsage } deviceUsage - Audio device usage to filter available devices.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients
     * will receive the callback.
     *
     * @param { DeviceUsage } deviceUsage - Audio device usage to filter available devices.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes to available device change events.
     * @param { 'availableDeviceChange' } type - Type of the event to listen for. Only the availableDeviceChange
     *     event is supported.
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes to available device change events.
     *
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * Selects the media input device. It uses a promise to return the result.
     * This function is not valid for call recording, whose SourceType is
     * SOURCE_TYPE_VOICE_CALL or SOURCE_TYPE_VOICE_COMMUNICATION.
     * In scenarios where there are concurrent recording streams with higher priority,
     * the actual input device used by the application may differ from the selected one.
     * The application can obtain currently active input device by subscribing to the
     * currentInputDeviceChanged event.
     * @param { AudioDeviceDescriptor } inputAudioDevice - Audio device description.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    selectMediaInputDevice(inputAudioDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * Gets the selected media input device. If never set, it returns a device descriptor
     * with INVALID DeviceType.
     * @returns { AudioDeviceDescriptor } - Selected audio device.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getSelectedMediaInputDevice(): AudioDeviceDescriptor;

    /**
     * Clears the selected media input device.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    clearSelectedMediaInputDevice(): Promise<void>;

    /**
     * Sets the prefered record category with bluetooth and nearlink device.
     * The application can set this category before bluetooth or nearlink connected, and the system will
     * prefer to use bluetooth and nearlink to record when the device connected.
     * In scenarios where there are concurrent recording streams with higher priority,
     * the actual input device used by the application may differ from the prefered one.
     * The application can obtain currently active input device by subscribing to the
     * currentInputDeviceChanged event.
     * @param { BluetoothAndNearlinkPreferredRecordCategory } category - The category application prefer
     *     to use when recording with bluetooth and nearlink.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    setBluetoothAndNearlinkPreferredRecordCategory(category: BluetoothAndNearlinkPreferredRecordCategory): Promise<void>;

    /**
     * Gets the prefered record category with bluetooth and nearlink device.
     * @returns { BluetoothAndNearlinkPreferredRecordCategory } - The category application prefer
     *     to use when recording with bluetooth and nearlink.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getBluetoothAndNearlinkPreferredRecordCategory(): BluetoothAndNearlinkPreferredRecordCategory;

    /**
     * Subscribes input device change event callback. The event is triggered when current input device change.
     * @param { 'currentInputDeviceChanged' } type - Type of the event to listen for.
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - Callback used to listen input device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Subscribes input device change event callback. The event is triggered when current input device change.
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - Callback used to listen input device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    onCurrentInputDeviceChanged(callback: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Unsubscribes current input device change events.
     * @param { 'currentInputDeviceChanged' } type - Type of the event to listen for.
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    off(type: 'currentInputDeviceChanged', callback?: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Unsubscribes current input device change events.
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    offCurrentInputDeviceChanged(callback?: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Enables mute suggestion callback function when using {@link #CONCURRENCY_MIX_WITH_OTHERS} mode.
     * Usually when using mix mode, application won't receive state change event when there is another audio playing
     * simultaneously. But in some scenarios, like game or radio, the application may intend to mute its audio to
     * achieve better user experience.
     * If enabled, the mute and unmute suggestion hint will be sent by {@link #AudioSessionStateChangedEvent}
     * when subscribes to audioSessionStateChanged event. Mute suggestion means there is another application
     * starting non-mixable audio.
     * This function only supports audio session with {@link #AudioSessionScene} set and activated with
     * {@link #CONCURRENCY_MIX_WITH_OTHERS} mode. And it takes effect only once during activation, so application
     * need to enable it every time before activation.
     *
     * @param { boolean } enable - Sets true to enable mute suggestion while registering session state
     *     change event callback.
     * @throws { BusinessError } 6800103 - Function is called without setting {@link #AudioSessionScene} or
     *     called after audio session activation.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, system internal error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enableMuteSuggestionWhenMixWithOthers(enable: boolean): void;

    /**
     * Returns if there is any other application playing audio in media usage, including media session activated.
     * @returns { boolean } True if there is other application playing audio in media usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOtherMediaPlaying(): boolean;

    /**
     * Set audio session behavior parameters (supporting multiple flag combinations)
     * This interface takes effect only after the interface {@link #setAudioSessionScene} is called.
     * Each time you call this interface to set parameters,
     * you need to call the interface {@link #activateAudioSession} again for the settings to take effect.
     *
     * @param { int } behavior - Used to adjust the focus behavior.
     *     <br>Value range: behavior can be a single flag or a bitwise OR combination of multiple flags
     *     in {@link #AudioSessionBehaviorFlags}.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in the current state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAudioSessionBehavior(behavior: int): void;
  }

  /**
   * Array of StreamUsages.
   * @typedef { Array<StreamUsage> } StreamUsageArray
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type StreamUsageArray = Array<StreamUsage>;

  /**
   * Implements audio volume management.
   * @typedef AudioVolumeManager
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 9
   */
  /**
   * Implements audio volume management.
   * @typedef AudioVolumeManager
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @since 12 dynamic
   */
  /**
   * Implements audio volume management.
   * @typedef AudioVolumeManager
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface AudioVolumeManager {
    /**
     * Get the volume group list for a networkId. This method uses an asynchronous callback to return the result.
     * @param { string } networkId - Distributed deice net work id
     * @param { AsyncCallback<VolumeGroupInfos> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string, callback: AsyncCallback<VolumeGroupInfos>): void;
    /**
     * Get the volume group list for a networkId. This method uses a promise to return the result.
     * @param { string } networkId - Distributed deice net work id
     * @returns { Promise<VolumeGroupInfos> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string): Promise<VolumeGroupInfos>;
    /**
     * Get the volume group list for a networkId.
     * @param { string } networkId - Distributed deice net work id
     * @returns { VolumeGroupInfos } Volume group info list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getVolumeGroupInfosSync(networkId: string): VolumeGroupInfos;

    /**
     * Obtains an AudioVolumeGroupManager instance. This method uses an asynchronous callback to return the result.
     * @param { int } groupId - volume group id, use LOCAL_VOLUME_GROUP_ID in default
     * @param { AsyncCallback<AudioVolumeGroupManager> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains an AudioVolumeGroupManager instance. This method uses an asynchronous callback to return the result.
     * @param { int } groupId - volume group id, use LOCAL_VOLUME_GROUP_ID in default
     * @param { AsyncCallback<AudioVolumeGroupManager> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>): void;
    /**
     * Obtains an AudioVolumeGroupManager instance. This method uses a promise to return the result.
     * @param { int } groupId - volume group id, use LOCAL_VOLUME_GROUP_ID in default
     * @returns { Promise<AudioVolumeGroupManager> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains an AudioVolumeGroupManager instance. This method uses a promise to return the result.
     * @param { int } groupId - volume group id, use {@link DEFAULT_VOLUME_GROUP_ID} in default
     * @returns { Promise<AudioVolumeGroupManager> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int): Promise<AudioVolumeGroupManager>;
    /**
     * Obtains an AudioVolumeGroupManager instance.
     * @param { int } groupId - volume group id, use LOCAL_VOLUME_GROUP_ID in default
     * @returns { AudioVolumeGroupManager } The audio volume group manager instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Obtains an AudioVolumeGroupManager instance.
     * @param { int } groupId - volume group id, use {@link DEFAULT_VOLUME_GROUP_ID} in default.
     * @returns { AudioVolumeGroupManager } The audio volume group manager instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     */
    /**
     * Obtains an AudioVolumeGroupManager instance.
     * @param { int } groupId - volume group id, use {@link DEFAULT_VOLUME_GROUP_ID} in default.
     * @returns { AudioVolumeGroupManager } The audio volume group manager instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getVolumeGroupManagerSync(groupId: int): AudioVolumeGroupManager;

    /**
     * Get the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    getAppVolumePercentageForUid(uid: int): Promise<int>;

    /**
     * Sets the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { int } volume - Volume to set. The value range is from 0 to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setAppVolumePercentageForUid(uid: int, volume: int): Promise<void>;

    /**
     * Gets the current system volume percentage for specified volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type to get.
     * @returns { int } Returns the volume percentage, which is an interger with the range [0, 100].
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * Sets the system volume percentage, using an integer ranging from minimum system volume percentage to 100.
     * The volume percentage corresponds to volume levels, with each level tied to a specific percentage.
     * When the volume level changes, the volume percentage adjusts accordingly and is mapped within the range of volume levels.
     * Zero volume is mapped to 0, and the maximum volume is mapped to 100%. Intermediate volume levels are evenly
     * distributed beween 1 and 99. When the volume percentage changes, the volume level changes accordingly.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { AudioVolumeType } volumeType - Audio volume type to set.
     * @param { int } percentage - Percentage to set. It must be an integer with the range
     *     from minimum value getted by {@link #getMinSystemVolumePercentage} to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed, including
     *     volumeType or percentage param begin out of range.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    setSystemVolumePercentage(volumeType: AudioVolumeType, percentage: int): Promise<void>;

    /**
     * Gets the minimum system volume percentage application can set for specified volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type to get.
     * @returns { int } Returns the volume percentage, which is an interger with the range [0, 100].
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getMinSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * Checks whether the app volume is muted. If there are multiple callers setting muted states,
     * only when all callers cancel muted state the volume of this app will be truly unmuted.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { boolean } owned - If true is passed, the result will be indicated your owned muted state
     * settings to this app. Otherwise if false is passed, the result will be indicated the real muted state.
     * @returns { Promise<boolean> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    isAppVolumeMutedForUid(uid: int, owned: boolean): Promise<boolean>;

    /**
     * Change mute state of specified application volume. If there are multiple callers setting muted states,
     * only when all callers cancel muted state the volume of this app will be truly unmuted.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { boolean } muted - Muted state to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setAppVolumeMutedForUid(uid: int, muted: boolean): Promise<void>;

    /**
     * Get the volume for your app with range from 0 to 100. Applications with the same uid share the same volume.
     * @returns { Promise<int> } The application's volume percentage. The value range is from 0 to 100.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    /**
     * Get the volume for your app with range from 0 to 100. Applications with the same uid share the same volume.
     * @returns { Promise<int> } The application's volume percentage. The value range is from 0 to 100.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice
     * @since 23 dynamic&static
     */
    getAppVolumePercentage(): Promise<int>;

    /**
     * Sets the volume for your app with range from 0 to 100. Applications with the same uid share the same volume.
     * Only AudioRenderers with {@link AudioRendererInfo.volumeMode} set to {@link AudioVolumeMode.APP_INDIVIDUAL}
     * will be affected by this volume.
     * When you change your app's volume, you will receive 'appVolumeChange' callback event.
     * Your app volume can be also changed by other system settings, and you can monitor the changes through
     * 'appVolumeChange' callback.
     * @param { int } volume - Volume to set. The value range is from 0 to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    /**
     * Sets the volume for your app with range from 0 to 100. Applications with the same uid share the same volume.
     * Only AudioRenderers with {@link AudioRendererInfo.volumeMode} set to {@link AudioVolumeMode.APP_INDIVIDUAL}
     * will be affected by this volume.
     * When you change your app's volume, you will receive 'appVolumeChange' callback event.
     * Your app volume can be also changed by other system settings, and you can monitor the changes through
     * 'appVolumeChange' callback.
     * @param { int } volume - Volume to set. The value range is from 0 to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice
     * @since 23 dynamic&static
     */
    setAppVolumePercentage(volume: int): Promise<void>;

    /**
     * Sets the volume for specific uid application. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { int } callingUid - Uid of the stream owner.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setSystemVolumeByUid(volumeType: AudioVolumeType, volume: int, callingUid: int): Promise<void>;

    /**
     * Obtains the volume of streams in specific uid application.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } callingUid - Uid of the stream owner.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSystemVolumeByUid(volumeType: AudioVolumeType, callingUid: int): int;

    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'volumeChange' } type - Type of the event to listen for. Only the volumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'volumeChange' } type - Type of the event to listen for. Only the volumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the volume change events..
     * @param { 'volumeChange' } type - Type of the event to be unregistered. Only the volumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange
     */
    off(type: 'volumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Listens for specified app volume change events.
     * The app volume may changed by {@link setAppVolumePercentageForUid}.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - Type of the event to listen for. Only the
     * appVolumeChangeForUid event is supported.
     * @param { int } uid - The app's uid.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    on(type: 'appVolumeChangeForUid', uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * Listens for specified app volume change events.
     * The app volume may changed by {@link setAppVolumePercentageForUid}.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - The app's uid.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onAppVolumeChangeForUid(uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - Type of the event to be unregistered. Only the appVolumeChangeForUid
     * event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    off(type: 'appVolumeChangeForUid', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offAppVolumeChangeForUid(callback?: Callback<VolumeEvent>): void;

    /**
     * Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage}
     * or other system settings.
     * @param { 'appVolumeChange' } type - Type of the event to listen for. Only the appVolumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage}
     * or other system settings.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onAppVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @param { 'appVolumeChange' } type - Type of the event to be unregistered. Only the appVolumeChange event
     * is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offAppVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * Subscribes to active volume type changes.
     * @param { 'activeVolumeTypeChange' } type - Type of the event to listen for.
     * Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } callback - Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void;

    /**
     * Subscribes to active volume type changes.
     * @param { Callback<AudioVolumeType> } callback Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void;

    /**
     * Unsubscribes from active volume type changes.
     * @param { 'activeVolumeTypeChange' } type - Type of the event to unregister.
     * Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } [callback] - Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void;

    /**
     * Unsubscribes from active volume type changes.
     * @param { Callback<AudioVolumeType> } [callback] Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offActiveVolumeTypeChange(callback?: Callback<AudioVolumeType>): void;

    /**
     * Subscribes to system volume percentage change events.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the system volume percentage change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    onVolumePercentageChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes from system volume percentage change events.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the system volume percentage change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    offVolumePercentageChange(callback?: Callback<VolumeEvent>): void;

   /**
     * Obtains the volume of a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Obtains the minimum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMinSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Obtains the maximum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMaxSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Checks whether a volume type is muted.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { boolean } The mute status of the volume type. The value true
     * means that the volume type is muted, and false means the opposite.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMuted(volumeType: AudioVolumeType): boolean;

    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { double } The system volume in dB.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double;

    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'systemVolumeChange' } type - Type of the event to listen for.
     * Only the systemVolumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'systemVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onSystemVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the system volume change events.
     * @param { 'systemVolumeChange' } type - Type of the event to be unregistered.
     * Only the systemVolumeChange event is supported.
     * @param { Callback<VolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'systemVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the system volume change events.
     * @param { Callback<VolumeEvent> } [callback] Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offSystemVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * Obtains the volume of a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    /**
     * Obtains the volume of a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice
     * @since 23 dynamic&static
     */
    getVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Obtains the minimum volume allowed for a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    /**
     * Obtains the minimum volume allowed for a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice
     * @since 23 dynamic&static
     */
    getMinVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Obtains the maximum volume allowed for a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    /**
     * Obtains the maximum volume allowed for a stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice
     * @since 23 dynamic&static
     */
    getMaxVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Checks whether the system is muted based on the stream.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { boolean } The mute status of the stream. The value true
     * means that the stream is muted, and false means the opposite.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMutedForStream(streamUsage: StreamUsage): boolean;

    /**
     * Gets the volume db value that system calculate by volume stream, volume level and device type.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { double } The system volume in dB.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: int, device: DeviceType): double;

    /**
     * Obtains system supported volume types.
     * @returns { Array<Readonly<AudioVolumeType>> } Return the system volume type array.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSupportedAudioVolumeTypes(): Array<Readonly<AudioVolumeType>>;

    /**
     * Obtains volume type by stream type.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { AudioVolumeType } Return the audio volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getAudioVolumeTypeByStreamUsage(streamUsage: StreamUsage): AudioVolumeType;

    /**
     * Obtains stream types by volume type.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { StreamUsageArray } Return the audio stream types.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getStreamUsagesByVolumeType(volumeType: AudioVolumeType): StreamUsageArray;

    /**
     * Listens for stream volume change events. This method uses a callback to get volume change events.
     * @param { 'streamVolumeChange' } type - Type of the event to listen for.
     * Only the streamVolumeChange event is supported.
     * @param { StreamUsage } streamUsage - StreamUsage to be listened.
     * @param { Callback<StreamVolumeEvent> } callback - Callback used to get the stream volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * Listens for stream volume change events. This method uses a callback to get volume change events.
     * @param { StreamUsage } streamUsage - StreamUsage to be listened.
     * @param { Callback<StreamVolumeEvent> } callback - Callback used to get the stream volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onStreamVolumeChange(streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * Unsubscribes to the stream volume change events.
     * @param { 'streamVolumeChange' } type - Type of the event to be unregistered.
     * Only the streamVolumeChange event is supported.
     * @param { Callback<StreamVolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * If there is no callback parameter, all callbacks will be unregistered.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Unsubscribes to the stream volume change events.
     * @param { Callback<StreamVolumeEvent> } [callback] Callback used to obtain the invoking volume change event.
     * If there is no callback parameter, all callbacks will be unregistered.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Interface for forcibly setting the volume type by pressing the volume key.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { AudioVolumeType } volumeType - Audio volume type
     * that the application expects to control using the volume key.
     * @param { int } duration - Duration for continuing to control the volume type when no key is pressed.
     *     The forced volume type setting is released when the timer expires. Unit is secon, the maximum
     *     duration is 10 seconds.
     *     If the duration is set to -1, the setting is canceled.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    forceVolumeKeyControlType(volumeType: AudioVolumeType, duration: int): void;
  }

  /**
   * Implements audio volume group management.
   * @typedef AudioVolumeGroupManager
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 9
   */
  /**
   * Implements audio volume group management.
   * @typedef AudioVolumeGroupManager
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioVolumeGroupManager {
    /**
     * Sets the volume for a stream. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int): Promise<void>;

    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { int } flags - volume flags used to enable different operations, can be union of {@link VolumeFlag}
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setVolumeWithFlag(volumeType: AudioVolumeType, volume: int, flags: int): Promise<void>;

    /**
     * Obtains the active volume type in the calling moment. This method returns in sync mode.
     * @param { int } uid - The target uid's active volume type or
     * 0 which means the global active volume type.
     * @returns { AudioVolumeType } Current active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getActiveVolumeTypeSync(uid: int): AudioVolumeType;

    /**
     * Obtains the volume of a stream. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<int> } callback - Callback used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the volume of a volume type. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the volume of a stream. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<int> } Promise used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the volume of a volume type. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the volume of a stream.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Obtains the volume of a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolumeSync(volumeType: AudioVolumeType): int;

    /**
     * Obtains the minimum volume allowed for a stream. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<int> } callback - Callback used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the minimum volume allowed for a volume type. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the minimum volume allowed for a stream. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<int> } Promise used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the minimum volume allowed for a volume type. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the minimum volume allowed for a stream.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Obtains the minimum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolumeSync(volumeType: AudioVolumeType): int;

    /**
     * Obtains the maximum volume allowed for a stream. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<int> } callback - Callback used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the maximum volume allowed for a volume type. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the maximum volume allowed for a stream. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<int> } Promise used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the maximum volume allowed for a volume type. This method uses a promise to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the maximum volume allowed for a stream.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Obtains the maximum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolumeSync(volumeType: AudioVolumeType): int;

    /**
     * Mutes a stream. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes a stream. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;

    /**
     * Checks whether a stream is muted. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the mute status of the stream. The
     * value true means that the stream is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Checks whether a volume type is muted. This method uses an asynchronous callback to return the query result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the mute status of the volume type. The
     * value true means that the volume type is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is muted. This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { Promise<boolean> } Promise used to return the mute status of the stream. The value true
     * means that the stream is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Checks whether a volume type is muted. This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<boolean> } Promise used to return the mute status of the volume type. The value true
     * means that the volume type is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is muted.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { boolean } The mute status of the stream. The value true
     * means that the stream is muted, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Checks whether a volume type is muted.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { boolean } The mute status of the volume type. The value true
     * means that the volume type is muted, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMuteSync(volumeType: AudioVolumeType): boolean;

    /**
     * Sets the ringer mode. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringer mode. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;

    /**
     * Obtains the ringer mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioRingMode> } callback - Callback used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the ringer mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioRingMode> } callback - Callback used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * Obtains the ringer mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioRingMode> } Promise used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Obtains the ringer mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioRingMode> } Promise used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * Obtains the ringer mode.
     * @returns { AudioRingMode } Current ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Obtains the ringer mode.
     * @returns { AudioRingMode } Current ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRingerModeSync(): AudioRingMode;

    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     * @param { 'ringerModeChange' } type - Type of the event to listen for. Only the ringerModeChange event is supported.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;

    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onRingerModeChange(callback: Callback<AudioRingMode>): void;

    /**
     * Unsubscribes to the ringer mode state change events.
     * @param { 'ringerModeChange' } type - Type of the event to listen for.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 18 dynamic
     */
    off(type: 'ringerModeChange', callback?: Callback<AudioRingMode>): void;

    /**
     * Unsubscribes to the ringer mode state change events.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offRingerModeChange(callback?: Callback<AudioRingMode>): void;

    /**
     * Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setMicMute
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#setMicMute
     */
    setMicrophoneMute(mute: boolean): Promise<void>;

    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setMicMute(mute: boolean): Promise<void>;

    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { PolicyType } type - Mute status to set. This value represents the caller's type such as EDM or privacy.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setMicMutePersistent(mute: boolean, type: PolicyType): Promise<void>;

    /**
     * Checks whether the persistent microphone status is muted.
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @returns { boolean } Returns microphone persistent mute status.
     *     true: The persistent mic mute is enabled in the current system.
     *     false: The persistent mic mute is disabled in the current system.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isPersistentMicMute(): boolean;

    /**
     * Checks whether the microphone is muted. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<boolean> } callback - used to return the mute status of the microphone. The value
     * true means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Checks whether the microphone is muted. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<boolean> } callback - used to return the mute status of the microphone. The value
     * true means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the microphone is muted. This method uses a promise to return the query result.
     * @returns { Promise<boolean> } Promise used to return the mute status of the microphone. The value true
     * means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Checks whether the microphone is muted. This method uses a promise to return the query result.
     * @returns { Promise<boolean> } Promise used to return the mute status of the microphone. The value true
     * means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * Checks whether the microphone is muted.
     * @returns { boolean } The mute status of the microphone. The value true
     * means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Checks whether the microphone is muted.
     * @returns { boolean } The mute status of the microphone. The value true
     * means that the microphone is muted, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isMicrophoneMuteSync(): boolean;

    /**
     * Listens for system microphone state change events. This method uses a callback to get microphone change events.
     * @param { 'micStateChange' } type - Type of the event to listen for. Only the micStateChange event is supported.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'micStateChange', callback: Callback<MicStateChangeEvent>): void;

    /**
     * Listens for system microphone state change events. This method uses a callback to get microphone change events.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onMicStateChange(callback: Callback<MicStateChangeEvent>): void;

    /**
     * Unsubscribes to the microphone state change events.
     * @param { 'micStateChange' } type - Type of the event to listen for.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     */
    off(type: 'micStateChange', callback?: Callback<MicStateChangeEvent>): void;

    /**
     * Unsubscribes to the microphone state change events.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offMicStateChange(callback?: Callback<MicStateChangeEvent>): void;
    
    /**
     * Gets if this volume group is volume unadjustable.
     * @returns { boolean } Whether it is volume unadjustable.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Gets if this volume group is volume unadjustable.
     * @returns { boolean } Whether it is volume unadjustable.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    isVolumeUnadjustable(): boolean;

    /**
     * Adjusts system volume by step, volume type is decided by system.
     * This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     * Adjusts system volume by step, volume type is decided by system.
     * This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType): Promise<void>;

    /**
     * Adjusts system volume by step for target volume type.
     * This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     * Adjusts system volume by step for target volume type.
     * This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType): Promise<void>;

    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * This method uses an asynchronous callback to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * This method uses an asynchronous callback to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType, callback: AsyncCallback<double>): void;
    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { Promise<double> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { Promise<double> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): Promise<double>;
    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { double } The system volume in dB.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 10
     */
    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { double } The system volume in dB.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDbSync(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double;

    /**
     * Gets the max amplitude value for a specific input device.
     * This method uses a promise to return the result.
     * @param { AudioDeviceDescriptor } inputDevice - the target device.
     * @returns { Promise<double> } Promise used to return the max amplitude value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForInputDevice(inputDevice: AudioDeviceDescriptor): Promise<double>;
    /**
     * Gets the max amplitude value for a specific output device.
     * This method uses a promise to return the result.
     * @param { AudioDeviceDescriptor } outputDevice - the target device.
     * @returns { Promise<double> } Promise used to return the max amplitude value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<double>;
  }

  /**
   * This interface is used to notify the listener of any device Spatialization or Head Tracking enable state change.
   * @interface AudioSpatialEnabledStateForDevice
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSpatialEnabledStateForDevice {
    /**
     * Audio device description.
     * @type { AudioDeviceDescriptor }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceDescriptor: AudioDeviceDescriptor;
    /**
     * Spatialization or Head Tracking enable state.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enabled: boolean;
  }

  /**
   * Implements audio spatialization management.
   * @typedef AudioSpatializationManager
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioSpatializationManager {
    /**
     * Checks whether spatialization is supported by system.
     * @returns { boolean } Whether spatialization is supported by system.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported(): boolean;

    /**
     * Checks whether spatialization is supported by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether spatialization is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Checks whether head tracking is supported by system.
     * @returns { boolean } Whether head tracking is supported by system.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported(): boolean;

    /**
     * Checks whether head tracking is supported by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether head tracking is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Sets the spatialization enabled or disabled. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled
     */
    setSpatializationEnabled(enable: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the spatialization enabled or disabled. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled
     */
    setSpatializationEnabled(enable: boolean): Promise<void>;
    /**
     * Sets the spatialization enabled or disabled by the specified device.
     * This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the spatialization is enabled.
     * @returns { boolean } Whether the spatialization is enabled.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isSpatializationEnabled
     */
    isSpatializationEnabled(): boolean;
    /**
     * Checks whether the spatialization is enabled by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the spatialization is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Subscribes to the spatialization enable state change events. When the spatialization enable state changes,
     * registered clients will receive the callback.
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#on
     */
    on(type: 'spatializationEnabledChange', callback: Callback<boolean>): void;
    /**
     * Subscribes to the spatialization enable state change events by the specified device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'spatializationEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the spatialization enable state change events by the specified device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the
     *     spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onSpatializationEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the spatialization enable state change events.
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#off
     */
    off(type: 'spatializationEnabledChange', callback?: Callback<boolean>): void;
    /**
     * Unsubscribes to the spatialization enable state change events by the specified device.
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'spatializationEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the specified device.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the
     *     spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offSpatializationEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Sets the head tracking enabled or disabled. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled
     */
    setHeadTrackingEnabled(enable: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the head tracking enabled or disabled. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled
     */
    setHeadTrackingEnabled(enable: boolean): Promise<void>;
    /**
     * Sets the head tracking enabled or disabled by the specified device.
     * This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the head tracking is enabled.
     * @returns { boolean } Whether the head tracking is enabled.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isHeadTrackingEnabled
     */
    isHeadTrackingEnabled(): boolean;
    /**
     * Checks whether the head tracking is enabled by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the head tracking is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Subscribes to the head tracking enable state change events. When the head tracking enable state changes,
     * registered clients will receive the callback.
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#on
     */
    on(type: 'headTrackingEnabledChange', callback: Callback<boolean>): void;
    /**
     * Subscribes to the head tracking enable state change events by the specified device.
     * When the head tracking enable state changes, registered clients will receive the callback.
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'headTrackingEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the head tracking enable state change events by the specified device.
     * When the head tracking enable state changes, registered clients will receive the callback.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head
     *     tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onHeadTrackingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the head tracking enable state change events.
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#off
     */
    off(type: 'headTrackingEnabledChange', callback?: Callback<boolean>): void;
    /**
     * Unsubscribes to the head tracking enable state change events by the specified device.
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'headTrackingEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the head tracking enable state change events by the specified device.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get
     *     the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offHeadTrackingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Updates the spatial device state.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatialDeviceState } spatialDeviceState - Spatial device state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    updateSpatialDeviceState(spatialDeviceState: AudioSpatialDeviceState): void;

    /**
     * Set spatialization rendering scene type.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatializationSceneType } spatializationSceneType - Spatialization scene type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationSceneType(spatializationSceneType: AudioSpatializationSceneType): void;

    /**
     * Get spatialization rendering scene type.
     * @returns { AudioSpatializationSceneType } Current spatialization rendering scene type.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSpatializationSceneType(): AudioSpatializationSceneType;

    /**
     * Checks whether the spatialization is enabled by the current device.
     * @returns { boolean } Whether the spatialization is enabled by the current device.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    isSpatializationEnabledForCurrentDevice(): boolean;

    /**
     * Subscribes to the spatialization enable state change events by the current device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void;

    /**
     * Subscribes to the spatialization enable state change events by the current device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    onSpatializationEnabledChangeForCurrentDevice(callback: Callback<boolean>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the current device.
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - Type of the event to listen for.
     * @param { Callback<boolean> } [callback] - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the current device.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    offSpatializationEnabledChangeForCurrentDevice(callback?: Callback<boolean>): void;
  }

  /**
   * Implements audio effect management.
   * @typedef AudioEffectManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectManager {
    /**
     * Gets supported audio effect properties based on current devices.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } Array of supported audio effect properties.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getSupportedAudioEffectProperty(): Array<AudioEffectProperty>;

    /**
     * Sets current audio effect properties.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { Array<AudioEffectProperty> } propertyArray - array of audio effect property to be set.
     * Notice that only one effect property name in each effect property category should be set.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *                                 1. More than one effect property name of the same effect property category are in the input array.
     *                                 2. The input audioEffectProperties are not supported by the current device.
     *                                 3. The name or catergory of the input audioEffectProperties is incorrect.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setAudioEffectProperty(propertyArray: Array<AudioEffectProperty>): void;

    /**
     * Gets current audio effect properties.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } Array of current audio effect properties.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getAudioEffectProperty(): Array<AudioEffectProperty>;
  }

  /**
   * Implements audio collaborative management.
   * @typedef AudioCollaborativeManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCollaborativeManager {
    /**
     * Checks whether the collaborative playback is supported by system.
     * @returns { boolean } Whether the collaborative playback is supported by system.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCollaborativePlaybackSupported(): boolean;

    /**
     * Checks whether the collaborative playback is supported for the specified device.
     * 
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor to check.
     * @returns { boolean } Whether the collaborative playback is supported for the specified device.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isCollaborativePlaybackSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Enables or disables collaborative playback for the specified device.
     * Currently, only A2DP audio devices support collaborative playback.
     * If the system is using the specified device for audio output,
     * the audio will be played from both the local speaker and the specified device after this API is called.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @param { boolean } enabled - Whether to enable or disable collaborative playback. The value true means to enable it, and false means to disable it.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *                              1. The specified device is not an A2DP device.
     *                              2. The specified device is not connected.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setCollaborativePlaybackEnabledForDevice(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether collaborative playback is enabled for the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @returns { boolean } Returns the check result. The value true means that collaborative playback is enabled for the specified device,
     * and false means the opposite.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCollaborativePlaybackEnabledForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;
  }

  /**
   * Connect type for device.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConnectType {
    /**
     * Connect type for local device.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_LOCAL = 1,

    /**
     * Connect type for distributed device.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_DISTRIBUTED = 2
  }

  /**
   * Describes an audio volume group.
   * @typedef VolumeGroupInfo
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeGroupInfo {
    /**
     * Device network id.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;

    /**
     * Volume group id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupId: int;

    /**
     * Volume mapping group id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly mappingId: int;

    /**
     * Volume group name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupName: string;

    /**
     * Connect type of device for this group.
     * @type { ConnectType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly type: ConnectType;
  }

  /**
   * Array of VolumeGroupInfos, which is read-only.
   * @typedef { Array<Readonly<VolumeGroupInfo>> } VolumeGroupInfos
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type VolumeGroupInfos = Array<Readonly<VolumeGroupInfo>>;

  /**
   * Array of AudioRendererChangeInfo, which is read-only.
   * @typedef { Array<Readonly<AudioRendererChangeInfo>> } AudioRendererChangeInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 9
   */
  /**
   * Array of AudioRendererChangeInfo, which is read-only.
   * @typedef { Array<Readonly<AudioRendererChangeInfo>> } AudioRendererChangeInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  type AudioRendererChangeInfoArray = Array<Readonly<AudioRendererChangeInfo>>;

  /**
   * Describes audio renderer change information.
   * @typedef AudioRendererChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 9
   */
  /**
   * Describes audio renderer change information.
   * @typedef AudioRendererChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioRendererChangeInfo {
    /**
     * Audio stream unique id.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Audio stream unique id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly streamId: int;

    /**
     * Uid for audio renderer client application.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly clientUid: int;

    /**
     * Audio renderer information.
     * @type { AudioRendererInfo }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Audio renderer information.
     * @type { AudioRendererInfo }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly rendererInfo: AudioRendererInfo;

    /**
     * Audio state.
     * @type { AudioState }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rendererState: AudioState;

    /**
     * Audio output devices.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Audio output devices.
     * @type { AudioDeviceDescriptors }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Array of AudioCapturerChangeInfo, which is read-only.
   * @typedef { Array<Readonly<AudioCapturerChangeInfo>> } AudioCapturerChangeInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 9
   */
  /**
   * Array of AudioCapturerChangeInfo, which is read-only.
   * @typedef { Array<Readonly<AudioCapturerChangeInfo>> } AudioCapturerChangeInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  type AudioCapturerChangeInfoArray = Array<Readonly<AudioCapturerChangeInfo>>;

  /**
   * Describes audio capturer change information.
   * @typedef AudioCapturerChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 9
   */
  /**
   * Describes audio capturer change information.
   * @typedef AudioCapturerChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioCapturerChangeInfo {
    /**
     * Audio stream unique id.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Audio stream unique id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly streamId: int;

    /**
     * Uid for audio capturer client application.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly clientUid: int;

    /**
     * Audio capturer information.
     * @type { AudioCapturerInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Audio capturer information.
     * @type { AudioCapturerInfo }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly capturerInfo: AudioCapturerInfo;

    /**
     * Audio state.
     * @type { AudioState }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capturerState: AudioState;

    /**
     * Audio input devices.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Audio input devices.
     * @type { AudioDeviceDescriptors }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;

    /**
     * Audio capturer muted status.
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 11
     */
    /**
     * Audio capturer muted status.
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly muted?: boolean;
  }

  /**
   * Describes an audio device.
   * @typedef AudioDeviceDescriptor
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Describes an audio device.
   * @typedef AudioDeviceDescriptor
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioDeviceDescriptor {
    /**
     * Audio device role.
     * @type { DeviceRole }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Audio device role.
     * @type { DeviceRole }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly deviceRole: DeviceRole;

    /**
     * Audio device type.
     * @type { DeviceType }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Audio device type.
     * @type { DeviceType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly deviceType: DeviceType;

    /**
     * Audio device id.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Audio device id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly id: int;

    /**
     * Audio device name.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Audio device name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * Audio device address.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Audio device address.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly address: string;

    /**
     * Supported sampling rates.
     * @type { Array<int> }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Supported sampling rates.
     * @type { Array<int> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly sampleRates: Array<int>;

    /**
     * Supported channel counts.
     * @type { Array<int> }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Supported channel counts.
     * @type { Array<int> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly channelCounts: Array<int>;

    /**
     * Supported channel masks.
     * @type { Array<int> }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9
     */
    /**
     * Supported channel masks.
     * @type { Array<int> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly channelMasks: Array<int>;
    /**
     * Device network id
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;
    /**
     * Interrupt group id
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly interruptGroupId: int;
    /**
     * Volume group id
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly volumeGroupId: int;
    /**
     * Name used to display, considering distributed device situation.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Name used to display, considering distributed device situation.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * Supported encoding types.
     * @type { ?Array<AudioEncodingType> }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Supported encoding types.
     * @type { ?Array<AudioEncodingType> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly encodingTypes?: Array<AudioEncodingType>;

    /**
     * whether supports spatial rendering.
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    readonly spatializationSupported?: boolean;

    /**
     * Only {@link DeviceType.SPEAKER} with networkId、{@link DeviceType.REMOTE_CAST}
     * or {@link DeviceType.REMOTE_DAUDIO} has dmDeviceType which indicated deviceTypeId.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dmDeviceType?: int;

    /**
     * whether supports high-quality recording.
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    readonly highQualityRecordingSupported?: boolean;

    /**
     * Specific model of device
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly model?: string;

    /**
     * Supported audio capabilities.
     * @type { ?Array<AudioStreamInfo> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly capabilities?: Array<AudioStreamInfo>;

    /**
     * Extended information for distributed device, includes whether the device supports
     * stereo, Device SN, etc.
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly dmDeviceInfo?: string;
  }

  /**
   * Array of AudioDeviceDescriptors, which is read-only.
   * @typedef { Array<Readonly<AudioDeviceDescriptor>> } AudioDeviceDescriptors
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Array of AudioDeviceDescriptors, which is read-only.
   * @typedef { Array<Readonly<AudioDeviceDescriptor>> } AudioDeviceDescriptors
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type AudioDeviceDescriptors = Array<Readonly<AudioDeviceDescriptor>>;

  /**
   * Volume mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 19 dynamic
   * @since 23 static
   */
  enum AudioVolumeMode {
    /**
     * Audio volume affected by system volume level.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    SYSTEM_GLOBAL = 0,
    /**
     * Audio volume affected by app's individual percentage.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    APP_INDIVIDUAL = 1
  }

  /**
   * Describes the volume event received by the app when the volume is changed.
   * @typedef VolumeEvent
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 9
   */
  /**
   * Describes the volume event received by the app when the volume is changed.
   * @typedef VolumeEvent
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface VolumeEvent {
    /**
     * Volume type of the current stream.
     * @type { AudioVolumeType }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    volumeType: AudioVolumeType;
    /**
     * Volume level.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9
     */
    /**
     * Volume level.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * Whether to show the volume change in UI.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * volumeGroup id
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    volumeGroupId: int;
    /**
     * Device network id
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: string;
    /**
     * Audio volume mode of this volume event
     * @type { ?AudioVolumeMode }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
    /**
     * Volume percentage, which is an integer ranging from [0, 100].
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    percentage?: int;
  }

  /**
   * Describes the stream volume event when the volume is changed.
   * @typedef StreamVolumeEvent
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 20 dynamic
   * @since 23 static
   */
  interface StreamVolumeEvent {
    /**
     * The type of streamUsage whose volume changes.
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    streamUsage: StreamUsage;
    /**
     * Volume level.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * Whether to show the volume change in UI.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * Previous volume level.
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 dynamic&static
     */
    previousVolume?: int;
  }

  /**
   * Describes the callback invoked for audio interruption or focus gain events.When the audio of an application
   * is interrupted by another application, the callback is invoked to notify the former application.
   * @typedef InterruptAction
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptEvent
   */
  interface InterruptAction {

    /**
     * Event type.
     * The value TYPE_ACTIVATED means the focus gain event, and TYPE_INTERRUPT means the audio interruption event.
     * @type { InterruptActionType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    actionType: InterruptActionType;

    /**
     * Type of the audio interruption event.
     * @type { ?InterruptType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    type?: InterruptType;

    /**
     * Hint for the audio interruption event.
     * @type { ?InterruptHint }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    hint?: InterruptHint;

    /**
     * Whether the focus is gained or released. The value true means that the focus is gained or released,
     * and false means that the focus fails to be gained or released.
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    activated?: boolean;
  }

  /**
   * Describes input parameters of audio listening events.
   * @typedef AudioInterrupt
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.AudioRendererOptions
   */
  interface AudioInterrupt {

    /**
     * Audio stream usage type.
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    streamUsage: StreamUsage;

    /**
     * Type of the media interrupted.
     * @type { ContentType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    contentType: ContentType;

    /**
     * Whether audio playback can be paused when it is interrupted.
     * The value true means that audio playback can be paused when it is interrupted, and false means the opposite.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    pauseWhenDucked: boolean;
  }

  /**
   * Describes the microphone state change event received by the app when the microphone state is changed.
   * @typedef MicStateChangeEvent
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 9 dynamic
   * @since 23 static
   */
  interface MicStateChangeEvent {
    /**
     * Mic mute state.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9 dynamic
     * @since 23 static
     */
    mute: boolean;
  }
  /**
   * Describes the device change type and device information.
   * @typedef DeviceChangeAction
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7
   */
  /**
   * Describes the device change type and device information.
   * @typedef DeviceChangeAction
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface DeviceChangeAction {
    /**
     * Device change type.
     * @type { DeviceChangeType }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Device change type.
     * @type { DeviceChangeType }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    type: DeviceChangeType;

    /**
     * Device information.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7
     */
    /**
     * Device information.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Enumerates channel blend mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 11
   */
  /**
   * Enumerates channel blend mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum ChannelBlendMode {
    /**
     * No channel process.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * No channel process.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MODE_DEFAULT = 0,
    /**
     * Blend left and right channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Blend left and right channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MODE_BLEND_LR = 1,
    /**
     * Replicate left to right channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Replicate left to right channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MODE_ALL_LEFT = 2,
    /**
     * Replicate right to left channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Replicate right to left channel.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MODE_ALL_RIGHT = 3,
  }

  /**
   * Enumerates audio stream device change reason.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 11
   */
  /**
   * Enumerates audio stream device change reason.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioStreamDeviceChangeReason {
    /**
     * Unknown.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * This is default device change reason.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REASON_UNKNOWN = 0,
    /**
     * New device available.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * New device available.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REASON_NEW_DEVICE_AVAILABLE = 1,
    /**
     * Old device unavailable. Applications should consider to pause the audio playback when this reason is
     * reported.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Old device unavailable. Applications should consider to pause the audio playback when this reason is
     * reported.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REASON_OLD_DEVICE_UNAVAILABLE = 2,
    /**
     * Overrode by user or system.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Overrode by user or system.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REASON_OVERRODE = 3,
    /**
     * Device information when the audio session is activated.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_SESSION_ACTIVATED = 4,
    /**
     * There is a higher-priority stream, causing the system device to change.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_STREAM_PRIORITY_CHANGED = 5,
  }
  /**
   * Audio stream device change info.
   * @typedef AudioStreamDeviceChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 11
   */
  /**
   * Audio stream device change info.
   * @typedef AudioStreamDeviceChangeInfo
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioStreamDeviceChangeInfo {
    /**
     * Audio device descriptors after change.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Audio device descriptors after change.
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio stream device change reason.
     * @type { AudioStreamDeviceChangeReason }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Audio stream device change reason.
     * @type { AudioStreamDeviceChangeReason }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    changeReason: AudioStreamDeviceChangeReason;
  }

  /**
   * Enumerates callback result.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioDataCallbackResult {
    /**
     * Indicates data of this callback is invalid.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    INVALID = -1,

    /**
     * Indicates data of this callback is valid.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    VALID = 0,
  }

  /**
   * Type definition of callback function for audio renderer write data.
   *
   * @typedef { function } AudioRendererWriteDataCallback
   * @param { ArrayBuffer } data - audio data array buffer.
   * @returns { AudioDataCallbackResult | void } result of callback or void. If void or AudioDataCallbackResult.VALID is
   * returned, it indicates the data is valid and will be played. If AudioDataCallbackResult.INVALID is returned, it
   * indicates the data is will not be played.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult | void;

  /**
   * Type definition of callback function for audio renderer write data.
   *
   * @typedef { function } AudioRendererWriteDataCallback
   * @param { ArrayBuffer } data - audio data array buffer.
   * @returns { AudioDataCallbackResult } result of callback. If AudioDataCallbackResult.VALID
   * is returned, it indicates the data is valid and will be played. If AudioDataCallbackResult.INVALID
   * is returned, it indicates the data is will not be played.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult;

  /**
   * Audio timestamp info.
   * @typedef AudioTimestampInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 19 dynamic
   * @since 23 static
   */
  interface AudioTimestampInfo {
    /**
     * Frame position.
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly framePos: long;

    /**
     * Timestamp when frame in {@link AudioTimestampInfo#framePos} was rendered or captured.
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
  }

  /**
   * Audio render target.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum RenderTarget {
    /**
     * Playback. Under this target, the audio renderer will be played out. This is the default
     * target of audio renderer.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PLAYBACK = 0,

    /**
     * Inject to voice communication capture. Under this target, the audio renderer will be injected
     * to audio capture with source type of {@link SourceType#SOURCE_TYPE_VOICE_COMMUNICATION} when the
     * audio scene is {@link AudioScene#AUDIO_SCENE_VOICE_CHAT}.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    INJECT_TO_VOICE_COMMUNICATION_CAPTURE = 1,
  }

  /**
   * Defines audio latency types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AudioLatencyType {
    /**
     * Type to get latency of all audio processing units, including software and hardware.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_ALL = 0,

    /**
     * Type to get latency of software part, including audio effects in software.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_SOFTWARE = 1,

    /**
     * Type to get latency of hardware part, including audio effects in hal, driver and hardware.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_HARDWARE = 2
  }

  /**
   * Provides audio playback APIs.
   * @typedef AudioRenderer
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8
   */
  /**
   * Provides audio playback APIs.
   * @typedef AudioRenderer
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioRenderer {
    /**
     * Defines the current render state.
     * @type { AudioState }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Defines the current render state.
     * @type { AudioState }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * Obtains the renderer information provided while creating a renderer instance. This method uses an asynchronous
     * callback to return the result.
     * @param { AsyncCallback<AudioRendererInfo> } callback - Callback used to return the renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the renderer information provided while creating a renderer instance. This method uses an asynchronous
     * callback to return the result.
     * @param { AsyncCallback<AudioRendererInfo> } callback - Callback used to return the renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void;
    /**
     * Obtains the renderer information provided while creating a renderer instance. This method uses a promise to
     * return the result.
     * @returns { Promise<AudioRendererInfo> } Promise used to return the renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the renderer information provided while creating a renderer instance. This method uses a promise to
     * return the result.
     * @returns { Promise<AudioRendererInfo> } Promise used to return the renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRendererInfo(): Promise<AudioRendererInfo>;
    /**
     * Obtains the renderer information provided while creating a renderer instance.
     * @returns { AudioRendererInfo } The renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Obtains the renderer information provided while creating a renderer instance.
     * @returns { AudioRendererInfo } The renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getRendererInfoSync(): AudioRendererInfo;

    /**
     * Obtains the renderer stream information. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the renderer stream information. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Obtains the renderer stream information. This method uses a promise to return the result.
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the renderer stream information. This method uses a promise to return the result.
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * Obtains the renderer stream information.
     * @returns { AudioStreamInfo } The stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Obtains the renderer stream information.
     * @returns { AudioStreamInfo } The stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * Obtains the renderer stream id. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Obtains the renderer stream id. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * Obtains the renderer stream id. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Obtains the renderer stream id. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * Obtains the renderer stream id.
     * @returns { long } The stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Obtains the renderer stream id.
     * @returns { long } The stream id.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * Obtains the current audio effect mode. This method uses an asynchronous callback to return the query result.
     * @param { AsyncCallback<AudioEffectMode> } callback - Callback used to return the current audio effect mode.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void;
    /**
     * Obtains the current audio effect mode. This method uses a promise to return the query result.
     * @returns { Promise<AudioEffectMode> } Promise used to return the current audio effect mode.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(): Promise<AudioEffectMode>;

    /**
     * Sets audio effect mode for current audio renderer. This method uses an asynchronous callback to return the result.
     * @param { AudioEffectMode } mode - Audio effect mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void;
    /**
     * Sets audio effect mode for current audio renderer. This method uses a promise to return the result.
     * @param { AudioEffectMode } mode - Audio effect mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode): Promise<void>;

    /**
     * Starts the renderer.
     * Success: This method uses an asynchronous callback to return the result.
     * Failure: This method uses an asynchronous callback to return the error instance. Possible causes:
     *          6800301: Unsupported state, Audio focus request failed, System error.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Starts the renderer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts the renderer.
     * Success: This method uses a promise to return the result.
     * Failure: This method uses a promise to return the error instance. Possible causes:
     *          6800301: Unsupported state, Audio focus request failed, System error.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Starts the renderer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Writes the buffer. This method uses an asynchronous callback to return the result.
     * @param { ArrayBuffer } buffer - Buffer to be written.
     * @param { AsyncCallback<number> } callback - Returns the number of bytes written if the operation is successful.
     *        Returns an error code otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;
    /**
     * Writes the buffer. This method uses a promise to return the result.
     * @param { ArrayBuffer } buffer - Buffer to be written.
     * @returns { Promise<number> } Returns the number of bytes written if the operation is successful.
     *          Returns an error code otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer): Promise<number>;

    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds. This method uses an
     * asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds. This method uses a
     * promise to return the result.
     * @returns { Promise<long> } Promise used to return the timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds.
     * @returns { long } The audio timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * @returns { long } The audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * Obtains the timestamp info.
     *
     * @returns { Promise<AudioTimestampInfo> } The Promise used to return timestamp info.
     * @throws  { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

    /**
     * Obtains the timestamp info.
     *
     * @returns { AudioTimestampInfo } The returned timestamp info.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * Drains the playback buffer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Drains the playback buffer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    drain(callback: AsyncCallback<void>): void;
    /**
     * Drains the playback buffer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Drains the playback buffer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    drain(): Promise<void>;

    /**
     * Flushes the playback buffer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Flushes the playback buffer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    flush(): Promise<void>;

    /**
     * Pauses rendering. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Pauses rendering. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * Pauses rendering. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Pauses rendering. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * Stops rendering. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Stops rendering. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops rendering. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Stops rendering. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the renderer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Releases the renderer. This method uses an asynchronous callback to return the result.
     * <p><strong>NOTE</strong>:
     * The framework will not actively release audio streams in the Stop/Pause state.
     * Please make sure to call this method to release the stream when it is no longer needed.
     * </p>
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the renderer. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Releases the renderer. This method uses a promise to return the result.
     * <p><strong>NOTE</strong>:
     * The framework will not actively release audio streams in the Stop/Pause state.
     * Please make sure to call this method to release the stream when it is no longer needed.
     * </p>
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This method uses an asynchronous callback to
     * return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This method uses an asynchronous callback to
     * return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering.
     * @returns { long } The audio buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering.
     * @returns { long } The audio buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * Sets the render rate. This method uses an asynchronous callback to return the result.
     * @param { AudioRendererRate } rate - Audio render rate.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void;

    /**
     * Sets the render rate. This method uses a promise to return the result.
     * @param { AudioRendererRate } rate - Audio render rate.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate): Promise<void>;

    /**
     * Sets the playback speed.
     * @param { double } speed -  Audio playback speed. The value type is float, form 0.25 to 4.0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Sets the playback speed.
     * @param { double } speed -  Audio playback speed. The value type is float, form 0.25 to 4.0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setSpeed(speed: double): void;

    /**
     * Obtains the current render rate. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioRendererRate> } callback - Callback used to return the audio render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(callback: AsyncCallback<AudioRendererRate>): void;

    /**
     * Obtains the current render rate. This method uses a promise to return the result.
     * @returns { Promise<AudioRendererRate> } Promise used to return the audio render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(): Promise<AudioRendererRate>;

    /**
     * Obtains the current render rate.
     * @returns { AudioRendererRate } The audio render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRateSync(): AudioRendererRate;

    /**
     * Obtains the current playback speed.
     * @returns { double } The playback speed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Obtains the current playback speed.
     * @returns { double } The playback speed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getSpeed(): double;

    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 9
     */
    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void;
    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 9
     */
    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode): Promise<void>;
    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 10
     */
    /**
     * Set interrupt mode.
     * @param { InterruptMode } mode - The interrupt mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setInterruptModeSync(mode: InterruptMode): void;

    /**
     * Sets the volume for this stream. This method uses an asynchronous callback to return the result.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Sets the volume for this stream. This method uses an asynchronous callback to return the result.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setVolume(volume: double, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 9
     */
    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * Gets volume of this stream.
     * @returns { double } Returns one float value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getVolume(): double;

    /**
     * Changes the volume with ramp for a duration.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @param { int } duration -  Duration for volume ramp, in millisecond.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Changes the volume with ramp for a duration.
     * @param { double } volume - Volume to set. The value type is float, form 0.0 to 1.0.
     * @param { int } duration -  Duration for volume ramp, in millisecond.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setVolumeWithRamp(volume: double, duration: int): void;

    /**
     * Gets the min volume this stream can set. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the min volume this stream can set. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMinStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * Gets the min volume this stream can set. This method uses a promise to return the result.
     * @returns { Promise<double> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the min volume this stream can set. This method uses a promise to return the result.
     * @returns { Promise<double> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMinStreamVolume(): Promise<double>;
    /**
     * Gets the min volume this stream can set.
     * @returns { double } Min stream volume.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the min volume this stream can set.
     * @returns { double } Min stream volume.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMinStreamVolumeSync(): double;

    /**
     * Gets the max volume this stream can set. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the max volume this stream can set. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<double> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * Gets the max volume this stream can set. This method uses a promise to return the result.
     * @returns { Promise<double> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the max volume this stream can set. This method uses a promise to return the result.
     * @returns { Promise<double> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(): Promise<double>;
    /**
     * Gets the max volume this stream can set.
     * @returns { double } Max stream volume.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets the max volume this stream can set.
     * @returns { double } Max stream volume.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxStreamVolumeSync(): double;

    /**
     * Gets buffer underflow count. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets buffer underflow count. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getUnderflowCount(callback: AsyncCallback<long>): void;
    /**
     * Gets buffer underflow count. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets buffer underflow count. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getUnderflowCount(): Promise<long>;
    /**
     * Gets buffer underflow count.
     * @returns { long } Underflow count number.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Gets buffer underflow count.
     * @returns { long } Underflow count number.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getUnderflowCountSync(): long;

    /**
     * Gets the output device or devices for this stream.
     * This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Gets the output device or devices for this stream.
     * This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Gets the output device or devices for this stream.
     * This method uses a promise to return the result.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Gets the output device or devices for this stream.
     * This method uses a promise to return the result.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>;
    /**
     * Gets the output device or devices for this stream.
     * @returns { AudioDeviceDescriptors } Output device or devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Gets the output device or devices for this stream.
     * @returns { AudioDeviceDescriptors } Output device or devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentOutputDevicesSync(): AudioDeviceDescriptors;

    /**
     * Sets channel blend mode for this stream.
     * @param { ChannelBlendMode } mode - Target channel blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Sets channel blend mode for this stream.
     * @param { ChannelBlendMode } mode - Target channel blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setChannelBlendMode(mode: ChannelBlendMode): void;

    /**
     * Sets silent and mix with other stream for this stream.
     * @param { boolean } on - Whether play silent and mix with other streams.
     *     true: set the silent mode and mix with other streams.
     *     false: unset the silent mode, current stream will trigger the audio focus internally.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setSilentModeAndMixWithOthers(on: boolean): void;

    /**
     * Gets silent and mix with other stream status for this stream.
     * @returns { boolean } Returns silent and mix with other stream status.
     *     true: current stream is in the silent mode and mix with other streams.
     *     false: current stream in in the normal playback mode
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getSilentModeAndMixWithOthers(): boolean;

    /**
     * Temporarily changes the current audio device
     * This function applys on audiorenderers whose StreamUsage are
     * STREAM_USAGE_VOICE_COMMUNICATIN/STREAM_USAGE_VIDEO_COMMUNICATION/STREAM_USAGE_VOICE_MESSAGE.
     * Setting the device will only takes effect if no other accessory such as headphones are in use
     * @param { DeviceType } deviceType - the available deviceTypes are
     *                                    EARPIECE: Built-in earpiece
     *                                    SPEAKER: Built-in speaker
     *                                    DEFAULT: System default output device
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * Sets the loudness gain of this stream. The default loudness gain is 0.0dB.
     * The stream usage of the audio renderer must be {@link StreamUsage#STREAM_USAGE_MUSIC},
     * {@link StreamUsage#STREAM_USAGE_MOVIE} or {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}.
     * After calling this interface, the adjustment of loundness gain will take effect immediately.
     * @param { double } loudnessGain - Loudness gain to set, expressed in dB. The value type is float.
     *                                  The loudness gain changes from -90.0dB to 24.0dB.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation is not supported on this renderer, e.g. the stream usage of this
     * renderer is not one of {@link StreamUsage#STREAM_USAGE_MUSIC}, {@link StreamUsage#STREAM_USAGE_MOVIE} or
     * {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}, or this renderer is routed through the high-resolution playback path.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    setLoudnessGain(loudnessGain: double): Promise<void>;

    /**
     * Gets loudness gain of this stream.
     * @returns { double } Returns one float value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    getLoudnessGain(): double;

    /**
     * Sets the render target of this audio renderer.
     * This function can only be called when the audio renderer is not in the running or released state.
     * Otherwise, it will return an error. The caller must have the
     * ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE permission when target is not {@link RenderTarget#PLAYBACK}.
     * This method can only be called when the audio renderer is ​​not​​ in the RUNNING or RELEASED state.
     * Otherwise, an error will be returned.
     * After changing render target to non-PLAYBACK：
     * 1. The audio route and interruption strategy of this renderer will not be affected by {@link AudioSessionManager}.
     * 2. The device type of this renderer will be {@link DeviceType#SYSTEM_PRIVATE}.
     * 3. Calling {@link start} when the audio scene is not {@link AudioScene#AUDIO_SCENE_VOICE_CHAT} will
     * return error code 6800301.
     * 4. Calling {@link getAudioTime} or {@link getAudioTimeSync} will return error code 6800301.
     * 5. Calling {@link getAudioTimestampInfo} or {@link getAudioTimestampInfoSync} will return error code 6800301.
     * 6. Calling {@link setDefaultOutputDevice} will return error code 6800301.
     * @permission ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE
     * @param { RenderTarget } target - Render target.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at running and release state.
     * @throws { BusinessError } 6800104 - Current renderer is not supported to set target.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setTarget(target: RenderTarget): Promise<void>;

    /**
     * Gets the currently render target of this audio renderer.
     * If the render target has not been changed, the default value {@link RenderTarget#PLAYBACK} will be returned.
     * If the {@link setTarget} has been called before calling this interface, ensure its promise object has been
     * resolved successfully, otherwise, the obtained value may be inaccurate.
     * @returns { RenderTarget } Render target of this audio renderer.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getTarget(): RenderTarget;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio playback is interrupted.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 9
     */
    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio playback is interrupted.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio playback is interrupted.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt events.
     * @param { 'audioInterrupt' } type - Type of the event to listen for.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 18 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt events.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<InterruptEvent>): void;

    /**
     * Subscribes to mark reached events. When the number of frames rendered reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Subscribes to mark reached events. When the number of frames rendered reaches the value of the frame parameter,
     * the callback is invoked.
     * <p><strong>NOTE</strong>:
     * Before renderer release, the value of internal records frames will continue to increase,
     * and operations such as stop/pause/flush/drain will not reset this value.
     * </p>
     *
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'markReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to mark reached events. When the number of frames rendered reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * Unsubscribes from mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Unsubscribes from mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes from mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from mark reached events.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter,
     * the callback is invoked.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { long } frame - Period during which frame rendering is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter,
     * the callback is invoked.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { long } frame - Period during which frame rendering is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter,
     * the callback is invoked.
     * @param { long } frame - Period during which frame rendering is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;
    
    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * Subscribes audio state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for. Only the stateChange event is supported.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8
     */
    /**
     * Subscribes audio renderer state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for. Only the stateChange event is supported.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio renderer state change event callback.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { 'outputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { 'outputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { 'outputDeviceChangeWithInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { 'outputDeviceChangeWithInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChangeWithInfo(callback: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { 'outputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 10
     */
    /**
     * Unsubscribes output device change event callback.
     * @param { 'outputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { 'outputDeviceChangeWithInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Unsubscribes output device change event callback.
     * @param { 'outputDeviceChangeWithInfo' } type - Type of the event to listen for.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChangeWithInfo(callback?: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for writing more data.
     * @param { 'writeData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback with buffer to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for writing more data.
     * @param { 'writeData' } type - Type of the event to listen for.
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'writeData', callback: AudioRendererWriteDataCallback): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for writing more data.
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onWriteData(callback: AudioRendererWriteDataCallback): void;

    /**
     * Unsubscribes audio data callback.
     * @param { 'writeData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 11
     */
    /**
     * Unsubscribes audio data callback.
     * @param { 'writeData' } type - Type of the event to listen for.
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void;

    /**
     * Unsubscribes audio data callback.
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offWriteData(callback?: AudioRendererWriteDataCallback): void;
  
    /**
     * Gets the estimated audio latency in milliseconds for current audio route. For wireless connection
     * audio devices cases, the latency result may not be very accurate, system just provides it for reference only.
     * The real-time buffer status is also not taken into consideration, so it is recommended to get it only at the
     * beginning of audio playback, and do not call th function very frequently because it may be blocked by route
     * change.
     * Applications should still use {@link getAudioTimestampInfo} or {@link getAudioTimestampInfoSync} to
     * handle A/V sync after audio data has been output to hardware.
     * @param { AudioLatencyType } type - Type of audio latency to get.
     * @returns { int } Audio latency in milliseconds.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in release state.
     * @throws { BusinessError } 6800301 - System internal error, like audio service error.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getLatency(type: AudioLatencyType): int;

    /**
     * Set a focus policy independent of the audio session.
     * Each time you call this interface to set parameters,
     * you need to call the interface {@link #AudioRenderer.start} again for the settings to take effect.
     *
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @param { int } behavior - Used to adjust the focus behavior.
     *     <br>Value range: behavior can be a single flag or a bitwise OR combination of multiple flags
     *     in {@link #AudioSessionBehaviorFlags}.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;
  }

  /**
   * Enumerates source types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Enumerates source types.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum SourceType {
    /**
     * Invalid source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_INVALID = -1,
    /**
     * Mic source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Mic source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_MIC = 0,
    /**
     * Voice recognition source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9
     */
    /**
     * Voice recognition source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_RECOGNITION = 1,
    /**
     * Playback capture source type.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    SOURCE_TYPE_PLAYBACK_CAPTURE = 2,
    /**
     * Wakeup source type.
     * Permission ohos.permission.MANAGE_INTELLIGENT_VOICE is needed when calling createAudioCapturer with this type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_WAKEUP = 3,

    /**
     * Voice call source type.
     * Permission ohos.permission.RECORD_VOICE_CALL is needed when calling createAudioCapturer with this type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_CALL = 4,

    /**
     * Voice communication source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Voice communication source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_COMMUNICATION = 7,

    /**
     * Voice message source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_MESSAGE = 10,

    /**
     * Source type for voice transcription and processing.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_TRANSCRIPTION = 12,

    /**
     * Camcorder source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 13 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_CAMCORDER = 13,

    /**
     * Unprocessed source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 14 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_UNPROCESSED = 14,
    /**
     * Live broadcast source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_LIVE = 17,

    /**
     * Unprocessed voice assistant source type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT = 19
  }

  /**
   * Describes audio capturer information.
   * @typedef AudioCapturerInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 8
   */
  /**
   * Describes audio capturer information.
   * @typedef AudioCapturerInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioCapturerInfo {
    /**
     * Audio source type.
     * @type { SourceType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Audio source type.
     * @type { SourceType }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    source: SourceType;
    /**
     * Audio capturer flags.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8
     */
    /**
     * Audio capturer flags.
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    capturerFlags: int;
  }

  /**
   * Describes audio capturer configuration options.
   * @typedef AudioCapturerOptions
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 8
   */
  /**
   * Describes audio capturer configuration options.
   * @typedef AudioCapturerOptions
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioCapturerOptions {
    /**
     * Stream information.
     * @type { AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Stream information.
     * @type { AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * Capturer information.
     * @type { AudioCapturerInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Capturer information.
     * @type { AudioCapturerInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    capturerInfo: AudioCapturerInfo;
    /**
     * Playback capture config.
     * @type { ?AudioPlaybackCaptureConfig }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    playbackCaptureConfig?: AudioPlaybackCaptureConfig;
    /**
     * Perfered input device for this audio capturer. The preferredInputDevice must be an input device, and
     * the source type in {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_RECONGITION} or
     * {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}, otherwise this parameter will be ignored.
     * If the user does not specify a device, the system automatically selects the recording device for
     * the audio capturer. When the user specifies a prefer device to
     * create a recongition or transcription recording,
     * 1) If the prefer device is online, the current audiocapturer may use the preferred device for
     * recording; if the prefer device goes offline during operation, the system automatically selects
     * a recording device.
     * 2) If the prefer device is offline, the system automatically selects a recording device;
     * if the prefer device comes online during operation, it may switch to the prefer device for recording.
     * Users can query the device which is in use by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.
     * @type { ?AudioDeviceDescriptor }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    preferredInputDevice?: AudioDeviceDescriptor;
  }

  /**
   * Describes audio capturer configuration that can capture
   * microphone input (mic-in) audio data before any processing.
   *
   * @typedef AudioCapturerMicInConfig
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface AudioCapturerMicInConfig {
    /**
     * Stream information that describes Mic-In audio stream.
     *
     * @type { AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    micInStreamInfo: AudioStreamInfo;
    /**
     * Stream information that describes echo reference signal.
     * If not set this attribute, the capturer will only record Mic-In audio stream.
     *
     * @type { ?AudioStreamInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ecStreamInfo?: AudioStreamInfo;
    /**
     * Capturer attribute information.
     *
     * @type { AudioCapturerInfo }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capturerInfo: AudioCapturerInfo;
  }

  /**
   * Describe playback capture filtering options
   * @typedef CaptureFilterOptions
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface CaptureFilterOptions {
    /**
     * Filter by stream usages. If you want to capture voice streams, additional permission is needed.
     * @type { Array<StreamUsage> }
     * @permission ohos.permission.CAPTURE_VOICE_DOWNLINK_AUDIO
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10
     */
    /**
     * Filter by stream usages. But not allow to capture voice streams.
     * @type { Array<StreamUsage> }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    usages: Array<StreamUsage>;
  }

  /**
   * Describe playback capture config object.
   * @typedef AudioPlaybackCaptureConfig
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface AudioPlaybackCaptureConfig {
    /**
     * Add filter options to decide which streams to be captured.
     * @type { CaptureFilterOptions }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    filterOptions: CaptureFilterOptions;
  }

  /**
   * Provides APIs for audio recording.
   * @typedef AudioCapturer
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 8
   */
  /**
   * Provides APIs for audio recording.
   * @typedef AudioCapturer
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioCapturer {
    /**
     * Defines the current capture state.
     * @type { AudioState }
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Defines the current capture state.
     * @type { AudioState }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * Obtains the capturer information provided while creating a capturer instance. This method uses an asynchronous
     * callback to return the result.
     * @param { AsyncCallback<AudioCapturerInfo> } callback - Callback used to return the capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the capturer information provided while creating a capturer instance. This method uses an asynchronous
     * callback to return the result.
     * @param { AsyncCallback<AudioCapturerInfo> } callback - Callback used to return the capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void;
    /**
     * Obtains the capturer information provided while creating a capturer instance. This method uses a promise to
     * return the result.
     * @returns { Promise<AudioCapturerInfo> } Promise used to return the capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the capturer information provided while creating a capturer instance. This method uses a promise to
     * return the result.
     * @returns { Promise<AudioCapturerInfo> } Promise used to return the capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCapturerInfo(): Promise<AudioCapturerInfo>;
    /**
     * Obtains the capturer information provided while creating a capturer instance.
     * @returns { AudioCapturerInfo } The capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Obtains the capturer information provided while creating a capturer instance.
     * @returns { AudioCapturerInfo } The capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCapturerInfoSync(): AudioCapturerInfo;

    /**
     * Obtains the capturer stream information. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the capturer stream information. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Obtains the capturer stream information. This method uses a promise to return the result.
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the capturer stream information. This method uses a promise to return the result.
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * Obtains the capturer stream information.
     * @returns { AudioStreamInfo } The stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Obtains the capturer stream information.
     * @returns { AudioStreamInfo } The stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * Obtains the capturer stream id. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Obtains the capturer stream id. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * Obtains the capturer stream id. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 9
     */
    /**
     * Obtains the capturer stream id. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * Obtains the capturer stream id.
     * @returns { long } The stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Obtains the capturer stream id.
     * @returns { long } The stream id.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * Starts capturing.
     * Success: This method uses an asynchronous callback to return the result.
     * Failure: This method uses an asynchronous callback to return the error instance. Possible causes:
     *          6800301: Unsupported state, Audio focus request failed, System error.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Starts capturing. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts capturing.
     * Success: This method uses a promise to return the result.
     * Failure: This method uses a promise to return the error instance. Possible causes:
     *          6800301: Unsupported state, Audio focus request failed, System error.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Starts capturing. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.
     * @param { number } size - Number of bytes to read.
     * @param { boolean } isBlockingRead - Whether the read operation should be blocked.
     * @param { AsyncCallback<ArrayBuffer> } callback - Callback used to return the buffer.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void;
    /**
     * Reads the buffer from the audio capturer. This method uses a promise to return the result.
     * @param { number } size - Number of bytes to read.
     * @param { boolean } isBlockingRead - Whether the read operation should be blocked.
     * @returns { Promise<ArrayBuffer> } Returns the buffer data read if the operation is successful.
     *          Returns an error code otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>;

    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds. This method uses an
     * asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds. This method uses a
     * promise to return the result.
     * @returns { Promise<long> } Promise used to return the timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * Obtains the timestamp in Unix epoch time (starts from January 1, 1970), in nanoseconds.
     * @returns { long } The audio timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Obtains the timestamp for audio frame that passed by system framework most recently.
     * The timestamp is not accurate because audio device latency is not considered very thoughtfully.
     * @returns { long } The audio timestamp based on the monotonic nanosecond system timer.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * Obtains the timestamp info.
     *
     * @returns { Promise<AudioTimestampInfo> } The Promise used to return timestamp info.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

     /**
      * Obtains the timestamp info.
      *
      * @returns { AudioTimestampInfo } The returned timestamp info.
      * @throws { BusinessError } 6800103 - Operation not permit at current state.
      * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
      */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * Stops capturing. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Stops capturing. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops capturing. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Stops capturing. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the capturer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Releases the capturer. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the capturer. This method uses a promise to return the result.
     * @returns { Promise<void> } - Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Releases the capturer. This method uses a promise to return the result.
     * @returns { Promise<void> } - Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This method uses an asynchronous callback to
     * return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This method uses an asynchronous callback to
     * return the result.
     * @param { AsyncCallback<long> } callback - Callback used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This method uses a promise to return the result.
     * @returns { Promise<long> } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing.
     * @returns { long } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 10
     */
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing.
     * @returns { long } Promise used to return the buffer size.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * Gets the input device or devices for this stream.
     * @returns { AudioDeviceDescriptors } Descriptors of input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Gets the input device or devices for this stream.
     * @returns { AudioDeviceDescriptors } Descriptors of input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentInputDevices(): AudioDeviceDescriptors;

    /**
     * Gets full capturer info for this stream.
     * @returns { AudioCapturerChangeInfo } Full capture info.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Gets full capturer info for this stream.
     * @returns { AudioCapturerChangeInfo } Full capture info.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo;

    /**
     * Gets overflow count.
     * @returns { Promise<long> } - Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCount(): Promise<long>

    /**
     * Gets overflow count.
     * @returns { long } Overflow count number.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCountSync(): long;

    /**
     * Set if capturer want to be muted instead of interrupted. should be set before start.
     * @param { boolean } muteWhenInterrupted - use {@code true} if application want its stream to be muted
     *     instead of interrupted.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permitted at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>;

    /**
     * Set mute hint for this capturer, this method is used as a hint for power optimization
     * it does not mute the recording stream, only affects internal processing strategy.
     * @param { boolean } mute - Use true if application recording stream muted by application if self.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permitted at current state, stream is not running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setMuteHint(mute: boolean): Promise<void>;

    /**
     * Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'markReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;
    
    /**
     * Unsubscribes from the mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Unsubscribes from the mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes from the mark reached events.
     * @param { 'markReach' } type - Type of the event to listen for. Only the markReach event is supported.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from the mark reached events.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter,
     * the callback is invoked.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { long } frame - Period during which frame capturing is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter,
     * the callback is invoked.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { long } frame - Period during which frame capturing is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter,
     * the callback is invoked.
     * @param { long } frame - Period during which frame capturing is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12
     */
    /**
     * Unsubscribes from period reached events.
     * @param { 'periodReach' } type - Type of the event to listen for. Only the periodReach event is supported.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 18 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * Subscribes audio state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for. Only the stateChange event is supported.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8
     */
    /**
     * Subscribes audio state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for. Only the stateChange event is supported.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio state change event callback.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { 'stateChange' } type - Type of the event to listen for.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio recording is interrupted.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 10
     */
    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio recording is interrupted.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio recording is interrupted.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * UnSubscribes to audio interrupt events.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 10
     */
    /**
     * UnSubscribes to audio interrupt events.
     * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'audioInterrupt'): void;

    /**
     * UnSubscribes to audio interrupt events.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(): void;

    /**
     * Subscribes input device change event callback.
     * The event is triggered when input device change for this stream.
     * @param { 'inputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Subscribes input device change event callback.
     * The event is triggered when input device change for this stream.
     * @param { 'inputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes input device change event callback.
     * The event is triggered when input device change for this stream.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onInputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes input device change event callback.
     * @param { 'inputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 11
     */
    /**
     * Unsubscribes input device change event callback.
     * @param { 'inputDeviceChange' } type - Type of the event to listen for.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void;

     /**
     * Unsubscribes input device change event callback.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offInputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes audio capturer info change event callback.
     * The event is triggered when input device change for this stream.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 11
     */
    /**
     * Subscribes audio capturer info change event callback.
     * The event is triggered when input device change for this stream.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Subscribes audio capturer info change event callback.
     * The event is triggered when input device change for this stream.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes audio capturer info change event callback.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 11
     */
    /**
     * Unsubscribes audio capturer info change event callback.
     * @param { 'audioCapturerChange' } type - Type of the event to listen for.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes audio capturer info change event callback.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for reading more data.
     * @param { 'readData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback with the buffer to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 11
     */
    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for reading more data.
     * @param { 'readData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback with the buffer to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'readData', callback: Callback<ArrayBuffer>): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for reading more data.
     * @param { Callback<ArrayBuffer> } callback - Callback with the buffer to read.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onReadData(callback: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribes audio data callback.
     * @param { 'readData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 11
     */
    /**
     * Unsubscribes audio data callback.
     * @param { 'readData' } type - Type of the event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback used in subscribe.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'readData', callback?: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribes audio data callback.
     * @param { Callback<ArrayBuffer> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offReadData(callback?: Callback<ArrayBuffer>): void;

    /**
     * Sets default input device of this Capturer to DEVICE_TYPE_ACCESSORY.
     * Other capturers' devices will not be affected by this method.
     * This method can only be used before the capture stream starts. Besides,
     * if audio accessory is not connected, this method will report fail. After
     * calling this function, the input device of this capturer will not be affected
     * by other interfaces.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setInputDeviceToAccessory(): void;

    /**
     * Set focus policy independent of audio session.
     * Each time you call this interface to set parameters,
     * you need to call the interface {@link #AudioCapturer.start} again for the settings to take effect.
     *
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @param { int } behavior - Used to adjust the focus behavior.
     *     <br>Value range: behavior can be a single flag or a bitwise OR combination of multiple flags
     *     in {@link #AudioSessionBehaviorFlags}.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;
  }

  /**
   * ASR noise suppression mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrNoiseSuppressionMode {
    /**
     * Bypass noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Standard noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
    /**
     * Near field noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NEAR_FIELD = 2,
    /**
     * Far field noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FAR_FIELD = 3,
  }

  /**
   * ASR AEC mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrAecMode {
    /**
     * Bypass AEC.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Using standard AEC.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
  }

  /**
   * ASR voice control mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceControlMode {
    /**
     * Send output stream to TX.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX = 0,
    /**
     * Send both output stream and MIC input to TX.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX = 1,
    /**
     * Based on the AUDIO_2_VOICE_TX, Send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX_EX = 2,
    /**
     * Based on the AUDIO_MIX_2_VOICE_TX, Send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX_EX = 3,
  }

  /**
   * ASR voice mute mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceMuteMode {
    /**
     * Mute the local output stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE = 0,
    /**
     * Mute the local MIC input stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_MUTE = 1,
    /**
     * Send tts output stream to TX and mute the local output stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TTS_MUTE = 2,
    /**
     * Mute the voice call stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_MUTE = 3,
    /**
     * Based on the OUTPUT_MUTE, send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE_EX = 4,
  }

  /**
   * ASR whisper detection mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrWhisperDetectionMode {
    /**
     * No operation.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Use standard whisper detection model.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
  }

  /**
   * ASR processing controller.
   * @typedef AsrProcessingController
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AsrProcessingController {
    /**
     * Set ASR AEC mode.
     * @param { AsrAecMode } mode - ASR AEC Mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrAecMode(mode: AsrAecMode): boolean;

    /**
     * Get ASR AEC mode.
     * @returns { AsrAecMode } ASR AEC Mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrAecMode(): AsrAecMode;

    /**
     * Set ASR noise suppression mode.
     * @param { AsrNoiseSuppressionMode } mode - ASR noise suppression mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrNoiseSuppressionMode(mode: AsrNoiseSuppressionMode): boolean;

    /**
     * Get ASR noise suppression mode.
     * @returns { AsrNoiseSuppressionMode } ASR noise suppression mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrNoiseSuppressionMode(): AsrNoiseSuppressionMode;

    /**
     * Query whether user is whispering.
     * @returns { boolean } whether user is whispering.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isWhispering(): boolean;

    /**
     * Set ASR voice control mode.
     * @param { AsrVoiceControlMode } mode - ASR voice control mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrVoiceControlMode(mode: AsrVoiceControlMode, enable: boolean): boolean;

    /**
     * Set ASR voice mute mode.
     * @param { AsrVoiceMuteMode } mode - ASR voice mute mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrVoiceMuteMode(mode: AsrVoiceMuteMode, enable: boolean): boolean;

    /**
     * Set ASR whisper detection mode.
     * @param { AsrWhisperDetectionMode } mode - ASR whisper detection mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrWhisperDetectionMode(mode: AsrWhisperDetectionMode): boolean;

    /**
     * Get ASR whisper detection mode.
     * @returns { AsrWhisperDetectionMode } ASR whisper detection mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrWhisperDetectionMode(): AsrWhisperDetectionMode;
  }

  /**
   * Create ASR processing controller on one audio capturer.
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   * type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController } ASR Processing Controller.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Operation not allowed. e.g. the source type of the input audio capturer is not
   * {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION} or {@link SourceType#SOURCE_TYPE_WAKEUP}, or this audio capturer
   * is already released.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   */
  function createAsrProcessingController(audioCapturer: AudioCapturer): AsrProcessingController;

  /**
   * Create ASR processing controller on one audio capturer.
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   * type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController | null } ASR Processing Controller, or null when an error happens.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Operation not allowed. e.g. the source type of the input audio capturer is not
   * {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION} or {@link SourceType#SOURCE_TYPE_WAKEUP}, or this audio capturer
   * is already released.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 23 static
   */
  function createAsrProcessingController(audioCapturer: AudioCapturer): AsrProcessingController | null;

  /**
   * Enumerates tone types for player.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ToneType {
    /**
     * Dial tone for key 0.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_0 = 0,
    /**
     * Dial tone for key 1.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_1 = 1,
    /**
     * Dial tone for key 2.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_2 = 2,
    /**
     * Dial tone for key 3.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_3 = 3,
    /**
     * Dial tone for key 4.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_4 = 4,
    /**
     * Dial tone for key 5.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_5 = 5,
    /**
     * Dial tone for key 6.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_6 = 6,
    /**
     * Dial tone for key 7.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_7 = 7,
    /**
     * Dial tone for key 8.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_8 = 8,
    /**
     * Dial tone for key 9.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_9 = 9,
    /**
     * Dial tone for key *.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_S = 10,
    /**
     * Dial tone for key #.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_P = 11,
    /**
     * Dial tone for key A.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_A = 12,
    /**
     * Dial tone for key B.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_B = 13,
    /**
     * Dial tone for key C.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_C = 14,
    /**
     * Dial tone for key D.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_D = 15,
    /**
     * Supervisory tone for dial.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_DIAL = 100,
    /**
     * Supervisory tone for busy.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_BUSY = 101,
    /**
     * Supervisory tone for dial.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CONGESTION = 102,
    /**
     * Supervisory tone for radio path acknowledgment.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_ACK = 103,
    /**
     * Supervisory tone for radio path not available.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_NOT_AVAILABLE = 104,
    /**
     * Supervisory tone for call waiting.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_WAITING = 106,
    /**
     * Supervisory tone for ringtone.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RINGTONE = 107,
    /**
     * Supervisory tone for call holding.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_HOLDING = 108,
    /**
     * Proprietary tone for beep.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_BEEP = 200,
    /**
     * Proprietary tone for positive acknowledgment.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_ACK = 201,
    /**
     * Proprietary tone for prompt.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_PROMPT = 203,
    /**
     * Proprietary tone for double beep.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_DOUBLE_BEEP = 204,
  }

  /**
   * Provides APIs for tone playing.
   * @typedef TonePlayer
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TonePlayer {
    /**
     * Loads tone. This method uses an asynchronous callback to return the result.
     * @param { ToneType } type - Tone type to play.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType, callback: AsyncCallback<void>): void;
    /**
     * Loads tone. This method uses a promise to return the result.
     * @param { ToneType } type - Tone type to play.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType): Promise<void>;

    /**
     * Starts player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts player. This method uses a promise to return the result.
     * @returns { Promise<void> }Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Array of AudioEffectMode, which is read-only.
   * @typedef { Array<Readonly<AudioEffectMode>> } AudioEffectInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 10 dynamic
   * @since 23 static
   */
  type AudioEffectInfoArray = Array<Readonly<AudioEffectMode>>;

  /**
   * Describes an audio effect mode group.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 10
   */
  /**
   * Describes an audio effect mode group.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioEffectMode {
    /**
     * Audio Effect Mode effect none.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Audio Effect Mode effect none. This effect mode will disable audio effect process for current audio renderer.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_NONE = 0,
    /**
     * Audio Effect Mode effect default.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10
     */
    /**
     * Audio Effect Mode effect default.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_DEFAULT = 1,
  }

  /**
   * Describes spatial device state.
   * @typedef AudioSpatialDeviceState
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioSpatialDeviceState {
    /**
     * Spatial device address.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * Whether the spatial device supports spatial rendering.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported: boolean;

    /**
     * Whether the spatial device supports head tracking.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported: boolean;

    /**
     * Spatial device type.
     * @type { AudioSpatialDeviceType }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    spatialDeviceType: AudioSpatialDeviceType;
  }

  /**
   * Describes a spatial device type group.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioSpatialDeviceType {
    /**
     * Audio Spatial Device Type none.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_NONE = 0,
    /**
     * Audio Spatial Device Type in-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_IN_EAR_HEADPHONE = 1,
    /**
     * Audio Spatial Device Type half-in-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_HALF_IN_EAR_HEADPHONE = 2,
    /**
     * Audio Spatial Device Type over-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OVER_EAR_HEADPHONE = 3,
    /**
     * Audio Spatial Device Type glasses.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_GLASSES = 4,
    /**
     * Audio Spatial Device Type others.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OTHERS = 5,
  }

  /**
   * Describes a spatialization scene type group.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSpatializationSceneType {
    /**
     * Audio Spatialization Scene Type Default.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Audio Spatialization Scene Type Music.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MUSIC = 1,
    /**
     * Audio Spatialization Scene Type Movie.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVIE = 2,
    /**
     * Audio Spatialization Scene Type Audio Book.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIOBOOK = 3,
  }

  /**
   * Audio AudioChannel Layout
   * A 64-bit integer indicates that the appearance and order of the speakers for recording or playback.
   * @enum { long }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 11
   */
  /**
   * Audio AudioChannel Layout
   * A 64-bit integer indicates that the appearance and order of the speakers for recording or playback.
   * @enum { long }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioChannelLayout {
    /**
     * Unknown Channel Layout
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Unknown Channel Layout
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_UNKNOWN = 0x0,
    /**
     * Channel Layout For Mono, 1 channel in total
     * Speaker layout: front center(FC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Mono, 1 channel in total
     * Speaker layout: front center(FC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_MONO = 0x4,
    /**
     * Channel Layout For Stereo, 2 channels in total
     * Speaker layout: front left(FL), front right(FR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Stereo, 2 channels in total
     * Speaker layout: front left(FL), front right(FR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO = 0x3,
    /**
     * Channel Layout For Stereo-Downmix, 2 channels in total
     * Speaker layout: Stereo left, stereo right
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO_DOWNMIX = 0x60000000,
    /**
     * Channel Layout For 2.1, 3 channels in total
     * Speaker layout: Stereo plus low-frequency effects(LFE)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 2.1, 3 channels in total
     * Speaker layout: Stereo plus low-frequency effects(LFE)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1 = 0xB,
    /**
     * Channel Layout For 3.0, 3 channels in total
     * Speaker layout: Stereo plus back center(BC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 3.0, 3 channels in total
     * Speaker layout: Stereo plus back center(BC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0 = 0x103,
    /**
     * Channel Layout For Surround, 3 channels in total
     * Speaker layout: Stereo plus FC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Surround, 3 channels in total
     * Speaker layout: Stereo plus FC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_SURROUND = 0x7,
    /**
     * Channel Layout For 3.1, 4 channels in total
     * Speaker layout: Surround plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 3.1, 4 channels in total
     * Speaker layout: Surround plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1 = 0xF,
    /**
     * Channel Layout For 4.0, 4 channels in total
     * Speaker layout: Surround plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 4.0, 4 channels in total
     * Speaker layout: Surround plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT0 = 0x107,
    /**
     * Channel Layout For Quad, 4 channels in total
     * Speaker layout: Stereo plus left and right back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Quad, 4 channels in total
     * Speaker layout: Stereo plus left and right back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD = 0x33,
    /**
     * Channel Layout For Quad-Side, 4 channels in total
     * Speaker layout: Stereo plus left and right side speakers(SL, SR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD_SIDE = 0x603,
    /**
     * Channel Layout For 2.0.2, 4 channels in total
     * Speaker layout: Stereo plus left and right top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 2.0.2, 4 channels in total
     * Speaker layout: Stereo plus left and right top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT0POINT2 = 0x3000000003,
    /**
     * Channel Layout For ORDER1-ACN-N3D First Order Ambisonic(FOA), 4 channels in total
     * First order, Ambisonic Channel Number(ACN) format, Normalization of three-D(N3D)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_N3D = 0x100000000001,
    /**
     * Channel Layout For ORDER1-ACN-SN3D FOA, 4 channels in total
     * First order, ACN format, Semi-Normalization of three-D(SN3D)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_SN3D = 0x100000001001,
    /**
     * Channel Layout For ORDER1-FUMA FOA, 4 channels in total
     * First order, Furse-Malham(FuMa) format
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_FUMA = 0x100000000101,
    /**
     * Channel Layout For 4.1, 5 channels in total
     * Speaker layout: 4.0 plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 4.1, 5 channels in total
     * Speaker layout: 4.0 plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT1 = 0x10F,
    /**
     * Channel Layout For 5.0, 5 channels in total
     * Speaker layout: Surround plus two side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 5.0, 5 channels in total
     * Speaker layout: Surround plus two side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0 = 0x607,
    /**
     * Channel Layout For 5.0-Back, 5 channels in total
     * Speaker layout: Surround plus two back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0_BACK = 0x37,
    /**
     * Channel Layout For 2.1.2, 5 channels in total
     * Speaker layout: 2.0.2 plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1POINT2 = 0x300000000B,
    /**
     * Channel Layout For 3.0.2, 5 channels in total
     * Speaker layout: 2.0.2 plus FC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0POINT2 = 0x3000000007,
    /**
     * Channel Layout For 5.1, 6 channels in total
     * Speaker layout: 5.0 plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 5.1, 6 channels in total
     * Speaker layout: 5.0 plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1 = 0x60F,
    /**
     * Channel Layout For 5.1-Back, 6 channels in total
     * Speaker layout: 5.0-Back plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1_BACK = 0x3F,
    /**
     * Channel Layout For 6.0, 6 channels in total
     * Speaker layout: 5.0 plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 6.0, 6 channels in total
     * Speaker layout: 5.0 plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0 = 0x707,
    /**
     * Channel Layout For Hexagonal, 6 channels in total
     * Speaker layout: 5.0-Back plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Hexagonal, 6 channels in total
     * Speaker layout: 5.0-Back plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXAGONAL = 0x137,
    /**
     * Channel Layout For 3.1.2, 6 channels in total
     * Speaker layout: 3.1 plus two top front speakers(TFL, TFR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1POINT2 = 0x500F,
    /**
     * Channel Layout For 6.0-Front, 6 channels in total
     * Speaker layout: Quad-Side plus left and right front center speakers(FLC, FRC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0_FRONT = 0x6C3,
    /**
     * Channel Layout For 6.1, 7 channels in total
     * Speaker layout: 5.1 plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 6.1, 7 channels in total
     * Speaker layout: 5.1 plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1 = 0x70F,
    /**
     * Channel Layout For 6.1-Back, 7 channels in total
     * Speaker layout: 5.1-Back plus BC
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_BACK = 0x13F,
    /**
     * Channel Layout For 6.1-Front, 7 channels in total
     * Speaker layout: 6.0-Front plus LFE
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_FRONT = 0x6CB,
    /**
     * Channel Layout For 7.0, 7 channels in total
     * Speaker layout: 5.0 plus two back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 7.0, 7 channels in total
     * Speaker layout: 5.0 plus two back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0 = 0x637,
    /**
     * Channel Layout For 7.0-Front, 7 channels in total
     * Speaker layout: 5.0 plus left and right front center speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 7.0-Front, 7 channels in total
     * Speaker layout: 5.0 plus left and right front center speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0_FRONT = 0x6C7,
    /**
     * Channel Layout For 7.1, 8 channels in total
     * Speaker layout: 5.1 plus two back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 7.1, 8 channels in total
     * Speaker layout: 5.1 plus two back speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1 = 0x63F,
    /**
     * Channel Layout For Octagonal, 8 channels in total
     * Speaker layout: 5.0 plus BL, BR and BC.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Octagonal, 8 channels in total
     * Speaker layout: 5.0 plus BL, BR and BC.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_OCTAGONAL = 0x737,
    /**
     * Channel Layout For 5.1.2, 8 channels in total
     * Speaker layout: 5.1 plus two top side speakers.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 5.1.2, 8 channels in total
     * Speaker layout: 5.1 plus two top side speakers.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT2 = 0x300000060F,
    /**
     * Channel Layout For 7.1-Wide, 8 channels in total
     * Speaker layout: 5.1 plus left and right front center speakers.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE = 0x6CF,
    /**
     * Channel Layout For 7.1-Wide, 8 channels in total
     * Speaker layout: 5.1-Back plus left and right front center speakers.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE_BACK = 0xFF,
    /**
     * Channel Layout For ORDER2-ACN-N3D Higher Order Ambisonics(HOA), 9 channels in total
     * Second order, ACN format, N3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_N3D = 0x100000000002,
    /**
     * Channel Layout For ORDER2-ACN-SN3D HOA, 9 channels in total
     * Second order, ACN format, SN3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_SN3D = 0x100000001002,
    /**
     * Channel Layout For ORDER2-FUMA HOA, 9 channels in total
     * Second order, FuMa format
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_FUMA = 0x100000000102,
    /**
     * Channel Layout For 5.1.4, 10 channels in total
     * Speaker layout: 5.1 plus four top speakers(TFL, TFR, TBL, TBR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 5.1.4, 10 channels in total
     * Speaker layout: 5.1 plus four top speakers(TFL, TFR, TBL, TBR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT4 = 0x2D60F,
    /**
     * Channel Layout For 7.1.2, 10 channels in total
     * Speaker layout: 7.1 plus two top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 7.1.2, 10 channels in total
     * Speaker layout: 7.1 plus two top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT2 = 0x300000063F,
    /**
     * Channel Layout For 7.1.4, 12 channels in total
     * Speaker layout: 7.1 plus four top speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 7.1.4, 12 channels in total
     * Speaker layout: 7.1 plus four top speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT4 = 0x2D63F,
    /**
     * Channel Layout For 10.2, 12 channels in total
     * Speaker layout: FL, FR, FC, TFL, TFR, BL, BR, BC, SL, SR, wide left(WL), and wide right(WR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 10.2, 12 channels in total
     * Speaker layout: FL, FR, FC, TFL, TFR, BL, BR, BC, SL, SR, wide left(WL), and wide right(WR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_10POINT2 = 0x180005737,
    /**
     * Channel Layout For 9.1.4, 14 channels in total
     * Speaker layout: 7.1.4 plus two wide speakers(WL, WR)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT4 = 0x18002D63F,
    /**
     * Channel Layout For 9.1.6, 16 channels in total
     * Speaker layout: 9.1.4 plus two top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For 9.1.6, 16 channels in total
     * Speaker layout: 9.1.4 plus two top side speakers
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT6 = 0x318002D63F,
    /**
     * Channel Layout For Hexadecagonal, 16 channels in total
     * Speaker layout: Octagonal plus two wide speakers, six top speakers(TFL, TFR, TFC, TBL, TBR, TBC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For Hexadecagonal, 16 channels in total
     * Speaker layout: Octagonal plus two wide speakers, six top speakers(TFL, TFR, TFC, TBL, TBR, TBC)
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXADECAGONAL = 0x18003F737,
    /**
     * Channel Layout For ORDER3-ACN-N3D HOA, 16 channels in total
     * Third order, ACN format, N3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For ORDER3-ACN-N3D HOA, 16 channels in total
     * Third order, ACN format, N3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_N3D = 0x100000000003,
    /**
     * Channel Layout For ORDER3-ACN-SN3D HOA, 16 channels in total
     * Third order, ACN format, N3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11
     */
    /**
     * Channel Layout For ORDER3-ACN-SN3D HOA, 16 channels in total
     * Third order, ACN format, N3D
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_SN3D = 0x100000001003,
    /**
     * Channel Layout For ORDER3-FUMA HOA, 16 channels in total
     * Third order, FuMa format
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_FUMA = 0x100000000103
  }

  /**
   * Enumerates audio effect flags.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum EffectFlag {
    /**
     * Audio render effect.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RENDER_EFFECT_FLAG = 0,

    /**
     * Audio capture effect.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CAPTURE_EFFECT_FLAG = 1
  }

  /**
   * Describes an audio effect property.
   * @typedef AudioEffectProperty
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectProperty {
    /**
     * Name of effect property.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Effect category this effect property belongs to.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    category: string;

    /**
     * Effect flag of this effect property.
     * @type { EffectFlag }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    flag: EffectFlag;
  }

  /**
   * Provides APIs for audio loopback.
   * When audio loopback is enabled, the system creates fast playback and recording streams to implement low-latency in-ear
   * monitoring. The recorded audio is directly routed back to the playback device internally. For the renderer, its audio
   * focus strategy matches that of {@link StreamUsage#STREAM_USAGE_MUSIC}. For the capturer, its audio focus strategy matches
   * that of {@link SourceType#SOURCE_TYPE_MIC}. The input and output devices are automatically selected by the system.
   * If the current input or output does not support low latency, audio loopback fails to be enabled. During operation,
   * if the audio focus is preempted by another audio stream or the input or output device switches to one that does not support
   * low latency, the system automatically disables audio loopback.
   *
   * @typedef AudioLoopback
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioLoopback {
    /**
     * Obtains the status of audio loopback.
     * @returns { Promise<AudioLoopbackStatus> } Promise used to return the audio loopback status.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    getStatus(): Promise<AudioLoopbackStatus>;

    /**
     * Sets the volume for audio loopback. This volume does not affect other audio streams or the system volume.
     * @param { double } volume Volume to set. The value type is float, ranging from 0.0 to 1.0.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, form 0.0 to 1.0.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * Subscribes to audio loopback status changes.
     * @param { 'statusChange' } type Type of the event to listen for. Only the statusChange event is supported.
     * @param { Callback<AudioLoopbackStatus> } callback Callback used to return the audio loopback status
     * change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    on(type: 'statusChange', callback: Callback<AudioLoopbackStatus>): void;

    /**
     * Subscribes to audio loopback status changes.
     * @param { Callback<AudioLoopbackStatus> } callback Callback used to return the audio loopback status
     *     change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStatusChange(callback: Callback<AudioLoopbackStatus>): void;

    /**
     * Unsubscribes audio loopback status change event callback.
     * @param { 'statusChange' } type - Type of the event to listen for.
     * @param { Callback<AudioLoopbackStatus> } [callback] - Callback used to listen for the audio loopback status
     * change event.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    off(type: 'statusChange', callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * Unsubscribes audio loopback status change event callback.
     * @param { Callback<AudioLoopbackStatus> } [callback] - Callback used to listen for the audio loopback status
     *     change event.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStatusChange(callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * Enable or disable audio loopback.
     * When audio loopback is enabled, the system automatically creates fast playback and recording streams
     * to implement low-latency in-ear monitoring. When audio loopback is disabled, the audio stream is destroyed.
     * If enabling audio loopback fails, you can use {@link AudioLoopback#getStatus} to query the cause. After audio
     * loopback is enabled, you can subscribe to the statusChange event to listen for audio loopback status changes.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enable - Whether to enable or disable audio loopback.
     * @returns { Promise<boolean> } Promise used to return the result.
     * The value <b>true</b> means that audio loopback is enabled, and <b>false</b> means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    enable(enable: boolean): Promise<boolean>;

    /**
     * Sets the reverberation of the audio loopback.
     *
     * @param { AudioLoopbackReverbPreset } preset - Reverberation preset.
     * @returns { boolean } Returns success or failure.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setReverbPreset(preset: AudioLoopbackReverbPreset): boolean;

    /**
     * Get the current reverberation.
     * The default reverberation preset of audio loopback is {@link AudioLoopbackReverbPreset#THEATER} if
     * users do not modify the preset.
     *
     * @returns { AudioLoopbackReverbPreset  } Returns the current reverberation.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getReverbPreset(): AudioLoopbackReverbPreset;

    /**
     * Sets the equalizer preset of the audio loopback.
     *
     * @param { AudioLoopbackEqualizerPreset } preset - Equalizer preset.
     * @returns { boolean } Returns success or failure.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setEqualizerPreset(preset: AudioLoopbackEqualizerPreset): boolean;

    /**
     * Gets the current equalizer preset.
     * The default equalizer preset of audio loopback is {@link AudioLoopbackEqualizerPreset#FULL} if
     * users do not modify the preset.
     *
     * @returns { AudioLoopbackEqualizerPreset } Returns the current equalizer preset.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getEqualizerPreset(): AudioLoopbackEqualizerPreset;
  }
}

export default audio;
