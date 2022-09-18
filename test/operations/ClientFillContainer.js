'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('operations/ClientFillContainer', function () {
  fakeRendererContext()

  before(function () {
    this.sandbox = sinon.createSandbox()
    this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1234)
    this.sandbox.stub(this.fakeContainer, 'clientHeight').value(5678)
    this.client = new ThreeClient({ headless: true })
    this.fakeContainer.appendChild(this.client.canvasElement)

    /** @type {CameraBuilderOptions} */
    var cameraData = { id: 'test-camera', type: 'perspective' }

    this.client.feed('add', 'camera', cameraData)
    this.camera = this.client.data.cameras.get('test-camera')
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
      expect(this.fakeCanvas.style.width).to.eq('1234px')
      expect(this.fakeCanvas.style.height).to.eq('5678px')
    })

    it('updates the client cameras to match the container ratio', function () {
      expect(this.camera.aspect).to.eq(1234 / 5678)
    })
  })

  context('when client ratio matches the container ratio', function () {
    before(function () {
      this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1000)
      this.sandbox.stub(this.fakeContainer, 'clientHeight').value(500)
      this.client.feed('aspect-ratio', 2)
      this.client.feed('fill-container')
    })

    it('fully stretches the canvas element to fill the container', function () {
      expect(this.fakeCanvas.style.width).to.eq('1000px')
      expect(this.fakeCanvas.style.height).to.eq('500px')
    })
  })

  context('when container ratio is wider than client ratio', function () {
    before(function () {
      this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1700)
      this.sandbox.stub(this.fakeContainer, 'clientHeight').value(900)
      this.client.feed('aspect-ratio', 16 / 9)
      this.client.feed('fill-container')
    })

    it('fills the height of the container', function () {
      expect(this.fakeCanvas.style.height).to.eq('900px')
    })

    it('sets the width proportionally to the client ratio', function () {
      expect(this.fakeCanvas.style.width).to.eq('1600px')
    })
  })

  context('when container ratio is taller than client ratio', function () {
    before(function () {
      this.sandbox.stub(this.fakeContainer, 'clientWidth').value(1600)
      this.sandbox.stub(this.fakeContainer, 'clientHeight').value(1000)
      this.client.feed('aspect-ratio', 16 / 9)
      this.client.feed('fill-container')
    })

    it('fills the width of the container', function () {
      expect(this.fakeCanvas.style.width).to.eq('1600px')
    })

    it('sets the height proportionally to the client ratio', function () {
      expect(this.fakeCanvas.style.height).to.eq('900px')
    })
  })
})
