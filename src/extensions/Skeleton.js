'use strict'

import * as THREE from 'three'

export class Skeleton extends THREE.Skeleton {
  /**
   * @param {Array<THREE.Bone>} bones
   * @param {Array<any>} boneInverses
   */
  constructor (bones = [], boneInverses = []) {
    super(bones, boneInverses)

    /** @type {id|undefined} */
    this.id = undefined
  }
}
