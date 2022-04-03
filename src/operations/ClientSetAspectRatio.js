'use strict'

import { ClientUpdateCameraRatios } from './ClientUpdateCameraRatios.js'

export class ClientSetAspectRatio {
  /**
   * Sets the aspect ratio of the client.
   *
   * @param {ThreeClient} client
   * @param {number} aspect
   * @returns {boolean}
   */
  static run (client, aspect) {
    client.aspectRatio = aspect

    ClientUpdateCameraRatios.run(client, client.aspectRatio)

    return true
  }
}
