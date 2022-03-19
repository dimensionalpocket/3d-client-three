'use strict'

import * as THREE from 'three'

export class RendererBuilder {
  /**
   * Returns a new THREE.WebGLRenderer with the given options.
   *
   * @param {RendererBuilderOptions} [_options]
   * @returns {THREE.WebGLRenderer}
   */
  static run (_options = {}) {
    return new THREE.WebGLRenderer()
  }
}
