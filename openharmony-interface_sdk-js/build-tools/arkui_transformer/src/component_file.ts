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

import * as ts from 'typescript';
import * as path from 'path';

export class ComponentFile {
  public componentName: string;
  public outFileName: string;

  static snake2Camel(name: string, low: boolean = false): string {
    if (!name.includes('_')) {
      return name;
    }
    return name
      .split('_')
      .filter(word => word !== '')
      .map((word, index) => {
        if (index === 0 && low) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  public appendAttribute(str: string) {
    this.attributeSource.push(str);
  }

  public appendFunction(str: string) {
    this.functionSource += str;
  }

  get concactSource() {
    return [...this.attributeSource, this.functionSource].join('\n');
  }

  constructor(
    public fileName: string,
    public sourceFile: ts.SourceFile,
    public attributeSource: string[] = [],
    public functionSource: string = '',
  ) {
    const pureName = path.basename(this.fileName).replace(/\.d\.e?ts/g, "");
    this.componentName = ComponentFile.snake2Camel(pureName);
    this.outFileName = ComponentFile.snake2Camel(pureName, true).concat(".d.ets");
  }
}