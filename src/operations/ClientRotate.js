'use strict'

// TODO: validate types (cannot rotate geometries or materials for instance)

export class ClientRotate {
  /**
   * Rotates a object in 3D space.
   *
   * @param {ThreeClient} client
   * @param {string} objectType
   * @param {id} objectId
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [z]
   * @param {string} [order]
   * @returns {boolean}
   */
  static run (client, objectType, objectId, x = undefined, y = undefined, z = undefined, order = undefined) {
    var data = client.data

    var objects = data.getCollectionByType(objectType)

    /** @type {THREE.Object3D} */
    var object = objects.get(objectId)

    if (!object) {
      throw new Error(`ClientRotate: object ${objectType}-${objectId} not found in client`)
    }

    var rotation
    if (objectType === 'skeleton') {
      // @ts-ignore
      rotation = object.bones[0].rotation
    } else {
      rotation = object.rotation
    }

    rotation.set(
      x != null ? x : rotation.x,
      y != null ? y : rotation.y,
      z != null ? z : rotation.z,
      order != null ? order : rotation.order
    )

    return true
  }
}
