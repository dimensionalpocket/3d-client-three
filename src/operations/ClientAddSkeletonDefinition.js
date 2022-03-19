'use strict'

import { SkeletonDefinition } from '../skeleton/SkeletonDefinition.js'

export class ClientAddSkeletonDefinition {
  /**
   * @param {ThreeClient} client
   * @param {SkeletonDefinitionData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var skeletonDef = new SkeletonDefinition(data)

    client.data.skeletonDefinitions.set(skeletonDef.id, skeletonDef)

    return true
  }
}
