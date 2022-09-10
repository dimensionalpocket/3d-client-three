'use strict'

import { TextBuilder } from '../builders/TextBuilder.js'

export class ClientAddText {
  /**
   * @param {ThreeClient} client
   * @param {TextBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var text = TextBuilder.run(data)

    // @ts-ignore text.name
    client.data.texts.set(text.name, text)

    return true
  }
}
