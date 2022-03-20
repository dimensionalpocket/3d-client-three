'use strict'

import { expect } from '@dimensionalpocket/development'
import { Vector3 } from '../src/Vector3.js'

describe('Vector3', function () {
  describe('constructor', function () {
    it('initializes with defaults', function () {
      var v = new Vector3()
      expect(v.x).to.eq(0)
      expect(v.y).to.eq(0)
      expect(v.z).to.eq(0)
    })

    it('initializes with partial values', function () {
      var v = new Vector3({ x: 1.5 })
      expect(v.x).to.eq(1.5)
      expect(v.y).to.eq(0)
      expect(v.z).to.eq(0)

      v = new Vector3({ y: 1.5 })
      expect(v.x).to.eq(0)
      expect(v.y).to.eq(1.5)
      expect(v.z).to.eq(0)

      v = new Vector3({ z: 1.5 })
      expect(v.x).to.eq(0)
      expect(v.y).to.eq(0)
      expect(v.z).to.eq(1.5)
    })

    it('initializes with full values', function () {
      var v = new Vector3({ x: 1, y: 2, z: 3 })
      expect(v.x).to.eq(1)
      expect(v.y).to.eq(2)
      expect(v.z).to.eq(3)
    })

    it('accepts undefined', function () {
      var v = new Vector3(undefined)
      expect(v.x).to.eq(0)
      expect(v.y).to.eq(0)
      expect(v.z).to.eq(0)
    })
  })

  describe('#x=', function () {
    it('sets x', function () {
      var vector = new Vector3()
      vector.x = 123
      expect(vector.x).to.eq(123)
    })
  })

  describe('#y=', function () {
    it('sets y', function () {
      var vector = new Vector3()
      vector.y = 456
      expect(vector.y).to.eq(456)
    })
  })

  describe('#z=', function () {
    it('sets z', function () {
      var vector = new Vector3()
      vector.z = 789
      expect(vector.z).to.eq(789)
    })
  })
})
