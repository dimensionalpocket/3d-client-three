'use strict'

import { ClientGenerateRenderFunction, NOOP } from './ClientGenerateRenderFunction.js'

export class ClientRendering {
  /**
   * Starts or stops a client from rendering in a loop.
   *
   * @param {ThreeClient} client
   * @param {boolean} isRendering
   * @returns {boolean}
   */
  static run (client, isRendering) {
    if (!isRendering) {
      client.rendering = false
      client.renderingFn = NOOP

      return true
    }

    var scene = client.scene

    if (!scene) {
      console.error('ClientRendering: no scene set')
      return false
    }

    var camera = client.camera

    if (!camera) {
      console.error('ClientRendering: no camera set')
      return false
    }

    client.renderingFn = ClientGenerateRenderFunction.run(client, scene, camera, client.renderer)
    client.rendering = true

    // First call to start rendering.
    client.renderingFn()

    return true
  }
}
