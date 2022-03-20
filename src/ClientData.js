'use strict'

import { ClientAddLight } from './operations/ClientAddLight.js'
import { ClientAddPose } from './operations/ClientAddPose.js'
import { ClientAddScene } from './operations/ClientAddScene.js'
import { ClientAddSkeleton } from './operations/ClientAddSkeleton.js'
import { ClientAddSkeletonDefinition } from './operations/ClientAddSkeletonDefinition.js'

export class ClientData {
  /**
   * @param {ThreeClient} client
   */
  constructor (client) {
    /** @type {ThreeClient} */
    this.client = client

    /** @type {Map<id,SkeletonDefinition>} */
    this.skeletonDefinitions = new Map()

    /** @type {Map<id,Skeleton>} */
    this.skeletons = new Map()

    /** @type {Map<id,Pose>} */
    this.poses = new Map()

    /** @type {Map<id,THREE.Scene>} */
    this.scenes = new Map()

    /** @type {Map<id,THREE.Camera>} */
    this.cameras = new Map()

    /** @type {Map<id,THREE.Light>} */
    this.lights = new Map()
  }

  /**
   * @param {string} type
   * @param {any} data
   * @returns {boolean}
   */
  add (type, data) {
    if (type === 'skeleton') {
      return ClientAddSkeleton.run(this.client, data)
    }

    if (type === 'pose') {
      return ClientAddPose.run(this.client, data)
    }

    if (type === 'light') {
      return ClientAddLight.run(this.client, data)
    }

    if (type === 'skeleton-definition') {
      return ClientAddSkeletonDefinition.run(this.client, data)
    }

    if (type === 'scene') {
      return ClientAddScene.run(this.client, data)
    }

    throw new Error(`ClientData#add: unhandled object type ${type}`)
  }
}
