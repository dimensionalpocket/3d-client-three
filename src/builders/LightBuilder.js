'use strict'

import * as THREE from 'three'

export class LightBuilder {
  /**
   * Returns a new THREE.Light with the given options.
   *
   * @param {LightBuilderOptions} options
   * @returns {THREE.Light}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('LightBuilder: ID is required')
    }

    var color = options?.color
    var intensity = options?.intensity

    var light = new THREE.AmbientLight(color, intensity)

    light.name = '' + id

    return light
  }
}
