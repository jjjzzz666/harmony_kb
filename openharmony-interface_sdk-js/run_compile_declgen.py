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

import os
import sys
import subprocess
import argparse
import shutil
import tarfile
from pathlib import Path

PACKAGE_PATH = "interface/sdk-js/build-tools/declgen.js"
TOOL_WAREHOURSE = 'interface/sdk-js/build-tools'


def ensure_dir_exists(target_path): 
    path = Path(target_path).absolute()
    if not path.exists():
        print(f"compile_declgen out_path not exit and creating:{path}")
        path.mkdir(parents=True, exist_ok=True)
        return str(path) 
    else:
        print(f"compile_declgen out_path already exit:{path}")
        return str(path)
    

def traverse_function(source_root_dir: str, input_path: str, out_interop_path: str, node_js: str):
    source_root_dir = os.path.abspath(source_root_dir)
    input_dir = os.path.abspath(input_path)
    out_path = os.path.abspath(os.path.join(out_interop_path, 'dynamic-interop'))
    package_path = os.path.abspath(os.path.join(source_root_dir, PACKAGE_PATH))
    nodejs = os.path.abspath(node_js)
    output_dir = ensure_dir_exists(out_path)
    if os.path.exists(package_path):
        try:
            result = subprocess.run([nodejs, package_path, "--input", input_dir, "--output", output_dir], cwd=source_root_dir, shell=False)
            path_interop_api = os.path.join(os.path.join(out_path,'api')) 
            path_interop_arkts = os.path.join(os.path.join(out_path,'arkts'))
            path_interop_kits = os.path.join(os.path.join(out_path,'kits'))
            if not os.path.exists(path_interop_api) or not os.path.exists(path_interop_arkts) or not os.path.exists(path_interop_kits):
                raise FileNotFoundError(f"Missing interop directories in output")
            print('run_compile_declgen success:', result)
        except subprocess.CalledProcessError as e:
            print(f"run_compile_declgen node failed: {str(e.stderr)}")
    else:
        print("run_compile_declgen: tool path does not exist")


def extract(package_path, dest_path, package_name, current_os):
    # 解压tar.gz包到目录
    dest_package_path = os.path.join(dest_path, package_name)
    temp_package_path = os.path.join(dest_path, current_os + package_name)
    if (os.path.exists(dest_package_path) or os.path.exists(temp_package_path)):
        return
    os.makedirs(temp_package_path, exist_ok=True)
    try:
        with tarfile.open(package_path, 'r:gz') as tar:
            tar.extractall(path=temp_package_path)
    except tarfile.TarError as e:
        print(f'Error extracting files: {e}')
    package_path = os.path.join(temp_package_path, 'package')
    if not (os.path.exists(dest_package_path)):
        try:
            shutil.copytree(package_path, dest_package_path, symlinks=True, dirs_exist_ok=True)
            shutil.rmtree(temp_package_path, ignore_errors=True)
        finally:    
            if os.path.exists(temp_package_path):
                shutil.rmtree(temp_package_path, ignore_errors=True)
        
    

def run(args): 
    parser = argparse.ArgumentParser()
    parser.add_argument('--root-build-dir', required=True)
    parser.add_argument('--current-os-dir', required=True)
    parser.add_argument('--output-interface-sdk', required=True)
    parser.add_argument('--output-interop-sdk', required=True)
    parser.add_argument('--tool-dir', required=True)
    parser.add_argument('--node-js', required=True)
    options = parser.parse_args()
    source_path = options.root_build_dir
    current_os = options.current_os_dir
    sdk_path = options.output_interface_sdk
    out_interop_path = options.output_interop_sdk
    node_path = options.node_js
    declgen_path = options.tool_dir
    node_modules_path = os.path.join(source_path, TOOL_WAREHOURSE, "node_modules")
    extract(declgen_path, node_modules_path, 'declgen', current_os)
    traverse_function(source_path, sdk_path, out_interop_path, node_path)


if __name__ == "__main__":
    sys.exit(run(sys.argv[1:]))
