'use strict'

import { Color } from 'three'
import { TextBuilder } from '../builders/TextBuilder.js'
import ThreeMeshUI from '../extensions/ThreeMeshUI.js'

export class ClientAddText {
  /**
   * @param {Client} client
   * @param {TextData} data
   * @returns {boolean}
   */
  static run (client, data) {
    const clientData = client.data
    const backgroundTexture = data.backgroundTextureId ? clientData.textures.get(data.backgroundTextureId) : undefined
    const font = clientData.fonts.get(data.fontId)

    if (!font) {
      throw new Error(`ClientAddText: font not loaded: ${data.fontId}`)
    }

    const contents = data.contents.map(c => {
      return {
        suffix: c.suffix,
        content: c.content,
        offset: c.offset,
        fontKerning: c.fontKerning,
        letterSpacing: c.letterSpacing,
        textAlign: c.textAlign,
        whiteSpace: c.whiteSpace,
        breakOn: c.breakOn,
        fontColor: new Color(c.fontColor),
        fontOpacity: c.fontOpacity,
        fontSuperSampling: c.fontSuperSampling
      }
    })

    var text = TextBuilder.run({
      id: data.id,
      contents: contents,
      width: data.width,
      height: data.height,
      fontSize: data.fontSize,
      padding: data.padding,
      margin: data.margin,
      contentDirection: data.contentDirection,
      justifyContent: data.justifyContent,
      alignItems: data.alignItems,
      interLine: data.interLine,
      hiddenOverflow: data.hiddenOverflow,
      bestFit: data.bestFit,
      backgroundColor: new Color(data.backgroundColor),
      backgroundOpacity: data.backgroundOpacity,
      backgroundSize: data.backgroundSize,
      backgroundTexture: backgroundTexture,
      borderRadius: data.borderRadius,
      borderWidth: data.borderWidth,
      borderColor: new Color(data.borderColor),
      font: font
    })

    // @ts-ignore text.name
    client.data.texts.set(text.name, text)

    ThreeMeshUI.update()

    return true
  }
}
