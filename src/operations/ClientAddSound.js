'use strict'

import { ThreeSound } from '../ThreeSound.js'

export class ClientAddSound {
  /**
   * @param {ThreeClient} client
   * @param {SoundData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var soundFile = client.data.soundFiles.get(data.soundFileId)

    if (!soundFile) {
      throw new Error(`ClientAddSound: soundFile not found on client: ${data.soundFileId}`)
    }

    var sound = new ThreeSound({
      id: data.id,
      type: data.type,
      soundFile: soundFile,
      positional: data.positional,
      distance: data.distance,
      offset: data.offset,
      duration: data.duration,
      volume: data.volume
    })

    sound.install(client)

    client.data.sounds.set(sound.id, sound)

    return true
  }
}
