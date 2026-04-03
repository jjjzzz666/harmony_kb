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
 * @file Defines 3D resource related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Vec2, Vec3, Vec4, Aabb, Quaternion } from './SceneTypes';
import { Callback } from '../@ohos.base';

/**
 * The enum of SceneResource type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum SceneResourceType {
  /**
   * The resource is an Unknown.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * The resource is a Node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * The resource is an Environment.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ENVIRONMENT = 2,

  /**
   * The resource is a Material.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MATERIAL = 3,

  /**
   * The resource is a Mesh.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MESH = 4,

  /**
   * The resource is an Animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ANIMATION = 5,

  /**
   * The resource is a Shader.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 6,

  /**
   * The resource is an Image.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  IMAGE = 7,

  /**
   * The resource is a mesh resource
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  MESH_RESOURCE = 8,

  /**
   * The resource is an Effect.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  EFFECT = 9
}

/**
 * Define scene resource extended by other 3d resource.
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResource {
  /**
   * Scene resource name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Scene resource type.
   *
   * @type { SceneResourceType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly resourceType: SceneResourceType;

  /**
   * Scene resource uri.
   *
   * @type { ?ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uri?: ResourceStr;


  /**
   * Release scene resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;
}

/**
 * Shader resource.
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Shader extends SceneResource {
  /**
   * Shader inputs.
   * 
   * @type { Record<string, double | Vec2 | Vec3 | Vec4 | Image> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>;

  /**
   * Set shader inputs. Offers the same functionality for setting shader inputs as the property version,
   *     but with better performance.
   * @param { Record<string, double | Vec2 | Vec3 | Vec4 | Image> } inputs - Inputs of the shader
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void;
}

/**
 * The enum of material type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum MaterialType {
  /**
   * The material type is a Shader.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 1,
  
  /**
   * The material is a physically-based metallic roughness material.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  METALLIC_ROUGHNESS = 2,

  /**
   * The material is an unlit material.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  UNLIT = 3,

  /**
   * The material is an occlusion material
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  OCCLUSION = 4,

  /**
   * Only render the shadows received on the material surface,
   *     the material is transparent.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  UNLIT_SHADOW_ALPHA = 100
}

/**
 * The enum of PBR material cull mode.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum CullMode {
  /**
   * Disable culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * Front face culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  FRONT = 1,

  /**
   * Back face culling.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 2
}

/**
 * The enum of polygon mode.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export enum PolygonMode {
  /**
   * Render the whole polygon
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  FILL = 0,

  /**
   * Render only edges(wireframe) of the polygon
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  LINE = 1,

  /**
   * Render only vertices of the polygon
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  POINT = 2
}

/**
 * Blend interface.
 * 
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Blend {
  /**
   * Control whether blending is enabled
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * Render sort Layer. Within a render slot a layer can define a sort layer order.
 * There are 0-63 values available (0 first, 63 last). Default id value is 32.
 * 1. Typical use case is to set render sort layer to objects which render with depth test without depth write.
 * 2. Typical use case is to always render character and/or camera object first to cull large parts of the view.
 * 3. Sort e.g. plane layers.
 * 
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderSort {
  /**
   * Sort layer used sorting submeshes in rendering in render slots.
   * Valid values are 0 - 63.
   * 
   * @type { ?int }
   * @default 32 Default render sort layer id.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayer?: int;

  /**
   * Sort layer order to describe fine order within sort layer.
   * Valid values are 0 - 255.
   * 
   * @type { ?int }
   * @default 0 Default render sort layer order.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayerOrder?: int;
}

/**
 * Material resource.
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Material extends SceneResource {
  /**
   * Material resource type.
   *
   * @type { MaterialType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly materialType: MaterialType;
  
  /**
   * Defines if the material can receive shadows.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  shadowReceiver?: boolean;

  /**
   * Culling mode.
   * 
   * @type { ?CullMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  cullMode?: CullMode;

  /**
   * Control whether the blend is enabled
   * 
   * @type { ?Blend }
   * @default undefined, which means that blending is disabled.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  blend?: Blend;

  /**
   * Alpha cutoff value [0,1]. Enabled if < 1.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  alphaCutoff?: double;

  /**
   * Render sorting priority for layers.
   * 
   * @type { ?RenderSort }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSort?: RenderSort;

  /**
   * Polygon Mode of the material
   * 
   * @type { ?PolygonMode}
   * @default PolygonMode.FILL
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  polygonMode?: PolygonMode;
}

/**
 * Material property interface.
 * 
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MaterialProperty {
  /**
   * Texture to use. If undefined, factor defines the diffuse color.
   * 
   * @type { Image | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  image: Image | null;

  /**
   * Texture coefficient. Default is {1,1,1,1}, meaning no effect.
   * 
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  factor: Vec4;

  /**
   * Texture Sampler.
   * 
   * @type { ?Sampler }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sampler?: Sampler;
}

/**
 * Physically-based metallic roughness material resource.
 * 
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MetallicRoughnessMaterial extends Material {
  /**
   * Base color factor of PBR material.
   * Value of factor.xyzw defines rgba color.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  baseColor: MaterialProperty;

  /**
   * Normal factor of PBR material.
   * Value of factor.x defines normal scale.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  normal: MaterialProperty;

  /**
   * Metallic roughness material parameters.
   * Value of factor.y defines roughness, factor.z defines metallic and factor.a defines reflectance.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  material: MaterialProperty;

  /**
   * Ambient occlusion of PBR material.
   * Value of factor.x defines ambient occlusion factor.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  ambientOcclusion: MaterialProperty;

  /**
   * Emissive property of PBR material.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  emissive: MaterialProperty;

  /**
   * Clearcoat intensity.
   * Value of factor.x defines clearcoat layer intensity.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoat: MaterialProperty;

  /**
   * Clearcoat roughness.
   * Value of factor.y defines clearcoat layer roughness.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatRoughness: MaterialProperty;
  
  /**
   * Clearcoat normal.
   * Value of factor.xyz defines RGB clearcoat normal scale.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatNormal: MaterialProperty;

  /**
   * Sheen color of PBR material.
   * Value of factor.xyz defines RGB sheen color,
   * Value of factor.w defines sheen roughness.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sheen: MaterialProperty;

  /**
   * Specular color of PBR material.
   * Value of factor.xyz defines RGB specular color,
   * Value of factor.w defines specular intensity.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  specular: MaterialProperty;
}

/**
 * Unlit material resource
 * 
 * @extends Material
 * @interface UnlitMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface UnlitMaterial extends Material {
  /**
   * Base color factor of unlit material.
   * Value of factor.xyzw defines rgba color.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty
}

/**
 * Unlit shadow alpha material resource
 * 
 * @extends Material
 * @interface UnlitShadowAlphaMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export interface UnlitShadowAlphaMaterial extends Material {
  /**
   * Base color factor of UnlitShadowAlphaMaterial.
   * Value of factor.xyzw defines rgba color
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty;
}

/**
 * Shader material resource.
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ShaderMaterial extends Material {
  /**
   * Color shader of material.
   *
   * @type { ?Shader }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  colorShader?: Shader;
}

/**
 * Occlusion material resource
 *
 * @extends Material
 * @interface OcclusionMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface OcclusionMaterial extends Material {
}

/**
 * Sampler filter Mode
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerFilter {
  /**
   * Use nearest filtering
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NEAREST = 0,
  /**
   * Use linear filtering
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  LINEAR = 1,
}

/**
 * Addressing mode for Sampler
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerAddressMode {
  /**
   * Repeat
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  REPEAT = 0,

  /**
   * Mirrored repeat
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  MIRRORED_REPEAT = 1,

  /**
   * clamp to edge
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  CLAMP_TO_EDGE = 2,
}

/**
 * Sampler interface
 * 
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Sampler {
  /**
   * Mag filter
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  magFilter?: SamplerFilter;

  /**
   * Min filter
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  minFilter?: SamplerFilter;

  /**
   * Mip-map mode
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  mipMapMode?: SamplerFilter;

  /**
   * U addressing mode
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeU?: SamplerAddressMode;

  /**
   * V addressing mode
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeV?: SamplerAddressMode;
}

/**
 * Sub mesh resource.
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SubMesh {
  /**
   * The name of the sub mesh.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * The material of the sub mesh.
   *
   * @type { Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  material: Material;

  /**
   * The axis aligned bounding box of the sub mesh.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;
}

/**
 * Defines Morpher interface for specifying morph targets for Node's geometry.
 * 
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Morpher {
  /**
   * Morph target names and weights
   * 
   * @type { Record<string, double> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly targets: Record<string, double>;
}

/**
 * The mesh instance owned by the mesh node
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Mesh extends SceneResource {
  /**
   * The sub meshes of the mesh.
   *
   * @type { SubMesh[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly subMeshes: SubMesh[];

  /**
   * The axis aligned bounding box of the mesh.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;

  /**
   * The material override sub mesh's material.
   *
   * @type { ?Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  materialOverride?: Material;
}

/**
 * The mesh data description resource for the geometry node
 * 
 * 
 * @extends SceneResource
 * @interface MeshResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface MeshResource extends SceneResource {
}

/**
 * Animation resource.
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Animation extends SceneResource {
  /**
   * The animation is enabled.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * Animation speed factor
   * A negative value runs the animation in reverse using the given speed factor
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  speed?: double;

  /**
   * The duration of the animation.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly duration: double;

  /**
   * Whether the animation is running.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly running: boolean;

  /**
   * The progress of the animation between 0~1.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly progress: double;

  /**
   * Register a callback when animation finished.
   *
   * @param { Callback<void> } callback - the callback invoked when animation finished
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onFinished(callback: Callback<void>): void;

  /**
   * Register a callback when animation started.
   *
   * @param { Callback<void> } callback - the callback invoked when animation started
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onStarted(callback: Callback<void>): void;

  /**
   * Pause the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  pause(): void;

  /**
   * Restart the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  restart(): void;

  /**
   * Seek the animation to the position.
   *
   * @param { double } position - the position seek between 0~1
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  seek(position: double): void;

  /**
   * Start the animation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  start(): void;

  /**
   * Stop the animation and seek the position to the beginning.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  stop(): void;

  /**
   * Finish the animation and seek the position to the end.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  finish(): void;
}

/**
 * The enum of environment background type.
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum EnvironmentBackgroundType {
  /**
   * The background is none.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_NONE = 0,

  /**
   * The background is image.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_IMAGE = 1,

  /**
   * The background is cubemap.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_CUBEMAP = 2,

  /**
   * The background is equirectangular.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_EQUIRECTANGULAR = 3,
}

/**
 * Environment resource.
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Environment extends SceneResource {
  /**
   * The background type of the environment.
   *
   * @type { EnvironmentBackgroundType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  backgroundType: EnvironmentBackgroundType;

  /**
   * The indirect diffuse factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectDiffuseFactor: Vec4;

  /**
   * The indirect specular factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectSpecularFactor: Vec4;

  /**
   * The environment map factor of the environment.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentMapFactor: Vec4;

  /**
   * The environment image of the environment.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentImage?: Image | null;

  /**
   * The radiance image of the environment.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  radianceImage?: Image | null;

  /**
   * The irradiance coefficients (array of nine Vec3).
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  irradianceCoefficients?: Vec3[];

  /**
   * The rotation of the environment
   * 
   * @type { ?Quaternion }
   * @default Quaternion {x:0, y:0, z:0, w:1}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  environmentRotation?: Quaternion
}

/**
 * Image resource.
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Image extends SceneResource {
  /**
   * The width of the image.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly width: int;

  /**
   * The height of the image.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly height: int;
}

/**
 * Effect resource.
 * 
 * @extends SceneResource
 * @interface Effect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface Effect extends SceneResource {
  /**
   * Controls whether the effect is enabled or not.
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * The id of the effect.
   * This is the id that was used to create the effect.
   * 
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effectId: string;

  /**
   * Get the value of a specific effect property.
   *
   * @param { string } propertyName - the name of specific property
   * @returns { Object | null | undefined } effect property value, return null if the "get" operation failed.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  getPropertyValue(propertyName: string): Object | null | undefined;

  /**
   * Set the value of a specific effect property
   *
   * @param { string } propertyName - the name of specific property
   * @param { Object | undefined } value - property value to be set
   * @returns { boolean } return false if the "set" operation is failed
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setPropertyValue(propertyName: string, value: Object | undefined): boolean;
}