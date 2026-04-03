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
import { CommonMethod, CommonConfiguration, ContentModifier, Bindable } from './common';
import { Axis, CrownSensitivity } from './enums';
import { ResourceStr, ResourceColor, Length, Dimension, SizeOptions } from './units';
import { CircleShape, EllipseShape, PathShape, RectShape } from '../../@ohos.arkui.shape';
import { LinearGradient } from './dataPanel';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { ComponentContent } from '../ComponentContent';
import { ColorMetrics } from '../Graphics';
/**
 * Style of the slider thumb and track.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SliderStyle {
    /**
     * The thumb is on the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    OutSet,
    /**
     * The thumb is in the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    InSet,
    /**
     * There is no thumb.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE
}
/**
 * State triggered by the event.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SliderChangeMode {
    /**
     * The user touches or clicks the thumb.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Begin,
    /**
     * The user is dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Moving,
    /**
     * The user stops dragging the slider by lifting their finger or releasing the mouse device.
     * <p><strong>NOTE</strong>:
     * <br>The trigger occurs when an invalid value is restored to the default value, that is, when the value is set to
     * less than min or greater than max.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    End,
    /**
     * The user moves the thumb by touching or clicking the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Click
}
/**
 * Interaction mode between the user and the slider.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SliderInteraction {
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves as soon as the mouse or
     * finger is pressed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SLIDE_AND_CLICK,
    /**
     * Users are not allowed to move the slider by touching the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SLIDE_ONLY,
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves when the mouse is released or
     * finger is lifted, if the release/lift position coincides with the screen press position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SLIDE_AND_CLICK_UP = 2
}
/**
 * Defines the callback type used in SlideRange.
 * <p><strong>NOTE</strong>:
 * <br>Currently, this API takes effect only when MIN ≤ from ≤ to ≤ MAX (the values of MIN and MAX do not depend on
 * the values set, but on the actual values that take effect). You can set either from or to, or you can set both from
 * and to. When the API is effective, if the set from value is between the adjacent multiples of step, then from takes
 * the value of the left interval multiple of step or MIN as the corrected value. When the API is effective, if the set
 * to value is between the adjacent multiples of step, then to takes the value of the right interval multiple of step
 * or MAX as the corrected value. After from and to have taken their corrected values, when value is undefined or null,
 * it takes the same value as from; when value is a number type, and if value ≤ from, then it takes from;
 * if value > to, then it takes to.
 * </p>
 *
 * @interface SlideRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SlideRange {
    /**
     * Start of the slide range.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    from?: double;
    /**
     * End of the slide range.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    to?: double;
}
/**
 * Parameters of the slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderOptions {
    /**
     * Current value of Slider.
     *
     * @type { ?(double| undefined | Bindable<double>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value?: double | undefined | Bindable<double>;
    /**
     * Minimum value.
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    min?: double;
    /**
     * Maximum value.
     * <p><strong>NOTE</strong>:
     * <br>If the value of min is greater than or equal to the value of max, the min value defaults to 0, and the max
     * value defaults to 100. If the value is not within the [min, max] range, the value of min or max is used,
     * whichever is closer.
     * </p>
     *
     * @type { ?double }
     * @default 100
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    max?: double;
    /**
     * Step of the slider.
     * <p><strong>NOTE</strong>:
     * <br>If this parameter is set to a value less than 0 or greater than the value of max, the default value is used.
     * </p>
     *
     * @type { ?double }
     * @default 1 - Value range: [0.01, max - min]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    step?: double;
    /**
     * Style of the slider thumb and track.
     *
     * @type { ?SliderStyle }
     * @default SliderStyle.OutSet
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: SliderStyle;
    /**
     * Whether the slider moves horizontally or vertically.
     *
     * @type { ?Axis }
     * @default Axis.Horizontal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: Axis;
    /**
     * Whether the slider values are reversed. By default, the values increase from left to right for a horizontal
     * slider and from top to bottom for a vertical slider.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    reverse?: boolean;
}
/**
 * Enumerates the types of the slider in the block direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SliderBlockType {
    /**
     * Round slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT,
    /**
     * Slider with an image background.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IMAGE,
    /**
     * Slider in a custom shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SHAPE
}
/**
 * Describes the style of the slider in the block direction.
 *
 * @interface SliderBlockStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderBlockStyle {
    /**
     * Type of the slider in the block direction.
     *
     * @type { SliderBlockType }
     * @default SliderBlockType.DEFAULT - indicating the round slider.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: SliderBlockType;
    /**
     * Image resource of the slider. The area size for displaying the image is subject to the blockSize attribute.
     * Be mindful of the image size when selecting an image.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    image?: ResourceStr;
    /**
     * Custom shape of the slider.
     *
     * @type { ?(CircleShape | EllipseShape | PathShape | RectShape) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shape?: CircleShape | EllipseShape | PathShape | RectShape;
}
/**
 * Defines the callback type used in SliderConfiguration.
 *
 * @typedef {function} SliderTriggerChangeCallback
 * @param { double } value - Current progress.
 * @param { SliderChangeMode } mode - State triggered by the event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type SliderTriggerChangeCallback = (value: double, mode: SliderChangeMode) => void;
/**
 * You need a custom class to implement the ContentModifier API.
 *
 * @extends CommonConfiguration<SliderConfiguration>
 * @interface SliderConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderConfiguration extends CommonConfiguration<SliderConfiguration> {
    /**
     * Current progress.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: double;
    /**
     * Minimum value.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    min: double;
    /**
     * Maximum value.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    max: double;
    /**
     * Step of the slider.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    step: double;
    /**
     * Triggers slider changes.
     *
     * @type { SliderTriggerChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    triggerChange: SliderTriggerChangeCallback;
}

/**
 * ColorMetricsStop type
 * 
 * @typedef { object } ColorMetricsStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ColorMetricsStop {
  /**
   * Color property.
   * 
   * @type { ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color: ColorMetrics;

  /**
   * the color offset. value range [0, 1].
   * 
   * **NOTE**
   * If the value specified is less than 0, the value **0** is used.
   * If the value specified is greater than 1, the value **1** is used.
   * 
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset: Length;
}

/**
 * ColorMetricsLinearGradient class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ColorMetricsLinearGradient {
    /**
     * Constructor.
     *
     * @param { ColorMetricsStop[] } colorStops - the LinearGradient constructor parameter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(colorStops: ColorMetricsStop[]);
}

/**
 * Defines the accessibility information of slider step point.
 *
 * @interface SliderStepItemAccessibility
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SliderStepItemAccessibility {
    /**
     * Set the accessibility text of the slider step point. The default value is an empty string.
     *
     * @param { ?ResourceStr } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    text?: ResourceStr;
}
/**
 * Defines the accessibility information of slider step point.
 *
 * @interface SliderShowStepOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SliderShowStepOptions {
    /**
     * Map key value range: [0, INT32_MAX]. When the key value is set to a negative double or a decimal,
     * the setting does not take effect.
     *
     * @param { ?Map<double, SliderStepItemAccessibility> } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stepsAccessibility?: Map<double, SliderStepItemAccessibility>;
}
/**
 * Defines the options for customizing the accessibility of content within a slider.
 * These options can be used to enhance the user experience for assistive technologies.
 *
 * @interface SliderCustomContentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderCustomContentOptions {
    /**
     * The text used for accessibility purposes. This text will be read by screen readers
     * to provide a more descriptive label for the slider content. The default value is an empty string.
     *
     * @param { ?ResourceStr } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    accessibilityText?: ResourceStr;
    /**
     * A more detailed description for accessibility. This can provide additional context
     * about the slider content for users relying on assistive technologies.
     * The default value is the device's default accessibility prompt.
     *
     * @type { ?ResourceStr } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    accessibilityDescription?: ResourceStr;
    /**
     * The accessibility level of the slider content. This could be used to indicate the importance
     * or priority of the content for assistive technologies.
    
     *
     * @param { ?string } value
     * @default'auto'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    accessibilityLevel?: string;
    /**
     * Indicates whether the slider content should be treated as an accessibility group.
     *
     * @param { ?boolean } value
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    accessibilityGroup?: boolean;
}
/**
 * Options used for customizing the prefix part of the slider.
 * It extends the SliderCustomContentOptions to inherit accessibility customization options.
 *
 * @extends SliderCustomContentOptions
 * @interface SliderPrefixOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderPrefixOptions extends SliderCustomContentOptions {
}
/**
 * Options used for customizing the suffix part of the slider.
 * It extends the SliderCustomContentOptions to inherit accessibility customization options.
 *
 * @extends SliderCustomContentOptions
 * @interface SliderSuffixOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderSuffixOptions extends SliderCustomContentOptions {
}
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod
 * @interface SliderAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SliderAttribute extends CommonMethod {
    /**
     * Set the color of the slider bar, supporting gradient colors.
     * @param { ResourceColor | LinearGradient | undefined } value - the color of the slider bar.
     *     Undefined indicates using the default color.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default blockColor(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor | LinearGradient | undefined } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default trackColor(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor | LinearGradient | undefined } selectedColor
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedColor(selectedColor: ResourceColor | LinearGradient | undefined): this;
    /**
     * Set whether to display step size.
     *
     * @param { boolean | undefined } value - Default value is false, undefined means set to default value.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default showSteps(value: boolean | undefined): this;
    /**
     * Set whether to display step size, and support setting accessibility text configuration parameters.
     *
     * @param { boolean | undefined } value - Default value is false, undefined means set to default value.
     * @param { SliderShowStepOptions | undefined } [options] - Set the accessibility text on slider points.
     *     undefined means set to default value.
     * @returns{ SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default showSteps(value: boolean | undefined, options?: SliderShowStepOptions | undefined): this;
    /**
     * Set the prefix part of the slider.
     * The prefix is the content that appears before the main slider component.
     *
     * @param { ComponentContent<T> | undefined } content - Custom components that will be displayed as the prefix.
     *     This can be any valid custom UI component structure. Undefined indicates that no prefix is set.
     * @param { SliderPrefixOptions | undefined } [options] - Optional options for customizing the prefix.
     *     These options can include accessibility settings.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default prefix<T extends Object>(content: ComponentContent<T> | undefined, options?: SliderPrefixOptions | undefined): this;
    /**
     * Set the suffix part of the slider.
     * The suffix is the content that appears after the main slider component.
     *
     * @param { ComponentContent<T> | undefined } content - Custom components that will be displayed as the suffix.
     *     This can be any valid custom UI component structure. Undefined indicates that no suffix is set.
     * @param { SliderSuffixOptions | undefined } [options] - Optional options for customizing the suffix.
     *     These options can include accessibility settings.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default suffix<T extends Object>(content: ComponentContent<T> | undefined, options?: SliderSuffixOptions | undefined): this;
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean | undefined } value - Whether to display the bubble.
     * @param { ResourceStr | undefined } [content] - Text content in the bubble. If the content is not specified,
     *     the current percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default showTips(value: boolean | undefined, content?: ResourceStr | undefined): this;
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length | undefined } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default trackThickness(value: Length | undefined): this;
    /**
     * Triggered when the slider is dragged or clicked.
     * <p><strong>NOTE</strong>:
     * <br>The Begin and End states are triggered when the slider is clicked with a gesture. The Moving and Click states
     * are triggered when the value of value changes. If the coherent action is a drag action, the Click state will
     * not be triggered.
     * </p>
     *
     * @param { ((value: double, mode: SliderChangeMode) => void) | undefined } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: ((value: double, mode: SliderChangeMode) => void) | undefined): this;
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor | undefined } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default blockBorderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the border width of block is set.
     *
     * @param { Length | undefined } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default blockBorderWidth(value: Length | undefined): this;
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor | undefined } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stepColor(value: ResourceColor | undefined): this;
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length | undefined } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default trackBorderRadius(value: Length | undefined): this;
    /**
     * Called when the radius of selected part is set.
     *
     * @param { Dimension | undefined } value - the radius of selected part.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedBorderRadius(value: Dimension | undefined): this;
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions | undefined } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default blockSize(value: SizeOptions | undefined): this;
    /**
     * Sets the style of the slider in the block direction.
     *
     * @param { SliderBlockStyle | undefined } value - Style of the slider in the block direction.
     *     <br>Default value is SliderBlockType.DEFAULT, indicating the round slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default blockStyle(value: SliderBlockStyle | undefined): this;
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length | undefined } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stepSize(value: Length | undefined): this;
    /**
     * Sets the interaction mode between the user and the slider.
     *
     * @param { SliderInteraction | undefined } value - Interaction mode between the user and the slider.
     *     <br>Default value is SliderInteraction.SLIDE_AND_CLICK.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default sliderInteractionMode(value: SliderInteraction | undefined): this;
    /**
     * Sets the min value when Slider response to drag event.
     *
     * @param { double | undefined } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default minResponsiveDistance(value: double | undefined): this;
    /**
     * Creates a content modifier.
     *
     * @param { ContentModifier<SliderConfiguration> | undefined } modifier - Content modifier to apply to the slider.
     *     modifier: content modifier. You need a custom class to implement the ContentModifier API.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<SliderConfiguration> | undefined): this;
    /**
     * Set the valid slidable range.
     *
     * @param { SlideRange | undefined } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default slideRange(value: SlideRange | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { CrownSensitivity | undefined } sensitivity - The sensitivity of rotating crown, default value is
     *     { MEDIUM }.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean | undefined } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableHapticFeedback(enabled: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<SliderAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<SliderAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * Set the track color of the slider using the color metrics.
     *
     * @param { ColorMetricsLinearGradient | undefined } color - Track color of the slider using the color metrics.
     *     Undefined indicates using the default color.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackColorMetrics(color: ColorMetricsLinearGradient | undefined): this;
}

/**
 * Defines Slider Component.
 *
 * @param { SliderOptions } [options] - The options
 * @param { CustomBuilder } [content_] - container
 * @returns { SliderAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Slider(
    options?: SliderOptions, 
    content_?: CustomBuilder,
): SliderAttribute
