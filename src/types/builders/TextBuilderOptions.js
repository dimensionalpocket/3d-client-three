/**
 * @typedef {object} TextBuilderOptions - options for building texts via three-mesh-ui.
 *
 * @property {id} id - Text ID
 * @property {number} fontId - ID of the font used, must be added to client first
 * 
 * BLOCK/TEXT ATTRIBUTES
 * https://github.com/felixmariotto/three-mesh-ui/wiki/API-documentation#attributes
 * 
 * @property {number} [offset]
 * 
 * BLOCK ATTRIBUTES
 * 
 * @property {number} [width] - Width of the block
 * @property {number} [height] - Height of the block
 * @property {number} [fontSize]
 * @property {number} [padding]
 * @property {number} [margin]
 * @property {string} [contentDirection] - "row", "column", "row-reverse", "column-reverse"
 * @property {string} [justifyContent] - "start", "end", "center", "space-between", "space-around", "space-evenly"
 * @property {string} [alignItems] "start", "end", "center", "stretch"
 * @property {number} [interLine]
 * @property {boolean} [hiddenOverflow]
 * 
 * BLOCK STYLE ATTRIBUTES
 * 
 * @property {string} [bestFit] - "none", "shrink", "grow", "auto"
 * @property {THREE.Color} [backgroundColor]
 * @property {number} [backgroundOpacity]
 * @property {string} [backgroundSize] - "stretch", "contain", "cover"
 * @property {THREE.Texture} [backgroundTexture]
 * @property {number} [borderRadius]
 * @property {number} [borderWidth]
 * @property {THREE.Color} [borderColor]
 * 
 * TEXT ATTRIBUTES
 * 
 * @property {string} content - Text content
 * @property {string} [fontKerning] - "none", "normal"
 * @property {number} [letterSpacing]
 * @property {string} [textAlign] - "left", "right", "center", "justify-left", "justify", "justify-right", "justify-center"
 * @property {string} [whiteSpace] - "normal", "pre-line", "pre-wrap", "pre", "nowrap"
 * @property {string} [breakOn]
 * 
 * TEXT STYLE
 * 
 * @property {THREE.Color} [fontColor]
 * @property {number} [fontOpacity]
 * @property {boolean} [fontSuperSampling]
 * 
 */
