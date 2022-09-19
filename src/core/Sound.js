export class Sound {
  /**
   * @param {SoundOptions} options
   */
  constructor (options) {
    /**
     * @type {id}
     */
    this.id = options.id

    /**
     * @type {SoundType}
     */
    this.type = options.type ?? 'effect'

    /**
     * @type {SoundFile}
     */
    this.soundFile = options.soundFile

    /**
     * `true` if the sound should be based on 3D location.
     *
     * @type {boolean}
     */
    this.positional = options.positional ?? false

    /**
     * The distance in 3D units before the sound starts to fade.
     * Refers to refDistance in WebAudio.
     *
     * @type {number}
     */
    this.distance = options.distance ?? 2

    /**
     * The frame where the audio should start playing in the sound file.
     *
     * @type {number}
     */
    this.offset = options.offset ?? 0

    /**
     * The duration in frames to play, after the offset.
     * Plays to the end if undefined.
     *
     * @type {number|undefined}
     */
    this.duration = options.duration ?? undefined

    /**
     * The max volume to play this sound.
     *
     * @type {number}
     */
    this.volume = options.volume ?? 1.0
  }

  /**
   * Should be implemented in subclasses.
   *
   * @param {boolean} _state
   * @abstract
   */
  play (_state) {
    // no-op
  }

  /**
   * Should be implemented in subclasses.
   *
   * @param {Client} _client
   * @abstract
   */
  install (_client) {
    // no-op
  }
}
