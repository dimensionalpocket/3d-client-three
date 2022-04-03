'use strict'

import { expect } from '@dimensionalpocket/development'
import { Camera, PerspectiveCamera } from 'three'
import { CameraBuilder } from '../../src/builders/CameraBuilder.js'

describe('CameraBuilder', function () {
  describe('.run', function () {
    context('with minimum valid arguments', function () {
      before(function () {
        /** @type {CameraBuilderOptions} */
        var data = { id: 'test-camera' }

        this.camera = CameraBuilder.run(data)
      })

      it('returns a THREE.Camera', function () {
        expect(this.camera).to.be.an.instanceOf(Camera)
      })

      it('sets the camera name', function () {
        expect(this.camera.name).to.eq('test-camera')
      })

      it('returns a perspective camera', function () {
        expect(this.camera).to.be.an.instanceOf(PerspectiveCamera)
      })

      it('sets default field of view', function () {
        expect(this.camera.fov).to.eq(50)
      })

      it('sets default aspect ratio', function () {
        expect(this.camera.aspect).to.eq(1)
      })

      it('sets default near distance', function () {
        expect(this.camera.near).to.eq(0.01)
      })

      it('sets default far distance', function () {
        expect(this.camera.far).to.eq(1000)
      })
    })

    context('with custom options', function () {
      it('sets field of view', function () {
        var camera = CameraBuilder.run({ id: 'test', fov: 100 })
        expect(camera.fov).to.eq(100)
      })

      it('sets aspect ratio', function () {
        var camera = CameraBuilder.run({ id: 'test', aspect: 16 / 9 })
        expect(camera.aspect).to.eq(16 / 9)
      })

      it('sets near distance', function () {
        var camera = CameraBuilder.run({ id: 'test', near: 5 })
        expect(camera.near).to.eq(5)
      })

      it('sets far distance', function () {
        var camera = CameraBuilder.run({ id: 'test', far: 20 })
        expect(camera.far).to.eq(20)
      })
    })

    context('with missing options', function () {
      it('raises an error', function () {
        // @ts-ignore
        expect(() => CameraBuilder.run()).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => CameraBuilder.run({})).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => CameraBuilder.run({ id: null })).to.throw(/ID is required/)
      })
    })
  })
})
