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

INTERFACE_PATH = "interface/sdk-js"
PROCESS_INTEROP = "interface/sdk-js/build-tools/process_label_noninterop.js"
PROCESS_GLOBAL_IMPORT = "interface/sdk-js/build-tools/process_global_import.js"


def process_interop(options, sub_input, sub_output, export_flag):
    nodejs = os.path.abspath(options.node_js)
    tool = os.path.abspath(os.path.join(options.source_root_dir, PROCESS_INTEROP))
    cwd_dir = os.path.abspath(os.path.join(
        options.source_root_dir, INTERFACE_PATH))

    intermediates_output = os.path.abspath(options.intermediates_output)
    if options.is_pre == "true":
        intermediates_output = os.path.dirname(os.path.abspath(options.intermediates_output))

    input_dir = intermediates_output + sub_input
    output_dir = intermediates_output + sub_output
    os.makedirs(output_dir, exist_ok=True)
    process = subprocess.run([nodejs, tool, "--input", input_dir,
                                "--output", output_dir, "--export", export_flag], shell=False,
                                cwd=os.path.abspath(os.path.join(
                                    options.source_root_dir, cwd_dir)),
                                stdout=subprocess.PIPE)
    return process


def delete_directory(dir_path):
    if not os.path.exists(dir_path):
        return
    if not os.path.isdir(dir_path):
        return
    try:
        shutil.rmtree(dir_path)
    except OSError as e:
        return


def process_global_import(options, sub_input, sub_output, export_flag):
    nodejs = os.path.abspath(options.node_js)
    tool = os.path.abspath(os.path.join(options.source_root_dir, PROCESS_GLOBAL_IMPORT))
    cwd_dir = os.path.abspath(os.path.join(
        options.source_root_dir, INTERFACE_PATH))

    intermediates_output = os.path.abspath(options.intermediates_output)
    if options.is_pre == "true":
        intermediates_output = os.path.dirname(os.path.abspath(options.intermediates_output))

    input_dir = intermediates_output + sub_input
    output_dir = intermediates_output + sub_output
    os.makedirs(output_dir, exist_ok=True)
    process = subprocess.run([nodejs, tool, "--input", input_dir,
                                "--output", output_dir, "--export", export_flag], shell=False,
                                cwd=os.path.abspath(os.path.join(
                                    options.source_root_dir, cwd_dir)),
                                stdout=subprocess.PIPE)
    return process


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--intermediates-output', required=True)
    parser.add_argument('--source-root-dir', required=True)
    parser.add_argument('--node-js', required=True)
    parser.add_argument('--is-pre', required=True)

    options = parser.parse_args()

    if options.is_pre == "true":
        process_interop(options, "/ohos_dynamic_two/api", "/ohos_dynamic_two/api", "false")
        process_interop(options, "/ohos_dynamic_two/component", "/ohos_dynamic_two/component", "true")
        process_global_import(options, "/ohos_dynamic_two/api", "/ohos_dynamic_two/api", "false")
    else:
        process_global_import(options, "/dynamic-interop/api", "/dynamic-interop/api", "true")
        delete_path = os.path.join(os.path.abspath(options.intermediates_output), "dynamic-interop", "component")
        delete_directory(delete_path)
        process_interop(options, "/static-interop/declaration/api", "/static-interop/declaration/api", "false")


if __name__ == '__main__':
    sys.exit(main())
    
