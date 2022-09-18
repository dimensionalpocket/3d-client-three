import { AudioListener } from 'three'
import { ClientAudio } from './core/ClientAudio.js'

/**
 * Audio system for Three clients.
 *
 * @extends ClientAudio<ThreeClient>
 */
export class ThreeClientAudio extends ClientAudio {
  /**
   * @param {ThreeClient} client
   */
  constructor (client) {
    super(client)

    const headless = client.headless

    // Headless = running in pure Node.
    // AudioListener requires a browser context.
    this.voiceOutput = headless ? null : new AudioListener()
    this.effectsOutput = headless ? null : new AudioListener()
    this.musicOutput = headless ? null : new AudioListener()
  }
}
