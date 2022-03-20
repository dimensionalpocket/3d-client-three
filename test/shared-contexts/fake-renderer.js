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
    this.fakeCanvas = this.document.createElement('canvas')
    this.fakeRenderer = { domElement: this.fakeCanvas }
    sinon.stub(RendererBuilder, 'run').returns(this.fakeRenderer)
  })

  after(function () {
    // @ts-ignore
    RendererBuilder.run.restore()
  })
}
