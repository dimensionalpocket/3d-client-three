'use strict'

import { JSDOM } from 'jsdom'

/**
 * Sets `jsdom` and `document` in the context.
 */
export function domContext ({ html = null } = {}) {
  before(function () {
    this.jsdom = new JSDOM(html || '<html><body><div id="container"></div></body></html>')
    // @ts-ignore
    this.document = this.jsdom.window.document
    this.fakeContainer = this.document.getElementById('container')
  })
}
