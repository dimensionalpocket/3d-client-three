'use strict'

import { Vector3 } from '../Vector3.js'

/**
 * A JointVolume contains information to render a box from a joint.
 * They are primarily used as a helper to visualize skeleton models.
 * JointVolume instances are stored inside long-lived JointDefinitions.
 */
export class JointVolume {
  /**
   * @param {JointVolumeData} [options]
   */
  constructor ({ scale, position, color, outline, castShadows, receiveShadows } = {}) {
    /**
     * @type {Vector3}
     */
    this.scale = new Vector3(scale)

    if (this.scale.x <= 0) this.scale.x = 1
    if (this.scale.y <= 0) this.scale.y = 1
    if (this.scale.z <= 0) this.scale.z = 1

    /**
     * @type {Vector3}
     */
    this.position = new Vector3(position)

    /**
     * Color of the rendered volume.
     *
     * @type {string}
     */
    this.color = color || 'white'

    /**
     * `true` if the rendered volume renders an outline.
     *
     * @type {boolean}
     */
    this.outline = (outline != null) ? outline : true

    /**
     * @type {boolean}
     */
    this.castShadows = (castShadows != null) ? castShadows : true

    /**
     * @type {boolean}
     */
    this.receiveShadows = (receiveShadows != null) ? receiveShadows : true
  }
}
