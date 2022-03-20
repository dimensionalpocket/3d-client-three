'use strict'

import { ClientAddPose } from './operations/ClientAddPose.js'
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

    if (type === 'skeleton-definition') {
      return ClientAddSkeletonDefinition.run(this.client, data)
    }

    throw new Error(`ClientData#add: unhandled object type ${type}`)
  }
}
