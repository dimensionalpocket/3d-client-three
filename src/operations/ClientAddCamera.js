'use strict'

import { CameraBuilder } from '../builders/CameraBuilder.js'

export class ClientAddCamera {
  /**
   * @param {Client} client
   * @param {CameraBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    /** @type {CameraBuilderOptions} */
    var cameraBuilderData = Object.assign({
      aspect: client.aspectRatio
    }, data || {})

    var camera = CameraBuilder.run(cameraBuilderData)

    client.data.cameras.set(camera.name, camera)

    return true
  }
}
