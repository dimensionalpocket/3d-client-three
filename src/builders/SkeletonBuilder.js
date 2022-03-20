'use strict'

import { Skeleton } from '../extensions/Skeleton.js'
import { BoneBuilder } from './BoneBuilder.js'

export class SkeletonBuilder {
  /**
   * Returns a new Skeleton (extension of THREE.Skeleton) with the given options.
   *
   * @param {SkeletonBuilderOptions} options
   * @returns {Skeleton}
   */
  static run ({ client, data }) {
    if (!data.definition) {
      throw new Error('SkeletonBuilder: definition ID is required')
    }

    var definition = client.data.skeletonDefinitions.get(data.definition)
    if (!definition) {
      throw new Error('SkeletonBuilder: definition not loaded in client')
    }

    var bones = []
    var bone, parentBone, parentId, p

    for (var joint of definition.joints) {
      bone = BoneBuilder.run(joint, data.id)

      parentBone = null
      parentId = joint.parent
      if (parentId) {
        // Look for the parent bone in the partial bone array
        for (p of bones) {
          // Bone names include the skeleton ID.
          if (p.name === '' + data.id + '-' + parentId) {
            parentBone = p
            break
          }
        }

        if (!parentBone) {
          throw new Error('SkeletonBuilder: one of the joints refer to a parent joint that does not exist in the definition')
        }

        bone.parent = parentBone
      }

      bones.push(bone)
    }

    return new Skeleton(data.id, definition, bones)
  }
}
