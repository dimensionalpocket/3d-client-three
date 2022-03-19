'use strict'

import { Vector3 } from '../Vector3.js'

export class JointTransform {
  /**
   * @param {object} opts
   * @param {JointDefinition} opts.jointDefinition
   * @param {Vector3Data} [opts.rotation]
   */
  constructor ({ jointDefinition, rotation = undefined }) {
    if (!jointDefinition) {
      throw new Error('JointTransform: definition is required')
    }

    /** @type {JointDefinition} */
    this.definition = jointDefinition

    /** @type {Vector3} */
    this.rotation = new Vector3(rotation)
  }

  /**
   * Applies this transform to a skeleton's joint.
   *
   * @param {THREE.Skeleton} skeleton
   * @returns {boolean}
   */
  applyToSkeleton (skeleton) {
    // var def = this.definition
    // var joint = skeleton.joints.get(def.id)

    // if (!joint) {
    //   console.error('JointTransform#apply: joint not found in skeleton', skeleton.definition.id, def.id)
    //   return false
    // }

    // // Tell the Client/Renderer that the joint has been updated,
    // // since the joint instance doesn't hold any transforms.
    // skeleton.emit(JOINT_TRANSFORM_EVENT, joint, this.rotation, skeleton)

    return true
  }
}
