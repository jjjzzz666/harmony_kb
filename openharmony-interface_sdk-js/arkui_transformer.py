#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2025 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import argparse
import sys
import os
import shutil
import subprocess

PARSE_ETS2_API = "interface/sdk-js/build-tools/arkui_transformer"
PACKAGE_PATH = "build/arkui_transformer.js"


def compile_package(options):
    tool_path = os.path.abspath(os.path.join(options.source_root_dir, PARSE_ETS2_API))
    npm = os.path.abspath(options.npm_path)
    package_path = os.path.abspath(os.path.join(options.source_root_dir, PARSE_ETS2_API, PACKAGE_PATH))
    nodejs = os.path.abspath(options.node_js)
    input_dir = os.path.abspath(options.input)
    output = os.path.abspath(options.output)
    config_path = ''
    if (len(options.config_path) > 0):
        config_path = os.path.abspath(options.config_path)

    custom_env = {
        'PATH': f"{os.path.dirname(os.path.abspath(options.node_js))}:{os.environ.get('PATH')}",
        'NODE_HOME': os.path.dirname(os.path.abspath(options.node_js)),
    }

    process = subprocess.run([npm, "run", "compile:arkui"], env=custom_env, cwd=tool_path, shell=False)

    if os.path.exists(package_path):
        if (len(config_path) > 0):
            p = subprocess.run([nodejs, package_path, "--input-dir", input_dir, "--target-dir", output, "--config-path", config_path], cwd=tool_path, shell=False)
        else:
            p = subprocess.run([nodejs, package_path, "--input-dir", input_dir, "--target-dir", output], cwd=tool_path, shell=False)
    else:
        print("arkui_transformer: tool path does not exist")
    
    return process


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    parser.add_argument('--output', required=True)
    parser.add_argument('--config_path', required=False, default='')
    parser.add_argument('--source_root_dir', required=True)
    parser.add_argument('--npm-path', required=True)
    parser.add_argument('--node-js', required=True)
    options = parser.parse_args()
    compile_package(options)


if __name__ == '__main__':
    sys.exit(main())
