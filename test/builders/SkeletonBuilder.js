'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../../src/ThreeClient.js'
import { Skeleton } from '../../src/extensions/Skeleton.js'
import { SkeletonBuilder } from '../../src/builders/SkeletonBuilder.js'
import { fakeRendererContext } from '../shared-contexts/fake-renderer.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('SkeletonBuilder', function () {
  fakeRendererContext()

  before(function () {
    /** @type {SkeletonDefinitionData} */
    var definition = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    this.definition = definition
  })

  describe('.run', function () {
    context('with valid arguments', function () {
      before(function () {
        this.client = new ThreeClient()
        this.client.feed('add', 'skeleton-definition', this.definition)

        /** @type {SkeletonData} */
        var data = { id: 'test-human', definition: 'human' }

        this.data = data
        this.skeleton = SkeletonBuilder.run({ client: this.client, data: this.data })
      })

      it('returns a Skeleton', function () {
        expect(this.skeleton).to.be.an.instanceOf(Skeleton)
      })

      it('sets the skeleton ID', function () {
        expect(this.skeleton.id).to.eq(this.data.id)
      })

      it('creates as many bones as there are joints in the definition', function () {
        var joints = this.client.data.skeletonDefinitions.get('human').joints
        expect(this.skeleton.bones.length).to.eq(joints.length)
      })

      it('defines the bone hierarchy', function () {
        var spineLower = this.skeleton.getBoneByName('test-human-U')
        var spineUpper = this.skeleton.getBoneByName('test-human-S')
        expect(spineUpper.parent).to.eq(spineLower)
      })
    })
  })
})
