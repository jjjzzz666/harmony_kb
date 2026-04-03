/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

/**
 * Controls the style types of GridObjectSortComponent.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
 /**
 * Controls the style types of GridObjectSortComponent.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop 
 */
export declare enum GridObjectSortComponentType {
  /**
   * The GridObjectSortComponent image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * The GridObjectSortComponent image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IMAGE_TEXT = "image_text",

  /**
   * The GridObjectSortComponent text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * The GridObjectSortComponent text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TEXT = "text"
}

/**
 * Declaration of the GridObjectSortComponent item.
 * @interface GridObjectSortComponentIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
 /**
 * Declaration of the GridObjectSortComponent item.
 * @interface GridObjectSortComponentIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentItem {
  /**
   * id of GridObjectSortComponent item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * id of GridObjectSortComponent item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id: number | string;

  /**
   * GridObjectSortComponent item text.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * GridObjectSortComponent item text.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: ResourceStr;

  /**
   * selected of GridObjectSortComponent item, true is show area, false is add area.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * selected of GridObjectSortComponent item, true is show area, false is add area.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selected: boolean;

  /**
   * order of GridObjectSortComponentItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * order of GridObjectSortComponentItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  order: number;

  /**
   * image resource path of the GridObjectSortComponent item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * image resource path of the GridObjectSortComponent item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url?: ResourceStr;

  /**
   * symbol of the GridObjectSortComponent item.
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  /**
   * symbol of the GridObjectSortComponent item.
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * GridObjectSortComponentOptions of GridObjectSortComponent.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
 /**
 * GridObjectSortComponentOptions of GridObjectSortComponent.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentOptions {
  /**
   * Configuration GridObjectSortComponent type.
   * @type { GridObjectSortComponentType }
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Configuration GridObjectSortComponent type.
   * @type { GridObjectSortComponentType }
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type?: GridObjectSortComponentType;

  /**
   * The size of the GridObjectSortComponent image.
   * @type { ?number | ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * The size of the GridObjectSortComponent image.
   * @type { ?number | ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageSize?: number | Resource;

  /**
   * The title displayed in the unedited state of the  GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * The title displayed in the unedited state of the  GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  normalTitle?: ResourceStr;

  /**
   * The title displayed in the GridObjectSortComponent edit state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * The title displayed in the GridObjectSortComponent edit state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editTitle?: ResourceStr;

  /**
   * Display Area Title, First subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Display Area Title, First subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showAreaTitle?: ResourceStr;

  /**
   * Add Zone Title, second subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Add Zone Title, second subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addAreaTitle?: ResourceStr;
}

/**
 * Declare struct GridObjectSortComponent.
 * @struct { GridObjectSortComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
 /**
 * Declare struct GridObjectSortComponent.
 * @struct { GridObjectSortComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
@Component
export declare struct GridObjectSortComponent {
  /**
   * Component types and parameters of the GridObjectSortComponent.
   * @type { GridObjectSortComponentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Component types and parameters of the GridObjectSortComponent.
   * @type { GridObjectSortComponentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  options: GridObjectSortComponentOptions;

  /**
   * Data list of GridObjectSortComponent.
   * @type { Array<GridObjectSortComponentItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Data list of GridObjectSortComponent.
   * @type { Array<GridObjectSortComponentItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dataList: Array<GridObjectSortComponentItem>;

  /**
   * Callback when Obtain edited data.
   * @type { (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Callback when Obtain edited data.
   * @type { (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void;

  /**
   * Cancel callback for saving data.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Cancel callback for saving data.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCancel: () => void;

  /**
   * Build function of GridObjectSortComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
   * Build function of GridObjectSortComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  build(): void;
}