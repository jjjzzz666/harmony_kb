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

function deleteEntry(input, dependencePath) {
  const { arkts, arktsGlobal } = require(dependencePath + '/build-tools/koala-wrapper/build/lib/es2panda');
  const currentPath = process.env.PATH || '';
  const etspandaPath = dependencePath + '/build-tools/ets2panda/lib';
  process.env.PATH = `${currentPath}${path.delimiter}${etspandaPath}`;
  process.env.LD_LIBRARY_PATH = etspandaPath;

  const filePath = input;
  const ets2pandaCmd = [
    '_',
    '--extension',
    'ets',
    '--arktsconfig',
    dependencePath + '/build-tools/arktsconfig.json'
  ];
  ets2pandaCmd.push('--debug-info');
  ets2pandaCmd.push(filePath);

  const source = fs.readFileSync(filePath).toString();
  //初始化es2panda
  arktsGlobal.filePath = filePath;
  arktsGlobal.config = arkts.Config.create(ets2pandaCmd).peer;
  arktsGlobal.compilerContext = arkts.Context.createFromString(source);
  arkts.proceedToState(arkts.Es2pandaContextState.ES2PANDA_STATE_PARSED, arktsGlobal.compilerContext.peer);

  //获取文件ast
  const ast = arkts.EtsScript.fromContext();
  const statements = ast.statements;

  let content = '';

  //遍历获取文件内容
  for (const sta of statements) {
    let nodeJSDoc = '';
    const staJSDoc = arkts.getJsdocStringFromDeclaration(sta);
    if (staJSDoc !== 'Empty Jsdoc') {
      nodeJSDoc = staJSDoc + '\n';
    }
    content += nodeJSDoc + sta.dumpSrc();
  }
  console.log(content);
}

function main() {
  const program = new commander.Command();
  program
    .name('delete')
    .version('0.0.1');
  program
    .option('--input <string>', 'path name')
    .option('--build_sdk_path <string>', 'build sdk path')
    .action((opts) => {
      deleteEntry(opts.input, opts.build_sdk_path)
    });
  program.parse(process.argv);
}

main()