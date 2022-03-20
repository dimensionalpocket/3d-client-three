'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('e2e/rotation-order', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient()

    this.client.feed('add', 'point', { id: 'p1' })
    this.client.feed('rotation-order', 'point', 'p1', 'YXZ')

    this.point = this.client.data.points.get('p1')
  })

  it('changes the rotation order of the object', function () {
    expect(this.point.rotation.order).to.eq('YXZ')
  })

  it('raises an error when object does not exist', function () {
    expect(() => { this.client.feed('rotation-order', 'point', '0', 1) }).to.throw(/object point-0 not found in client/)
  })
})
