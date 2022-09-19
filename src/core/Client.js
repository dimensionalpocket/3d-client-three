import { ClientData } from './ClientData.js'
import { NOOP } from '../operations/ClientGenerateRenderFunction.js'
import { ClientFeed } from '../operations/ClientFeed.js'

/**
 * The base client.
 *
 * @template {any} R - Renderer type.
 * @template {any} S - Scene type.
 * @template {any} C - Camera type.
 * @template {any} A - Audio system.
 */
export class Client {
  /**
   * @param {object} options
   * @param {R} options.renderer - Renderer instance.
   * @param {new(client: Client<R,S,C,A>) => A} options.AudioClass - Audio system class constructor.
   * @param {boolean} [options.headless]
   */
  constructor (options) {
    /** @type {ClientData} */
    this.data = new ClientData(this)

    /**
     * `true` if this client does not render anything.
     *
     * @type {boolean}
     */
    this.headless = options.headless ?? true

    /**
     * Renderer used by client.
     *
     * @type {R}
     */
    this.renderer = options.renderer

    /**
     * The current scene being rendered.
     *
     * @type {S|undefined}
     */
    this.scene = undefined

    /**
     * The current camera being used to render.
     *
     * @type {C|undefined}
     */
    this.camera = undefined

    /**
     * The audio system for this client.
     *
     * @type {A}
     */
    this.audio = new options.AudioClass(this)

    /**
     * Aspect ratio of the client, in the width/height format.
     * E.g., the float result of 16/9.
     * When undefined, will not keep an aspect ratio (will fit the container).
     *
     * @type {number|undefined}
     */
    this.aspectRatio = undefined

    /**
     * A function that is called at every requestAnimationFrame.
     * Set by ClientRendering operation.
     *
     * @type {function}
     */
    this.renderingFn = NOOP

    /**
      * `true` is a render loop is running.
      *
      * @type {boolean}
      */
    this.rendering = false

    /**
      * Current local frame. Used to play animations.
      *
      * @type {number}
      */
    this.frame = 0
  }

  /**
   * Feeds a message into the client.
   *
   * @param {string} command
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @param {any} [a6]
   * @returns {boolean}
   */
  feed (command, a1 = null, a2 = null, a3 = null, a4 = null, a5 = null, a6 = null) {
    return ClientFeed.run(this, command, a1, a2, a3, a4, a5, a6)
  }
}
