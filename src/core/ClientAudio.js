/**
 * Base audio system for clients.
 *
 * @template {any} C - Client type.
 */
export class ClientAudio {
  /**
   * Audio system for game clients.
   * Controls the volume of different channels/listeners.
   *
   * @param {C} client
   */
  constructor (client) {
    this.client = client

    this.voiceVolume = 1.0
    this.effectsVolume = 1.0
    this.musicVolume = 1.0
  }
}
