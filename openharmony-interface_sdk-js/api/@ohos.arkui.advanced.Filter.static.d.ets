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
import { Component } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
/**
 * Declare FilterType
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum FilterType {
    /**
     * The multi_line_filter type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MULTI_LINE_FILTER = 0,
    /**
     * The list_filter type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIST_FILTER = 1
}
/**
 * This parameter is used to define the input of each filtering dimension.
 * @typedef FilterParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FilterParams {
    /**
     * filter item name.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;
    /**
     * filter options.
     * @type { Array<ResourceStr> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    options: Array<ResourceStr>;
}
/**
 * This parameter specifies the selection result of a filtering dimension.
 * The index starts from 0.
 * @typedef FilterResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FilterResult {
    /**
     * result name.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;
    /**
     * result index.
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * result value.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
}

/**
 * Callback method after a user clicks a filter item.
 * @typedef { function } OnFilterChangedCallback
 * @param { Array<FilterResult> } filterResults - The result of filter.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type OnFilterChangedCallback = (filterResults: Array<FilterResult>) => void;

/**
 * Declare Filter.The Filter is used in scenarios where multi-dimensional filtering is required.
 * @struct { Filter }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct Filter {
    /**
     * Container in the user-defined filtering result display area.
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    container: () => void;
    /**
     * Multi-dimensional filtering parameters.
     * @type { Array<FilterParams> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    multiFilters: Array<FilterParams>;
    /**
     * FilterParams, Additional filter item parameter. The filter item name is displayed and can be deselected.
     * @type { ?FilterParams }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    additionFilters?: FilterParams;
    /**
     * FilterParams, Callback method after a user clicks a filter item.
     * @type { OnFilterChangedCallback } FilterType, Filter display style type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFilterChanged: OnFilterChangedCallback;
    /**
     * FilterType, Filter display style type.
     * @type { ?FilterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    filterType?: FilterType;
    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}