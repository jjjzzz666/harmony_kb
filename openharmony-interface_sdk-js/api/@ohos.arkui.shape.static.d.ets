'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { Position, ResourceColor, Length, SizeOptions } from '@ohos.arkui.component';
/**
 * Interface for shape size properties.
 *
 * @interface ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ShapeSize {
    /**
     * Defines the width of Shape.
     * @type { ? (double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: double | string;
    /**
     * Defines the height of Shape.
     * @type { ? (double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: double | string;
}
/**
 * Interface for RectShape constructor parameters.
 *
 * @extends ShapeSize
 * @interface RectShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RectShapeOptions extends ShapeSize {
    /**
     * Defines the corner radius of the RectShape.
     * @type { ? (double | string | Array<double | string>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radius?: double | string | Array<double | string>;
}
/**
 * Interface for RectShape constructor parameters with separate radius values.
 *
 * @extends ShapeSize
 * @interface RoundRectShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RoundRectShapeOptions extends ShapeSize {
    /**
     * Defines the width of the corner radius for RectShape.
     * @type { ? (double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusWidth?: double | string;
    /**
     * Defines the height of the corner radius for RectShape.
     * @type { ? (double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusHeight?: double | string;
}
/**
 * Interface for PathShape constructor parameters.
 *
 * @interface PathShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PathShapeOptions {
    /**
     * Defines the commands for drawing the PathShape.
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    commands?: string;
}
/**
 * Common shape method class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CommonShapeMethod {
    /**
     * Sets coordinate offset relative to the layout completion position.
     *
     * @param { Position } offset
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset(offset: Position): this;
    /**
     * Sets the fill color of the shape.
     *
     * @param { ResourceColor } color
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fill(color: ResourceColor): this;
    /**
     * Sets the position of the shape.
     *
     * @param { Position } position
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position(position: Position): this;
}
/**
 * Base shape class
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BaseShape extends CommonShapeMethod {
    /**
     * Sets the width of the shape.
     *
     * @param { Length } width
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width(width: Length): this;
    /**
     * Sets the height of the shape.
     *
     * @param { Length } height
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height(height: Length): this;
    /**
     * Sets the size of the shape.
     *
     * @param { SizeOptions } size
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size(size: SizeOptions): this;
}
/**
 * Defines a rect drawing class.
 *
 * @extends BaseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RectShape extends BaseShape {
    /**
     * Constructor.
     *
     * @param { RectShapeOptions | RoundRectShapeOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: RectShapeOptions | RoundRectShapeOptions);
    /**
     * Sets the width of the corner radius for RectShape.
     *
     * @param { double | string } rWidth
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusWidth(rWidth: double | string): this;
    /**
     * Sets the height of the corner radius for RectShape.
     *
     * @param { double | string } rHeight
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusHeight(rHeight: double | string): this;
    /**
     * Sets the corner radius for RectShape.
     *
     * @param { double | string | Array<double | string> } radius
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radius(radius: double | string | Array<double | string>): this;
}
/**
 * Defines a circle drawing class.
 *
 * @extends BaseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CircleShape extends BaseShape {
    /**
     * Constructor.
     *
     * @param { ShapeSize } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: ShapeSize);
}
/**
 * Defines an ellipse drawing class.
 *
 * @extends BaseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class EllipseShape extends BaseShape {
    /**
     * Constructor.
     *
     * @param { ShapeSize } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: ShapeSize);
}
/**
 * Defines a path drawing class.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PathShape extends CommonShapeMethod {
    /**
     * Constructor.
     *
     * @param { PathShapeOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: PathShapeOptions);
    /**
     * Sets the commands for drawing the PathShape.
     *
     * @param { string } commands
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    commands(commands: string): this;
}
