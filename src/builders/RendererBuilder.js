'use strict'

import * as THREE from 'three'

export class RendererBuilder {
  /**
   * Returns a new THREE.WebGLRenderer with the given options.
   *
   * @param {RendererBuilderOptions} [options]
   * @returns {THREE.WebGLRenderer}
   */
  static run (options = {}) {
    var threeOptions = {}

    // TODO: add more options from https://threejs.org/docs/#api/en/renderers/WebGLRenderer
    if (options.antialias != null) {
      threeOptions.antialias = options.antialias
    }

    return new THREE.WebGLRenderer(threeOptions)
  }
}
