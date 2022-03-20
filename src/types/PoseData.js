/**
 * @typedef {object} PoseData
 *
 * @property {id} id - ID of the pose
 * @property {string} skeleton - SkeletonDefinition ID to use; required
 * @property {Array<JointTransformData>} transforms - An array of object literals for creating joint transforms
 * @property {boolean} [clear] - When `true`, will reset the skeleton pose before applying transforms
 */
