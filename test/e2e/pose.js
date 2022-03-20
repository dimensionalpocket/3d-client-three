'use strict'

// import fs from 'fs'

import * as THREE from 'three'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'

describe('e2e/posing', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient()

    /** @type {SkeletonDefinitionData} */
    var skeletonDefData = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    /** @type {SkeletonData} */
    var skeletonData = { id: 'test-skeleton', definition: 'human' }

    /** @type {PoseData} */
    var poseData = {
      id: 'test-pose',
      skeleton: 'human',
      transforms: [
        { joint: 'lKn', rotation: { x: 1 } },
        { joint: 'N', rotation: { y: 3, z: -2 } }
      ]
    }

    this.client.feed('add', 'skeleton-definition', skeletonDefData)
    this.client.feed('add', 'skeleton', skeletonData)
    this.client.feed('add', 'pose', poseData)

    this.skeleton = this.client.data.skeletons.get('test-skeleton')
  })

  it('renders bones and sets their rotations', function () {
    this.client.feed('pose', 'test-skeleton', 'test-pose')

    /** @type {THREE.Bone} */
    var knee = this.skeleton.getBoneByName('test-skeleton-lKn')

    /** @type {THREE.Bone} */
    var neck = this.skeleton.getBoneByName('test-skeleton-N')

    expect(knee.rotation.x).to.eq(1)
    expect(neck.rotation.y).to.eq(3)
    expect(neck.rotation.z).to.eq(-2)
  })
})
