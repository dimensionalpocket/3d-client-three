'use strict'

import { Vector3 } from '../Vector3.js'

export class JointTransform {
  /**
   * @param {object} opts
   * @param {JointDefinition} opts.definition
   * @param {Vector3Data} [opts.rotation]
   */
  constructor ({ definition, rotation = undefined }) {
    if (!definition) {
      throw new Error('JointTransform: definition is required')
    }

    /** @type {JointDefinition} */
    this.definition = definition

    /** @type {Vector3} */
    this.rotation = new Vector3(rotation)
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

    var bRot = bone.rotation
    var tRot = this.rotation

    bRot.set(tRot.x, tRot.y, tRot.z)

    return true
  }
}
