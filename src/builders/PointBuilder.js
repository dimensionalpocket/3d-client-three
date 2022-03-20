'use strict'

import * as THREE from 'three'

export class PointBuilder {
  /**
   * Returns a new THREE.Object3D with the given options.
   *
   * @param {PointBuilderOptions} options
   * @returns {THREE.Object3D}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('PointBuilder: ID is required')
    }

    var point = new THREE.Object3D()

    point.name = '' + id

    return point
  }
}
