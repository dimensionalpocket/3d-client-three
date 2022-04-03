'use strict'

export class ClientUpdateCameraRatios {
  /**
   * Update all applicable cameras to match the given aspect ratio.
   *
   * @param {ThreeClient} client
   * @param {number} aspectRatio
   * @returns {boolean}
   */
  static run (client, aspectRatio) {
    client.data.cameras.forEach(camera => {
      if (camera.type === 'PerspectiveCamera') {
        // @ts-ignore [1]
        camera.aspect = aspectRatio
        // @ts-ignore [1]
        camera.updateProjectionMatrix()
      }
    })

    return true
  }
}

// [1] aspect and updateProjectionMatrix() not available in all camera types
