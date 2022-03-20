'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointVolume } from '../../src/skeleton/JointVolume.js'

describe('JointVolume', function () {
  it('sets defaults', function () {
    var vol = new JointVolume()
    expect(vol.scale.x).to.eq(1)
    expect(vol.scale.y).to.eq(1)
    expect(vol.scale.z).to.eq(1)
    expect(vol.translation.x).to.eq(0.0)
    expect(vol.translation.y).to.eq(0.0)
    expect(vol.translation.z).to.eq(0.0)
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

  it('sets translation.x', function () {
    var vol = new JointVolume({ translation: { x: 1 } })
    expect(vol.translation.x).to.eq(1)
  })

  it('sets translation.y', function () {
    var vol = new JointVolume({ translation: { y: 2 } })
    expect(vol.translation.y).to.eq(2)
  })

  it('sets translation.z', function () {
    var vol = new JointVolume({ translation: { z: 3 } })
    expect(vol.translation.z).to.eq(3)
  })

  it('sets color', function () {
    var vol = new JointVolume({ color: 'red' })
    expect(vol.color).to.eq('red')
  })
})
