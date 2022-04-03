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

    var shadows = options.shadows
    if (shadows?.enabled) {
      light.castShadow = true
      light.shadow.mapSize.width = shadows.mapWidth || 512
      light.shadow.mapSize.height = shadows.mapHeight || 512
      // @ts-ignore
      light.shadow.camera.near = shadows.near || 0.001
      // @ts-ignore
      light.shadow.camera.far = shadows.far || 100
    }

    return light
  }
}
