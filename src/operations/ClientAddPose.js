'use strict'

import { Pose } from '../Pose.js'

export class ClientAddPose {
  /**
   * @param {ThreeClient} client
   * @param {PoseData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var definition = client.data.skeletonDefinitions.get(data.skeleton)

    if (!definition) {
      console.error('ClientAddPose: skeleton definition data not loaded in client:', data.skeleton)
      return false
    }

    var pose = new Pose({ id: data.id, definition, transforms: data.transforms, clear: data.clear })

    client.data.poses.set(pose.id, pose)

    return true
  }
}
