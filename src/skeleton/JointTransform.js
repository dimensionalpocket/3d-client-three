'use strict'

import { Vector3 } from '../Vector3.js'

export class JointTransform {
  /**
   * @param {object} opts
   * @param {JointDefinition} opts.definition
   * @param {Vector3Data} [opts.rotation]
   * @param {Vector3Data} [opts.position]
   */
  constructor ({ definition, rotation = undefined, position = undefined }) {
    if (!definition) {
      throw new Error('JointTransform: definition is required')
    }

    /** @type {JointDefinition} */
    this.definition = definition

    /** @type {Vector3} */
    this.rotation = new Vector3(rotation)

    /** @type {Vector3|undefined} */
    this.position = position ? new Vector3(position) : undefined
  }

  /**
   * Applies this transform to a skeleton's joint.
   *
   * @param {Skeleton} skeleton
   * @returns {boolean}
   */
  applyToSkeleton (skeleton) {
    var def = this.definition
    var boneId = '' + skeleton.id + '-' + def.id
    var bone = skeleton.getBoneByName(boneId) // TODO: optimize?

    if (!bone) {
      console.error('JointTransform#apply: bone not found in skeleton', boneId)
      return false
    }

    var rotation = this.rotation
    bone.rotation.set(rotation.x, rotation.y, rotation.z)

    var position = this.position
    if (position) {
      bone.position.set(position.x, position.y, position.z)
    }

    return true
  }
}
