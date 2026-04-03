/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */
import { CustomBuilder, DynamicRangeMode } from '@ohos.arkui.component';
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import colorSpaceManager from './@ohos.graphics.colorSpaceManager';

/**
 * This module allows developers to export snapshot image from a component or a custom builder.
 *
 * @namespace componentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace componentSnapshot {
    /**
     * Defines the target region information for snapshot taking.
     *
     * @typedef SnapshotRegion
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface SnapshotRegion {
        /**
         * Left side position of rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        left: double;
        /**
         * Right side position of Rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        right: double;
        /**
         * Top side position of Rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        top: double;
        /**
         * Bottom side position of Rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        bottom: double;
    }
    /**
     * Defines the extra options for snapshot taking, if this is used, the start and end will
     * be assigned to left and right value according to the layout direction of node automaticlly.
     *
     * @typedef LocalizedSnapshotRegion
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface LocalizedSnapshotRegion {
        /**
         * Start side position of rectangle, in PX
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        start: double;
        /**
         * End side position of Rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        end: double;
        /**
         * Top side position of rectangle, in PX
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        top: double;
        /**
         * Bottom side position of Rectangle, in PX.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        bottom: double;
    }
    /**
     * Defines the snapshot region rect type.
     *
     * @typedef { SnapshotRegion | LocalizedSnapshotRegion } SnapshotRegionType
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type SnapshotRegionType = SnapshotRegion | LocalizedSnapshotRegion;

    /**
     * Defines the color mode used for current snapshot taking.
     * By default, the system draws snapshot in sRGB mode. Therefore, snapshot for components with wide color display
     * mode enabled will lose some effect. If you know the color space used in the component to be taken snapshot,
     * you can specify the colorSpace parameter and set isAuto to false, for achieving the expected screenshot effect.
     * But it is difficult to know which color space is used by the component to be taken. Therefore, in general,
     * you can just set isAuto to true for letting the system to determine the color space to use based on the actual
     * situation automaticly. When isAuto is set to true, value set by the colorSpace field will be ignored.
     *
     * @typedef ColorModeOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ColorModeOptions {    
      /**
       * Set one specific color space which want to be used.
       *
       * @type { ?colorSpaceManager.ColorSpace }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 23 static
       */
      colorSpace?: colorSpaceManager.ColorSpace;
      /**
       * Indicate that if the system should decide the color space automaticlly.
       * If set this to true, the one specificed by colorSpace parameter will be ignored.
       *
       * When setting isAuto to true, it is recommended to also set the waitUntilRenderFinished field
       * in SnapshotOptions to true to ensure that the system can properly detect the mode being used.
       *
       * @type { ?boolean } - Whether to let the system automatically determine the color space used for screenshots.
       *     True means ignoring the value set via the colorSpace field and letting the system decide based on the
       *     actual component situation. False means using the value set via the colorSpace field.
       *     The default value is false.
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 23 static
       */
      isAuto?: boolean;
    }

    /**
     * Defines the dynamic range mode used for current snapshot taking.
     * By default, the system draws snapshot in STANDARD mode. You can set the dynamicRangeMode parameter
     * and set isAuto to false, for using one specific dynamic range mode.
     * Also you can just set isAuto to true for letting the system to determine the dynamic range mode automaticly.
     * When isAuto is set to true, value set by the dynamicRangeMode field will be ignored.
     *
     * @typedef DynamicRangeModeOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface DynamicRangeModeOptions {    
      /**
       * Set one specific dynamic range mode that you want to use.
       *
       * @type { ?DynamicRangeMode }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 23 static
       */
      dynamicRangeMode?: DynamicRangeMode;

      /**
       * Indicate that if the system should decide the dynamic range mode automaticlly.
       * If set this to true, the one specificed by dynamicRangeMode parameter will be ignored.
       *
       * When setting isAuto to true, it is recommended to also set the waitUntilRenderFinished field
       * in SnapshotOptions to true to ensure that the system can properly detect the mode being used.
       *
       * @type { ?boolean } - Whether to let the system determine the dynamic range mode used automatically.
       *     True means ignoring the value set via the dynamicRangeMode field and letting the system decide
       *     based on the actual component situation. False means using the value set via the dynamicRangeMode field.
       *     The default value is false.
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 23 static
       */
      isAuto?: boolean;
    }

    /**
     * Defines the extra options for snapshot taking.
     *
     * @typedef SnapshotOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface SnapshotOptions {
        /**
         * Defines the scale property to render the snapshot.
         *
         * @type {?double}
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        scale?: double;
        /**
         * Whether to wait the rendering is finished.
         *
         * @type {?boolean}
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        waitUntilRenderFinished?: boolean;
        /**
         * Defines the rect reigon type of the snapshot.
         *
         * @type {?SnapshotRegionType}
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        region?: SnapshotRegionType;
        /**
         * Set the color space options for current snapshot taking.
         *
         * @type { ?ColorModeOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        colorMode?: ColorModeOptions;

        /**
         * Set the dynamic range mode options for current snapshot taking.
         *
         * @type { ?DynamicRangeModeOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        dynamicRangeMode?: DynamicRangeModeOptions;
    }
    /**
     * Take a screenshot of the specified component in synchronous mode,
     * this mode will block the main thread, please use it with caution, the maximum
     * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
     *
     * @param { string } id - Target component ID, set by developer through .id attribute.
     * @param { SnapshotOptions } [options] - Define the snapshot options.
     * @returns { image.PixelMap | null } - The snapshot result in PixelMap format.
     * @throws { BusinessError } 100001 - Invalid ID.
     * @throws { BusinessError } 160002 - Timeout.
     * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function getSync(id: string, options?: SnapshotOptions): image.PixelMap | null;
}
export default componentSnapshot;
