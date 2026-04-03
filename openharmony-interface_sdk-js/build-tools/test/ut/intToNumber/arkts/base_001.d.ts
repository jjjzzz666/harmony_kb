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
         * @type { int }
         */
        basicInt: int;

        /**
         * 基础long类型测试  
         * @type { long }
         */
        basiclong: long;

        /**
         * 基础double类型测试
         * @type { double }
         */
        basicDouble: double;

        /**
         * 不需要转换的number类型
         * @type { number }
         */
        basicNumber: number;
    }

    export class UnionTests {
        /**
         * 简单联合类型测试
         * @type { int | string }
         */
        intOrString: int | string;

        /**
         * 复杂联合类型测试
         * @type { int | long | double | string | boolean }
         */
        complexUnion: int | long | double | string | boolean;

        /**
         * 已包含number的联合类型（测试去重）
         * @type { int | number | long }
         */
        unionWithNumber: int | number | long;

        /**
         * 不需要转换的联合类型
         * @type { string | boolean | null }
         */
        noConversionUnion: string | boolean | null;

        /**
         * 数组联合类型
         * @type { int[] | string[] }
         */
        arrayUnion: int[] | string[];

        /**
         * 复杂数组联合类型
         * @type { int[] | long[] | boolean }
         */
        complexArrayUnion: int[] | long[] | boolean;
    }

    export class ArrayTests {
        /**
         * 基础int数组
         * @type { int[] }
         */
        intArray: int[];

        /**
         * 基础long数组
         * @type { long[] }
         */
        longArray: long[];

        /**
         * 基础double数组
         * @type { double[] }
         */
        doubleArray: double[];

        /**
         * 多维int数组
         * @type { int[][] }
         */
        intMatrix: int[][];

        /**
         * 三维long数组
         * @type { long[][][] }
         */
        long3D: long[][][];

        /**
         * 不需要转换的数组
         * @type { string[] }
         */
        stringArray: string[];
    }

    export class ReadonlyArrayTests {
        /**
         * 只读int数组
         * @type { readonly int[] }
         */
        readonlyIntArray: readonly int[];

        /**
         * 只读long数组
         * @type { readonly long[] }
         */
        readonlylongArray: readonly long[];

        /**
         * 只读多维数组
         * @type { readonly double[][] }
         */
        readonlyMatrix: readonly double[][];

        /**
         * 只读数组联合类型
         * @type { readonly int[] | string }
         */
        readonlyUnion: readonly int[] | string;
    }

    export class GenericArrayTests {
        /**
         * Array泛型int
         * @type { Array<int> }
         */
        arrayInt: Array<int>;

        /**
         * Array泛型long
         * @type { Array<long> }
         */
        arraylong: Array<long>;

        /**
         * Array泛型double
         * @type { Array<double> }
         */
        arrayDouble: Array<double>;

        /**
         * Array泛型联合类型
         * @type { Array<int | string> }
         */
        arrayUnionGeneric: Array<int | string>;

        /**
         * 嵌套Array泛型
         * @type { Array<Array<int>> }
         */
        nestedArrayGeneric: Array<Array<int>>;

        /**
         * 只读泛型数组
         * @type { readonly Array<long> }
         */
        readonlyGenericArray: readonly Array<long>;
    }

    export class GenericTests {
        /**
         * Promise泛型int
         * @type { Promise<int> }
         */
        promiseInt: Promise<int>;

        /**
         * Promise泛型long
         * @type { Promise<long> }
         */
        promiselong: Promise<long>;

        /**
         * Map泛型
         * @type { Map<string, int> }
         */
        mapStringInt: Map<string, int>;

        /**
         * Record泛型
         * @type { Record<string, long> }
         */
        recordStringlong: Record<string, long>;

        /**
         * Set泛型
         * @type { Set<double> }
         */
        setDouble: Set<double>;

        /**
         * 复杂嵌套泛型
         * @type { Promise<Map<string, int[]>> }
         */
        complexNested: Promise<Map<string, int[]>>;

        /**
         * 嵌套泛型with数组
         * @type { Promise<Array<int>> }
         */
        nestedGeneric: Promise<Array<int>>;
    }

    export class ObjectTypeTests {
        /**
         * 简单对象类型
         * @type { { id: int, name: string } }
         */
        simpleObject: { id: int, name: string };

        /**
         * 复杂对象类型
         * @type { { id: int, value: long, data: double[] } }
         */
        complexObject: { id: int, value: long, data: double[] };

        /**
         * 嵌套对象类型
         * @type { { user: { id: int, profile: { age: int, height: long } } } }
         */
        nestedObject: { user: { id: int, profile: { age: int, height: long } } };

        /**
         * 可选属性对象
         * @type { { required: int, optional?: long, nullable: double | null } }
         */
        optionalObject: { required: int, optional?: long, nullable: double | null };

        /**
         * 对象联合类型
         * @type { { type: 'A', value: int } | { type: 'B', value: long } }
         */
        objectUnion: { type: 'A', value: int } | { type: 'B', value: long };

        /**
         * 泛型对象数组
         * @type { Array<{ id: int, score: long }> }
         */
        genericObjectArray: Array<{ id: int, score: long }>;
    }

    export class FunctionTypeTests {
        /**
         * 简单函数类型
         * @type { (param: int) => long }
         */
        simpleFunction: (param: int) => long;

        /**
         * 复杂函数类型
         * @type { (a: int, b: long[], c: { value: double }) => Promise<int[]> }
         */
        complexFunction: (a: int, b: long[], c: { value: double }) => Promise<int[]>;

        /**
         * 多参数函数类型
         * @type { (x: int, y: int, options?: { precision: long }) => double }
         */
        multiParamFunction: (x: int, y: int, options?: { precision: long }) => double;

        /**
         * 不需要转换的函数类型
         * @type { (param: string) => boolean }
         */
        stringFunction: (param: string) => boolean;
    }

    export class MixedComplexTests {
        /**
         * 超复杂嵌套类型
         * @type { Promise<{ data: readonly int[], meta: { count: double, items: Array<{ id: int, value: long }> } }> }
         */
        ultraComplex: Promise<{ data: readonly int[], meta: { count: double, items: Array<{ id: int, value: long }> } }>;

        /**
         * 函数返回复杂类型
         * @type { () => { process: (input: int[]) => Promise<Map<string, long>> } }
         */
        functionReturningComplex: () => { process: (input: int[]) => Promise<Map<string, long>> };

        /**
         * 数组中的函数类型
         * @type { Array<(param: int) => double> }
         */
        arrayOfFunctions: Array<(param: int) => double>;
    }

    export class FunctionTests {
        /**
         * 函数参数类型转换测试
         * @param { int } intParam - 整数参数
         * @param { long } longParam - 浮点参数  
         * @param { double } doubleParam - 双精度参数
         * @param { int | string } unionParam - 联合类型参数
         * @param { int[] } arrayParam - 数组参数
         * @param { Array<long> } genericArrayParam - 泛型数组参数
         * @param { { id: int, value: double } } objectParam - 对象参数
         * @param { readonly int[] } readonlyParam - 只读数组参数
         * @returns { int }
         */
        testFunction(
            intParam: int,
            longParam: long,
            doubleParam: double,
            unionParam: int | string,
            arrayParam: int[],
            genericArrayParam: Array<long>,
            objectParam: { id: int, value: double },
            readonlyParam: readonly int[]
        ): int;

        /**
         * 返回值类型转换测试
         * @returns { long }
         */
        returnlong(): long;

        /**
         * 返回联合类型测试
         * @returns { int | boolean }
         */
        returnUnion(): int | boolean;

        /**
         * 返回数组类型
         * @returns { double[] }
         */
        returnArray(): double[];

        /**
         * 返回泛型类型
         * @returns { Promise<int> }
         */
        returnGeneric(): Promise<int>;

        /**
         * 返回对象类型
         * @returns { { result: long, data: int[] } }
         */
        returnObject(): { result: long, data: int[] };

        /**
         * 返回复杂嵌套类型
         * @returns { Promise<{ items: Array<{ id: int, scores: long[] }> }> }
         */
        returnComplexNested(): Promise<{ items: Array<{ id: int, scores: long[] }> }>;
    }
}

/**
 * 全局函数测试
 * @param { int } value - 输入值
 * @returns { long }
 */
export declare function globalFunction(value: int): long;

/**
 * 复杂全局函数测试
 * @param { readonly int[] } readonlyArray - 只读数组参数
 * @param { Array<long> } genericArray - 泛型数组参数
 * @param { { id: int, data: double[] } } complexObject - 复杂对象参数
 * @returns { Promise<{ result: int[], meta: { count: long, summary: { total: double } } }> }
 */
export declare function complexGlobalFunction(
    readonlyArray: readonly int[],
    genericArray: Array<long>,
    complexObject: { id: int, data: double[] }
): Promise<{ result: int[], meta: { count: long, summary: { total: double } } }>;

/**
 * 类型定义测试
 */
export type MixedType = int | string;

/**
 * 复杂类型定义测试
 */
export type ComplexMixedType = { id: int, values: long[], meta: { count: double } };

/**
 * 回调函数测试
 * @param { double } input - 输入值
 * @returns { int }
 */
export type ProcessorCallback = (input: double) => int;

/**
 * 复杂回调函数测试
 * @param { int[] } inputs - 输入数组
 * @param { { options: long, config: { precision: double } } } settings - 设置对象
 * @returns { Promise<Array<{ result: int, score: long }>> }
 */
export type ComplexProcessorCallback = (
    inputs: int[],
    settings: { options: long, config: { precision: double } }
) => Promise<Array<{ result: int, score: long }>>;

/**
 * 接口方法测试
 */
export interface TestInterface {
    /**
     * 接口属性
     * @type { ?int }
     */
    id?: int;

    /**
     * 接口方法
     * @param { long } input - 输入值
     * @returns { double }
     */
    process(input: long): double;

    /**
     * 复杂接口方法
     * @param { int[] } data - 数据数组
     * @param { Array<{ key: string, value: long }> } items - 项目数组
     * @returns { Promise<{ results: double[], summary: { total: int, average: long } }> }
     */
    complexProcess(
        data: int[],
        items: Array<{ key: string, value: long }>
    ): Promise<{ results: double[], summary: { total: int, average: long } }>;

    /**
     * 只读数组属性
     * @type { readonly int[] }
     */
    readonlyData: readonly int[];

    /**
     * 函数类型属性
     * @type { (input: long) => double }
     */
    processor: (input: long) => double;
}
