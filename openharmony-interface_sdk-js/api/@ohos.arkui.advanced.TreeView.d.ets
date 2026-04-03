/*
* Copyright (C) 2023-2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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





/**
 * Control style of operation element
 * @enum { TreeListenType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */


/**
 * Control style of operation element
 * @enum { TreeListenType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Control style of operation element
 * @enum { TreeListenType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare enum TreeListenType {
    /**
     * register listener after a node is clicked.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * register listener after a node is clicked.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * register listener after a node is clicked.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    NODE_CLICK = "NodeClick",
    /**
     * register listener after a node is add.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * register listener after a node is add.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * register listener after a node is add.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    NODE_ADD = "NodeAdd",
    /**
     * register listener after a node is delected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * register listener after a node is delected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * register listener after a node is delected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    NODE_DELETE = "NodeDelete",
    /**
     * register listener after a node is modified.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * register listener after a node is modified.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * register listener after a node is modified.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    NODE_MODIFY = "NodeModify",
    /**
     * register listener after a node is moved.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * register listener after a node is moved.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * register listener after a node is moved.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    NODE_MOVE = "NodeMove",
}

/**
 * Declare class TreeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare class TreeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare class TreeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare class TreeListener {
    /**
     * Event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

    /**
     * Event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    once(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

    /**
     * Destroy event.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Destroy event.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Destroy event.
     *
     * @param { type } event Registered Events.
     * @param { callback }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: TreeListenType, callback?: (callbackParam: CallbackParam) => void): void;
}

/**
 * Declare class TreeListenerManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare class TreeListenerManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare class TreeListenerManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare class TreeListenerManager {
    /**
     * Get instance of treeListenerManager.
     * @return treeListenerManager instance
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Get instance of treeListenerManager.
     * @return treeListenerManager instance
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Get instance of treeListenerManager.
     * @return treeListenerManager instance
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    static getInstance(): TreeListenerManager;

    /**
     * Get treeListener.
     * @return treeListener object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Get treeListener.
     * @return treeListener object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Get treeListener.
     * @return treeListener object
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    getTreeListener(): TreeListener;
}

/**
 * Declare TreeView Component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare TreeView Component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare TreeView Component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
@Component
export declare struct TreeView {
    /**
     * Node data source of TreeView.
     * @type TreeController
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Node data source of TreeView.
     * @type TreeController
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Node data source of TreeView.
     * @type TreeController
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    treeController: TreeController;
}

/**
 * Declare CallbackParam
 * @typedef CallbackParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare CallbackParam
 * @typedef CallbackParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare CallbackParam
 * @typedef CallbackParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface CallbackParam {
    /**
     * Get the currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Get the currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Get the currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    currentNodeId: number,

    /**
     * Get the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Get the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Get the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    parentNodeId?: number,

    /**
     * Get the childIndex.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Get the childIndex.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Get the childIndex.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    childIndex?: number
}

/**
 * Declare NodeParam
 * @typedef NodeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare NodeParam
 * @typedef NodeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare NodeParam
 * @typedef NodeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface NodeParam {
    /**
     * Set the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set the parentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    parentNodeId?: number,

    /**
     * Set currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set currentNodeId.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    currentNodeId?: number,

    /**
     * Set catalog whether is folder.
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set catalog whether is folder.
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set catalog whether is folder.
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    isFolder?: boolean;

    /**
     * Set the icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set the icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set the icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    icon?: ResourceStr;

    /**
     * Set the symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    /**
     * Set the symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    symbolIconStyle?: SymbolGlyphModifier;

    /**
     * Set selected icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set selected icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set selected icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    selectedIcon?: ResourceStr;

    /**
     * Set selected symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    /**
     * Set selected symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    symbolSelectedIconStyle?: SymbolGlyphModifier;

    /**
     * Set edit icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set edit icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set edit icon resource.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    editIcon?: ResourceStr;

    /**
     * Set edit symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    /**
     * Set edit symbol resource.
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    symbolEditIconStyle?: SymbolGlyphModifier;

    /**
     * Set primary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set primary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set primary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    primaryTitle?: ResourceStr;

    /**
     * Set secondary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Set secondary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Set secondary title content.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    secondaryTitle?: ResourceStr;

    /**
     * set subcomponent binded on tree item.
     * @type { () => void }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * set subcomponent binded on tree item.
     * @type { () => void }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * set subcomponent binded on tree item.
     * @type { () => void }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    container?: () => void;
}

/**
 * Declare TreeController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare TreeController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * Declare TreeController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare class TreeController {
    /**
     * Delete a node.
     * Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Delete a node.
     * Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Delete a node.
     * Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    removeNode(): void;

    /**
     * Modify the node name.
     * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Modify the node name.
     * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Modify the node name.
     * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    modifyNode(): void;

    /**
     * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
     * addNode is only designed for initialization. It can only be invoked during initialization.
     *
     * A maximum of 50 directory levels can be added.
     *
     * @param nodeParam Configuration information of the newly added node.
     *
     * For details, see the comment description of NodeParam.
     * @return ListTreeNode Tree view component proxy class.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
     * addNode is only designed for initialization. It can only be invoked during initialization.
     *
     * A maximum of 50 directory levels can be added.
     *
     * @param nodeParam Configuration information of the newly added node.
     *
     * For details, see the comment description of NodeParam.
     * @return ListTreeNode Tree view component proxy class.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
     * addNode is only designed for initialization. It can only be invoked during initialization.
     *
     * A maximum of 50 directory levels can be added.
     *
     * @param nodeParam Configuration information of the newly added node.
     *
     * For details, see the comment description of NodeParam.
     * @return ListTreeNode Tree view component proxy class.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    addNode(nodeParam?: NodeParam): TreeController;

    /**
     * This interface is called when a secondaryTitle needs to be updated
     *
     * @param parentId ID of the parent node.
     * @param parentSubTitle secondaryTitle of parent node.
     * @param currentSubtitle secondaryTitle of current node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * This interface is called when a secondaryTitle needs to be updated
     *
     * @param parentId ID of the parent node.
     * @param parentSubTitle secondaryTitle of parent node.
     * @param currentSubtitle secondaryTitle of current node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * This interface is called when a secondaryTitle needs to be updated
     *
     * @param parentId ID of the parent node.
     * @param parentSubTitle secondaryTitle of parent node.
     * @param currentSubtitle secondaryTitle of current node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

    /**
     * After the initialization is complete by calling the addNode interface,
     * call this interface to complete initialization.
     *
     * This interface must be called when you finish initializing the ListTreeView by addNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 10
     */
    /**
     * After the initialization is complete by calling the addNode interface,
     * call this interface to complete initialization.
     *
     * This interface must be called when you finish initializing the ListTreeView by addNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * After the initialization is complete by calling the addNode interface,
     * call this interface to complete initialization.
     *
     * This interface must be called when you finish initializing the ListTreeView by addNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    buildDone(): void;
}