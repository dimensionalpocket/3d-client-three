'use strict'

export class ClientPlaySound {
  /**
   * Plays a sound in the client.
   *
   * @param {Client} client
   * @param {string} soundId
   * @param {boolean} [playing]
   * @returns {boolean}
   */
  static run (client, soundId, playing = true) {
    const sound = client.data.sounds.get(soundId)

    if (!sound) {
      throw new Error(`ClientPlaySound: Sound ${soundId} not found in client`)
    }

    sound.play(playing)

    return true
  }
}
