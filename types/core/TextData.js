/**
 * https://github.com/felixmariotto/three-mesh-ui/wiki/API-documentation#attributes
 *
 * @typedef {object} TextData - options for building texts via three-mesh-ui.
 *
 * This is very similar to TextBuilderOptions, but it only holds raw data.
 * E.g., texture IDs instead of textures, color string instead of Color instances, etc.
 *
 * @property {id} id - Text ID
 * @property {Array<TextContentData>} contents - Array of text contents
 * @property {string} fontId - ID of the Font used; must be added to client first.
 *
 * @property {number} [width] - Width of the block
 * @property {number} [height] - Height of the block
 * @property {number} [fontSize]
 * @property {number} [padding]
 * @property {number} [margin]
 * @property {"row"|"column"|"row-reverse"|"column-reverse"} [contentDirection]
 * @property {"start"|"end"|"center"|"space-between"|"space-around"|"space-evenly"} [justifyContent]
 * @property {"start"|"end"|"center"|"stretch"} [alignItems]
 * @property {number} [interLine]
 * @property {boolean} [hiddenOverflow]
 *
 * @property {"none"|"shrink"|"grow"|"auto"} [bestFit]
 * @property {string} [backgroundColor]
 * @property {number} [backgroundOpacity]
 * @property {"stretch"|"contain"|"cover"} [backgroundSize]
 * @property {id} [backgroundTextureId]
 * @property {number} [borderRadius]
 * @property {number} [borderWidth]
 * @property {string} [borderColor]
 */

/**
 * @typedef {object} TextContentData - one text content that fits inside a box.
 *
 * @property {string} suffix - The suffix that will compose the unique ID of this text content.
 * @property {string} content
 *
 * @property {number} [offset]
 * @property {"none"|"normal"} [fontKerning]
 * @property {number} [letterSpacing]
 * @property {"left"|"right"|"center"|"justify-left"|"justify"|"justify-right"|"justify-center"} [textAlign]
 * @property {"normal"|"pre-line"|"pre-wrap"|"pre"|"nowrap"} [whiteSpace]
 * @property {string} [breakOn]
 *
 * @property {string} [fontColor]
 * @property {number} [fontOpacity]
 * @property {boolean} [fontSuperSampling]
 */
