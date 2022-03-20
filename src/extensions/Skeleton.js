'use strict'

import * as THREE from 'three'

export class Skeleton extends THREE.Skeleton {
  /**
   * @param {id} id - Skeleton ID.
   * @param {Array<THREE.Bone>} bones
   * @param {Array<any>} boneInverses
   */
  constructor (id, bones = [], boneInverses = []) {
    super(bones, boneInverses)

    /** @type {id} */
    this.id = id
  }
}
