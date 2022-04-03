'use strict'

import { Skeleton as ThreeSkeleton } from 'three'

export class Skeleton extends ThreeSkeleton {
  /**
   * @param {id} id - Skeleton ID.
   * @param {SkeletonDefinition} definition
   * @param {Array<THREE.Bone>} bones
   * @param {Array<any>} boneInverses
   */
  constructor (id, definition, bones = [], boneInverses = []) {
    super(bones, boneInverses)

    /** @type {id} */
    this.id = id

    /** @type {SkeletonDefinition} */
    this.definition = definition
  }
}
