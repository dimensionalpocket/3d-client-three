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
* Store, display, and manipulate text in a 3D space
* Store and play sounds that may be attached to a 3D element
* Store and manipulate lights
* Store and manipulate cameras
* Store skeletons and pose them

### The Do Not's

The following features are out of scope for this project as they're not related to 3D objects:

* Store, display, and manipulate HTML code
* Manage controller input
* Manage networking
* Manage business logic

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
client.feed('add', 'mesh', { id: 'floor', geometry: 'plane', material: 'grey' })

// Add a camera.
client.feed('add', 'camera', { id: 'main-camera', ... })

// Attach the camera named "main-camera" to the the mesh named "floor".
client.feed('attach', 'camera', 'main-camera', 'mesh' 'floor')

// Position the camera back, then up.
client.feed('position', 'camera', 'main-camera', null, 5, -5)

// Add a dim white light source and attach it to the scene.
client.feed('add', 'light', { id: 'ambient-light', type: 'ambient', color: 'silver', ... })
client.feed('attach', 'light', 'ambient-light', 'scene', 'test-scene')

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

// Set the camera to use for rendering.
client.feed('camera', 'main-camera')

// Begin rendering.
client.feed('rendering', true)
```

## Options for `feed()`

The circles represent feature state:

* :red_circle: Not implemented
* :yellow_circle: Partially implemented
* :green_circle: Fully implemented
* :purple_circle: Fully tested

### :yellow_circle: `client.feed('add', type, data)`

Adds an object to the client's memory.

`type` can be one of the following:

* :green_circle: `"scene"`,
* :green_circle: `"point"` (a point in 3D space),
* :red_circle: `"geometry"`, 
* :red_circle: `"material"`,
* :yellow_circle: `"texture"`,
* :red_circle: `"mesh"`,
* :yellow_circle: `"font"`,
* :yellow_circle: `"text"`,
* :green_circle: `"light"`,
* :yellow_circle: `"camera"`,
* :green_circle: `"pose"`,
* :red_circle: `"animation"`,
* :red_circle: `"sound"`,
* :green_circle: `"skeleton-definition"`, and
* :green_circle: `"skeleton"`.

The `data` object __must__ have an `id` property, otherwise it will be ignored. 

IDs must be __unique__ among their collections:

* E.g., two geometries should not have the same ID.
* If object with the same ID already exists in a collection, it will be overwritten.

### :red_circle: `client.feed('delete', type, id)`

Removes the object of the given ID from the client and disposes it from memory.

### :green_circle: `client.feed('attach', childType, childId, parentType, parentId)`

Sets the object with `parentId` as the parent of the object with `childId`.

### :yellow_circle: `client.feed('detach', childType, childId)`

Removes the parent of a child object.

### :red_circle: `client.feed('show', type, id, visible)`

Sets the visibility of an object, `visible` being `true` or `false`. Default is `true`.

Setting the visibility of an object also affects its children.

### :yellow_circle: `client.feed('pose', poseId, skeletonId)`

Applies a pose to a skeleton.

### :red_circle: `client.feed('animate', animationId, skeletonId)`

Applies an animation to a skeleton.

If `animationId` is null and the skeleton has a paused animation, resumes it.

### :red_circle: `client.feed('pause', skeletonId)`

Pauses the current animation of a skeleton.

### :green_circle: `client.feed('position', type, id, x, y, z)`

Positions an object at the given coordinates.

Passing `null` as a value will keep the current value for that coordinate.

If object has a parent, positioning will be relative to parent.

### :green_circle: `client.feed('rotate', type, id, x, y, z)`

Rotates an object in Euler angles.

Values are in radians. Passing `null` as a value will keep the current value for that coordinate.

If object has a parent, rotation will be relative to parent.

### :green_circle: `client.feed('rotation-order', type, id, order)`

Sets the Euler rotation order of an object.

### :red_circle: `client.feed('quaternion', type, id, x, y, z, w)`

Rotates an object using Quaternions.

All values are __required__.

### :yellow_circle: `client.feed('scale', type, id, x, y, z)`

Scales an object up or down.

Values should be floats, where `1` represents original size, `2` double size, `0.5` half size, etc.

Passing `null` as a value will keep the current value for that coordinate.

If the object has children, all of them will be scaled together.

### :yellow_circle: `client.feed('text', textContentId, text)`

Sets the text content of an existing text object.

Note: the ID refers to the text _content_, not the text _block_. A block can have multiple text contents, and each content has its own ID (the ID of the block **plus the suffix** given during text creation).

### :green_circle: `client.feed('camera', cameraId)`

Sets the current camera. If you have multiple cameras, you can use this command to switch between them.

### :green_circle: `client.feed('scene', sceneId)`

Sets the scene to render. If you have multiple scenes, you can use this command to switch between them.

### :red_circle: `client.feed('target', sourceType, sourceId, targetType, targetId)`

Sets the target of a source (light or camera). This makes the source "look at" the object as it moves.

Note: while a source has a target, source rotation is disabled. Pass `null` as the `targetId` to remove the target and re-enable rotation.

### :green_circle: `client.feed('aspect-ratio', number)`

Sets the renderer's aspect ratio in width/height format (e.g., the number result of `16/9`). Default is `1` (square).

This setting also affects cameras.

### :green_circle: `client.feed('fill-container')`

Resizes the `<canvas>` element to fill its container (if any), keeping its aspect ratio.

This message can be sent to the client whenever the container changes sizes.

### :green_circle: `client.feed('rendering', boolean)`

Tells the client to start rendering the current scene in a loop.

Pass `false` to stop rendering.

### :yellow_circle: `client.feed('render')`

Renders a single frame once.

This command has no effect if the client is currently `rendering`.

### :green_circle: `client.feed('helper', helperName, a1, a2, a3, a4, a5)`

Runs a helper operation. The following helpers are available:

* :green_circle: `RenderVolumes (a1 = skeletonId, a2 = showSkeletonHelper)`
  * Renders the volumes at each joint, when volumes are set.
  * If `showSkeletonHelper` is `true`, also renders a `SkeletonHelper` from THREE to help visualize bones.
* :green_circle: `SetVolumeColor (a1 = skeletonId, a2 = jointId, a3 = color)`
  * Colorizes a volume of a skeleton.
  * Should only be used after volumes are rendered.
  * Pass `"*"` to `jointId` to colorize all volumes at once.

## WIP

This is a work in progress.
