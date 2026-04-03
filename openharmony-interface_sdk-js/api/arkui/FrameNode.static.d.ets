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

import { RenderNode } from 'arkui.RenderNode';
import { Size, NodePosition, NodeEdges, LengthMetrics, SizeT } from 'arkui.Graphics';
import { DrawContext } from 'arkui.Graphics';
import { ComponentContent, ReactiveComponentContent } from 'arkui.ComponentContent';
import { BusinessError } from '@ohos.base';
import { UIContext } from '@ohos.arkui.UIContext';
import { UICommonEvent, UIGestureEvent, CommonAttribute, CustomProperty } from '@ohos.arkui.component';
import { SwiperAttribute, SwiperController } from '@ohos.arkui.component';
import { ScrollAttribute, Scroller, UIScrollEvent } from '@ohos.arkui.component';
import { ListAttribute, ListOptions, UIListEvent } from '@ohos.arkui.component';
import { ListItemAttribute, ListItemOptions } from '@ohos.arkui.component';
import { ListItemGroupAttribute, ListItemGroupOptions } from '@ohos.arkui.component';
import { WaterFlowAttribute, WaterFlowOptions, UIWaterFlowEvent } from '@ohos.arkui.component';
import { FlowItemAttribute } from '@ohos.arkui.component';
import { GridAttribute, GridLayoutOptions, UIGridEvent } from '@ohos.arkui.component';
import { GridItemAttribute, GridItemOptions } from '@ohos.arkui.component';
import { Resource } from 'global.resource';
import { TextAttribute, TextOptions, TextController } from '@ohos.arkui.component';
import { TextInputAttribute, TextInputOptions, TextInputController } from '@ohos.arkui.component';
import { TextAreaAttribute, TextAreaOptions, TextAreaController } from '@ohos.arkui.component';
import { SearchAttribute, SearchOptions } from '@ohos.arkui.component';
import { SymbolGlyphAttribute } from '@ohos.arkui.component';
import { MarqueeAttribute, MarqueeOptions } from '@ohos.arkui.component';
import { ColumnAttribute, ColumnOptions, ColumnOptionsV2 } from '@ohos.arkui.component';
import { RowAttribute, RowOptions, RowOptionsV2 } from '@ohos.arkui.component';
import { StackAttribute, StackOptions } from '@ohos.arkui.component';
import { FlexAttribute, FlexOptions } from '@ohos.arkui.component';
import { RelativeContainerAttribute } from '@ohos.arkui.component';
import { DividerAttribute } from '@ohos.arkui.component';
import { BlankAttribute } from '@ohos.arkui.component';
import { GridRowAttribute, GridRowOptions } from '@ohos.arkui.component';
import { GridColAttribute, GridColOptions } from '@ohos.arkui.component';
import { ProgressAttribute, ProgressOptions } from '@ohos.arkui.component';
import { QRCodeAttribute } from '@ohos.arkui.component';
import { BadgeAttribute, BadgeParamWithNumber, BadgeParamWithString } from '@ohos.arkui.component';
import { TextClockAttribute, TextClockOptions } from '@ohos.arkui.component';
import { TextTimerAttribute, TextTimerOptions } from '@ohos.arkui.component';
import { ImageAttribute, ImageContent } from '@ohos.arkui.component';
import { DrawableDescriptor } from '../@ohos.arkui.drawableDescriptor';
import { ButtonAttribute, ButtonOptions } from '@ohos.arkui.component';
import { CheckboxOptions, CheckboxAttribute } from '@ohos.arkui.component';
import { RadioOptions, RadioAttribute } from '@ohos.arkui.component';
import { SliderAttribute, SliderOptions } from '@ohos.arkui.component';
import { ToggleAttribute, ToggleOptions } from '@ohos.arkui.component';
import { RatingAttribute, RatingOptions } from '@ohos.arkui.component';
import { SelectAttribute, SelectOption } from '@ohos.arkui.component';
import { XComponentAttribute, XComponentController, XComponentOptions, XComponentParameters, NativeXComponentParameters } from '@ohos.arkui.component';
import image from '../@ohos.multimedia.image';
import { ImageAIOptions } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { LoadingProgressAttribute } from '@ohos.arkui.component';
import { CheckboxGroupOptions, CheckboxGroupAttribute } from '@ohos.arkui.component';
import { AnimateParam } from '@ohos.arkui.component';
import { AnimationPropertyType, EventQueryType } from './component/enums';

/**
 * Layout constraint, include the max size, the min size and the reference size for children to calculate percent.
 *
 * @interface LayoutConstraint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LayoutConstraint {
  /**
   * MaxSize
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxSize: Size;

  /**
   * MinSize
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minSize: Size;

  /**
   * PercentReference, if the size unit of the child nodes is percentage, then they use PercentReference to calculate
   * the px size.
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  percentReference: Size;
}

/**
 * Defines the cross-language options.
 *
 * @interface CrossLanguageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CrossLanguageOptions {
  /**
   * Defines if it enables setting attributes cross-language. Default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  attributeSetting?: boolean;
}

/**
 * The interaction event binding status information on the component.
 *
 * @interface InteractionEventBindingInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
declare interface InteractionEventBindingInfo {
  /**
   * Whether to bind events declaratively.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  baseEventRegistered: boolean;

  /**
   * Whether to bind events in an imperative FrameNode mode.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  nodeEventRegistered: boolean;

  /**
   * Whether to bind the event as an imperative NativeNode.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  nativeEventRegistered: boolean;

  /**
   * Whether the component binds built-in event.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  builtInEventRegistered: boolean;
}

/**
 * Enum for the expand mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export enum ExpandMode {
  /**
   * Do not expand the children of node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NOT_EXPAND = 0,

  /**
   * Expand the children of node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  EXPAND = 1,

  /**
   * Expand the children of node if needed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LAZY_EXPAND = 2
}

/**
 * Enum for the UI state of one component, which is used for handling of state style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum UIState {
  /**
   * The normal state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  NORMAL = 0,

  /**
   * The pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  PRESSED = 1 << 0,

  /**
   * The focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  FOCUSED = 1 << 1,

  /**
   * The disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DISABLED = 1 << 2,

  /**
   * The selected state, this state is only supported by some specific kind of component,
   * they are Checkbox, Radio, Toggle and List/Grid/MenuItem, please check the StateStyles docs for details.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SELECTED = 1 << 3
}

/**
 * UI state change handling function, it returns the current UI states, the value is the result
 * of all current state enumeration values or calculations, and you can determine the state
 * by performing the & operation as follows。
 * if (currentStates & UIState.PRESSED == UIState.PRESSED)
 * But, please be awared, for the normal state check, the equal should be used directly.
 * if (currentStates == UIState.NORMAL)
 *
 * @typedef { function } UIStatesChangeHandler
 * @param { FrameNode } node - Current node which is triggering the state change.
 * @param { int } currentUIStates - Current UI states when the handler is triggered.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: int) => void;

/**
 * FrameNode options for configuring node creation behavior.
 *
 * @interface FrameNodeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 staticonly
 */
export declare interface FrameNodeOptions {
  /**
   * Whether to support multi-threaded operations for the FrameNode.
   * When set to true, the node can be safely used in multi-threaded scenarios.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 staticonly
   */
  supportMultiThread?: boolean;
}

/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class FrameNode {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the FrameNode
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(uiContext: UIContext, options?: FrameNodeOptions);

  /**
   * Get the RenderNode in FrameNode.
   *
   * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getRenderNode(): RenderNode | null;

  /**
   * Return a flag to indicate whether the current FrameNode can be modified.
   * Indicates whether the FrameNode supports appendChild, insertChildAfter, removeChild, clearChildren.
   *
   * @returns { boolean } - Returns true if the FrameNode can be modified, otherwise return false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isModifiable(): boolean;

  /**
   * Add child to the end of the FrameNode's children.
   * If this FrameNode is not modifiable, an exception is thrown.
   * When appendChild is called, typeNode validates the type or number of child nodes.
   * If the validation fails, an exception is thrown. For specific limitations, see typeNode.
   *
   * @param { FrameNode } node - The node will be added.
   *     The child node cannot be one created declaratively, which is not modifiable.
   *     Only declarative nodes obtained from a BuilderNode can be used as child nodes.
   *     If the child node does not meet the specifications, an exception is thrown.
   *     The FrameNode cannot have a parent node. Otherwise, an exception is thrown.
   *     The node cannot be adopted. Otherwise, an exception is thrown.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  appendChild(node: FrameNode): void;

  /**
   * Add child to the current FrameNode.
   * If this FrameNode is not modifiable, an exception is thrown.
   *
   * @param { FrameNode } child - The node will be added.
   *     The child node cannot be a declarative node, that is, a FrameNode that cannot be modified.
   *     Only declarative nodes obtained from a BuilderNode can be used as child nodes.
   *     If the child node does not meet the specifications, an exception is thrown.
   *     The child node cannot have a parent node. Otherwise, an exception is thrown.
   *     The child node cannot be adopted. Otherwise, an exception is thrown.
   * @param { FrameNode | null } sibling - The new node is added after this node. When sibling is null, insert node as
   *     the first children of the node.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;

  /**
   * Remove child from the current FrameNode.
   *
   * @param { FrameNode } node - The node will be removed.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  removeChild(node: FrameNode): void;

  /**
   * Clear children of the current FrameNode.
   *
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clearChildren(): void;

  /**
   * Get a child of the current FrameNode by index.
   *
   * @param { int } index - The index of the desired node in the children of FrameNode.
   * @param { ExpandMode | undefined } [expandMode] - The expand mode. Default value is ExpandMode.EXPAND.
   * @returns { FrameNode | null } - Returns a FrameNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getChild(index: int, expandMode?: ExpandMode | undefined): FrameNode | null;

  /**
   * Get the index of the current FrameNode's first child node which is on the tree.
   *
   * @returns { int } - Returns the index of the current FrameNode's first child node which is on the tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFirstChildIndexWithoutExpand(): int;

  /**
   * Get the index of the current FrameNode's last child node which is on the tree.
   *
   * @returns { int } - Returns the index of the current FrameNode's last child node which is on the tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getLastChildIndexWithoutExpand(): int;

  /**
   * Get the first child of the current FrameNode.
   *
   * @returns {  FrameNode | null } - Returns a FrameNode, which is first child of the current FrameNode.
   * If current FrameNode does not have child node, returns null.
   * If current FrameNode does not have child node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFirstChild(): FrameNode | null;

  /**
   * Get the next sibling node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have next sibling node,
   * returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getNextSibling(): FrameNode | null;

  /**
   * Get the previous sibling node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have previous sibling node,
   * returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * Get the parent node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have parent node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getParent(): FrameNode | null;

  /**
   * Get the children count of the current FrameNode.
   *
   * @returns { int } - Returns the number of the children of the current FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getChildrenCount(): int;

  /**
   * Move node to the target Framenode as child.
   * If this FrameNode is not modifiable, an exception is thrown.
   * When targetParent is a typeNode, the API validates the type or number of child nodes.
   * If the validation fails, an exception is thrown. For specific limitations, see typeNode.
   * If this FrameNode is adopted, an exception is thrown.
   * 
   * <p><strong>NOTE</strong>:
   * <br>Currently, only the following types of TypedFrameNode are supported for the movement
   * operations: Stack, XComponent.
   * </p>
   *
   * @param { FrameNode } targetParent - The target parent node.
   *     The target parent node must not be a declaratively created node, that is, a FrameNode that is not modifiable.
   *     If it does not meet the specifications, an exception is thrown.
   * @param { int } [index] - The index which the node is moved to. If the value is a negative number or invalid,
   *     the node is moved to the end of the target parent node. Moves to the end of the target parent node by default.
   *     If the target FrameNode has n nodes, the value range for index is 0 to n-1.
   *     Default value: -1
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100027 - The current node has been adopted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  moveTo(targetParent: FrameNode, index?: int): void;

  /**
   * Dispose the FrameNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dispose(): void;

  /**
   * Get the position of the node relative to window.
   *
   * @returns { NodePosition } - Returns position of the node relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToWindow(): NodePosition;

  /**
   * Get if the FrameNode is disposed.
   *
   * @returns { boolean } - Returns true if the FrameNode is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isDisposed(): boolean;

  /**
   * Get the position of the node relative to its parent.
   *
   * @returns { NodePosition } - Returns position of the node relative to its parent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToParent(): NodePosition;

  /**
   * Get the size of the FrameNode after measure, with unit PX.
   *
   * @returns { Size } - Returns the size of the FrameNode after measure, with unit PX.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMeasuredSize(): Size;

  /**
   * Get the offset to the parent of the FrameNode after layout, with unit PX.
   *
   * @returns { NodePosition } - Returns the offset to the parent of the FrameNode after layout, with unit PX.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getLayoutPosition(): NodePosition;

  /**
   * Get the user config border width of the FrameNode.
   *
   * @returns { NodeEdges<LengthMetrics> } - Returns the user config border width of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUserConfigBorderWidth(): NodeEdges<LengthMetrics>;

  /**
   * Get the user config padding of the FrameNode.
   *
   * @returns { NodeEdges<LengthMetrics> } - Returns the user config padding of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUserConfigPadding(): NodeEdges<LengthMetrics>;

  /**
   * Get the user config margin of the FrameNode.
   *
   * @returns { NodeEdges<LengthMetrics> } - Returns the user config margin of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUserConfigMargin(): NodeEdges<LengthMetrics>;

  /**
   * Get the user config size of the FrameNode.
   *
   * @returns { SizeT<LengthMetrics> } - Returns the user config size of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUserConfigSize(): SizeT<LengthMetrics>;

  /**
   * Get the id of the FrameNode.
   *
   * @returns { string } - Returns the id of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getId(): string;

  /**
   * Get the unique id of the FrameNode.
   *
   * @returns { int } - Returns the unique id of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUniqueId(): int;

  /**
   * Get the type of the FrameNode. The type is the name of component, for example, the nodeType of Button is "Button",
   * and the nodeType of custom  component is "__Common__".
   *
   * @returns { string } - Returns the type of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getNodeType(): string;

  /**
   * Get the opacity of the FrameNode.
   *
   * @returns { double } - Returns the opacity of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getOpacity(): double;

  /**
   * Get if the FrameNode is visible.
   *
   * @returns { boolean } - Returns if the FrameNode is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isVisible(): boolean;

  /**
   * Get if the FrameNode is clip to frame.
   *
   * @returns { boolean } - Returns if the FrameNode is clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isClipToFrame(): boolean;

  /**
   * Get if the FrameNode is attached to the root node tree.
   *
   * @returns { boolean } - Returns if the FrameNode is attached to the root node tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isAttached(): boolean;

  /**
   * Get the inspector information of the FrameNode.
   *
   * @returns { Object } - Returns the inspector information of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getInspectorInfo(): Object;

  /**
   * Get the custom property of the component corresponding to this FrameNode.
   *
   * @param { string } name - the name of the custom property.
   * @returns { CustomProperty } - Returns the value of the custom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getCustomProperty(name: string): CustomProperty;

  /**
   * Set commonEvent response to the current FrameNode.
   *
   * @returns { UICommonEvent } - Returns a Object inside the FrameNode, which is used to set callbacks about different
   * events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get commonEvent(): UICommonEvent;

  /**
   * Get gestureEvent of the current FrameNode.
   *
   * @returns { UIGestureEvent } - Returns a Object inside the FrameNode, which is used to set callbacks about different
   * gesture events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get gestureEvent(): UIGestureEvent;

  /**
   * Get the CommonAttribute of the current FrameNode.
   *
   * @returns { CommonAttribute } - Returns the CommonAttribute which is used to modify the common attributes of the
   * FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  get commonAttribute(): CommonAttribute;

  /**
   * Draw Method. Executed when the current FrameNode is rendering its content.
   *
   * @param { DrawContext } context - The DrawContext will be used when executed draw method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDraw(context: DrawContext): void

  /**
   * Method to measure the FrameNode and its content to determine the measured size. Use this method to override the
   * default measure method when measuring the FrameNode.
   *
   * @param { LayoutConstraint } constraint - The layout constraint of the node, will be used when executed measure
   * method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onMeasure(constraint: LayoutConstraint): void;

  /**
   * Method to assign a position to the FrameNode and each of its children. Use this method to override the
   * default layout method.
   *
   * @param { NodePosition } position - The position of the node, will be used when executed layout method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onLayout(position: NodePosition): void;

  /**
   * Set the size of the FrameNode after measure, with unit PX.
   *
   * @param { Size } size - The size of the FrameNode after measure.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setMeasuredSize(size: Size): void;

  /**
   * Set the position to the parent of the FrameNode after layout, with unit PX.
   *
   * @param { NodePosition } position - The position to the parent of the FrameNode after layout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setLayoutPosition(position: NodePosition): void;

  /**
   * This is called to find out how big the FrameNode should be. The parent node supplies constraint information. The
   * actual measurement work of the FrameNode is performed in onMeasure or the default measure method.
   *
   * @param { LayoutConstraint } constraint - The layout constraint of the node, supplied by the parent node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  measure(constraint: LayoutConstraint): void;

  /**
   * This is called to assign position to the FrameNode and all of its descendants. The position is used to init
   * the position of the frameNode, and the actual layout work of FrameNode is performed in onLayout or the default
   * layout method.
   *
   * @param { NodePosition } position - The position of the node, will be used when executed the layout method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  layout(position: NodePosition): void;

  /**
   * Mark the frame node as need layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setNeedsLayout(): void;

  /**
   * Invalidate the RenderNode in the FrameNode, which will cause a re-render of the RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  invalidate(): void;

  /**
   * Get the position of the node relative to screen.
   *
   * @returns { NodePosition } - Returns position of the node relative to screen.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToScreen(): NodePosition;

  /**
   * Get the position of the node relative to unified display, in vp.
   *
   * @returns { NodePosition } - Returns position of the node relative to unified display, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getGlobalPositionOnDisplay(): NodePosition;

  /**
   * Get the position of the node relative to window with transform.
   *
   * @returns { NodePosition } - Returns position of the node relative to window with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToWindowWithTransform(): NodePosition;

  /**
   * Get the position of the node relative to its parent with transform.
   *
   * @returns { NodePosition } - Returns position of the node relative to its parent with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToParentWithTransform(): NodePosition;

  /**
   * Get the position of the node relative to screen with transform.
   *
   * @returns { NodePosition } - Returns position of the node relative to screen with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPositionToScreenWithTransform(): NodePosition;

  /**
   * Detach from parent and dispose all child recursively.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  disposeTree(): void;

  /**
   * Sets the polymorphic style states supported by the component. To improve efficiency, you need to pass the states
   * of interest and their corresponding handler functions. When the state changes, the handler function will be
   * executed. You can update the UI style based on the current state in the callback.
   * For certain types of control nodes, the system has default style handling for some states (e.g., the button
   * component has default style changes for the PRESSED state). When using this method to customize state handling
   * for such components, the system's default style changes will be applied first, followed by the custom styles.
   * The final effect is a combination of both. You can set `excludeInner` to `true` to disable the system's default
   * style handling, though this depends on system implementation.
   * When calling this method, the provided `handler` function will be executed immediately. You do not need to
   * explicitly register a handler for the NORMAL state. If you register handlers for non-NORMAL states, the system
   * will automatically call the handler when the state reverts to NORMAL, allowing you to restore the UI style.
   *
   * @param { int } uiStates - The target UI states the node needs to handle. Multiple states can be combined
   *     using the OR operation, e.g., `targetUIStates = UIState.PRESSED | UIState.FOCUSED`.
   * @param { UIStatesChangeHandler } statesChangeHandler - The handler function for UI state changes.
   * @param { boolean } [excludeInner=false] - A flag to disable the system's default style handling for states.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  addSupportedUIStates(uiStates: int, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void;

  /**
   * Removes the registered state handlers. When all states registered via `addSupportedUIStates` are removed, the
   * corresponding `statesChangeHandler` will no longer be executed.
   *
   * @param { int } uiStates - The target UI states to remove handlers from.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  removeSupportedUIStates(uiStates: int): void;

  /**
   * Mount ComponentContent to FrameNode.
   * 
   * @param { ComponentContent<T> } content - Newly added ComponentContent.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Mount ComponentContent and ReactiveComponentContent to FrameNode.
   * 
   * @param { ComponentContent<T> | ReactiveComponentContent } content - Newly added ComponentContent or
   *     ReactiveComponentContent.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent): void;

  /**
   * Set the cross-language options of the target FrameNode.
   *
   * @param { CrossLanguageOptions } value - The cross-language options.
   * @throws { BusinessError } 100022 - The FrameNode cannot be set whether to support cross-language common attribute
   *     setting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCrossLanguageOptions(value: CrossLanguageOptions): void;

  /**
   * Get the cross-language options of the target FrameNode.
   *
   * @returns { CrossLanguageOptions } - Returns the cross-language options of the target FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getCrossLanguageOptions(): CrossLanguageOptions;

  /**
   * Recycle current FrameNode From JsFrameNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  recycle(): void;

  /**
   * Reuse current FrameNode From JsFrameNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reuse(): void;

  /**
   * The current node adopts the target child node. The node being adopted must not have an existing parent node.
   * This operation does not actually append it as a child, but only allows it to receive life-cycle
   * callbacks as if it were a child.
   *
   * @param { FrameNode } child - the target node being adopted.
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be disposed."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  adoptChild(child: FrameNode): void;

  /**
   * Remove the target adopted child node.
   *
   * @param { FrameNode } child - the target node being adopted.
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be null."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeAdoptedChild(child: FrameNode): void;

  /**
   * Gets event binding information of the target node.
   *
   * @param { EventQueryType } eventType - The interaction event type to be queried.
   * @returns { InteractionEventBindingInfo | undefined }
   *     - Returns one InteractionEventBindingInfo object indicating the event binding details if any interaction
   *     events binded on current node, returns undefined if no one binded on.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined;

  /**
   * create property animation in FrameNode.
   *
   * @param { AnimationPropertyType } property - enumeration of property that produces the animation.
   * @param { double[] | undefined } startValue - start value of animation.
   *     Undefined means that the last final value is used as the starting value of the animation,
   *     and it is recommended to set undefined if the property already has a value.
   * @param { double[] } endValue - end value of animation.
   * @param { AnimateParam } param - param of animation.
   * @returns { boolean } - whether the createAnimation operation is successful. For example,
   *     if the array lengths of startValue and endValue do not match the data lengths required by type,
   *     creating animation fails.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createAnimation(property: AnimationPropertyType, startValue: double[] | undefined, endValue: double[], param: AnimateParam): boolean;

  /**
   * Request to cancel all animations on specified properties. It blocks synchronously to wait for the cancellation
   * result. If the cancellation is successful, the corresponding properties on the node are restored to the cancelled
   * value.
   *
   * @param { AnimationPropertyType[] } properties - animation property types to cancel.
   * @returns { boolean } - whether the cancel operation is successful. For example,
   *     if ipc fails, canceling the animation fails.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  cancelAnimations(properties: AnimationPropertyType[]): boolean;

  /**
   * get property value from node.
   *
   * @param { AnimationPropertyType } property - animation property type to get value.
   * @returns { double[] } - the property value on the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getNodePropertyValue(property: AnimationPropertyType): double[];

  /**
  * Returns a flag indicating whether the current FrameNode was obtained through dynamic-static conversion,
  * includes conversions in both directions: dynamic-to-static and static-to-dynamic.
  *
  * @returns { boolean } - Returns true if the FrameNode was converted between dynamic and static states,
  * otherwise returns false.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 23 static
  */
  isTransferred(): boolean;

  /**
   * Converts a point's coordinates from the current node's coordinate system
   * to the target node's coordinate system.
   *
   * @param { NodePosition } position - The point's coordinates in the current node's local coordinate system.
   * @param { FrameNode } targetNode - The destination node whose coordinate system will be used
   *     for conversion.
   * @returns { NodePosition } The converted coordinates in the target node's local coordinate system.
   * @throws { BusinessError } 100024 - The current FrameNode and the target FrameNode do not have a common ancestor
   *     node.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'targetNode' is invalid: it cannot be disposed."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  convertPosition(position: NodePosition, targetNode: FrameNode): NodePosition;

  /**
   * Converts a point's coordinates from the current node's coordinate system
   * to the current window's coordinate system.
   *
   * @param { NodePosition } positionByLocal - The point's coordinates in the current node's local coordinate system.
   * @returns { NodePosition } - The converted coordinates in the current window's coordinate system.
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  convertPositionToWindow(positionByLocal: NodePosition): NodePosition;

  /**
   * Converts a point's coordinates from the current window's coordinate system
   * to the current node's coordinate system.
   *
   * @param { NodePosition } positionByWindow - The point's coordinates in the current window's coordinate system.
   * @returns { NodePosition } - The converted coordinates in the current node's local coordinate system.
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  convertPositionFromWindow(positionByWindow: NodePosition): NodePosition;

  /**
   * Get if the FrameNode is in the render state. A FrameNode is considered to be in the render state if its
   * corresponding RenderNode is on the render tree.
   * @returns { boolean } - Returns whether the node is in the render state. True indicates it is in the
   *     render state, while false indicates it is not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isInRenderState(): boolean;

  /**
   * Get if the FrameNode is attached to the root node tree.
   *
   * @returns { boolean } - Returns if the FrameNode is attached to the root node tree.
   * @throws { BusinessError } 100026 - The curent FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isOnMainTree(): boolean;

  /**
   * Triggers node updates in the current frame.
   * 
   * When node attributes are modified after the current frame's build phase,
   * the node updates will be deferred to the next
   * frame. This function forces immediate node updates within the current frame to
   * ensure rendering effects are applied synchronously.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */ 
  invalidateAttributes(): void;
}

/**
 * Used to define the FrameNode type.
 *
 * @extends FrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class TypedFrameNode<T> extends FrameNode {
    /**
     * Get attribute instance of FrameNode to set attributes.
     *
     * @returns { T } - Returns the attribute instance of FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get attribute(): T;
}

/**
 * Provides methods to implement FrameNode.
 *
 * @namespace typeNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @stagemodelonly
 * @noninterop
 */
export declare namespace typeNode {
  /**
   * Define the Column type of FrameNode.
   *
   * @extends TypedFrameNode<ColumnAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ColumnFrameNode extends TypedFrameNode<ColumnAttribute> {  
    /**
     * Initialize Column FrameNode.
     *
     * @param { ColumnOptions | ColumnOptionsV2} [options] - Column options.
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ColumnOptions | ColumnOptionsV2): ColumnAttribute;
  }

  /**
   * Define the FrameNode type for Column.
   *
   * @typedef { ColumnFrameNode } Column
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Column = ColumnFrameNode;

  /**
   * Create a FrameNode of Column type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Column } - Return Column type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Column type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Column } - Return Column type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createColumnNode(context: UIContext, options?: FrameNodeOptions): Column;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ColumnAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getColumnAttribute(node: FrameNode): ColumnAttribute | undefined;

  /**
   * Define the Row type of FrameNode.
   *
   * @extends TypedFrameNode<RowAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RowFrameNode extends TypedFrameNode<RowAttribute> {  
    /**
     * Initialize Row FrameNode.
     *
     * @param { RowOptions | RowOptionsV2} [options] - Row options.
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: RowOptions | RowOptionsV2): RowAttribute;
  }

  /**
   * Define the FrameNode type for Row.
   *
   * @typedef { RowFrameNode } Row
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Row = RowFrameNode;

  /**
   * Create a FrameNode of Row type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Row } - Return Row type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Row type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Row } - Return Row type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createRowNode(context: UIContext, options?: FrameNodeOptions): Row;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { RowAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getRowAttribute(node: FrameNode): RowAttribute | undefined;

  /**
   * Define the Stack type of FrameNode.
   *
   * @extends TypedFrameNode<StackAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class StackFrameNode extends TypedFrameNode<StackAttribute> {  
    /**
     * Initialize Stack FrameNode.
     *
     * @param { StackOptions } [options] - Stack options.
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: StackOptions): StackAttribute;
  }

  /**
   * Define the FrameNode type for Stack.
   *
   * @typedef { StackFrameNode } Stack
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Stack = StackFrameNode;

  /**
   * Create a FrameNode of Stack type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Stack } - Return Stack type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Stack type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Stack } - Return Stack type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createStackNode(context: UIContext, options?: FrameNodeOptions): Stack;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { StackAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getStackAttribute(node: FrameNode): StackAttribute | undefined;

  /**
   * Define the GridRow type of FrameNode.
   *
   * @extends TypedFrameNode<GridRowAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridRowFrameNode extends TypedFrameNode<GridRowAttribute> {  
    /**
     * Initialize GridRow FrameNode.
     *
     * @param { GridRowOptions } [options] - GridRow options.
     * @returns { GridRowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridRowOptions): GridRowAttribute;
  }

  /**
   * Define the FrameNode type for GridRow.
   *
   * @typedef { GridRowFrameNode } GridRow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type GridRow = GridRowFrameNode;

  /**
   * Create a FrameNode of GridRow type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { GridRow } - Return GridRow type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createGridRowNode(context: UIContext): GridRow;

  /**
   * Define the GridCol type of FrameNode.
   *
   * @extends TypedFrameNode<GridColAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridColFrameNode extends TypedFrameNode<GridColAttribute> {  
    /**
     * Initialize GridCol FrameNode.
     *
     * @param { GridColOptions } [options] - GridCol options.
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridColOptions): GridColAttribute;
  }

  /**
   * Define the FrameNode type for GridCol.
   *
   * @typedef { GridColFrameNode } GridCol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type GridCol = GridColFrameNode;

  /**
   * Create a FrameNode of GridCol type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { GridCol } - Return GridCol type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createGridColNode(context: UIContext): GridCol;

  /**
   * Define the Flex type of FrameNode.
   *
   * @extends TypedFrameNode<FlexAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class FlexFrameNode extends TypedFrameNode<FlexAttribute> {  
    /**
     * Initialize Flex FrameNode.
     *
     * @param { FlexOptions } [value] - Flex options.
     * @returns { FlexAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: FlexOptions): FlexAttribute;
  }

  /**
   * Define the FrameNode type for Flex.
   *
   * @typedef { FlexFrameNode } Flex
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Flex = FlexFrameNode;

  /**
   * Create a FrameNode of Flex type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Flex } - Return Flex type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Flex type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Flex } - Return Flex type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createFlexNode(context: UIContext, options?: FrameNodeOptions): Flex;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { FlexAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getFlexAttribute(node: FrameNode): FlexAttribute | undefined;

  /**
   * Define the RelativeContainer type of FrameNode.
   *
   * @extends TypedFrameNode<RelativeContainerAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RelativeContainerFrameNode extends TypedFrameNode<RelativeContainerAttribute> {  
    /**
     * Initialize RelativeContainer FrameNode.
     *
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): RelativeContainerAttribute;
  }

  /**
   * Define the FrameNode type for RelativeContainer.
   *
   * @typedef { RelativeContainerFrameNode } RelativeContainer
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type RelativeContainer = RelativeContainerFrameNode;

  /**
   * Create a FrameNode of RelativeContainer type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { RelativeContainer } - Return RelativeContainer type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of RelativeContainer type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { RelativeContainer } - Return RelativeContainer type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createRelativeContainerNode(context: UIContext, options?: FrameNodeOptions): RelativeContainer;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { RelativeContainerAttribute | undefined } - Return the attribute instance of FrameNode, and return
   *     undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getRelativeContainerAttribute(node: FrameNode): RelativeContainerAttribute | undefined;

  /**
   * Define the Divider type of FrameNode.
   *
   * @extends TypedFrameNode<DividerAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class DividerFrameNode extends TypedFrameNode<DividerAttribute> {  
    /**
     * Initialize Divider FrameNode.
     *
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): DividerAttribute;
  }

  /**
   * Define the FrameNode type for Divider.
   *
   * @typedef { DividerFrameNode } Divider
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Divider = DividerFrameNode;

  /**
   * Create a FrameNode of Divider type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Divider } - Return Divider type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createDividerNode(context: UIContext): Divider;

  /**
   * Define the LoadingProgress type of FrameNode.
   *
   * @extends TypedFrameNode<LoadingProgressAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class LoadingProgressFrameNode extends TypedFrameNode<LoadingProgressAttribute> {  
    /**
     * Initialize LoadingProgress FrameNode.
     *
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): LoadingProgressAttribute;
  }

  /**
   * Define the FrameNode type for LoadingProgress.
   *
   * @typedef { LoadingProgressFrameNode } LoadingProgress
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type LoadingProgress = LoadingProgressFrameNode;

  /**
   * Create a FrameNode of LoadingProgress type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { LoadingProgress } - Return LoadingProgress type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of LoadingProgress type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { LoadingProgress } - Return LoadingProgress type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createLoadingProgressNode(context: UIContext, options?: FrameNodeOptions): LoadingProgress;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { LoadingProgressAttribute | undefined } - Return the attribute instance of FrameNode, 
   *     and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getLoadingProgressAttribute(node: FrameNode): LoadingProgressAttribute | undefined;

  /**
   * Define the Blank type of FrameNode.
   *
   * @extends TypedFrameNode<BlankAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class BlankFrameNode extends TypedFrameNode<BlankAttribute> {  
    /**
     * Initialize Blank FrameNode.
     *
     * @param { double | string} [min] - Blank options.
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(min?: double | string): BlankAttribute;
  }

  /**
   * Define the FrameNode type for Blank.
   *
   * @typedef { BlankFrameNode } Blank
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Blank = BlankFrameNode;

  /**
   * Create a FrameNode of Blank type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Blank } - Return Blank type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createBlankNode(context: UIContext): Blank;

  /**
   * Define the Image type of FrameNode.
   *
   * @extends TypedFrameNode<ImageAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ImageFrameNode extends TypedFrameNode<ImageAttribute> {  
    /**
     * Initialize Image FrameNode.
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;
    
    /**
     * Initialize Image FrameNode.
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor | ImageContent } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor | ImageContent): ImageAttribute;
    
    /**
     * Initialize Image FrameNode.
     *
     * @param { image.PixelMap | ResourceStr | DrawableDescriptor } src
     * @param { ImageAIOptions } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(src: image.PixelMap | ResourceStr | DrawableDescriptor, value: ImageAIOptions): ImageAttribute;
  }

  /**
   * Define the FrameNode type for Image.
   *
   * @typedef { ImageFrameNode } Image
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Image = ImageFrameNode;

  /**
   * Create a FrameNode of Image type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Image } - Return Image type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Image type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Image } - Return Image type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createImageNode(context: UIContext, options?: FrameNodeOptions): Image;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ImageAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */ 
  export function getImageAttribute(node: FrameNode): ImageAttribute | undefined;

  /**
   * Define the List type of FrameNode.
   *
   * @extends TypedFrameNode<ListAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListFrameNode extends TypedFrameNode<ListAttribute> {  
    /**
     * Initialize FrameNode.
     *
     * @param { ListOptions } [options] - list options
     * @returns { ListAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListOptions): ListAttribute;
  }

  /**
   * Define the FrameNode type for List.
   *
   * @typedef { ListFrameNode } List
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type List = ListFrameNode;

  /**
   * Create a FrameNode of List type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { List } - Return List type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of List type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { List } - Return List type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createListNode(context: UIContext, options?: FrameNodeOptions): List;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ListAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getListAttribute(node: FrameNode): ListAttribute | undefined;

  /**
   * Get the event instance of List node.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { UIListEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getListEvent(node: FrameNode): UIListEvent | undefined;

  /**
   * Bind the controller of FrameNode.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { Scroller } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API 24 and will not be threw
   *    above API 25. [since 24 - 25]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindListController(node: FrameNode, controller: Scroller): void;

  /**
   * Define the ListItem type of FrameNode.
   *
   * @extends TypedFrameNode<ListItemAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListItemFrameNode extends TypedFrameNode<ListItemAttribute> {
    /**
     * Initialize ListItem FrameNode.
     *
     * @param { ListItemOptions } [options] - list item options.
     * @returns { ListItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListItemOptions): ListItemAttribute;
  }

  /**
   * Define the FrameNode type for ListItem.
   *
   * @typedef { ListItemFrameNode } ListItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type ListItem = ListItemFrameNode;

  /**
   * Create a FrameNode of ListItem type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { ListItem } - Return ListItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of ListItem type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { ListItem } - Return ListItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createListItemNode(context: UIContext, options?: FrameNodeOptions): ListItem;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ListItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getListItemAttribute(node: FrameNode): ListItemAttribute | undefined;

  /**
   * Define the ListItemGroup type of FrameNode.
   *
   * @extends TypedFrameNode<ListItemGroupAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ListItemGroupFrameNode extends TypedFrameNode<ListItemGroupAttribute> {
    /**
     * Initialize ListItemGroup FrameNode.
     *
     * @param { ListItemGroupOptions } [options] - list item group options.
     * @returns { ListItemGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: ListItemGroupOptions): ListItemGroupAttribute;
  }

  /**
   * Define the FrameNode type for ListItemGroup.
   *
   * @typedef { ListItemGroupFrameNode } ListItemGroup
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type ListItemGroup = ListItemGroupFrameNode;

  /**
   * Create a FrameNode of ListItemGroup type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { ListItemGroup } - Return ListItemGroup type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of ListItemGroup type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { ListItemGroup } - Return ListItemGroup type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createListItemGroupNode(context: UIContext, options?: FrameNodeOptions): ListItemGroup;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ListItemGroupAttribute | undefined } - Return the attribute instance of FrameNode,
   *      and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getListItemGroupAttribute(node: FrameNode): ListItemGroupAttribute | undefined;

  /**
   * Define the Progress type of FrameNode.
   *
   * @extends TypedFrameNode<ProgressAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ProgressFrameNode extends TypedFrameNode<ProgressAttribute> {  
    /**
     * Initialize Progress FrameNode.
     *
     * @param { ProgressOptions } value
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ProgressOptions): ProgressAttribute;
  }

  /**
   * Define the FrameNode type for Progress.
   *
   * @typedef { ProgressFrameNode } Progress
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Progress = ProgressFrameNode;

  /**
   * Create a FrameNode of Progress type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Progress } - Return Progress type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Progress type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Progress } - Return Progress type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createProgressNode(context: UIContext, options?: FrameNodeOptions): Progress;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ProgressAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getProgressAttribute(node: FrameNode): ProgressAttribute | undefined;

  /**
   * Define the Scroll type of FrameNode.
   *
   * @extends TypedFrameNode<ScrollAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ScrollFrameNode extends TypedFrameNode<ScrollAttribute> {
    /**
     * Initialize Scroll FrameNode.
     *
     * @param { Scroller } [scroller] - The controller for scroll.
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(scroller?: Scroller): ScrollAttribute;
  }

  /**
   * Define the FrameNode type for Scroll.
   *
   * @typedef { ScrollFrameNode } Scroll
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Scroll = ScrollFrameNode;

  /**
   * Create a FrameNode of Scroll type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Scroll } - Return Scroll type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Scroll type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Scroll } - Return Scroll type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createScrollNode(context: UIContext, options?: FrameNodeOptions): Scroll;

  /**
   * Bind the controller of FrameNode.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { Scroller } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API 24 and will not be threw
   *    above API 25. [since 24 - 25]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function bindScrollController(node: FrameNode, controller: Scroller): void;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ScrollAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getScrollAttribute(node: FrameNode): ScrollAttribute | undefined;

  /**
   * Get the event instance of Scroll node.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { UIScrollEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getScrollEvent(node: FrameNode): UIScrollEvent | undefined;

  /**
   * Define the TextClock type of FrameNode.
   *
   * @extends TypedFrameNode<TextClockAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextClockFrameNode extends TypedFrameNode<TextClockAttribute> {  
    /**
     * Initialize TextClock FrameNode.
     *
     * @param { TextClockOptions } [options]
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: TextClockOptions): TextClockAttribute;
  }

  /**
   * Define the FrameNode type for TextClock.
   *
   * @typedef { TextClockFrameNode } TextClock
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type TextClock = TextClockFrameNode;

  /**
   * Create a FrameNode of TextClock type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextClock } - Return TextClock type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createTextClockNode(context: UIContext): TextClock;

  /**
   * Define the TextTimer type of FrameNode.
   *
   * @extends TypedFrameNode<TextTimerAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextTimerFrameNode extends TypedFrameNode<TextTimerAttribute> {  
    /**
     * Initialize TextTimer FrameNode.
     *
     * @param { TextTimerOptions } [options]
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: TextTimerOptions): TextTimerAttribute;
  }

  /**
   * Define the FrameNode type for TextTimer.
   *
   * @typedef { TextTimerFrameNode } TextTimer
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type TextTimer = TextTimerFrameNode;

  /**
   * Create a FrameNode of TextTimer type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextTimer } - Return TextTimer type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createTextTimerNode(context: UIContext): TextTimer;

  /**
   * Define the Grid type of FrameNode.
   *
   * @extends TypedFrameNode<GridAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridFrameNode extends TypedFrameNode<GridAttribute> {
    /**
     * Initialize Grid FrameNode.
     *
     * @param { Scroller } [scroller] - The controller for grid.
     * @param { GridLayoutOptions } [layoutOptions] - Grid layout options.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(scroller?: Scroller, layoutOptions?: GridLayoutOptions): GridAttribute;
  }

  /**
   * Define the FrameNode type for Grid.
   *
   * @typedef { GridFrameNode } Grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Grid = GridFrameNode;

  /**
   * Create a FrameNode of Grid type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Grid } - Return Grid type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Grid type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Grid } - Return Grid type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createGridNode(context: UIContext, options?: FrameNodeOptions): Grid;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { GridAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getGridAttribute(node: FrameNode): GridAttribute | undefined;

  /**
   * Get the event instance of Grid node.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { UIGridEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getGridEvent(node: FrameNode): UIGridEvent | undefined;

  /**
   * Bind the controller of FrameNode.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { Scroller } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API 24 and will not be threw
   *    above API 25. [since 24 - 25]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindGridController(node: FrameNode, controller: Scroller): void;

  /**
   * Define the GridItem type of FrameNode.
   *
   * @extends TypedFrameNode<GridItemAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class GridItemFrameNode extends TypedFrameNode<GridItemAttribute> {
    /**
     * Initialize GridItem FrameNode.
     *
     * @param { GridItemOptions } [options] - Grid item options.
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: GridItemOptions): GridItemAttribute;
  }

  /**
   * Define the FrameNode type for GridItem.
   *
   * @typedef { GridItemFrameNode } GridItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type GridItem = GridItemFrameNode;

  /**
   * Create a FrameNode of GridItem type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { GridItem } - Return GridItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of GridItem type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { GridItem } - Return GridItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createGridItemNode(context: UIContext, options?: FrameNodeOptions): GridItem;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { GridItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getGridItemAttribute(node: FrameNode): GridItemAttribute | undefined;

  /**
   * Define the WaterFlow type of FrameNode.
   *
   * @extends TypedFrameNode<WaterFlowAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class WaterFlowFrameNode extends TypedFrameNode<WaterFlowAttribute> {
    /**
     * Initialize WaterFlow FrameNode.
     *
     * @param { WaterFlowOptions } [options] - WaterFlow options.
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: WaterFlowOptions): WaterFlowAttribute;
  }

  /**
   * Define the FrameNode type for WaterFlow.
   *
   * @typedef { WaterFlowFrameNode } WaterFlow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type WaterFlow = WaterFlowFrameNode;

  /**
   * Create a FrameNode of WaterFlow type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { WaterFlow } - Return WaterFlow type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of WaterFlow type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { WaterFlow } - Return WaterFlow type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createWaterFlowNode(context: UIContext, options?: FrameNodeOptions): WaterFlow;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { WaterFlowAttribute | undefined } - Return the attribute instance of FrameNode,
   *      and return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */ 
  export function getWaterFlowAttribute(node: FrameNode): WaterFlowAttribute | undefined;

  /**
   * Get the event instance of WaterFlow node.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { UIWaterFlowEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getWaterFlowEvent(node: FrameNode): UIWaterFlowEvent | undefined;

  /**
   * Bind the controller of FrameNode.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { Scroller } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API 24 and will not be threw
   *    above API 25. [since 24 - 25]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindWaterFlowController(node: FrameNode, controller: Scroller): void;

  /**
   * Define the FlowItem type of FrameNode.
   *
   * @extends TypedFrameNode<FlowItemAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class FlowItemFrameNode extends TypedFrameNode<FlowItemAttribute> {
    /**
     * Initialize FlowItem FrameNode.
     *
     * @returns { FlowItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): FlowItemAttribute;
  }

  /**
   * Define the FrameNode type for FlowItem.
   *
   * @typedef { FlowItemFrameNode } FlowItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type FlowItem = FlowItemFrameNode;

  /**
   * Create a FrameNode of FlowItem type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { FlowItem } - Return FlowItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of FlowItem type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { FlowItem } - Return FlowItem type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createFlowItemNode(context: UIContext, options?: FrameNodeOptions): FlowItem;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { FlowItemAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getFlowItemAttribute(node: FrameNode): FlowItemAttribute | undefined;

  /**
   * Define the Text type of FrameNode.
   *
   * @extends TypedFrameNode<TextAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextFrameNode extends TypedFrameNode<TextAttribute> {
    /**
     * Initialize Text FrameNode.
     *
     * @param { string | Resource } [content] - text content
     * @param { TextOptions } [value] - text options
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(content?: string | Resource, value?: TextOptions): TextAttribute;
  }

  /**
   * Define the FrameNode type for Text.
   *
   * @typedef { TextFrameNode } Text
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Text = TextFrameNode;

  /**
   * Create a FrameNode of Text type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Text } - Return Text type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Text type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Text } - Return Text type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createTextNode(context: UIContext, options?: FrameNodeOptions): Text;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { TextAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   * does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getTextAttribute(node: FrameNode): TextAttribute | undefined;
  
  /**
   * Bind the controller of FrameNode whose type is Text.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { TextController } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   * is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextController(node: FrameNode, controller: TextController): void;

  /**
   * Define the Search type of FrameNode.
   *
   * @extends TypedFrameNode<SearchAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SearchFrameNode extends TypedFrameNode<SearchAttribute> {
    /**
     * Initialize Search FrameNode.
     *
     * @param { SearchOptions } [value] - search options
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: SearchOptions): SearchAttribute;
  }

  /**
   * Define the FrameNode type for Search.
   *
   * @typedef { SearchFrameNode } Search
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Search = SearchFrameNode;

  /**
   * Create a FrameNode of Search type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Search } - Return Search type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createSearchNode(context: UIContext): Search;

  /**
   * Define the TextInput type of FrameNode.
   *
   * @extends TypedFrameNode<TextInputAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextInputFrameNode extends TypedFrameNode<TextInputAttribute> {
    /**
     * Initialize TextInput FrameNode.
     *
     * @param { TextInputOptions } [value] - textInput options
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: TextInputOptions): TextInputAttribute;
  }

  /**
   * Define the FrameNode type for TextInput.
   *
   * @typedef { TextInputFrameNode } TextInput
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type TextInput = TextInputFrameNode;

  /**
   * Create a FrameNode of TextInput type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextInput } - Return TextInput type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of TextInput type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { TextInput } - Return TextInput type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createTextInputNode(context: UIContext, options?: FrameNodeOptions): TextInput;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { TextInputAttribute | undefined } - Return the attribute instance of FrameNode, and
   * return undefined if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getTextInputAttribute(node: FrameNode): TextInputAttribute | undefined;
  
  /**
   * Bind the controller of FrameNode whose type is TextInput.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { TextInputController } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   * is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextInputController(node: FrameNode, controller: TextInputController): void;

  /**
   * Define the TextArea type of FrameNode.
   *
   * @extends TypedFrameNode<TextAreaAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class TextAreaFrameNode extends TypedFrameNode<TextAreaAttribute> {
    /**
     * Initialize TextArea FrameNode.
     *
     * @param { TextAreaOptions } [value] - textArea options
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: TextAreaOptions): TextAreaAttribute;
  }

  /**
   * Define the FrameNode type for TextArea.
   *
   * @typedef { TextAreaFrameNode } TextArea
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type TextArea = TextAreaFrameNode;

  /**
   * Create a FrameNode of TextArea type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { TextArea } - Return TextArea type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of TextArea type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { TextArea } - Return TextArea type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createTextAreaNode(context: UIContext, options?: FrameNodeOptions): TextArea;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { TextAreaAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   * does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  export function getTextAreaAttribute(node: FrameNode): TextAreaAttribute | undefined;
  
  /**
   * Bind the controller of FrameNode whose type is TextArea.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @param { TextAreaController } controller - the controller which is bind to the target FrameNode.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   * is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function bindTextAreaController(node: FrameNode, controller: TextAreaController): void;

  /**
   * Define the SymbolGlyph type of FrameNode.
   *
   * @extends TypedFrameNode<SymbolGlyphAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SymbolGlyphFrameNode extends TypedFrameNode<SymbolGlyphAttribute> {
    /**
     * Initialize SybolGlyph FrameNode.
     *
     * @param { Resource } [value] - symbolGlyph resource
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value?: Resource): SymbolGlyphAttribute;
  }

  /**
   * Define the FrameNode type for SymbolGlyph.
   *
   * @typedef { SymbolGlyphFrameNode } SymbolGlyph
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type SymbolGlyph = SymbolGlyphFrameNode;

  /**
   * Create a FrameNode of SymbolGlyph type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { SymbolGlyph } - Return SymbolGlyph type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createSymbolGlyphNode(context: UIContext): SymbolGlyph;

  /**
   * Define the QRCode type of FrameNode.
   *
   * @extends TypedFrameNode<QRCodeAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class QRCodeFrameNode extends TypedFrameNode<QRCodeAttribute> {  
    /**
     * Initialize QRCode FrameNode.
     *
     * @param { string } value
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: string): QRCodeAttribute;
  }

  /**
   * Define the FrameNode type for QRCode.
   *
   * @typedef { QRCodeFrameNode } QRCode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type QRCode = QRCodeFrameNode;

  /**
   * Create a FrameNode of QRCode type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { QRCode } - Return QRCode type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createQRCodeNode(context: UIContext): QRCode;

  /**
   * Define the Badge type of FrameNode.
   *
   * @extends TypedFrameNode<BadgeAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class BadgeFrameNode extends TypedFrameNode<BadgeAttribute> {  
    /**
     * Initialize Badge FrameNode.
     *
     * @param { BadgeParamWithNumber } value
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: BadgeParamWithNumber): BadgeAttribute;
    
    /**
     * Initialize Badge FrameNode.
     *
     * @param { BadgeParamWithString } value
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: BadgeParamWithString): BadgeAttribute;
  }

  /**
   * Define the FrameNode type for Badge.
   *
   * @typedef { BadgeFrameNode } Badge
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Badge = BadgeFrameNode;

  /**
   * Create a FrameNode of Badge type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Badge } - Return Badge type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createBadgeNode(context: UIContext): Badge;

  /**
   * Define the Marquee type of FrameNode.
   *
   * @extends TypedFrameNode<MarqueeAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class MarqueeFrameNode extends TypedFrameNode<MarqueeAttribute> {
    /**
     * Initialize Marquee FrameNode.
     *
     * @param { MarqueeOptions } value
     * @returns { MarqueeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: MarqueeOptions): MarqueeAttribute;
  }

  /**
   * Define the FrameNode type for Marquee.
   *
   * @typedef { MarqueeFrameNode } Marquee
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Marquee = MarqueeFrameNode;

  /**
   * Create a FrameNode of Marquee type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Marquee } - Return Marquee type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createMarqueeNode(context: UIContext): Marquee;

  /**
   * Define the Swiper type of FrameNode.
   *
   * @extends TypedFrameNode<SwiperAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SwiperFrameNode extends TypedFrameNode<SwiperAttribute> {
    /**
     * Initialize FrameNode.
     *
     * @param { SwiperController } [controller] - a controller for Swiper container components.
     * @returns { SwiperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(controller?: SwiperController): SwiperAttribute;
  }

  /**
   * Define the FrameNode type for Swiper.
   *
   * @typedef { SwiperFrameNode } Swiper
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Swiper = SwiperFrameNode;

  /**
   * Create a FrameNode of Swiper type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Swiper } - Return Swiper type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Swiper type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Swiper } - Return Swiper type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createSwiperNode(context: UIContext, options?: FrameNodeOptions): Swiper;

  /**
   * Get the attribute instance of FrameNode tp set attribute.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { SwiperAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function getSwiperAttribute(node: FrameNode): SwiperAttribute | undefined;

  /**
    * Bind the controller of FrameNode which type is Swiper.
    *
    * @param { FrameNode } node - the target FrameNode.
    * @param { SwiperController } controller - the controller which is bind to the target FrameNode.
    * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
    *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
    * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 24 static
    */
  export function bindSwiperController(node: FrameNode, controller: SwiperController): void;

  /**
   * Defines the XComponent type of FrameNode.
   *
   * @extends TypedFrameNode<XComponentAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class XComponentFrameNode extends TypedFrameNode<XComponentAttribute> {
    /**
     * Initialize XComponent FrameNode.
     *
     * @param { XComponentParameters } value - Indicates the options of the xcomponent.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: XComponentParameters): XComponentAttribute;

    /**
     * Initialize XComponent FrameNode.
     *
     * @param { XComponentOptions } value - Indicates the options of the xcomponent.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: XComponentOptions): XComponentAttribute;

    /**
     * Initialize XComponent FrameNode.
     *
     * @param { NativeXComponentParameters } params - Indicates the constructor parameters of the
     *     xcomponent for native developing.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(params: NativeXComponentParameters): XComponentAttribute;
  }

  /**
   * Define the FrameNode type for XComponent.
   *
   * @typedef { XComponentFrameNode } XComponent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type XComponent = XComponentFrameNode;

  /**
   * Create a FrameNode of XComponent type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of XComponent type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createXComponentNodeDefault(context: UIContext, options?: FrameNodeOptions): XComponent;

  /**
   * Create a FrameNode of XComponent type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { XComponentOptions } value - XComponent options
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of XComponent type with options and FrameNode options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { XComponentOptions } value - XComponent options
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createXComponentNodeWithOptions(
    context: UIContext, value: XComponentOptions, options?: FrameNodeOptions): XComponent;

  /**
   * Create a FrameNode of XComponent type with options for native developing.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { NativeXComponentParameters } parameters - initialization parameters.
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of XComponent type with options for native developing and FrameNode options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { NativeXComponentParameters } parameters - initialization parameters.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { XComponent } - Return XComponent type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createXComponentNodeWithNativeParameters(
    context: UIContext, parameters: NativeXComponentParameters, options?: FrameNodeOptions): XComponent;

  /**
 	 * Get the attribute instance of FrameNode which type is XComponent to set attributes.
 	 *
 	 * @param { FrameNode } node - the target FrameNode.
 	 * @returns { XComponentAttribute | undefined } - Return the attribute instance of FrameNode,
 	 *     and return undefined if it does not exist.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @since 23 static
 	 */ 
 	export function getXComponentAttribute(node: FrameNode): XComponentAttribute | undefined;

  /**
   * Define the Button type of FrameNode.
   *
   * @extends TypedFrameNode<ButtonAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ButtonFrameNode extends TypedFrameNode<ButtonAttribute> {
    /**
     * Initialize Button FrameNode.
     *
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(): ButtonAttribute;

    /**
     * Initialize Button FrameNode.
     *
     * @param { ButtonOptions } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ButtonOptions): ButtonAttribute;

    /**
     * Initialize Button FrameNode.
     *
     * @param { ResourceStr } label
     * @param { ButtonOptions } [options]
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(label: ResourceStr, options?: ButtonOptions): ButtonAttribute;
  }

  /**
   * Define the FrameNode type for Button.
   *
   * @typedef { ButtonFrameNode } Button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Button = ButtonFrameNode;

  /**
   * Create a FrameNode of Button type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Button } - Return Button type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Button type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Button } - Return Button type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createButtonNode(context: UIContext, options?: FrameNodeOptions): Button;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ButtonAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getButtonAttribute(node: FrameNode): ButtonAttribute | undefined;

  /**
   * Define the Checkbox type of FrameNode.
   *
   * @extends TypedFrameNode<CheckboxAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class CheckboxFrameNode extends TypedFrameNode<CheckboxAttribute> {
    /**
     * Initialize Checkbox FrameNode.
     *
     * @param { CheckboxOptions } [options]
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: CheckboxOptions): CheckboxAttribute;
  }

  /**
   * Define the FrameNode type for Checkbox.
   *
   * @typedef { CheckboxFrameNode } Checkbox
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Checkbox = CheckboxFrameNode;

  /**
   * Create a FrameNode of Checkbox type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Checkbox } - Return Checkbox type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Checkbox type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Checkbox } - Return Checkbox type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createCheckboxNode(context: UIContext, options?: FrameNodeOptions): Checkbox;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { CheckboxAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getCheckboxAttribute(node: FrameNode): CheckboxAttribute | undefined;

  /**
   * Define the CheckboxGroup type of FrameNode.
   *
   * @extends TypedFrameNode<CheckboxGroupAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class CheckboxGroupFrameNode extends TypedFrameNode<CheckboxGroupAttribute> {
    /**
     * Initialize CheckboxGroup FrameNode.
     *
     * @param { CheckboxGroupOptions } [options]
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: CheckboxGroupOptions): CheckboxGroupAttribute;
  }

  /**
   * Define the FrameNode type for CheckboxGroup.
   *
   * @typedef { CheckboxGroupFrameNode } CheckboxGroup
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type CheckboxGroup = CheckboxGroupFrameNode;

  /**
   * Create a FrameNode of CheckboxGroup type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { CheckboxGroup } - Return CheckboxGroup type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of CheckboxGroup type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { CheckboxGroup } - Return CheckboxGroup type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createCheckboxGroupNode(context: UIContext, options?: FrameNodeOptions): CheckboxGroup;

  /**
   * Define the Radio type of FrameNode.
   *
   * @extends TypedFrameNode<RadioAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RadioFrameNode extends TypedFrameNode<RadioAttribute> {
    /**
     * Initialize Radio FrameNode.
     *
     * @param { RadioOptions } value
     * @returns { RadioAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: RadioOptions): RadioAttribute;
  }

  /**
   * Define the FrameNode type for Radio.
   *
   * @typedef { RadioFrameNode } Radio
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Radio = RadioFrameNode;

  /**
   * Create a FrameNode of Radio type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Radio } - Return Radio type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Radio type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Radio } - Return Radio type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createRadioNode(context: UIContext, options?: FrameNodeOptions): Radio;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { RadioAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getRadioAttribute(node: FrameNode): RadioAttribute | undefined;

  /**
   * Define the Rating type of FrameNode.
   *
   * @extends TypedFrameNode<RatingAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class RatingFrameNode extends TypedFrameNode<RatingAttribute> {
    /**
     * Initialize Rating FrameNode.
     *
     * @param { RatingOptions } [options]
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: RatingOptions): RatingAttribute;
  }

  /**
   * Define the FrameNode type for Rating.
   *
   * @typedef { RatingFrameNode } Rating
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Rating = RatingFrameNode;

  /**
   * Create a FrameNode of Rating type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Rating } - Return Rating type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createRatingNode(context: UIContext): Rating;

  /**
   * Define the Select type of FrameNode.
   *
   * @extends TypedFrameNode<SelectAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SelectFrameNode extends TypedFrameNode<SelectAttribute> {
    /**
     * Initialize Select FrameNode.
     *
     * @param { Array<SelectOption> } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: Array<SelectOption>): SelectAttribute;
  }

  /**
   * Define the FrameNode type for Select.
   *
   * @typedef { SelectFrameNode } Select
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Select = SelectFrameNode;

  /**
   * Create a FrameNode of Select type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Select } - Return Select type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function createSelectNode(context: UIContext): Select;

  /**
   * Define the Slider type of FrameNode.
   *
   * @extends TypedFrameNode<SliderAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class SliderFrameNode extends TypedFrameNode<SliderAttribute> {
    /**
     * Initialize Slider FrameNode.
     *
     * @param { SliderOptions } [options]
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(options?: SliderOptions): SliderAttribute;
  }

  /**
   * Define the FrameNode type for Slider.
   *
   * @typedef { SliderFrameNode } Slider
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Slider = SliderFrameNode;

  /**
   * Create a FrameNode of Slider type.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @returns { Slider } - Return Slider type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Slider type with options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { FrameNodeOptions } [options] - Options for configuring FrameNode creation.
   * @returns { Slider } - Return Slider type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createSliderNode(context: UIContext, options?: FrameNodeOptions): Slider;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { SliderAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getSliderAttribute(node: FrameNode): SliderAttribute | undefined;

  /**
   * Define the Toggle type of FrameNode.
   *
   * @extends TypedFrameNode<ToggleAttribute>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  abstract class ToggleFrameNode extends TypedFrameNode<ToggleAttribute> {
    /**
     * Initialize Toggle FrameNode.
     *
     * @param { ToggleOptions } value
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    abstract initialize(value: ToggleOptions): ToggleAttribute;
  }

  /**
   * Define the FrameNode type for Toggle.
   *
   * @typedef { ToggleFrameNode } Toggle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type Toggle = ToggleFrameNode;

  /**
   * Create a FrameNode of Toggle type with Toggle options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { ToggleOptions } [options] - ToggleOptions.
   * @returns { Toggle } - Return Toggle type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Create a FrameNode of Toggle type with Toggle options and FrameNode options.
   *
   * @param { UIContext } context - uiContext used to create the FrameNode.
   * @param { ToggleOptions } [options] - Toggle component options
   * @param { FrameNodeOptions } [frameNodeOptions] - Options for configuring FrameNode creation.
   * @returns { Toggle } - Return Toggle type FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export function createToggleNode(
    context: UIContext, options?: ToggleOptions, frameNodeOptions?: FrameNodeOptions): Toggle;

  /**
   * Get the attribute instance of FrameNode to set attributes.
   *
   * @param { FrameNode } node - the target FrameNode.
   * @returns { ToggleAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  export function getToggleAttribute(node: FrameNode): ToggleAttribute | undefined;
}

/**
 * Used for lazy loading of typeNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class NodeAdapter {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();
  /**
   * Dispose the NodeAdapter immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dispose(): void;

  /**
   * Get if the NodeAdapter is disposed.
   *
   * @returns { boolean } - Returns true if the NodeAdapter is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isDisposed(): boolean;
  /**
   * Set the total number of node count.
   *
   * @param { int } count - The total number of node count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set totalNodeCount(count: int);
  /**
   * Get the total number of node count.
   *
   * @returns { int } - Return the total number of node count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get totalNodeCount(): int;
  /**
   * Define the operation of reloading all data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reloadAllItems(): void;
  /**
   * Define the data reload operation.Reload a specified amount of data starting from the index value.
   *
   * @param { int } start - Start loading index values for data.
   * @param { int } count - Load the number of data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reloadItem(start: int, count: int): void;
  /**
   * Define data deletion operations.Delete a specified amount of data starting from the index value.
   *
   * @param { int } start - Start deleting index values for data.
   * @param { int } count - Delete the number of data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  removeItem(start: int, count: int): void;
  /**
   * Define data insertion operations.Insert a specified amount of data starting from the index value.
   *
   * @param { int } start - Start Insert index values for data.
   * @param { int } count - Insert the number of data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  insertItem(start: int, count: int): void;
  /**
   * Define data movement operations. Move data from the starting index to the ending index.
   *
   * @param { int } from - Starting index value.
   * @param { int } to - End index value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  moveItem(from: int, to: int): void;
  /**
   * Obtain all data results.
   *
   * @returns { Array<FrameNode> } - Return all valid FrameNode collections.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getAllAvailableItems(): Array<FrameNode>;
    /**
     * This callback will be triggered when a FrameNode is bound.
     *
     * @param { FrameNode } target - The bound FrameNode node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAttachToNode(target: FrameNode): void;
    /**
     * This callback will be triggered when the binding is released.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDetachFromNode(): void;
    /**
     * Call this callback when loading for the first time or when a new node slides in.Used to generate custom IDs,
     * developers need to ensure the uniqueness of the IDs themselves.
     *
     * @param { int } index - Load the index value of the data.
     * @returns { int } - Returning the developer's custom ID requires the developer to ensure its uniqueness.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onGetChildId(index: int): int;
    /**
     * Call this callback when loading for the first time or when a new node slides in.
     *
     * @param { int } index - Load the index value of the data.
     * @returns { FrameNode } - Returns the FrameNode node that loads the node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCreateChild(index: int): FrameNode;
    /**
     * Called when the child node is about to be destroyed.
     *
     * @param { int } id - The child node ID that is about to be destroyed.
     * @param { FrameNode } node - The FrameNode node that is about to be destroyed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDisposeChild(id: int, node: FrameNode): void;
  /**
   * Call this callback when reloading or reusing.
   *
   * @param { int } id - The child node ID that is about to be reloaded.
   * @param { FrameNode } node - Reused FrameNode nodes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onUpdateChild(id: int, node: FrameNode): void;
  /**
   * Add a NodeAdapter to bind to the node.A node can only be bound to one NodeAdapter. Binding failure returns false.
   *
   * @param { NodeAdapter } adapter - Define lazy loading classes.
   * @param { FrameNode } node - The bound FrameNode node.
   * @returns { boolean } Return the binding result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean;
  /**
   * Remove the bound NodeAdapter from the node.A node can only be bound to one NodeAdapter.
   *
   * @param { FrameNode } node - Unbind the FrameNode node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static detachNodeAdapter(node: FrameNode): void;
}
