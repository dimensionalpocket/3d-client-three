'use strict'

import { TextureBuilder } from '../builders/TextureBuilder.js'

export class ClientAddTexture {
  /**
   * @param {ThreeClient} client
   * @param {TextureBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var texture = TextureBuilder.run(data)

    client.data.textures.set(texture.name, texture)

    return true
  }
}
