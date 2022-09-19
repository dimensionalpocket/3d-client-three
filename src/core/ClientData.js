'use strict'

import { ClientAddCamera } from '../operations/ClientAddCamera.js'
import { ClientAddFont } from '../operations/ClientAddFont.js'
import { ClientAddLight } from '../operations/ClientAddLight.js'
import { ClientAddPoint } from '../operations/ClientAddPoint.js'
import { ClientAddPose } from '../operations/ClientAddPose.js'
import { ClientAddScene } from '../operations/ClientAddScene.js'
import { ClientAddSkeleton } from '../operations/ClientAddSkeleton.js'
import { ClientAddSkeletonDefinition } from '../operations/ClientAddSkeletonDefinition.js'
import { ClientAddSoundFile } from '../operations/ClientAddSoundFile.js'
import { ClientAddText } from '../operations/ClientAddText.js'
import { ClientAddTexture } from '../operations/ClientAddTexture.js'

export class ClientData {
  /**
   * @param {Client} client
   */
  constructor (client) {
    /** @type {Client} */
    this.client = client

    /** @type {Map<id,THREE.Object3D>} */
    this.points = new Map()

    /** @type {Map<id,SkeletonDefinition>} */
    this.skeletonDefinitions = new Map()

    /** @type {Map<id,Skeleton>} */
    this.skeletons = new Map()

    /** @type {Map<id,Pose>} */
    this.poses = new Map()

    /** @type {Map<id,THREE.Scene>} */
    this.scenes = new Map()

    /** @type {Map<id,THREE.Camera|THREE.PerspectiveCamera>} */
    this.cameras = new Map()

    /** @type {Map<id,THREE.Light>} */
    this.lights = new Map()

    /** @type {Map<id,ThreeMeshUiBlock>} */
    this.texts = new Map()

    /** @type {Map<id,THREE.Texture>} */
    this.textures = new Map()

    /** @type {Map<id,Font>} */
    this.fonts = new Map()

    /** @type {Map<id,SoundFile>} */
    this.soundFiles = new Map()
  }

  /**
   * @param {string} type
   * @param {any} data
   * @returns {boolean}
   */
  add (type, data) {
    if (type === 'skeleton') {
      return ClientAddSkeleton.run(this.client, data)
    }

    if (type === 'pose') {
      return ClientAddPose.run(this.client, data)
    }

    if (type === 'point') {
      return ClientAddPoint.run(this.client, data)
    }

    if (type === 'light') {
      return ClientAddLight.run(this.client, data)
    }

    if (type === 'skeleton-definition') {
      return ClientAddSkeletonDefinition.run(this.client, data)
    }

    if (type === 'camera') {
      return ClientAddCamera.run(this.client, data)
    }

    if (type === 'scene') {
      return ClientAddScene.run(this.client, data)
    }

    if (type === 'text') {
      return ClientAddText.run(this.client, data)
    }

    if (type === 'texture') {
      return ClientAddTexture.run(this.client, data)
    }

    if (type === 'font') {
      return ClientAddFont.run(this.client, data)
    }

    if (type === 'sound-file') {
      return ClientAddSoundFile.run(this.client, data)
    }

    throw new Error(`ClientData#add: unhandled object type ${type}`)
  }

  /**
   * @param {string} type
   * @returns {Map<id,any>}
   */
  getCollectionByType (type) {
    switch (type) {
      case 'point':
        return this.points
      case 'skeleton-definition':
        return this.skeletonDefinitions
      case 'skeleton':
        return this.skeletons
      case 'pose':
        return this.poses
      case 'light':
        return this.lights
      case 'camera':
        return this.cameras
      case 'scene':
        return this.scenes
      case 'text':
        return this.texts
      case 'texture':
        return this.textures
      case 'font':
        return this.fonts
    }

    throw new Error(`ClientData#getCollectionByType: invalid type ${type}`)
  }
}
