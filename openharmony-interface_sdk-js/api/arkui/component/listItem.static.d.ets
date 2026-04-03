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
import { CommonMethod, Bindable } from './common';
import { CustomBuilder } from './builder';
import { Length } from './units';
import { ComponentContent, ComponentContentBase } from '../ComponentContent';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
import { FrameNode } from '../FrameNode';
/**
 * Sliding effect
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwipeEdgeEffect {
    /**
     * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Spring,
    /**
     * Sliding to the edge has no effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    None
}
/**
 * Declare enum SwipeActionState.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwipeActionState {
    /**
     * Collapsed type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    COLLAPSED,
    /**
     * EXPANDED type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EXPANDED,
    /**
     * Action type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ACTIONING
}

/**
 * Declare enum ListItemSwipeActionDirection.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum ListItemSwipeActionDirection {
    /**
     * When the List direction is vertical, it indicates the left in LTR mode and right in RTL mode.
     * When the List direction is horizontal, it indicates the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    START = 0,
    /**
     * When the List direction is vertical, it indicates the right in LTR mode and left in RTL mode.
     * When the List direction is horizontal, it indicates the bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    END = 1
}

/**
 * The swipe action manager.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ListItemSwipeActionManager {
    /**
     * Expand the swipe action
     *
     * @param { FrameNode } node - The ListItem FrameNode.
     * @param { ListItemSwipeActionDirection } direction- The direction to expand.
     * @throws { BusinessError } 100023 - The component type of the node is incorrect.
     * @throws { BusinessError } 106203 - The node not mounted to component tree.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void;

    /**
     * Collapse the swipe action
     *
     * @param { FrameNode } node - The ListItem FrameNode.
     * @throws { BusinessError } 100023 - The component type of the node is incorrect.
     * @throws { BusinessError } 106203 - The node not mounted to component tree.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    static collapse(node: FrameNode): void;
}

/**
 * Defines the swipe action item for SwipeActionOptions.
 *
 * @interface SwipeActionItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwipeActionItem {
    /**
     * An action item that appears when a list item slides right (when list direction is Vertical) or
     * slides down (when list direction Horizontal).
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    builder?: CustomBuilder;
    /**
      * An action item that appears when a list item slides right (when list direction is Vertical) or
      * slides down (when list direction Horizontal).
      *
      * @type { ?ComponentContentBase }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 23 static
      */
    builderComponent?: ComponentContentBase;
    /**
     * Defines distance for the delete area.
     *
     * @type { ?Length }
     * @default 56vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    actionAreaDistance?: Length;
    /**
     * Called when ListItem need to be deleted.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction?: () => void;
    /**
     * Called when swipe entry delete area.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onEnterActionArea?: () => void;
    /**
     * Called when swipe exit delete area.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onExitActionArea?: () => void;
    /**
     * Called when component swipe action state changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onStateChange?: (state: SwipeActionState) => void;
}
/**
 * Defines the SwipeActionOption of swipeAction attribute method.
 *
 * @interface SwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwipeActionOptions {
    /**
     * An action item that appears when a list item slides right (when list direction is Vertical) or
     * slides down (when list direction Horizontal).
     *
     * @type { ?(CustomBuilder | SwipeActionItem) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: CustomBuilder | SwipeActionItem;
    /**
     * An action item that appears when a list item slides left (when list direction is Vertical) or
     * slides up (when list direction Horizontal).
     *
     * @type { ?(CustomBuilder | SwipeActionItem) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: CustomBuilder | SwipeActionItem;
    /**
     * Sets whether sliding to a boundary has a spring effect.
     *
     * @type { ?SwipeEdgeEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    edgeEffect?: SwipeEdgeEffect;
    /**
     * Called when swipe action offset changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onOffsetChange?: (offset: double) => void;
}
/**
 * Defines the list item style.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ListItemStyle {
    /**
     * Show custom style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 0,
    /**
     * Show default style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CARD = 1
}
/**
 * Defines the list item options.
 *
 * @interface ListItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ListItemOptions {
    /**
     * Describes the ListItem style.
     *
     * @type { ?ListItemStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: ListItemStyle;
}

/**
 * The ListItemAttribute.
 * 
 * @extends CommonMethod
 * @interface ListItemAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ListItemAttribute extends CommonMethod {
    /**
     * Called when judging whether it is selectable.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectable(value: boolean | undefined): this;
    /**
     * Called when judging whether it is selected.
     * This parameter supports $ for two-way binding of variables.
     *
     * @param { boolean | Bindable<boolean> | undefined } value - if the listItem is selected.
     * @returns { this } the attribute of the listItem.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selected(value: boolean | Bindable<boolean> | undefined): this;
    /**
     * Sets the action item that appears when the list item slides in the cross axis direction of the list.
     *
     * @param { SwipeActionOptions | undefined } value - items defines in the SwipeActionOption.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default swipeAction(value: SwipeActionOptions | undefined): this;
    /**
     * Called when the listItem is selected.
     *
     * @param { function | undefined } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSelect(event: ((isSelected: boolean) => void) | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ListItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ListItem Component.
 *
 * @param { ListItemOptions } [value]
 * @param { CustomBuilder } [content_]
 * @returns { ListItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function ListItem(
    value?: ListItemOptions, 
    content_?: CustomBuilder,
): ListItemAttribute