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
 * @kit AbilityKit
 */
/**
 * @since 20
 */
export namespace TestModuleB {
    /**
     * @since 20
     *
     */
    import { TestResult, OperationStatus } from './base_002.d.ts';
    /**
     * @since 20
     *
     */
    export class ResponseHandler {
        /**
         * @since 20
         *
         */
        private responses: TestResult<any>[] = [];
        /**
         * @since 20
         *
         */
        public addResponse<T>(result: TestResult<T>): void {
            this.responses.push(result);
        }
    }
    /**
     * @since 20
     *
     */
    export class UnusedImportDemo {
        /**
         * @since 20
         *
         */
        private unusedField: string = "This class imports types but doesn't use them";
        /**
         * @since 20
         *
         */
        public anotherMethod(): number {
            return 42;
        }
    }
    /**
     * @since 20
     *
     */
    export type LocalTypeOnly = {
        id: string;
        name: string;
        value: number;
    };
    
    // import { NonExistentType } from './base_002';
    /**
     * @since 20
     *
     */
    export class ErrorSimulator {
        /**
         * @since 20
         *
         */
        public simulateImportError(): void {
            try {
                
                const value: NonExistentType = {} as any;
                console.log("This would fail if uncommented");
            }
            catch (error) {
                console.error("Expected error:", error);
            }
        }
    }
    /**
     * @since 20
     *
     */
    export enum ResponseCode {
        /**
         * @since 20
         *
         */
        OK = 200,
        /**
         * @since 20
         *
         */
        CREATED = 201,
        /**
         * @since 20
         *
         */
        BAD_REQUEST = 400,
        /**
         * @since 20
         *
         */
        UNAUTHORIZED = 401,
        /**
         * @since 20
         *
         */
        NOT_FOUND = 404
    }
    /**
     * @since 20
     *
     */
    export interface ProcessingOptions {
        /**
         * @since 20
         *
         */
        maxRetries: number;
        /**
         * @since 20
         *
         */
        timeout: number;
        /**
         * @since 20
         *
         */
        fallbackEnabled: boolean;
        /**
         * @since 20
         *
         */
        logging: {
            level: 'debug' | 'info' | 'warn' | 'error';
            format: 'json' | 'text';
        };
    }
}
