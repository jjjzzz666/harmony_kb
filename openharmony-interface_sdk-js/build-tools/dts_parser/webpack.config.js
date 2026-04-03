/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const packageInfo = require('./package.json');
const archiver = require('archiver');
const { copyESLibs } = require('./scripts/copylibs');

class PackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('PackPlugin', (stats) => {
      const bundleName = `${packageInfo.name}.js`;
      const bundlejsPath = path.resolve(__dirname, 'package', bundleName);
      if (!fs.existsSync(bundlejsPath)) {
        console.error(`${bundleName} not found`);
        return;
      }
      copyESLibs();
      const libsPath = path.resolve(__dirname, 'libs');
      const readme = path.resolve(__dirname, 'README_zh.md');
      const outputName = path.resolve(__dirname, 'package', `${packageInfo.name}-${packageInfo.version}.zip`);
      const outputZipStream = fs.createWriteStream(outputName);
      const archive = archiver('zip');
      archive.pipe(outputZipStream);
      archive.file(bundlejsPath, { name: bundleName });
      archive.file(readme, { name: 'README.md' });
      archive.directory(libsPath, 'libs');
      archive.finalize();
    });
  }
}

module.exports = (env, argv) => {
  const config = {
    name: 'JSDoc formatter plugin',
    target: 'node',
    mode: 'none',
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: path.resolve(__dirname, 'src'),
          exclude: [/node_modules/, /test/],
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true,
          },
        },
        {
          test: /build\.json$/,
          use: [
            {
              loader: path.resolve(__dirname, 'loader/flavor.js'),
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.json'],
    },
    output: {
      filename: `${packageInfo.name}.js`,
      path: path.resolve(__dirname, './package'),
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: `version:${packageInfo.version}`,
        raw: false,
        entryOnly: true,
      }),
      new PackPlugin(),
    ],
  };
  return config;
};
