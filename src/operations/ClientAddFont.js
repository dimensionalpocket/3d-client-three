'use strict'

import { Font } from '../Font.js'

export class ClientAddFont {
  /**
   * @param {ThreeClient} client
   * @param {FontOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var font = new Font(data)

    font.install()

    client.data.fonts.set(font.id, font)

    return true
  }
}
