'use strict'

import { BackSide, BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial, SkeletonHelper } from 'three'

// This geometry is shared across all volume meshes.
const boxGeometry = new BoxGeometry(1, 1, 1)

// The outline material is shared across all outline meshes.
const outlineMaterial = new MeshBasicMaterial({ color: 'black', side: BackSide })
const OUTLINE_SIZE = 0.01

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

    var material = new MeshPhongMaterial({ color: volume.color })
    var mesh = new Mesh(boxGeometry, material)

    mesh.scale.set(volume.scale.x, volume.scale.y, volume.scale.z)
    mesh.position.set(volume.position.x, volume.position.y, volume.position.z)
    mesh.name = bone.name + '-volume'
    mesh.castShadow = volume.castShadows
    mesh.receiveShadow = volume.receiveShadows

    bone.add(mesh)

    if (volume.outline) {
      var outlineMesh = new Mesh(boxGeometry, outlineMaterial)
      outlineMesh.scale.set(
        volume.scale.x + (OUTLINE_SIZE * 2),
        volume.scale.y + (OUTLINE_SIZE * 2),
        volume.scale.z + (OUTLINE_SIZE * 2)
      )
      outlineMesh.position.set(volume.position.x, volume.position.y, volume.position.z)
      outlineMesh.name = bone.name + '-volume-outline'
      outlineMesh.castShadow = false
      outlineMesh.receiveShadow = false
      bone.add(outlineMesh)
    }

    return true
  }
}
