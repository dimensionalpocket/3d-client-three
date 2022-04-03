'use strict'

export class ClientRenderOnce {
  /**
   * Renders the scene once.
   *
   * @param {ThreeClient} client
   * @returns {boolean}
   */
  static run (client) {
    if (client.rendering) {
      console.warn('ClientRenderOnce: client is already rendering')
      return false
    }

    var scene = client.scene

    if (!scene) {
      console.error('ClientRenderOnce: no scene set')
      return false
    }

    var camera = client.camera

    if (!camera) {
      console.error('ClientRenderOnce: no camera set')
      return false
    }

    var renderer = client.renderer

    renderer.compile(scene, camera)
    renderer.render(scene, camera)

    return true
  }
}
