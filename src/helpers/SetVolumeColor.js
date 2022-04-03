'use strict'

export class SetVolumeColor {
  /**
   * Sets the color of one or all volumes of a skeleton.
   *
   * @param {ThreeClient} client
   * @param {id} skeletonId
   * @param {id} jointId - Joint ID, or "*" to set the color of all joints.
   * @param {string} color
   * @returns {boolean}
   */
  static run (client, skeletonId, jointId, color) {
    var skeleton = client.data.skeletons.get(skeletonId)

    if (!skeleton) {
      console.error('SetVolumeColor: skeleton not found in client', skeletonId)
      return false
    }

    /** @type {Array<JointDefinition>} */
    var jointsToColorize

    if (jointId === '*') {
      jointsToColorize = skeleton.definition.joints
    } else {
      var joint = skeleton.definition.joints.find(j => j.id === jointId)
      if (!joint) {
        console.error('SetVolumeColor: joint ID', jointId, 'not found in skeleton definition ID', skeleton.definition.id)
        return false
      }
      jointsToColorize = [joint]
    }

    // @ts-ignore - TS not taking skeleton guard clause into account
    jointsToColorize.forEach(j => this.colorizeJoint(j, skeleton, color))

    return true
  }

  /**
   * Colorizes a single bone volume in a skeleton.
   *
   * @param {JointDefinition} joint
   * @param {Skeleton} skeleton
   * @param {string} color
   */
  static colorizeJoint (joint, skeleton, color) {
    if (!joint.volume) {
      // Silently skips joints without volumes.
      return
    }

    var boneId = '' + skeleton.id + '-' + joint.id
    var bone = skeleton.getBoneByName(boneId)

    if (!bone) {
      console.error('SetVolumeColor.colorizeJoint: could not find Bone ID', boneId, 'in skeleton ID', skeleton.id)
      return
    }

    var meshId = boneId + '-volume'

    var mesh = bone.children.find(c => c.name === meshId)

    if (!mesh) {
      console.error('SetVolumeColor.colorizeJoint: could not find Mesh ID', boneId, 'in skeleton ID', skeleton.id)
      return
    }

    // @ts-ignore
    mesh.material.color.set(color)
  }
}
