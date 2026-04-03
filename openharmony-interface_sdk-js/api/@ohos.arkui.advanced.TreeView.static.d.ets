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
import { ResourceStr } from '@ohos.arkui.component';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * Control style of operation element
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum TreeListenType {
    /**
     * register listener after a node is clicked.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NODE_CLICK = 'NodeClick',
    /**
     * register listener after a node is add.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NODE_ADD = 'NodeAdd',
    /**
     * register listener after a node is delected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NODE_DELETE = 'NodeDelete',
    /**
     * register listener after a node is modified.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NODE_MODIFY = 'NodeModify',
    /**
     * register listener after a node is moved.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NODE_MOVE = 'NodeMove',
}
/**
 * Callback method of Event registration and processing.
 *
 * @typedef { function } OnChangedCallback
 * @param { CallbackParam } callbackParam - The result of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 * @noninterop
 */
declare type OnChangedCallback = (callbackParam: CallbackParam) => void;
/**
 * Declare class TreeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeListener {
    /**
     * Event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { TreeListenType } type - Registered Events.
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public on(type: TreeListenType, callback: OnChangedCallback): void;
    /**
     * Event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { TreeListenType } type - Registered Events.
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public once(type: TreeListenType, callback: OnChangedCallback): void;
    /**
     * Destroy event.
     *
     * @param { TreeListenType } type - Registered Events.
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public off(type: TreeListenType, callback?: OnChangedCallback): void;
}
/**
 * Declare class TreeListenerManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeListenerManager {
    /**
     * Get instance of treeListenerManager.
     * @returns { TreeListenerManager } Returns the treeListenerManager instance.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static getInstance(): TreeListenerManager;
    /**
     * Get treeListener.
     * @returns { TreeListener } Returns the treeListener object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public getTreeListener(): TreeListener;
}
/**
 * Declare TreeView Component
 * @struct { TreeView }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct TreeView {
    /**
     * Node data source of TreeView.
     * @type { TreeController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    treeController: TreeController;
    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder build(): void;
}
/**
 * Declare CallbackParam
 * @typedef CallbackParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface CallbackParam {
    /**
     * Get the currentNodeId.
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    currentNodeId: int,
    /**
     * Get the parentNodeId.
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentNodeId?: int,
    /**
     * Get the childIndex.
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    childIndex?: int
}
/**
 * Declare NodeParam
 * @typedef NodeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface NodeParam {
    /**
     * Set the parentNodeId.
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    parentNodeId?: int,
    /**
     * Set currentNodeId.
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    currentNodeId?: int,
    /**
     * Set catalog whether is folder.
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isFolder?: boolean;
    /**
     * Set the icon resource.
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Set the symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIconStyle?: SymbolGlyphModifier;
    /**
     * Set selected icon resource.
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selectedIcon?: ResourceStr;
    /**
     * Set selected symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolSelectedIconStyle?: SymbolGlyphModifier;
    /**
     * Set edit icon resource.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    editIcon?: ResourceStr;
    /**
     * Set edit symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolEditIconStyle?: SymbolGlyphModifier;
    /**
     * Set primary title content.
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primaryTitle?: ResourceStr;
    /**
     * Set secondary title content.
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryTitle?: ResourceStr;
    /**
     * set subcomponent binded on tree item.
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    container?: () => void;
}
/**
 * Declare TreeController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TreeController {
    /**
     * Delete a node.
     * Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted
     * nodes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public removeNode(): void;
    /**
     * Modify the node name.
     * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public modifyNode(): void;
    /**
     * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
     * addNode is only designed for initialization. It can only be invoked during initialization.
     * A maximum of 50 directory levels can be added.
     * For details, see the comment description of NodeParam.
     *
     * @param { NodeParam } [nodeParam] Configuration information of the newly added node.
     * @returns { TreeController } ListTreeNode Tree view component proxy class.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public addNode(nodeParam?: NodeParam): TreeController;
    /**
     * This interface is called when a secondaryTitle needs to be updated
     *
     * @param { int } parentId - ID of the parent node.
     * @param { ResourceStr } parentSubTitle - secondaryTitle of parent node.
     * @param { ResourceStr } currentSubtitle - secondaryTitle of current node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public refreshNode(parentId: int, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;
    /**
     * After the initialization is complete by calling the addNode interface,
     * call this interface to complete initialization.
     * This interface must be called when you finish initializing the ListTreeView by addNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public buildDone(): void;
}
