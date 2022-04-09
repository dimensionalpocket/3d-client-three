'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointDefinition } from '../../src/skeleton/JointDefinition.js'
import { JointVolume } from '../../src/skeleton/JointVolume.js'

describe('JointDefinition', function () {
  it('sets defaults', function () {
    var def = new JointDefinition({ id: 'test' })
    expect(def.parent).to.eq(undefined)
    expect(def.position.x).to.eq(0.0)
    expect(def.position.y).to.eq(0.0)
    expect(def.position.z).to.eq(0.0)
    expect(def.limits.xMin).to.eq(-Infinity)
    expect(def.limits.xMax).to.eq(Infinity)
    expect(def.limits.yMin).to.eq(-Infinity)
    expect(def.limits.yMax).to.eq(Infinity)
    expect(def.limits.zMin).to.eq(-Infinity)
    expect(def.limits.zMax).to.eq(Infinity)
    expect(def.rotationOrder).to.eq('XZY')
    expect(def.axisNameX).to.eq('Front/Back')
    expect(def.axisNameY).to.eq('Twist')
    expect(def.axisNameZ).to.eq('Side')
    expect(def.volume).to.eq(undefined)
  })

  it('sets ID', function () {
    var def = new JointDefinition({ id: 'test' })
    expect(def.id).to.eq('test')
  })

  it('sets parent', function () {
    var def = new JointDefinition({ id: 'test', parent: 'parent' })
    expect(def.parent).to.eq('parent')
  })

  it('sets rotationOrder', function () {
    var def = new JointDefinition({ id: 'test', rotationOrder: 'XYZ' })
    expect(def.rotationOrder).to.eq('XYZ')
  })

  it('sets a volume if given', function () {
    var volume = { scale: { x: 10 } }
    var def = new JointDefinition({ id: 'test', volume })
    expect(def.volume).to.be.an.instanceOf(JointVolume)
    expect(def.volume?.scale.x).to.eq(10)
  })

  context('position', function () {
    it('sets zero as defaults', function () {
      var def = new JointDefinition({ id: 'test' })
      expect(def.position.x).to.eq(0)
      expect(def.position.y).to.eq(0)
      expect(def.position.z).to.eq(0)
    })

    it('sets position.x', function () {
      var def = new JointDefinition({ id: 'test', position: { x: 1 } })
      expect(def.position.x).to.eq(1)
      expect(def.position.y).to.eq(0)
      expect(def.position.z).to.eq(0)
    })

    it('sets position.y', function () {
      var def = new JointDefinition({ id: 'test', position: { y: 2 } })
      expect(def.position.y).to.eq(2)
      expect(def.position.x).to.eq(0)
      expect(def.position.z).to.eq(0)
    })

    it('sets position.z', function () {
      var def = new JointDefinition({ id: 'test', position: { z: 3 } })
      expect(def.position.z).to.eq(3)
      expect(def.position.x).to.eq(0)
      expect(def.position.y).to.eq(0)
    })
  })

  context('rotation limits', function () {
    it('sets Infinity as defaults', function () {
      var def = new JointDefinition({ id: 'test' })
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.xMin', function () {
      var def = new JointDefinition({ id: 'test', limits: { xMin: -1 } })
      expect(def.limits.xMin).to.eq(-1)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.yMin', function () {
      var def = new JointDefinition({ id: 'test', limits: { yMin: -2 } })
      expect(def.limits.yMin).to.eq(-2)
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.zMin', function () {
      var def = new JointDefinition({ id: 'test', limits: { zMin: -3 } })
      expect(def.limits.zMin).to.eq(-3)
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.xMax', function () {
      var def = new JointDefinition({ id: 'test', limits: { xMax: 1 } })
      expect(def.limits.xMax).to.eq(1)
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.yMax', function () {
      var def = new JointDefinition({ id: 'test', limits: { yMax: 2 } })
      expect(def.limits.yMax).to.eq(2)
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.zMax).to.eq(Infinity)
    })

    it('sets limits.zMax', function () {
      var def = new JointDefinition({ id: 'test', limits: { zMax: 3 } })
      expect(def.limits.zMax).to.eq(3)
      expect(def.limits.xMin).to.eq(-Infinity)
      expect(def.limits.yMin).to.eq(-Infinity)
      expect(def.limits.zMin).to.eq(-Infinity)
      expect(def.limits.xMax).to.eq(Infinity)
      expect(def.limits.yMax).to.eq(Infinity)
    })
  })
})
