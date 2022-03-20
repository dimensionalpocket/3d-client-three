'use strict'

import * as THREE from 'three'

import { expect } from '@dimensionalpocket/development'
import { SceneBuilder } from '../../src/builders/SceneBuilder.js'

describe('SceneBuilder', function () {
  describe('.run', function () {
    context('with correct arguments', function () {
      before(function () {
        /** @type {SceneBuilderOptions} */
        var data = { id: 'test-scene' }

        this.scene = SceneBuilder.run(data)
      })

      it('returns a THREE.Scene', function () {
        expect(this.scene).to.be.an.instanceOf(THREE.Scene)
      })

      it('sets the scene name', function () {
        expect(this.scene.name).to.eq('test-scene')
      })
    })

    context('with missing options', function () {
      it('raises an error', function () {
        // @ts-ignore
        expect(() => SceneBuilder.run()).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => SceneBuilder.run({})).to.throw(/ID is required/)

        // @ts-ignore
        expect(() => SceneBuilder.run({ id: null })).to.throw(/ID is required/)
      })
    })
  })
})
