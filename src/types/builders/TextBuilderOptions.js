/**
 * https://github.com/felixmariotto/three-mesh-ui/wiki/API-documentation#attributes
 *
 * @typedef {object} TextBuilderOptions - options for building texts via three-mesh-ui.
 *
 * @property {id} id - Text ID
 * @property {Array<TextContentBuilderOptions>} contents - Array of text contents
 * @property {Font} font - Font used
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
 * @property {THREE.Color} [backgroundColor]
 * @property {number} [backgroundOpacity]
 * @property {"stretch"|"contain"|"cover"} [backgroundSize]
 * @property {THREE.Texture} [backgroundTexture]
 * @property {number} [borderRadius]
 * @property {number} [borderWidth]
 * @property {THREE.Color} [borderColor]
 */

/**
 * @typedef {object} TextContentBuilderOptions - one text content that fits inside a box.
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
 * @property {THREE.Color} [fontColor]
 * @property {number} [fontOpacity]
 * @property {boolean} [fontSuperSampling]
 */
