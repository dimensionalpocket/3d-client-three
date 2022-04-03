'use strict'

import { Scene, Color } from 'three'

export class SceneBuilder {
  /**
   * Returns a new THREE.Scene with the given options.
   *
   * @param {SceneBuilderOptions} options
   * @returns {THREE.Scene}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('SceneBuilder: ID is required')
    }

    var scene = new Scene()

    scene.name = '' + id

    if (options?.bgcolor) {
      scene.background = new Color(options.bgcolor)
    }

    return scene
  }
}
