'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { RendererBuilder } from '../src/builders/RendererBuilder.js'
import { ThreeClient } from '../src/ThreeClient.js'
import { domContext } from './shared-contexts/jsdom.js'

describe('ThreeClient', function () {
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

  describe('constructor', function () {
    it('initializes the renderer', function () {
      var client = new ThreeClient()
      expect(client.renderer).to.eq(this.fakeRenderer)
    })
  })

  describe('#canvasElement', function () {
    it('returns the domElement from the renderer', function () {
      var client = new ThreeClient()
      expect(client.canvasElement).to.eq(this.fakeCanvas)
    })
  })
})
