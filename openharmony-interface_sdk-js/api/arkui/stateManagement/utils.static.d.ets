'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { MonitorValueCallback, MonitorCallback, IMonitorDecoratedVariable, IVariableOwner } from './decorator';
import { CustomComponentLifecycle } from '../component/customComponent';
/**
 * UIUtils is a state management tool class for operating the observed data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class UIUtils {
  /**
   * Get raw object from the Object, like builtin type, objectLiteral.
   * If input parameter is a regular Object without proxy, return Object itself.
   *
   * @param { T } source input source Object data.
   * @returns { T } raw object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static getTarget<T extends object>(source: T): T;

  /**
   * Make non-observed data into observed data.
   * Support builtin type and objectLiteral.
   *
   * @param { T } source input source object data.
   * @returns { T } proxy object from the source object data.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
   static makeObserved<T extends object>(source: T): T;

   /**
   * Creates read-only data binding.
   *
   *
   * Example. UIUtils.makeBinding<number>(()=>this.num);
   *
   * Supports simple getters for read-only data.
   * Intended for primitive value parameters when calling a @Builder function where arguments are of type Binding.
   *
   * @param { GetterCallback<T> } getter - A value or a function that returns the current value of type T.
   * @returns { Binding<T> } read-only data binding value
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static makeBinding<T>(getter: GetterCallback<T>): Binding<T>;

  /**
   * Creates a mutable data binding.
   *
   * Two functions to implement function overloading.
   *
   * Example. UIUtils.makeBinding<number>(()=>this.num, val => this.num = val);
   *
   * Supports getter-setter pairs for mutable data.
   * Intended for primitive value parameters when calling a @Builder
   * function where arguments are of type MutableBinding.
   * If provided, a MutableBinding is created.
   *
   * @param { GetterCallback<T> } getter - A value or a function that returns the current value of type T.
   * @param { SetterCallback<T> } setter - A function to set a new value of type T. 
   * @returns { MutableBinding<T> } mutable data binding value
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>;

  /**
   * Dynamically add monitor for state variable change.
   *
   * @param { MonitorValueCallback | MonitorValueCallback[] } valueCallback monitored change for state variable.
   * @param { MonitorCallback } monitorCallback the function triggered when state variable changes.
   * @param { MonitorOptions } [options] the monitor configuration.
   * @returns { IMonitorDecoratedVariable } monitor handle.
   * @throws { BusinessError } 130000 - options.owner is not ComponentV2 struct.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static addMonitor(valueCallback: MonitorValueCallback | MonitorValueCallback[],
    monitorCallback: MonitorCallback, options?: MonitorOptions): IMonitorDecoratedVariable;
  
  /**
   * Dynamically clear monitor callback for state varaible change.
   *
   * @param { IMontiorDecoratedVariable } monitor handle
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static clearMonitor(monitor: IMonitorDecoratedVariable): void;
  /**
   * Determine whether the data object is observable and return the observation result.
   *
   * @param { T } source - input source object data.
   * @returns { ObservedResult } return result of whether a class is observable.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static canBeObserved<T extends object>(source: T): ObservedResult;

  /**
   * Get lifecycle instance from custom component.
   *
   * @param { T } customComponent - custom component instance
   * @returns { CustomComponentLifecycle } the lifecycle that the custom component belong to .
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getLifecycle<T extends IVariableOwner>(customComponent: T): CustomComponentLifecycle;
}

/**
 * Getter callback type. It is used to get value.
 *
 * @typedef { function } GetterCallback
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare type GetterCallback<T> = () => T;

/**
 * Setter callback type. It is used to assign a new value.
 *
 * @typedef { function } SetterCallback
 * @param { T } newValue - update the value with newValue.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare type SetterCallback<T> = (newValue: T) => void;

/**
 * Represents a read-only data binding.
 * Use with @Builder argument list for primitive types. Use makeBinding to pass values when calling the function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Binding<T> {
  /**
   * Get function that can acquire the value.
   * @returns T
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get value(): T;
}

/**
 * Represents a mutable data binding allowing both read and write operations.
 * Use with @Builder argument list for primitive types. Use makeBinding to pass values when calling the function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class MutableBinding<T> {
  /**
   * Get function that can acquire the value.
   * @returns T
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get value(): T;
  /**
   * Set function that can set the new value.
   * @param { T } newValue new value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  set value(newValue: T);
}

/**
 * Define Monitor options.
 *
 * @interface MonitorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface MonitorOptions {
  /**
   * Used to determine whether the state variable change is
   * triggered synchronously orasynchronously. The default value is false.
   * 
   * @type { ?boolean } isSynchronous parameter
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isSynchronous?: boolean;

  /**
   * Used to handle component freezing.
   * If not set, component freezing won't affect the monitor.
   *
   * @type { ?IVariableOwner } owner - custom component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  owner?: IVariableOwner;

  /**
   * Override path for each valueCallback element.
   * @type { ? (string | string[]) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  path?: string | string[];
}

/**
 * The return result that defines whether the object data is observable.
 *
 * @interface ObservedResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface ObservedResult {
  /**
   * Whether the object data of class/Array/Map/Set/Date type is observable.
   * if true, the object data can be observed.
   * if false, the object data can not be not observed.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  isObserved: boolean;

  /**
   * Reasons why the object data of class/Array/Map/Set/Date type can be observed or not.
   * 1 The object data is not an observable object.
   * 2 The object data is observed data for the following reasons:
   * 2.1 The object data is decorated with @Observed.
   * 2.2 The object data is decorated with V2 @ObservedV2 and @Trace.
   * 2.3 The object data is object literal decorated with V1 decorators or wrapped by makeObserved.
   * 2.4 The object data is built-in type data (Array/Map/Set/Date)
   *     decorated with V1/V2 decorators or wrapped by makeObserved.
   * 2.5 The object data is decorated with @Observed, but not used in UI.
   * 2.6 The object data is decorated with V2 @ObservedV2 and @Trace, but not used in UI.
   * 2.7 The object data is object literal decorated with V1 decorators or wrapped by makeObserved, but not used in UI.
   * 2.8 The object data is built-in type data (Array/Map/Set/Date)
   *     decorated with V1/V2 decorators or wrapped by makeObserved, but not used in UI.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  reason: string;

  /**
   * The UI component information associated with the object data.
   * If the data object can not be observed, will return empty array.
   *
   * @type { DecoratorInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  decoratorInfo: DecoratorInfo[];
}

/**
 * The UI component information associated with the object data.
 *
 * @interface DecoratorInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface DecoratorInfo {
  /**
   * Decorator name of the object data.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  decoratorName: string;

  /**
   * State Variable name of the object data.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  stateVariableName: string;

  /**
   * The custom component name that the object data belongs to.
   * In the V1 scenario, return the custom component name, in the V2 @ObservedV2 scenario, return class name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  owningComponentOrClassName: string;

  /**
   * The custom component id that the object data belongs to.
   * In the V1 scenario, return the custom component id, in the V2 @ObservedV2 scenario, return -1.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  owningComponentId: int;

  /**
   * Dependent component information including custom component and UI component (Text, Image)
   * for the object data.
   * For the V2 @Monitor or @Computed scenario, will return the id and decorated function name by @Monitor or @Computed.
   * For V2 scenario, if it is not used in the UI, nor on @Monitor or @Computed, return an empty array.
   * For V1 scenario, if it is not used in the UI, will return an empty array.
   *
   * @type { ElementInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  dependentInfo: ElementInfo[];
}

/**
 * The custom component and UI component information.
 * For the V2 @Monitor or @Computed scenario, The id and decorated function name by @Monitor
 * or @Computed will be returned.
 *
 * @interface ElementInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface ElementInfo {
  /**
   * Dependent custom component and UI component name.
   * For the V2 @Monitor or @Computed scenario, elementName refers to the name of the decorator and
   * the function name decorated with @Monitor or @Computed.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  elementName: string;

  /**
   * Dependent custom component and UI component id.
   * For the V2 @Monitor or @Computed scenario, elementId refers to the id of
   * the @Monitor or @Computed.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  elementId: int;
}
