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

import { FrameNode, LayoutConstraint } from './FrameNode';
import { Position, LengthMetrics } from './Graphics';

/**
 * Defines layout algorithm.
 *
 * @interface LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export interface LayoutAlgorithm {}

/**
 * Defines the custom layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class CustomLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Method to measure the DynamicLayout FrameNode and its content to determine the measured size.
     *
     * @param { FrameNode } self - The FrameNode of DynamicLayout component.
     * @param { LayoutConstraint } constraint - The layout constraint of the node,
     *     which will be used in measure process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    onMeasure(self: FrameNode, constraint: LayoutConstraint): void;
    /**
     * Method to assign a position to the DynamicLayout FrameNode and each of its children.
     * It can be used to specify how the DynamicLayout FrameNode and its child nodes are positioned and
     * sized within the layout.
     *
     * @param { FrameNode } self - The FrameNode of DynamicLayout component.
     * @param { Position } position - The position of the node, will be used when executing layout method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    onLayout(self: FrameNode, position: Position): void;
}
 
/**
 * ColumnLayoutAlgorithm constructor options.
 *
 * @interface ColumnLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface ColumnLayoutAlgorithmOptions {
    /**
     * Vertical layout element space.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    space?: LengthMetrics;
    /**
     * Set the alignment format of the subassembly in the horizontal direction.
     *
     * @type { ?HorizontalAlign }
     * @default HorizontalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignItems?: HorizontalAlign;
    /**
     * Set alignment mode of the child components along the vertical axis.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    isReverse?: boolean;
}
 
/**
 * Defines the column layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class ColumnLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { ColumnLayoutAlgorithmOptions } [option] - set properties of column layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * Vertical layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public space?: LengthMetrics;
    /**
     * Alignment format of the subassembly in the horizontal direction.
     *
     * @type { ?HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignItems?: HorizontalAlign;
    /**
     * Alignment mode of the child components along the vertical axis.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public isReverse?: boolean;
}
 
/**
 * RowLayoutAlgorithm constructor options.
 *
 * @interface RowLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface RowLayoutAlgorithmOptions {
    /**
     * Horizontal layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    space?: LengthMetrics;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @type { ?VerticalAlign }
     * @default VerticalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignItems?: VerticalAlign;
    /**
     * Set alignment mode of the child components along the horizontal axis.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    isReverse?: boolean;
}
 
/**
 * Defines the row layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class RowLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * constructor.
     *
     * @param { RowLayoutAlgorithmOptions } [option] - set properties of row layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * Horizontal layout element spacing.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public space?: LengthMetrics;
    /**
     * The alignment format of the subassembly in the vertical direction.
     *
     * @type { ?VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignItems?: VerticalAlign;
    /**
     * Alignment mode of the child components along the horizontal axis.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * Whether the main axis is reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public isReverse?: boolean;
}
 
/**
 * StackLayoutAlgorithm constructor options.
 *
 * @interface StackLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface StackLayoutAlgorithmOptions {
    /**
     * Defines the align rules of child components in stack layout algorithm.
     *
     * @type { ?LocalizedAlignment }
     * @default LocalizedAlignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignContent?: LocalizedAlignment;
}
 
/**
 * Defines the stack layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class StackLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { StackLayoutAlgorithmOptions } [option] - set properties of stack layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: StackLayoutAlgorithmOptions);
    /**
     * The align rules of child components in stack layout algorithm.
     *
     * @type { ?LocalizedAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignContent?: LocalizedAlignment;
}

/**
 * GridLayoutAlgorithm constructor options.
 *
 * @interface GridLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
interface GridLayoutAlgorithmOptions {
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @type { ?string | ItemFillPolicy }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    columnsTemplate?: string | ItemFillPolicy;
    /**
     * The spacing between columns.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    columnsGap?: LengthMetrics;
    /**
     * The spacing between rows.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    rowsGap?: LengthMetrics;
}

/**
 * Defines the grid layout algorithm.
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
export class GridLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * Constructor.
     *
     * @param { GridLayoutAlgorithmOptions } [option] - set properties of grid layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @type { ?(string | ItemFillPolicy) }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    public columnsTemplate?: string | ItemFillPolicy;
    /**
     * The spacing between columns.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    public columnsGap?: LengthMetrics;
    /**
     * The spacing between rows.
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    public rowsGap?: LengthMetrics;
}
