'use strict'

import { ClientUpdateCameraRatios } from './ClientUpdateCameraRatios.js'

export class ClientFillContainer {
  /**
   * Resizes the <canvas> element to fit its container,
   * respecting the client's aspect ratio (if defined).
   *
   * @param {ThreeClient} client
   * @returns {boolean}
   */
  static run (client) {
    var canvas = client.canvasElement

    if (!canvas) {
      console.error('ClientFillContainer: no canvas element')
      return false
    }

    var container = canvas.parentElement
    if (!container) {
      console.error('ClientFillContainer: no container element')
      return false
    }

    var renderer = client.renderer
    var aspect = client.aspectRatio
    var containerWidth = container.clientWidth
    var containerHeight = container.clientHeight
    var containerAspect = containerWidth / containerHeight

    // Relevant math:
    //   ratio = width / height
    //   width = height * ratio
    //   height = width / ratio

    if (aspect == null) {
      // Client has no aspect ratio. Apply a full stretch.
      renderer.setSize(containerWidth, containerHeight)
      // With varying aspect ratios, cameras need to be updated.
      ClientUpdateCameraRatios.run(client, containerAspect)
    } else if (containerAspect === aspect) {
      // Full stretch canvas to the container, without gaps.
      renderer.setSize(containerWidth, containerHeight)
    } else if (containerAspect > aspect) {
      // Container is wider than the client's ratio.
      // Canvas should fill the full height of the container,
      // leaving gaps at the sides.
      renderer.setSize(containerHeight * aspect, containerHeight)
    } else {
      // Container is taller than the client's ratio.
      // Canvas should fill the full width of the container,
      // leaving gaps at top and bottom.
      renderer.setSize(containerWidth, containerWidth / aspect)
    }

    return true
  }
}
