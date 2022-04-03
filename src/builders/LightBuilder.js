'use strict'

import { AmbientLight, DirectionalLight, PointLight, SpotLight } from 'three'

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

    var type = options.type

    if (!type) {
      throw new Error('LightBuilder: type is required')
    }

    var color = options.color
    var intensity = options.intensity
    var distance = options.distance
    var decay = options.decay
    var angle = options.angle
    var penumbra = options.penumbra

    var light
    if (type === 'ambient') {
      light = new AmbientLight(color, intensity)
    } else if (type === 'directional') {
      light = new DirectionalLight(color, intensity)
    } else if (type === 'point') {
      light = new PointLight(color, intensity, distance, decay)
    } else if (type === 'spot') {
      light = new SpotLight(color, intensity, distance, angle, penumbra, decay)
    } else {
      throw new Error(`LightBuilder: invalid type [${type}]`)
    }

    light.name = '' + id

    return light
  }
}
