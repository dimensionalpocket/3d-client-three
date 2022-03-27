/**
 * (TODO)
 * REQUIRING/IMPORTING THIS FILE WILL CREATE A human.json FILE IN THE SAME FOLDER.
 * CODE WILL RELY ON THE JSON FILE AS OPPOSED TO THIS ONE.
 * THIS IS TO AVOID THIS ENTIRE FILE BEING CACHED IN APPLICATION CODE.
 * THIS FILE SHOULD NOT BE IMPORTED BY PRODUCTION CODE.
 * THIS FILE IS IMPORTED DURING TESTS TO GENERATE THE JSON FILE.
 * THE JSON FILE SHOULD BE COMMITED TO THE REPO.
 */

'use strict'

// import fs from 'fs'

// Uncomment the block below when the default workflow sets NODE_ENV=test.
// if (process.env.NODE_ENV !== 'test') {
//   throw new Error('human.js included outside tests')
// }

// DIMENSIONS

// Directions reference, from character POV:
// - left +x, right -x
// - front +z, back -z

const EIGHT_HEADS = 1.80 // m
const ONE_HEAD = EIGHT_HEADS / 8

// Main blocks

const HEAD_HEIGHT = ONE_HEAD * 1.08
const HEAD_WIDTH = ONE_HEAD * 0.8
const HEAD_DEPTH = ONE_HEAD * 0.8

const NECK_HEIGHT = ONE_HEAD / 2
const NECK_WIDTH = 0.12
const NECK_DEPTH = 0.10

const CHEST_HEIGHT = ONE_HEAD / 1
const CHEST_WIDTH = ONE_HEAD * 1.6
const CHEST_DEPTH = ONE_HEAD * 0.6

const ABDOMEN_HEIGHT = ONE_HEAD / 2
const ABDOMEN_WIDTH = ONE_HEAD * 0.8
const ABDOMEN_DEPTH = CHEST_DEPTH * 0.8

const WAIST_HEIGHT = ONE_HEAD / 2
const WAIST_WIDTH = ONE_HEAD * 1.4
const WAIST_DEPTH = ONE_HEAD * 0.5

// Arms

const SHOULDER_DEPTH = CHEST_DEPTH * 0.8
const SHOULDER_HEIGHT = CHEST_HEIGHT / 2
const SHOULDER_WIDTH = SHOULDER_DEPTH
const SHOULDER_OFFSET_X = CHEST_WIDTH / 2
const SHOULDER_OFFSET_Y = CHEST_HEIGHT - (SHOULDER_HEIGHT / 2)

const ARM_UPPER_HEIGHT = ONE_HEAD * 0.8
const ARM_UPPER_WIDTH = SHOULDER_WIDTH * 0.9
const ARM_UPPER_DEPTH = SHOULDER_DEPTH * 0.9
const ARM_UPPER_OFFSET_X = SHOULDER_WIDTH / 2
const ARM_UPPER_OFFSET_Y = SHOULDER_HEIGHT / 2

const ARM_LOWER_HEIGHT = ARM_UPPER_HEIGHT + (SHOULDER_HEIGHT * 0.5)
const ARM_LOWER_WIDTH = ARM_UPPER_WIDTH
const ARM_LOWER_DEPTH = ARM_UPPER_DEPTH

// Legs

const LEG_UPPER_HEIGHT = ONE_HEAD * 2 // till bottom of knee
const LEG_UPPER_WIDTH = ONE_HEAD / 1.8
const LEG_UPPER_DEPTH = WAIST_DEPTH

const LEG_LOWER_HEIGHT = LEG_UPPER_HEIGHT
const LEG_LOWER_WIDTH = LEG_UPPER_WIDTH
const LEG_LOWER_DEPTH = LEG_UPPER_DEPTH

const LEG_OFFSET = ONE_HEAD / 2.5

const FOOT_HEIGHT = ONE_HEAD / 2
const FOOT_WIDTH = ONE_HEAD / 1.5
const FOOT_DEPTH = ONE_HEAD / 1.5

const TOES_HEIGHT = FOOT_HEIGHT / 2.5
const TOES_WIDTH = FOOT_WIDTH * 0.8
const TOES_DEPTH = FOOT_DEPTH / 1.2

// Hands

const HAND_SCALE = 1

const PALM_HEIGHT = (ONE_HEAD / 1.8) * HAND_SCALE
const PALM_WIDTH = ARM_LOWER_WIDTH * 1.2 * HAND_SCALE
const PALM_DEPTH = ARM_LOWER_DEPTH * 0.3 * HAND_SCALE

const FINGER_BASE_HEIGHT = PALM_HEIGHT * 0.35
const FINGER_MID_HEIGHT = PALM_HEIGHT * 0.35
const FINGER_TIP_HEIGHT = PALM_HEIGHT * 0.3
const FINGER_WIDTH = PALM_WIDTH / 4
const FINGER_DEPTH = PALM_DEPTH

const THUMB_HEIGHT_SCALE = 1.2
const THUMB_DEPTH = FINGER_DEPTH
const THUMB_WIDTH = FINGER_WIDTH * 1.2
const THUMB_OFFSET_X = PALM_WIDTH / 2
const THUMB_BASE_HEIGHT = FINGER_BASE_HEIGHT * THUMB_HEIGHT_SCALE
const THUMB_MID_HEIGHT = FINGER_MID_HEIGHT * THUMB_HEIGHT_SCALE
const THUMB_TIP_HEIGHT = FINGER_TIP_HEIGHT * THUMB_HEIGHT_SCALE

const INDEX_HEIGHT_SCALE = 0.93
const INDEX_WIDTH = FINGER_WIDTH
const INDEX_DEPTH = FINGER_DEPTH
const INDEX_OFFSET_X = (PALM_WIDTH / 2) - (INDEX_WIDTH / 2)
const INDEX_BASE_HEIGHT = FINGER_BASE_HEIGHT * INDEX_HEIGHT_SCALE
const INDEX_MID_HEIGHT = FINGER_MID_HEIGHT * INDEX_HEIGHT_SCALE
const INDEX_TIP_HEIGHT = FINGER_TIP_HEIGHT * INDEX_HEIGHT_SCALE

const MIDDLE_HEIGHT_SCALE = 1
const MIDDLE_WIDTH = FINGER_WIDTH
const MIDDLE_DEPTH = FINGER_DEPTH
const MIDDLE_OFFSET_X = (PALM_WIDTH / 2) - INDEX_WIDTH - (MIDDLE_WIDTH / 2)
const MIDDLE_BASE_HEIGHT = FINGER_BASE_HEIGHT * MIDDLE_HEIGHT_SCALE
const MIDDLE_MID_HEIGHT = FINGER_MID_HEIGHT * MIDDLE_HEIGHT_SCALE
const MIDDLE_TIP_HEIGHT = FINGER_TIP_HEIGHT * MIDDLE_HEIGHT_SCALE

const RING_HEIGHT_SCALE = 0.90
const RING_WIDTH = FINGER_WIDTH
const RING_DEPTH = FINGER_DEPTH
const RING_OFFSET_X = -RING_WIDTH / 2
const RING_BASE_HEIGHT = FINGER_BASE_HEIGHT * RING_HEIGHT_SCALE
const RING_MID_HEIGHT = FINGER_MID_HEIGHT * RING_HEIGHT_SCALE
const RING_TIP_HEIGHT = FINGER_TIP_HEIGHT * RING_HEIGHT_SCALE

const PINKY_HEIGHT_SCALE = 0.7
const PINKY_WIDTH = FINGER_WIDTH
const PINKY_DEPTH = FINGER_DEPTH
const PINKY_OFFSET_X = -RING_WIDTH - (PINKY_WIDTH / 2)
const PINKY_BASE_HEIGHT = FINGER_BASE_HEIGHT * PINKY_HEIGHT_SCALE
const PINKY_MID_HEIGHT = FINGER_MID_HEIGHT * PINKY_HEIGHT_SCALE
const PINKY_TIP_HEIGHT = FINGER_TIP_HEIGHT * PINKY_HEIGHT_SCALE

// JOINT VOLUMES

/** @type {Map<string,JointVolumeData>} */
const volumes = new Map()

volumes.set('root', { scale: { x: 0.01, y: 0.01, z: 0.5 }, translation: { y: 0.0049 }, color: 'red' })
volumes.set('head', { scale: { x: HEAD_WIDTH, y: HEAD_HEIGHT, z: HEAD_DEPTH }, translation: { y: HEAD_HEIGHT / 2 }, color: 'magenta' })
volumes.set('neck', { scale: { x: NECK_WIDTH, y: NECK_HEIGHT, z: NECK_DEPTH }, translation: { y: NECK_HEIGHT / 2 }, color: 'cyan' })
volumes.set('shoulderL', { scale: { x: ARM_UPPER_WIDTH, y: ARM_UPPER_WIDTH, z: ARM_UPPER_WIDTH }, translation: { x: SHOULDER_OFFSET_X }, color: 'cyan' })
volumes.set('shoulderR', { scale: { x: ARM_UPPER_WIDTH, y: ARM_UPPER_WIDTH, z: ARM_UPPER_WIDTH }, translation: { x: -SHOULDER_OFFSET_X }, color: 'cyan' })
volumes.set('chest', { scale: { x: CHEST_WIDTH, y: CHEST_HEIGHT, z: CHEST_DEPTH }, translation: { y: CHEST_HEIGHT / 2 }, color: 'magenta' })
volumes.set('abs', { scale: { x: ABDOMEN_WIDTH, y: ABDOMEN_HEIGHT, z: ABDOMEN_DEPTH }, translation: { y: ABDOMEN_HEIGHT / 2 }, color: 'cyan' })
volumes.set('waist', { scale: { x: WAIST_WIDTH, y: WAIST_HEIGHT, z: WAIST_DEPTH }, translation: { y: -WAIST_HEIGHT / 2 }, color: 'lime' })
volumes.set('upperLeg', { scale: { x: LEG_UPPER_WIDTH, y: LEG_UPPER_HEIGHT, z: LEG_UPPER_DEPTH }, translation: { y: -LEG_UPPER_HEIGHT / 2 }, color: 'red' })
volumes.set('lowerLeg', { scale: { x: LEG_LOWER_WIDTH, y: LEG_LOWER_HEIGHT, z: LEG_LOWER_DEPTH }, translation: { y: -LEG_LOWER_HEIGHT / 2 }, color: 'cyan' })
volumes.set('foot', { scale: { x: FOOT_WIDTH, y: FOOT_HEIGHT, z: FOOT_DEPTH }, translation: { y: -FOOT_HEIGHT / 2 }, color: 'yellow' })
volumes.set('toes', { scale: { x: TOES_WIDTH, y: TOES_HEIGHT, z: TOES_DEPTH }, translation: { y: TOES_HEIGHT / 2, z: TOES_DEPTH / 2 }, color: 'yellow' })
volumes.set('upperArm', { scale: { x: ARM_UPPER_WIDTH, y: ARM_UPPER_HEIGHT, z: ARM_UPPER_DEPTH }, translation: { y: -ARM_UPPER_HEIGHT / 2 }, color: 'red' })
volumes.set('lowerArm', { scale: { x: ARM_LOWER_WIDTH, y: ARM_LOWER_HEIGHT, z: ARM_LOWER_DEPTH }, translation: { y: -ARM_LOWER_HEIGHT / 2 }, color: 'cyan' })
volumes.set('palm', { scale: { x: PALM_WIDTH, y: PALM_HEIGHT, z: PALM_DEPTH }, translation: { y: -PALM_HEIGHT / 2 }, color: 'yellow' })
volumes.set('thumbBase', { scale: { x: THUMB_WIDTH, y: THUMB_BASE_HEIGHT, z: THUMB_DEPTH }, translation: { y: -THUMB_BASE_HEIGHT / 2 }, color: 'yellow' })
volumes.set('thumbMid', { scale: { x: THUMB_WIDTH, y: THUMB_MID_HEIGHT, z: THUMB_DEPTH }, translation: { y: -THUMB_MID_HEIGHT / 2 }, color: 'yellow' })
volumes.set('thumbTip', { scale: { x: THUMB_WIDTH, y: THUMB_TIP_HEIGHT, z: THUMB_DEPTH }, translation: { y: -THUMB_TIP_HEIGHT / 2 }, color: 'yellow' })
volumes.set('indexBase', { scale: { x: INDEX_WIDTH, y: INDEX_BASE_HEIGHT, z: INDEX_DEPTH }, translation: { y: -INDEX_BASE_HEIGHT / 2 }, color: 'yellow' })
volumes.set('indexMid', { scale: { x: INDEX_WIDTH, y: INDEX_MID_HEIGHT, z: INDEX_DEPTH }, translation: { y: -INDEX_MID_HEIGHT / 2 }, color: 'yellow' })
volumes.set('indexTip', { scale: { x: INDEX_WIDTH, y: INDEX_TIP_HEIGHT, z: INDEX_DEPTH }, translation: { y: -INDEX_TIP_HEIGHT / 2 }, color: 'yellow' })
volumes.set('middleBase', { scale: { x: MIDDLE_WIDTH, y: MIDDLE_BASE_HEIGHT, z: MIDDLE_DEPTH }, translation: { y: -MIDDLE_BASE_HEIGHT / 2 }, color: 'yellow' })
volumes.set('middleMid', { scale: { x: MIDDLE_WIDTH, y: MIDDLE_MID_HEIGHT, z: MIDDLE_DEPTH }, translation: { y: -MIDDLE_MID_HEIGHT / 2 }, color: 'yellow' })
volumes.set('middleTip', { scale: { x: MIDDLE_WIDTH, y: MIDDLE_TIP_HEIGHT, z: MIDDLE_DEPTH }, translation: { y: -MIDDLE_TIP_HEIGHT / 2 }, color: 'yellow' })
volumes.set('ringBase', { scale: { x: RING_WIDTH, y: RING_BASE_HEIGHT, z: RING_DEPTH }, translation: { y: -RING_BASE_HEIGHT / 2 }, color: 'yellow' })
volumes.set('ringMid', { scale: { x: RING_WIDTH, y: RING_MID_HEIGHT, z: RING_DEPTH }, translation: { y: -RING_MID_HEIGHT / 2 }, color: 'yellow' })
volumes.set('ringTip', { scale: { x: RING_WIDTH, y: RING_TIP_HEIGHT, z: RING_DEPTH }, translation: { y: -RING_TIP_HEIGHT / 2 }, color: 'yellow' })
volumes.set('pinkyBase', { scale: { x: PINKY_WIDTH, y: PINKY_BASE_HEIGHT, z: PINKY_DEPTH }, translation: { y: -PINKY_BASE_HEIGHT / 2 }, color: 'yellow' })
volumes.set('pinkyMid', { scale: { x: PINKY_WIDTH, y: PINKY_MID_HEIGHT, z: PINKY_DEPTH }, translation: { y: -PINKY_MID_HEIGHT / 2 }, color: 'yellow' })
volumes.set('pinkyTip', { scale: { x: PINKY_WIDTH, y: PINKY_TIP_HEIGHT, z: PINKY_DEPTH }, translation: { y: -PINKY_TIP_HEIGHT / 2 }, color: 'yellow' })

/** @type {Array<JointDefinitionData>} */
export const HUMAN_SKELETON_JOINTS = [
  // The root joint is only used for positioning and rotation outside poses.
  { id: '_', volume: volumes.get('root') },

  // The center joint is used to rotate the entire body in a pose.
  { id: 'Cn', parent: '_', position: { y: WAIST_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } },

  // Upper and Lower bodies can be rotated independently.
  { id: 'U', parent: 'Cn', volume: volumes.get('abs') },
  { id: 'L', parent: 'Cn', volume: volumes.get('waist') },

  // Hips
  { id: 'lH', parent: 'L', position: { x: LEG_OFFSET, y: -WAIST_HEIGHT }, volume: volumes.get('upperLeg') },
  { id: 'rH', parent: 'L', position: { x: -LEG_OFFSET, y: -WAIST_HEIGHT }, volume: volumes.get('upperLeg') },

  // Knees
  { id: 'lKn', parent: 'lH', position: { y: -LEG_UPPER_HEIGHT }, volume: volumes.get('lowerLeg') },
  { id: 'rKn', parent: 'rH', position: { y: -LEG_UPPER_HEIGHT }, volume: volumes.get('lowerLeg') },

  // Ankles
  { id: 'lAn', parent: 'lKn', position: { y: -LEG_LOWER_HEIGHT }, volume: volumes.get('foot') },
  { id: 'rAn', parent: 'rKn', position: { y: -LEG_LOWER_HEIGHT }, volume: volumes.get('foot') },

  // Toes
  { id: 'lT', parent: 'lAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: volumes.get('toes') },
  { id: 'rT', parent: 'rAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: volumes.get('toes') },

  // Spine (Stomach)
  { id: 'S', parent: 'U', position: { y: ABDOMEN_HEIGHT }, volume: volumes.get('chest') },

  // Neck (Base)
  { id: 'N', parent: 'S', position: { y: CHEST_HEIGHT }, volume: volumes.get('neck') },

  // Head (Upper Neck)
  { id: 'H', parent: 'N', position: { y: NECK_HEIGHT }, volume: volumes.get('head') },

  // Clavicles
  { id: 'lC', parent: 'S', position: { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down', volume: volumes.get('shoulderL') },
  { id: 'rC', parent: 'S', position: { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down', volume: volumes.get('shoulderR') },

  // Shouders
  { id: 'lS', parent: 'lC', position: { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: volumes.get('upperArm') },
  { id: 'rS', parent: 'rC', position: { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: volumes.get('upperArm') },

  // Elbows
  { id: 'lE', parent: 'lS', position: { y: -ARM_UPPER_HEIGHT }, volume: volumes.get('lowerArm') },
  { id: 'rE', parent: 'rS', position: { y: -ARM_UPPER_HEIGHT }, volume: volumes.get('lowerArm') },

  // Wrists
  { id: 'lW', parent: 'lE', position: { y: -ARM_LOWER_HEIGHT }, volume: volumes.get('palm') },
  { id: 'rW', parent: 'rE', position: { y: -ARM_LOWER_HEIGHT }, volume: volumes.get('palm') },

  // Finger Joint Positions:
  // [B]ase, [M]iddle, [T]ip

  /* Thumbs */
  { id: 'lTB', parent: 'lW', position: { x: THUMB_OFFSET_X }, volume: volumes.get('thumbBase') },
  { id: 'lTM', parent: 'lTB', position: { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: volumes.get('thumbMid') },
  { id: 'lTT', parent: 'lTM', position: { y: -THUMB_MID_HEIGHT }, volume: volumes.get('thumbTip') },
  { id: 'rTB', parent: 'rW', position: { x: -THUMB_OFFSET_X }, volume: volumes.get('thumbBase') },
  { id: 'rTM', parent: 'rTB', position: { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: volumes.get('thumbMid') },
  { id: 'rTT', parent: 'rTM', position: { y: -THUMB_MID_HEIGHT }, volume: volumes.get('thumbTip') },

  /* Index */
  { id: 'lIB', parent: 'lW', position: { x: INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('indexBase') },
  { id: 'lIM', parent: 'lIB', position: { y: -INDEX_BASE_HEIGHT }, volume: volumes.get('indexMid') },
  { id: 'lIT', parent: 'lIM', position: { y: -INDEX_MID_HEIGHT }, volume: volumes.get('indexTip') },
  { id: 'rIB', parent: 'rW', position: { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('indexBase') },
  { id: 'rIM', parent: 'rIB', position: { y: -INDEX_BASE_HEIGHT }, volume: volumes.get('indexMid') },
  { id: 'rIT', parent: 'rIM', position: { y: -INDEX_MID_HEIGHT }, volume: volumes.get('indexTip') },

  /* Middle */
  { id: 'lMB', parent: 'lW', position: { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('middleBase') },
  { id: 'lMM', parent: 'lMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: volumes.get('middleMid') },
  { id: 'lMT', parent: 'lMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: volumes.get('middleTip') },
  { id: 'rMB', parent: 'rW', position: { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('middleBase') },
  { id: 'rMM', parent: 'rMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: volumes.get('middleMid') },
  { id: 'rMT', parent: 'rMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: volumes.get('middleTip') },

  /* Ring */
  { id: 'lRB', parent: 'lW', position: { x: RING_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('ringBase') },
  { id: 'lRM', parent: 'lRB', position: { y: -RING_BASE_HEIGHT }, volume: volumes.get('ringMid') },
  { id: 'lRT', parent: 'lRM', position: { y: -RING_MID_HEIGHT }, volume: volumes.get('ringTip') },
  { id: 'rRB', parent: 'rW', position: { x: -RING_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('ringBase') },
  { id: 'rRM', parent: 'rRB', position: { y: -RING_BASE_HEIGHT }, volume: volumes.get('ringMid') },
  { id: 'rRT', parent: 'rRM', position: { y: -RING_MID_HEIGHT }, volume: volumes.get('ringTip') },

  /* Pinky */
  { id: 'lPB', parent: 'lW', position: { x: PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('pinkyBase') },
  { id: 'lPM', parent: 'lPB', position: { y: -PINKY_BASE_HEIGHT }, volume: volumes.get('pinkyMid') },
  { id: 'lPT', parent: 'lPM', position: { y: -PINKY_MID_HEIGHT }, volume: volumes.get('pinkyTip') },
  { id: 'rPB', parent: 'rW', position: { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: volumes.get('pinkyBase') },
  { id: 'rPM', parent: 'rPB', position: { y: -PINKY_BASE_HEIGHT }, volume: volumes.get('pinkyMid') },
  { id: 'rPT', parent: 'rPM', position: { y: -PINKY_MID_HEIGHT }, volume: volumes.get('pinkyTip') }
]

// fs.writeFileSync('./human.json', JSON.stringify(HUMAN_SKELETON_JOINTS, null, 2))
