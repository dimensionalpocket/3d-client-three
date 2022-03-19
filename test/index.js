'use strict'

import { expect } from '@dimensionalpocket/development'
import { GameClientThree } from '../index.js'
import { GameClientThree as GameClientThreeFromSrc } from '../src/GameClientThree.js'

describe('main require', function () {
  it('exports GameClientThree from src', function () {
    expect(GameClientThree).to.equal(GameClientThreeFromSrc)
  })
})
