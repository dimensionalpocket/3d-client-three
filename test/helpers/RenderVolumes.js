'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('helpers/RenderVolumes', function () {
  fakeRendererContext()

  before(function () {
    this.client = new ThreeClient()

    /** @type {SkeletonDefinitionData} */
    var skeletonDefData = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    /** @type {SkeletonData} */
    var skeletonData = { id: 'test-skeleton', definition: 'human' }

    this.client.feed('add', 'skeleton-definition', skeletonDefData)
    this.client.feed('add', 'skeleton', skeletonData)
    this.client.feed('helper', 'RenderVolumes', 'test-skeleton')

    this.skeleton = this.client.data.skeletons.get('test-skeleton')

    this.kneeBone = this.skeleton.getBoneByName('test-skeleton-kneeL')
    this.kneeVolumeMesh = this.kneeBone.children.find((/** @type {THREE.Bone} */ b) => b.name === this.kneeBone.name + '-volume')
    this.kneeVolume = this.skeleton.definition.getJointDefinition('kneeL').volume
  })

  it('attaches volume meshes to joints', function () {
    expect(this.kneeVolumeMesh).to.exist
    expect(this.kneeVolumeMesh.position.x).to.eq(this.kneeVolume.position.x)
    expect(this.kneeVolumeMesh.position.y).to.eq(this.kneeVolume.position.y)
    expect(this.kneeVolumeMesh.position.z).to.eq(this.kneeVolume.position.z)
    expect(this.kneeVolumeMesh.scale.x).to.eq(this.kneeVolume.scale.x)
    expect(this.kneeVolumeMesh.scale.y).to.eq(this.kneeVolume.scale.y)
    expect(this.kneeVolumeMesh.scale.z).to.eq(this.kneeVolume.scale.z)
    expect(this.kneeVolumeMesh.material.color.getHexString()).to.eq('00ffff') // cyan
  })
})
