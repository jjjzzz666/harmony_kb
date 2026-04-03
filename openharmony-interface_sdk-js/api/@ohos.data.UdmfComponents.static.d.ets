'use static';

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
 * @kit ArkData
 */
import uniformDataStruct from '@ohos.data.uniformDataStruct';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component, Builder } from '@ohos.arkui.component';

/**
 * Enumerates the form card types.
 *
 * @enum { int }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 23 static
 */
declare enum FormType {
  /**
   * Big form card, with fixed size of 4 x 4.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_BIG = 0,

  /**
   * Medium-sized form card, with fixed size of 4 x 2.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_MID = 1,

  /**
   * Small form card, with fixed size of 2 x 1.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  TYPE_SMALL = 2
}

/**
 * Defines a content form card.
 *
 * @struct { ContentFormCard }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
declare struct ContentFormCard {
  /**
   * Data of the form card.
   *
   * @type { uniformDataStruct.ContentForm }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  contentFormData: uniformDataStruct.ContentForm;

  /**
   * Type of the form card.
   *
   * @type { FormType }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formType: FormType;

  /**
   * Width of the content form card. The unit of measurement is vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formWidth?: double;

  /**
   * Height of the content form card. The unit of measurement is vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  formHeight?: double;

  /**
   * Callback to be invoked when the form card is tapped.
   *
   * @type { ?Function }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  handleOnClick?: Function;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

export { ContentFormCard, FormType };
