'use strict'

export class ClientFeed {
  /**
   * @param {ThreeClient} client
   * @param {string} command
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @returns {boolean}
   */
  static run (client, command, a1 = null, a2 = null, a3 = null, a4 = null, a5 = null) {
    // if (command === 'T') {
    //   return ClientPose.run(client, message[1], message[2])
    // }

    if (command === 'add') {
      return client.data.add(a1, a2)
    }

    console.error('Client#feed: unhandled command', a1, a2, a3, a4, a5)
    return false
  }
}
