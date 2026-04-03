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
 * @kit ArkData
 */
import uniformDataStruct from '@ohos.data.uniformDataStruct';

/**
 * Enumerates the form card types.
 *
 * @enum { int }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 20 dynamic
 */
declare enum FormType {
  /**
   * Big form card, with fixed size of 4 x 4.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  TYPE_BIG = 0,

  /**
   * Medium-sized form card, with fixed size of 4 x 2.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  TYPE_MID = 1,

  /**
   * Small form card, with fixed size of 2 x 1.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  TYPE_SMALL = 2
}

/**
 * Defines a content form card.
 *
 * @struct { ContentFormCard }
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 20 dynamic
 */
@Component
declare struct ContentFormCard {
  /**
   * Data of the form card.
   *
   * @type { uniformDataStruct.ContentForm }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  contentFormData: uniformDataStruct.ContentForm;

  /**
   * Type of the form card.
   *
   * @type { FormType }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  @Prop
  formType: FormType;

  /**
   * Width of the content form card. The unit of measurement is vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  @Prop
  formWidth?: double;

  /**
   * Height of the content form card. The unit of measurement is vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  @Prop
  formHeight?: double;

  /**
   * Callback to be invoked when the form card is tapped.
   *
   * @type { ?Function }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 20 dynamic
   */
  handleOnClick?: Function;
}

export { ContentFormCard, FormType };