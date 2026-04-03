'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file
 * @kit ArkUI
 */

import { LengthMetrics, SizeT, PositionT, Vector2T } from '../../arkui/Graphics';
import { VP, ResourceStr, Dimension, ResourceColor } from "./units";
import { ImageFit, Curve } from "./enums";
import { ICurve, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";

/**
 * Defines a pair of given type for particle.
 *
 * @typedef { [T1, T2] } ParticleTuple
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ParticleTuple<T1, T2> = [
    T1,
    T2
];
/**
 * Defines velocity options.
 *
 * @typedef VelocityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface VelocityOptions {
    /**
     * Particle speed.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<double, double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    speed: ParticleTuple<double, double>;
    /**
     * Angle of particle's direction.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<double, double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle: ParticleTuple<double, double>;
}
/**
 * Defines acceleration options.
 *
 * @interface AccelerationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface AccelerationOptions {
    /**
     * Speed property options.
     *
     * @type { ?ParticlePropertyOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    speed?: ParticlePropertyOptions;
    /**
     * Angle property options.
     *
     * @type { ?ParticlePropertyOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle?: ParticlePropertyOptions;
}
/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticleOptions {
    /**
     * Particle emitter.
     * @type { EmitterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    emitter: EmitterOptions;
    /**
     * Particle color.
     * @type { ?ParticleColorPropertyOptions }
     * @default {range:['#FFFFFF','#FFFFFF']}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ParticleColorPropertyOptions;
    /**
     * Particle opacity.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    opacity?: ParticlePropertyOptions;
    /**
     * Particle scale.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scale?: ParticlePropertyOptions;
    /**
     * Particle velocity.
     *
     * @type { ?VelocityOptions }
     * @default {speed:[0,0];angle:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocity?: VelocityOptions;
    /**
     * Particle acceleration.
     *
     * @type { ?AccelerationOptions }
     * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    acceleration?: AccelerationOptions;
    /**
     * Particle spin.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spin?: ParticlePropertyOptions;
}
/**
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PointParticleParameters {
    /**
     * Particle radius.
     * @type { VP }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radius: VP;
}
/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ImageParticleParameters {
    /**
     * Particle image pixelMap.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    src: ResourceStr;
    /**
     * Particle image size.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<Dimension, Dimension> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size: ParticleTuple<Dimension, Dimension>;
    /**
     * Image fit.
     * @type { ?ImageFit }
     * @default ImageFit.Cover
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    objectFit?: ImageFit;
}
/**
 * Defines the particle configs.
 * @typedef {PointParticleParameters | ImageParticleParameters} ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ParticleConfigs = PointParticleParameters | ImageParticleParameters;
/**
 * Defines the emitter property.
 *
 * @interface EmitterProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface EmitterProperty {
    /**
     * Emitter index.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    index: int;
    /**
     * Emitter emission rate.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    emitRate?: int;
    /**
     * Emitter emission rate. Only support double type.
     *
     * @type { ?PositionT<double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position?: PositionT<double>;
    /**
     * Emitter emission window size. Only support double type.
     *
     * @type { ?SizeT<double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: SizeT<double>;
    /**
     * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
     *
     * @type { ?ParticleAnnulusRegion }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    annulusRegion?: ParticleAnnulusRegion;
}
/**
 * Defines parameters of particles used by emitters.
 *
 * @interface EmitterParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface EmitterParticleOptions {
    /**
     * Particle type.
     *
     * @type { ParticleType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: ParticleType;
    /**
     * Particle config.
     *
     * @type { ParticleConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    config: ParticleConfigs;
    /**
     * Particle count.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count: int;
    /**
     * Particle lifetime.
     *
     * @type { ?int }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lifetime?: int;
    /**
     * Particle lifetimeRange,value range [0, ∞).
     * when lifetimeRange>lifetime,minimum lifetime is 0.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lifetimeRange?: int;
}
/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface EmitterOptions {
    /**
     * Set particle config.
     *
     * @type { EmitterParticleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    particle: EmitterParticleOptions;
    /**
     * Emitting rate, that is, the number of particles produced per second.
     * @type { ?int }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    emitRate?: int;
    /**
     * Shape of emitter.
     * @type { ?ParticleEmitterShape }
     * @default ParticleEmitterShape.RECTANGLE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shape?: ParticleEmitterShape;
    /**
     * Position of emitter.
     * The first element means X-axis location.
     * The second element means the Y-axis location.
     *
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default [0,0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position?: ParticleTuple<Dimension, Dimension>;
    /**
     * Size of emitter.
     * The first element means emitter width.
     * The second element means emitter height.
     *
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default ['100%','100%']
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: ParticleTuple<Dimension, Dimension>;
    /**
     * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
     *
     * @type { ?ParticleAnnulusRegion }
     * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    annulusRegion?: ParticleAnnulusRegion;
}
/**
 * Defines the particle property updater configs.
 * @typedef { undefined | ParticleTuple<double, double> |  Array<ParticlePropertyAnimation<double>> } ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ParticlePropertyUpdaterConfigs = undefined | ParticleTuple<double, double> | Array<ParticlePropertyAnimation<double>>;
/**
 * Defines the particle updater options.
 *
 * @typedef ParticleUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticleUpdaterOptions {
    /**
     * Particle updater type.
     *
     * @type { ParticleUpdater }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: ParticleUpdater;
    /**
     * Particle updater configuration.
     *
     * @type { ParticlePropertyUpdaterConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    config: ParticlePropertyUpdaterConfigs;
}
/**
 * Defines the particle color options.
 *
 * @typedef ParticleColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticleColorOptions {
    /**
     * Red component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<int, int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    r: ParticleTuple<int, int>;
    /**
     * Green component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<int, int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    g: ParticleTuple<int, int>;
    /**
     * Blue component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<int, int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    b: ParticleTuple<int, int>;
    /**
     * Opacity component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<int, int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    a: ParticleTuple<int, int>;
}
/**
 * Defines the particle color updater options.
 *
 * @interface ParticleColorUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticleColorUpdaterOptions {
    /**
     * Color updater.
     *
     * @type { ParticleUpdater }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: ParticleUpdater;
    /**
     * Color updater configuration.
     *
     * @type { ParticleColorPropertyUpdaterConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    config: ParticleColorPropertyUpdaterConfigs;
}
/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticlePropertyOptions {
    /**
     * Initial range, within which the initial value are randomly generated.
     *
     * @type { ParticleTuple<double, double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    range: ParticleTuple<double, double>;
    /**
     * Particle property updater.
     *
     * @type { ?ParticleUpdaterOptions }
     * @default  {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    updater?: ParticleUpdaterOptions;
}
/**
 * Defines the particle color property updater configs.
 * @typedef {undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>} ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ParticleColorPropertyUpdaterConfigs = undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>;
/**
 * Defines the particle color property updater.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticleColorPropertyOptions {
    /**
     * Initial color range, within which the initial color is randomly generated.
     *
     * @type { ParticleTuple<ResourceColor, ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    range: ParticleTuple<ResourceColor, ResourceColor>;
    /**
     * Distribution type of particle color.
     * @type { ?DistributionType }
     * @default DistributionType.UNIFORM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    distributionType?: DistributionType;
    /**
     * Particle color property updater.
     *
     * @type { ?ParticleColorUpdaterOptions }
     * @default {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    updater?: ParticleColorUpdaterOptions;
}
/**
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ParticlePropertyAnimation<T> {
    /**
     * Start position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    from: T;
    /**
     * End position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    to: T;
    /**
     * Start millis of the particle animation.
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    startMillis: int;
    /**
     * End millis of the particle animation.
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    endMillis: int;
    /**
     * Curve of the particle animation.
     * @type { ?(Curve | ICurve) }
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    curve?: Curve | ICurve;
}
/**
 * Defines the Particles interface.
 *
 * @interface Particles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Particles {
    /**
     * Array of particles.
     *
     * @type { Array<ParticleOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    particles: Array<ParticleOptions>;
}
/**
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ParticleType {
    /**
     * Point-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    POINT = 'point',
    /**
     * Image-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IMAGE = 'image'
}
/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ParticleEmitterShape {
    /**
     * Rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RECTANGLE = 'rectangle',
    /**
     * Circle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CIRCLE = 'circle',
    /**
     * Ellipse.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ELLIPSE = 'ellipse',
    /**
     * Annulus.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ANNULUS = 'annulus'
}
/**
 * Enumerates the color distribution types of a particle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DistributionType {
    /**
     * Uniform distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UNIFORM = 0,
    /**
     * Gaussian distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    GAUSSIAN = 1
}
/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ParticleUpdater {
    /**
     * No updater is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 'none',
    /**
     * Random updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RANDOM = 'random',
    /**
     * Curve updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CURVE = 'curve'
}

/**
 * The ParticleAttribute.
 * 
 * @extends CommonMethod
 * @interface ParticleAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
 export declare interface ParticleAttribute extends CommonMethod {
    /**
     * Particle disturbance Field.
     *
     * @param { Array<DisturbanceFieldOptions> | undefined } fields - particle disturbance Field params.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default disturbanceFields(fields: Array<DisturbanceFieldOptions> | undefined): this;
    /**
     * Add particle animation component properties.
     *
     * @param { Array<EmitterProperty> | undefined } value - The emitter property.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default emitter(value: Array<EmitterProperty> | undefined): this;

    /**
     * Add particle attribute modifier.
     *
     * @param { AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
     *     The AttributeModifier.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Set ripple fields of particles. The ripple field applies a force that varies in a wave-like pattern to particles
     * within its influence range, creating an effect similar to the spreading of ripples.
     *
     * @param { Array<RippleFieldOptions> | undefined } fields - The infomation of ripple fields.
     * @returns { this } Returns this.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default rippleFields(fields: Array<RippleFieldOptions> | undefined): this;
    /**
     * Set velocity fields of particles. The velocity field applies a force to particles within its influence range,
     * causing the particles to superimpose the specified velocity of the field onto their original velocity.
     *
     * @param { Array<VelocityFieldOptions> | undefined } fields - The infomation of velocity fields.
     * @returns { this } Returns this.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default velocityFields(fields: Array<VelocityFieldOptions> | undefined): this;
}
/**
 * Defines particle disturbance Field params.
 * @interface DisturbanceFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DisturbanceFieldOptions {
    /**
     * Strength of the repulsive force from the center outward,
     * with positive numbers indicating outward repulsion and negative numbers indicating
     * inward attraction.
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strength?: double;
    /**
     * Disturbance filed shape.
     *
     * @type { ?DisturbanceFieldShape }
     * @default DisturbanceFieldShape.RECT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shape?: DisturbanceFieldShape;
    /**
     * Disturbance filed size width value width, height.
     *
     * @type { ?SizeT<double> }
     * @default {width:0,height:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: SizeT<double>;
    /**
     * Disturbance filed position width value x, y.
     *
     * @type { ?PositionT<double> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position?: PositionT<double>;
    /**
     * Attenuation degree of the field from the center point to the field boundary.
     * ranging from 0 to 100 integers. If 0, it indicates that the field is a rigid body,
     * and all particles within the range will be excluded.
     * a larger feather value indicates a greater degree of relaxation in the field,
     * and more particles near the center point will appear in the field strength range. The default value is 0.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    feather?: int;
    /**
     * Scaling parameter is used to control the overall size of noise, with a value greater or equal 0.
     *
     * @type { ?double }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    noiseScale?: double;
    /**
    * Noise frequency with a value greater or equal 0.
    *
    * @type { ?double }
    * @default 1
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    noiseFrequency?: double;
    /**
     * NoiseAmplitude fluctuation range of noise,  value,
     *
     * @type { ?double }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    noiseAmplitude?: double;
}
/**
 * Defines particle disturbance shape.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DisturbanceFieldShape {
    /**
     * Shape rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RECT,
    /**
    * Shape circle.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    CIRCLE,
    /**
     * Shape eclipse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ELLIPSE
}
/**
 * Defines particle field region params.
 *
 * @interface FieldRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface FieldRegion {
    /**
     * The shape of the field
     *
     * @type { ?DisturbanceFieldShape }
     * @default DisturbanceFieldShape.RECT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    shape?: DisturbanceFieldShape;
    /**
     * The coordinates of the center position of the field. The top-left corner of the component is the origin of the
     * coordinate system. The coordinate unit is vp.
     *
     * @type { ?PositionT<double> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    position?: PositionT<double>;
    /**
     * The size of the field. The unit of value is vp.
     *
     * @type { ?SizeT<double> }
     * @default {width:0,height:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    size?: SizeT<double>;
}
/**
 * Defines ripple field options.
 *
 * @interface RippleFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface RippleFieldOptions {
    /**
     * The amplitude of the ripple field. The greater the amplitude, the stronger the force of the ripple field.
     * Range of values:[0, +∞)
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    amplitude?: double;
    /**
     * Wavelength, which is the distance over which a wave cycle changes. The larger
     * the wavelength, the slower the wave changes with distance, and the less pronounced the wave fluctiations.
     * Range of values:[0, +∞)
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    wavelength?: double;
    /**
     * Wave speed. The greater the wave speed, the faster the wave changes over time, and the more pronounced the wave
     * motion. Range of values:[0, +∞)
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    waveSpeed?: double;
    /**
     * The attenuation coefficient of the ripple field. The larger the attenuation coefficient, the faster the wave
     * attenuates over time. Range of values:[0,1]
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    attenuation?: double;
    /**
     * The central point where the ripple field generates force. The top-left corner of the component is the origin of
     * coordinates. The coordinate unit is vp.
     *
     * @type { ?PositionT<double> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    center?: PositionT<double>;
    /**
     * The region influenced by the ripple field.
     *
     * @type { ?FieldRegion }
     * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    region?: FieldRegion;
}
/**
 * Defines velocity field options.
 *
 * @interface VelocityFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface VelocityFieldOptions {
    /**
     * The velocity values in each direction of the velocity field. Particles only acquire this velocity when within
     * the range of the velocity field; once they leave the range of the velocity field, they are no longer influenced
     * by it and do not gain this additional velocity.
     *
     * @type { ?Vector2T<double> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    velocity?: Vector2T<double>
    /**
     * The region influenced by the velocity field.
     *
     * @type { ?FieldRegion }
     * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    region?: FieldRegion;
}
/**
 * Defines particle annuslus region params.
 * @interface ParticleAnnulusRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ParticleAnnulusRegion {
    /**
     * The coordinates of the center of the annulus
     *
     * @type { ?PositionT<LengthMetrics> }
     * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    center?: PositionT<LengthMetrics>;
    /**
     * The outer radius of the annulus
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    outerRadius: LengthMetrics;
    /**
     * The inner radius of the annulus
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    innerRadius: LengthMetrics;
    /**
     * The start angle of the annulus, in degree
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    startAngle?: double;
    /**
     * The end angle of the annulus, in degree
     *
     * @type { ?double }
     * @default 360
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    endAngle?: double;
}

/**
 * Defines Particle Component
 *
 * @param { Particles } particles - particle constructor options
 * @param { CustomBuilder } [content_] - container
 * @returns { ParticleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Particle(
    particles: Particles, 
    content_?: CustomBuilder,
): ParticleAttribute
