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
 * @file Defines 3D scene related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource, Effect } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, Color, GeometryDefinition, RenderingPipelineType, Vec2, Vec3, Vec4 } from './SceneTypes';

/**
 * The scene resource parameters type.
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceParameters {
  /**
   * The name of the scene resource parameters.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * The resource uri of the scene resource parameters.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  uri?: ResourceStr;
}

/**
 * The scene node parameters type.
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneNodeParameters {
  /**
   * The name of the scene node parameters.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * The path of the scene node parameters.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  path?: string;
}

/**
 * The result of a ray cast hit.
 *
 * @typedef RaycastResult
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastResult {
  /**
   * The node that was hit.
   *
   * @type { Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  node: Node;

  /**
   * The distance to the center of the axis-aligned bounding box.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  centerDistance: double;

  /**
   * The position of the hit in world coordinates.
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  hitPosition: Position3;
}

/**
 * How a raycast should be performed.
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastParameters {
  /**
   * If defined, search only the nodes in the hierarchy under this node
   * If undefined, search all the nodes in the scene
   *
   * @type { ?Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  rootNode?: Node;
}

/** 
 * The render resource factory. RenderResourceFactory is used to create resources that can be shared
 * across Scenes that share a RenderContext
 * 
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderResourceFactory {
  /**
   * Create a shader.
   *
   * @param { SceneResourceParameters } params - the param of creating a shader
   * @returns { Promise<Shader> } promise a shader
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createShader(params: SceneResourceParameters): Promise<Shader>;

  /**
    * Create a image.
    *
    * @param { SceneResourceParameters } params - the param of creating a image
    * @returns { Promise<Image> } promise a image
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 20 dynamic
    * @since 23 static
    */
  createImage(params: SceneResourceParameters): Promise<Image>;

  /**
   * Create a Mesh from an array of vertices.
   * 
   * @param { SceneResourceParameters } params - the param of creating a Mesh object
   * @param { GeometryDefinition } geometry - what sort of a geometric shape to create
   * @returns { Promise<MeshResource> } promise a Mesh
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;

  /**
   * create a Sampler
   * 
   * @param { SceneResourceParameters } params - the param of create a sampler
   * @returns { Promise<Sampler> } - promise a scene
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createSampler(params:SceneResourceParameters): Promise<Sampler>

  /**
   * Create a new scene from a Resource.
   * If uri is not provided, will return an empty scene.
   * 
   * @param { ResourceStr } [uri] - the resource of creating a scene
   * @returns { Promise<Scene> } promise a scene
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createScene(uri?: ResourceStr): Promise<Scene>;
}

/**
 * Camera creation parameters. Can be used to define extra options for camera creation.
 *
 * @interface CameraParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface CameraParameters {
  /**
   * Select whether MSAA is enabled.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * Select the initial rendering pipeline type to use.
   * 
   * @type { ?RenderingPipelineType }
   * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;
}

/**
 * The parameters for effect
 * 
 * @interface EffectParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface EffectParameters {
  /**
   * Id of the effect to create.
   * 
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  effectId: string;
}

/**
 * The scene resource factory.
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceFactory extends RenderResourceFactory {
  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - the param of creating a camera
   * @returns { Promise<Camera> } promise a camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters): Promise<Camera>;

  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - the param of creating a camera
   * @param { CameraParameters } cameraParams - camera specific extra parameters
   * @returns { Promise<Camera> } promise a camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>;
  
  /**
   * Create a light.
   *
   * @param { SceneNodeParameters } params - the param of creating a light
   * @param { LightType } lightType - the type of the light
   * @returns { Promise<Light> } promise a light
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;

  /**
   * Create a node.
   *
   * @param { SceneNodeParameters } params - the param of creating a node
   * @returns { Promise<Node> } promise a node
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createNode(params: SceneNodeParameters): Promise<Node>;

  /**
   * Create a material.
   *
   * @param { SceneResourceParameters } params - the param of creating a material
   * @param { MaterialType } materialType - the type of the material
   * @returns { Promise<Material> } promise a material
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;

  /**
   * Create a environment.
   *
   * @param { SceneResourceParameters } params - the param of creating a Environment object
   * @returns { Promise<Environment> } promise a Environment
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createEnvironment(params: SceneResourceParameters): Promise<Environment>;

  /**
   * Create a geometry node.
   *
   * @param { SceneNodeParameters } params - the param of creating a geometry
   * @param { MeshResource } mesh resource - The mesh data for the geometry
   * @returns { Promise<Geometry> } promise a geometry
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>;

  /**
   * Create an effect.
   * 
   * @param { EffectParameters } params - the params of creating an effect.
   * @returns { Promise<Effect> } promise an effect.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createEffect(params: EffectParameters): Promise<Effect>;
}

/**
 * Define underlying scene component
 * 
 * @interface SceneComponent
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface SceneComponent {
  /**
   * Scene component name
   * 
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Component properties
   * 
   * @type { Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] | string[] |
   * SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly property: Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] |
  string[] | SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined>;
}

/** 
 * Render context defines the context for all rendering resources. Resources within the same render context
 * may be shared between scenes created within the same render context.
 * 
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderContext {
  /**
   * Get resource factory.
   * 
   * @returns { RenderResourceFactory } -- RenderResourceFactory instance
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  getRenderResourceFactory() : RenderResourceFactory;

  /**
   * Load external plugin
   * 
   * @param {string} name - Name of the plugin
   * @returns { Promise<boolean> } - Promise a boolean to show if the plugin load is successful
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  loadPlugin(name: string): Promise<boolean>;

  /**
   * Register resource path
   *
   * @param { string } protocol - Protocol of the uri
   * @param { string } uri - Path to register
   * @returns { boolean } - True if registration success, false indicates the protocol has already been registered
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  registerResourcePath(protocol: string, uri: string): boolean;
}

/**
 * Global render configuration control
 * 
 * @interface RenderConfiguration
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface RenderConfiguration {
  /**
   * resolution for single shadow map buffer, undefined by default,
   *  which means we use (1024, 1024) as the resolution of a single shadow map.
   * You need to provide the same x and y value to get the right shadow effect
   *
   * @type { ?Vec2 }
   * @default { 1024, 1024 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  shadowResolution?: Vec2;
}

/**
 * Defines parameters for manual rendering.
 *
 * @interface RenderParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 15 dynamic
 * @since 23 static
 */
export interface RenderParameters {
  /**
   * If true, the renderer should always render even if there have been no changes in the scene
   * since the previous frame. If false, renderer may omit rendering if no changes have been made.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  alwaysRender?: boolean;
}

/**
 * Defines the 3d scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export declare class Scene {
  /**
   * Get default render context
   *
   * @returns { RenderContext | null } -- The default RenderContext instance
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  static getDefaultRenderContext(): RenderContext | null;

  /**
   * Create a new scene from a ResourceStr.
   * If uri is not provided, will return an empty scene.
   *
   * @param { ResourceStr } [uri] - the resource of creating a scene
   * @returns { Promise<Scene> } promise a scene
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  static load(uri? : ResourceStr): Promise<Scene>;

  /**
   * The environment of the scene.
   *
   * @return { Environment }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get environment(): Environment;

  /**
   * The environment of the scene.
   *
   * @param { Environment } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  set environment(value: Environment);

  /**
   * The animations of the scene.
   *
   * @return { Animation[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get animations(): Animation[];

  /**
   * The root node of the scene.
   *
   * @return { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get root(): Node | null;

  /**
   * Get a node by path.
   *
   * @param { string } path - the path of the node
   * @param { NodeType } type - verify the type of node, if it does not match, return null
   * @returns { Node | null } if the node is found by it's path
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string, type?: NodeType): Node | null;

  /**
   * Get resource factory.
   *
   * @returns { SceneResourceFactory } if the node is found by it's path
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getResourceFactory(): SceneResourceFactory;

  /**
   * Release all native scene resources. All TS references will be undefined.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;

  /**
   * Import node into the scene. The original node may come from separate Scene.
   * The node will be cloned and any modifications to the old node will not be visible after the import.
   *
   * @param { string } name - The name of the newly created node.
   * @param { Node } node - The node to be imported.
   * @param { Node | null} parent - The parent node or null for root
   * @returns { Node } The newly created node.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importNode(name: string, node: Node, parent: Node | null): Node;

  /**
   * Import scene into the scene as a node. The node hierarchy will appear under the parent node.
   * All animations from the scene will be duplicated in the scene.
   *
   * @param { string } name - The name of the newly created node
   * @param { Scene } scene - The scene to be imported.
   * @param { Node | null } parent - The parent node or null for root
   * @returns { Node } The newly created node.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importScene(name: string, scene: Scene, parent: Node | null): Node;

   /**
   * A new frame is rendered for all active camera.
   *
   * @param { RenderParameters } params - Rendering parameters
   * @returns { boolean } True if rendering was scheduled, false otherwise
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  renderFrame(params?: RenderParameters): boolean;

  /**
   * Create a new component.
   * 
   * @param { Node } node - The node the component is attached to
   * @param { string } name - The name of the component to load. Valid names are defined by each plugin.
   * @returns { Promise<SceneComponent> } - The newly added component.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createComponent(node: Node, name: string): Promise<SceneComponent>;

  /**
   * render configuration settings
   *
   * @returns { RenderConfiguration }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get renderConfiguration(): RenderConfiguration;

  /**
    * Get component by name.
    * 
    * @param { Node } node - The node component is attached to. 
    * @param { string } name - name of the component
    * @returns { SceneComponent | null }
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 20 dynamic
    * @since 23 static
    */
  getComponent(node: Node, name: string): SceneComponent | null;

  /**
   * clone a node or a subtree whose root node is the input node
   *
   * @param { Node } node - input node to be cloned
   * @param { Node } parent - the parent node which the cloned node will be set as its child node
   * @param { string } name - the name of the cloned node
   * @returns { Node | null } the clone result, return null if clone is failed.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  cloneNode(node: Node, parent: Node, name: string): Node | null;
}
