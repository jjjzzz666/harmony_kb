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

import { CompletedRoutableCard } from '../../common/Card'
import { Route } from '../../common/Route'
import { AccessibilityText } from './AccessibilityText'
import { AccessibilityGroup } from './AccessibilityGroup'
import { AccessibilityFocusDrawLevel } from './AccessibilityFocusDrawLevel'
import { AccessibilityTextCase01 } from './AccessibilityTextCase01'
import { AccessibilityTextCase02 } from './AccessibilityTextCase02'
import { AccessibilityDescriptionCase01 } from './AccessibilityDescriptionCase01'
import { AccessibilityDescriptionCase02 } from './AccessibilityDescriptionCase02'
import { AccessibilityGroupCase01 } from './AccessibilityGroupCase01'
import { AccessibilityGroupCase02 } from './AccessibilityGroupCase02'
import { AccessibilityLevelCase01 } from './AccessibilityLevelCase01'
import { AccessibilityCheckedCase01 } from './AccessibilityCheckedCase01'
import { AccessibilityCheckedCase02 } from './AccessibilityCheckedCase02'
import { AccessibilityActionInterceptCase01 } from './AccessibilityActionInterceptCase01'
import { AccessibilityActionInterceptCase02 } from './AccessibilityActionInterceptCase02'
import { AccessibilityFocusDrawLevelCase01 } from './AccessibilityFocusDrawLevelCase01'
import { AccessibilityFocusDrawLevelCase02 } from './AccessibilityFocusDrawLevelCase02'
import { OnAccessibilityHoverCase01 } from './AccessibilityHoverCase01'
import { OnAccessibilityHoverCase02 } from './AccessibilityHoverCase02'
import { AccessibilityNextFocusIdCase01 } from './AccessibilityNextFocusIdCase01'
import { AccessibilityNextFocusIdCase02 } from './AccessibilityNextFocusIdCase02'
import { AccessibilityRoleCase01 } from './AccessibilityRoleCase01'
import { AccessibilityRoleCase02 } from './AccessibilityRoleCase02'
import { AccessibilityScrollTriggerableCase01 } from './AccessibilityScrollTriggerableCase01'
import { AccessibilityScrollTriggerableCase02 } from './AccessibilityScrollTriggerableCase02'
import { AccessibilitySelectedCase01 } from './AccessibilitySelectedCase01'
import { AccessibilitySelectedCase02 } from './AccessibilitySelectedCase02'
import { OnAccessibilityFocusCase01 } from './OnAccessibilityFocusCase01'
import { SendAccessibilityEventCase01 } from './SendAccessibilityEventCase01'
import { SendAccessibilityEventCase02 } from './SendAccessibilityEventCase02'
import { SendAccessibilityEventCase03 } from './SendAccessibilityEventCase03'
import { SendAccessibilityEventCase04 } from './SendAccessibilityEventCase04'
import resource from '../../common/resource'
import { router } from '@kit.ArkUI'

export const ACCESSIBILITY_ROUTE_PREFIX: string = 'UniversalAttributesAccessibility';

const routes: Route[] = [
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityText`,
    // 'app.string.UniversalAttributesAccessibility_title1'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_title1')),
    // 'app.string.UniversalAttributesAccessibility_description1'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description1')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityGroup`,
    // 'app.string.UniversalAttributesAccessibility_title2'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_title2')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityFocusDrawLevel`,
    // 'app.string.UniversalAttributesAccessibility_title3'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_title3')),
    // 'app.string.UniversalAttributesAccessibility_description3'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityTextCase01`,
    // 'app.string.AccessibilityTextCase01'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityTextCase01')),
    // 'app.string.UniversalAttributesAccessibility_description1'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description1')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityTextCase02`,
    // 'app.string.AccessibilityTextCase02'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityTextCase02')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityDescriptionCase01`,
    // 'app.string.AccessibilityDescriptionCase01'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityDescriptionCase01')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityDescriptionCase02`,
    // 'app.string.AccessibilityDescriptionCase02'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityDescriptionCase02')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityGroupCase01`,
    // 'app.string.AccessibilityGroupCase01'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityGroupCase01')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityGroupCase02`,
    // 'app.string.AccessibilityGroupCase02'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityGroupCase02')),
    // 'app.string.UniversalAttributesAccessibility_description2'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description2')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityLevelCase01`,
    // 'app.string.AccessibilityLevelCase01'需要替换为开发者所需的文本资源文件
    title: resource.resourceToString($r('app.string.AccessibilityLevelCase01')),
    // 'app.string.UniversalAttributesAccessibility_description3'需要替换为开发者所需的文本资源文件
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityActionInterceptCase01`,
    title: 'AccessibilityActionInterceptCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityActionInterceptCase02`,
    title: 'AccessibilityActionInterceptCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityFocusDrawLevelCase01`,
    title: 'AccessibilityFocusDrawLevelCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityFocusDrawLevelCase02`,
    title: 'AccessibilityFocusDrawLevelCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityHoverCase01`,
    title: 'AccessibilityHoverCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityHoverCase02`,
    title: 'AccessibilityHoverCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityNextFocusIdCase01`,
    title: 'AccessibilityNextFocusIdCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityNextFocusIdCase02`,
    title: 'AccessibilityNextFocusIdCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityRoleCase01`,
    title: 'AccessibilityRoleCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityRoleCase02`,
    title: 'AccessibilityRoleCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityScrollTriggerableCase01`,
    title: 'AccessibilityScrollTriggerableCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityScrollTriggerableCase02`,
    title: 'AccessibilityScrollTriggerableCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilitySelectedCase01`,
    title: 'AccessibilitySelectedCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilitySelectedCase02`,
    title: 'AccessibilitySelectedCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/OnAccessibilityFocusCase01`,
    title: 'OnAccessibilityFocusCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/SendAccessibilityEventCase01`,
    title: 'SendAccessibilityEventCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/SendAccessibilityEventCase02`,
    title: 'SendAccessibilityEventCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/SendAccessibilityEventCase03`,
    title: 'SendAccessibilityEventCase03',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/SendAccessibilityEventCase04`,
    title: 'SendAccessibilityEventCase04',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityCheckedCase01`,
    title: 'AccessibilityCheckedCase01',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  },
  {
    name: `${ACCESSIBILITY_ROUTE_PREFIX}/AccessibilityCheckedCase02`,
    title: 'AccessibilityCheckedCase02',
    description: resource.resourceToString($r('app.string.UniversalAttributesAccessibility_description3')),
  }
];

@Builder
export function AccessibilityDestination(name: string) {
  if (name == ACCESSIBILITY_ROUTE_PREFIX) {
    AccessibilityExample();
  } else if (name == routes[0].name) {
    AccessibilityText();
  } else if (name == routes[1].name) {
    AccessibilityGroup();
  } else if (name == routes[2].name) {
    AccessibilityFocusDrawLevel();
  } else if (name == routes[3].name) {
    AccessibilityTextCase01();
  } else if (name == routes[4].name) {
    AccessibilityTextCase02();
  } else if (name == routes[5].name) {
    AccessibilityDescriptionCase01();
  } else if (name == routes[6].name) {
    AccessibilityDescriptionCase02();
  } else if (name == routes[7].name) {
    AccessibilityGroupCase01()
  } else if (name == routes[8].name) {
    AccessibilityGroupCase02()
  } else if (name == routes[9].name) {
    AccessibilityLevelCase01()
  } else if (name == routes[10].name) {
    AccessibilityActionInterceptCase01()
  } else if (name == routes[11].name) {
    AccessibilityActionInterceptCase02()
  } else if (name == routes[12].name) {
    AccessibilityFocusDrawLevelCase01()
  } else if (name == routes[13].name) {
    AccessibilityFocusDrawLevelCase02()
  } else if (name == routes[14].name) {
    OnAccessibilityHoverCase01()
  } else if (name == routes[15].name) {
    OnAccessibilityHoverCase02()
  } else if (name == routes[16].name) {
    AccessibilityNextFocusIdCase01()
  } else if (name == routes[17].name) {
    AccessibilityNextFocusIdCase02()
  } else if (name == routes[18].name) {
    AccessibilityRoleCase01()
  } else if (name == routes[19].name) {
    AccessibilityRoleCase02()
  } else if (name == routes[20].name) {
    AccessibilityScrollTriggerableCase01()
  } else if (name == routes[21].name) {
    AccessibilityScrollTriggerableCase02()
  } else if (name == routes[22].name) {
    AccessibilitySelectedCase01()
  } else if (name == routes[23].name) {
    AccessibilitySelectedCase02()
  } else if (name == routes[24].name) {
    OnAccessibilityFocusCase01()
  } else if (name == routes[25].name) {
    SendAccessibilityEventCase01()
  } else if (name == routes[26].name) {
    SendAccessibilityEventCase02()
  } else if (name == routes[27].name) {
    SendAccessibilityEventCase03()
  } else if (name == routes[28].name) {
    SendAccessibilityEventCase04()
  } else if (name == routes[29].name) {
    AccessibilityCheckedCase01()
  } else if (name == routes[30].name) {
    AccessibilityCheckedCase02()
  }
}

@Entry
@Component
struct AccessibilityExample {
  @Consume pathStack: NavPathStack;

  build() {
    NavDestination() {
      List({ space: 12 }) {
        ForEach(routes, (route: Route) => {
          ListItem() {
            CompletedRoutableCard({ title: route.title, description: route.description })
          }
          .width('100%')
            .onClick(() => {
              this.pathStack.pushPath({ name: route.name });
            })
        })
      }
      .contentStartOffset(56)
        .padding({ left: 16, right: 16 })
    }
    .backgroundColor('#f1f3f5')
    // 请将$r('app.string.pageIndex_UniversalAttributesAccessibility')替换为实际资源文件，在本示例中该资源文件的value值为"ArkUI 无障碍能力"
    .title(resource.resourceToString($r('app.string.pageIndex_UniversalAttributesAccessibility')), {
      backgroundBlurStyle: BlurStyle.COMPONENT_THICK,
      barStyle: BarStyle.STACK
    })
  }
}
