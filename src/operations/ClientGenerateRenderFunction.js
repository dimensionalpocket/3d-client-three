'use strict'

import raf from '../polyfills/requestAnimationFrame.js'

export const NOOP = function () {}

export class ClientGenerateRenderFunction {
  /**
   * Generates and returns a function that will be called in the render loop.
   * The generated function has baked variables for faster processing.
   *
   * @param {Client} client
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Renderer} renderer
   * @returns {function}
   */
  static run (client, scene, camera, renderer) {
    return function () {
      if (client.rendering !== true) return

      // @ts-ignore - callback signature, FIXME later
      raf(client.renderingFn)

      renderer.render(scene, camera)
    }
  }
}
