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
import { CommonMethod, PixelMap } from './common';
import { FrameNode } from '../FrameNode';
import { ImageAIOptions, ImageAnalyzerConfig } from './imageCommon';
import { Matrix2D } from './matrix2d';
import { DrawingCanvas, VoidCallback, LengthMetricsUnit, LengthMetrics, ColorMetrics } from './units';
import { Size } from '../Graphics';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, Callback } from './common';
import { Color } from './enums'

/**
 * Filling style algorithm, which determines whether a point is within or outside the path. The following
 *    two configurations are supported:
 * 'evenodd': odd and even round rule
 * 'nonzero': (Default) Non-zero Wrap Rules
 *
 * @typedef { 'evenodd' | 'nonzero' } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasFillRule = 'evenodd' | 'nonzero';

/**
 * Specifies the attribute of drawing the end of each line segment. The following configurations are supported:
 * 'butt': (Default) Segment Ends in Square
 * 'round': Segment ends in a circle
 * 'square': The end of the segment ends in a square, but a rectangular area is added that is the same width
 *    as the segment and is half the thickness of the segment.
 *
 * @typedef { 'butt' | 'round' | 'square' } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasLineCap = 'butt' | 'round' | 'square';

/**
 * Sets the attribute of how two connected parts (line segments, arcs, and curves) whose length is not 0
 *    are connected together. The following three configurations are supported:
 * 'bevel': Fill the ends of the connected sections with an additional triangle-base area,
 *    each with its own independent rectangular corner.
 * 'miter': (Default) An additional diamond region is formed by extending the outer edges of the connected portions
 *    so that they intersect at a point.
 * 'round': Draw the shape of the corner by filling in an additional sector with the center at the end of the
 *    connected section. The radius of the fillet is the width of the segment.
 *
 * @typedef { 'bevel' | 'miter' | 'round' } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasLineJoin = 'bevel' | 'miter' | 'round';

/**
 * Indicates the attribute of the current text direction. The options are as follows:
 * 'inherit': (Default) Inherit current Canvas component settings
 * 'ltr': The text direction is left to right.
 * 'rtl': The text direction is from right to left.
 *
 * @typedef { 'inherit' | 'ltr' | 'rtl' } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasDirection = 'inherit' | 'ltr' | 'rtl';

/**
 * Describes the alignment mode for drawing text. The options are as follows:
 * 'center': The text is centered.
 * 'end': Where text aligns lines end (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 * 'left': (Default) The text is left-aligned.
 * 'right': The text is right-aligned.
 * 'start': Where the text snap line begins (Left alignment refers to the local from left to right,
 *    and right alignment refers to the local from right to left)
 *
 * @typedef { 'center' | 'end' | 'left' | 'right' | 'start' } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasTextAlign = 'center' | 'end' | 'left' | 'right' | 'start';

/**
 * Text baseline, which supports the following configurations:
 * 'alphabetic': (Default) The text baseline is the standard letter baseline.
 * 'bottom': The text baseline is at the bottom of the text block. The difference between the ideographic baseline
 *    and the ideographic baseline is that the ideographic baseline does not need to consider downlink letters.
 * 'hanging': The text baseline is a hanging baseline.
 * 'ideographic': The text baseline is the ideographic baseline; If the character itself exceeds the alphabetic
 *    baseline, the ideographic baseline is at the bottom of the character itself.
 * 'middle': The text baseline is in the middle of the text block.
 * 'top': The text baseline is at the top of the text block.
 *
 * @typedef { 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top' } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CanvasTextBaseline = 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top';

/**
 * Sets the image smoothness attribute. The options are as follows:
 * 'high': height
 * 'low': (default)low
 * 'medium': medium
 *
 * @typedef { 'high' | 'low' | 'medium' } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ImageSmoothingQuality = 'high' | 'low' | 'medium';

/**
 * Opaque objects that describe gradients, created by createLinearGradient() or createRadialGradient()
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CanvasGradient {
  /**
   * Add a breakpoint defined by offset and color to the gradient
   *
   * @param { double } offset - Value between 0 and 1.
   * @param { string | ColorMetrics } color - Set the gradient color.
   * @throws { BusinessError } 103701 - The color's ColorSpace is not the same as the last color's.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  addColorStop(offset: double, color: string | ColorMetrics): void;
}

/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CanvasPath {
  /**
   * Draw an arc path
   *
   * @param { double } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { double } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { double } radius - Radius of the arc.
   * @param { double } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction.
   *     The unit is radian.
   * @param { double } endAngle - The end point of the arc, in radians.
   * @param { boolean } [counterclockwise] - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *     the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  arc(x: double, y: double, radius: double, startAngle: double, endAngle: double, counterclockwise?: boolean): void;
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { double } x1 - The x-axis coordinate of the first control point.
   * @param { double } y1 - The y-axis coordinate of the first control point.
   * @param { double } x2 - The x-axis coordinate of the second control point.
   * @param { double } y2 - The y-axis coordinate of the second control point.
   * @param { double } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  arcTo(x1: double, y1: double, x2: double, y2: double, radius: double): void;
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { double } cp1x - The x-axis coordinate of the first control point.
   * @param { double } cp1y - The y-axis coordinate of the first control point.
   * @param { double } cp2x - The x-axis coordinate of the second control point.
   * @param { double } cp2y - The y-axis coordinate of the second control point.
   * @param { double } x - x-axis coordinate of the end point.
   * @param { double } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bezierCurveTo(cp1x: double, cp1y: double, cp2x: double, cp2y: double, x: double, y: double): void;
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closePath(): void;
  /**
   * Draw an Elliptic Path
   *
   * @param { double } x - x-axis coordinate of the center of the ellipse.
   * @param { double } y - y-axis coordinate of the center of the ellipse.
   * @param { double } radiusX - Radius of the major axis of the ellipse.
   * @param { double } radiusY - Radius of the minor axis of the ellipse.
   * @param { double } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { double } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *     (not angular degrees).
   * @param { double } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } [counterclockwise] - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *     the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ellipse(x: double, y: double, radiusX: double, radiusY: double, rotation: double, startAngle: double,
    endAngle: double, counterclockwise?: boolean): void;
  /**
   * Connect sub-path using straight lines
   *
   * @param { double } x - The x-axis coordinate of the end point of the line.
   * @param { double } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  lineTo(x: double, y: double): void;
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { double } x - The x-axis coordinate of the point.
   * @param { double } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  moveTo(x: double, y: double): void;
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { double } cpx - The x-axis coordinate of the control point.
   * @param { double } cpy - The y-axis coordinate of the control point.
   * @param { double } x - x-axis coordinate of the end point.
   * @param { double } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  quadraticCurveTo(cpx: double, cpy: double, x: double, y: double): void;
  /**
   * Draw Rectangular Paths
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  rect(x: double, y: double, w: double, h: double): void;

  /**
   * Draw rounded Rectangular Paths
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @param { double | Array<double> } [radii] - A number or list specifying the radii of the circular arc
   *     to be used for the corners of the rectangle. The default value is 0.
   * @throws { BusinessError } 103701 - Parameter error. Possible causes: 
   * <br> 1. The param radii is a list that has zero or more than four elements.
   * <br> 2. The param radii contains negative value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  roundRect(x: double, y: double, w: double, h: double, radii?: double | Array<double>): void;
}

/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Path2D extends CanvasPath {
  /**
   * Adds a path according to the specified path variable.
   *
   * @param { Path2D } path - Indicates the path object to be added.
   * @param { Matrix2D } [transform] - Transformation matrix of the new trail. The default value is null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  addPath(path: Path2D, transform?: Matrix2D): void;
  /**
   * Create an empty path object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();
  /**
   * Create an empty path object.
   *
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(unit: LengthMetricsUnit);
  /**
   * Create a copy of a path object
   *
   * @param { Path2D } path - Path object to be copied
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(path: Path2D);
  /**
   * Create a copy of a path object
   *
   * @param { Path2D } path - Path object to be copied
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(path: Path2D, unit: LengthMetricsUnit);
  /**
   * Create a new path according to the description.
   *
   * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(d: string);
  /**
   * Create a new path according to the description.
   *
   * @param { string } description - Indicates the path string that compiles with
   *     the SVG path description specifications.
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(description: string, unit: LengthMetricsUnit);
}

/**
 * Describes an opaque object of a template, which is created using the createPattern() method.
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CanvasPattern {
  /**
   * Adds the matrix transformation effect to the current template.
   *
   * @param { Matrix2D } [transform] - transformation matrix. The default value is null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * Size information of the text
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextMetrics {
  /**
   * Double, the distance from the horizontal line indicated by the textBaseline property to the top of
   *    the rectangular boundary of the rendered text.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly actualBoundingBoxAscent: double;
  /**
   * Double, the distance from the horizontal line indicated by the textBaseline property to the bottom of
   *    the rectangular boundary of the rendered text.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly actualBoundingBoxDescent: double;
  /**
   * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
   *    the left of the text rectangle boundary.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly actualBoundingBoxLeft: double;
  /**
   * Double, parallel to the baseline, distance from the alignment point determined by the textAlign property to
   *    the right of the text rectangle boundary.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly actualBoundingBoxRight: double;
  /**
   * Double, the distance from the horizontal line indicated by the textBaseline property to the alphabetic baseline of
   *    the wireframe.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly alphabeticBaseline: double;
  /**
   * Double, the distance from the horizontal line indicated by the textBaseline property to the top of the
   *    em square in the wireframe.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly emHeightAscent: double;
  /**
   * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
   *    em box in the wireframe.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly emHeightDescent: double;
  /**
   * Double, distance from the horizontal line indicated by the textBaseline property to the top of the
   *    highest rectangle boundary of all fonts rendering text.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly fontBoundingBoxAscent: double;
  /**
   * Double, distance from the horizontal line indicated by the textBaseline property to the bottom of the
   *   rectangular boundary of all fonts rendering text.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly fontBoundingBoxDescent: double;
  /**
   * Double, distance from the horizontal line indicated by the textBaseline property to
   *    the hanging baseline of the wireframe.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly hangingBaseline: double;
  /**
   * Double, distance from the horizontal line indicated by the textBaseline property to
   *    the ideographic baseline of the wireframe.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly ideographicBaseline: double;
  /**
   * Indicates the width of a character string. The value is of the double type.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly width: double;
  /**
   * Indicates the height of a character string. The value is of the double type.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly height: double;
}

/**
 * Bitmap image object that can be drawn onto the current Canvas
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ImageBitmap {
  /**
   * Indicates the height of the CSS pixel unit of ImageData.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get height(): double;
  /**
   * Indicates the width of the CSS pixel unit of ImageData.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get width(): double;
  /**
   * Releases all graphics resources associated with an ImageBitmap.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  close(): void;
  /**
   * Create an ImageBitmap object based on the transferred image path or PixelMap object.
   *
   * @param { PixelMap | string } src - image path or PixelMap object
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(src: PixelMap | string, unit?: LengthMetricsUnit);
}

/**
 * Image data object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ImageData {
  /**
   * Array containing image pixel data
   *
   * @returns { Uint8ClampedArray | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get data(): Uint8ClampedArray | undefined;
  /**
   * Height of the image.
   *
   * @returns { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get height(): int;
  /**
   * Width of the image.
   *
   * @returns { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get width(): int;
  /**
   * Create an ImageData object based on the input parameters.
   *
   * @param { double } width - Width of the image.
   * @param { double } height - Height of the image.
   * @param { Uint8ClampedArray } [data] - Data of the image. 
   *     If this parameter is not specified, the default value is a black rectangular image.
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(width: double, height: double, data?: Uint8ClampedArray, unit?: LengthMetricsUnit);
}

/**
 * This object allows you to set properties when creating a rendering context
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RenderingContextSettings {
  /**
   * Get the status whether anti-aliasing is enabled for canvas. The default value is false.
   *
   * @return { boolean | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get antialias(): boolean | undefined;
  /**
   * Set the status whether anti-aliasing is enabled for canvas. The default value is false.
   *
   * @param { boolean | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set antialias(antialias: boolean | undefined);
  /**
   * Create an RenderingContextSettings object based on the antialias and alpha.
   *
   * @param { boolean } [antialias] - Indicates whether anti-aliasing is enabled for canvas
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(antialias?: boolean);
}

/**
 * Defines the options for rendering context.
 *
 * @interface RenderingContextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RenderingContextOptions {
  /**
   * Indicates whether anti-aliasing is enabled for rendering context.
   * Default value is false, undefined means setting to default value.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  antialias?: boolean;
}

/**
 * Canvas renderer for drawing shapes, text, images and other objects
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CanvasRenderer extends CanvasPath {
  /**
   * Get spacing for letter.
   *
   * @returns { LengthMetrics | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get letterSpacing(): LengthMetrics | string;
  /**
   * Set spacing for letter.
   *
   * @param { LengthMetrics | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set letterSpacing(letterSpacing: LengthMetrics | string);
  /**
   * Get transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   *    If the value is out of range, the assignment is invalid.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get globalAlpha(): double;
  /**
 * Set transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
 *    If the value is out of range, the assignment is invalid.
 *
 * @param { double } globalAlpha - The alpha value that is applied to shapes and images
 *     before they are drawn onto the canvas.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
  set globalAlpha(globalAlpha: double);
  /**
   * Get the type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get globalCompositeOperation(): string;
  /**
   * Set the type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @param { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set globalCompositeOperation(globalCompositeOperation: string);
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { double } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { double } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, dx: double, dy: double): void;
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { double } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { double } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { double } dw - Specifies the drawing width of the image on the target canvas.
   *     The width of the drawn image will be scaled.
   * @param { double } dh - Specifies the drawing height of the image on the target canvas.
   *     The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, dx: double, dy: double, dw: double, dh: double): void;
  /**
   *Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { double } sx - x coordinate of the upper left corner of
   *     the rectangle (cropping) selection box of the image.
   * @param { double } sy - y coordinate of the upper left corner of
   *     the rectangle (cropping) selection box of the image.
   * @param { double } sw - Width of the rectangle (cropping) selection box of the image.
   * @param { double } sh - Height of the rectangle (cropping) selection box of the image.
   * @param { double } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { double } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { double } dw - Specifies the drawing width of the image on the target canvas.
   *     The width of the drawn image will be scaled.
   * @param { double } dh - Specifies the drawing height of the image on the target canvas.
   *     The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, sx: double, sy: double, sw: double, sh: double, dx: double, dy: double,
    dw: double, dh: double): void;
  /**
   * Clear the sub-path list and start a new path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  beginPath(): void;
  /**
   * Sets the currently created path as the current clipping path
   *
   * @param { CanvasFillRule } [fillRule] - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clip(fillRule?: CanvasFillRule): void;
  /**
   * Tailoring according to the specified path
   *
   * @param { Path2D } path - Path to be cut.
   * @param { CanvasFillRule } [fillRule] - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * Fills existing paths according to the current fill style.
   *
   * @param { CanvasFillRule } [fillRule] - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fill(fillRule?: CanvasFillRule): void;
  /**
   * Fills the specified path according to the current fill style
   *
   * @param { Path2D } path - Path to be filled.
   * @param { CanvasFillRule } [fillRule] - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * Draws the specified path according to the current stroke style
   *
   * @param { Path2D } [path] - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stroke(path?: Path2D): void;
  /**
   * Get the attributes specifie the color, gradient, or pattern to use inside shapes. The options are as follows:
   *
   * @returns { string | Color | int | CanvasGradient | CanvasPattern }
   *     string: Color String.
   *     Color: Common enum of Color.
   *     int: Indicates the color with double.
   *     CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   *     CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get fillStyle(): string | Color | int | CanvasGradient | CanvasPattern;
  /**
   * Set the attributes specifie the color, gradient, or pattern to use inside shapes. The options are as follows:
   *
   * @param { string | Color | int | CanvasGradient | CanvasPattern } fillStyle
   *     string: Color String.
   *     Color: Common enum of Color.
   *     int: Indicates the color with double.
   *     CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   *     CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set fillStyle(fillStyle: string | Color | int | CanvasGradient | CanvasPattern);
  /**
   * Get the attributes specifie the color, gradient, or pattern to use for the strokes (outlines) around shapes.
   * The options are as follows:
   *
   * @returns { string | Color | int | CanvasGradient | CanvasPattern }
   *     string: Color String.
   *     Color: Common enum of Color.
   *     int: Indicates the color with double.
   *     CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   *     CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get strokeStyle(): string | Color | int | CanvasGradient | CanvasPattern;
  /**
   * Set the attributes specifie the color, gradient, or pattern to use for the strokes (outlines) around shapes.
   * The options are as follows:
   *
   * @param { string | Color | int | CanvasGradient | CanvasPattern } strokeStyle
   *     string: Color String.
   *     Color: Common enum of Color.
   *     int: Indicates the color with double.
   *     CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   *     CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set strokeStyle(strokeStyle: string | Color | int | CanvasGradient | CanvasPattern);
  /**
   * Creates a linear gradient object that is specified along the parameter coordinates
   *
   * @param { double } x0 - The x-axis coordinate of the start point.
   * @param { double } y0 - The y-axis coordinate of the start point.
   * @param { double } x1 - x-axis coordinate of the end point.
   * @param { double } y1 - y-axis coordinate of the end point.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createLinearGradient(x0: double, y0: double, x1: double, y1: double): CanvasGradient;
  /**
   * Creates a template object using the specified image
   *
   * @param { ImageBitmap } image - Objects as duplicate image sources
   * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
   *     "repeat": Repeated images in both X and Y directions
   *     "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
   *     "repeat-y": Repeated images in the Y axis direction, but not in the X axis direction.
   *     "no-repeat": Non-repeating images in both X and Y directions
   *     "clamp": Replicate the edge color if the shader draws outside of its original bounds.
   *     "mirror": Repeat the shader's image horizontally and vertically,
   *         alternating mirror images so that adjacent images always seam.
   * @returns { CanvasPattern | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;
  /**
   * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
   *
   * @param { double } x0 - The x-axis coordinate of the start circle.
   * @param { double } y0 - The y-axis coordinate of the start circle.
   * @param { double } r0 - Radius of the starting circle.
   * @param { double } x1 - The x-axis coordinate of the end circle.
   * @param { double } y1 - The y-axis coordinate of the end circle.
   * @param { double } r1 - Radius of the end circle.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createRadialGradient(x0: double, y0: double, r0: double, x1: double, y1: double, r1: double): CanvasGradient;
  /**
   * Creates a gradient around a point with given coordinates.
   *
   * @param { double } startAngle - The angle at which to begin the gradient, in radians.
   *     Angle measurements start horizontally the right of the center and move around clockwise.
   * @param { double } x - The x-axis coordinate of the center of the gradient.
   * @param { double } y - The y-axis coordinate of the center of the gradient.
   * @returns { CanvasGradient } A CanvasGradient object that draws a conic gradient around the given coordinates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createConicGradient(startAngle: double, x: double, y: double): CanvasGradient;
  /**
   * Provides filter effects such as blur and grayscale. You can get the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. 
   *     When the value is 0%, the image is completely black.
   *     When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image. 
   *     When the value is 100%, the image is completely gray.
   *     When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image. 
   *     When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative). 
   *     When the value is 100%,the image is completely inverted.
   *     When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. 
   *     When the value is 0%, the image is completely transparent.
   *     When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. 
   *     When the value is 0%, the image is completely un-saturated.
   *     When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). 
   *     When the value is 100%, the image turns completely sepia.
   *     When the value is 0%, there is no change in the image.
   * none: Turn off filter effects.
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get filter(): string;
  /**
   * Provides filter effects such as blur and grayscale. You can set the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
   *     When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image.
   *     When the value is 100%, the image is completely gray.
   *     When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image.
   *     When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative).
   *     When the value is 100%, the image is completely inverted.
   *     When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
   *     When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
   *     When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
   *     When the value is 0%, there is no change in the image.
   * none: Turn off filter effects
   *
   * @param { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set filter(filter: string);
  /**
   * Creates a new, empty ImageData object of the specified size
   *
   * @param { double } sw - Width of the ImageData object.
   * @param { double } sh - Height of the ImageData object.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createImageData(sw: double, sh: double): ImageData;
  /**
   * From an existing ImageData object, copy an object with the same width and height as the image.
   *    The image content is not copied.
   *
   * @param { ImageData } imageData - ImageData object to be copied.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createImageData(imageData: ImageData): ImageData;
  /**
   * Obtains the pixel data of a specified area on the current canvas.
   *
   * @param { double } sx - x coordinate of the upper left corner of the rectangular area
   *     of the image data to be extracted.
   * @param { double } sy - y coordinate of the upper left corner of the rectangular area
   *     of the image data to be extracted.
   * @param { double } sw - The width of the rectangular area of the image data to be extracted.
   * @param { double } sh - The height of the rectangular area of the image data to be extracted.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getImageData(sx: double, sy: double, sw: double, sh: double): ImageData;
  /**
   * Obtains the PixelMap of a specified area on the current canvas.
   *
   * @param { double } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap
   *     to be extracted.
   * @param { double } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap
   *     to be extracted.
   * @param { double } sw - The width of the rectangular area of the PixelMap to be extracted.
   * @param { double } sh - The height of the rectangular area of the PixelMap to be extracted.
   * @returns { PixelMap | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPixelMap(sx: double, sy: double, sw: double, sh: double): PixelMap | undefined;
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imageData - ImageData object to be drawn.
   * @param { double | string } dx - Position offset of the source image data
   *     in the target canvas (the offset in the x-axis direction).
   * @param { double | string } dy - Position offset of the source image data
   *     in the target canvas (the offset in the y-axis direction).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  putImageData(imageData: ImageData, dx: double | string, dy: double | string): void;
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imageData - ImageData object to be drawn.
   * @param { double | string } dx - Position offset of the source image data
   *     in the target canvas (the offset in the x-axis direction).
   * @param { double | string } dy - Position offset of the source image data
   *     in the target canvas (the offset in the y-axis direction).
   * @param { double | string } dirtyX - Position of the upper left corner of the rectangular area
   *     in the source image data.
   *     The default is the upper left corner (x coordinate) of the entire image data.
   * @param { double | string } dirtyY - Position of the upper left corner of the rectangular area
   *     in the source image data.
   *     The default is the upper left corner (y coordinate) of the entire image data.
   * @param { double | string } dirtyWidth - Width of the rectangular area in the source image data.
   *     The default is the width of the image data.
   * @param { double | string } dirtyHeight - Height of the rectangular area in the source image data.
   *     The default is the height of the image data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  putImageData(imageData: ImageData, dx: double | string, dy: double | string, dirtyX: double | string,
    dirtyY: double | string, dirtyWidth: double | string, dirtyHeight: double | string): void;
  /**
   * Get the status whether to smooth the image. The value true indicates that the image is smooth.
   *    The value false indicates that the image is not smooth.
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get imageSmoothingEnabled(): boolean;
  /**
   * Set the status whether to smooth the image. The value true indicates that the image is smooth.
   *    The value false indicates that the image is not smooth.
   *
   * @param { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set imageSmoothingEnabled(imageSmoothingEnabled: boolean);
  /**
   * Get the smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @returns { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get imageSmoothingQuality(): ImageSmoothingQuality;
  /**
   * Set the smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @param { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set imageSmoothingQuality(imageSmoothingQuality: ImageSmoothingQuality);
  /**
   * Get the line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @returns { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get lineCap(): CanvasLineCap;
  /**
   * Set the line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @param { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set lineCap(lineCap: CanvasLineCap);
  /**
   * Get the dotted line offset attribute.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get lineDashOffset(): double;
  /**
   * Set the dotted line offset attribute.
   *
   * @param { double } lineDashOffset - The line dash offset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set lineDashOffset(lineDashOffset: double);
  /**
   * Get the line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @returns { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get lineJoin(): CanvasLineJoin;
  /**
   * Set the line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @param { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set lineJoin(lineJoin: CanvasLineJoin);
  /**
   * Get the line thickness attribute. The value cannot be 0 or a negative double.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get lineWidth(): double;
  /**
   * Set the line thickness attribute. The value cannot be 0 or a negative double.
   *
   * @param { double } lineWidth - The thickness of lines.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set lineWidth(lineWidth: double);
  /**
   * Get the value of this parameter cannot be 0 or a negative double.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get miterLimit(): double;
  /**
   * Set the value of this parameter cannot be 0 or a negative double.
   *
   * @param { double } miterLimit - The miter limit ratio.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set miterLimit(miterLimit: double);
  /**
   * Gets the current segment style.
   *
   * @returns { double[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getLineDash(): double[];
  /**
   * Sets the dashed line mode for line drawing.
   *
   * @param { double[] } segments - A set of doubles that describe the length of alternating drawn lines segments and
   *     spacing (coordinate space units).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setLineDash(segments: double[]): void;
  /**
   * Clears the drawing content of a rectangular area.
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clearRect(x: double, y: double, w: double, h: double): void;
  /**
   * Fills a specified rectangular area
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fillRect(x: double, y: double, w: double, h: double): void;
  /**
   * Stroke Specify Rectangular Area
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeRect(x: double, y: double, w: double, h: double): void;
  /**
   * Get the shadow blur radius. The value cannot be a negative double.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get shadowBlur(): double;
  /**
   * Set the shadow blur radius. The value cannot be a negative double.
   *
   * @param { double } shadowBlur - The amount of blur applied to shadows.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set shadowBlur(shadowBlur: double);
  /**
   * Get the shadow color.
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get shadowColor(): string;
  /**
   * Set the shadow color.
   *
   * @param { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set shadowColor(shadowColor: string);
  /**
   * Get the horizontal offset distance of the shadow.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get shadowOffsetX(): double;
  /**
   * Set the horizontal offset distance of the shadow.
   *
   * @param { double } shadowOffsetX - The distance that shadows will be offset horizontally.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set shadowOffsetX(shadowOffsetX: double);
  /**
   * Get the vertical offset distance of the shadow.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get shadowOffsetY(): double;
  /**
   * Set the vertical offset distance of the shadow.
   *
   * @param { double } shadowOffsetY - The distance that shadows will be offset vertically.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set shadowOffsetY(shadowOffsetY: double);
  /**
   * Top of the stack pop-up state in the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  restore(): void;
  /**
   * Saves the current drawing state to the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  save(): void;
  /**
   * Fills the specified text at the specified location
   *
   * @param { string } text - Text string to be drawn.
   * @param { double } x - The x-axis coordinate of the start point of the text.
   * @param { double } y - The y-axis coordinate of the start point of the text.
   * @param { double } [maxWidth] - Maximum width of the drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fillText(text: string, x: double, y: double, maxWidth?: double): void;
  /**
   * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
   *
   * @param { string } text - Text string to be measured.
   * @returns { TextMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  measureText(text: string): TextMetrics;
  /**
   * Stroke specified text at specified position
   *
   * @param { string } text - Text string to be stroked.
   * @param { double } x - The x-axis coordinate of the start point of the text.
   * @param { double } y - The y-axis-axis coordinate of the start point of the text.
   * @param { double } [maxWidth] - Maximum width of the stroke.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeText(text: string, x: double, y: double, maxWidth?: double): void;
  /**
   * Get the text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @returns { CanvasDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get direction(): CanvasDirection;
  /**
   * Set the text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @param { CanvasDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set direction(direction: CanvasDirection);
  /**
   * Get the font style.
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get font(): string;
  /**
   * Set the font style.
   *
   * @param { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set font(font: string);
  /**
   * Get the text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @returns { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get textAlign(): CanvasTextAlign;
  /**
   * Set the text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @param { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set textAlign(textAlign: CanvasTextAlign);
  /**
   * Get the text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @returns { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get textBaseline(): CanvasTextBaseline;
  /**
   * Set the text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @param { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set textBaseline(textBaseline: CanvasTextBaseline);
  /**
   * Obtains the currently applied transformation matrix.
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getTransform(): Matrix2D;
  /**
   * Resets the current transformation matrix using the identity matrix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  resetTransform(): void;
  /**
   * Adds the effect of a rotation
   *
   * @param { double } angle - The radian of clockwise rotation, 
   *     which can be converted to an angle value using the formula: degree * Math.PI / 180.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  rotate(angle: double): void;
  /**
   * Increases the scaling effect of the X and Y axes.
   *
   * @param { double } x - Horizontal scaling factor
   * @param { double } y - Vertical scaling factor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  scale(x: double, y: double): void;
  /**
   * Adds 2D transformation effects, including rotation, translation, and scaling.
   *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
   *
   * @param { double } a - Horizontal Zoom
   * @param { double } b - Vertical Tilt
   * @param { double } c - Horizontal Tilt
   * @param { double } d - Vertical Zoom
   * @param { double } e - Horizontal movement
   * @param { double } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setTransform(a: double, b: double, c: double, d: double, e: double, f: double): void;
  /**
   * The 2D transformation effect is added. The current transformation matrix is not overwritten and
   *    the transformations are superimposed for multiple times.
   *
   * @param { Matrix2D } [transform] - 2D transformation matrix. For details, see {@link Matrix2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setTransform(transform?: Matrix2D): void;
  /**
   * Adds the 2D transformation effect, including rotation, translation, and scaling,
   *    and overwrites the current transformation matrix.
   *
   * @param { double } a - Horizontal Zoom
   * @param { double } b - Vertical Tilt
   * @param { double } c - Horizontal Tilt
   * @param { double } d - Vertical Zoom
   * @param { double } e - Horizontal movement
   * @param { double } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  transform(a: double, b: double, c: double, d: double, e: double, f: double): void;
  /**
   * Increases the translation effect of the X and Y axes
   *
   * @param { double } x - Horizontal movement distance
   * @param { double } y - Vertical travel distance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  translate(x: double, y: double): void;
  /**
   * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
   *
   * @param { PixelMap } [value] - PixelMap object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setPixelMap(value?: PixelMap): void;
  /**
   * transfer ImageBitmap to content.
   *
   * @param { ImageBitmap } bitmap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;
  /**
   * Allocate a layer for subsequent drawing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  saveLayer(): void;
  /**
   * Remove changes to transform and clip since saveLayer was last called and draw the layer on canvas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  restoreLayer(): void;
  /**
   * Clear the backing buffer, drawing state stack, any defined paths, and styles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reset(): void;
  /**
   * Get the status whether anti-aliasing is enabled for canvas. The value true indicates that anti-aliasing is enabled.
   * The value false indicates that anti-aliasing is disabled. The value undefined indicates that anti-aliasing
   * is determined by the RenderingContextSettings#antialias property. The default value is undefined.
   *
   * @returns { boolean | undefined } Returns the antialias value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  get antialias(): boolean | undefined;
  /**
   * Set the status whether anti-aliasing is enabled for canvas. The value true indicates that anti-aliasing is enabled.
   * The value false indicates that anti-aliasing is disabled. The value undefined indicates that anti-aliasing
   * is determined by the RenderingContextSettings#antialias property. The default value is undefined.
   *
   * @param { boolean | undefined } antialias - The antialias value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  set antialias(antialias: boolean | undefined);
}

/**
 * Draw context object for the Canvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CanvasRenderingContext2D extends CanvasRenderer {
  /**
   * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get height(): double;
  /**
   * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get width(): double;
  /**
   * Frame node of the canvas. The default value is null.
   *
   * @returns { FrameNode | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get canvas(): FrameNode | null;
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } [type] - Image format. The default value is image/png.
   * @param { double } [quality] - If the image format is image/jpeg or image/webp,
   *     you can select the image quality from 0 to 1.
   *     If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  toDataURL(type?: string, quality?: double): string;
  /**
   * Start image analyzer.
   *
   * @param { ImageAnalyzerConfig } config - Image analyzer config.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 110001 - Image analysis feature is not supported.
   * @throws { BusinessError } 110002 - Image analysis is currently being executed.
   * @throws { BusinessError } 110003 - Image analysis is stopped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
  /**
   * Stop image analyzer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stopImageAnalyzer(): void;
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { RenderingContextSettings } [settings] - Drawing attribute.
   *     For details, see {@link RenderingContextSettings}.
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
  /**
   * Register the listener that watches if the canvasrenderingcontext2d attached to the Canvas frameNode.
   *
   * @param { VoidCallback } callback Indicates the listener.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onAttach(callback: VoidCallback): void;
  /**
   * Unregister the listener that watches if the canvasrenderingcontext2d attached to the Canvas frameNode.
   *
   * @param { VoidCallback } [callback] Indicates the listener.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offAttach(callback?: VoidCallback): void;
  /**
   * Register the listener that watches if the canvasrenderingcontext2d detached from the Canvas frameNode.
   *
   * @param { VoidCallback } callback Indicates the listener.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDetach(callback: VoidCallback): void;
  /**
   * Unregister the listener that watches if the canvasrenderingcontext2d detached from the Canvas frameNode.
   *
   * @param { VoidCallback } [callback] Indicates the listener.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offDetach(callback?: VoidCallback): void;

  /**
   * Retrieves a 2D rendering context from the specified drawing context.
   *
   * @param { DrawingRenderingContext } drawingContext - A drawing rendering context.
   * @param { RenderingContextOptions } [options] - options of the 2D rendering context.
   * @returns { CanvasRenderingContext2D } - Returns a 2D rendering context that is bound to
   *     the same canvas component as the input drawingContext.
   * @throws { BusinessError } 103702 - The drawingContext is not bound to a canvas component.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static getContext2DFromDrawingContext(drawingContext: DrawingRenderingContext, options?: RenderingContextOptions): CanvasRenderingContext2D;
}

/**
 * Draw context object for the OffscreenCanvas component.
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } [type] - Image format. The default value is image/png.
   * @param { double } [quality] - If the image format is image/jpeg or image/webp,
   *     you can select the image quality from 0 to 1.
   *     If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  toDataURL(type?: string, quality?: double): string;
  /**
   * transfer the content to ImageBitmap
   *
   * @returns { ImageBitmap | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  transferToImageBitmap(): ImageBitmap | undefined;
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { double } width - the width of the OffscreenCanvas
   * @param { double } height - the height of the OffscreenCanvas
   * @param { RenderingContextSettings } [settings] - Drawing attribute.
   *     For details, see {@link RenderingContextSettings}.
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(width: double, height: double, settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
}
/**
 * Draw an object off the screen. The drawing content is not directly displayed on the screen.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class OffscreenCanvas {
  /**
   * Get the height of the off-screen canvas.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get height(): double;
  /**
   * Set the height of the off-screen canvas.
   *
   * @param { double } height - The height of an off-screen canvas object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set height(height: double);
  /**
   * Get the width of the off-screen canvas.
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get width(): double;
  /**
   * Set the width of the off-screen canvas.
   *
   * @param { double } width - The width of an off-screen canvas object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set width(width: double);
  /**
   * Exports rendered content as an ImageBitmap object
   *
   * @returns { ImageBitmap | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  transferToImageBitmap(): ImageBitmap | undefined;
  /**
   * Creates the context from the current OffscreenCanvas.
   *
   * @param { '2d' } contextType - The context type, only '2d' be supported now.
   *     '2d': Creates a {@link OffscreenCanvasRenderingContext2D} object representing
   *     a two-dimensional rendering context.
   * @param { RenderingContextSettings } [options] - Drawing attribute.
   *     For details, see {@link RenderingContextSettings}.
   * @returns { OffscreenCanvasRenderingContext2D } The rendering context of offscreen canvas,
   *     see {@link OffscreenCanvasRenderingContext2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getContext(contextType: '2d', options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D;
  /**
   * Constructor of the off-screen canvas, which is used to create an off-screen canvas object.
   *
   * @param { double } width - Width of the off-screen canvas.
   * @param { double } height - Height of the off-screen canvas.
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(width: double, height: double, unit?: LengthMetricsUnit);
}

/**
 * Defines DrawingRenderingContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DrawingRenderingContext {
  /**
   * Get size of the DrawingRenderingContext.
   *
   * @returns { Size } The size of the DrawingRenderingContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get size(): Size;
  /**
   * Get canvas of the DrawingRenderingContext.
   *
   * @returns { DrawingCanvas | undefined } The canvas of the DrawingRenderingContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get canvas(): DrawingCanvas | undefined; 
  /**
   * Invalidate the component, which will cause a re-render of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  invalidate(): void;
  /**
   * Create DrawingRenderingContext with setting LengthMetricsUnit.
   *
   * @param { LengthMetricsUnit } [unit] - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(unit?: LengthMetricsUnit);
}

/**
 * Defines the parameters for creating Canvas.
 *
 * @interface CanvasParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CanvasParams {
  /**
   * Indicates the unit mode employed by Canvas during drawing.
   * Default value is LengthMetricsUnit.DEFAULT, undefined means setting to default value.
   *
   * @type { ?LengthMetricsUnit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unit?: LengthMetricsUnit;

  /**
   * AI image analysis options.
   * You can configure the analysis type or bind an analyzer controller through this parameter.
   *
   * @type { ?ImageAIOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * Provides attribute for Canvas.
 *
 * @extends CommonMethod
 * @interface CanvasAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface CanvasAttribute extends CommonMethod {
  /**
   * Event notification after the canvas component is constructed. You can draw the canvas at this time.
   *
   * @param { Callback<DrawingRenderingContext | undefined> | undefined } event - Passing undefined
   *     means unbinding the callback.Returns a { @link DrawingRenderingContext } object
   *     if the canvas is constructed by { @link CanvasParams },
   *     otherwise returns undefined.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onReady(event: Callback<DrawingRenderingContext | undefined> | undefined): this;
  /**
   * Enable image analyzer for Canvas.
   *
   * @param { boolean | undefined } enable - If enable image analyzer for Canvas. The default value is false.
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  enableAnalyzer(enable: boolean | undefined): this;
  /**
   * Call attributeModifier.
   *
   * @param { AttributeModifier<CanvasAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<CanvasAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Canvas is returned when the parameter is transferred.
 *
 * @param { CanvasRenderingContext2D | DrawingRenderingContext } [context] - Canvas context object.
 * @param { ImageAIOptions } [imageAIOptions] - Options for AI analyzer.
 * @returns { CanvasAttribute } The attribute of the Canvas.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Canvas(
  context?: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions?: ImageAIOptions
): CanvasAttribute;

/**
 * Create a canvas component using { @link CanvasParams }.
 * This canvas component will not respond to drawing commands when invisible for memory optimization,
 * You can get a rendering context in { @link onReady }.
 *
 * @param { CanvasParams } params - Parameters for creating Canvas.
 * @returns { CanvasAttribute } The attribute of the Canvas.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Canvas(
  params: CanvasParams
): CanvasAttribute;
