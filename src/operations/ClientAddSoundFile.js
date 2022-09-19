'use strict'

import { SoundFile } from '../SoundFile.js'

export class ClientAddSoundFile {
  /**
   * @param {Client} client
   * @param {SoundFileData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var file = new SoundFile({ id: data.id, url: data.url })

    file.install()

    client.data.soundFiles.set(file.id, file)

    return true
  }
}
