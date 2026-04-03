'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
import { EdgeEffectOptions, EditModeOptions, NestedScrollOptions, ItemDragInfo, ScrollableCommonMethod, CommonMethod, OnWillScrollCallback, OnScrollCallback, OnItemDragStartCallback } from './common';
import { Length, Resource, ItemFillPolicy } from './units';
import { Scroller, OnScrollFrameBeginCallback } from './scroll';
import { BarState, Color, EdgeEffect, FocusWrapMode } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, UIScrollableCommonEvent } from "./common";

/**
 * Define start line info used in GridLayoutOptions.
 *
 * @interface StartLineInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StartLineInfo {
    /**
     * Define the start index of the row where the target index or offset is located. 
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    startIndex: int;
  
    /**
     * Define the start row of the item with startIndex.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    startLine: int;
  
    /**
     * Define the offset between the top of the item with startIndex and the top of the grid.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    startOffset: double;
  
    /**
     * Define the offset between the top of the first item and the top of the grid.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    totalOffset: double;
}
  
/**
 * Defines the callback type used in onGetStartIndexByOffset of GridLayoutOptions.
 *
 * @typedef { function } OnGetStartIndexByOffsetCallback
 * @param { double } totalOffset - The total offset to scroll to.
 * @returns { StartLineInfo }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type OnGetStartIndexByOffsetCallback = (totalOffset: double) => StartLineInfo;

/**
 * Defines the callback type used in onGetStartIndexByIndex of GridLayoutOptions.
 *
 * @typedef { function } OnGetStartIndexByIndexCallback
 * @param { int } targetIndex - The target index to scroll to.
 * @returns { StartLineInfo }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type OnGetStartIndexByIndexCallback = (targetIndex: int) => StartLineInfo;

/**
 * The options to help grid layout
 *
 * @interface GridLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridLayoutOptions {
    /**
     * The size of most grid items, in [rows, columns], generally [1, 1]
     *
     * @type { [int, int] } regularSize
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    regularSize: [
        int,
        int
    ];
    /**
     * The indexes of grid items with irregular size.
     *
     * @type { ?int[] } irregularIndexes
     * @default int[] no irregular grid item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    irregularIndexes?: int[];
    /**
     * Called to return the size of the irregular grid items with the specified index in [rows, columns].
     *
     * @type { ?function } onGetIrregularSizeByIndex,
     * all irregular grid items will occupy an entire line if not set
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onGetIrregularSizeByIndex?: (index: int) => [
        int,
        int
    ];
    /**
     * Called to return the size of the grid items with the specified index in
     * [rowStart, columnStart, rowSpan, columnSpan].
     *
     * @type { ?function } onGetRectByIndex
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onGetRectByIndex?: (index: int) => [
        int,
        int,
        int,
        int
    ];

    /**
 	 * Called to return the StartLineInfo based on total offset for the fast or reverse sliding.
 	 *
 	 * @type { ?OnGetStartIndexByOffsetCallback } onGetStartIndexByOffset
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onGetStartIndexByOffset?: OnGetStartIndexByOffsetCallback;
 	 
    /**
     * Called to return the StartLineInfo based on target index for the scrollToIndex operation.
     *
     * @type { ?OnGetStartIndexByIndexCallback } onGetStartIndexByIndex
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onGetStartIndexByIndex?: OnGetStartIndexByIndexCallback;
}
/**
 * The enum of property layoutDirection
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GridDirection {
    /**
     * The row direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Row,
    /**
     * The column direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Column,
    /**
     * The row reverse direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RowReverse,
    /**
     * The column reverse direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ColumnReverse
}
/**
 * Declare grid item alignment status
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GridItemAlignment {
    /**
     * Use the default alignment of the Grid.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * The height of the tallest grid item in the current line
     * will be used as the height for the other items in the same line
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    STRETCH = 1
}
/**
 * The attribute of scrollbar to compute scrollbar position and height.
 *
 * @interface ComputedBarAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ComputedBarAttribute {
    /**
     * The offset of the grid.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    totalOffset: double;
    /**
     * The range of the grid.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    totalLength: double;
}
/**
 * Defines a UIGridEvent which is used to set event to target component.
 *
 * @extends UIScrollableCommonEvent
 * @interface UIGridEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare interface UIGridEvent extends UIScrollableCommonEvent {
  /**
   * Set or reset the callback which is triggered when the Grid will scroll.
   *
   * @param { OnWillScrollCallback | undefined } callback - callback function, triggered when the Grid will scroll.
   *      Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when the Grid did scroll.
   *
   * @param { OnScrollCallback | undefined } callback - callback function, triggered when the Grid did scroll.
   *     Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;
  /**
   * Set or reset the callback which is triggered when the start and end positions of the display change.
   *
   * @param { OnGridScrollIndexCallback | undefined } callback - callback function, triggered when start or
   *     end positions of the display change. Passing undefined will unregister the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void;
}
/**
 * Defines the callback type used in onScrollIndex.
 *
 * @typedef {function} OnGridScrollIndexCallback
 * @param { int } first - the first index in visible content.
 * @param { int } last - the last index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export type OnGridScrollIndexCallback = (first: int, last: int) => void;
/**
 * The gridAttribute.
 * 
 * @extends ScrollableCommonMethod
 * @interface GridAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridAttribute extends ScrollableCommonMethod {
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @param { string | ItemFillPolicy | undefined } value - Number of columns in the layout.
     *     <br>Default value: <em>'1fr'</em>. Passing undefined will restore the default value.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default columnsTemplate(value: string | ItemFillPolicy | undefined): this;
    /**
     * Lets you set the number of rows in the current grid layout,
     *
     * @param { string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default rowsTemplate(value: string | undefined): this;
    /**
     * Allows you to set the spacing between columns.
     *
     * @param { Length | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default columnsGap(value: Length | undefined): this;
    /**
     * Lets you set the spacing between rows.
     *
     * @param { Length | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default rowsGap(value: Length | undefined): this;
    /**
     * This parameter specifies the width of the scroll bar.
     *
     * @param { double | string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default scrollBarWidth(value: double | string | undefined): this;
    /**
     * Sets the scrollbar color.
     *
     * @param { Color | int | string | Resource | undefined } color - Scrollbar color.
     *     <br>Default value: <em>'\#182431'</em> (40% opacity)
     *     <br>A number value indicates a HEX color in RGB or ARGB format, for example, <em>0xffffff</em>.
     *     A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default scrollBarColor(color: Color | int | string | Resource | undefined): this;
    /**
     * Lets you set the spacing between rows.
     *
     * @param { BarState | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default scrollBar(value: BarState | undefined): this;
    /**
     * Set scrollbar position.
     *
     * @param { function | undefined } event - callback of grid scroll,
     *     index is the current first displayed item, offset is the grid offset,
     *     return ComputedBarAttribute to update scrollbar position and height.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onScrollBarUpdate(event: ((index: int, offset: double) => ComputedBarAttribute) | undefined): this;
    /**
     * Called when the first or last item displayed in the grid changes.
     *
     * @param { function | undefined } event - of grid scroll,
     *     first is the index of the first item displayed in the grid,
     *     last is the index of the last item displayed in the grid.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onScrollIndex(event: ((first: int, last: int) => void) | undefined): this;
    /**
     * cached Count
     *
     * @param { int | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default cachedCount(value: int | undefined): this;
    /**
     * Called to set number of GridItems to be preloaded (cached) in LazyForEach / Repeat.
     * @param { int | undefined } count - number of GridItems to be preloaded (cached).
     * @param { boolean | undefined } show - if true, cached items are displayed when clip is disabled.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default cachedCount(count: int | undefined, show: boolean | undefined): this;
    /**
     * editMode
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default editMode(value: boolean | undefined): this;
    /**
     * Called when judging whether it is multiSelectable.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default multiSelectable(value: boolean | undefined): this;
    /**
     * maxCount
     *
     * @param { int | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxCount(value: int | undefined): this;
    /**
     * minCount
     *
     * @param { int | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default minCount(value: int | undefined): this;
    /**
     * cellLength
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default cellLength(value: double | undefined): this;
    /**
     * Control GridDirection of the grid.
     *
     * @param { GridDirection | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default layoutDirection(value: GridDirection | undefined): this;
    /**
     * Control if the grid supports animation.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default supportAnimation(value: boolean | undefined): this;
    /**
     * Sets whether empty branches are supported in lazy loading.
     *
     * @param { boolean | undefined } supported - Indicates whether empty branches are supported in lazy loading.
     *     <br>Default value: false, passing undefined will restore the default value.
     *     <br>If set to false, LazyForEach or Repeat with virtualScroll does not allow empty branches.
     *     <br>If set to true, an empty branch of LazyForEach or Repeat with virtualScroll is treated as a node of
     *     zero size.
     * @returns { this } the attribute of the Grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default supportEmptyBranchInLazyLoading(supported: boolean | undefined): this;
    /**
    * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
    * (To be triggered, press and hold for 170 milliseconds (ms))
    *
    * @param { OnItemDragStartCallback | undefined } event
    * @returns { this }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    default onItemDragStart(event: OnItemDragStartCallback | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onItemDragMove(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: int) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onItemDrop(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int, isSuccess: boolean) => void) | undefined): this;
    /**
     * Called when the sliding effect is set.
     *
     * @param { EdgeEffect | undefined } value
     * @param { EdgeEffectOptions } [options]
     * @returns { this } The attribute of the grid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default edgeEffect(value: EdgeEffect | undefined, options?: EdgeEffectOptions): this;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions | undefined } value - options for nested scrolling.
     * @returns { this } the attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default nestedScroll(value: NestedScrollOptions | undefined): this;
    /**
     * Called when setting whether to enable scroll by gesture or mouse.
     *
     * @param { boolean | undefined } value
     * @returns { this } The attribute of the grid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableScrollInteraction(value: boolean | undefined): this;
    /**
     * Called to setting the friction.
     *
     * @param { double | Resource | undefined } value - options for scrolling friction.
     * @returns { this } the attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default friction(value: double | Resource | undefined): this;
    /**
     * Set the alignment of grid items.
     *
     * @param { GridItemAlignment | undefined } alignment - Items alignment
     * @returns { this } The attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default alignItems(alignment: GridItemAlignment | undefined): this;
    /**
     * Sets the edit mode options.
     *
     * @param { EditModeOptions } [options] - edit mode options.
     *     <br>Default value: <em>{ enableGatherSelectedItemsAnimation: false }</em>
     * @returns { this } The attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default editModeOptions(options?: EditModeOptions): this;
    /**
     * Sets the focus wrap mode of the Gird component.
     *
     * @param { FocusWrapMode | undefined } mode - the focus wrap mode of the Grid component.
     *     <br>Default value: **FocusWrapMode.DEFAULT**. Passing undefined will restore the default value.
     * @returns { this } the attribute of the Grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default focusWrapMode(mode: FocusWrapMode | undefined): this;
    /**
     * Sets whether to synchronously load all child components in the Grid.
     *
     * @param { boolean | undefined } enable - Whether to synchronously load all child components in the Grid.
     *     <br>Default value: true. Passing undefined will restore the default value.
     * @returns { this } The attribute of the Grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default syncLoad(enable: boolean | undefined): this;
    /**
     * Called when scrolling begin each frame.
     * Anonymous Object Rectification.
     *
     * @param { OnScrollFrameBeginCallback | undefined } event - callback function,
     *     triggered when the scrolling begin each frame.
     * @returns { this } Returns the instance of the GridAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    /**
     * Called when the scrollable will scroll.
     *
     * @param { OnWillScrollCallback | undefined } handler - callback of scrollable.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onWillScroll(handler: OnWillScrollCallback | undefined): this;
    /**
     * Called when the scrollable did scroll.
     *
     * @param { OnScrollCallback | undefined } handler - callback of scrollable,
     * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidScroll(handler: OnScrollCallback | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Grid is returned when the parameter is transferred.
 *
 * @param { Scroller } [scroller] - Controller bound to the grid
 * @param { GridLayoutOptions } [layoutOptions] - The options to help grid layout
 * @param { CustomBuilder } [content_] - container
 * @returns { GridAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Grid(
    scroller?: Scroller, layoutOptions?: GridLayoutOptions, 
    content_?: CustomBuilder,
): GridAttribute
