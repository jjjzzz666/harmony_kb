'use static';
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
 
import { UIContext } from '@ohos.arkui.UIContext';
import { FrameNode } from 'arkui.FrameNode';
import { Size } from 'arkui.Graphics';
import { TouchEvent, MouseEvent, AxisEvent } from '@ohos.arkui.component';
import { WrappedBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';
import { RecordData } from '@ohos.base';
import { CompetitionStrategy } from '@ohos.arkui.component';

/**
 * Render type of the node using for indicating that
 * if the node will be shown on the display or rendered to a texture
 *
 * @enum { number } Render type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum NodeRenderType {
  /**
   * Display type.The node will be shown on the display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RENDER_TYPE_DISPLAY = 0,

  /**
   * Exporting texture type.The node will be render to a  texture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RENDER_TYPE_TEXTURE = 1
}

/**
 * RenderOptions info.
 *
 * @interface RenderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RenderOptions {
  /**
   * The ideal size of the node.
   * @type { ?Size } selfIdealSize - The ideal size of the node
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selfIdealSize?: Size;

  /**
   * Render type of the node.
   * @type { ?NodeRenderType } type - Render type of the node
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type?: NodeRenderType;

  /**
   * The surfaceId of a texture consumer
   * @type { ?string } surfaceId - surfaceId of a consumer who can receive the texture of the Node
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  surfaceId?: string;
}


/**
 * BuildOptions info.
 *
 * @interface BuildOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface BuildOptions {
  /**
   * Whether support the BuilderNode parallel creation.
   * @type { ?boolean } useParallel - Indicates whether use parallel.
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 staticonly
   */
  useParallel?: boolean;
}

/**
 * Defines BuilderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BuilderNode<T = undefined> {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the BuilderNode
   * @param { RenderOptions } [options] - Render options of the Builder Node
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);
  /**
   * Build the BuilderNode with the builder.
   *
   * @param {  WrappedBuilder<CustomBuilder> } builder - Defined the builder will be called to build the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilder>): void;
  /**
   * Build the BuilderNode with the builder.
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defined the builder will be called to build the node.
   * @param { T } arg - Defined the args will be used in the builder.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T): void;

  /**
   * Build the BuilderNode with the builder.Support the type that WrappedBuilder contains builder used different params.
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defined the builder will be called to build the node.
   * @param { T } arg - Defined the args will be used in the builder.
   * @param { BuildOptions } options - Defined the options will be used when build.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T, options: BuildOptions): void;

  /**
   * Update the BuilderNode based on the provided parameters.
   *
   * @param { T } arg - Parameters used to update the BuilderNode, which must match the types required by the builder
   *     bound to the BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  update(arg: T): void;

  /**
   * Get the FrameNode in BuilderNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * Dispatch touchEvent to targetNode.
   *
   * @param { TouchEvent } event - The touchEvent which will be sent to the targetNode.
   * @returns { boolean } - Returns true if the TouchEvent has been successfully posted to the targetNode, false
   * otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * Dispose the BuilderNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dispose(): void;

  /**
   * Reuse the BuilderNode based on the provided parameters.
   *
   * @param { RecordData } [param] - Parameters for reusing BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the BuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  recycle(): void;

  /**
   * Notify BuilderNode to update the configuration to trigger a reload of the BuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateConfiguration(): void;

  /**
   * Get if the BuilderNode is disposed.
   *
   * @returns { boolean } - Returns true if the BuilderNode is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isDisposed(): boolean;

  /**
   * Dispatches the input event to the FrameNode in the BuilderNode.
   * postInputEvent dispatches the event from a middle node in the component tree downwards. To ensure the event
   * is dispatched correctly, the event coordinates need to be transformed into the coordinate system of the
   * parent component.
   *
   * Notes:
   * The input coordinate values need to be converted to pixels (px). Left mouse click events will be converted to
   * touch events. When forwarding, note that if touch events and mouse events are bound to outer layers, it may
   * cause coordinate offset. When injecting axis events, since axis events lack rotation axis information,
   * injected events cannot trigger rotate gestures Forwarded events will undergo touch testing in the subtree of
   * the target component where they are dispatched and trigger corresponding gestures. Original events will also
   * trigger gestures in the current component's component tree. The competition outcome between these two types
   * of gestures is not guaranteed. For developer-constructed events, required fields must be assigned values,
   * such as the touches field for touch events and the scrollStep field for axis events. Also, ensure event
   * completeness - for example, both DOWN and UP fields in TouchType for touch events must be present to prevent
   * undefined behavior. Webview has already handled coordinate system transformations, so events can be dispatched
   * directly. The postInputEvent interface requires providing gesture coordinates relative to the window
   * coordinates within the input event peer. It is not recommended to forward the same event multiple times.
   * The postInputEvent parameter does not support UIExtensionComponent.
   * @param { InputEventType } event - The event which will be sent.
   * @returns { boolean } - Returns true if the event has been successfully posted, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * Dispatch event to targetNode with competition strategy.
   *
   * @param { InputEventType  } event - The event which will be sent to the targetNode.
   * @param { CompetitionStrategy  } competitionStrategy - The competition strategy.
   * @returns { boolean } - Returns true if the eventhas been successfully posted to the targetNode,
   *    false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * Set if the BuilderNode inherits the freezing policy of the parent CustomComponent, ComponentContent,
   * or BuilderNode.
   *
   * @param { boolean } enabled - If the BuilderNode inherits the freezing policy of the parent CustomComponent,
   *     ComponentContent, or BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  inheritFreezeOptions(enabled: boolean): void;
}

/**
 * Defines the event type used for posting.
 *
 * @typedef { TouchEvent | MouseEvent | AxisEvent } InputEventType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type InputEventType = TouchEvent | MouseEvent | AxisEvent;

/**
 * Defines ReactiveBuilderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare class ReactiveBuilderNode {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ReactiveBuilderNode
   * @param { RenderOptions } [options] - Render options of the ReactiveBuilderNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);
  /**
   * Build the ReactiveBuilderNode with the builder.
   *
   * @param { CustomBuilder } builder - Defined the builder will be called to build the node.
   * @param { BuildOptions } [options] - Defined the options will be used when build.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  build(builder: CustomBuilder, options?: BuildOptions): void;
  /**
   * Get the FrameNode in ReactiveBuilderNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the ReactiveBuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * Dispatch the touchEvent to the FrameNode in the current ReactiveBuilderNode.
   * postTouchEvent dispatches the event from a middle node in the component tree downwards. To ensure the event is
   * dispatched correctly, it needs to be transformed into the coordinate system of the parent component.
   * <p><strong>Note:</strong>
   * <br>The coordinates you pass in need to be converted to pixel values (px). If the ReactiveBuilderNode has any
   * <br>affine transformations applied to it, they must be taken into account and combined with the touch event
   * <br>coordinates. In Webview, coordinate system transformations are already handled internally, so you can
   * <br>directly dispatch the touch event without additional adjustments.
   * <br>The postTouchEvent API can be called only once for the same timestamp.
   * <br>UIExtensionComponent is not supported.
   * </p>
   *
   * @param { TouchEvent } event - The touchEvent which will be sent.
   * @returns { boolean } - Returns true if the TouchEvent has been successfully posted,
   *     false otherwise.
   *     If the event does not hit the expected component, ensure the following:
   *     1. The coordinate system has been correctly transformed
   *     2. The component is in an interactive state.
   *     3. The event has been bound to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * Dispose the ReactiveBuilderNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  dispose(): void;

  /**
   * Reuse the ReactiveBuilderNode based on the provided parameters.
   *
   * @param { RecordData } [param] - Parameters for reusing ReactiveBuilderNode. These parameters will be directly
   *     applied to the reuse of all top-level custom components in the ReactiveBuilderNode. They should include
   *     the content required for the constructor parameters of each custom component; otherwise, undefined
   *     behavior may occur. Calling this method will synchronously trigger the aboutToReuse lifecycle callback of
   *     the internal custom components, with these parameters passed as the callback's input. The default value
   *     is undefined, in which case the custom components in the ReactiveBuilderNode will directly use the data
   *     source from the construction phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the ReactiveBuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  recycle(): void;

  /**
   * Notify ReactiveBuilderNode to update the configuration to trigger a reload of the ReactiveBuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  updateConfiguration(): void;

  /**
   * Flushes the current state changes to update the ReactiveBuilderNode immediately.
   * This forces a synchronous update of the ReactiveBuilderNode with the latest state values.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  flushState(): void;

  /**
   * Get if the ReactiveBuilderNode is disposed.
   *
   * @returns { boolean } - Returns true if the ReactiveBuilderNode is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  isDisposed(): boolean;

  /**
   * Dispatch the input event to the FrameNode in the current ReactiveBuilderNode.
   * postInputEvent dispatches the event from a middle node in the component tree downwards. To ensure the event
   * is dispatched correctly, the event coordinates needs to be transformed into the coordinate system of the
   * parent component.
   *
   * Note:
   * The input coordinate values need to be converted to pixels (px). Left mouse click events will be converted to
   * touch events. When forwarding, note that if touch events and mouse events are bound to outer layers, it may
   * cause coordinate offset. When injecting axis events, since axis events lack rotation axis information,
   * injected events cannot trigger rotate gestures Forwarded events will undergo touch testing in the subtree of
   * the target component where they are dispatched and trigger corresponding gestures. Original events will also
   * trigger gestures in the current component's component tree. The competition outcome between these two types
   * of gestures is not guaranteed. For developer-constructed events, required fields must be assigned values,
   * such as the touches field for touch events and the scrollStep field for axis events. Also, ensure event
   * completeness - for example, both DOWN and UP fields in TouchType for touch events must be present to prevent
   * undefined behavior. Webview has already handled coordinate system transformations, so events be dispatched
   * directly. The postInputEvent interface requires providing gesture coordinats relative to the window
   * coordinates within the input event peer. It is not recommended to forward the same event multipie times.
   * The postInputEvent parameter does not support UIExtensionComponent.
   *
   * @param { InputEventType } event - The event which will be sent.
   * @returns { boolean } - Returns true if the TouchEvent has been successfully posted, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  postInputEvent(event: InputEventType): boolean;
}
