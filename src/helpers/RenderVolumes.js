'use strict'

import { BoxGeometry, Mesh, MeshToonMaterial, SkeletonHelper } from 'three'

// This geometry is shared across all volume meshes.
const boxGeometry = new BoxGeometry(1, 1, 1)

export class RenderVolumes {
  /**
   * @param {ThreeClient} client
   * @param {id} skeletonId
   * @param {boolean} helper - If `true`, renders a SkeletonHelper to visualize bones
   * @returns {boolean}
   */
  static run (client, skeletonId, helper = false) {
    var skeleton = client.data.skeletons.get(skeletonId)
    if (!skeleton) {
      console.error('RenderVolumes: skeleton not found in client', skeletonId)
      return false
    }

    for (var joint of skeleton.definition.joints) {
      this.renderJointVolume(joint, skeleton)
    }

    if (helper) {
      var skeletonHelper = new SkeletonHelper(skeleton.bones[0])
      client.scene?.add(skeletonHelper)
    }

    return true
  }

  /**
   * @param {JointDefinition} joint
   * @param {Skeleton} skeleton
   * @returns {boolean}
   */
  static renderJointVolume (joint, skeleton) {
    var volume = joint.volume
    if (!volume) {
      return false
    }

    var boneId = '' + skeleton.id + '-' + joint.id
    var bone = skeleton.getBoneByName(boneId)

    if (!bone) {
      console.error('RenderVolumes: failed to find bone', boneId, 'in skeleton', skeleton.id)
      return false
    }

    var material = new MeshToonMaterial({ color: volume.color })
    var mesh = new Mesh(boxGeometry, material)

    mesh.scale.set(volume.scale.x, volume.scale.y, volume.scale.z)
    mesh.position.set(volume.translation.x, volume.translation.y, volume.translation.z)
    mesh.name = bone.name + '-volume'
    mesh.castShadow = true
    mesh.receiveShadow = true

    bone.add(mesh)

    return true
  }
}
