'use strict'

export class ClientPose {
  /**
   * Applies a pose to a skeleton.
   *
   * @param {Client} client
   * @param {id} skeletonId
   * @param {id} poseId
   * @returns {boolean}
   */
  static run (client, skeletonId, poseId) {
    var data = client.data

    var skeleton = data.skeletons.get(skeletonId)
    if (!skeleton) {
      console.warn('ClientPose: skeleton not found:', skeletonId)
      return false
    }

    var pose = data.poses.get(poseId)
    if (!pose) {
      console.warn('ClientPose: pose not found:', poseId)
      return false
    }

    pose.applyToSkeleton(skeleton)

    return true
  }
}
