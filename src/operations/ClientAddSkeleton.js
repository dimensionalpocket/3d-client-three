'use strict'

import { SkeletonBuilder } from '../builders/SkeletonBuilder.js'

export class ClientAddSkeleton {
  /**
   * @param {ThreeClient} client
   * @param {SkeletonData} data
   * @returns {boolean}
   */
  static run (client, data) {
    // TODO: check if skeleton already exists in client data and delete/dispose it
    var skeleton = SkeletonBuilder.run({ client, data })

    client.data.skeletons.set(skeleton.id, skeleton)

    return true
  }
}
