'use strict'

import { RenderVolumes } from '../helpers/RenderVolumes.js'
import { SetVolumeColor } from '../helpers/SetVolumeColor.js'

export class ClientRunHelper {
  /**
   * Sets the rotation order of an object in 3D space.
   *
   * @param {ThreeClient} client
   * @param {string} helperName
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @returns {boolean}
   */
  static run (client, helperName, a1, a2, a3, a4, a5) {
    switch (helperName) {
      case 'RenderVolumes': return RenderVolumes.run(
        client,
        a1, // skeleton ID
        a2 // helper
      )
      case 'SetVolumeColor': return SetVolumeColor.run(
        client,
        a1, // skeleton ID
        a2, // joint ID
        a3 // color
      )
    }

    throw new Error(`ClientRunHelper: helper not found ${helperName}`)
  }
}
