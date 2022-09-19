'use strict'

import { PointBuilder } from '../builders/PointBuilder.js'

export class ClientAddPoint {
  /**
   * @param {Client} client
   * @param {PointBuilderOptions} data
   * @returns {boolean}
   */
  static run (client, data) {
    var point = PointBuilder.run(data)

    client.data.points.set(point.name, point)

    return true
  }
}
