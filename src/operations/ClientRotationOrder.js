'use strict'

// TODO: validate types (cannot rotate geometries or materials for instance)

export class ClientRotationOrder {
  /**
   * Sets the rotation order of an object in 3D space.
   *
   * @param {ThreeClient} client
   * @param {string} objectType
   * @param {id} objectId
   * @param {string} order
   * @returns {boolean}
   */
  static run (client, objectType, objectId, order) {
    var data = client.data

    var objects = data.getCollectionByType(objectType)

    /** @type {THREE.Object3D} */
    var object = objects.get(objectId)

    if (!object) {
      throw new Error(`ClientRotationOrder: object ${objectType}-${objectId} not found in client`)
    }

    object.rotation.order = order

    return true
  }
}
