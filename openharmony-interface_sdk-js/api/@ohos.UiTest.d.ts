/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,software
 * distributed under the License is distributed on an "ASIS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit TestKit
 */

import { Callback } from './@ohos.base';
 
/**
 * Enumerates the string value match pattern.
 *
 * @enum {number}
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 */
/**
 * Enumerates the string value match pattern.
 *
 * @enum {number}
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @since 10
 */
/**
 * Enumerates the string value match pattern.
 *
 * @enum {int}
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare enum MatchPattern {
  /**
   * Equals to a string.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  /**
   * Equals to a string.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Equals to a string.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  EQUALS = 0,
  /**
   * Contains a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  /**
   * Contains a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Contains a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  CONTAINS = 1,
  /**
   * StartsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  /**
   * StartsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * StartsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  STARTS_WITH = 2,
  /**
   * EndsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  /**
   * EndsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * EndsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  ENDS_WITH = 3,
  /**
   * Matches the given value using a regular expression, which is case sensitive.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  REG_EXP = 4,
  /**
   * Matches the given value using a regular expression, which is case insensitive.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  REG_EXP_ICASE = 5,
}

/**
 * Describes the attribute requirements for the target UiComponents.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.UiTest.On
 */
declare class By {
  /**
   * Specifies the text for the target UiComponent.
   *
   * @param { string } txt The text value.
   * @param { MatchPattern } pattern The {@link MatchPattern} of the text value,default to {@link MatchPattern.EQUALS}
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#text
   * @test
   */
  text(txt: string, pattern?: MatchPattern): By;

  /**
   * Specifies the inspector key of the target UiComponent.
   *
   * @param { string } key The inspectorKey value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#id
   * @test
   */
  key(key: string): By;

  /**
   * Specifies the id of the target UiComponent.
   *
   * @param { number } id The id value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#id
   * @test
   */
  id(id: number): By;

  /**
   * Specifies the type of the target UiComponent.
   *
   * @param { string } tp The type value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#type
   * @test
   */
  type(tp: string): By;

  /**
   * Specifies the clickable status of the target UiComponent.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#clickable
   * @test
   */
  clickable(b?: boolean): By;

  /**
   * Specifies the scrollable status of the target UiComponent.
   *
   * @param { boolean } b The scrollable status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#scrollable
   * @test
   */
  scrollable(b?: boolean): By;

  /**
   * Specifies the enabled status of the target UiComponent.
   *
   * @param { boolean } b The enabled status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#enabled
   * @test
   */
  enabled(b?: boolean): By;

  /**
   * Specifies the focused status of the target UiComponent.
   *
   * @param { boolean } b The focused status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#focused
   * @test
   */
  focused(b?: boolean): By;

  /**
   * Specifies the selected status of the target UiComponent.
   *
   * @param { boolean } b The selected status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#selected
   * @test
   */
  selected(b?: boolean): By;

  /**
   * Requires the target UiComponent which is before another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   *
   * @param { By } by Describes the attribute requirements of UiComponent which the target one is in front of.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#isBefore
   * @test
   */
  isBefore(by: By): By;

  /**
   * Requires the target UiComponent which is after another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   *
   * @param { By } by Describes the attribute requirements of UiComponent which the target one is in back of.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.On#isAfter
   * @test
   */
  isAfter(by: By): By;
}

/**
 * Represents a UiComponent of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.uitest.Component
 * @test
 */
declare class UiComponent {
  /**
   * Click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#click
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#doubleClick
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#longClick
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   *
   * @returns { Promise<number> } the id value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#getId
   * @test
   */
  getId(): Promise<number>;

  /**
   * Get the inspectorKey attribute value.
   *
   * @returns { Promise<string> } the inspectorKey value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#getId
   * @test
   */
  getKey(): Promise<string>;

  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#getText
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#getType
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#isClickable
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#isScrollable
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#isEnabled
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#isFocused
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#isSelected
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Inject text to this {@link UiComponent},applicable to TextInput.
   *
   * @param { string } text The text to inject.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#inputText
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Scroll on this {@link UiComponent}to find matched {@link UiComponent},applicable to scrollable one.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<UiComponent> } the found result,or undefined if not found.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Component#scrollSearch
   * @test
   */
  scrollSearch(by: By): Promise<UiComponent>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link UiComponent},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.uitest.Driver
 * @test
 */
declare class UiDriver {
  /**
   * Create an {@link UiDriver} object.
   *
   * @returns { UiDriver } the {@link UiDriver} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#create
   * @test
   */
  static create(): UiDriver;

  /**
   * Delay with specified duration.
   *
   * @param { number } duration The delay duration in milliseconds.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#delayMs
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * Find the first matched {@link UiComponent} on current UI.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<UiComponent> } the first matched {@link UiComponent} or undefined.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#findComponent
   * @test
   */
  findComponent(by: By): Promise<UiComponent>;

  /**
   * Find all the matched {@link UiComponent}s on current UI.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<Array<UiComponent>> } the matched {@link UiComponent}s list.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#findComponents
   * @test
   */
  findComponents(by: By): Promise<Array<UiComponent>>;

  /**
   * Assert the matched {@link UiComponent}s exists on current UI;if not,assertError will be raised.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<void> }
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#assertComponentExist
   * @test
   */
  assertComponentExist(by: By): Promise<void>;

  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#pressBack
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the specified key.
   *
   * @param { number } keyCode the target keyCode.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#triggerKey
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * Click on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#click
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#doubleClick
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#longClick
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.UiTest.Driver#swipe
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#screenCap
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;
}

/**
 * Enumerates the window mode of the tested window.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Enumerates the window mode of the tested window.
 *
 * @enum { int }
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare enum WindowMode {
  /**
   * The test window is a full screen window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * The test window is a full screen window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  FULLSCREEN = 0,
  /**
   * The test window is the first window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * The test window is the first window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  PRIMARY = 1,
  /**
   * The test window is the second window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * The test window is the second window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  SECONDARY = 2,
  /**
   * The test window is a floating window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * The test window is a floating window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  FLOATING = 3
}

/**
 * Enumerates the resize direction for the window.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Enumerates the resize direction for the window.
 *
 * @enum { int }
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare enum ResizeDirection {
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  LEFT = 0,
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  RIGHT = 1,
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  UP = 2,
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  DOWN = 3,
  /**
   * Upper left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Upper left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  LEFT_UP = 4,
  /**
   * Lower left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Lower left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  LEFT_DOWN = 5,
  /**
   * Upper right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Upper right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  RIGHT_UP = 6,
  /**
   * Lower right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Lower right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  RIGHT_DOWN = 7
}

/**
 * Enumerates the rotation of the device display.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Enumerates the rotation of the device display.
 *
 * @enum { int }
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare enum DisplayRotation {
  /**
   * Device display does not rotate to display vertically.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Device display does not rotate to display vertically.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_0 = 0,
  /**
   * Device display rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Device display rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_90 = 1,
  /**
   * Device display rotates clockwise 180 degrees to display vertically in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Device display rotates clockwise 180 degrees to display vertically in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_180 = 2,
  /**
   * Device display rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Device display rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_270 = 3
}

/**
 * Represents the point on the device screen.
 *
 * @typedef Point
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Represents the point on the device screen.
 *
 * @typedef Point
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @since 10
 */
/**
 * Represents the point on the device screen.
 *
 * @typedef Point
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare interface Point {
  /**
   * The x-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The x-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   */
  /**
   * The x-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * The x-coordinate of the coordinate point.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  x: int;
  /**
   * The y-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The y-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   */
  /**
   * The y-coordinate of the coordinate point.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * The y-coordinate of the coordinate point.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  y: int;
  /**
   * The displayId to which the coordinate point belongs, default is the displayId of the main scrren.
   *
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
}

/**
 * Represents the rectangle area on the device screen.
 *
 * @typedef Rect
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Represents the rectangle area on the device screen.
 *
 * @typedef Rect
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11
 */
/**
 * Represents the rectangle area on the device screen.
 *
 * @typedef Rect
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare interface Rect {
  /**
   * The x-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The x-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   */
  /**
   * The x-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The x-coordinate of the top left corner of the rectangle.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  left: int;
  /**
   * The y-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The y-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   */
  /**
   * The y-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The y-coordinate of the top left corner of the rectangle.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  top: int;
  /**
   * The x-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The x-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   */
  /**
   * The x-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The x-coordinate at the bottom right corner of the rectangle.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  right: int;
  /**
   * The y-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The y-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   */
  /**
   * The y-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The y-coordinate at the bottom right corner of the rectangle.
   *
   * @type { int }
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  bottom: int;
  /**
   * The displayId to which the rect belongs, default is the displayId of the main screen.
   *
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
}

/**
 * Represents filer condition to get the window .
 *
 * @typedef WindowFilter
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Represents filer condition to get the window .
 *
 * @typedef WindowFilter
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare interface WindowFilter {
  /**
   * The package name of the application which the window belongs to.
   *
   * @type { ?string }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The package name of the application which the window belongs to.
   *
   * @type { ?string }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * The title of the window.
   *
   * @type { ?string }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The title of the window.
   *
   * @type { ?string }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * The focal state of the window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The focal state of the window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  focused?: boolean;

  /**
   * The active state of the window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  /**
   * The active state of the window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @since 11 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.UiTest.WindowFilter#active
   */
  actived?: boolean;

  /**
   * The active state of the window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  active?: boolean;
  
  /**
   * Find the window in the specified ID display. By default, it searches all displays.
   *
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
}

/**
 * Enumerates the window change types that can be listened on.
 *
 * @enum {int}
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum WindowChangeType {
  /**
   * Undefined type, this value cannot be used as a parameter.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_UNDEFINED = 0,
  /**
   * A window is added.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_ADDED = 1,
  /**
   * A window is removed.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_REMOVED = 2,
  /**
   * The bounds of a window is changed.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_BOUNDS_CHANGED = 3,
}

/**
 * Enumerates the component event types that can be listened on.
 *
 * @enum {int}
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum ComponentEventType {
  /**
   * Undefined type, this value cannot be used as a parameter.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_UNDEFINED = 0,
  /**
   * A component is clicked.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_CLICKED = 1,
  /**
   * A component is longclicked.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_LONG_CLICKED = 2,
  /**
   * A component starts scrolling.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_SCROLL_START = 3,
  /**
   * A component ends scrolling.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_SCROLL_END = 4,
  /**
   * The text content of a component is changed.
   * 
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_TEXT_CHANGED = 5,
}

/**
 * Additional listening options of window change.
 * 
 * @typedef WindowChangeOptions
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface WindowChangeOptions {
  /**
   * Listening timeout in milliseconds, it is recommended that the value of timeout be greater than 500
   * to prevent listening failures casued by event notification delay, default is 10000.
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  timeout?: int;
  /**
   * Bundlename of the listening window, default to listen on all application windows.
   * @type { ?string }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  bundleName?: string;
}

/**
 * Additional listening options of component event.
 * 
 * @typedef ComponentEventOptions
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface ComponentEventOptions {
  /**
   * Listening timeout in milliseconds, it is recommended that the value of timeout be greater than 500
   * to prevent listening failures casued by event notification delay, default is 10000.
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  timeout?: int;
  /**
   * The attribute requirements of target compoinent to be listened on, default to listen on all components in screen.
   * @type { ?On }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  on?: On;
}

/**
 * Represents the information of an UI element, can be a component or window.
 * 
 * @typedef UIElementInfo
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 * @test
 */
/**
 * Represents the information of an UI element, can be a component or window.
 * 
 * @typedef UIElementInfo
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 * @test
 */
declare interface UIElementInfo {
  /**
   * The bundle name of the host application.
   * @type { string }
   * @readonly 
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * The bundle name of the host application.
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  readonly bundleName: string;
  /**
   * The component type, set it to an empty string if it's a window.
   * @type { string }
   * @readonly 
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * The component type, set it to an empty string if it's a window.
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  readonly type: string;
  /**
   * The text of component, set it to an empty string if it's a window.
   * @type { string }
   * @readonly 
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * The text of component, set it to an empty string if it's a window.
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  readonly text: string;
  /**
   * The window change type, set it as {@link WindowChangeType.WINDOW_UNDEFINED} if this is not a window change event.
   * @type { ?WindowChangeType }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly windowChangeType?: WindowChangeType;
  /**
   * The component event type, set it as {@link ComponentEventType.COMPONENT_UNDEFINED} if this is not a component event.
   * @type { ?ComponentEventType }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentEventType?: ComponentEventType;
  /**
   * The windowId of the host application.
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly windowId?: int;
  /**
   * The id of the component, set it as an empty string if it's a window.
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentId?: string;
  /**
   * The rect of the component, set all attributes of rect to -1 if it's a window.
   * @type { ?Rect }
   * @readonly
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentRect?: Rect;
}

/**
 * Observer to monitor UI events.
 * 
 * @typedef UIEventObserver
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 * @test
 */
/**
 * Observer to monitor UI events.
 * 
 * @typedef UIEventObserver
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 * @test
 */
declare interface UIEventObserver {
  /**
   * Listen for toast show once
   * 
   * @param { 'toastShow' } type 'toastShow'.
   * @param { Callback<UIElementInfo> } callback function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Listen for toast show once
   * 
   * @param { 'toastShow' } type -'toastShow'.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  once(type: 'toastShow', callback: Callback<UIElementInfo>): void;
  
  /**
   * Listen for toast show once
   * 
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceToastShow(callback: Callback<UIElementInfo>): void;

  /**
   * Listen for dialog show once
   * 
   * @param { 'dialogShow' } type 'dialogShow'.
   * @param { Callback<UIElementInfo> } callback function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Listen for dialog show once
   * 
   * @param { 'dialogShow' } type - 'dialogShow'.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  once(type: 'dialogShow', callback: Callback<UIElementInfo>): void;
  
  /**
   * Listen for dialog show once
   * 
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceDialogShow(callback: Callback<UIElementInfo>): void;
  
  /**
   * Listen on window change once, additional listening options can be set.
   * 
   * @param { 'windowChange' } type - 'windowChange'.
   * @param { WindowChangeType } windowChangeType - Window change type to be listened on.
   * @param { WindowChangeOptions } options - Additional listening options of window change.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @test
   */
  once(type: 'windowChange', windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;
  
  /**
   * Listen on window change once, additional listening options can be set.
   * 
   * @param { WindowChangeType } windowChangeType - Window change type to be listened on.
   * @param { WindowChangeOptions } options - Additional listening options of window change.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceWindowChange(windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;

  /**
   * Listen on component event once, additional listening options can be set.
   * 
   * @param { 'componentEventOccur' } type - 'componentEventOccur'.
   * @param { ComponentEventType } componentEventType - Component event type to be listened on.
   * @param { ComponentEventOptions } options - Additional listening options of component event.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @test
   */
  once(type: 'componentEventOccur', componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;

  /**
   * Listen on component event once, additional listening options can be set.
   * 
   * @param { ComponentEventType } componentEventType - Component event type to be listened on.
   * @param { ComponentEventOptions } options - Additional listening options of component event.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceComponentEventOccur(componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;
}

/**
 * Enumerates the direction for the UI operation .
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 */
/**
 * Enumerates the direction for the UI operation .
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11
 */
/**
 * Enumerates the direction for the UI operation .
 *
 * @enum { int }
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare enum UiDirection {
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */
  LEFT = 0,
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */
  RIGHT = 1,
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */
  UP = 2,
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */
  DOWN = 3
}

/**
 * Enumerates the id of the button on the mouse.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 */
/**
 * Enumerates the id of the button on the mouse.
 *
 * @enum { int }
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 * @test
 */
declare enum MouseButton {
  /**
   * Left button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Left button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_LEFT = 0,
  /**
   * Right button of the mouse..
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Right button of the mouse..
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_RIGHT = 1,
  /**
   * MIDDLE button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * MIDDLE button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_MIDDLE = 2
}

/**
 * Additional options touchpad multi-finger swipe gestures.
 * @interface TouchPadSwipeOptions
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 * @test
 */
declare interface TouchPadSwipeOptions {
  /**
   * Whether stay for 1 second and lift up after swipe, default is false.
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  stay?: boolean;

  /**
   * The speed ranges from 200 to 40000(pixels per second). Set it default 2000 if out of range or null or undefined.
   * Throws parameter error if negative.
   * @type { ?int }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  speed?: int;
}

/**
 * Text input method options.
 * @interface InputTextMode
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare interface InputTextMode {
  /**
   * Whether to use copy and paste mode to input text, default is false.
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  paste?: boolean;

  /**
   * Whether input text appending to the end of paragraph without clearing the text, default is false.
   * @type { ?boolean }
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  addition?: boolean;
}

/**
 * Common options for touch operations.
 *
 * @typedef TouchOptions
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare interface TouchOptions {
    /**
     * Speed of the operation (pixels per second), the value ranges from 200 to 40000.
     * Set to default 600 if out of range or null or undefined.
     * Throws 17000007 if negative.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    speed?: int;
    /**
     * Duration of the operation in milliseconds, the minimum and default values are 1500.
     * Throws 17000007 if the value is less than 1500. Use the default value when it is null or undefined. 
     *
     * @type { ?int }
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    duration?: int;
    /**
     * The pressure of the touch, the value ranges from 0 to 1, default is 1.
     * Throws 17000007 if the value is out of range. Use the default value when it is null or undefined. 
     *
     * @type { ?double }
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    pressure?: double;
}

/**
 * Describes the attribute requirements for the target Components.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
/**
 * Describes the attribute requirements for the target Components.
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11
 */
/**
 * Describes the attribute requirements for the target Components.
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class On {
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt The text value.
   * @param { MatchPattern } pattern The {@link MatchPattern} of the text value, default to {@link MatchPattern.EQUALS}
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt The text value.
   * @param { MatchPattern } pattern The {@link MatchPattern} of the text value, default to {@link MatchPattern.EQUALS}
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt - the text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  text(txt: string, pattern?: MatchPattern): On;

  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id The id value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id The id value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  id(id: string): On;

  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp The type value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp The type value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  type(tp: string): On;

  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } [b] - the clickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  clickable(b?: boolean): On;

  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } [b] - the longClickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  longClickable(b?: boolean): On;

  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } b The scrollable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } b The scrollable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } [b] - the scrollable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  scrollable(b?: boolean): On;

  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } b The enabled status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } b The enabled status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } [b] - the enabled status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  enabled(b?: boolean): On;

  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } b The focused status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } b The focused status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } [b] - the focused status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  focused(b?: boolean): On;

  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } b The selected status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } b The selected status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } [b] the - selected status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  selected(b?: boolean): On;

  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } b The checked status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } b The checked status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } [b] - the checked status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  checked(b?: boolean): On;

  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } b The checkable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } b The checkable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } [b] - the checkable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. 1. Incorrect parameter types; 2. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  checkable(b?: boolean): On;

  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is in front of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in front of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isBefore(on: On): On;

  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is in back of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in back of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isAfter(on: On): On;

  /**
   * Requires that the target Component which is inside of another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is inside of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Requires that the target Component which is inside of another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is inside of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  within(on: On): On;

  /**
   * Specifies the bundleName of the application which the window that the target Component is located belongs.
   *
   * @param { string } bundleName The bundleName of the specified window.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Specifies the bundleName of the application which the window that the target Component is located belongs.
   *
   * @param { string } bundleName - the bundleName of the specified window.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  inWindow(bundleName: string): On;

  /**
   * Specifies the displayId to which the target Component belongs.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  belongingDisplay(displayId: int): On;

  /**
   * Specifies the description for the target Component.
   *
   * @param { string } val - the description value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of description value,set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  description(val: string, pattern?: MatchPattern): On;
  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  id(id: string, pattern: MatchPattern): On;
  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  type(tp: string, pattern: MatchPattern): On;
  /**
   * Specifies the hint for the target Component.
   *
   * @param { string } val - the hint value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  hint(val: string, pattern?: MatchPattern): On;

  /**
   * Specifies the original text for the target Component.
   * If the accessibility property 'accessibilityLevel' of a component is set to 'no' or 'no-hide-descendants',
   * you will not be able to use {@link On.text} to match the component with the specified original text, but you can use this method to achieve it;
   * if the component does not set the above accessibility property, this method has no difference with {@link On.text}
   *
   * @param { string } text - the original text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value, Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  originalText(text: string, pattern?: MatchPattern): On;
}

/**
 * Represents an Component of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
/**
 * Represents an Component of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11
 * @test
 */
/**
 * Represents an Component of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 * @test
 */
declare class Component {
  /**
   * Click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Double click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Double click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Long click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Long click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   *
   * @returns { Promise<string> } the id value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the id attribute value.
   *
   * @returns { Promise<string> } the id value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the id attribute value.
   *
   * @returns { Promise<string> } the id value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getId(): Promise<string>;

  /**
   * Get the displayId to which the component belongs.
   *
   * @returns { Promise<int> } the displayId value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayId(): Promise<int>;

  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the clickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the clickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the longClickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the longClickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the longClickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the longClickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the clickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isLongClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the scrollable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the scrollable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the enabled status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the enabled status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the focused status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the focused status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the selected status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the selected status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Get the checked status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checked status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the checked status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checked status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the checked status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checked status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isChecked(): Promise<boolean>;

  /**
   * Get the checkable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checkable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the checkable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checkable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the checkable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checkable status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isCheckable(): Promise<boolean>;

  /**
   * Inject text to this {@link Component},applicable to TextInput.
   *
   * @param { string } text The text to inject.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Inject text to this {@link Component},applicable to TextInput.
   *
   * @param { string } text The text to inject.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Inject text to this {@link Component},applicable to TextInput.
   *
   * @param { string } text - the text to inject.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Inject text to this {@link Component},applicable to TextInput.
   *
   * @param { string } text - the text to inject.
   * @param { InputTextMode } mode - specific the mode to input text.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported, function can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  inputText(text: string, mode: InputTextMode): Promise<void>;

  /**
   * Clear text of this {@link Component},applicable to TextInput.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Clear text of this {@link Component},applicable to TextInput.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Clear text of this {@link Component},applicable to TextInput.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  clearText(): Promise<void>;

  /**
   * Scroll on this {@link Component} to the top,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Scroll on this {@link Component} to the top,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Scroll on this {@link Component} to the top,applicable to scrollable one.
   *
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  scrollToTop(speed?: int): Promise<void>;

  /**
   * Scroll on this {@link Component} to the bottom,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Scroll on this {@link Component} to the bottom,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Scroll on this {@link Component} to the bottom,applicable to scrollable one.
   *
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  scrollToBottom(speed?: int): Promise<void>;

  /**
   * Get the bounds rect of this {@link Component}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the bounds rect of this {@link Component}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Get the bounds rect of this {@link Component}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */ 
  getBounds(): Promise<Rect>;

  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the found result,or undefined if not found.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the found result,or undefined if not found.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the found result,or undefined if not found.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  scrollSearch(on: On): Promise<Component>;

  /**
   * Get the boundsCenter of this {@link Component}.
   *
   * @returns { Promise<Point> } the boundsCenter object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the boundsCenter of this {@link Component}.
   *
   * @returns { Promise<Point> } the boundsCenter object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Get the boundsCenter of this {@link Component}.
   *
   * @returns { Promise<Point> } the boundsCenter object.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getBoundsCenter(): Promise<Point>;
  
  /**
   * Drag this {@link Component} to the bounds rect of target Component.
   *
   * @param { Component } target The target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Drag this {@link Component} to the bounds rect of target Component.
   *
   * @param { Component } target - the target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  dragTo(target: Component): Promise<void>;
  
   /**
    * Pinch enlarge this {@link Component} to the target scale.
    *
    * @param { number } scale The scale of the pinch enlarge this {@link Component}'s size.
    * @returns { Promise<void> }
    * @throws { BusinessError } 401 - if the input parameters are invalid.
    * @throws { BusinessError } 17000002 - if the async function was not called with await.
    * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
    * @syscap SystemCapability.Test.UiTest
    * @since 9
    * @test
    */
   /**
    * Pinch enlarge this {@link Component} to the target scale.
    *
    * @param { double } scale - the scale of the pinch enlarge this {@link Component}'s size, ranges greater than 1.
    * @returns { Promise<void> }
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
    * @syscap SystemCapability.Test.UiTest
    * @crossplatform
    * @atomicservice
    * @since 11 dynamic
    * @since 23 static
    * @test
    */
   pinchOut(scale: double): Promise<void>;
   /**
    * Pinch shrink this {@link Component} to the target scale.
    *
    * @param { number } scale The scale of the pinch shrink this {@link Component}'s size.
    * @returns { Promise<void> }
    * @throws { BusinessError } 401 - if the input parameters are invalid.
    * @throws { BusinessError } 17000002 - if the async function was not called with await.
    * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
    * @syscap SystemCapability.Test.UiTest
    * @since 9
    * @test
    */
   /**
    * Pinch shrink this {@link Component} to the target scale.
    *
    * @param { double } scale - the scale of the pinch shrink this {@link Component}'s size, ranges from 0 to 1.
    * @returns { Promise<void> }
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
    * @syscap SystemCapability.Test.UiTest
    * @crossplatform
    * @atomicservice
    * @since 11 dynamic
    * @since 23 static
    * @test
    */
   pinchIn(scale: double): Promise<void>;

  /**
   * Get the description attribute value.
   *
   * @returns { Promise<string> } the description value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getDescription(): Promise<string>;
  /**
   * Get the hint attribute value.
   *
   * @returns { Promise<string> } the hint value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  getHint(): Promise<string>;
  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @param { boolean } [vertical] - Whether the swipe direction is vertical, default is true.
   * @param { number } [offset] - Offset from the swipe start/end point to the component border, default is 80.
   * @returns { Promise<Component> } the found result,or undefined if not found.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @test
   */
  scrollSearch(on: On, vertical?: boolean, offset?: number): Promise<Component>;
   /**
    * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
    *
    * @param { On } on - the attribute requirements of the target {@link Component}.
    * @param { boolean } [vertical] - Whether the swipe direction is vertical, default is true.
    * @param { int } [offset] - Offset from the swipe start/end point to the component border, default is 80.
    * @returns { Promise<Component | null> } the found result,or null if not found.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
    * @syscap SystemCapability.Test.UiTest
    * @since 23 static
    * @test
    */
  scrollSearch(on: On, vertical?: boolean, offset?: int): Promise<Component | null>;
   /**
   * Get the original text attribute value.
   * If the accessibility property 'accessibilityLevel' of a component is set to 'no' or 'no-hide-descendants',
   * you will not be able to use {@link Component.getText} to get the original text of the component, but you can use this method to achieve it;
   * if the component does not set the above accessibility property, this method has no difference with {@link Component.getText}
   *
   * @returns { Promise<string> } the original text value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getOriginalText(): Promise<string>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link Component},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
/**
 * The unified facade of UiTest framework,can be used to find {@link Component},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11
 * @test
 */
/**
 * The unified facade of UiTest framework,can be used to find {@link Component},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 * @test
 */
declare class Driver {
  /**
   * Create an {@link Driver} object.
   *
   * @returns { Driver } the {@link Driver} object.
   * @throws { BusinessError } 17000001 - if the test framework failed to initialize.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Create an {@link Driver} object.
   *
   * @returns { Driver } the {@link Driver} object.
   * @throws { BusinessError } 17000001 - if the test framework failed to initialize.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Create an {@link Driver} object.
   *
   * @returns { Driver } the {@link Driver} object.
   * @throws { BusinessError } 17000001 - Initialization failed.
   * @static
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  static create(): Driver;

  /**
   * Delay with specified duration.
   *
   * @param { number } duration The delay duration in milliseconds.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Delay with specified duration.
   *
   * @param { number } duration The delay duration in milliseconds.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Delay with specified duration.
   *
   * @param { int } duration - the delay duration in milliseconds, not less than 0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  delayMs(duration: int): Promise<void>;

  /**
   * Find the first matched {@link Component} on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Find the first matched {@link Component} on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Find the first matched {@link Component} on current UI.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  findComponent(on: On): Promise<Component>;
   /**
    * Find the first matched {@link Component} on current UI.
    *
    * @param { On } on - the attribute requirements of the target {@link Component}.
    * @returns { Promise<Component | null> } the first matched {@link Component} or undefined.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @syscap SystemCapability.Test.UiTest
    * @since 23 static
    * @test
    */
   findComponent(on: On): Promise<Component | null>;
  /**
   * Find the first matched {@link UiWindow} window.
   *
   * @param { WindowFilter } filter The filer condition of the target {@link UiWindow}.
   * @returns { Promise<UiWindow> } the first matched {@link UiWindow} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Find the first matched {@link UiWindow} window.
   *
   * @param { WindowFilter } filter - the filer condition of the target {@link UiWindow}.
   * @returns { Promise<UiWindow> } the first matched {@link UiWindow} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  findWindow(filter: WindowFilter): Promise<UiWindow>;
   /**
    * Find the first matched {@link UiWindow} window.
    *
    * @param { WindowFilter } filter - the filer condition of the target {@link UiWindow}.
    * @returns { Promise<UiWindow | null> } the first matched {@link UiWindow} or undefined.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @syscap SystemCapability.Test.UiTest
    * @since 23 static
    * @test
    */
   findWindow(filter: WindowFilter): Promise<UiWindow | null>;
  /**
   * Find the first matched {@link Component} on current UI during the time given.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @param { number } time Duration of finding in milliseconds
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Find the first matched {@link Component} on current UI during the time given.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @param { number } time - duration of finding in milliseconds, not less than 0.
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  waitForComponent(on: On, time: number): Promise<Component>;
   /**
    * Find the first matched {@link Component} on current UI during the time given.
    *
    * @param { On } on - the attribute requirements of the target {@link Component}.
    * @param { int } time - duration of finding in milliseconds, not less than 0.
    * @returns { Promise<Component | null> } the first matched {@link Component} or undefined.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @syscap SystemCapability.Test.UiTest
    * @since 23 static
    * @test
    */
  waitForComponent(on: On, time: int): Promise<Component | null>;
  /**
   * Find all the matched {@link Component}s on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Array<Component>> } the matched {@link Component}s list.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Find all the matched {@link Component}s on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Array<Component>> } the matched {@link Component}s list.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Find all the matched {@link Component}s on current UI.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<Array<Component>> } the matched {@link Component}s list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  findComponents(on: On): Promise<Array<Component>>;
   /**
    * Find all the matched {@link Component}s on current UI.
    *
    * @param { On } on - the attribute requirements of the target {@link Component}.
    * @returns { Promise<Array<Component> | null> } the matched {@link Component}s list.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 17000002 - The async function is not called with await.
    * @syscap SystemCapability.Test.UiTest
    * @since 23 static
    * @test
    */
  findComponents(on: On): Promise<Array<Component> | null>;
  /**
   * Assert t the matched {@link Component}s exists on current UI;if not,assertError will be raised.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Assert t the matched {@link Component}s exists on current UI;if not,assertError will be raised.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Assert t the matched {@link Component}s exists on current UI;if not,assertError will be raised.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000003 - Assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  assertComponentExist(on: On): Promise<void>;

  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the BACK key on the specified display.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  pressBack(displayId: int): Promise<void>;

  /**
   * Press the specified key.
   *
   * @param { number } keyCode the target keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Press the specified key.
   *
   * @param { int } keyCode - the target keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  triggerKey(keyCode: int): Promise<void>;

  /**
   * Press the specified key on the specified display.
   *
   * @param { int } keyCode - the target keyCode.
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  triggerKey(keyCode: int, displayId: int): Promise<void>;

  /**
   * Press two or three key combinations
   *
   * @param { number } key0 the first keyCode.
   * @param { number } key1 the second keyCode.
   * @param { number } key2 the third keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Press two or three key combinations
   *
   * @param { number } key0 - the first keyCode.
   * @param { number } key1 - the second keyCode.
   * @param { number } [key2] - the third keyCode,set it default 0 if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>;

  /**
   * Press two or three key combinations on the specified display.
   *
   * @param { int } key0 - the first keyCode.
   * @param { int } key1 - the second keyCode.
   * @param { int } [key2] - the third keyCode,set it default 0 if null or undefined.
   * @param { int } [displayId] - the Id of the specified display, default is the displayId of the main screen.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>;

  /**
   * Click on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Click on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Click on the specified location on the screen.
   *
   * @param { int } x - the x-coordinate, not less than 0.
   * @param { int } y - the y-coordinate, not less than 0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  click(x: int, y: int): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { int } x - the x-coordinate, not less than 0.
   * @param { int } y - the y-coordinate, not less than 0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  doubleClick(x: int, y: int): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * LongClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * LongClick on the specified location on the screen.
   *
   * @param { int } x - the x-coordinate, not less than 0.
   * @param { int } y - the y-coordinate, not less than 0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  longClick(x: int, y: int): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Swipe on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Swipe on the screen between the specified points.
   *
   * @param { int } startx - the x-coordinate of the starting point, not less than 0.
   * @param { int } starty - the y-coordinate of the starting point, not less than 0.
   * @param { int } endx - the x-coordinate of the ending point, not less than 0.
   * @param { int } endy - the y-coordinate of the ending point, not less than 0.
   * @param { int } [speed]  The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

  /**
   * Drag on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Drag on the screen between the specified points.
   *
   * @param { int } startx - the x-coordinate of the starting point, not less than 0.
   * @param { int } starty - the y-coordinate of the starting point, not less than 0.
   * @param { int } endx - the x-coordinate of the ending point, not less than 0.
   * @param { int } endy - the y-coordinate of the ending point, not less than 0.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

  /**
   * Click on the specified location on the screen.
   *
   * @param { Point } point - the coordinate point where the finger touches the screen.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  clickAt(point: Point): Promise<void>;

  /**
   * Click on the specified location on the screen, with optional touch options.
   *
   * @param { Point } point - the coordinate point where the finger touches the screen.
   * @param { TouchOptions } [options] - the options for the click operation.
   *                                     Only the 'pressure' property is applicable for this method.
   *                                     Setting other properties will result in a BusinessError 17000007.
   *                                     Default value: Refer to the default value of TouchOptions.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  clickAt(point: Point, options?: TouchOptions): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { Point } point - the coordinate point where the finger touches the screen.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  doubleClickAt(point: Point): Promise<void>;

  /**
   * LongClick on the specified location on the screen, specifies the duration if necessary.
   *
   * @param { Point } point - the coordinate point where the finger touches the screen.
   * @param { int } [duration] - duration of longClick in millisecond, the minimum and default are 1500.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  longClickAt(point: Point, duration?: int): Promise<void>;

  /**
   * LongClick on the specified location on the screen, with optional touch settings.
   *
   * @param { Point } point - the coordinate point where the finger touches the screen.
   * @param { TouchOptions } [options] - the options for the long click operation. 
   *                                     Only the 'duration' and 'pressure' properties are applicable for this method.
   *                                     Setting other properties will result in a BusinessError 17000007.
   *                                     Default value: Refer to the default value of TouchOptions.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  longClickAt(point: Point, options?: TouchOptions): Promise<void>;
  
  /**
   * Swipe on the screen between the specified points.
   *
   * @param { Point } from - the coordinate point where the finger touches the screen.
   * @param { Point } to - the coordinate point where the finger leaves the screen.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  swipeBetween(from: Point, to: Point, speed?: int): Promise<void>;

  /**
   * Swipe on the screen between the specified points with optional touch options.
   *
   * @param { Point } from - the coordinate point where the finger touches the screen.
   * @param { Point } to - the coordinate point where the finger leaves the screen.
   * @param { TouchOptions } [options] - the options for the swipe operation.
   *                                     Only the 'speed' and 'pressure' properties are applicable for this method.
   *                                     Setting other properties will result in a BusinessError 17000007.
   *                                     Default value: Refer to the default value of TouchOptions.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  swipeBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>;

  /**
   * Drag on the screen between the specified points.
   *
   * @param { Point } from - the coordinate point where the finger touches the screen.
   * @param { Point } to - the coordinate point where the finger leaves the screen.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @param { int } [duration] - duration of longClick before drag in millisecond,
   *                             the minimum and default values are 1500.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;

  /**
   * Drag on the screen between the specified points with optional touch options.
   *
   * @param { Point } from - the coordinate point where the finger touches the screen.
   * @param { Point } to - the coordinate point where the finger leaves the screen.
   * @param { TouchOptions } [options] - the options for the drag operation.
   *                                     Only the 'pressure', 'speed', and 'duration' properties are applicable for this method.
   *                                     Setting other properties will result in a BusinessError 17000007.
   *                                     Default value: Refer to the default value of TouchOptions.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  dragBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Capture current screen and save as picture which PNG format.
   *
   * @param { string } savePath - the path where to store the picture, must be in the application sandbox directory.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;

  /**
   * Capture specified screen and save as picture which PNG format.
   *
   * @param { string } savePath - the path where to store the picture, must be in the application sandbox directory.
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  screenCap(savePath: string, displayId: int): Promise<boolean>;

  /**
   * Set the rotation of the device display.
   *
   * @param { DisplayRotation } rotation The target rotation to set.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Set the rotation of the device display.
   *
   * @param { DisplayRotation } rotation - the target rotation to set.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  setDisplayRotation(rotation: DisplayRotation): Promise<void>;

  /**
   * Get the rotation of the device display.
   *
   * @returns { Promise<DisplayRotation> } the current display rotation.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the rotation of the device display.
   *
   * @returns { Promise<DisplayRotation> } the current display rotation.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getDisplayRotation(): Promise<DisplayRotation>;

  /**
   * Get the rotation of the specified device display.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<DisplayRotation> } the current display rotation.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayRotation(displayId: int): Promise<DisplayRotation>;

  /**
   * Enable/disable the rotation of device display.
   *
   * @param { boolean } enabled Enable the rotation or not.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Enable/disable the rotation of device display.
   *
   * @param { boolean } enabled - enable the rotation or not.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  setDisplayRotationEnabled(enabled: boolean): Promise<void>;

  /**
   * Get the size of the device display.
   *
   * @returns { Promise<Point> } the size of the device display.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the size of the device display.
   *
   * @returns { Promise<Point> } the size of the device display.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getDisplaySize(): Promise<Point>;

  /**
   * Get the size of the specified device display.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<Point> } the size of the device display.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplaySize(displayId: int): Promise<Point>;

  /**
   * Get the density of the device display.
   *
   * @returns { Promise<Point> } the density of the device display.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the density of the device display.
   *
   * @returns { Promise<Point> } the density of the device display.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getDisplayDensity(): Promise<Point>;

  /**
   * Get the density of the specified device display.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<Point> } the density of the device display.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayDensity(displayId: int): Promise<Point>;

  /**
   * Wake up the device display.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Wake up the device display.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  wakeUpDisplay(): Promise<void>;

  /**
   * Press the home key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Press the home key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  pressHome(): Promise<void>;

  /**
   * Press the home key to the specified display.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  pressHome(displayId: int): Promise<void>;

  /**
   * Wait for the UI become idle.
   *
   * @param { number } idleTime the threshold of UI idle time, in millisecond.
   * @param { number } timeout The maximum time to wait for idle, in millisecond.
   * @returns { Promise<boolean> } true if wait for idle succeed in the timeout, false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Wait for the UI become idle.
   *
   * @param { int } idleTime - the threshold of UI idle time, in millisecond, not less than 0.
   * @param { int } timeout - the maximum time to wait for idle, in millisecond, not less than 0.
   * @returns { Promise<boolean> } true if wait for idle succeed in the timeout, false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  waitForIdle(idleTime: int, timeout: int): Promise<boolean>;

  /**
   * Inject fling on the device display.
   *
   * @param { Point } from The coordinate point where the finger touches the screen.
   * @param { Point } to The coordinate point where the finger leaves the screen.
   * @param { number } stepLen the length of each step, in pixels.
   * @param { number } speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Inject fling on the device display.
   *
   * @param { Point } from The coordinate point where the finger touches the screen.
   * @param { Point } to The coordinate point where the finger leaves the screen.
   * @param { number } stepLen the length of each step, in pixels.
   * @param { number } speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @since 10
   * @test
   */
  /**
   * Inject fling on the device display.
   *
   * @param { Point } from - the coordinate point where the finger touches the screen.
   * @param { Point } to - the coordinate point where the finger leaves the screen.
   * @param { int } stepLen - the length of each step, in pixels.
   * @param { int } speed - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range. Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>;

  /**
   * Inject multi-pointer action on the device display.
   *
   * @param { PointerMatrix } pointers The two-dimensional array of pointers to inject.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<boolean> } true if the operation finished, false
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Inject multi-pointer action on the device display.
   *
   * @param { PointerMatrix } pointers - the two-dimensional array of pointers to inject.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<boolean> } true if the operation finished, false
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>;

  /**
   * Inject fling on the device display.
   *
   * @param { UiDirection } direction The direction of this action.
   * @param { number } speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Inject fling on the device display.
   *
   * @param { UiDirection } direction - the direction of this action.
   * @param { number } speed - the speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11
   * @test
   */
  /**
   * Inject fling on the device display.
   *
   * @param { UiDirection } direction - the direction of this action.
   * @param { int } speed - The speed ranges from 200 to 40000(pixels per second).
   *                        Set it default 600 if out of range. Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   * @test
   */
  fling(direction: UiDirection, speed: int): Promise<void>;

  /**
   * Inject fling on the specified device display.
   *
   * @param { UiDirection } direction - the direction of this action.
   * @param { int } speed - The speed ranges from 200 to 40000(pixels per second).
   *                        Set it default 600 if out of range. Throws error code 401 if negative.
   * @param { int } displayId - the Id of the specified display.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  fling(direction: UiDirection, speed: int, displayId: int): Promise<void>;

  /**
   * Click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p The coordinate of the specified location.
   * @param { MouseButton } btnId The button of Mouse.
   * @param { number } key1 the first keyCode.
   * @param { number } key2 the second keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { MouseButton } btnId - the button of Mouse.
   * @param { int } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { int } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

  /**
   * Move the mouse cursor to the specified location.
   *
   * @param { Point } p The coordinate of the specified location.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Move the mouse cursor to the specified location.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseMoveTo(p: Point): Promise<void>;

  /**
   * The mouse wheel scrolls the specified cell at the specified position, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p The coordinate of the specified location.
   * @param { boolean } down Whether the mouse wheel rolls down.
   * @param { number } d The number of cells that the mouse wheel scrolls, each cell will make the target point shift 120 pixels.
   * @param { number } key1 the first keyCode.
   * @param { number } key2 the second keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * The mouse wheel scrolls the specified cell at the specified position, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { boolean } down - whether the mouse wheel rolls down.
   * @param { number } d - the number of cells that the mouse wheel scrolls, each cell will make the target point shift 120 pixels.
   * @param { number } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { number } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>;

  /**
   * The mouse wheel scrolls the specified cell at the specified position, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { boolean } down - whether the mouse wheel rolls down.
   * @param { int } d - the number of cells that the mouse wheel scrolls, each cell will make the target point shift 120 pixels.
   * @param { int } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { int } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @param { int } [speed] - The speed ranges from 1 to 500(cells per second).
   *                          Set it default 20 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>;

  /**
   * Capture the specified area of current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @param { Rect } rect The specified area of current screen, default to full screen.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Capture the specified area of current screen and save as picture which PNG format.
   *
   * @param { string } savePath - the path where to store the picture, must be in the application sandbox directory.
   * @param { Rect } [rect] - the specified area of current screen, default to full screen.Set it default if null or undefined.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  screenCapture(savePath: string, rect?: Rect): Promise<boolean>;

  /**
   * Create an {@link UIEventObserver} object.
   *
   * @returns { UIEventObserver } the {@link UIEventObserver} object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  /**
   * Create an {@link UIEventObserver} object.
   *
   * @returns { UIEventObserver } the {@link UIEventObserver} object.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  createUIEventObserver(): UIEventObserver;

  /**
   * Double click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { MouseButton } btnId - the button of Mouse.
   * @param { int } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { int } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

  /**
   * Long click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { MouseButton } btnId - the button of Mouse.
   * @param { number } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { number } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>;

  /**
   * Long click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { MouseButton } btnId - the button of Mouse.
   * @param { int } [key1] - the first keyCode,set it default 0 if null or undefined.
   * @param { int } [key2] - the second keyCode,set it default 0 if null or undefined.
   * @param { int } [duration] - duration of mouse longClick in millisecond, the minimum and default are 1500.   
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>;

  /**
   * Swipe on the screen between the specified points with mouse.
   *
   * @param { Point } from - the starting point.
   * @param { Point } to - the ending point.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>;

  /**
   * Hold down the left mouse button and drag on the screen between the specified points.
   *
   * @param { Point } from - the starting point.
   * @param { Point } to - the ending point.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  mouseDrag(from: Point, to: Point, speed?: number): Promise<void>;

  /**
   * Hold down the left mouse button and drag on the screen between the specified points.
   *
   * @param { Point } from - the starting point.
   * @param { Point } to - the ending point.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @param { int } [duration] - duration of longClick before drag in millisecond, the minimum and default are 1500.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;

  /**
   * Inject text on the specified location.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { string } text - the text to inject.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  inputText(p: Point, text: string): Promise<void>;

  /**
   * Inject text on the specified location, default to input at the coordinate of the specified location.
   *
   * @param { Point } p - the coordinate of the specified location.
   * @param { string } text - the text to inject.
   * @param { InputTextMode } mode - specific the mode to input text.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not support, function can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  inputText(p: Point, text: string, mode: InputTextMode): Promise<void>;

  /**
   * Simulate touchpad multi-finger swipe gestures.
   * @param { int } fingers Finger count of touchpad multi-finger swipe, ranges from 3 to 4.
   * @param { UiDirection } direction Direction of touchpad multi-finger swipe.
   * @param { TouchPadSwipeOptions } [options] Additional options touchpad multi-finger swipe gestures, set its parameters to default values if null or undefined.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @throws { BusinessError } 17000005 This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>;

  /**
   * Simulate pen click operation.
   * @param { Point } point Coordinate of the specified location.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penClick(point: Point): Promise<void>;

  /**
   * Simulate pen long click operation.
   * @param { Point } point Coordinate of the specified location.
   * @param { double } [pressure] Pressure of pen long click operation, default is 1.0, the value ranges from 0.0 to 1.0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penLongClick(point: Point, pressure?: double): Promise<void>;

  /**
   * Simulate pen double click operation.
   * @param { Point } point Coordinate of the specified location.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penDoubleClick(point: Point): Promise<void>;

  /**
   * Simulate pen swipe operation.
   * @param { Point } startPoint Coordinate of the specified location.
   * @param { Point } endPoint Coordinate of the specified location.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @param { double } [pressure] Pressure of pen swipe operation, default is 1.0, the value ranges from 0.0 to 1.0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>;

  /**
   * Inject pen multi-pointer action on the device display.
   * @param { PointerMatrix } pointers The two-dimensional array of pointers to inject.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 401 if negative.
   * @param { double } [pressure] Pressure of inject pen pointer action operation, default is 1.0, the value ranges from 0.0 to 1.0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 The async function is not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>;

  /**
   * Inject a watch crown rotation event, specifies the rotation speed if necessary.
   *
   * @param { int } d The number of cells that watch rotates.Positive value indicate clockwise rotation,
   *                  negative value indicate counterclockwise rotation.
   * @param { int } [speed] - The speed ranges from 1 to 500(cells per second).
   *                          Set it default 20 if out of range or undefined or null.
   *                          Throws error code 17000007 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 801 - Capability not support, function can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  crownRotate(d: int, speed?: int): Promise<void>;

    /**
   * Long click and check if the specified component exists concurrently. 
   * If it exists, return true; otherwise, return false.
   *
   * @param { On } on - The attribute requirements of the target {@link Component}.
   * @param { Point } point - The coordinate point where the finger touches the screen.
   * @param { int } [duration] - Duration of longClick before drag in millisecond,
   *                             the minimum and default values are 1500.
   * @returns { Promise<boolean> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>;

  /**
   * Drag and check if the specified component exists concurrently. If it exists, return true; otherwise, return false.
   *
   * @param { On } on - The attribute requirements of the target {@link Component}.
   * @param { Point } from - The coordinate point where the finger touches the screen.
   * @param { Point } to - The coordinate point where the finger leaves the screen.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @param { int } [duration] - Duration of longClick before drag in millisecond,
   *                             the minimum and default values are 1500.
   * @returns { Promise<boolean> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>;

  /**
   * Swipe and check if the specified component exists concurrently. If it exists, return true; otherwise, return false.
   *
   * @param { On } on - The attribute requirements of the target {@link Component}.
   * @param { Point } from - The coordinate point where the finger touches the screen.
   * @param { Point } to - The coordinate point where the finger leaves the screen.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @returns { Promise<boolean> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>;

  /**
   * Simulate touchpad two fingers scroll.
   * @param { Point } point - The coordinate of the specified location.
   * @param { UiDirection } direction - Direction of touchpad two fingers scroll.
   * @param { int } d - The number of cells for two fingers scroll on the touchpad.
   *                    Each cell will make the target point shift 120 pixels.
   * @param { int } [speed] - The speed ranges from 1 to 500(cells per second).
   *                          Set it default 20 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>;

  /**
   * Simulate knuckle knock operation.
   * @param { Array<Point> } pointers - Array of knuckle knock coordinate points.
   *                                    The length of array ranges from 1 to 2.
   * @param { int } times - The times of knuckle knock. The value ranges from 1 to 2,
   *                        the interval between knock is 200ms.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  knuckleKnock(pointers: Array<Point>, times: int): Promise<void>;

  /**
   * Inject multi-pointer knuckle action on the device display.
   * @param { PointerMatrix } pointers - The two-dimensional array of pointers to inject.
   *                                     The number of fingers in this method can only be 1.
   * @param { int } [speed] - The speed ranges from 200 to 40000(pixels per second).
   *                          Set it default 600 if out of range or null or undefined.
   *                          Throws error code 17000007 if negative.
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>;
}

/**
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
/**
 * Represents a window of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 * @test
 */
declare class UiWindow {
  /**
   * Get the bundle name of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the bundle name.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the bundle name of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the bundle name.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getBundleName(): Promise<string>;

  /**
   * Get the bounds rect of this {@link UiWindow}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the bounds rect of this {@link UiWindow}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * Get the title of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the title value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the title of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the title value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getTitle(): Promise<string>;

  /**
   * Get the window mode of this {@link UiWindow}.
   *
   * @returns { Promise<WindowMode> } the {@link WindowMode} object
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the window mode of this {@link UiWindow}.
   *
   * @returns { Promise<WindowMode> } the {@link WindowMode} object
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getWindowMode(): Promise<WindowMode>;

  /**
   * Get the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the focused status
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the focused status
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the active status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the actived status
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Get the active status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the actived status
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 11 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.UiTest.UiWindow#isActive
   * @test
   */
  isActived(): Promise<boolean>;

  /**
   * Set the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Set the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  focus(): Promise<void>;

  /**
   * Move this {@link UiWindow} to the specified points.
   *
   * @param { number } x The x coordinate of destination.
   * @param { number } y The y coordinate of destination.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Move this {@link UiWindow} to the specified points.
   *
   * @param { int } x - the x coordinate of destination, not less than 0.
   * @param { int } y - the y coordinate of destination, not less than 0.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  moveTo(x: int, y: int): Promise<void>;

  /**
   * Resize this {@link UiWindow} to the specified size for the specified direction.
   *
   * @param { number } wide The expected wide of the window after resizing.
   * @param { number } height The expected height of the window after resizing.
   * @param { ResizeDirection } direction The expected direction of the window after resizing.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Resize this {@link UiWindow} to the specified size for the specified direction.
   *
   * @param { int } wide - the expected wide of the window after resizing.
   * @param { int } height - the expected height of the window after resizing.
   * @param { ResizeDirection } direction - the expected direction of the window after resizing.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  resize(wide: int, height: int, direction: ResizeDirection): Promise<void>;

  /**
   * Change this {@link UiWindow} into split screen mode.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Change this {@link UiWindow} into split screen mode.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  split(): Promise<void>;

  /**
   * Maximize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Maximize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  maximize(): Promise<void>;

  /**
   * Minimize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Minimize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  minimize(): Promise<void>;

  /**
   * Resume this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Resume this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  resume(): Promise<void>;

  /**
   * Close this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Close this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  close(): Promise<void>;

  /**
   * Get the active status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the active status.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isActive(): Promise<boolean>;

  /**
   * Get the displayId to which the window belongs.
   *
   * @returns { Promise<int> } the displayId value.
   * @throws { BusinessError } 17000002 - The async function is not called with await.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayId(): Promise<int>;
}

/**
 * Represents a two-dimensional array of pointers on the device display, it's used to build a
 * multi-finger trace which can be injected with UiDriver.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
/**
 * Represents a two-dimensional array of pointers on the device display, it's used to build a
 * multi-finger trace which can be injected with UiDriver.
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 * @test
 */
declare class PointerMatrix {
  /**
   * Create an {@link PointerMatrix} object.
   *
   * @param { number } fingers The number of fingers.
   * @param { number } steps The number of steps of each finger trace.
   * @returns { PointerMatrix } the {@link PointerMatrix} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Create an {@link PointerMatrix} object.
   *
   * @param { int } fingers - The number of fingers, ranges from 1 to 10.
   * @param { int } steps - The number of steps of each finger trace, ranges from 1 to 1000.
   * @returns { PointerMatrix } the {@link PointerMatrix} object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @static
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  static create(fingers: int, steps: int): PointerMatrix;

  /**
   * Set the point value of an element in the PointerMatrix.
   *
   * @param { number } finger The index of target finger to set.
   * @param { number } step The index of target step to set.
   * @param { Point } point The coordinate of target step to set.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  /**
   * Set the point value of an element in the PointerMatrix.
   *
   * @param { int } finger - the index of target finger to set.
   * @param { int } step - the index of target step to set.
   * @param { Point } point - the coordinate of target step to set.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  setPoint(finger: int, step: int, point: Point): void;
}

/**
 * The static builder for building {@link By}object conveniently,usage example:BY.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.uitest.ON
 * @test
 */
declare const BY: By;

/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @test
 */
declare const ON: On;

/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 23 static
 * @test
 */
declare namespace ON {
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt - the text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function text(txt: string, pattern?: MatchPattern): On;

  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function id(id: string): On;

  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function type(tp: string): On;

  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } [b] - the clickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function clickable(b?: boolean): On;

  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } [b] - the longClickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function longClickable(b?: boolean): On;

  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } [b] - the scrollable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function scrollable(b?: boolean): On;

  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } [b] - the enabled status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function enabled(b?: boolean): On;

  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } [b] - the focused status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function focused(b?: boolean): On;

  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } [b] the - selected status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function selected(b?: boolean): On;

  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } [b] - the checked status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function checked(b?: boolean): On;

  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } [b] - the checkable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function checkable(b?: boolean): On;

  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in front of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function isBefore(on: On): On;

  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in back of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function isAfter(on: On): On;
  /**
   * Requires that the target Component which is inside of another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is inside of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function within(on: On): On;

  /**
   * Specifies the bundleName of the application which the window that the target Component is located belongs.
   *
   * @param { string } bundleName - the bundleName of the specified window.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function inWindow(bundleName: string): On;
  
  /**
   * Specifies the displayId to which the target Component belongs.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function belongingDisplay(displayId: int): On;

  /**
   * Specifies the description for the target Component.
   *
   * @param { string } val - the description value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of description value,set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function description(val: string, pattern?: MatchPattern): On;
  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function id(id: string, pattern: MatchPattern): On;
  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function type(tp: string, pattern: MatchPattern): On;
  /**
   * Specifies the hint for the target Component.
   *
   * @param { string } val - the hint value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value,Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function hint(val: string, pattern?: MatchPattern): On;

  /**
   * Specifies the original text for the target Component.
   * If the accessibility property 'accessibilityLevel' of a component is set to 'no' or 'no-hide-descendants',
   * you will not be able to use {@link On.text} to match the component with the specified original text, but you can use this method to achieve it;
   * if the component does not set the above accessibility property, this method has no difference with {@link On.text}
   *
   * @param { string } text - the original text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value, Set it default {@link MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function originalText(text: string, pattern?: MatchPattern): On;
}

 /*** if arkts dynamic */
 export {
   UiComponent,
   UiDriver,
   BY,
   By
 };
 /*** endif */
 
export {
  Component,
  Driver,
  UiWindow,
  ON,
  On,
  MatchPattern,
  DisplayRotation,
  ResizeDirection,
  WindowMode,
  Point,
  WindowFilter,
  Rect,
  PointerMatrix,
  UiDirection,
  MouseButton,
  UIElementInfo,
  UIEventObserver,
  TouchPadSwipeOptions,
  InputTextMode,
  WindowChangeType,
  ComponentEventType,
  WindowChangeOptions,
  ComponentEventOptions,
  TouchOptions
};
