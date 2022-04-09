'use strict'

import { JointTransform } from './skeleton/JointTransform.js'

/**
 * A Pose is a collection of JointTransform instances
 * that can be applied to an Skeleton instance to pose it.
 */
export class Pose {
  /**
   * @param {object} options
   * @param {id} options.id - ID of the pose. Required.
   * @param {SkeletonDefinition} options.definition - SkeletonDefinition instance to use. Required.
   * @param {Array<JointTransformData>} options.transforms - An array of object literals for creating joint transforms.
   * @param {boolean} [options.clear] - When `true`, will reset the skeleton pose before applying transforms.
   */
  constructor ({ id, definition, transforms = [], clear = false }) {
    if (!definition) {
      throw new Error('Pose: skeleton definition is required')
    }

    /** @type {id} */
    this.id = id

    /** @type {SkeletonDefinition} */
    this.definition = definition

    /** @type {Array<JointTransform>} */
    this.transforms = []

    var jointDef
    for (var t of transforms) {
      jointDef = definition.getJointDefinition(t.joint)
      if (jointDef) {
        this.transforms.push(new JointTransform({
          definition: jointDef,
          rotation: t.rotation,
          position: t.position
        }))
      }
    }

    /** @type {boolean} */
    this.clear = clear
  }

  /**
   * Applies this pose to an skeleton.
   *
   * @param {Skeleton} skeleton
   * @returns {boolean}
   */
  applyToSkeleton (skeleton) {
    if (this.definition.id !== skeleton.definition.id) {
      console.warn('Pose#applyToSkeleton: incompatible skeleton definition', this.definition.id, skeleton.definition.id)
      return false
    }

    if (this.clear) {
      for (var bone of skeleton.bones) {
        bone.rotation.set(0, 0, 0)
      }
    }

    for (var transform of this.transforms) {
      transform.applyToSkeleton(skeleton)
    }

    return true
  }
}
