'use strict'

import { ClientGenerateRenderFunction } from './ClientGenerateRenderFunction.js'
import { ClientRendering } from './ClientRendering.js'

export class ClientSetScene {
  /**
   * Sets the scene to be rendered.
   *
   * @param {ThreeClient} client
   * @param {?id} sceneId
   * @returns {boolean}
   */
  static run (client, sceneId) {
    if (sceneId == null) {
      client.scene = undefined
      if (client.rendering) {
        ClientRendering.run(client, false)
      }
      return true
    }

    var scene = client.data.scenes.get(sceneId)

    if (!scene) {
      console.error('ClientSetScene: scene not found', sceneId)
      return false
    }

    client.scene = scene

    if (client.rendering && client.camera) {
      client.renderingFn = ClientGenerateRenderFunction.run(client, client.scene, client.camera, client.renderer)
    }

    return true
  }
}
