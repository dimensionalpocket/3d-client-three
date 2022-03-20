'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../src/ThreeClient.js'
import { fakeRendererContext } from './shared-contexts/fake-renderer.js'

describe('ThreeClient', function () {
  fakeRendererContext()

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
