// 'use strict'

// // TODO: validate types (cannot rotate geometries or materials for instance)

// export class ClientRotationIncrement {
//   /**
//    * Increments the rotation a object in 3D space.
//    *
//    * @param {ThreeClient} client
//    * @param {string} objectType
//    * @param {id} objectId
//    * @param {number} x
//    * @param {number} y
//    * @param {number} z
//    * @returns {boolean}
//    */
//   static run (client, objectType, objectId, x = 0, y = 0, z = 0) {
//     var data = client.data

//     var objects = data.getCollectionByType(objectType)

//     /** @type {THREE.Object3D} */
//     var object = objects.get(objectId)

//     if (!object) {
//       throw new Error(`ClientRotationIncrement: object ${objectType}-${objectId} not found in client`)
//     }

//     var rotation = object.rotation

//     if (x > 0) rotation.x += x
//     if (y > 0) rotation.y += y
//     if (z > 0) rotation.z += z

//     return true
//   }
// }
