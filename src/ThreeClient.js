'use strict'

import * as THREE from 'three'

import { RendererBuilder } from './builders/RendererBuilder.js'

export class ThreeClient {
  /**
   * @param {?ThreeClientOptions} options
   */
  constructor (options = null) {
    /** @type {THREE.WebGLRenderer} */
    this.renderer = RendererBuilder.run(options?.renderer)
  }

  /**
   * Returns the <canvas> element created by THREE.
   *
   * @returns {HTMLCanvasElement}
   */
  get canvasElement () {
    return this.renderer.domElement
  }
}
