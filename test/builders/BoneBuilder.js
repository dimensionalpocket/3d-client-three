'use strict'

import { expect } from '@dimensionalpocket/development'
import { Bone } from 'three'
import { BoneBuilder } from '../../src/builders/BoneBuilder.js'
import { JointDefinition } from '../../src/skeleton/JointDefinition.js'

describe('BoneBuilder', function () {
  describe('.run', function () {
    before(function () {
      this.definition = new JointDefinition({ id: 'test-joint', position: { x: 1, y: 2, z: 3 }, rotationOrder: 'YXZ' })
    })

    context('with valid arguments', function () {
      before(function () {
        this.bone = BoneBuilder.run(this.definition, 'test-skeleton')
      })

      it('returns a THREE.Bone', function () {
        expect(this.bone).to.be.an.instanceOf(Bone)
      })

      it('includes the skeleton ID in the bone name', function () {
        expect(this.bone.name).to.eq('test-skeleton-test-joint')
      })

      it('sets the Bone positions', function () {
        var position = this.bone.position
        expect(position.x).to.eq(1)
        expect(position.y).to.eq(2)
        expect(position.z).to.eq(3)
      })

      it('sets the rotation order', function () {
        expect(this.bone.rotation.order).to.eq('YXZ')
      })
    })

    context('without skeletonId', function () {
      it('raises an error', function () {
        // @ts-ignore
        expect(() => { BoneBuilder.run(this.definition, null) }).to.throw(/skeleton ID is required/)
      })
    })

    context('without jointDefinition', function () {
      it('raises an error', function () {
        // @ts-ignore
        expect(() => { BoneBuilder.run(null, 'test-skeleton') }).to.throw(/joint definition is required/)
      })
    })
  })
})
