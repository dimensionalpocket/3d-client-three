'use strict'

// Fallback for Node
function raf (/** @type {function} */ f) {
  setImmediate(() => f(Date.now()))
}

/* global self */
const root =
  (typeof self === 'object' && self.self === self)
    ? self
    : (typeof global === 'object' && global.global === global)
        ? global
        : {}

// @ts-ignore
export default root.requestAnimationFrame || raf
