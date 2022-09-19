import { Audio, PositionalAudio } from 'three'
import { Sound } from './core/Sound.js'

export class ThreeSound extends Sound {
  /**
   * @param {SoundOptions} options
   */
  constructor (options) {
    super(options)

    /**
     * @type {THREE.Audio|THREE.PositionalAudio|undefined}
     */
    this.renderable = undefined
  }

  /**
   * @param {ThreeClient} client
   */
  install (client) {
    const audio = client.audio

    /**
     * @type {?THREE.AudioListener}
     */
    let output = null
    let outputVolume = 1.0

    if (this.type === 'effect') {
      output = audio.effectsOutput
      outputVolume = audio.effectsVolume
    } else if (this.type === 'voice') {
      output = audio.voiceOutput
      outputVolume = audio.voiceVolume
    } else if (this.type === 'music') {
      output = audio.musicOutput
      outputVolume = audio.musicVolume
    }

    if (output == null) return

    /**
     * @type {THREE.Audio|THREE.PositionalAudio}
     */
    let sound

    if (this.positional === true) {
      // @ts-ignore - TS barfing again, missing the guard clause
      sound = new PositionalAudio(output)
      sound.setRefDistance(this.distance)
    } else {
      // @ts-ignore - conflict with DOM lib
      sound = new Audio(output)
    }

    sound.offset = this.offset
    sound.duration = this.duration

    sound.setVolume(this.volume * outputVolume)

    this.renderable = sound

    return this.soundFile.install().then(soundFile => {
      const buffer = soundFile.buffer

      if (buffer == null) {
        throw new Error(`ThreeSound#install: failed to fetch buffer from SoundFile<${soundFile.id}>`)
      }

      sound.setBuffer(buffer)

      return this
    })
  }

  /**
   * @param {boolean} state - `true` to play, `false` to stop.
   * @returns
   */
  play (state = true) {
    console.debug('Playing sound', this.id, state)

    const sound = this.renderable

    if (sound == null) return false

    // Stop first so that it doesn't error out when
    // trying to play a sound that's already playing.
    sound.stop()

    if (state) sound.play()
  }
}
