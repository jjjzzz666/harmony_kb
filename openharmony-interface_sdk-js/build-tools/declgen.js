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

const fs = require('fs');
const path = require('path');
const commander = require('commander');
const { generateInteropDecls } = require('declgen/build/src/generateInteropDecls');
let inputFileDir = '';
let outputFileDir = '';
const CONFIG = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'remove_declgen.json'), 'utf8')
);

function main() {
    const program = new commander.Command();
    program.name('intToNumber').version('0.0.1');
    program
        .option('--input <string>', 'input path')
        .option('--output <string>', 'output path')
        .action((opts) => {
            if (!opts.input || !opts.output) {
                console.error(
                    'Error: Must provide --input and --output parameters'
                );
                process.exit(1);
            }
            // 将相对路径解析为绝对路径
            inputFileDir = path.resolve(opts.input);
            outputFileDir = path.resolve(opts.output);
            // 检查输入目录是否存在
            if (!fs.existsSync(inputFileDir)) {
                console.error(
                    `Error: Input directory does not exist: ${inputFileDir}`
                );
                process.exit(1);
            }
            runDeclgen(inputFileDir, outputFileDir);
        });
    program.parse(process.argv);
}

function runDeclgen(inputDir, outputDir) {
    const inputFiles = [];
    readFile(inputDir + '/api', inputFiles);
    readFile(inputDir + '/arkts', inputFiles);
    readFile(inputDir + '/component', inputFiles);
    readFile(inputDir + '/kits', inputFiles);
    const config = {
        inputDirs: [],
        inputFiles: inputFiles,
        outDir: outputDir,
        rootDir: inputDir,
        customResolveModuleNames: resolveModuleNames(inputDir)
    };
    generateInteropDecls(config);
}

function resolveModuleNames(inputDir) {
    return (moduleNames, containingFile) => {
        const resolvedModuleNames = [];
        moduleNames.forEach((moduleName) => {
            let dirPath = path.dirname(containingFile);
            if (moduleName.startsWith('@ohos.')) {
                dirPath = path.join(inputDir, 'api');
            } else if (moduleName.startsWith('@arkts.')) {
                dirPath = path.join(inputDir, 'arkts');
            } else if (dirPath === path.join(inputDir, 'kits')) {
                dirPath = path.join(inputDir, 'api');
            }
            let resolveModule = getResolveModule(dirPath, moduleName, [
                '.d.ts',
                '.d.ets'
            ]);
            if (resolveModule) {
                resolvedModuleNames.push(resolveModule);
            }
        });
        return resolvedModuleNames;
    };
}

function getResolveModule(dirPath, moduleName, extensions) {
    let resolvedModuleFull = {
        resolvedFileName: '',
        isExternalLibraryImport: false,
        extension: ''
    };
    const fileName = moduleName.replace(/^\.\//, '');
    for (let i = 0; i < extensions.length; i++) {
        const extension = extensions[i];
        const filePath = path.join(dirPath, fileName + extension);
        resolvedModuleFull.resolvedFileName = filePath;
        resolvedModuleFull.extension = extension;
        if (!fs.existsSync(filePath)) {
            continue;
        }
        break;
    }
    return resolvedModuleFull;
}

/**

读取目录下所有文件
@param {string} inputDir 文件目录
@param {Array} utFiles 所有文件
*/
function readFile(inputDir, utFiles) {
    try {
        const files = fs.readdirSync(inputDir);
        files.forEach((element) => {
            if (element === 'build-tools') {
                return;
            }
            const filePath = path.join(inputDir, element);
            const status = fs.statSync(filePath);
            const relativePath = path.normalize(
                path.relative(inputFileDir, filePath)
            );
            if (status.isDirectory()) {
                readFile(filePath, utFiles);
            } else if (!CONFIG.removeFile.includes(relativePath.replace(/\//g, '\\'))) {
                utFiles.push(filePath);
            }
        });
    } catch (e) {
        console.error('Error reading files: ' + e.message);
    }
}

main();