'use strict'

export class Vector3 extends Float64Array {
  /**
   * @param {Vector3Data} opts
   */
  constructor ({ x = 0, y = 0, z = 0 } = {}) {
    super(3)

    this[0] = x
    this[1] = y
    this[2] = z
  }

  set x (value) { this[0] = value }
  set y (value) { this[1] = value }
  set z (value) { this[2] = value }

  get x () { return this[0] }
  get y () { return this[1] }
  get z () { return this[2] }
}
