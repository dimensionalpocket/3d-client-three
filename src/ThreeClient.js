'use strict'

import { RendererBuilder } from './builders/RendererBuilder.js'
import { ThreeClientAudio } from './ThreeClientAudio.js'
import { Client } from './core/Client.js'

/**
 * @extends Client<THREE.WebGLRenderer,THREE.Scene,THREE.Camera,ThreeClientAudio>
 */
export class ThreeClient extends Client {
  /**
   * @param {?ThreeClientOptions} options
   */
  constructor (options = null) {
    super({
      headless: options?.headless ?? false,
      renderer: RendererBuilder.run(options?.renderer),

      // @ts-ignore
      AudioClass: ThreeClientAudio
    })
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
