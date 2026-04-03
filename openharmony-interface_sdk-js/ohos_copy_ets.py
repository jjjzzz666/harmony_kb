#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2021 Huawei Device Co., Ltd.
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
PARSE_ETS2_API = "interface/sdk-js/build-tools/handleApiFiles.js"


def parse_ets2_api(options):
    nodejs = os.path.abspath(options.node_js)
    tool = os.path.abspath(os.path.join(options.source_root_dir,
                                        PARSE_ETS2_API))

    cwd_dir = os.path.abspath(os.path.join(
        options.source_root_dir, INTERFACE_PATH))
    input_dir = os.path.abspath(options.input)
    out_dir = os.path.abspath(options.output)
    process = subprocess.run([nodejs, tool, "--path", input_dir, 
                                "--output", out_dir, "--type",
                                options.type], shell=False,
                               cwd=os.path.abspath(os.path.join(
                                   options.source_root_dir, cwd_dir)),
                               stdout=subprocess.PIPE)
    return process


def parse_step(options):
    parse_ets2_api(options)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    parser.add_argument('--output', required=True)
    parser.add_argument('--type', required=True)
    parser.add_argument('--source-root-dir', required=True)
    parser.add_argument('--node-js', required=True)
    options = parser.parse_args()
    parse_step(options)


if __name__ == '__main__':
    sys.exit(main())
