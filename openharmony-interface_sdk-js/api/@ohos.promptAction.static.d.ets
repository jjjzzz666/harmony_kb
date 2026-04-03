'use static'
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
/**
 * @file
 * @kit ArkUI
 */
import { ResourceColor, Offset, Dimension, EdgeStyles, EdgeColors, EdgeWidths, BorderRadiuses, VoidCallback } from '@ohos.arkui.component';
import { AsyncCallback, Callback } from '@ohos.base';
import { BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, Rectangle, TransitionEffect, KeyboardAvoidMode, DismissReason, BackgroundBlurStyleOptions, BackgroundEffectOptions } from '@ohos.arkui.component';
import { CustomBuilder } from '@ohos.arkui.component';
import { DialogAlignment } from '@ohos.arkui.component';
import { DismissDialogAction } from '@ohos.arkui.component';
import { BorderStyle, Alignment } from '@ohos.arkui.component';
import { Resource } from 'global.resource';
import { LengthMetrics } from 'arkui.Graphics';
/**
 * Define the display mode of all kind of dialog
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export enum LevelMode {
    /**
     * Display above all page levels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    OVERLAY = 0,
    /**
     * Display within the current page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EMBEDDED = 1
}
/**
 * Define the immersive mode of all kind of dialog
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export enum ImmersiveMode {
    /**
     * Mask covering the parent node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Mask extend safe area includes status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EXTEND = 1
}
/**
 * Defines level order.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LevelOrder {
    /**
     * Generate valid level order.
     *
     * @param { double } order - Clamp order with mininum number -100000 and maximum number 100000.
     * @returns { LevelOrder } the order object.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static clamp(order: double): LevelOrder;
    /**
     * Get the order from LevelOrder object.
     *
     * @returns { double } the order number.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getOrder(): double;
}


/**
 * Defines promptAction
 *
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace promptAction {
    
    
    /**
     * Show toast options.
     *
     * @typedef ShowToastOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ShowToastOptions {
        
        
        /**
         * Text to display.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        message: string | Resource;
        
        
        /**
         * Duration of toast dialog box. The default value is 1500.
         * The recommended value ranges from 1500ms to 10000ms.
         * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        duration?: int;
        
        
        /**
         * The distance between toast dialog box and the bottom of screen.
         *
         * @type { ?(string | double) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        bottom?: string | double;
        
        /**
         * Determine the show mode of the toast.
         *
         * @type { ?ToastShowMode }
         * @default ToastShowMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        showMode?: ToastShowMode;
        /**
         * Defines the toast alignment of the screen.
         *
         * @type { ?Alignment }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        alignment?: Alignment;
        /**
         * Defines the toast offset.
         *
         * @type { ?Offset }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offset?: Offset;
        /**
         * Background color of toast.
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * Text color of toast.
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        textColor?: ResourceColor;
        /**
         * Background blur Style of toast.
         *
         * @type { ?BlurStyle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
        /**
         * Shadow of toast.
         *
         * @type { ?(ShadowOptions | ShadowStyle) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * Define whether to respond to the hover mode.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * Defines the toast's display area in hover mode.
         *
         * @type { ?HoverModeAreaType }
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
    }
    
    /**
     * Enum for the toast showMode.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export enum ToastShowMode {
        
        /**
         * Toast shows in app.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        DEFAULT = 0,
        
        /**
         * Toast shows at the top.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        TOP_MOST = 1,
        /**
         * Toast shows in SYSTEM_TOAST window.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @since 23 static
         */
        SYSTEM_TOP_MOST = 2
    }
    
    
    /**
     * Defines Button.
     *
     * @typedef Button
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface Button {
        
        
        /**
         * The text displayed in the button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        text: string | Resource;
        
        
        /**
         * The foreground color of button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        color: string | Resource;
        /**
         * Define whether the button responds to Enter/Space key by default.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        primary?: boolean;
    }
    /**
     * Defines the one-button array.
     *
     * @typedef { [Button] } PromptActionSingleButton
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionSingleButton = [
        Button
    ];
    /**
     * Defines the two-buttons array.
     *
     * @typedef { [Button, Button | undefined] } PromptActionDoubleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionDoubleButtons = [
        Button,
        Button | undefined
    ];
    /**
     * Defines the three-buttons array.
     *
     * @typedef { [Button, Button | undefined, Button | undefined] } PromptActionTripleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionTripleButtons = [
        Button,
        Button | undefined,
        Button | undefined
    ];
    /**
     * Defines the four-buttons array.
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined] } PromptActionQuadrupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionQuadrupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    /**
     * Defines the five-buttons array.
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined] }
     *     PromptActionQuintupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionQuintupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    /**
     * Defines the six-buttons array.
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button |
     *     undefined] } PromptActionSextupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    export type PromptActionSextupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    
    
    /**
     * Success response.
     *
     * @typedef ShowDialogSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ShowDialogSuccessResponse {
        
        
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        index: int;
    }
    
    
    /**
     * Show dialog options.
     *
     * @typedef ShowDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ShowDialogOptions {
        
        
        /**
         * Title of the text to display.
         *
         * @type { ?(string | Resource) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        title?: string | Resource;
        
        
        /**
         * Text body.
         *
         * @type { ?(string | Resource) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        message?: string | Resource;
        
        
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * More than one buttons are supported.
         *
         * @type { ?Array<Button> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        buttons?: Array<Button>;
        
        /**
         * Mask Region of dialog. The size can't exceed the main window.
         *
         * @type { ?Rectangle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        maskRect?: Rectangle;
        
        /**
         * Defines the dialog alignment of the screen.
         *
         * @type { ?DialogAlignment }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        alignment?: DialogAlignment;
        
        /**
         * Defines the dialog offset.
         *
         * @type { ?Offset }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offset?: Offset;
        
        /**
         * Whether to display in the sub window.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        showInSubWindow?: boolean;
        
        /**
         * Whether it is a modal dialog
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * Defines the dialog's background color.
         *
         * @type { ?ResourceColor }
         * @default Color.Transparent
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * Defines the dialog's background blur Style
         *
         * @type { ?BlurStyle }
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
        /**
         * Defines the dialog's background blur style with options
         *
         * @type { ?BackgroundBlurStyleOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * Defines the dialog's background effect with options
         *
         * @type { ?BackgroundEffectOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * Defines the dialog's shadow.
         *
         * @type { ?(ShadowOptions | ShadowStyle) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * Defines whether to respond to the hover mode.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * Defines the dialog's display area in hover mode.
         *
         * @type { ?HoverModeAreaType }
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * Callback function when the dialog appears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * Callback function when the dialog disappears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * Callback function before the dialog openAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * Callback function before the dialog closeAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
        /**
         * Determine the display level of the dialog.
         *
         * @type { ?LevelMode }
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * The uniqueId of any node in the router or navigation page.
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * Determine the immersive mode of the dialog.
         *
         * @type { ?ImmersiveMode }
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
        /**
         * Determine the display order of the dialog.
         *
         * @type { ?LevelOrder }
         * @default The value returns by LevelOrder.clamp(0)
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelOrder?: LevelOrder;
    }
    /**
     * Enum for state.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enum CommonState {
        /**
         * Indicates it is uninitialized.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        UNINITIALIZED = 0,
        /**
         * Indicates it is initialized.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        INITIALIZED = 1,
        /**
         * Indicates it is appearing.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        APPEARING = 2,
        /**
         * Indicates it is appeared.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        APPEARED = 3,
        /**
         * Indicates it is disappearing.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        DISAPPEARING = 4,
        /**
         * Indicates it is disappeared.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        DISAPPEARED = 5
    }
    /**
     * The class used to control common dialog.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export class CommonController {
        /**
         * The constructor.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        constructor();
        /**
         * Close the corresponding common dialog.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        close(): void;
        /**
         * Get the state.
         *
         * @returns { CommonState } return the state.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        getState(): CommonState;
    }
    /**
     * The class used to control dialog.
     *
     * @extends CommonController
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export class DialogController extends CommonController {
    }
    
    /**
     * Dialog base options
     *
     * @typedef BaseDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface BaseDialogOptions {
        
        /**
         * Mask Region of dialog. The size can't exceed the main window.
         *
         * @type { ?Rectangle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        maskRect?: Rectangle;
        
        /**
         * Defines the dialog alignment of the screen.
         *
         * @type { ?DialogAlignment }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        alignment?: DialogAlignment;
        
        /**
         * Defines the dialog offset.
         *
         * @type { ?Offset }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offset?: Offset;
        
        /**
         * Whether to display in the sub window.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        showInSubWindow?: boolean;
        
        /**
         * Whether it is a modal dialog
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * Allows users to click the mask layer to exit.
         *
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        autoCancel?: boolean;
        /**
         * Transition parameters of opening/closing custom dialog.
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        transition?: TransitionEffect;
        /**
         * Dialog transition parameters of opening/closing custom dialog.
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        dialogTransition?: TransitionEffect;
        /**
         * Mask transition parameters of opening/closing custom dialog.
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        maskTransition?: TransitionEffect;
        /**
         * Defines custom dialog maskColor
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        maskColor?: ResourceColor;
        /**
        * Callback function when the CustomDialog interactive dismiss.
        *
        * @type { ?Callback<DismissDialogAction> }
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        onWillDismiss?: Callback<DismissDialogAction>;
        /**
         * Callback function when the dialog appears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * Callback function when the dialog disappears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * Callback function before the dialog openAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * Callback function before the dialog closeAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
        /**
         * Defines the customDialog's keyboard avoid mode
         *
         * @type { ?KeyboardAvoidMode }
         * @default KeyboardAvoidMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        keyboardAvoidMode?: KeyboardAvoidMode;
        /**
         * Defines whether to respond to the hover mode.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * Defines the dialog's display area in hover mode.
         *
         * @type { ?HoverModeAreaType }
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * Defines the customDialog's background blur style with options
         *
         * @type { ?BackgroundBlurStyleOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * Defines the customDialog's background effect with options
         *
         * @type { ?BackgroundEffectOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * Defines the distance between the customDialog and system keyboard.
         *
         * @type { ?LengthMetrics }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        keyboardAvoidDistance?: LengthMetrics;
        /**
         * Determine the display level of the dialog.
         *
         * @type { ?LevelMode }
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * The uniqueId of any node in the router or navigation page.
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * Determine the immersive mode of the dialog.
         *
         * @type { ?ImmersiveMode }
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
        /**
         * Determine the display order of the dialog.
         *
         * @type { ?LevelOrder }
         * @default The value returns by LevelOrder.clamp(0)
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelOrder?: LevelOrder;
        /**
         * Specifies whether to get focus when the custom dialog is displayed.
         *
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        focusable?: boolean;
    }
    
    /**
     * Dialog's custom content options
     *
     * @extends BaseDialogOptions
     * @interface CustomDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface CustomDialogOptions extends BaseDialogOptions {
        
        /**
         * Allow developer custom dialog's content.
         *
         * @type { CustomBuilder }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        builder: CustomBuilder;
        /**
         * Defines the custom dialog's background color.
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * Defines the custom dialog's corner radius.
         *
         * @type { ?(Dimension | BorderRadiuses) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        cornerRadius?: Dimension | BorderRadiuses;
        /**
         * Defines the custom dialog's width.
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        width?: Dimension;
        /**
         * Defines the custom dialog's height.
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        height?: Dimension;
        /**
         * Defines the custom dialog's border width.
         *
         * @type { ?(Dimension | EdgeWidths) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderWidth?: Dimension | EdgeWidths;
        /**
         * Defines the custom dialog's border color.
         *
         * @type { ?(ResourceColor | EdgeColors) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderColor?: ResourceColor | EdgeColors;
        /**
         * Defines the custom dialog's border style.
         *
         * @type { ?(BorderStyle | EdgeStyles) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderStyle?: BorderStyle | EdgeStyles;
        /**
         * Defines the custom dialog's shadow.
         *
         * @type { ?(ShadowOptions | ShadowStyle) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * Defines the customDialog's background blur Style
         *
         * @type { ?BlurStyle }
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
    }
    /**
     * Corner radius type of DialogOptions.
     *
     * @typedef { Dimension | BorderRadiuses } DialogOptionsCornerRadius
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type DialogOptionsCornerRadius = Dimension | BorderRadiuses;
    /**
     * Border width type of DialogOptions.
     *
     * @typedef { Dimension | EdgeWidths } DialogOptionsBorderWidth
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type DialogOptionsBorderWidth = Dimension | EdgeWidths;
    /**
     * Border color type of DialogOptions.
     *
     * @typedef { ResourceColor | EdgeColors } DialogOptionsBorderColor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type DialogOptionsBorderColor = ResourceColor | EdgeColors;
    /**
     * Border style type of DialogOptions.
     *
     * @typedef { BorderStyle | EdgeStyles } DialogOptionsBorderStyle
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type DialogOptionsBorderStyle = BorderStyle | EdgeStyles;
    /**
     * Shadow type of DialogOptions.
     *
     * @typedef { ShadowOptions | ShadowStyle } DialogOptionsShadow
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export type DialogOptionsShadow = ShadowOptions | ShadowStyle;
    /**
     * Dialog options
     *
     * @extends BaseDialogOptions
     * @typedef DialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface DialogOptions extends BaseDialogOptions {
        /**
         * Defines the dialog's background color.
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * Defines the dialog's corner radius.
         *
         * @type { ?DialogOptionsCornerRadius }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        cornerRadius?: DialogOptionsCornerRadius;
        /**
         * Defines the dialog's width.
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        width?: Dimension;
        /**
         * Defines the dialog's height.
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        height?: Dimension;
        /**
         * Defines the dialog's border width.
         *
         * @type { ?DialogOptionsBorderWidth }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderWidth?: DialogOptionsBorderWidth;
        /**
         * Defines the dialog's border color.
         *
         * @type { ?DialogOptionsBorderColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderColor?: DialogOptionsBorderColor;
        /**
         * Defines the dialog's border style.
         *
         * @type { ?DialogOptionsBorderStyle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        borderStyle?: DialogOptionsBorderStyle;
        /**
         * Defines the dialog's shadow.
         *
         * @type { ?DialogOptionsShadow }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        shadow?: DialogOptionsShadow;
        /**
         * Defines the dialog's background blur Style
         *
         * @type { ?BlurStyle }
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
    }
    
    
    /**
     * Success response.
     *
     * @typedef ActionMenuSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ActionMenuSuccessResponse {
        
        
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        index: int;
    }
    
    
    /**
     * ActionMenu options.
     *
     * @typedef ActionMenuOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ActionMenuOptions {
        
        
        /**
         * Title of the text to display.
         *
         * @type { ?(string | Resource) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        title?: string | Resource;
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * One to six buttons are supported.
         *
         * @type { PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons |
         *     PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        buttons: PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons |
            PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons;
        
        /**
         * Whether to display in the sub window.
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        showInSubWindow?: boolean;
        
        /**
         * Whether it is a modal dialog
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * Determine the display level of the dialog.
         *
         * @type { ?LevelMode }
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * The uniqueId of any node in the router or navigation page.
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * Determine the immersive mode of the dialog.
         *
         * @type { ?ImmersiveMode }
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
         /**
         * Callback function when the menu appears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * Callback function when the menu disappears.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * Callback function before the menu openAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * Callback function before the menu closeAnimation starts.
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
    }
    /**
     * Displays the notification text.
     *
     * @param { ShowToastOptions } options - Options.
     * @returns { Promise<int> } return the toast id that will be used by closeToast.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function openToast(options: ShowToastOptions): Promise<int>;
    /**
     * Close the notification text.
     *
     * @param { int } toastId - the toast id that returned by openToast.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 103401 - Cannot find the toast.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export function closeToast(toastId: int): void;
}
export default promptAction;
