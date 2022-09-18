'use strict'

import { SceneBuilder } from '../builders/SceneBuilder.js'

export class ClientAddScene {
  /**
   * @param {Client} client
   * @param {SceneBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var scene = SceneBuilder.run(data)

    client.data.scenes.set(scene.name, scene)

    return true
  }
}
