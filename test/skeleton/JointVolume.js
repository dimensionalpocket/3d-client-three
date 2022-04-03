'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointVolume } from '../../src/skeleton/JointVolume.js'

describe('JointVolume', function () {
  it('sets defaults', function () {
    var vol = new JointVolume()
    expect(vol.scale.x).to.eq(1)
    expect(vol.scale.y).to.eq(1)
    expect(vol.scale.z).to.eq(1)
    expect(vol.position.x).to.eq(0.0)
    expect(vol.position.y).to.eq(0.0)
    expect(vol.position.z).to.eq(0.0)
    expect(vol.color).to.eq('white')
  })

  it('sets scale.x', function () {
    var vol = new JointVolume({ scale: { x: 2 } })
    expect(vol.scale.x).to.eq(2)
  })

  it('sets scale.y', function () {
    var vol = new JointVolume({ scale: { y: 3 } })
    expect(vol.scale.y).to.eq(3)
  })

  it('sets scale.z', function () {
    var vol = new JointVolume({ scale: { z: 4 } })
    expect(vol.scale.z).to.eq(4)
  })

  it('sets position.x', function () {
    var vol = new JointVolume({ position: { x: 1 } })
    expect(vol.position.x).to.eq(1)
  })

  it('sets position.y', function () {
    var vol = new JointVolume({ position: { y: 2 } })
    expect(vol.position.y).to.eq(2)
  })

  it('sets position.z', function () {
    var vol = new JointVolume({ position: { z: 3 } })
    expect(vol.position.z).to.eq(3)
  })

  it('sets color', function () {
    var vol = new JointVolume({ color: 'red' })
    expect(vol.color).to.eq('red')
  })
})
