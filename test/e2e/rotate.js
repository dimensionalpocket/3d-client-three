'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('e2e/rotate', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient({ headless: true })

    this.client.feed('add', 'point', { id: 'p1' })
    this.client.feed('add', 'point', { id: 'p2' })
    this.client.feed('add', 'point', { id: 'p3' })

    this.client.feed('rotate', 'point', 'p1', 10, null, 10)
    this.client.feed('rotate', 'point', 'p2', 1)
    this.client.feed('rotate', 'point', 'p3', null, 2, 3, 'YXZ')
    this.client.feed('rotate', 'point', 'p1', null, null, 5)

    this.point1 = this.client.data.points.get('p1')
    this.point2 = this.client.data.points.get('p2')
    this.point3 = this.client.data.points.get('p3')
  })

  it('changes the rotation of objects', function () {
    expect(this.point1.rotation.x).to.eq(10)
    expect(this.point1.rotation.y).to.eq(0)
    expect(this.point1.rotation.z).to.eq(5)
    expect(this.point2.rotation.x).to.eq(1)
    expect(this.point3.rotation.y).to.eq(2)
    expect(this.point3.rotation.z).to.eq(3)
    expect(this.point3.rotation.order).to.eq('YXZ')
  })

  it('raises an error when object does not exist', function () {
    expect(() => { this.client.feed('rotate', 'point', '0', 1) }).to.throw(/object point-0 not found in client/)
  })
})
