'use strict'

import { sinon } from '@dimensionalpocket/development'
import { RendererBuilder } from '../../src/builders/RendererBuilder.js'
import { domContext } from './jsdom.js'

/**
 * Sets `fakeRenderer` and `fakeCanvas` in the context.
 */
export function fakeRendererContext () {
  domContext()

  before(function () {
    // @ts-ignore
    this.fakeCanvas = this.document.createElement('canvas')

    this.fakeRenderer = {
      domElement: this.fakeCanvas,
      setSize: (/** @type {number} */ w, /** @type {number} */ h) => {
        this.fakeCanvas.style.width = '' + w + 'px'
        this.fakeCanvas.style.height = '' + h + 'px'
      },
      compile: (/** @type {THREE.Scene} */ _scene, /** @type {THREE.Camera} */ _camera) => {
        // NOOP
      },
      render: (/** @type {THREE.Scene} */ _scene, /** @type {THREE.Camera} */ _camera) => {
        // NOOP
      }
    }
    sinon.stub(RendererBuilder, 'run').returns(this.fakeRenderer)
  })

  after(function () {
    // @ts-ignore
    RendererBuilder.run.restore()
  })
}
