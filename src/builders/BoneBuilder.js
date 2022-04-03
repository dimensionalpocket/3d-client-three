'use strict'

import { Bone } from 'three'

export class BoneBuilder {
  /**
   * Creates a THREE.Bone from a JointDefinition instance.
   *
   * @param {JointDefinition} jointDefinition
   * @param {id} skeletonId - ID of the Skeleton the bone belongs to. Used to assemble a unique bone name.
   * @returns {THREE.Bone}
   */
  static run (jointDefinition, skeletonId) {
    if (!jointDefinition) {
      throw new Error('BoneBuilder: joint definition is required')
    }

    if (!skeletonId) {
      throw new Error('BoneBuilder: skeleton ID is required')
    }

    var bone = new Bone()

    bone.name = '' + skeletonId + '-' + jointDefinition.id

    var dPos = jointDefinition.position
    var bPos = bone.position

    bPos.x = dPos.x
    bPos.y = dPos.y
    bPos.z = dPos.z

    bone.rotation.order = jointDefinition.rotationOrder

    return bone
  }
}
