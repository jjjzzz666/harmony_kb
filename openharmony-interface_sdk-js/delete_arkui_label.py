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
import subprocess
import argparse
import sys

INTEROP_POSTPROCESS_TOOL = "interface/sdk-js/build-tools/delete_label_noninterop.js"


def delete_label_noninterop(source_root: str, input_dir: str, out_path: str, nodejs: str):
    tool = os.path.join(source_root, INTEROP_POSTPROCESS_TOOL)
    tool = os.path.abspath(tool)
    nodejs = os.path.abspath(nodejs)
    p = subprocess.Popen([nodejs, tool, "--input", input_dir, "--output",
                        out_path], stdout=subprocess.PIPE)
    p.wait()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--root-build-dir', required=True)
    parser.add_argument('--node-js', required=True)
    parser.add_argument('--input-interface-sdk', required=True)
    parser.add_argument('--output-arkui-interface-sdk', required=True)
    options = parser.parse_args()
    delete_label_noninterop(options.root_build_dir, os.path.abspath(options.input_interface_sdk), os.path.abspath(options.output_arkui_interface_sdk), options.node_js)


if __name__ == '__main__':
    sys.exit(main())
