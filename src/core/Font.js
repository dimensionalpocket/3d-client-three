import fetch from 'cross-fetch'
import ThreeMeshUI from '../extensions/ThreeMeshUI.js'

const FETCH_OPTIONS = { method: 'get' }
const NOOP = () => {}

export class Font {
  /**
   * @param {FontOptions} options
   */
  constructor (options) {
    this.id = options.id
    this.url = options.url
    this.texture = options.texture
    this.installed = false
  }

  async install (onComplete = NOOP) {
    if (this.installed) return onComplete()

    const res = await fetch(this.url, FETCH_OPTIONS)
    const json = await res.json()
    ThreeMeshUI.FontLibrary.addFont(this.id, json, this.texture)
    this.installed = true
    onComplete()
  }
}
