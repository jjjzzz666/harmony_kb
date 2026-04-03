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
export declare namespace ComprehensiveTest {
    export class BasicTests {
        /**
         * 基础int类型测试
         * @type { number }
         */
        basicInt: number;
        /**
         * 基础long类型测试
         * @type { number }
         */
        basiclong: number;
        /**
         * 基础double类型测试
         * @type { number }
         */
        basicDouble: number;
        /**
         * 不需要转换的number类型
         * @type { number }
         */
        basicNumber: number;
    }
    export class UnionTests {
        /**
         * 简单联合类型测试
         * @type { number | string }
         */
        intOrString: number | string;
        /**
         * 复杂联合类型测试
         * @type { number | string | boolean }
         */
        complexUnion: number | string | boolean;
        /**
         * 已包含number的联合类型（测试去重）
         * @type { number }
         */
        unionWithNumber: number;
        /**
         * 不需要转换的联合类型
         * @type { string | boolean | null }
         */
        noConversionUnion: string | boolean | null;
        /**
         * 数组联合类型
         * @type { number[] | string[] }
         */
        arrayUnion: number[] | string[];
        /**
         * 复杂数组联合类型
         * @type { number[] | boolean }
         */
        complexArrayUnion: number[] | boolean;
    }
    export class ArrayTests {
        /**
         * 基础int数组
         * @type { number[] }
         */
        intArray: number[];
        /**
         * 基础long数组
         * @type { number[] }
         */
        longArray: number[];
        /**
         * 基础double数组
         * @type { number[] }
         */
        doubleArray: number[];
        /**
         * 多维int数组
         * @type { number[][] }
         */
        intMatrix: number[][];
        /**
         * 三维long数组
         * @type { number[][][] }
         */
        long3D: number[][][];
        /**
         * 不需要转换的数组
         * @type { string[] }
         */
        stringArray: string[];
    }
    export class ReadonlyArrayTests {
        /**
         * 只读int数组
         * @type { readonly number[] }
         */
        readonlyIntArray: readonly number[];
        /**
         * 只读long数组
         * @type { readonly number[] }
         */
        readonlylongArray: readonly number[];
        /**
         * 只读多维数组
         * @type { readonly number[][] }
         */
        readonlyMatrix: readonly number[][];
        /**
         * 只读数组联合类型
         * @type { readonly number[] | string }
         */
        readonlyUnion: readonly number[] | string;
    }
    export class GenericArrayTests {
        /**
         * Array泛型int
         * @type { Array<number> }
         */
        arrayInt: Array<number>;
        /**
         * Array泛型long
         * @type { Array<number> }
         */
        arraylong: Array<number>;
        /**
         * Array泛型double
         * @type { Array<number> }
         */
        arrayDouble: Array<number>;
        /**
         * Array泛型联合类型
         * @type { Array<number | string> }
         */
        arrayUnionGeneric: Array<number | string>;
        /**
         * 嵌套Array泛型
         * @type { Array<Array<number>> }
         */
        nestedArrayGeneric: Array<Array<number>>;
        /**
         * 只读泛型数组
         * @type { readonly Array<number> }
         */
        readonlyGenericArray: readonly Array<number>;
    }
    export class GenericTests {
        /**
         * Promise泛型int
         * @type { Promise<number> }
         */
        promiseInt: Promise<number>;
        /**
         * Promise泛型long
         * @type { Promise<number> }
         */
        promiselong: Promise<number>;
        /**
         * Map泛型
         * @type { Map<string, number> }
         */
        mapStringInt: Map<string, number>;
        /**
         * Record泛型
         * @type { Record<string, number> }
         */
        recordStringlong: Record<string, number>;
        /**
         * Set泛型
         * @type { Set<number> }
         */
        setDouble: Set<number>;
        /**
         * 复杂嵌套泛型
         * @type { Promise<Map<string, number[]>> }
         */
        complexNested: Promise<Map<string, number[]>>;
        /**
         * 嵌套泛型with数组
         * @type { Promise<Array<number>> }
         */
        nestedGeneric: Promise<Array<number>>;
    }
    export class ObjectTypeTests {
        /**
         * 简单对象类型
         * @type { { id: number, name: string } }
         */
        simpleObject: {
            id: number;
            name: string;
        };
        /**
         * 复杂对象类型
         * @type { { id: number, value: number, data: number[] } }
         */
        complexObject: {
            id: number;
            value: number;
            data: number[];
        };
        /**
         * 嵌套对象类型
         * @type { { user: { id: number, profile: { age: number, height: number}} } }
         */
        nestedObject: {
            user: {
                id: number;
                profile: {
                    age: number;
                    height: number;
                };
            };
        };
        /**
         * 可选属性对象
         * @type { { required: number, optional?: number, nullable: number | null } }
         */
        optionalObject: {
            required: number;
            optional?: number;
            nullable: number | null;
        };
        /**
         * 对象联合类型
         * @type { { type: "A", value: number} | { type: "B", value: number } }
         */
        objectUnion: {
            type: 'A';
            value: number;
        } | {
            type: 'B';
            value: number;
        };
        /**
         * 泛型对象数组
         * @type { Array<{ id: number, score: number}> }
         */
        genericObjectArray: Array<{
            id: number;
            score: number;
        }>;
    }
    export class FunctionTypeTests {
        /**
         * 简单函数类型
         * @type { (param: number) => number }
         */
        simpleFunction: (param: number) => number;
        /**
         * 复杂函数类型
         * @type { (a: number, b: number[], c: { value: number}) => Promise<number[]> }
         */
        complexFunction: (a: number, b: number[], c: {
            value: number;
        }) => Promise<number[]>;
        /**
         * 多参数函数类型
         * @type { (x: number, y: number, options?: { precision: number}) => number }
         */
        multiParamFunction: (x: number, y: number, options?: {
            precision: number;
        }) => number;
        /**
         * 不需要转换的函数类型
         * @type { (param: string) => boolean }
         */
        stringFunction: (param: string) => boolean;
    }
    export class MixedComplexTests {
        /**
         * 超复杂嵌套类型
         * @type { Promise<{ data: readonly number[], meta: { count: number, items: Array<{ id: number, value: number}>}}> }
         */
        ultraComplex: Promise<{
            data: readonly number[];
            meta: {
                count: number;
                items: Array<{
                    id: number;
                    value: number;
                }>;
            };
        }>;
        /**
         * 函数返回复杂类型
         * @type { () => { process: (input: number[]) => Promise<Map<string, number>> } }
         */
        functionReturningComplex: () => {
            process: (input: number[]) => Promise<Map<string, number>>;
        };
        /**
         * 数组中的函数类型
         * @type { Array<(param: number) => number> }
         */
        arrayOfFunctions: Array<(param: number) => number>;
    }
    export class FunctionTests {
        /**
         * 函数参数类型转换测试
         * @param { number } intParam - 整数参数
         * @param { number } longParam - 浮点参数
         * @param { number } doubleParam - 双精度参数
         * @param { number | string } unionParam - 联合类型参数
         * @param { number[] } arrayParam - 数组参数
         * @param { Array<number> } genericArrayParam - 泛型数组参数
         * @param { { id: number, value: number } } objectParam - 对象参数
         * @param { readonly number[] } readonlyParam - 只读数组参数
         * @returns { number }
         */
        testFunction(intParam: number, longParam: number, doubleParam: number, unionParam: number | string, arrayParam: number[], genericArrayParam: Array<number>, objectParam: {
            id: number;
            value: number;
        }, readonlyParam: readonly number[]): number;
        /**
         * 返回值类型转换测试
         * @returns { number }
         */
        returnlong(): number;
        /**
         * 返回联合类型测试
         * @returns { number | boolean }
         */
        returnUnion(): number | boolean;
        /**
         * 返回数组类型
         * @returns { number[] }
         */
        returnArray(): number[];
        /**
         * 返回泛型类型
         * @returns { Promise<number> }
         */
        returnGeneric(): Promise<number>;
        /**
         * 返回对象类型
         * @returns { { result: number, data: number[] } }
         */
        returnObject(): {
            result: number;
            data: number[];
        };
        /**
         * 返回复杂嵌套类型
         * @returns { Promise<{ items: Array<{ id: number, scores: number[]}>}> }
         */
        returnComplexNested(): Promise<{
            items: Array<{
                id: number;
                scores: number[];
            }>;
        }>;
    }
}
/**
 * 全局函数测试
 * @param { number } value - 输入值
 * @returns { number }
 */
export declare function globalFunction(value: number): number;
/**
 * 复杂全局函数测试
 * @param { readonly number[] } readonlyArray - 只读数组参数
 * @param { Array<number> } genericArray - 泛型数组参数
 * @param { { id: number, data: number[] } } complexObject - 复杂对象参数
 * @returns { Promise<{ result: number[], meta: { count: number, summary: { total: number}}}> }
 */
export declare function complexGlobalFunction(readonlyArray: readonly number[], genericArray: Array<number>, complexObject: {
    id: number;
    data: number[];
}): Promise<{
    result: number[];
    meta: {
        count: number;
        summary: {
            total: number;
        };
    };
}>;
/**
 * 类型定义测试
 */
export type MixedType = number | string;
/**
 * 复杂类型定义测试
 */
export type ComplexMixedType = {
    id: number;
    values: number[];
    meta: {
        count: number;
    };
};
/**
 * 回调函数测试
 * @param { number } input - 输入值
 * @returns { number }
 */
export type ProcessorCallback = (input: number) => number;
/**
 * 复杂回调函数测试
 * @param { number[] } inputs - 输入数组
 * @param { { options: number, config: { precision: number} } } settings - 设置对象
 * @returns { Promise<Array<{ result: number, score: number}>> }
 */
export type ComplexProcessorCallback = (inputs: number[], settings: {
    options: number;
    config: {
        precision: number;
    };
}) => Promise<Array<{
    result: number;
    score: number;
}>>;
/**
 * 接口方法测试
 */
export interface TestInterface {
    /**
     * 接口属性
     * @type { ?number }
     */
    id?: number;
    /**
     * 接口方法
     * @param { number } input - 输入值
     * @returns { number }
     */
    process(input: number): number;
    /**
     * 复杂接口方法
     * @param { number[] } data - 数据数组
     * @param { Array<{ key: string, value: number}> } items - 项目数组
     * @returns { Promise<{ results: number[], summary: { total: number, average: number}}> }
     */
    complexProcess(data: number[], items: Array<{
        key: string;
        value: number;
    }>): Promise<{
        results: number[];
        summary: {
            total: number;
            average: number;
        };
    }>;
    /**
     * 只读数组属性
     * @type { readonly number[] }
     */
    readonlyData: readonly number[];
    /**
     * 函数类型属性
     * @type { (input: number) => number }
     */
    processor: (input: number) => number;
}
