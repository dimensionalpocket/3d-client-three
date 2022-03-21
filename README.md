# @dimensionalpocket/3d-client-three

[![build](https://github.com/dimensionalpocket/3d-client-three/actions/workflows/node.js.yml/badge.svg)](https://github.com/dimensionalpocket/3d-client-three/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/dimensionalpocket/3d-client-three.svg)](https://lgtm.com/projects/g/dimensionalpocket/3d-client-three/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dimensionalpocket/3d-client-three.svg)](https://lgtm.com/projects/g/dimensionalpocket/3d-client-three/context:javascript)

THREE.js client for 3D projects developed by the studio.

### The Do's

3D clients are generally "dumb" and will do whatever they're told, if the rendering interface allows it:

* Store and manipulate 3D points in space
* Store geometries
* Store materials
* Store, display, and manipulate meshes
* Store, display, and manipulate sprites in a 3D space
* Store and play sounds that may be attached to a 3D element
* Store and manipulate lights
* Store and manipulate cameras
* Store skeletons and pose/animate them

### The Do Not's

The following features are out of scope for this project as they're not related to 3D objects:

* Store, display, and manipulate HTML code
* Manage controller input
* Manage networking
* Manage game logic

## Message System

The output of `ThreeClient` instances can be changed by `feed()`ing messages to them. Those messages handle every aspect of the rendered scene, including but not limited to, adding and removing assets, to positioning, scaling, and rotating objects, among other things.

The following code demonstrates how to render a simple stage and character, and update them.

```javascript
var client = new ThreeClient()

// A <canvas> element will be generated in client.canvasElement.
// You can then add it to your DOM.
document.getElementById('container').appendChild(client.canvasElement)

// Create a scene to hold renderables.
// Multiple scenes can be created and kept in the client's memory,
// but only one scene can be rendered at a time.
client.feed('add', 'scene', { id: 'test-scene' })

// Add a white floor.
client.feed('add', 'geometry' , { id: 'plane', ... })
client.feed('add', 'material', { id: 'grey', ... })
client.feed('add', 'mesh', { id: 'floor', g: 'plane', m: 'grey' })

// Add a camera.
client.feed('add', 'camera', { id: 'main-camera', ... })

// Attach the camera named "main-camera" to the the mesh named "floor".
client.feed('attach', 'camera', 'main-camera', 'mesh' 'floor')

// Position the camera back, then up.
client.feed('position', 'camera', 'main-camera', null, 5, -5)

// Set the camera to use for rendering.
client.feed('camera', 'main-camera')

// Add a dim white light source.
client.feed('add', 'light', { id: 'ambient-light', type: 'ambient', color: 'silver', ... })
client.feed('attach', 'light', 'ambient-light', 'mesh', 'floor')

// Add a skeleton definition.
client.feed('add', 'skeleton-definition', { id: 'human', ... })

// Add a skeleton instance from the created definition.
client.feed('add', 'skeleton', { id: 'some-skeleton', definition: 'human', ... })

// Fires a helper method called `renderVolumes()` on the skeleton to render its volumes.
client.feed('helper', 'RenderVolumes', 'some-skeleton')

// Attach skeleton to floor.
client.feed('attach', 'skeleton', 'some-skeleton', 'mesh', 'floor')

// Add a reusable pose to the client and apply it to the skeleton.
client.feed('add', 'pose', { id: 'stance', ... })
client.feed('pose', 'stance', 'some-skeleton')

// Attach the floor to the scene.
// (Only root-level renderables need to be attached to the scene.)
client.feed('attach', 'mesh', 'floor', 'scene', 'test-scene')

// Set the active scene.
client.feed('scene', 'test-scene')

// Begin rendering.
client.rendering = true
```

## Properties

* __`client.rendering`__ - set to `true` to start rendering. Defaults to `false`.

## Options for `feed()`

### `client.feed('add', type, data)`

Adds an object to memory.

`type` can be one of the following:

* `"scene"`,
* `"point"` (a point in 3D space),
* `"geometry"`, 
* `"material"`,
* `"mesh"`,
* `"light"`,
* `"camera"`,
* `"pose"`,
* `"animation"`,
* `"sound"`,
* `"skeleton-definition"`, and
* `"skeleton"`.

The `data` object __must__ have an `id` property, otherwise it will be ignored. 

IDs must be __globally unique__ among their collections:

* E.g., two geometries should not have the same ID.
* If object with the same ID already exists in a collection, it will be overwritten.

### `client.feed('delete', type, id)`

Removes the object of the given ID from the client and disposes it from memory.

### `client.feed('attach', childType, childId, parentType, parentId)`

Sets the object with `parentId` as the parent of the object with `childId`.

### `client.feed('detach', childType, childId)`

Removes a child object from its parent.

### `client.feed('show', type, id, visible)`

Sets the visibility of an object, `visible` being `true` or `false`. Default is `true`.

Setting the visibility of an object also affects its children.

### `client.feed('pose', poseId, skeletonId)`

Applies a pose to a skeleton.

### `client.feed('animate', animationId, skeletonId)`

Applies an animation to a skeleton.

If `animationId` is null and the skeleton has a paused animation, resumes it.

### `client.feed('pause', skeletonId)`

Pauses the current animation of a skeleton.

### `client.feed('position', type, id, x, y, z)`

Positions an object at the given coordinates.

Passing `null` as a value will keep the current value for that coordinate.

If object has a parent, positioning will be relative to parent.

### `client.feed('rotate', type, id, x, y, z)`

Rotates an object in Euler angles.

Values are in radians. Passing `null` as a value will keep the current value for that coordinate.

If object has a parent, rotation will be relative to parent.

### `client.feed('rotation-order', type, id, order)`

Sets the Euler rotation order of an object.

### `client.feed('quaternion', type, id, x, y, z, w)`

Rotates an object using Quaternions.

All values are __required__.

### `client.feed('scale', type, id, x, y, z)`

Scales an object up or down.

Values should be floats, where `1` represents original size, `2` double size, `0.5` half size, etc.

Passing `null` as a value will keep the current value for that coordinate.

If the object has children, all of them will be scaled together.

### `client.feed('camera', cameraId)`

Sets the current camera. If you add multiple cameras, you can use this command to switch between them.

### `client.feed('scene', sceneId)`

Sets the scene to render.

### `client.feed('look', cameraId, targetType, targetId)`

Sets a camera target onto the given object. This makes the camera "look at" the object as it moves.

Note: while a camera has a target, camera rotation is disabled. Pass `null` as the objectId to remove the target and re-enable camera rotation.

## WIP

This is a work in progress.
