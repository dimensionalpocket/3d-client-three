'use strict'

import { ClientGenerateRenderFunction } from './ClientGenerateRenderFunction.js'
import { ClientRendering } from './ClientRendering.js'

export class ClientSetCamera {
  /**
   * Sets the camera to be used while rendering.
   * If `null`, removes the current camera and stops rendering.
   *
   * @param {Client} client
   * @param {?id} cameraId
   * @returns {boolean}
   */
  static run (client, cameraId) {
    if (cameraId == null) {
      client.camera = undefined
      if (client.rendering) {
        ClientRendering.run(client, false)
      }
      return true
    }

    var camera = client.data.cameras.get(cameraId)

    if (!camera) {
      console.error('ClientSetCamera: camera not found', cameraId)
      return false
    }

    client.camera = camera

    if (client.rendering && client.scene) {
      client.renderingFn = ClientGenerateRenderFunction.run(client, client.scene, client.camera, client.renderer)
    }

    return true
  }
}
