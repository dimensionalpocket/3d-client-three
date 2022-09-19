'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('e2e/attach', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient({ headless: true })

    this.client.feed('add', 'point', { id: 'p1' })
    this.client.feed('add', 'point', { id: 'p2' })
    this.client.feed('add', 'point', { id: 'p3' })

    // Add p2 and p3 as children of p1
    this.client.feed('attach', 'point', 'p2', 'point', 'p1')
    this.client.feed('attach', 'point', 'p3', 'point', 'p1')

    this.point1 = this.client.data.points.get('p1')
    this.point2 = this.client.data.points.get('p2')
    this.point3 = this.client.data.points.get('p3')
  })

  it('adds objects as the child of another', function () {
    expect(this.point2.parent).to.eq(this.point1)
    expect(this.point3.parent).to.eq(this.point1)
  })
})
