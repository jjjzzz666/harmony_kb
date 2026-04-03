'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { FrameNode, LayoutConstraint } from 'arkui.FrameNode';
import { LengthMetrics, NodePosition } from 'arkui.Graphics';
import { HorizontalAlign, FlexAlign, VerticalAlign, LocalizedAlignment } from './component/enums';
import { ItemFillPolicy } from './component/units';

/**
 * Defines layout algorithm.
 *
 * @interface LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface LayoutAlgorithm {}

/**
 * Defines the custom layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@ObservedV2
export declare class CustomLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Method to measure the DynamicLayout FrameNode and its content to determine the measured size.
     *
     * @param { FrameNode } self - The FrameNode of DynamicLayout component.
     * @param { LayoutConstraint } constraint - The layout constraint of the node,
     *     which will be used in measure process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    onMeasure(self: FrameNode, constraint: LayoutConstraint): void;
    /**
     * Method to assign a position to the DynamicLayout FrameNode and each of its children.
     * It can be used to specify how the DynamicLayout FrameNode and its child nodes are
     * positioned and sized within the layout.
     *
     * @param { FrameNode } self - The FrameNode of DynamicLayout component.
     * @param { NodePosition } position - The position of the node, will be used when executing layout method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    onLayout(self: FrameNode, position: NodePosition): void;
}

/**
 * ColumnLayoutAlgorithm constructor options.
 *
 * @interface ColumnLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
interface ColumnLayoutAlgorithmOptions {
    /**
     * Vertical layout element space.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    space?: LengthMetrics;
    /**
     * Set the alignment format of the subassembly in the horizontal direction.
     *
     * @type { ?HorizontalAlign }
     * @default HorizontalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    alignItems?: HorizontalAlign;
    /**
     * Set alignment mode of the child components along the vertical axis.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    isReverse?: boolean;
}

/**
 * Defines the column layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@ObservedV2
export declare class ColumnLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { ColumnLayoutAlgorithmOptions } [option] - set properties of column layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * Vertical layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public space?: LengthMetrics;
    /**
     * Alignment format of the subassembly in the horizontal direction.
     *
     * @type { ?HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public alignItems?: HorizontalAlign;
    /**
     * Alignment mode of the child components along the vertical axis.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public isReverse?: boolean;
}

/**
 * RowLayoutAlgorithm constructor options.
 *
 * @interface RowLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
interface RowLayoutAlgorithmOptions {
    /**
     * Horizontal layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    space?: LengthMetrics;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @type { ?VerticalAlign }
     * @default VerticalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    alignItems?: VerticalAlign;
    /**
     * Alignment mode of the child components along the horizontal axis.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    isReverse?: boolean;
}

/**
 * Defines the row layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@ObservedV2
export declare class RowLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * constructor.
     *
     * @param { RowLayoutAlgorithmOptions } [option] - set properties of row layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * Horizontal layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public space?: LengthMetrics;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @type { ?VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public alignItems?: VerticalAlign;
    /**
     * Alignment mode of the child components along the horizontal axis.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public isReverse?: boolean;
}

/**
 * StackLayoutAlgorithm constructor options.
 *
 * @interface StackLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
interface StackLayoutAlgorithmOptions {
    /**
     * Defines the align rules of child components in stack layout algorithm.
     *
     * @type { ?LocalizedAlignment }
     * @default LocalizedAlignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    alignContent?: LocalizedAlignment;
}

/**
 * Defines the stack layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@ObservedV2
export declare class StackLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { StackLayoutAlgorithmOptions } [option] - set properties of stack layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(option?: StackLayoutAlgorithmOptions);
    /**
     * The align rules of child components in stack layout algorithm.
     *
     * @type { ?LocalizedAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @Trace public alignContent?: LocalizedAlignment;
}

/**
 * GridLayoutAlgorithm constructor options.
 *
 * @interface GridLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
interface GridLayoutAlgorithmOptions {
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @type { ?(string | ItemFillPolicy) }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    columnsTemplate?: string | ItemFillPolicy;
    /**
     * The spacing between columns.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    columnsGap?: LengthMetrics;
    /**
     * The spacing between rows.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    rowsGap?: LengthMetrics;
}

/**
 * Defines the grid layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class GridLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { GridLayoutAlgorithmOptions } [option] - set properties of grid layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @type { ?(string | ItemFillPolicy) }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    public columnsTemplate?: string | ItemFillPolicy;
    /**
     * The spacing between columns.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    public columnsGap?: LengthMetrics;
    /**
     * The spacing between rows.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    public rowsGap?: LengthMetrics;
}
