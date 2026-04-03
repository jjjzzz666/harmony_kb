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

// import { Command } from "commander";
// import { PackagingType } from "./model/Enums";
// import { makePackagingOption } from "./utils/utils";
import { packagingEntry } from "./src/PackagingEntry";

function main(type: string, inputDir: string, outputDir?: string): void {
  // const program: Command = makePackagingOption('package_tools', '1.0.0', packagingEntry);
  // program.parse(process.argv);
  packagingEntry(type, inputDir, outputDir);
}

// node package_tools.js type inputDir outputDir
main(process.argv[2], process.argv[3], process.argv[4]);