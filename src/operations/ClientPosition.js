'use strict'

// TODO: validate types (cannot attach geometries or materials for instance)

export class ClientPosition {
  /**
   * Positions a object in 3D space.
   *
   * @param {ThreeClient} client
   * @param {string} objectType
   * @param {id} objectId
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [z]
   * @returns {boolean}
   */
  static run (client, objectType, objectId, x = undefined, y = undefined, z = undefined) {
    var data = client.data

    var objects = data.getCollectionByType(objectType)

    /** @type {THREE.Object3D} */
    var object = objects.get(objectId)

    if (!object) {
      throw new Error(`ClientPosition: object ${objectType}-${objectId} not found in client`)
    }

    var position = object.position

    if (x != null) position.setX(x)
    if (y != null) position.setY(y)
    if (z != null) position.setZ(z)

    return true
  }
}