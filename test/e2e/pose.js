'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('e2e/posing', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient({ headless: true })

    /** @type {SkeletonDefinitionData} */
    var skeletonDefData = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    /** @type {SkeletonData} */
    var skeletonData = { id: 'test-skeleton', definition: 'human' }

    /** @type {PoseData} */
    var poseData = {
      id: 'test-pose',
      skeleton: 'human',
      transforms: [
        { joint: 'rootC', position: { y: 2 } },
        { joint: 'kneeL', rotation: { x: 1 } },
        { joint: 'neck', rotation: { y: 3, z: -2 } }
      ]
    }

    this.client.feed('add', 'skeleton-definition', skeletonDefData)
    this.client.feed('add', 'skeleton', skeletonData)
    this.client.feed('add', 'pose', poseData)

    this.skeleton = this.client.data.skeletons.get('test-skeleton')
  })

  it('sets bone rotations and positions', function () {
    this.client.feed('pose', 'test-skeleton', 'test-pose')

    /** @type {THREE.Bone} */
    var rootC = this.skeleton.getBoneByName('test-skeleton-rootC')

    /** @type {THREE.Bone} */
    var knee = this.skeleton.getBoneByName('test-skeleton-kneeL')

    /** @type {THREE.Bone} */
    var neck = this.skeleton.getBoneByName('test-skeleton-neck')

    expect(rootC.position.y).to.eq(2)
    expect(knee.rotation.x).to.eq(1)
    expect(neck.rotation.y).to.eq(3)
    expect(neck.rotation.z).to.eq(-2)
  })
})
