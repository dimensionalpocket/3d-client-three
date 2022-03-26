'use strict'

export class ClientFillContainer {
  /**
   * Resizes the <canvas> element to fit its container,
   * respecting the aspect ratio of the client (if any).
   *
   * @param {ThreeClient} client
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

    // Some math for reference:
    //   ratio = width / height
    //   width = height * ratio
    //   height = width / ratio

    if (aspect == null || containerAspect === aspect) {
      // Client has no aspect, or container aspect matches client aspect.
      // Full stretch canvas to the container, without gaps.
      renderer.setSize(containerWidth, containerHeight)
    } else if (containerAspect > aspect) {
      // Container is wider than the client's aspect ratio.
      // Canvas should fill the full height of the container,
      // leaving gaps at the sides.
      renderer.setSize(containerHeight * aspect, containerHeight)
    } else {
      // Container is narrower than the client's aspect ratio.
      // Canvas should fill the full width of the container,
      // leaving gaps at top and bottom.
      renderer.setSize(containerWidth, containerWidth / aspect)
    }

    return true
  }
}
