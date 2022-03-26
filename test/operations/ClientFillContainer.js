'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('operations/ClientFillContainer', function () {
  fakeRendererContext()

  before(function () {
    this.sandbox = sinon.createSandbox()
    this.sandbox.stub(this.fakeContainer, 'clientWidth').value(2000)
    this.sandbox.stub(this.fakeContainer, 'clientHeight').value(2000)
    this.client = new ThreeClient()
    this.fakeContainer.appendChild(this.client.canvasElement)
  })

  after(function () {
    this.sandbox.restore()
  })

  context('when client aspect ratio is null', function () {
    before(function () {
      this.client.feed('aspect-ratio', null)
      this.client.feed('fill-container')
    })

    it('fully stretches the canvas element to fill the container', function () {
      expect(this.fakeCanvas.style.width).to.eq('2000px')
      expect(this.fakeCanvas.style.height).to.eq('2000px')
    })
  })

  context('when container aspect ratio is wider than client aspect ratio', function () {
    before(function () {
      this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1700)
      this.sandbox.stub(this.fakeContainer, 'clientHeight').value(900)
      this.client.feed('aspect-ratio', 16 / 9)
      this.client.feed('fill-container')
    })

    it('fills the height of the container', function () {
      expect(this.fakeCanvas.style.height).to.eq('900px')
    })

    it('sets the width proportinally to the client ratio', function () {
      expect(this.fakeCanvas.style.width).to.eq('1600px')
    })
  })

  context('when container aspect ratio is narrower than client aspect ratio', function () {
    before(function () {
      this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1600)
      this.sandbox.stub(this.fakeContainer, 'clientHeight').value(1000)
      this.client.feed('aspect-ratio', 16 / 9)
      this.client.feed('fill-container')
    })

    it('fills the width of the container', function () {
      expect(this.fakeCanvas.style.width).to.eq('1600px')
    })

    it('sets the height proportinally to the client ratio', function () {
      expect(this.fakeCanvas.style.height).to.eq('900px')
    })
  })
})
