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
      throw new Error('SkeletonBuilder: definition is required')
    }

    var definition = client.data.skeletonDefinitions.get(data.definition)
    if (!definition) {
      throw new Error('SkeletonBuilder: definition not loaded in client')
    }

    var bones = []
    for (var joint of definition.joints) {
      bones.push(BoneBuilder.run(joint, data.id))
    }

    var skeleton = new Skeleton(bones)
    skeleton.id = data.id

    return skeleton
  }
}
