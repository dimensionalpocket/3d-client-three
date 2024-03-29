'use strict'

import { ClientAttach } from './ClientAttach.js'
import { ClientFillContainer } from './ClientFillContainer.js'
import { ClientPlaySound } from './ClientPlaySound.js'
import { ClientPose } from './ClientPose.js'
import { ClientPosition } from './ClientPosition.js'
import { ClientRendering } from './ClientRendering.js'
import { ClientRenderOnce } from './ClientRenderOnce.js'
import { ClientRotate } from './ClientRotate.js'
import { ClientRotationOrder } from './ClientRotationOrder.js'
import { ClientRunHelper } from './ClientRunHelper.js'
import { ClientSetAspectRatio } from './ClientSetAspectRatio.js'
import { ClientSetCamera } from './ClientSetCamera.js'
import { ClientSetFrame } from './ClientSetFrame.js'
import { ClientSetScene } from './ClientSetScene.js'

export class ClientFeed {
  /**
   * @param {Client} client
   * @param {string|number} command
   * @param {any} [a1]
   * @param {any} [a2]
   * @param {any} [a3]
   * @param {any} [a4]
   * @param {any} [a5]
   * @param {any} [a6]
   *
   * @returns {boolean}
   */
  static run (client, command, a1 = null, a2 = null, a3 = null, a4 = null, a5 = null, a6 = null) {
    // If the command is just a number, it's a bare frame update.
    if (Number.isInteger(command)) {
      // @ts-ignore - TS ignores condition above
      return ClientSetFrame.run(client, command)
    }

    // String commands are manually sorted by priority.
    switch (command) {
      case 'frame': return ClientSetFrame.run(
        client,
        a1, // frame number
        a2 // message array
      )

      case 'position': return ClientPosition.run(
        client,
        a1, // object type
        a2, // object id
        a3, // x
        a4, // y
        a5 // z
      )

      case 'rotate': return ClientRotate.run(
        // @ts-ignore - Requires THREE client
        client,
        a1, // object type
        a2, // object id
        a3, // x
        a4, // y
        a5, // z
        a6 // order
      )

      case 'pose': return ClientPose.run(
        client,
        a1, // pose id
        a2 // skeleton id
      )

      case 'sound': return ClientPlaySound.run(
        client,
        a1, // sound ID,
        a2 // playing state
      )

      case 'add' : return client.data.add(
        a1, // object type
        a2 // object id
      )

      case 'attach': return ClientAttach.run(
        // @ts-ignore - Requires THREE client
        client,
        a1, // child type
        a2, // child id
        a3, // parent type
        a4 // parent id
      )

      case 'rotation-order': return ClientRotationOrder.run(
        // @ts-ignore - Requires THREE client
        client,
        a1, // object type
        a2, // object id
        a3 // order
      )

      case 'camera': return ClientSetCamera.run(
        client,
        a1 // camera ID
      )

      case 'scene': return ClientSetScene.run(
        client,
        a1 // scene ID
      )

      case 'rendering': return ClientRendering.run(
        client,
        a1
      )

      // @ts-ignore - Requires THREE client
      case 'render': return ClientRenderOnce.run(client)

      case 'aspect-ratio': return ClientSetAspectRatio.run(
        // @ts-ignore - Requires THREE client
        client,
        a1 // ratio
      )

      // @ts-ignore - Requires THREE client
      case 'fill-container': return ClientFillContainer.run(client)

      case 'helper': return ClientRunHelper.run(
        // @ts-ignore - Requires THREE client
        client,
        a1, // helper name
        a2, a3, a4, a5, a6 // helper arguments
      )
    }

    throw new Error(`Client#feed: unhandled command ${command} (${a1}, ${a2}, ${a3}, ${a4}, ${a5}, ${a6})`)
  }
}
