'use strict'

// Fallback for Node
function raf (/** @type {function} */ f) {
  setImmediate(() => f(Date.now()))
}

// @ts-ignore
if (!global.requestAnimationFrame) global.requestAnimationFrame = raf

export default raf
