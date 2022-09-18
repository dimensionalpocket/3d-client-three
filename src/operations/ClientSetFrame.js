'use strict'

import { ClientFeed } from './ClientFeed.js'

export class ClientSetFrame {
  /**
   * Updates the local frame.
   * Optionally, processes any messages sent along the frame update.
   *
   * @param {Client} client
   * @param {number} frameNumber
   * @param {Array<Array<any>>} [messages] - array of messages to atomically update with the frame.
   * @returns {boolean}
   */
  static run (client, frameNumber, messages = undefined) {
    client.frame = frameNumber

    if (Array.isArray(messages)) {
      var message
      for (message of messages) {
        // @ts-ignore - no "tuple" type in js
        ClientFeed.run(client, ...message)
      }
    }

    return true
  }
}
