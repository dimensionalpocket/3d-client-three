'use strict'

import { expect } from '@dimensionalpocket/development'
import { ThreeClient } from '../index.js'
import { ThreeClient as ThreeClientFromSrc } from '../src/ThreeClient.js'

describe('main require', function () {
  it('exports ThreeClient from src', function () {
    expect(ThreeClient).to.equal(ThreeClientFromSrc)
  })
})
