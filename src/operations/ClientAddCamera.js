'use strict'

import { CameraBuilder } from '../builders/CameraBuilder.js'

export class ClientAddCamera {
  /**
   * @param {ThreeClient} client
   * @param {CameraBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var camera = CameraBuilder.run(data)

    client.data.cameras.set(camera.name, camera)

    return true
  }
}
