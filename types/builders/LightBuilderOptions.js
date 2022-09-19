/**
 * @typedef {object} LightBuilderOptions - options for building THREE Lights.
 *
 * @property {id} id - Light ID.
 * @property {'ambient' | 'directional' | 'point' | 'spot'} type - Light type.
 * @property {string} [color] - Light color.
 * @property {number} [intensity] - A number between 0 and 1.
 * @property {number} [distance] - Distance for point and spot lights.
 * @property {number} [decay] - Decay for point and spot lights.
 * @property {number} [angle] - Angle for spot lights.
 * @property {number} [penumbra] - Penumbra for spot lights.
 *
 * @property {LightShadowOptions} [shadows] - Enables shadow options for the light.
 */
