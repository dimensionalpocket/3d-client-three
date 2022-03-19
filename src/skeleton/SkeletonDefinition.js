'use strict'

import { JointDefinition } from './JointDefinition.js'

export class SkeletonDefinition {
  /**
   * @param {SkeletonDefinitionData} options
   */
  constructor ({ id, joints }) {
    /**
     * Skeleton ID.
     *
     * @type {string|number}
     */
    this.id = id

    /**
     * Array of joint definitions.
     *
     * @type {Array<JointDefinition>}
     */
    this.joints = []

    for (var jointDefData of joints) {
      this.joints.push(new JointDefinition(jointDefData))
    }
  }

  /**
   * Returns a joint definition by ID.
   *
   * @param {id} id - ID of the joint
   * @returns {?JointDefinition}
   */
  getJointDefinition (id) {
    for (var jointDef of this.joints) {
      if (jointDef.id === id) return jointDef
    }

    return null
  }
}
