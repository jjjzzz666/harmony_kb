'use static';
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

import { Resource as _Resource } from '../../global/resource';
import { Color, BorderStyle, FontWeight, FontStyle, DividerMode, PresetFillType } from './enums';
import { OutlineStyle, AttributeModifier, CommonMethod, AccessibilityRoleType } from './common';
import { LengthMetricsUnit as _LengthMetricsUnit, LengthMetrics as _LengthMetrics, ColorMetrics as _ColorMetrics } from '../Graphics';
import _drawing from '../../../api/@ohos.graphics.drawing'
/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { _Resource } Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Resource = _Resource;

/**
 * Defines the length property with string, number and resource unit.
 *
 * @typedef { string | double | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Length = string | double | Resource;

/**
 * Defines the length property with number in units of px.
 *
 * @typedef { string } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type PX = string;

/**
 * Defines the length property with number or number in units of vp.
 *
 * @typedef { string | double } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type VP = string | double;

/**
 * Defines the length property with number in units of fp.
 *
 * @typedef { string } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type FP = string;

/**
 * Defines the length property with number in units of lpx.
 *
 * @typedef { string } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type LPX = string;

/**
 * Defines the length property with number in units of Percentage.
 *
 * @typedef { string } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Percentage = string;

/**
 * Defines the angle property with number in units of deg.
 *
 * @typedef { string } Degree
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Degree = string;

/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), and resource.
 *
 * @typedef { PX | VP | FP | LPX | Percentage | Resource } Dimension
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Dimension = PX | VP | FP | LPX | Percentage | Resource;

/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ResourceStr = string | Resource;

/**
 * Defines drawing canvas.
 *
 * @typedef { _drawing.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type DrawingCanvas = _drawing.Canvas;

/**
 * Defines the padding property.
 *
 * @interface Padding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Padding {
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: Length;

  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: Length;
}

/**
 * Defines the localized padding property.
 *
 * @interface LocalizedPadding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedPadding {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start?: LengthMetrics;
}

/**
 * Defines the margin property.
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Margin = Padding;

/**
 * Defines the border width property.
 *
 * @typedef { EdgeWidths } EdgeWidth
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type EdgeWidth = EdgeWidths;

/**
 * Defines the border width property.
 *
 * @interface EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EdgeWidths {
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: Length;

  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: Length;
}

/**
 * Defines the localized border width property.
 *
 * @interface LocalizedEdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedEdgeWidths {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start?: LengthMetrics;
}

/**
 * Defines the outline width property.
 *
 * @interface EdgeOutlineWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EdgeOutlineWidths {
  /**
   * top outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: Dimension;

  /**
   * right outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: Dimension;

  /**
   * bottom outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: Dimension;

  /**
   * left outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: Dimension;
}

/**
 * Defines the border radius property.
 *
 * @interface BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BorderRadiuses {
  /**
   * top-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topLeft?: Length;

  /**
   * top-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topRight?: Length;

  /**
   * bottom-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomLeft?: Length;

  /**
   * bottom-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomRight?: Length;
}

/**
 * Defines the localized border radius property.
 *
 * @interface LocalizedBorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedBorderRadiuses {
  /**
   * top-start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topStart?: LengthMetrics;

  /**
   * top-end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topEnd?: LengthMetrics;

  /**
   * bottom-start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomStart?: LengthMetrics;

  /**
   * bottom-end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomEnd?: LengthMetrics;
}

/**
 * Defines the outline radius property.
 *
 * @interface OutlineRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface OutlineRadiuses {
  /**
   * top-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topLeft?: Dimension;

  /**
   * top-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  topRight?: Dimension;

  /**
   * bottom-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomLeft?: Dimension;

  /**
   * bottom-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottomRight?: Dimension;
}

/**
 * Defines the border color property.
 *
 * @interface EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EdgeColors {
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: ResourceColor;

  /**
   * right property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: ResourceColor;

  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: ResourceColor;

  /**
   * left property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: ResourceColor;
}

/**
 * Defines the localized border color property.
 *
 * @interface LocalizedEdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedEdgeColors {
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: ResourceColor;

  /**
   * end property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end?: ResourceColor;

  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: ResourceColor;

  /**
   * start property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start?: ResourceColor;
}

/**
 * Defines the localized margin property.
 *
 * @typedef { LocalizedPadding } LocalizedMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type LocalizedMargin = LocalizedPadding;

/**
 * Defines the border style property.
 *
 * @interface EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EdgeStyles {
  /**
   * top property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: BorderStyle;

  /**
   * right property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: BorderStyle;

  /**
   * bottom property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: BorderStyle;

  /**
   * left property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: BorderStyle;
}

/**
 * Defines the outline style property.
 *
 * @interface EdgeOutlineStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EdgeOutlineStyles {
  /**
   * top property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: OutlineStyle;

  /**
   * right property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: OutlineStyle;

  /**
   * bottom property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: OutlineStyle;

  /**
   * left property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: OutlineStyle;
}

/**
 * Defines the offset property.
 *
 * @interface Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Offset {
  /**
   * dx property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dx: Length;

  /**
   * dy property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dy: Length;
}

/**
 * Defines the color which can use resource.
 *
 * @typedef { Color | int | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ResourceColor = Color | int | string | Resource;

/**
 * Defines the length constrain property.
 *
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LengthConstrain {
  /**
   * minimum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minLength: Length;

  /**
   * maximum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxLength: Length;
}

/**
 * Defines VoidCallback.
 *
 * @typedef { function } VoidCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type VoidCallback = () => void;

/**
 * Defines length metrics unit.
 *
 * @typedef { _LengthMetricsUnit } LengthMetricsUnit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type LengthMetricsUnit = _LengthMetricsUnit;

/**
 * Defines LengthMetrics.
 *
 * @typedef { _LengthMetrics } LengthMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type LengthMetrics = _LengthMetrics;

/**
 * Defines ColorMetrics.
 *
 * @typedef { _ColorMetrics } ColorMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ColorMetrics = _ColorMetrics;

/**
 * Defines the font used for text.
 *
 * @interface Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Font {
  /**
   * font size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  size?: Length;

  /**
   * font weight.
   *
   * @type { ?(FontWeight | int | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  weight?: FontWeight | int | string;

  /**
   * font family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  family?: string | Resource;

  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Area {
  /**
   * Defines the width property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width: Length;

  /**
   * Defines the height property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height: Length;

  /**
   * Defines the local position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  position: Position;

  /**
   * Defines the global position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  globalPosition: Position;
}

/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Position {
  /**
   * Coordinate x of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x?: Length;

  /**
   * Coordinate y of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y?: Length;
}

/**
 * Defines the LocalizedPosition.
 *
 * @interface LocalizedPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedPosition {
  /**
   * Coordinate start of the Position.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start?: LengthMetrics;

  /**
   * Coordinate top of the Position.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: LengthMetrics;
}

/**
 * Defines the Edges.
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Edges {
  /**
   * top property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: Dimension;

  /**
   * left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: Dimension;

  /**
   * bottom property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: Dimension;

  /**
   * right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right?: Dimension;
}

/**
 * Defines the LocalizedEdges.
 *
 * @interface LocalizedEdges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedEdges {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end?: LengthMetrics;
}

/**
 * Defines the Bias.
 *
 * @interface Bias
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Bias {
  /**
   * Horizontal ratio of the Bias, it must be >= 0.
   *
   * @type { ?double }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  horizontal?: double;

  /**
   * Vertical ratio of the Bias, it must be >= 0.
   *
   * @type { ?double }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  vertical?: double;
}

/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minWidth?: Length;

  /**
   * Defines the max width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxWidth?: Length;

  /**
   * Defines the min height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minHeight?: Length;

  /**
   * Defines the max height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxHeight?: Length;
}

/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SizeOptions {
  /**
   * Defines the width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width?: Length;

  /**
   * Defines the height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height?: Length;
}

/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BorderOptions {
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width?: EdgeWidths | Length | LocalizedEdgeWidths;

  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;

  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  style?: EdgeStyles | BorderStyle;

  /**
   * Defines the gap of dash when BorderStyle is dashed.
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;

  /**
   * Defines the length of dash when BorderStyle is dashed.
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}

/**
 * Defines the options of outline.
 *
 * @interface OutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface OutlineOptions {
  /**
   * Defines the outline width.
   *
   * @type { ?(EdgeOutlineWidths | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width?: EdgeOutlineWidths | Dimension;

  /**
   * Defines the outline color.
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Defines the outline radius.
   *
   * @type { ?(OutlineRadiuses | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  radius?: OutlineRadiuses | Dimension;

  /**
   * Defines the outline style.
   *
   * @type { ?(EdgeOutlineStyles | OutlineStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  style?: EdgeOutlineStyles | OutlineStyle;
}

/**
 * Define the style of checkbox mark.
 *
 * @interface MarkStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface MarkStyle {
  /**
   * Define the stroke color of checkbox mark.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeColor?: ResourceColor;

  /**
   * Define the size of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  size?: Length;

  /**
   * Define the stroke width of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeWidth?: Length;
}

/**
 * Defines the ColorFilter object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { double[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column.
   *     The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(value: double[]);
}

/**
 * Defines TouchPoint
 *
 * @interface TouchPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TouchPoint {
  /**
   * Define the touch point x coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x: Dimension;

  /**
   * Define the touch point y coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y: Dimension;
}

/**
 * Defines the DirectionalEdgesT interface.
 *
 * @interface DirectionalEdgesT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DirectionalEdgesT<T> {
  /**
   * Start property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start: T;

  /**
   * End property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end: T;

  /**
   * Top property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top: T;

  /**
   * Bottom property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom: T;
}

/**
 * Defines the struct of DividerStyleOptions.
 *
 * @interface DividerStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DividerStyleOptions {
  /**
   * The strokeWidth of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeWidth?: LengthMetrics;

  /**
   * The color of Divider.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * The startMargin of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  startMargin?: LengthMetrics;

  /**
   * The endMargin of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  endMargin?: LengthMetrics;

  /**
   * The mode of Divider.
   *
   * @type { ?DividerMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  mode?: DividerMode;
}

/**
 * Define scrollbar margin options.
 *
 * @interface ScrollBarMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface ScrollBarMargin {
  /**
   * Start margin of the scroll bar.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  start?: LengthMetrics;

  /**
   * End margin of the scroll bar.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  end?: LengthMetrics;
}

/**
 * Defines the ChainWeightOptions interface.
 *
 * @interface ChainWeightOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ChainWeightOptions {

  /**
   * Horizontal ChainWeight.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  horizontal?: double;

  /**
   * Vertical ChainWeight.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  vertical?: double;
}

/**
 * Defines the struct of AccessibilityOptions.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface AccessibilityOptions {

  /**
   * accessibilityPreferred - Should accessibilityText be prioritized when contatenating child component strings.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  accessibilityPreferred?: boolean;

  /**
   * stateControllerType - the first component of a specific type found within the composition defined by
   * accessibility group will take over the state attributes and announcement of the composition
   *
   * @type { ?AccessibilityRoleType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stateControllerRoleType?: AccessibilityRoleType;

  /**
   * stateControllerId - the first component of a specific id found within the composition defined by
   * accessibility group will take over the state attributes and announcement of the composition
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stateControllerId?: string;

  /**
   * actionControllerRoleType - the first component of a specific type found within the composition defined by
   * accessibility group will take over part of the accessibility action of the composition
   *
   * @type { ?AccessibilityRoleType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  actionControllerRoleType?: AccessibilityRoleType;

  /**
   * actionControllerId - the first component of a specific id found within the composition defined by
   * accessibility group will take over part of the accessibility action of the composition
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  actionControllerId?: string;
}

/**
 * Defines the struct of AccessibilityActionOptions that can affect operation under accessibility.
 *
 * @interface AccessibilityActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface AccessibilityActionOptions {

  /**
   * scrollStep - the step when the component is scrolled by accessibility.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  scrollStep?: int;
}

/**
 * Define a responsive item filling pattern that can be used in WaterFlow, Grid, List, and Swiper components.
 *
 * @typedef { PresetFillType } ResponsiveFillType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ResponsiveFillType = PresetFillType;

/**
 * Define a responsive item layout suitable for WaterFlow, Grid, List, and Swiper components.
 *
 * @interface ItemFillPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemFillPolicy {
  /**
   * Specify the number of columns for different responsive breakpoints.
   *
   * @type { ?ResponsiveFillType }
   * @default ResponsiveFillType.BREAKPOINT_DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillType?: ResponsiveFillType;
}

/**
 * Define cache count information.
 *
 * @interface CacheCountInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CacheCountInfo {
  /**
   * min cache count.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minCount: int;
  /**
   * max cache count.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxCount: int;
}
