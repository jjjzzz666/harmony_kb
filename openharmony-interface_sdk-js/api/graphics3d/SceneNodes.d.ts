/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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

/**
 * @file Defines 3D node related interfaces
 * @kit ArkGraphics3D
 */

import { SceneResource, Mesh, Morpher, Effect } from './SceneResources';
import { RaycastParameters, RaycastResult } from './Scene';
import { Position3, Quaternion, Scale3, Color, Vec2, Vec3, RenderingPipelineType, Mat4x4 } from './SceneTypes';
import { PostProcessSettings } from './ScenePostProcessSettings';

/**
 * Defines the layer mask of the node.
 *
 * @interface LayerMask
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface LayerMask {
  /**
   * Get whether layer mask is enabled.
   *
   * @param { int } index - the layer mask
   * @returns { boolean } whether layer mask is enabled 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getEnabled(index: int): boolean;

  /**
   * Set whether the layer mask is enabled.
   *
   * @param { int } index - the layer mask
   * @param { boolean } enabled - whether layer mask is enabled
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  setEnabled(index: int, enabled: boolean): void;
}

/**
 * The enum of node type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum NodeType {
  /**
   * The node is an empty node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * The node is a geometry node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  GEOMETRY = 2,

  /**
   * The node is a camera node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  CAMERA = 3,

  /**
   * The node is a light node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  LIGHT = 4,

  /** 
   * The node is of custom type.
   * Usually this means that the node is of a type defined in an extension plugin.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  CUSTOM = 255
}

/**
 * Defines a scene object container.
 *
 * @interface Container
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Container<T> {
  /**
   * Append a item to the container.
   *
   * @param { T } item - the item append to the end of container
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  append(item: T): void;

  /**
   * Insert a item.
   *
   * @param { T } item - the item insert to the container
   * @param { T | null } sibling - insert after this item, insert to the head if sibling is null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  insertAfter(item: T, sibling: T | null): void;

  /**
   * Remove a item from Container's children.
   *
   * @param { T } item - the item to be removed
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  remove(item: T): void;

  /**
   * Returns a child at given index from this Container's child list.
   *
   * @param { int } index - the index of the child to return
   * @returns { T | null } return the item specified by the index
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T | null;

  /**
   * Clear all children.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clear(): void;

  /**
   * Returns the number of items in the container.
   *
   * @returns { int } the number of the container
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  count(): int;
}

/**
 * Defines Node interface.
 *
 * @extends SceneResource
 * @interface Node
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Node extends SceneResource {
  /**
   * position of the node.
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  position: Position3;

  /**
   * Rotation of the node.
   *
   * @type { Quaternion }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  rotation: Quaternion;

  /**
   * Scale of the node.
   *
   * @type { Scale3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  scale: Scale3;

  /**
   * Visibility flag for the node.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  visible: boolean;

  /**
   * Type of the node.
   *
   * @type { NodeType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nodeType: NodeType;

  /**
   * Layer mask of the node.
   *
   * @type { LayerMask }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly layerMask: LayerMask;

  /**
   * Path of the node.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * Parent of the node.
   *
   * @type { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly parent: Node | null;

  /**
   * Get node by path.
   *
   * @param { string } path - the path of the node queried
   * @returns { Node | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string): Node | null;

  /**
   * Children of the node.
   *
   * @type { Container<Node> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly children: Container<Node>
}

/**
 * Defines Geometry interface.
 *
 * @extends Node
 * @interface Geometry
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Geometry extends Node {
  /**
   * Mesh of the node.
   *
   * @type { Mesh }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly mesh: Mesh;
  
  /**
   * Morpher target definition.
   * 
   * @type { ?Morpher }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly morpher?: Morpher;
}

/**
 * The enum of light type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum LightType {
  /**
   * Directional light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  DIRECTIONAL = 1,

  /**
   * Spot light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SPOT = 2,
}

/**
 * Defines light interface.
 *
 * @extends Node
 * @interface Light
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Light extends Node {
  /**
   * The type of the light.
   *
   * @type { LightType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly lightType: LightType;

  /**
   * The color of the light.
   *
   * @type { Color }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  color: Color;

  /**
   * The intensity of the light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  intensity: double;

  /**
   * Whether casting shadows.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  shadowEnabled: boolean;

  /**
   * Whether enable the light.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * Defines spot light.
 *
 * @extends Light
 * @interface SpotLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SpotLight extends Light {
  /**
   * The inner angle of the spot light
   * 
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  innerAngle?: double;

  /**
   * The outer angle of the spot light
   * 
   * @type { ?double }
   * @default PI / 4.0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  outerAngle?: double;
}

/**
 * Defines directional light.
 *
 * @extends Light
 * @interface DirectionalLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface DirectionalLight extends Light {
}

/**
 * Defines camera.
 *
 * @extends Node
 * @interface Camera
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Camera extends Node {
  /**
   * Field of view of the camera.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  fov: double;

  /**
   * Near plane of the directional light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  nearPlane: double;

  /**
   * Far plane of the directional light.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  farPlane: double;

  /**
   * Whether enabled the camera.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * The post processing settings of the camera.
   *
   * @type { PostProcessSettings | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  postProcess: PostProcessSettings | null;

  /**
   * The effects to apply on the camera output.
   * 
   * @type { Container<Effect> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effects: Container<Effect>;

  /**
   * Background clear color (environment background overrides this color,
   * BACKGROUND_NONE is needed for this to actually take effect).
   *
   * @type { Color | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clearColor: Color | null;

  /**
   * Controls whether MSAA is enabled or not.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * Controls the rendering pipeline. 
   * Note that if FORWARD_LIGHTWEIGHT pipeline is selected, some features will be unavailable.
   *
   * @type { ?RenderingPipelineType }
   * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;

  /**
   * Casts a ray to a position on the screen and lists what the ray hits.
   * @param { Vec2 } viewPosition - Position to cast in the normalized device coordinates.
   * @param { RaycastParameters } params - Options used to execute the ray cast.
   * @returns { Promise<RaycastResult[]> } - Promise used to return an array of hit results, sorted from the closest to the farthest. The array may be empty.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>;

  /**
   * get the view matrix of this camera
   * @returns { Mat4x4 } -- the view matrix of this camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getViewMatrix(): Mat4x4;

  /**
   * get the projection matrix of this camera
   * @returns { Mat4x4 } -- the projection matrix of this camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getProjectionMatrix(): Mat4x4;
}
