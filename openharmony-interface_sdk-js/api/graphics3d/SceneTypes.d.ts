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
 * @file Defines 3D basic types
 * @kit ArkGraphics3D
 */

/**
 * Defines Vec2.
 *
 * @typedef Vec2
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec2 {
  /**
   * X component of the vec2.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Y component of the vec2.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;
}

/**
 * Defines Vec3.
 *
 * @typedef Vec3
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec3 {
  /**
   * X component of the vec3.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Y component of the vec3.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Z component of the vec3.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;
}

/**
 * Defines Vec4.
 *
 * @typedef Vec4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec4 {
  /**
   * X component of the vec4.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Y component of the vec4.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Z component of the vec4.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * W component of the vec4.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * Quaternion representing a rotation.
 *
 * @typedef Quaternion
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Quaternion {
  /**
   * X component of the quaternion.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Y component of the quaternion.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Z component of the quaternion.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * W component of the quaternion.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * Axis aligned bounding box.
 *
 * @typedef Aabb 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Aabb {
  /**
   * Coordinates of the AABB minimum corner.
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMin: Vec3;

  /**
   * Coordinates of the AABB maximum corner.
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMax: Vec3;
}

/**
 * Defines Color.
 *
 * @typedef Color 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Color {
  /**
   * R component of the color.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  r: double;

  /**
   * G component of the color.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  g: double;

  /**
   * B component of the color.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  b: double;

  /**
   * A component of the color.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  a: double;
}

/**
 * Defines rectangle.
 *
 * @typedef Rect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * Left up x coordinate.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Left up y coordinate.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * The width of the rectangle.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  width: double;

  /**
   * The height of the rectangle.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  height: double;
}

/**
 * Types of geometric shapes.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum GeometryType {
  /**
   * A custom geometric shape.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUSTOM = 0,

  /**
   * A cube.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUBE = 1,

  /**
   * A plane.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  PLANE = 2,

  /**
   * A sphere.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  SPHERE = 3,

  /**
   * A cylinder.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  CYLINDER = 4
}

/**
 * The enum of rendering pipeline type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export enum RenderingPipelineType {
  /**
   * Lightweight forward pipeline which renders directly to back buffer.
   * This pipeline can only do per-pixel effects (e.g. tonemapping) in the shader,
   * complex effects (e.g. bloom) are not supported.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD_LIGHTWEIGHT = 0,
  
  /**
   * Forward pipeline for high quality rendering.
   * Use this for complex visual effects (e.g. bloom).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD = 1
}

/**
 * Define a geometric shape for mesh creation.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare abstract class GeometryDefinition {
  /**
   * Which geometry shape to interpret from this definition.
   *
   * @returns { GeometryType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get geometryType(): GeometryType;
}

/**
 * Defines Mat4x4
 *
 * @typedef Mat4x4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface Mat4x4 {
  /**
   * the first column of the matrix
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  x: Vec4;

  /**
   * the second column of the matrix
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  y: Vec4;

  /**
   * the third column of the matrix
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  z: Vec4;

  /**
   * the fourth column of the matrix
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  w: Vec4;
}

/**
 * How vertices in a sequence form triangles.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum PrimitiveTopology {
  /**
   * The vertices form a set of independent triangle. Vertices (0, 1, 2), (3, 4, 5), ... define separate triangles.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_LIST = 0,

  /**
   * The vertices form a triangle strip. Starting from the 3rd, each vertex defines a triangle with the previous two.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_STRIP = 1
}

/**
 * An array of vertices and their data defining a custom geometric shape.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CustomGeometry extends GeometryDefinition {
  /**
   * How to form mesh triangles from the indexed vertices.
   *
   * @type { ?PrimitiveTopology }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  topology?: PrimitiveTopology;

  /**
   * How to form mesh triangles from the indexed vertices.
   *
   * @return { PrimitiveTopology | undefined }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get topology(): PrimitiveTopology | undefined;

  /**
   * How to form mesh triangles from the indexed vertices.
   *
   * @param { PrimitiveTopology | undefined } value
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set topology(value: PrimitiveTopology | undefined);

  /**
   * An array of vertices.
   *
   * @return { Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get vertices(): Vec3[];

  /**
   * An array of vertices.
   *
   * @param { Vec3[] } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set vertices(value: Vec3[]);

  /**
   * Indices of those vertices that form triangles. PrimitiveTopology is applied to the sequence defined by indices.
   *
   * An example of creating an identical pair of triangles, given vertices = [a, b, c, d]:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     resulting triangles: abc, cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     resulting triangles: abc, cbd (b and c are reversed in cbd, to match the face direction of the first triangle)
   *
   * @type { ?int[] }
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  indices?: int[];

  /**
   * Indices of those vertices that form triangles. PrimitiveTopology is applied to the sequence defined by indices.
   *
   * An example of creating an identical pair of triangles, given vertices = [a, b, c, d]:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     resulting triangles: abc, cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     resulting triangles: abc, cbd (b and c are reversed in cbd, to match the face direction of the first triangle)
   *
   * @return { int[] | undefined }
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get indices(): int[] | undefined;

  /**
   * Indices of those vertices that form triangles. PrimitiveTopology is applied to the sequence defined by indices.
   *
   * An example of creating an identical pair of triangles, given vertices = [a, b, c, d]:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     resulting triangles: abc, cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     resulting triangles: abc, cbd (b and c are reversed in cbd, to match the face direction of the first triangle)
   *
   * @param { int[] | undefined } value
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set indices(value: int[] | undefined);

  /**
   * Vertex normal. If normals is not null. normals[N] is for vertices[N] and generateNormals is ignored.
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  normals?: Vec3[];

  /**
   * Vertex normal. If normals is not null. normals[N] is for vertices[N] and generateNormals is ignored.
   *
   * @return { Vec3[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get normals(): Vec3[] | undefined;

  /**
   * Vertex normal. If normals is not null. normals[N] is for vertices[N] and generateNormals is ignored.
   *
   * @param { Vec3[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set normals(value: Vec3[] | undefined);

  /**
   * Vertex texture mapping UV coordinate. If uvs is not null, uvs[N] is for vertices[N]
   *
   * @type { ?Vec2[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  uvs?: Vec2[];

  /**
   * Vertex texture mapping UV coordinate. If uvs is not null, uvs[N] is for vertices[N]
   *
   * @return { Vec2[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get uvs(): Vec2[] | undefined;

  /**
   * Vertex texture mapping UV coordinate. If uvs is not null, uvs[N] is for vertices[N]
   *
   * @param { Vec2[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set uvs(value: Vec2[] | undefined);

  /**
   * Vertex color. If colors is not null, colors[N] is for vertices[N].
   *
   * @type { ?Color[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  colors?: Color[];

  /**
   * Vertex color. If colors is not null, colors[N] is for vertices[N].
   *
   * @return { Color[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get colors(): Color[] | undefined;

  /**
   * Vertex color. If colors is not null, colors[N] is for vertices[N].
   *
   * @param { Color[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set colors(value: Color[] | undefined);
}

/**
 * Define a rectangular cuboid.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CubeGeometry extends GeometryDefinition {
  /**
   * The width, height and depth of the cube.
   *
   * @return { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec3;

  /**
   * The width, height and depth of the cube.
   *
   * @param { Vec3 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec3);
}

/**
 * Define a plane.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class PlaneGeometry extends GeometryDefinition {
  /**
   * The width and length of the plane.
   *
   * @return { Vec2 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec2;

  /**
   * The width and length of the plane.
   *
   * @param { Vec2 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec2);
}

/**
 * Define a sphere.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class SphereGeometry extends GeometryDefinition {
  /**
   * The radius of the sphere.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get radius(): double;

  /**
   * The radius of the sphere.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set radius(value: double);

  /**
   * Divide the sphere latitudinally into this many circles and each circle longitudinally into this many segments.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get segmentCount(): int;

  /**
   * Divide the sphere latitudinally into this many circles and each circle longitudinally into this many segments.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set segmentCount(value: int);
}

/**
 * Define a cylinder.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export declare class CylinderGeometry extends GeometryDefinition {
  /**
   * The radius of the base of the cylinder.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get radius(): double;

  /**
   * The radius of the base of the cylinder.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set radius(value: double);

  /**
   * The height of the cylinder.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get height(): double;

  /**
   * The height of the cylinder.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set height(value: double);

  /**
   * Use regular polygons to approximate the circular base of the cylinder,
   * where segmentCount is the number of sides of the regular polygon used.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get segmentCount(): int;

  /**
   * Use regular polygons to approximate the circular base of the cylinder,
   * where segmentCount is the number of sides of the regular polygon used.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set segmentCount(value: int);
}

/**
 * 3D position information.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Position3 = Vec3;

/**
 * 3D rotation info as euler angles.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Rotation3 = Vec3;

/**
 * 3D scale information.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Scale3 = Vec3;
