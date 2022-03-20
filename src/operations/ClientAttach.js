'use strict'

// TODO: validate types (cannot attach geometries or materials for instance)

export class ClientAttach {
  /**
   * Attaches a child object to a parent object.
   *
   * @param {ThreeClient} client
   * @param {string} childType
   * @param {id} childId
   * @param {string} parentType
   * @param {id} parentId
   * @returns {boolean}
   */
  static run (client, childType, childId, parentType, parentId) {
    var data = client.data

    var children = data.getCollectionByType(childType)
    var child = children.get(childId)

    if (!child) {
      throw new Error(`ClientAttach: child (${childId}) not found in client`)
    }

    var parents = data.getCollectionByType(parentType)
    var parent = parents.get(parentId)

    if (!parent) {
      throw new Error(`ClientAttach: parent (${parentId}) not found in client`)
    }

    child.parent = parent

    return true
  }
}
