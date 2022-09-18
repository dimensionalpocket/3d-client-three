'use strict'

import { LightBuilder } from '../builders/LightBuilder.js'

export class ClientAddLight {
  /**
   * @param {Client} client
   * @param {LightBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var light = LightBuilder.run(data)

    client.data.lights.set(light.name, light)

    return true
  }
}
