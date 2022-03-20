'use strict'

import * as THREE from 'three'

export class CameraBuilder {
  /**
   * Returns a new THREE.Camera with the given options.
   *
   * @param {CameraBuilderOptions} options
   * @returns {THREE.PerspectiveCamera}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('CameraBuilder: ID is required')
    }

    var type = options?.type || 'perspective'
    var fov = options?.fov || 50
    var aspect = options?.aspect || 1
    var near = options?.near || 0.01
    var far = options?.far || 1000

    var camera

    if (type === 'perspective') {
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    } else {
      throw new Error(`CameraBuilder: invalid type ${type}`)
    }

    camera.name = '' + id

    return camera
  }
}
