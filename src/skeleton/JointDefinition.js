'use strict'

import { JointVolume } from './JointVolume.js'
import { Vector3 } from '../core/Vector3.js'

export class JointDefinition {
  /**
   * @param {JointDefinitionData} opts
   */
  constructor (opts) {
    /** @type {id} */
    this.id = opts.id

    /** @type {string|undefined} */
    this.parent = opts.parent

    /** @type {Vector3} */
    this.position = new Vector3(opts.position)

    var limits = opts.limits

    /** @type {RotationLimitData} */
    this.limits = {
      xMin: limits?.xMin || -Infinity,
      xMax: limits?.xMax || Infinity,
      yMin: limits?.yMin || -Infinity,
      yMax: limits?.yMax || Infinity,
      zMin: limits?.zMin || -Infinity,
      zMax: limits?.zMax || Infinity
    }

    // Axis names are shown in editors.
    this.axisNameX = opts.axisNameX || 'Front/Back'
    this.axisNameY = opts.axisNameY || 'Twist'
    this.axisNameZ = opts.axisNameZ || 'Side'

    /**
     * Rotation order for Euler angles (from right to left).
     * Default is XZY: we want to "twist" (Y) first,
     * before moving "front/back" or "side".
     *
     * @type {string}
     */
    this.rotationOrder = opts.rotationOrder || 'XZY'

    /**
     * JointVolume instance to visualize a
     * "body part box" from this joint.
     * If undefined, nothing will be rendered.
     *
     * @type {JointVolume|undefined}
     */
    this.volume = opts.volume && new JointVolume(opts.volume)
  }
}
