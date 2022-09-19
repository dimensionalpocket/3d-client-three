'use strict'

import { Font } from '../Font.js'

export class ClientAddFont {
  /**
   * @param {Client} client
   * @param {FontData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var texture = client.data.textures.get(data.textureId)

    if (!texture) {
      throw new Error(`ClientAddFont: texture not found on client: ${data.textureId}`)
    }

    var font = new Font({
      id: data.id,
      url: data.url,
      texture: texture
    })

    font.install()

    client.data.fonts.set(font.id, font)

    return true
  }
}
