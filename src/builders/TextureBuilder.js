'use strict'

import { TextureLoader } from 'three'

export class TextureBuilder {
  /**
   * Downloads and initializes a THREE.Texture from a URL.
   *
   * @param {TextureBuilderOptions} options
   * @returns {THREE.Texture}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('TextureBuilder: id is required')
    }

    var url = options.url

    if (!url) {
      throw new Error('TextureBuilder: url is required')
    }

    var texture = (new TextureLoader()).load(url)

    texture.name = '' + id

    return texture
  }
}
