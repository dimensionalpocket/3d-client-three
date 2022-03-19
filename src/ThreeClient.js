'use strict'

import * as THREE from 'three'

import { ClientData } from './ClientData.js'
import { ClientFeed } from './operations/ClientFeed.js'
import { RendererBuilder } from './builders/RendererBuilder.js'

export class ThreeClient {
  /**
   * @param {?ThreeClientOptions} options
   */
  constructor (options = null) {
    /** @type {THREE.WebGLRenderer} */
    this.renderer = RendererBuilder.run(options?.renderer)

    /** @type {ClientData} */
    this.data = new ClientData(this)
  }

  /**
   * Returns the <canvas> element created by THREE.
   *
   * @returns {HTMLCanvasElement}
   */
  get canvasElement () {
    return this.renderer.domElement
  }

  /**
   * Feeds a message into the client.
   *
   * @param {string} command
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @returns {boolean}
   */
  feed (command, a1 = null, a2 = null, a3 = null, a4 = null, a5 = null) {
    return ClientFeed.run(this, command, a1, a2, a3, a4, a5)
  }
}
