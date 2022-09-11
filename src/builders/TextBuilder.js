'use strict'

import ThreeMeshUI from '../extensions/ThreeMeshUI.js'

export class TextBuilder {
  /**
   * Returns a new ThreeMeshUI.Block with the given options.
   *
   * @param {TextBuilderOptions} options
   * @returns {ThreeMeshUI.Block}
   */
  static run (options) {
    var id = options?.id

    if (!id) {
      throw new Error('TextBuilder: ID is required')
    }

    var contents = options.contents
    if (!Array.isArray(contents)) {
      throw new Error('TextBuilder: contents must be an array')
    }

    var block = new ThreeMeshUI.Block({
      width: options.width ?? 0.1,
      height: options.height ?? 0.1,
      fontSize: options.fontSize,
      padding: options.padding,
      margin: options.margin,
      contentDirection: options.contentDirection,
      justifyContent: options.justifyContent ?? 'center',
      alignItems: options.alignItems,
      interLine: options.interLine,
      hiddenOverflow: options.hiddenOverflow ?? false,
      bestFit: options.bestFit ?? 'none',
      backgroundColor: options.backgroundColor,
      backgroundOpacity: options.backgroundOpacity ?? 1.0,
      backgroundSize: options.backgroundSize,
      backgroundTexture: options.backgroundTexture,
      borderRadius: options.borderRadius,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor,

      // options.font is a Font object that's been loaded into ThreeMeshUi's FontLibrary.
      // Only reference the font ID on both family and texture to load from library.
      fontFamily: options.font.id,
      fontTexture: options.font.id
    })

    // @ts-ignore - Block is an extension of Object3D, but has several mixins that TS chokes on
    block.name = '' + id

    for (let content of contents) {
      let text = new ThreeMeshUI.Text({
        content: content.content,
        offset: content.offset,
        fontKerning: content.fontKerning,
        letterSpacing: content.letterSpacing ?? 1.0,
        textAlign: content.textAlign ?? 'center',
        whiteSpace: content.whiteSpace,
        breakOn: content.breakOn,
        fontColor: content.fontColor,
        fontOpacity: content.fontOpacity ?? 1.0,
        fontSuperSampling: content.fontSuperSampling ?? true
      })

      // @ts-ignore
      text.name = block.name + content.suffix

      // @ts-ignore >_>
      block.add(text)
    }

    return block
  }
}
